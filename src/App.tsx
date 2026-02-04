import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Layout from "@/components/layout/Layout";
import HomePage from "./pages/HomePage";
import MissionsPage from "./pages/MissionsPage";
import InformationsPage from "./pages/InformationsPage";
import OutilsPage from "./pages/OutilsPage";
import ContactPage from "./pages/ContactPage";
import PlanAccesPage from "./pages/PlanAccesPage";
import OurFirmPage from "./pages/OurFirmPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/missions" element={<MissionsPage />} />
              <Route path="/informations" element={<InformationsPage />} />
              <Route path="/outils" element={<OutilsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/plan-acces" element={<PlanAccesPage />} />
              <Route path="/our-firm" element={<OurFirmPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
