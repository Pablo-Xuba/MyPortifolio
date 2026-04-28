import { motion as Motion } from "framer-motion";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Skills } from "./components/sections/Skills";
import { Projects } from "./components/sections/Projects";
import { EducationExperience } from "./components/sections/EducationExperience";
import { Contact } from "./components/sections/Contact";
import {
  profile,
  aboutParagraphs,
  skills,
  projects,
  education,
  experience,
} from "./data/site";
import { useReducedMotion } from "./hooks/useReducedMotion";
import { shellTransition } from "./lib/motion";

export default function App() {
  const reduced = useReducedMotion();

  return (
    <Motion.div
      className="cosmic-shell relative min-h-dvh overflow-x-clip font-sans text-foreground antialiased"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={shellTransition(reduced)}
    >
      <div className="relative z-10">
        <Header name={profile.name} />
        <main>
          <Hero profile={profile} />
          <About paragraphs={aboutParagraphs} />
          <Skills skills={skills} />
          <Projects projects={projects} />
          <EducationExperience education={education} experience={experience} />
          <Contact profile={profile} />
        </main>
        <Footer
          name={profile.name}
          github={profile.github}
          linkedin={profile.linkedin}
          email={profile.email}
        />
      </div>
    </Motion.div>
  );
}
