import { motion } from "framer-motion";
import { MapPin, ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { travelEntries } from "../data/travel";

export default function TravelSection() {
  const navigate = useNavigate();

  const handleClick = (id: string) => {
    sessionStorage.setItem("portfolio_scroll", String(window.scrollY));
    navigate("/travel", { state: { entryId: id } });
  };

  return (
    <section
      id="travel"
      className="relative min-h-screen px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-slate-100 sm:text-4xl">
            Travel Diary
          </h2>
          <p className="mx-auto max-w-2xl text-slate-600 dark:text-slate-400">
            Places I've explored and the stories I've collected along the way. Click a location to see more.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 top-0 h-full w-0.5 bg-slate-200 dark:bg-slate-700 sm:left-1/2 sm:-translate-x-1/2" />

          <div className="space-y-12">
            {travelEntries.map((entry, i) => {
              const isLeft = i % 2 === 0;
              return (
                <button
                  key={entry.id}
                  onClick={() => handleClick(entry.id)}
                  className="block w-full text-left cursor-pointer"
                >
                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className={`relative flex flex-col gap-4 pl-14 sm:flex-row sm:items-start sm:gap-8 sm:pl-0 group ${
                      isLeft ? "sm:flex-row" : "sm:flex-row-reverse"
                    }`}
                  >
                    <div
                      className={`sm:w-1/2 ${isLeft ? "sm:text-right" : "sm:text-left"}`}
                    >
                      <span className="mb-1 inline-block text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                        {entry.year}
                      </span>
                      <h3 className="inline-flex items-center gap-1.5 text-lg font-semibold text-slate-900 transition-colors group-hover:text-emerald-600 dark:text-slate-100 dark:group-hover:text-emerald-400">
                        {entry.place}
                        <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                      </h3>
                      <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                        {entry.description}
                      </p>
                    </div>

                    <div className="absolute left-4 top-1 flex h-8 w-8 items-center justify-center rounded-full border-2 border-emerald-500 bg-white transition-colors group-hover:bg-emerald-50 dark:bg-slate-900 dark:group-hover:bg-emerald-900/30 sm:relative sm:left-auto sm:top-auto sm:shrink-0">
                      <MapPin className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                    </div>

                    <div className="hidden sm:block sm:w-1/2" />
                  </motion.div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
