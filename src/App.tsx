import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Courses from "./components/Courses";
import Schedule from "./components/Schedule";
import Teachers from "./components/Teachers";
import Contact from "./components/Contact";

// New course detail pages
import IntroArabic from "./pages/IntroArabic";
import QuranTajweed from "./pages/QuranTajweed";
import TafsirForWomen from "./pages/TafsirForWomen";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Courses />
      <Schedule />
      <Teachers />
      <Contact />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/intro-arabic" element={<IntroArabic />} />
      <Route path="/quran-tajweed" element={<QuranTajweed />} />
      <Route path="/tafsir-for-women" element={<TafsirForWomen />} />
    </Routes>
  );
}

export default App;
