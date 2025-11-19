import Slider from "react-slick"; 
import { motion } from 'framer-motion';
import overviewSettings from "../../../data/settings/Overview";
import OverveiwImages from "../../../data/OverveiwImages";

const sliderVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { type: "spring", stiffness: 50, delay: 0.5 }
  }
};

const SliderOverView = () => {
 return (
    <motion.div 
        className="lg:col-span-5 mt-12 lg:mt-0 order-1 lg:order-2"
        variants={sliderVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
    >
        <div className="w-full h-96 overflow-hidden rounded-xl shadow-2xl">
            <Slider {...overviewSettings}>
                {OverveiwImages.map((image) => (
                    <div key={image.id}>
                        <img
                            src={image.src}
                            alt="OverView"
                            className="w-full h-96 object-cover"
                        />
                    </div>
                ))}
            </Slider>
        </div>
    </motion.div>
  );
};

export default SliderOverView;