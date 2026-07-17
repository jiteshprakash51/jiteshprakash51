export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  features: string[];
  status: "ONLINE" | "STABLE" | "TESTING";
  icon: string;
  color: string;
  link: string;
}

export interface TechItem {
  name: string;
  category: "languages" | "web" | "databases" | "hardware" | "tools" | "security";
  level: number; // 0-100
  iconName: string;
  description: string;
}

export interface ExportableFile {
  name: string;
  path: string;
  language: string;
  content: string;
  description: string;
}
