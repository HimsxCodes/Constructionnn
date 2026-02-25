"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

interface GoogleReview {
  author_name: string;
  rating: number;
  relative_time_description?: string;
  text: string;
}

const PAGE_SIZE = 6;
const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?q=jb+engineering&newwindow=1&sca_esv=b279387295a54f15&sxsrf=ANbL-n4lwU9FJaRmPFacDiGZvDnfjOVxDA:1772045457888&udm=1&lsack=kUSfabD2Nf-RseMPxdeO0Ao&sa=X&sqi=2&ved=2ahUKEwjwgqzgp_WSAxX_SGwGHcWrA6oQjGp6BAgoEAE&biw=1536&bih=776&dpr=1.25&lqi=Cg5qYiBlbmdpbmVlcmluZ0jdqd-l_72AgAhaGBAAEAEYABgBIg5qYiBlbmdpbmVlcmluZ5IBDmNpdmlsX2VuZ2luZWVy#rlimm=6618196972520975193";

export function GoogleReviews() {
  const [reviews, setReviews] = useState<GoogleReview[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(0);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const res = await fetch("/api/reviews");
        if (!res.ok) {
          throw new Error("Failed to load reviews");
        }
        const data = await res.json();
        if (!cancelled) {
          setReviews(Array.isArray(data.reviews) ? data.reviews : []);
        }
      } catch (err) {
        if (!cancelled) {
          setError("Unable to load Google reviews right now.");
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  const totalPages = Math.max(1, Math.ceil(reviews.length / PAGE_SIZE));
  const clampedPage = Math.min(page, totalPages - 1);
  const start = clampedPage * PAGE_SIZE;
  const visibleReviews = reviews.slice(start, start + PAGE_SIZE);

  const showPagination = reviews.length > PAGE_SIZE;

  const handlePrev = () => {
    setPage((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setPage((prev) => (prev < totalPages - 1 ? prev + 1 : prev));
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-card p-6 md:p-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-900 dark:bg-white">
            <span className="text-xl font-bold text-[#4285F4]">G</span>
          </div>
          <div>
            <div className="text-sm uppercase tracking-wide text-slate-500 dark:text-slate-400">
              Reviews
            </div>
            <div className="text-lg font-heading font-semibold text-slate-dark dark:text-white">
              Google Business
            </div>
          </div>
        </div>
        <a
          href={GOOGLE_REVIEWS_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
        >
          View all on Google
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-10 text-slate-500 dark:text-slate-400 text-sm">
          Loading reviews...
        </div>
      ) : error ? (
        <div className="flex flex-col items-center justify-center py-10 text-center space-y-3">
          <p className="text-slate-500 dark:text-slate-400 text-sm">{error}</p>
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
          >
            Open Google reviews
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      ) : visibleReviews.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-10 text-center space-y-3">
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            No Google reviews available to display yet.
          </p>
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
          >
            Leave a review on Google
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {visibleReviews.map((review, index) => (
              <motion.div
                key={`${review.author_name}-${review.relative_time_description}-${index}`}
                className="bg-slate-50 dark:bg-slate-800/60 rounded-xl p-4 h-full flex flex-col"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.rating
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-slate-300 dark:text-slate-600"
                        }`}
                      />
                    ))}
                  </div>
                  {review.relative_time_description && (
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      {review.relative_time_description}
                    </span>
                  )}
                </div>
                <p className="text-slate-700 dark:text-slate-200 text-sm mb-3 line-clamp-5">
                  {review.text}
                </p>
                <div className="mt-auto pt-2 border-t border-slate-200 dark:border-slate-700 text-sm font-semibold text-slate-800 dark:text-white">
                  {review.author_name}
                </div>
              </motion.div>
            ))}
          </div>

          {showPagination && (
            <div className="flex items-center justify-between pt-2 border-t border-slate-200 dark:border-slate-700">
              <button
                type="button"
                onClick={handlePrev}
                disabled={clampedPage === 0}
                className="inline-flex items-center gap-1 px-3 py-2 rounded-lg text-xs md:text-sm border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </button>
              <span className="text-xs md:text-sm text-slate-500 dark:text-slate-400">
                Page {clampedPage + 1} of {totalPages}
              </span>
              <button
                type="button"
                onClick={handleNext}
                disabled={clampedPage >= totalPages - 1}
                className="inline-flex items-center gap-1 px-3 py-2 rounded-lg text-xs md:text-sm border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

