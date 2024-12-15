import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import IntroSection from "./components/IntroSection";
import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectsSection";
import dynamic from "next/dynamic";

const ExperienceSection = dynamic(
  () => import("./components/ExperienceSection"),
  {
    ssr: false,
  }
);

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <IntroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
      </div>
      <Footer />
    </div>
  );
}
