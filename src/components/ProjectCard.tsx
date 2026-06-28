import { motion } from "framer-motion";
import { ExternalLink, FolderGit2 } from "lucide-react";
import type { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group block rounded-2xl border border-slate-200 bg-white/50 p-5 backdrop-blur-sm transition-all hover:shadow-lg hover:-translate-y-1 dark:border-slate-700 dark:bg-slate-800/50 sm:p-6"
    >
      <div className="mb-4 flex items-start justify-between">
        <FolderGit2 className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
        <ExternalLink className="h-5 w-5 text-slate-400 opacity-0 transition-opacity group-hover:opacity-100" />
      </div>

      <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-slate-100">
        {project.name}
      </h3>

      <p className="mb-4 text-sm text-slate-600 dark:text-slate-400">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-700 dark:text-emerald-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.a>
  );
}
