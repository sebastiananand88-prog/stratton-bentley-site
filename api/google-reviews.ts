import type { VercelRequest, VercelResponse } from "@vercel/node";

/**
 * Fetches the practice's live Google rating and review count via the Places API (New).
 * Requires two Vercel environment variables:
 *   GOOGLE_PLACES_API_KEY -- a Google Cloud API key with the "Places API (New)" enabled
 *   GOOGLE_PLACE_ID       -- the Place ID for Stratton Opticians' Google Business listing
 *
 * Cached at the edge for a day (Cache-Control below) so this costs at most a handful of
 * Places API calls per day regardless of site traffic, well within Google's free monthly credit.
 */
export default async function handler(req: VercelRequest, res: VercelResponse) {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    res.status(200).json({ configured: false });
    return;
  }

  try {
    const response = await fetch(`https://places.googleapis.com/v1/places/${placeId}`, {
      headers: {
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": "rating,userRatingCount,googleMapsUri",
      },
    });

    if (!response.ok) {
      console.error("Google Places API error:", response.status, await response.text());
      res.status(200).json({ configured: true, ok: false });
      return;
    }

    const data = (await response.json()) as {
      rating?: number;
      userRatingCount?: number;
      googleMapsUri?: string;
    };

    res.setHeader("Cache-Control", "public, s-maxage=86400, stale-while-revalidate=43200");
    res.status(200).json({
      configured: true,
      ok: true,
      rating: data.rating ?? null,
      reviewCount: data.userRatingCount ?? null,
      mapsUrl: data.googleMapsUri ?? null,
    });
  } catch (error) {
    console.error("Google Places fetch failed:", error);
    res.status(200).json({ configured: true, ok: false });
  }
}
