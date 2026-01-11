import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import ProductViewer from "./components/ProductViewer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Showcase from "./components/Showcase";
import Features from "./components/Features";
import PerformanceSection from "./components/PerformanceSection";
import Highlights from "./components/Highlights";
import Footer from "./components/Footer";
gsap.registerPlugin(ScrollTrigger);

export default function App() {
  return (
    <main>
      <NavBar />
      <Hero />
      <ProductViewer />
      <Showcase />
      <PerformanceSection />
      <Features />
      <Highlights />
      <Footer />
    </main>
  );
}
