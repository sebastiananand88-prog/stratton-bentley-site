import type { VercelRequest, VercelResponse } from "@vercel/node";

export default function handler(req: VercelRequest, res: VercelResponse) {
  res.status(200).json({
    ok: true,
    hasApiKey: Boolean(process.env.ANTHROPIC_API_KEY),
    node: process.version,
  });
}
