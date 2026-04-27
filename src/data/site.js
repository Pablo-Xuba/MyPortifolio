/** Portfolio copy and data — edit fields below. */

export const profile = {
  name: "Takudzwa Pablo Magawagawa",
  title: "Software Developer",
  bio:
    "Developer on a CS honours track, focused on web stacks and APIs. I like work that stays understandable after the first deploy.",
  email: "takudzwamagawagawa@gmail.com",
  github: "https://github.com/Pablo-Xuba",
  linkedin:
    "https://www.linkedin.com/in/takudzwa-pablo-magawagawa-8607602b8/",
  university: "University of Zimbabwe",
  degree: "BSc Honours Computer Science (in progress)",
  location: "Harare, Zimbabwe",
};

export const aboutParagraphs = [
  "I work the way I debug: narrow the problem, change one thing at a time, and leave a trail someone else can follow. I care more about clear structure and honest trade-offs than clever one-offs.",
  "I build small web apps and APIs on my own time—usually something with a real user, even if that user is me. That's where I practice the unglamorous bits: validation, error handling, and layouts that hold up on a phone.",
  "What I care about in software: reviews that catch real issues, releases that don't surprise users, and code that someone else can run without guessing.",
];

export const skills = {
  languages: ["JavaScript", "TypeScript", "Python", "SQL"],
  frameworks: ["React", "Node.js", "Express"],
  tools: ["Git", "Vite", "VS Code", "Figma"],
  databases: ["PostgreSQL", "SQLite"],
};

export const projects = [
  {
    id: "notes-app",
    title: "Lecture notes app (coursework)",
    description:
      "CRUD app for saving and tagging notes. Main goal was auth, validation, and a database that didn't fight the schema.",
    stack: ["React", "Node.js", "SQLite"],
    role: "Solo — assessed project",
    challenge: "Timeboxing features so the core flow worked before the deadline.",
    result:
      "Submitted on time; main takeaway was planning API routes before touching the UI.",
    githubUrl: null,
    liveUrl: null,
  },
  {
    id: "club-page",
    title: "Club landing page (volunteer)",
    description:
      "Simple static site for meeting times and a mailto link. Nothing fancy—mostly content and layout.",
    stack: ["HTML", "CSS", "Vite"],
    role: "Volunteer with the club committee",
    challenge: "Chasing copy and dates from people between classes.",
    result: "Went live for one semester; I stepped back when someone else took over updates.",
    githubUrl: null,
    liveUrl: null,
  },
];

export const education = [
  {
    title: profile.degree,
    org: profile.university,
    dates: "In progress",
    details: [
      "Coursework across CS theory, programming, databases, and software engineering.",
      "Final-year project still to be defined; expect a write-up and repo link here when it's done.",
    ],
  },
];

export const experience = [];

export const contact = {
  intro:
    "If something here is worth a conversation, email is the best place to start. The links beside this are for code and context.",
};
