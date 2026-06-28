import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Calendar } from "lucide-react";
import { getTravelEntry } from "../data/travel";

export default function TravelDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const entryId = (location.state as { entryId?: string })?.entryId;
  const entry = entryId ? getTravelEntry(entryId) : undefined;

  const handleBack = () => {
    navigate("/");
  };

  if (!entry) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-white dark:bg-slate-900">
        <p className="text-slate-600 dark:text-slate-400">Location not found</p>
        <button
          onClick={handleBack}
          className="rounded-full bg-emerald-600 px-6 py-2 text-sm font-medium text-white hover:bg-emerald-500 dark:bg-emerald-500 dark:hover:bg-emerald-400 cursor-pointer"
        >
          Back to Portfolio
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 transition-colors dark:bg-slate-900 dark:text-slate-100">
      {/* Hero */}
      <div className="relative h-[50vh] sm:h-[60vh] overflow-hidden">
        <img
          src={entry.images[0]}
          alt={entry.place}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        <button
          onClick={handleBack}
          className="absolute top-4 left-4 z-10 flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/30 cursor-pointer"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </button>

        <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl font-bold text-white sm:text-5xl">
              {entry.place}
            </h1>
            <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-white/80">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {entry.year}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4" />
                India
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="mb-4 text-2xl font-semibold text-slate-900 dark:text-slate-100">
            Memories
          </h2>
          <p className="max-w-3xl text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg">
            {entry.longDescription}
          </p>
        </motion.div>

        {/* Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12"
        >
          <h2 className="mb-6 text-2xl font-semibold text-slate-900 dark:text-slate-100">
            Gallery
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {entry.images.slice(1).map((img, i) => (
              <motion.div
                key={img}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                className="overflow-hidden rounded-2xl"
              >
                <img
                  src={img}
                  alt={`${entry.place} - ${i + 2}`}
                  className="h-64 w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Back button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <button
            onClick={handleBack}
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-800 cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </button>
        </motion.div>
      </div>
    </div>
  );
}
