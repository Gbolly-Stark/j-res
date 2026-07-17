import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Quote, Star } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const reviews = [
  {
    name: "Sarah Johnson",
    role: "Food Blogger",
    image: "https://i.pravatar.cc/150?img=32",
    review:
      "Absolutely the best restaurant experience I've had in Abuja. The food, atmosphere and service were simply outstanding.",
  },
  {
    name: "Michael David",
    role: "Business Executive",
    image: "https://i.pravatar.cc/150?img=12",
    review:
      "From the moment I walked in, everything felt premium. Every meal was beautifully presented and full of flavour.",
  },
  {
    name: "Esther Williams",
    role: "Regular Customer",
    image: "https://i.pravatar.cc/150?img=48",
    review:
      "Jhansi Restaurant never disappoints. Elegant ambience, amazing dishes and exceptional customer service every single visit.",
  },
];

const Review = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = sectionRef.current?.querySelectorAll(".review-card");

    gsap.from(".review-heading", {
      y: 80,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
    });

    gsap.from(sectionRef, {
      y: 100,
      opacity: 0,
      scale: 0.9,
      duration: 1,
      stagger: 0.25,
      ease: "power4.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
      },
    });

    cards?.forEach((card, i) => {
      gsap.to(card, {
        y: -10,
        duration: 2 + i * 0.3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });
  });

  return (
    <section
      ref={sectionRef}
      className="bg-black"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="review-heading text-center mb-20">
          <p className="uppercase tracking-[0.4em] text-[#FBF332] font-semibold mb-4">
            Testimonials
          </p>

          <h2 className="text-5xl md:text-6xl font-black text-white">
            What Our Guests Say
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-6 text-lg leading-8">
            Every smile, every review, and every return visit reminds us why we
            love serving unforgettable dining experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {reviews.map((review) => (
            <div
              key={review.name}
              className="review-card rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-[#FBF332]/60 transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_0_45px_rgba(251,243,50,0.2)]"
            >
              <Quote
                size={42}
                className="text-[#FBF332] mb-8"
              />

              <p className="text-gray-300 leading-8 mb-8 italic">
                "{review.review}"
              </p>

              <div className="flex gap-1 mb-8">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    size={18}
                    fill="#FBF332"
                    color="#FBF332"
                  />
                ))}
              </div>

              <div className="flex items-center gap-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-[#FBF332]"
                />

                <div>
                  <h3 className="text-white font-bold text-lg">
                    {review.name}
                  </h3>

                  <p className="text-gray-400">
                    {review.role}
                  </p>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Review;