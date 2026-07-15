import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
const Navbar = () => {
  
    const navRef = useRef<HTMLElement>(null);
    useGSAP(() => {
       gsap.from(navRef.current, {
    y: -100,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });

});
   
   return (
    
  <nav ref={navRef}
  className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-7xl rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="/jhansi logo.jfif"
            alt="Jhansi logo"
            className="w-12 h-12 rounded-full object-cover"
          />

          <h1 className="text-2xl font-bold text-[#FBF332]">
            Jhansi{" "}
            <span className="text-white">Restaurant</span>
          </h1>
        </div>

        <ul className="flex items-center gap-6 text-[#FBF332] font-semibold">
          <li>
            <a href="#home" className="hover:underline transition">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:underline transition">
              About
            </a>
          </li>
          <li>
            <a href="#menu" className="hover:underline transition">
              Menu
            </a>
          </li>
          <li>
            <a href="#gallery" className="hover:underline transition">
              Gallery
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:underline transition">
              Contact
            </a>
          </li>
        </ul>

        <button className="bg-[#FBF332] text-black font-bold px-5 py-2 rounded-full hover:bg-yellow-300 transition">
          Reserve
        </button>
      </div>
    </nav>
  );
};

export default Navbar;