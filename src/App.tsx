
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ExcessNow from "./pages/ExcessNow";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Treks from "./pages/treks/Treks";
import Tours from "./pages/tours/Tours";
import About from "./pages/about/About";
import Team from "./pages/about/Team";
import LegalDocuments from "./pages/about/LegalDocuments";
import Affiliations from "./pages/about/Affiliations";
import EverestBaseCamp from "./pages/treks/EverestBaseCamp";
import AnnapurnaCircuit from "./pages/treks/AnnapurnaCircuit";
import LangtangValley from "./pages/treks/LangtangValley";
import MansaluCircuit from "./pages/treks/MansaluCircuit";
import UpperMustang from "./pages/treks/UpperMustang";
import KathmanduValley from "./pages/tours/KathmanduValley";
import PokharaCity from "./pages/tours/PokharaCity";
import ChitwanSafari from "./pages/tours/ChitwanSafari";
import LumbiniPilgrimage from "./pages/tours/LumbiniPilgrimage";
import TrekPayment from "./pages/treks/TrekPayment";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/excess-now" element={<ExcessNow />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          
          {/* Trek Routes */}
          <Route path="/treks" element={<Treks />} />
          <Route path="/treks/everest-base-camp" element={<EverestBaseCamp />} />
          <Route path="/treks/annapurna-circuit" element={<AnnapurnaCircuit />} />
          <Route path="/treks/langtang-valley" element={<LangtangValley />} />
          <Route path="/treks/manaslu-circuit" element={<MansaluCircuit />} />
          <Route path="/treks/upper-mustang" element={<UpperMustang />} />
          <Route path="/treks/:trekId/book" element={<TrekPayment />} />
          
          {/* Tour Routes */}
          <Route path="/tours" element={<Tours />} />
          <Route path="/tours/kathmandu-valley" element={<KathmanduValley />} />
          <Route path="/tours/pokhara-city" element={<PokharaCity />} />
          <Route path="/tours/chitwan-safari" element={<ChitwanSafari />} />
          <Route path="/tours/lumbini-pilgrimage" element={<LumbiniPilgrimage />} />
          
          {/* About Routes */}
          <Route path="/about" element={<About />} />
          <Route path="/about/team" element={<Team />} />
          <Route path="/about/legal-documents" element={<LegalDocuments />} />
          <Route path="/about/affiliations" element={<Affiliations />} />
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
