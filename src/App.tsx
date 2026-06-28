import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "./ThemeContext";
import ThemeToggle from "./components/ThemeToggle";
import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
// import TravelSection from "./components/TravelSection";
import ContactSection from "./components/ContactSection";
import TravelDetail from "./components/TravelDetail";

const SCROLL_KEY = "portfolio_scroll";

function MainPortfolio() {
  const location = useLocation();

  useEffect(() => {
    const saved = sessionStorage.getItem(SCROLL_KEY);
    if (saved) {
      requestAnimationFrame(() => {
        window.scrollTo(0, parseInt(saved, 10));
        sessionStorage.removeItem(SCROLL_KEY);
      });
    }
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white text-slate-900 transition-colors dark:bg-slate-900 dark:text-slate-100">
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      {/* <TravelSection /> */}
      <ContactSection />
      <ThemeToggle />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<MainPortfolio />} />
        <Route path="/travel" element={<TravelDetail />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
