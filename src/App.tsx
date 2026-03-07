import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LogoGrid from "./components/LogoGrid";
import Work from "./components/Work";
import Services from "./components/Services";
import Footer from "./components/Footer";
import ProjectPage from "./components/ProjectPage";
import ProjectTemplate from "./components/ProjectTemplate";
import SmoothScroll from "./components/SmoothScroll";

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LogoGrid />
        <Work />
        <Services />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <SmoothScroll />
      <div className="bg-white min-h-screen font-sans text-zinc-900 selection:bg-black selection:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/finishline" element={<ProjectTemplate />} />
          <Route path="/projects/:slug" element={<ProjectPage />} />
        </Routes>
      </div>
    </Router>
  );
}
