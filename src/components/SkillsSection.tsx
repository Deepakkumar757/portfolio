import { motion } from "framer-motion";
import { skillCategories } from "../data/skills";
import SkillCard from "./SkillCard";

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative min-h-screen px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-slate-100 sm:text-4xl">
            Skills & Expertise
          </h2>
          <p className="mx-auto max-w-2xl text-slate-600 dark:text-slate-400">
            Technologies and tools I work with across the full stack, cloud, and infrastructure.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {skillCategories.map((cat, i) => (
            <SkillCard key={cat.id} category={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
