import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import ProductViewer from "./components/ProductViewer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  return (
    <main>
      <NavBar />
      <Hero />
      <ProductViewer />
    </main>
  );
}
