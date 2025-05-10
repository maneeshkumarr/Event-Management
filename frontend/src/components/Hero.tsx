import React from "react";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
  return (
    <section className="bg-white pt-20 md:pt-28 py-16 px-6 md:px-12">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Text Box */}
        <motion.div
          className="flex-1 space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            From the moment you say &apos;Yes&apos; to the moment you say &apos;I Do,&apos; we take care of everything.
          </h1>

          <p className="text-lg text-gray-600">
            Experience the joy of wedding planning without the hassle. From initial consultations to the final send-off,
            our dedicated team is here to curate your dream wedding, leaving you with unforgettable memories that last
            a lifetime.
          </p>

          

          {/* Delivered Stats */}
          <div className="flex items-center gap-4 mt-8">
            <motion.div
              className="flex items-center justify-center w-12 h-12 rounded-full bg-pink-100 text-pink-600 text-xl font-bold"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.6 }}
            >
              🎉
            </motion.div>
            <p className="text-sm text-gray-500">
              <span className="font-bold text-gray-900">250+</span> ordered completed last year!
            </p>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/decoration.png" // 👈 Replace with your actual image path
            alt="Wedding Couple"
            className="max-w-full h-auto object-contain rounded-xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
