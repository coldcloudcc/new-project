import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Layout from "./components/Layout";
import { GLOBAL_JS } from "./generated/globalJs";
import Index from "./pages/Index";
import Features from "./pages/Features";
import "./styles/global.css";

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<Layout />}>
          <Route path="/" element={<Index />} />
          <Route path="/features" element={<Features />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  useEffect(() => {
    if (!GLOBAL_JS) return;
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.dataset.generated = "website-builder-global";
    script.textContent = GLOBAL_JS;
    document.body.appendChild(script);
    return () => {
      script.remove();
    };
  }, []);

  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
