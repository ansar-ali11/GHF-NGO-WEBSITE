import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Programs from "./pages/Programs";
import GetInvolved from "./pages/GetInvolved";
import Donate from "./pages/Donate";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Intro from "./components/Intro"; 

const queryClient = new QueryClient();

const App = () => {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        {/* ✅ Show Intro first, then website */}
        {showIntro ? (
          <Intro onFinish={() => setShowIntro(false)} />
        ) : (
          <BrowserRouter>
           <ScrollToTop />
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/programs" element={<Programs />} />
                <Route path="/get-involved" element={<GetInvolved />} />
                <Route path="/donate" element={<Donate />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact" element={<Contact />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        )}
      </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
