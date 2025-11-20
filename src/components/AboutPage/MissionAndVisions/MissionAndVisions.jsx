// import { motion } from "framer-motion";
// import SectionHeader from "../../shared/SectionHeader/SectionHeader";

// export default function MissionAndVisions({
//   title = "MISSION",
//   title2 = "VISION",
//   img = "/about/mission.webp",
// }) {
//   return (
//     <section className="relative h-[50vh] md:h-[75vh] w-full bg-mainDark overflow-hidden flex flex-col  justify-center px-4 text-center">
//       {/* W SHAPE AS MASK */}
//       <motion.div
//         initial={{ opacity: 0, scale: 1.1 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 1 }}
//         className="absolute inset-0 flex items-center justify-center"
//         style={{
//           WebkitMaskImage: `url('/w-mask.svg')`,
//           maskImage: `url('/w-mask.svg')`,
//           WebkitMaskSize: "80% auto",
//           maskSize: "80% auto",
//           WebkitMaskPosition: "center",
//           maskPosition: "center",
//           WebkitMaskRepeat: "no-repeat",
//           maskRepeat: "no-repeat",
//           backgroundImage: `url(${img})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       />

//       <div className="text-start md:ps-20 mb-5">
//         {/* TITLE */}
//         <motion.h2
//           initial={{ opacity: 0, y: 25 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="relative z-20 text-white text-4xl md:text-6xl tracking-wider mb-4"
//         >
//           <SectionHeader firstWord={title} />
//         </motion.h2>

//         {/* MISSION CONTENT */}
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.3 }}
//           className="relative z-20 max-w-3xl text-white/80 text-sm md:text-base leading-relaxed"
//         >
//           Wolsey Structural Engineering is committed to delivering world-class
//           structural designs providing innovative, sustainable, and precise
//           solutions. Our client-focused approach ensures cost-effective results
//           that exceed expectations while prioritizing safety, quality, and
//           environmental responsibility.
//         </motion.p>
//       </div>

//       <div className="text-start md:ps-20">
//         {/* TITLE */}
//         <motion.h2
//           initial={{ opacity: 0, y: 25 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="relative z-20 text-white  text-4xl md:text-6xl tracking-wider mb-4"
//         >
//           <SectionHeader firstWord={title2} />
//         </motion.h2>

//         {/* MISSION CONTENT */}
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.3 }}
//           className="relative z-20 max-w-3xl text-white/80 text-sm md:text-base leading-relaxed"
//         >
//           To be a vanguard in structural engineering, shaping the future of the
//           built environment through pioneering sustainable and aesthetically
//           compelling and constructible solutions that redefine modern
//           construction.
//         </motion.p>
//       </div>
//     </section>
//   );
// }
import { motion } from "framer-motion";
import SectionHeader from "../../shared/SectionHeader/SectionHeader";

export default function MissionAndVisions({
  title = "MISSION",
  title2 = "VISION",
  img = "/about/mission.webp",
}) {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden flex flex-col justify-center px-6 md:px-20 text-start">
      
      {/* Background Image + Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.85)), url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Content Wrapper */}
      <div className="relative z-20 max-w-3xl space-y-16">
        
        {/* MISSION */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-4xl md:text-6xl tracking-wider mb-4"
          >
            <SectionHeader firstWord={title} />
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-white/80 text-sm md:text-base leading-relaxed"
          >
            Wolsey Structural Engineering is committed to delivering world-class
            structural designs providing innovative, sustainable, and precise
            solutions. Our client-focused approach ensures cost-effective
            results that exceed expectations while prioritizing safety, quality,
            and environmental responsibility.
          </motion.p>
        </div>

        {/* VISION */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-4xl md:text-6xl tracking-wider mb-4"
          >
            <SectionHeader firstWord={title2} />
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-white/80 text-sm md:text-base leading-relaxed"
          >
            To be a vanguard in structural engineering, shaping the future of
            the built environment through pioneering sustainable and
            aesthetically compelling and constructible solutions that redefine
            modern construction.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
