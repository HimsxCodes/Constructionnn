import Link from "next/link";
import { Building2 } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-900">
      <div className="text-center px-4">
        <Building2 className="w-24 h-24 text-primary mx-auto mb-6" />
        <h1 className="text-6xl font-heading font-bold text-slate-dark dark:text-white mb-4">
          404
        </h1>
        <h2 className="text-2xl font-heading font-semibold text-slate-600 dark:text-slate-300 mb-4">
          Page Not Found
        </h2>
        <p className="text-slate-500 dark:text-slate-400 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors shadow-cta"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
