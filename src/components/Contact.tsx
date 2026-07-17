import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  MapPin,
  Phone,
  Clock3,
  MessageCircle,
  
  Music2,
  ArrowRight,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
      },
    });

    tl.from(".contact-subtitle", {
      y: 40,
      opacity: 0,
      duration: 0.8,
    })
      .from(
        ".contact-title",
        {
          y: 80,
          opacity: 0,
          duration: 1,
        },
        "-=0.5"
      )
      .from(
        cardRef.current,
        {
          scale: 0.9,
          opacity: 0,
          duration: 1,
          ease: "power4.out",
        },
        "-=0.5"
      )
      .from(
        ".info",
        {
          y: 40,
          opacity: 0,
          stagger: 0.15,
          duration: 0.8,
        },
        "-=0.5"
      )
      .from(
        ".social-btn",
        {
          y: 30,
          opacity: 0,
          stagger: 0.15,
          duration: 0.7,
        },
        "-=0.3"
      );

    gsap.to(cardRef.current, {
      y: -10,
      repeat: -1,
      yoyo: true,
      duration: 3,
      ease: "sine.inOut",
    });
  });

  return (
    <section
    id="contact"
      ref={sectionRef}
      className="relative overflow-hidden bg-black py-32"
    >
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-[#FBF332]/10 blur-[160px]" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-yellow-300/10 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <p className="contact-subtitle text-center uppercase tracking-[0.45em] text-[#FBF332] font-semibold">
          Visit • Dine • Enjoy
        </p>

        <h2 className="contact-title mt-5 text-center text-5xl md:text-7xl font-black text-white leading-tight">
          Ready For An
          <br />
          Unforgettable Meal?
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-center text-lg leading-8 text-gray-400">
          Experience authentic flavours, premium service and unforgettable
          moments with every visit to Jhansi Restaurant.
        </p>

        <div
          ref={cardRef}
          className="mt-20 rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden"
        >
          <div className="grid lg:grid-cols-2">
                        {/* LEFT SIDE - CONTACT INFO */}
            <div className="p-10 md:p-14">

              <h3 className="text-3xl font-bold text-white mb-8">
                Get In Touch
              </h3>

              <div className="space-y-6">

                <div className="info flex items-center gap-5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FBF332]/10 text-[#FBF332]">
                    <MapPin size={26} />
                  </div>

                  <div>
                    <p className="text-sm text-gray-400">
                      Location
                    </p>

                    <p className="text-white font-semibold">
                      Abuja, Nigeria
                    </p>
                  </div>
                </div>


                <div className="info flex items-center gap-5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FBF332]/10 text-[#FBF332]">
                    <Phone size={26} />
                  </div>

                  <div>
                    <p className="text-sm text-gray-400">
                      Call Us
                    </p>

                    <p className="text-white font-semibold">
                      +234 000 000 0000
                    </p>
                  </div>
                </div>


                <div className="info flex items-center gap-5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FBF332]/10 text-[#FBF332]">
                    <Clock3 size={26} />
                  </div>

                  <div>
                    <p className="text-sm text-gray-400">
                      Opening Hours
                    </p>

                    <p className="text-white font-semibold">
                      Mon - Sun | 10AM - 11PM
                    </p>
                  </div>
                </div>

              </div>


              {/* SOCIAL BUTTONS */}
              <div className="mt-12 flex flex-wrap gap-4">

                <a
                  href="#"
                  className="social-btn flex items-center gap-3 rounded-full bg-[#25D366] px-6 py-3 font-semibold text-black transition hover:scale-105"
                >
                  <MessageCircle size={20}/>
                  WhatsApp
                </a>


                <a
                  href="#"
                  className="social-btn flex items-center gap-3 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 px-6 py-3 font-semibold text-white transition hover:scale-105"
                >
                  
                  Instagram
                </a>


                <a
                  href="#"
                  className="social-btn flex items-center gap-3 rounded-full bg-black border border-white/20 px-6 py-3 font-semibold text-white transition hover:scale-105"
                >
                  <Music2 size={20}/>
                  TikTok
                </a>

              </div>

            </div>
                        {/* RIGHT SIDE - CTA */}
            <div className="flex items-center justify-center border-t border-white/10 p-10 md:p-14 lg:border-t-0 lg:border-l">

              <div className="text-center">

                <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-[#FBF332]/10 text-[#FBF332]">
                  <MessageCircle size={45}/>
                </div>


                <h3 className="text-3xl md:text-4xl font-black text-white">
                  Reserve Your Table
                </h3>


                <p className="mt-5 max-w-md text-gray-400 leading-7">
                  Planning a special dinner, birthday celebration or family
                  gathering? Contact us today and let us create an amazing
                  dining experience for you.
                </p>


                <a
                  href="#"
                  className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#FBF332] px-8 py-4 font-bold text-black transition hover:scale-105"
                >
                  Book A Table
                  <ArrowRight size={20}/>
                </a>

              </div>

            </div>


          </div>
        </div>

      </div>

    </section>
  );
};


export default Contact;