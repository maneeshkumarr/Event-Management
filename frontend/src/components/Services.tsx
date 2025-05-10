import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Service {
  id: string;
  title: string;
  description: string;
  img: string;
}

const Services: React.FC = () => {
  const services: Service[] = [
    {
      id: '01',
      title: 'Decoration',
      description:
        'Transform your special day with our exquisite wedding decorations. From elegant floral arrangements to stunning lighting designs, we create the perfect ambiance to make your dream wedding a reality.',
      img: '/images/var/decoration.webp',
    },
    {
      id: '02',
      title: 'Photography',
      description:
        'Preserve the memories of your big day with our exceptional wedding photography. Our experienced photographers deliver stunning images that tell the story of your love.',
      img: '/images/var/photography.webp',
    },
    {
      id: '03',
      title: 'Videography',
      description:
        'Capture every precious moment of your wedding with our professional videography services. Relive your love story through cinematic films.',
      img: '/images/var/videography.webp',
    },
    {
      id: '04',
      title: 'Makeup and HairStyling',
      description:
        'Look and feel your best with our expert makeup and hairstyling. Our talented artists create flawless looks tailored to your style.',
      img: '/images/var/makeup.webp',
    },
    {
      id: '05',
      title: 'Mehendi',
      description:
        'Adorn your hands and feet with intricate mehendi designs. Our skilled artists add a touch of tradition and elegance to your wedding.',
      img: '/images/var/Mehandi.webp',
    },
    {
      id: '06',
      title: 'Catering',
      description:
        'Delight your guests with our exquisite catering services. Enjoy a feast that complements your joyous occasion with delicious cuisine.',
      img: '/images/var/catering.webp',
    },
    {
      id: '07',
      title: 'Entertainment',
      description:
        'Make your wedding memorable with our entertainment services. Live bands, DJs, and performers keep your celebration lively and fun.',
      img: '/images/var/entrainment.webp',
    },
    {
      id: '08',
      title: 'Venue',
      description:
        'Find the perfect setting for your wedding with our venue selection services. Beautiful locations to match your vision and style.',
      img: '/images/var/venue.webp',
    },
  ];

  return (
    <main>
      <section className="py-16 bg-white" id="services">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="text-sm text-pink-600 font-semibold uppercase tracking-wider">
            Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-12 text-gray-800">
            We Provide Value for Money Services
          </h2>
        </div>
        <div className="max-w-6xl mx-auto px-4 grid gap-16">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className={`flex flex-col md:flex-row items-center gap-10 ${
                index % 2 !== 0 ? 'md:flex-row-reverse' : ''
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Image */}
              <div className="flex-1 relative h-72 md:h-96">
                <motion.div
                  className="rounded-xl shadow-lg overflow-hidden w-full h-full relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={service.img}
                    alt={service.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl"
                    priority={index === 0}
                  />
                </motion.div>
              </div>

              {/* Text */}
              <div className="flex-1 text-center md:text-left">
                <motion.p
                  className="text-4xl font-bold text-gray-300 mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {service.id}
                </motion.p>
                <motion.h3
                  className="text-2xl font-semibold text-gray-800 mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {service.title}
                </motion.h3>
                <motion.p
                  className="text-gray-600 leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  {service.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
};
export default Services;
