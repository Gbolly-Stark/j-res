import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const About = () => {
  const imgRef = useRef<HTMLImageElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const parRef = useRef<HTMLParagraphElement>(null);
  const marRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);
  const statRef = useRef<HTMLDivElement>(null);


  useGSAP(() => {
    gsap.from(imgRef.current, {
       y: 60,
    opacity: 0,
    duration: 1,
    ease: "power3.out",

    scrollTrigger: {
      trigger: imgRef.current,
      start: "top 70%",
    },
    });
    gsap.from(titleRef.current, {
      y: 60,
      opacity: 0,
      duration:2,
      ease: "power4.out",
      scrollTrigger:{
        trigger: titleRef.current,
        start: "top 70%",

      }


    });
    gsap.from(statRef.current, {
      y: 90,
      opacity: 0,
      duration: 4,
      ease: "power3.out",
      scrollTrigger:{
        trigger: statRef.current,
        start: "top 80%",
      }
    })
    gsap.from(parRef.current, {
      y: 60,
      opacity: 0,
      duration: 3,
      ease: "power3.out",
      scrollTrigger:{
        trigger: parRef.current,
        start:"top 60%",
      }
    });
    gsap.from(marRef.current, {
      x: 70,
      opacity: 0,
      duration:4,
      ease: "power4.out",
      scrollTrigger:{
        trigger: marRef.current,
        start: "top 60%",
      }
    });
    gsap.from(btnRef.current, {
            y: 60,
      opacity: 0,
      duration: 3,
      ease: "power3.out",
      scrollTrigger:{
        trigger: parRef.current,
        start:"top 60%",
      }
    })
  }
  )

  return (
    <section className="bg-black py-24">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 lg:flex-row">
        <div className="flex-1">
          <img
          ref={imgRef}
            src="/public/👾.jfif"
            alt="Restaurant Interior"
            className="h-[600px] w-full rounded-3xl object-cover shadow-2xl"
          />
        </div>

        <div className="flex-1">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.4em] text-[#FBF332]">
            Our Story
          </p>

          <h2 ref={titleRef}
          className="mb-6 text-5xl font-black leading-tight text-white">
            Experience Fine Dining Like Never Before
          </h2>

          <p ref={parRef}
          className="mb-8 text-lg leading-8 text-gray-300">
            At Jhansi Restaurant, every meal is crafted with passion,
            premium ingredients, and authentic flavors. We believe dining
            should be more than just food—it should be an unforgettable
            experience shared with family and friends.
          </p>

          <div ref={marRef}
           className="mb-10 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FBF332] text-black">
                ✓
              </div>
              <p className="text-white">Fresh Ingredients</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FBF332] text-black">
                ✓
              </div>
              <p className="text-white">Master Chefs</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FBF332] text-black">
                ✓
              </div>
              <p className="text-white">Luxury Dining Experience</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FBF332] text-black">
                ✓
              </div>
              <p className="text-white">Exceptional Customer Service</p>
            </div>
          </div>

          <div ref={btnRef}
          className="flex gap-5">
            <button className="rounded-full bg-[#FBF332] px-8 py-4 font-bold text-black transition duration-300 hover:scale-105 hover:bg-yellow-300">
              Learn More
            </button>

            <button className="rounded-full border border-white/30 bg-white/10 px-8 py-4 font-bold text-white backdrop-blur-md transition duration-300 hover:bg-white/20">
              Order Now
            </button>
          </div>
        </div>
      </div>

      <div ref={statRef} 
      className="mx-auto mt-24 grid max-w-7xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-md">
          <h3 className="text-5xl font-black text-[#FBF332]">10+</h3>
          <p className="mt-3 text-gray-300">Years Experience</p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-md">
          <h3 className="text-5xl font-black text-[#FBF332]">50000+</h3>
          <p className="mt-3 text-gray-300">Happy Guests</p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-md">
          <h3 className="text-5xl font-black text-[#FBF332]">15</h3>
          <p className="mt-3 text-gray-300">Professional Chefs</p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-md">
          <h3 className="text-5xl font-black text-[#FBF332]">4.9★</h3>
          <p className="mt-3 text-gray-300">Customer Rating</p>
        </div>
      </div>
    </section>
  );
};

export default About;