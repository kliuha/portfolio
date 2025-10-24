import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home, About, Contacts } from "./pages";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
const App = () => {
  return (
    <main className="bg-slate-300/20 h-[100vh]">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contacts />} />
        </Routes>
      </Router>
      <Analytics />
      <SpeedInsights />
    </main>
  );
};

export default App;
