
export interface ProjectFile {
  path: string;
  filename: string;
  content: string;
  language: string;
}

export interface ProjectStructure {
  files: ProjectFile[];
}
