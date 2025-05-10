import React from 'react';
import Image from 'next/image';

// Define the type for a step
interface Step {
  title: string;
  description: string;
  image: string;
}
// Steps data
const steps: Step[] = [
  {
    title: 'Speak to Us',
    description: 'Give your requirement & preferences to our wedding expert',
    image: '/images/how-it-works/speak.webp',
  },
  {
    title: 'See the Options',
    description: 'Get a walkthrough of our designs, pricing & services',
    image: '/images/how-it-works/options.webp',
  },
  {
    title: 'Get Custom Package',
    description: 'Receive a customised package based on your requirement',
    image: '/images/how-it-works/package.webp',
  },
  {
    title: 'Book Us',
    description: 'Pay a small booking fee to confirm once you are happy',
    image: '/images/how-it-works/book.webp',
  },
  {
    title: 'Relax',
    description: 'Sit back & relax while we do all the work',
    image: '/images/how-it-works/relax.webp',
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section className="py-16 bg-white" id="howitworks">
      <div className="container mx-auto px-4 text-center">
        <p className=" text-pink-600 font-semibold mb-2 uppercase tracking-wide">
          How It Works
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800">
          5 Easy Steps for a Hassle-Free Wedding
        </h2>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative w-full h-60">
                <Image
                  src={step.image}
                  alt={step.title}
                  layout="fill"
                  objectFit="cover"
                  className="hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6 flex flex-col items-center">
                <span className="text-lg font-semibold text-primary mb-2">
                  {step.title}
                </span>
                <p className="text-gray-600 text-center">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;