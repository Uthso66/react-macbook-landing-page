import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin if not already registered globally
gsap.registerPlugin(ScrollTrigger);

const Highlights = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  useGSAP(() => {
    gsap.to([".left-column", ".right-column"], {
      scrollTrigger: {
        trigger: "#highlights",
        start: isMobile ? "bottom bottom" : "top center",
      },
      y: 0,
      opacity: 1,
      stagger: 0.5,
      duration: 1,
      ease: "power1.inOut",
    });
  }, [isMobile]);

  return (
    <section id="highlights" className="py-20">
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-4">
        There's never been a better time to upgrade.
      </h2>
      <h3 className="text-center text-xl md:text-2xl text-gray-300 mb-12">
        Here's what you get with the new MacBook Pro.
      </h3>

      <div className="masonry grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <div className="left-column opacity-0 translate-y-10 space-y-8">
          <div className="bg-gray-900/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-800">
            <img
              src="/laptop.png"
              alt="Laptop performance"
              className="w-16 h-16 mb-4"
            />
            <p className="text-lg">
              Fly through demanding tasks up to 9.8x faster.
            </p>
          </div>
          <div className="bg-gray-900/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-800">
            <img
              src="/sun.png"
              alt="Display quality"
              className="w-16 h-16 mb-4"
            />
            <p className="text-lg">
              A stunning <br />
              Liquid Retina XDR <br />
              display.
            </p>
          </div>
        </div>
        <div className="right-column opacity-0 translate-y-10 space-y-8">
          <div className="apple-gradient rounded-2xl p-8 backdrop-blur-sm border border-gray-800">
            <img
              src="/ai.png"
              alt="Apple Intelligence"
              className="w-16 h-16 mb-4"
            />
            <p className="text-lg">
              Built for <br />
              <span className="font-bold text-white">Apple Intelligence.</span>
            </p>
          </div>
          <div className="bg-gray-900/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-800">
            <img
              src="/battery.png"
              alt="Battery life"
              className="w-16 h-16 mb-4"
            />
            <p className="text-lg">
              Up to
              <span className="green-gradient font-bold"> 14 more hours </span>
              battery life.
              <span className="text-gray-400"> (Up to 24 hours total.)</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
