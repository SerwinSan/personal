import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ProjectPalace from "../components/ProjectPalace";
import SocialStats from "../components/SocialStats";
import ContactFooter from "../components/ContactFooter";
import Profile from "../components/Profile";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col overflow-x-hidden bg-p5-white text-p5-black">
      
      <Navbar />
      
      <div id="home">
        <Hero />
      </div>

      <div id="profile" className="relative z-20 border-t-8 border-p5-black">
        <Profile />
      </div>

      <div id="stats" className="relative z-20 border-t-8 border-p5-red">
        <SocialStats />
      </div>

      <div id="projects" className="relative z-20">
        <ProjectPalace />
      </div>

      <ContactFooter />

    </main>
  );
}