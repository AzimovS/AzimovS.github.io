import Image from "next/image";
import IntroSection from "./components/IntroSection";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#121212]">
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
