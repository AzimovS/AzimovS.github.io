import IntroSection from "./components/IntroSection";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <IntroSection />
        {/* <AchievementsSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection /> */}
      </div>
    </div>
  );
}
