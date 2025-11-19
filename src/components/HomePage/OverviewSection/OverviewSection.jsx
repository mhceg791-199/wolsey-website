
import SliderOverView from "./sliderOverView";
import WScrollShape from "../WScrollShape/WScrollShape";
import { useNavigate } from "react-router-dom";

const OverviewSection = () => {
  const nav = useNavigate();
  return (
    <section className="bg-white py-8 md:py-24 lg:py-36 relative overflow-hidden">
      <WScrollShape />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-7 space-y-12 order-2 lg:order-1">
            <h2 className="heading font-extrabold tracking-tight text-neutral-900">
              Engineering Excellence.
              <span className="block text-neutral-500">
                Innovation with Purpose.
              </span>
            </h2>

            <p className="text-xl text-neutral-600 leading-relaxed max-w-2xl">
              Wolsey Structural Engineering sees engineering as both science 
              and story—a balance of strength, design, and imagination. We are 
              guided by precision and inspired by purpose, committed to delivering 
              world-class structural designs that are innovative, sustainable, and 
              precise. Our focus is on providing cost-effective, client-focused 
              solutions that prioritize safety, quality, and environmental responsibility.
            </p>

            <div className="border-l-4 border-mainBrown pl-6 pt-1 pb-1">
              <p className="text-xl font-semibold text-neutral-800 italic">
                "We see engineering as both science and story — a balance of 
                strength, design, and imagination, transforming complex vision 
                into lasting reality."
              </p>
            </div>

            <button className="btn-boder-brown" onClick={() => nav("/about")}>
              Explore Our Full Story
              <span
                className="arrow ml-2"
                style={{ transform: "translate(7px , 7px)" }}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
            </button>
          </div>

          <SliderOverView />
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
