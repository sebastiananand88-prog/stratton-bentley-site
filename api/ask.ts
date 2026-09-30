import type { VercelRequest, VercelResponse } from "@vercel/node";
import Anthropic from "@anthropic-ai/sdk";
import { buildKnowledgeBase } from "./_lib/knowledge";

const MAX_QUESTION_LENGTH = 400;

const SYSTEM_PROMPT = `You are an AI assistant answering questions on the Stratton Opticians website, an independent optician in Billericay, Essex (sister practice: Bentley Opticians, Leigh-on-Sea).

Answer patient questions using ONLY the information below. Do not use outside knowledge, and do not guess.

Rules:
- Keep answers short: 2-4 sentences.
- Friendly, clear, professional tone -- no jargon.
- Never give a diagnosis, personal clinical advice, or comment on someone's specific prescription or eye condition. For anything specific to the person asking, tell them to book an eye examination or contact the practice directly (phone 01277 650584, or the Contact page).
- If the question isn't covered by the information below, say you don't have that information and suggest they contact the practice directly -- don't make something up.
- If asked whether you're an AI, a bot, or a real person: be straightforward and confirm you're an AI assistant, trained to answer from this practice's website content.
- For questions about privacy, cookies, or data handling, don't try to answer from memory -- point them to the Privacy Policy (/privacy-policy) or Cookie Policy (/cookie-policy) pages instead, since you don't have their exact wording.

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
