import ThemeToggle from "../components/ThemeToggle";
import StartBackground from "../components/StartBackground";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ThemeToggle />
      <StartBackground />
      <Navbar />

      <main>
        <HeroSection />
      </main>
    </div>
  );
};

export default Home;
