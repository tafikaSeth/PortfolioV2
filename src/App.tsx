import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Lenis from "@studio-freight/lenis";
import { ThemeProvider } from "@/components/theme-provider";
import { useLayoutEffect } from "react";
import MainLayout from "@/components/layouts/MainLayout";
import Home from "./pages/Home";

function App() {

  useLayoutEffect(() => {
    const lenis = new Lenis()

    function raf(time: any) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])

  return (
    <ThemeProvider defaultTheme="light">
      <Router>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </MainLayout>
      </Router>
    </ThemeProvider>
  )
}

export default App