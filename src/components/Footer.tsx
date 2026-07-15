import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {

  Phone,
  Mail,
  MapPin,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from(".footer-item", {
      y: 80,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power4.out",
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 85%",
      },
    });
  });

  return (
    <footer
      ref={footerRef}
      className="relative overflow-hidden bg-black border-t border-white/10"
    >
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-[#FBF332]/10 blur-[160px]" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-yellow-400/10 blur-[170px]" />

      <div className="relative max-w-7xl mx-auto px-6 py-24">

        <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-4">

          <div className="footer-item">
            <h2 className="text-4xl font-black text-[#FBF332]">
              Jhansi
            </h2>

            <p className="mt-5 text-gray-400 leading-8">
              Experience premium dining with authentic flavours,
              elegant ambience and unforgettable hospitality.
            </p>
          </div>

          <div className="footer-item">
            <h3 className="text-white text-2xl font-bold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4 text-gray-400">
              <li><a href="#home" className="hover:text-[#FBF332] transition">Home</a></li>
              <li><a href="#about" className="hover:text-[#FBF332] transition">About</a></li>
              <li><a href="#menu" className="hover:text-[#FBF332] transition">Menu</a></li>
              <li><a href="#contact" className="hover:text-[#FBF332] transition">Contact</a></li>
            </ul>
          </div>

          <div className="footer-item">
            <h3 className="text-white text-2xl font-bold mb-6">
              Contact
            </h3>

            <div className="space-y-5">

              <div className="flex items-center gap-3 text-gray-400">
                <Phone size={18} className="text-[#FBF332]" />
                +234 800 000 0000
              </div>

              <div className="flex items-center gap-3 text-gray-400">
                <Mail size={18} className="text-[#FBF332]" />
                hello@jhansi.com
              </div>

              <div className="flex items-center gap-3 text-gray-400">
                <MapPin size={18} className="text-[#FBF332]" />
                Abuja, Nigeria
              </div>

            </div>
          </div>

          <div className="footer-item">
            <h3 className="text-white text-2xl font-bold mb-6">
              Follow Us
            </h3>

            <div className="flex gap-4">

              <a
                href="#"
                className="flex h-14 w-14 items-center justify-center rounded-full bg-white/5 transition hover:-translate-y-2 hover:bg-[#FBF332] hover:text-black"
              >
                
              </a>

              <a
                href="#"
                className="flex h-14 w-14 items-center justify-center rounded-full bg-white/5 transition hover:-translate-y-2 hover:bg-[#FBF332] hover:text-black"
              >
                
              </a>

            </div>
          </div>

        </div>

        <div className="mt-20 border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between">

          <p className="text-gray-500">
            © 2026 Jhansi Restaurant. All Rights Reserved.
          </p>

          <p className="text-gray-500 mt-4 md:mt-0">
            Designed & Developed by{" "}
            <span className="text-[#FBF332] font-bold">
              G STARK
            </span>
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;