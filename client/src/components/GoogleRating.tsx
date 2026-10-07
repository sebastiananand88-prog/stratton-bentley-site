import { useEffect, useState } from "react";
import { Star } from "lucide-react";

interface ReviewsResponse {
  configured: boolean;
  ok?: boolean;
  rating?: number | null;
  reviewCount?: number | null;
  mapsUrl?: string | null;
}

interface GoogleRatingProps {
  starClassName?: string;
  labelClassName?: string;
  subLabelClassName?: string;
}

/**
 * Shows the practice's live Google rating and review count, fetched from /api/google-reviews.
 * Deliberately falls back to no specific number (just "Google Rating") rather than ever
 * guessing or showing a stale figure, until GOOGLE_PLACES_API_KEY / GOOGLE_PLACE_ID are set
 * in Vercel's environment variables.
 */
export default function GoogleRating({
  starClassName = "w-3 h-3 fill-[#C9A96E] text-[#C9A96E]",
  labelClassName = "text-[#F8F4EF] text-sm font-semibold",
  subLabelClassName = "text-[#F8F4EF]/50 text-xs",
}: GoogleRatingProps) {
  const [data, setData] = useState<ReviewsResponse | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/google-reviews")
      .then((res) => res.json())
      .then((json: ReviewsResponse) => {
        if (!cancelled) setData(json);
      })
      .catch(() => {
        if (!cancelled) setData({ configured: false });
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const hasLiveData = data?.configured && data?.ok && data.rating != null && data.reviewCount != null;

  return (
    <>
      <div className="flex -space-x-1">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="w-7 h-7 rounded-full bg-[#C9A96E]/30 border-2 border-[#F8F4EF]/20 flex items-center justify-center"
          >
            <Star className={starClassName} />
          </div>
        ))}
      </div>
      <div>
        <p className={labelClassName}>{hasLiveData ? `${data!.rating!.toFixed(1)} Google Rating` : "Google Rating"}</p>
        <p className={subLabelClassName}>
          {hasLiveData ? `${data!.reviewCount} Google reviews` : "Read our reviews on Google"}
        </p>
      </div>
    </>
  );
}
