import { NextResponse } from "next/server";

const GOOGLE_PLACES_API_KEY = process.env.GOOGLE_PLACES_API_KEY;
const GOOGLE_PLACE_ID = process.env.GOOGLE_PLACE_ID;

export async function GET() {
  if (!GOOGLE_PLACES_API_KEY || !GOOGLE_PLACE_ID) {
    // Graceful fallback: no reviews if not configured
    return NextResponse.json({ reviews: [] }, { status: 200 });
  }

  try {
    const url = new URL("https://maps.googleapis.com/maps/api/place/details/json");
    url.searchParams.set("place_id", GOOGLE_PLACE_ID);
    url.searchParams.set("fields", "rating,reviews");
    url.searchParams.set("key", GOOGLE_PLACES_API_KEY);

    const res = await fetch(url.toString(), { cache: "no-store" });
    if (!res.ok) {
      console.error("[reviews] Google Places HTTP error:", res.status, await res.text());
      return NextResponse.json({ reviews: [] }, { status: 200 });
    }

    const json = await res.json();
    if (json.status !== "OK") {
      console.error("[reviews] Google Places API status:", json.status, json.error_message);
      return NextResponse.json({ reviews: [] }, { status: 200 });
    }

    const rawReviews: any[] = json.result?.reviews ?? [];
    const filtered = rawReviews
      .filter((r) => typeof r.rating === "number" && r.rating >= 4)
      .sort((a, b) => (b.time ?? 0) - (a.time ?? 0));

    return NextResponse.json({ reviews: filtered }, { status: 200 });
  } catch (err) {
    console.error("[reviews] Unexpected error:", err);
    return NextResponse.json({ reviews: [] }, { status: 200 });
  }
}

