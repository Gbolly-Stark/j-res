import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


import {Featureds} from "../types/Featured";
const Featured = () => {
  gsap.registerPlugin(ScrollTrigger);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
 useGSAP(() => {
  gsap.from(titleRef.current, {
    y: 60,
    opacity: 0,
    duration: 1,
    ease: "power3.out",

    scrollTrigger: {
      trigger: titleRef.current,
      start: "top 80%",
    },
  });
  gsap.from(cardRef.current, {
     y: 60,
    opacity: 0,
    duration: 1,
    ease: "power3.out",

    scrollTrigger: {
      trigger: titleRef.current,
      start: "top 80%",
    },

  })
}); 
  return (
    <section className="bg-black py-24">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-3 text-center text-sm font-semibold uppercase tracking-[0.4em] text-[#FBF332]">
          Signature Selection
        </p>

        <h2 ref={titleRef}
        className="mb-6 text-center text-5xl font-black text-white md:text-6xl">
          Our Signature Dishes
        </h2>

        <div className="flex items-center justify-center gap-4 text-lg md:text-xl">
          <span className="font-medium text-[#FBF332]">Fresh</span>
          <span className="text-gray-500">•</span>
          <span className="font-medium text-[#FBF332]">Authentic</span>
          <span className="text-gray-500">•</span>
          <span className="font-medium text-[#FBF332]">Premium</span>
        </div>
        <div ref={cardRef} 
        className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {Featureds.map((Featured) => (
                <div key={Featured.name}
                className="flex flex-col items-center gap-4 rounded-2xl bg-white/10 p-6 backdrop-blur-md shadow-lg transition duration-300 hover:scale-115 hover:shadow-2xl">
                    <img src={Featured.image} alt={Featured.name}
                    className="w-120 h-115 rounded-2xl hover:scale-95 transition duration-300"
                     />
                    <h1
                    className="text-white text-center font-bold text-2xl"
                    >{Featured.name}</h1>
                    <p className="text-gray-300 text-center">{Featured.description}</p>
                    <p className="text-[#FBF332] text-center font-bold text-xl">{Featured.price.toFixed(2)}
                      <span className="text-gray-400 gap-2 ml-2">Naira</span>
                    </p>
                </div>  
            ))};
        </div>
      </div>
    </section>
  );
};

export default Featured;