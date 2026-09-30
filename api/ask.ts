import type { VercelRequest, VercelResponse } from "@vercel/node";
import Anthropic from "@anthropic-ai/sdk";
import { FAQ_CATEGORIES } from "../client/src/lib/faqData";

const MAX_QUESTION_LENGTH = 400;

function buildKnowledgeBase(): string {
  return FAQ_CATEGORIES.map((category) => {
    const items = category.items.map((item) => `Q: ${item.q}\nA: ${item.a}`).join("\n\n");
    return `## ${category.category}\n\n${items}`;
  }).join("\n\n");
}

const SYSTEM_PROMPT = `You are the website assistant for Stratton Opticians, an independent optician in Billericay, Essex (sister practice: Bentley Opticians, Leigh-on-Sea).

Answer patient questions using ONLY the information below. Do not use outside knowledge, and do not guess.

Rules:
- Keep answers short: 2-4 sentences.
- Friendly, clear, professional tone -- no jargon.
- Never give a diagnosis, personal clinical advice, or comment on someone's specific prescription or eye condition. For anything specific to the person asking, tell them to book an eye examination or contact the practice directly (phone 01277 650584, or the Contact page).
- If the question isn't covered by the information below, say you don't have that information and suggest they contact the practice directly -- don't make something up.
- Don't mention that you are an AI, a language model, or that you're working from a "knowledge base" -- just answer naturally as the practice's website assistant.

Practice information:

${buildKnowledgeBase()}`;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const question = typeof req.body?.question === "string" ? req.body.question.trim() : "";

  if (!question) {
    res.status(400).json({ error: "Please enter a question." });
    return;
  }

  if (question.length > MAX_QUESTION_LENGTH) {
    res.status(400).json({ error: "That question is a bit long -- could you shorten it?" });
    return;
  }

  if (!process.env.ANTHROPIC_API_KEY) {
    res.status(500).json({ error: "The AI assistant isn't configured yet. Please contact us directly." });
    return;
  }

  try {
    const client = new Anthropic();
    const response = await client.messages.create({
      model: "claude-opus-5",
      max_tokens: 500,
      system: SYSTEM_PROMPT,
      messages: [{ role: "user", content: question }],
    });

    let answer = "";
    for (const block of response.content) {
      if (block.type === "text") {
        answer = block.text.trim();
        break;
      }
    }

    if (!answer) {
      res.status(502).json({ error: "Sorry, something went wrong generating an answer. Please try again." });
      return;
    }

    res.status(200).json({ answer });
  } catch (error) {
    console.error("AI ask error:", error);
    res.status(502).json({ error: "Sorry, something went wrong. Please try again or contact us directly." });
  }
}
