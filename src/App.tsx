import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "@/components/ScrollToTop";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetails from "./pages/ServiceDetails";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import BookAppointment from "./pages/BookAppointment";
import Career from "./pages/Career";
import CareerDetails from "./pages/CareerDetails";
import Pricing from "./pages/Pricing";
import PricingDetails from "./pages/PricingDetails";
import NotFound from "./pages/NotFound";
import { CartProvider } from "./context/CartContext";
import CartDrawer from "./components/CartDrawer";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <CartProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <Navbar />
            <CartDrawer />
            <main>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/:slug" element={<ServiceDetails />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogDetails />} />
                <Route path="/book-appointment" element={<BookAppointment />} />
                <Route path="/career" element={<Career />} />
                <Route path="/career/:slug" element={<CareerDetails />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/pricing/:slug" element={<PricingDetails />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </CartProvider>
  </HelmetProvider>
);

export default App;
