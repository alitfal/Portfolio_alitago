const projectsNav = [
  {
    name: "all",
  },
  {
    name: "public",
  },
  {
    name: "private",
  },
];

const projectsData = [
  {
    id: 1,
    category: "public",
    imageLight: "/images/contribution/github/github_light.png",
    imageDark: "/images/contribution/github/github_dark.png",
    title: "inytel-presence",
    descriptionKey: "projects.items.inytelPresence.description",
    technologies: ["Vue", "Node/Express", "MySQL", "JWT", "Railway", "Docker"],
    repository: "https://github.com/alitfal/inytel-presence",
  },
  {
    id: 2,
    category: "public",
    imageLight: "/images/contribution/github/github_light.png",
    imageDark: "/images/contribution/github/github_dark.png",
    title: "filemaker-vscode",
    descriptionKey: "projects.items.filemakerVscode.description",
    technologies: ["VS Code Extension", "FileMaker", "Claris Pro"],
    repository: "https://github.com/alitfal/filemaker-vscode",
  },
  {
    id: 3,
    category: "public",
    imageLight: "/images/contribution/github/github_light.png",
    imageDark: "/images/contribution/github/github_dark.png",
    title: "FileMakerCharts",
    descriptionKey: "projects.items.filemakerCharts.description",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "jQuery",
      "DataTables",
      "FileMaker Data API",
    ],
    repository: "https://github.com/alitfal/FileMakerCharts",
  },
  {
    id: 4,
    category: "private",
    imageLight: "/images/app/pages/light.png",
    imageDark: "/images/app/pages/dark.png",
    title: "FileMaker Whisper Transcription",
    descriptionKey: "projects.items.filemakerWhisper.description",
    technologies: ["FileMaker", "Whisper", "Local AI", "Automation"],
    isPrivate: true,
  },
  {
    id: 5,
    category: "private",
    imageLight: "/images/app/pages/light.png",
    imageDark: "/images/app/pages/dark.png",
    titleKey: "projects.items.internalTools.title",
    descriptionKey: "projects.items.internalTools.description",
    technologies: ["FileMaker", "SQL", "Automation", "IT Support"],
    isPrivate: true,
  },
];

export { projectsNav, projectsData };
