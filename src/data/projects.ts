export interface Project {
  name: string;
  description: string;
  url: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    name: "Serverless App",
    description:
      "Event-driven serverless application built with AWS Lambda, API Gateway, and DynamoDB.",
    url: "https://github.com/Deepakkumar757",
    tags: ["AWS", "Serverless", "Node.js"],
  },
  {
    name: "Real-Time Dashboard",
    description:
      "Real-time analytics dashboard using WebSockets and Socket.io with React frontend.",
    url: "https://github.com/Deepakkumar757",
    tags: ["React", "WebSockets", "Socket.io", "TypeScript"],
  },
  {
    name: "Microservices API",
    description:
      "Microservices-based API gateway with event-driven architecture and Docker containers.",
    url: "https://github.com/Deepakkumar757",
    tags: ["Microservices", "Docker", "Node.js", "PostgreSQL"],
  },
  {
    name: "Workflow Engine",
    description:
      "Configurable workflow engine with dynamic form builder and RBAC permissions.",
    url: "https://github.com/Deepakkumar757",
    tags: ["React", "Node.js", "MongoDB", "RBAC"],
  },
];
