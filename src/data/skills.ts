import {
  Monitor,
  Server,
  Cloud,
  Database,
  HardDrive,
  Zap,
  Radio,
  Building2,
  Box,
  Cpu,
  type LucideIcon,
} from "lucide-react";

export interface SkillCategory {
  id: string;
  title: string;
  icon: LucideIcon;
  items: string[];
  color: string;
}

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    icon: Monitor,
    items: ["React.js", "Next.js", "JavaScript", "TypeScript", "HTML5", "CSS3"],
    color: "#3b82f6",
  },
  {
    id: "backend",
    title: "Backend",
    icon: Server,
    items: ["Node.js", "Express.js", "Serverless Framework", "REST APIs"],
    color: "#22c55e",
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    icon: Cloud,
    items: [
      "AWS (Lambda, API Gateway, S3, EC2, Cognito, SQS, SNS, EventBridge, Secrets Manager, IAM, VPC)",
      "Microsoft Azure",
      "Docker",
      "CI/CD, Git, GitHub Actions",
      "CloudWatch",
      "Linux",
    ],
    color: "#f59e0b",
  },
  {
    id: "sql",
    title: "Databases (SQL)",
    icon: Database,
    items: [
      "PostgreSQL",
      "Aurora Serverless v2",
      "MySQL",
      "Microsoft SQL Server",
      "PostGIS",
    ],
    color: "#8b5cf6",
  },
  {
    id: "nosql",
    title: "Databases (NoSQL)",
    icon: HardDrive,
    items: ["MongoDB", "DynamoDB", "DynamoDB Streams"],
    color: "#ec4899",
  },
  {
    id: "caching",
    title: "Caching & Messaging",
    icon: Zap,
    items: ["Redis", "AWS SQS (FIFO & DLQ)", "SNS", "EventBridge"],
    color: "#14b8a6",
  },
  {
    id: "realtime",
    title: "Real-Time",
    icon: Radio,
    items: ["WebSockets", "Socket.io"],
    color: "#f97316",
  },
  {
    id: "architecture",
    title: "Architecture",
    icon: Building2,
    items: [
      "Microservices",
      "Event-Driven",
      "Monorepo",
      "RBAC",
      "Workflow Engines",
      "Dynamic Form Builders",
      "Serverless",
      "System Design",
      "Agile/Scrum",
      "Unit Testing",
    ],
    color: "#06b6d4",
  },
  {
    id: "infra",
    title: "Infrastructure (IaC)",
    icon: Box,
    items: ["Serverless Framework", "AWS CloudFormation"],
    color: "#a855f7",
  },
  {
    id: "ai",
    title: "AI-Assisted Dev",
    icon: Cpu,
    items: [
      "GitHub Copilot",
      "Cursor",
      "ChatGPT (code review & debugging)",
    ],
    color: "#ef4444",
  },
];
