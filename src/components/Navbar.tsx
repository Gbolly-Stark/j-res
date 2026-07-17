import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Menu, X, Music2 } from "lucide-react";

const Navbar = () => {
  const navRef = useRef<HTMLElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useGSAP(() => {
    gsap.from(navRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });
  });

  useGSAP(() => {
    if (menuOpen) {
      gsap.fromTo(
        sidebarRef.current,
        { x: "100%" },
        {
          x: "0%",
          duration: 0.7,
          ease: "power4.out",
        }
      );

      gsap.from(".mobile-link", {
        x: 50,
        opacity: 0,
        stagger: 0.12,
        duration: 0.5,
        ease: "power3.out",
        delay: 0.2,
      });
    }
  }, [menuOpen]);

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl px-6 py-4"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/jhansi logo.jfif"
              alt="Jhansi logo"
              className="h-12 w-12 rounded-full object-cover"
            />

            <h1 className="text-xl md:text-2xl font-bold text-[#FBF332]">
              Jhansi <span className="text-white">Restaurant</span>
            </h1>
          </div>
<ul className="hidden md:flex items-center gap-8 text-[#FBF332] font-semibold">
            <li><a href="#home" className="hover:text-white transition">Home</a></li>
            <li><a href="#about" className="hover:text-white transition">About</a></li>
            <li><a href="#menu" className="hover:text-white transition">Menu</a></li>
            <li><a href="#review" className="hover:text-white transition">Reviews</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
          </ul>

          <button
  onClick={() => setMenuOpen(!menuOpen)}
  className="md:hidden rounded-xl p-2 text-[#FBF332]"
>
  {menuOpen ? <X size={30} /> : <Menu size={30} />}
</button>
          
        </div>
        {menuOpen && (
  <div className="md:hidden mt-4 rounded-2xl border border-white/10 bg-black/90 backdrop-blur-xl shadow-2xl overflow-hidden">

    <a
      href="#home"
      onClick={() => setMenuOpen(false)}
      className="block px-6 py-4 text-[#FBF332] hover:bg-white/10 transition"
    >
      Home
    </a>

    <a
      href="#about"
      onClick={() => setMenuOpen(false)}
      className="block px-6 py-4 text-[#FBF332] hover:bg-white/10 transition"
    >
      About
    </a>

    <a
      href="#menu"
      onClick={() => setMenuOpen(false)}
      className="block px-6 py-4 text-[#FBF332] hover:bg-white/10 transition"
    >
      Menu
    </a>

    <a
      href="#gallery"
      onClick={() => setMenuOpen(false)}
      className="block px-6 py-4 text-[#FBF332] hover:bg-white/10 transition"
    >
      Gallery
    </a>

    <a
      href="#contact"
      onClick={() => setMenuOpen(false)}
      className="block px-6 py-4 text-[#FBF332] hover:bg-white/10 transition"
    >
      Contact
    </a>

  </div>
)}
      </nav>

      {menuOpen && (<div className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm" onClick={() => setMenuOpen(false)} />)}

      <div
  ref={sidebarRef}
  className="fixed right-0 top-0 z-50 h-screen w-[85%] max-w-sm bg-[#050505]/95 backdrop-blur-2xl border-l border-white/10 p-8 md:hidden"
>
  <div className="flex items-center justify-between">
    <h2 className="text-2xl font-black text-[#FBF332]">Jhansi</h2>

    <button
      onClick={() => setMenuOpen(false)}
      className="rounded-full bg-white/10 p-3 text-white hover:bg-white/20 transition"
    >
      <X size={24} />
    </button>
  </div>

  <div className="mt-16 flex flex-col gap-8">
    <a
      href="#home"
      onClick={() => setMenuOpen(false)}
      className="mobile-link text-3xl font-black text-white hover:text-[#FBF332] transition"
    >
      Home
    </a>

    <a
      href="#about"
      onClick={() => setMenuOpen(false)}
      className="mobile-link text-3xl font-black text-white hover:text-[#FBF332] transition"
    >
      About
    </a>

    <a
      href="#menu"
      onClick={() => setMenuOpen(false)}
      className="mobile-link text-3xl font-black text-white hover:text-[#FBF332] transition"
    >
      Menu
    </a>

    <a
      href="#review"
      onClick={() => setMenuOpen(false)}
      className="mobile-link text-3xl font-black text-white hover:text-[#FBF332] transition"
    >
      Reviews
    </a>

    <a
      href="#contact"
      onClick={() => setMenuOpen(false)}
      className="mobile-link text-3xl font-black text-white hover:text-[#FBF332] transition"
    >
      Contact
    </a>
  </div>

  <div className="mt-16 border-t border-white/10 pt-8">
    <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-6">
      Follow Us
    </p>

    <div className="flex gap-4">
      <a
        href="#"
        className="mobile-link flex h-14 w-14 items-center justify-center rounded-full bg-white/5 text-white transition hover:bg-[#FBF332] hover:text-black"
      >
      
      </a>

      <a
        href="#"
        className="mobile-link flex h-14 w-14 items-center justify-center rounded-full bg-white/5 text-white transition hover:bg-[#FBF332] hover:text-black"
      >
        <Music2 />
      </a>
    </div>
  </div>
</div>
    </>
  );
};

export default Navbar;