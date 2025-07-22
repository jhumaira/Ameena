import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Courses from "./components/Courses";
import Schedule from "./components/Schedule";
import Teachers from "./components/Teachers";
import Contact from "./components/Contact";

// Pages
import IntroArabic from "./pages/IntroArabic";
import QuranTajweed from "./pages/QuranTajweed";
import TafsirForWomen from "./pages/TafsirForWomen";
import LoginPage from "./pages/LoginPage";
import PrivateRoute from "./components/PrivateRoute";

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
      {/* 🛑 Default route is now the login page */}
      <Route path="/" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />

      {/* ✅ All other routes are protected */}
      <Route
        path="/home"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
      <Route
        path="/intro-arabic"
        element={
          <PrivateRoute>
            <IntroArabic />
          </PrivateRoute>
        }
      />
      <Route
        path="/quran-tajweed"
        element={
          <PrivateRoute>
            <QuranTajweed />
          </PrivateRoute>
        }
      />
      <Route
        path="/tafsir-for-women"
        element={
          <PrivateRoute>
            <TafsirForWomen />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default App;
