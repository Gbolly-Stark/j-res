import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ChefHat,
  Leaf,
  Sparkles,
  Star,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: "Master Chefs",
    text: "Every dish is crafted by passionate chefs with years of culinary expertise.",
    icon: ChefHat,
  },
  {
    title: "Fresh Ingredients",
    text: "Premium ingredients sourced daily to guarantee authentic flavors.",
    icon: Leaf,
  },
  {
    title: "Luxury Experience",
    text: "Elegant interiors designed for memorable dining moments.",
    icon: Sparkles,
  },
  {
    title: "Exceptional Service",
    text: "From arrival to dessert, every guest receives first-class hospitality.",
    icon: Star,
  },
];

const WhyChooseUs = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards =
      sectionRef.current?.querySelectorAll(".feature-card");

    gsap.from(".why-heading", {
      y: 80,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
    });

    gsap.from(sectionRef.current, {
      y: 120,
      opacity: 0,
      scale: 0.8,
      duration: 1,
      stagger: 0.2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
      },
    });

    cards?.forEach((card) => {
      gsap.to(card, {
        y: -12,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });
  });

  return (
    <section
      ref={sectionRef}
      className="bg-[#050505] py-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="why-heading text-center mb-20">
          <p className="uppercase tracking-[0.45em] text-[#FBF332] font-semibold mb-4">
            WHY CHOOSE US
          </p>

          <h2 className="text-5xl md:text-6xl font-black text-white">
            Crafted To Impress
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-6 text-lg leading-8">
            We combine authentic recipes, premium ingredients and exceptional
            hospitality to deliver an unforgettable dining experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className={`feature-card rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 transition-all duration-500 hover:-translate-y-4 hover:border-[#FBF332] hover:shadow-[0_0_40px_rgba(251,243,50,0.25)] ${
                  index % 2 === 0 ? "mt-0" : "lg:mt-16"
                }`}
              >
                <div className="mb-8 w-20 h-20 rounded-2xl bg-[#FBF332]/10 flex items-center justify-center border border-[#FBF332]/30">
                  <Icon
                    size={40}
                    className="text-[#FBF332]"
                  />
                </div>

                <h3 className="text-white text-2xl font-bold mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-400 leading-8">
                  {item.text}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;