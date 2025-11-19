import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./firstSection.css";

export default function HeroHome() {
  return (
    <section className="relative h-[85vh] overflow-hidden bg-black">
      {/*  Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-80"
        style={{ backgroundImage: "url('/home/firstSection.webp')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent"></div>
      </div>

      {/*  Content */}
      <div className="relative z-10 flex flex-col justify-center items-start h-full px-6 lg:px-20">
        {/* Slider Statement */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold text-mainDark mb-4 leading-tight"
        >
          Innovative Project <span className="text-mainGold">Solutions.</span>
          <br />
          <span className=" text-xl md:text-3xl">
            Built on precision. Driven by purpose.
          </span>
        </motion.h1>

        {/* Short Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-gray-300 text-lg md:text-xl max-w-xl mb-8"
        >
          Since 2006,{" "}
          <span className="text-mainGold">Wolsey Structural Engineering </span>
          has grown from a passionate local firm into a global leader, now
          proudly a subsidiary of{" "}
          <span className="font-bold"> Mosaic Holding Corporation</span>. With
          over 3,000 projects completed across more than 10 countries, we turn
          complex structural challenges into lasting, meaningful structures that
          shape skylines and communities.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
        >
          <Link to="/about" className="btn-boder-white text-white w-full">
            Learn More
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-sm text-gray-400 mb-2">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-[2px] h-8 bg-mainGold rounded-full"
        ></motion.div>
      </motion.div>
    </section>
  );
}
