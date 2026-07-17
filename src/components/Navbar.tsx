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
    if (menuOpen && sidebarRef.current) {
      gsap.fromTo(
        sidebarRef.current,
        {
          x: "100%",
        },
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
        delay: 0.2,
        ease: "power3.out",
      });
    }
  }, [menuOpen]);


  const closeMenu = () => setMenuOpen(false);


  return (
    <>
      {/* NAVBAR */}
      <nav
        ref={navRef}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-[9999] w-[95%] max-w-7xl rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl px-6 py-4"
      >
        <div className="flex items-center justify-between">

          {/* LOGO */}
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


          {/* HAMBURGER */}
          <button
            onClick={() => setMenuOpen(true)}
            className="rounded-xl p-2 text-[#FBF332]"
          >
            <Menu size={32}/>
          </button>

        </div>
      </nav>



      {/* OVERLAY */}
      {menuOpen && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 z-[9998] bg-black/70 backdrop-blur-sm"
        />
      )}



      {/* SIDEBAR */}
      {menuOpen && (
        <aside
          ref={sidebarRef}
          className="fixed right-0 top-0 z-[9999] h-screen w-[85%] max-w-sm bg-[#050505]/95 backdrop-blur-2xl border-l border-white/10 p-8"
        >

          <div className="flex items-center justify-between">

            <h2 className="text-3xl font-black text-[#FBF332]">
              Jhansi
            </h2>

            <button
              onClick={closeMenu}
              className="rounded-full bg-white/10 p-3 text-white"
            >
              <X size={26}/>
            </button>

          </div>



          <div className="mt-16 flex flex-col gap-8">

            <a onClick={closeMenu} href="#home" className="mobile-link text-3xl font-black text-white hover:text-[#FBF332]">
              Home
            </a>

            <a onClick={closeMenu} href="#about" className="mobile-link text-3xl font-black text-white hover:text-[#FBF332]">
              About
            </a>

            <a onClick={closeMenu} href="#menu" className="mobile-link text-3xl font-black text-white hover:text-[#FBF332]">
              Menu
            </a>

            <a onClick={closeMenu} href="#review" className="mobile-link text-3xl font-black text-white hover:text-[#FBF332]">
              Reviews
            </a>

            <a onClick={closeMenu} href="#contact" className="mobile-link text-3xl font-black text-white hover:text-[#FBF332]">
              Contact
            </a>

          </div>



          <div className="mt-16 border-t border-white/10 pt-8">

            <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-6">
              Follow Us
            </p>

            <div className="flex gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/5 text-white">
                <Music2/>
              </div>

            </div>

          </div>


        </aside>
      )}

    </>
  );
};

export default Navbar;