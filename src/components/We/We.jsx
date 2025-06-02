import { useState, useRef } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { doctors } from "../../data/we";

export default function We() {
  const [nextDr, setNextDr] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const handleNextDoctor = () => {
    setNextDr((prev) => (prev === doctors.length - 1 ? 0 : prev + 1));
  };

  const handleBackDoctor = () => {
    setNextDr((prev) => (prev === 0 ? doctors.length - 1 : prev - 1));
  };

  return (
    <section
      ref={sectionRef}
      className="w-full pl-28 md:max-w-7xl md:mx-auto md:py-24 relative"
    >
      <div className="">
        <AnimatePresence mode="wait">
          <motion.div
            key={nextDr}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="w-full flex flex-col items-center gap-12 lg:flex-row lg:justify-center lg:gap-24 "
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-6xl font-bold text-center p-4 text-[#bba98c]">
                {doctors[nextDr].name}
              </h1>
              <p className="max-w-2xl whitespace-pre-line">
                {doctors[nextDr].description}
              </p>
            </motion.div>

            <motion.div
              className="rounded-lg relative mt-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src={doctors[nextDr].photo}
                className="h-[200px] md:h-[500px] rounded-lg z-15"
                alt={doctors[nextDr].name}
              />
              <div className="h-14 w-14 bg-amber-200 rounded-md absolute -z-10 -top-4 -right-4"></div>
              <div className="h-14 w-14 bg-amber-200 rounded-md absolute -z-10 -left-4 -bottom-4"></div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      <motion.div
        className="flex justify-center items-center gap-24 py-4"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <button
          className=" h-12 w-12 bg-gray-200 rounded-full flex justify-center items-center"
          onClick={handleBackDoctor}
        >
          <IoIosArrowBack className="text-gray-700 cursor-pointer" size={24} />
        </button>
        <button
          className=" h-12 w-12 bg-gray-200 rounded-full flex justify-center items-center"
          onClick={handleNextDoctor}
        >
          <IoIosArrowForward
            className="text-gray-700 cursor-pointer"
            size={24}
          />
        </button>
      </motion.div>
    </section>
  );
}
