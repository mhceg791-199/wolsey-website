import { useContext } from "react";
import { careerModalContext } from "../../../context/careerContext";
import CareerModal from "../BriefCareer/CareerModel/CareerModel";
import Paragraph from "../../shared/Paragraph/Paragraph";
import SectionHeader from "../../shared/SectionHeader/SectionHeader";
import { motion } from "framer-motion";

function ReadyToJoin() {
  const { setOpen } = useContext(careerModalContext);
  const openModal = () => {
    setOpen(true);
  };
  return (
    <>
    <section className="relative md:py-12 overflow-hidden bg-black text-white">
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#141414] to-mainBrown"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      ></motion.div>

      <motion.div
        className="absolute top-1/3 left-1/4 w-64 h-64 bg-mainBrown rounded-full blur-3xl opacity-60"
        animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>

      <div className="relative z-10 w-3/4 mx-auto text-center md:py-8">
        <div className="m-auto my-6">
          <SectionHeader firstWord="Ready to " secondWord="Join Us?" />
        </div>

        <Paragraph
          p="Pioneer the future with a team dedicated to ambition, excellence, and boundless growth. Explore opportunities to elevate your career with a firm invested in your global impac"
        />

        <div className="text-center my-5">
          <button
            onClick={openModal}
            className="btn-boder-white"
          >
            Become Part of Our Team
          </button>
          <CareerModal />
        </div>
      </div>
    </section>
    </>
  );
}

export default ReadyToJoin;
