import { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import { doctors } from "../../data/we";

export default function We() {
  const [nextDr, setNextDr] = useState(0);

  const handleNextDoctor = () => {
    setNextDr((prev) => (prev === doctors.length - 1 ? 0 : prev + 1));
  };

  const handleBackDoctor = () => {
    setNextDr((prev) => (prev == 0 ? doctors.length - 1 : prev - 1));
  };

  return (
    <section className="w-full pl-28 md:max-w-7xl md:mx-auto md:py-24 relative">
      <div className="">
        <AnimatePresence mode="wait">
          <motion.div
            key={nextDr}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="w-full flex flex-col items-center gap-12 lg:flex-row lg:justify-between"
          >
            <div>
              <h1 className="text-6xl font-bold text-center p-4 text-[#bba98c]">
                {doctors[nextDr].name}
              </h1>
              <p className="max-w-2xl whitespace-pre-line">
                {doctors[nextDr].description}
              </p>
            </div>
            <div className=" rounded-lg relative">
              <img
                src={doctors[nextDr].photo}
                className="h-[400px] md:h-[680px] rounded-lg z-15"
                alt={doctors[nextDr].name}
              />
              <div className="h-22 w-22 bg-amber-200 rounded-md absolute -z-10 -top-8 -right-8"></div>
              <div className="h-22 w-22 bg-amber-200 rounded-md absolute -z-10 -left-8 -bottom-8"></div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center items-center gap-24 py-12">
        <button
          className=" h-20 w-20 bg-gray-200 rounded-full flex justify-center items-center"
          onClick={handleBackDoctor}
        >
          <IoIosArrowBack className="text-gray-700 cursor-pointer" size={48} />
        </button>
        <button
          className=" h-20 w-20 bg-gray-200 rounded-full flex justify-center items-center"
          onClick={handleNextDoctor}
        >
          <IoIosArrowForward
            className="text-gray-700 cursor-pointer"
            size={48}
          />
        </button>
      </div>
    </section>
  );
}
