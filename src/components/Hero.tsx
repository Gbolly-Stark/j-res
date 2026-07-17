import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

const Hero = () => {
  
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(
  heroContentRef.current,
  {
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power4.out",
  }

);
tl.from(
   paragraphRef.current,
  {
     y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
    ease: "power4.out",

  }
);
tl.from(
  buttonRef.current,
  {
     y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
    ease: "power4.out",

  }
)



  });
  return (
  <section
  id="home"
  className="relative min-h-screen w-full overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/hero.jfif')" }}
    >
     <div className="absolute inset-0 z-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />

     <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-5 sm:px-8">
        <div ref={heroContentRef}
        className="max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.4em] text-[#FBF332]">
            Fine Dining • Abuja
          </p>

        <h1
  className="mb-6 text-4xl sm:text-5xl md:text-7xl font-black leading-[1.1] text-white"
>
  <span className="block">Taste</span>
  <span className="block">Excellence</span>
  <span className="block">In Every Bite</span>
</h1>
        <p
  ref={paragraphRef}
  className="mb-10 max-w-xl text-base sm:text-lg leading-7 sm:leading-8 text-gray-300"
>
  Experience unforgettable flavors crafted by expert chefs using the
  finest ingredients in an atmosphere designed for elegance and comfort.
</p>
          <div
  ref={buttonRef}
  className="flex flex-col gap-4 sm:flex-row sm:gap-5"
>
            <button className="w-full sm:w-auto rounded-full bg-[#FBF332] px-8 py-4 font-bold text-black...">
              Reserve a Table
            </button>

            <button className="rounded-full border border-white/40 bg-white/10 px-8 py-4 font-bold text-white backdrop-blur-md transition duration-300 hover:bg-white/20">
              Explore Menu
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;