import { motion } from "framer-motion";
import { GitBranch, Mail, Globe, ArrowUpRight } from "lucide-react";

const links = [
  {
    label: "GitHub",
    href: "https://github.com/Deepakkumar757",
    icon: GitBranch,
    color: "hover:text-slate-900 dark:hover:text-slate-100",
  },
  {
    label: "Email",
    href: "mailto:deepak@example.com",
    icon: Mail,
    color: "hover:text-emerald-600 dark:hover:text-emerald-400",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/deepakkumar757",
    icon: Globe,
    color: "hover:text-blue-600 dark:hover:text-blue-400",
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative min-h-[60vh] px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-slate-100 sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mb-8 text-slate-600 dark:text-slate-400">
            I'm always open to new opportunities, collaborations, or just a friendly chat.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {links.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-3 text-sm font-medium text-slate-700 transition-all hover:shadow-md dark:border-slate-600 dark:text-slate-300 ${link.color}`}
                >
                  <Icon className="h-4 w-4" />
                  {link.label}
                  <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                </a>
              );
            })}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-16 text-xs text-slate-400 dark:text-slate-600"
          >
            &copy; {new Date().getFullYear()} Deepak Kumar. Built with React + Framer Motion.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
