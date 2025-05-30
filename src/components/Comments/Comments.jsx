import { clientsCOmments } from "../../data/clientsComments";
import { motion } from "framer-motion";

export default function Comments() {
  return (
    <div className="bg-amber-100 w-full">
      <section className="max-w-7xl mx-auto py-12 flex flex-wrap justify-center items-start gap-8">
        {clientsCOmments.map((comment, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col gap-4 bg-white w-[400px] p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="flex gap-4">
              <img
                src={comment.avatar}
                alt="imagen del usuario"
                className="rounded-full w-16 h-16 ring-4 ring-amber-200 hover:ring-amber-400 transition duration-300"
              />
              <p className="self-center text-xl font-semibold">
                {comment.username}
              </p>
            </div>
            <div className="flex gap-8">
              <p>⭐⭐⭐⭐⭐</p>
              <p className="text-gray-400 text-sm">{comment.date}</p>
            </div>
            <div>
              <p className="text-gray-600">{comment.comment}</p>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
}
