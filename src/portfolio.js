const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: "https://rajshekhar26.github.io/cleanfolio",
  title: "A.S",
};

const about = {
  // all the properties are optional - can be left empty or deleted
  name: "Ahmad Sarrawi",
  role: "Front End Developer",
  description:
    "A Front-End Developer with entry-level experience specializing in web development, user interface design, HTML, and React.Js. Adept at identifying opportunities to enhance front-end design and improve the user experience.",
  // resume: "https://example.com",
  social: {
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
};

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: "Project 1",
    description:
      "Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam",
    stack: ["SASS", "TypeScript", "React"],
    sourceCode: "https://github.com",
    livePreview: "https://github.com",
  },
  {
    name: "Project 2",
    description:
      "Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam",
    stack: ["SASS", "TypeScript", "React"],
    sourceCode: "https://github.com",
    livePreview: "https://github.com",
  },
  {
    name: "Project 3",
    description:
      "Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam",
    stack: ["SASS", "TypeScript", "React"],
    sourceCode: "https://github.com",
    livePreview: "https://github.com",
  },
];

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  "HTML",
  "CSS",
  "JavaScript",

  "React",
  "Redux",
  "Material UI",
  "Tailwind CSS",
  "Git",
];

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: "ahmadhsarrawi@gmail.com",
};

export { header, about, projects, skills, contact };
