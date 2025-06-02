import { useState, useRef, useEffect } from "react";
import { OURSERVICES } from "../../data/ourservices";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function OurServices() {
  const [visibleCount, setVisibleCount] = useState(3);
  const lastCardRef = useRef(null);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  useEffect(() => {
    if (lastCardRef.current && visibleCount > 3) {
      lastCardRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [visibleCount]);

  const visibleServices = OURSERVICES.slice(0, visibleCount);

  return (
    <section className="max-w-7xl mx-auto py-12 px-4">
      <h2 className="text-6xl font-bold text-center p-4 text-[#bba98c]">
        Our Services
      </h2>

      <div className="flex flex-wrap items-stretch gap-6 justify-center">
        <AnimatePresence>
          {visibleServices.map((el, index) => {
            const isLast = index === visibleServices.length - 1;
            return (
              <ServiceCard
                key={index}
                data={el}
                isLast={isLast}
                refCard={isLast ? lastCardRef : null}
              />
            );
          })}
        </AnimatePresence>
      </div>

      {visibleCount < OURSERVICES.length && (
        <div className="flex justify-center mt-10">
          <button
            onClick={handleLoadMore}
            className="bg-[#bba98c] hover:bg-[#a89375] text-white font-semibold px-6 py-2 rounded-lg transition-colors duration-300"
          >
            Load more
          </button>
        </div>
      )}
    </section>
  );
}

// Tarjeta con animación por scroll
function ServiceCard({ data, isLast, refCard }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={(node) => {
        ref(node);
        if (refCard) refCard.current = node;
      }}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="Card pt-12 w-full sm:w-[300px] flex flex-col"
    >
      <div className="relative">
        <img
          src={data.img}
          alt={data.title}
          className="img-card w-full object-cover h-48 rounded-t-xl"
        />
      </div>
      <div className="info-card bg-amber-100 p-4 h-full flex flex-col justify-between gap-2 rounded-b-xl shadow-lg">
        <p className="text-[#e9ad4c] text-2xl font-bold">{data.title}</p>
        <p className="text-base line-clamp-3">{data.aboutServices}</p>
        <div className="flex justify-between">
          <p className="text-sm font-medium text-gray-700">{data.time}</p>
          <p className="text-sm font-medium text-gray-700">{data.price}</p>
        </div>
      </div>
    </motion.div>
  );
}
