import { motion } from "framer-motion";
import type { SkillCategory } from "../data/skills";

interface SkillCardProps {
  category: SkillCategory;
  index: number;
}

export default function SkillCard({ category, index }: SkillCardProps) {
  const Icon = category.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group rounded-2xl border border-slate-200 bg-white/50 p-5 backdrop-blur-sm transition-all hover:shadow-lg hover:-translate-y-1 dark:border-slate-700 dark:bg-slate-800/50 sm:p-6"
    >
      <div
        className="mb-3 inline-flex rounded-xl p-3 sm:mb-4"
        style={{ backgroundColor: `${category.color}15` }}
      >
        <Icon className="h-5 w-5 sm:h-6 sm:w-6" style={{ color: category.color }} />
      </div>

      <h3 className="mb-2 text-base font-semibold text-slate-900 dark:text-slate-100 sm:text-lg">
        {category.title}
      </h3>

      <ul className="space-y-1.5">
        {category.items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400 sm:text-sm"
          >
            <span
              className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full"
              style={{ backgroundColor: category.color }}
            />
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
