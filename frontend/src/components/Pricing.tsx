'use client';

import { useState, ChangeEvent, FormEvent } from 'react';

type PlanType = 'Gold' | 'Platinum' | 'Diamond' | null;

interface FormData {
  fullName?: string;
  email?: string;
  [key: string]: string | undefined;
}

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState<PlanType>(null);
  const [formData, setFormData] = useState<FormData>({});

  const handlePlanSelect = (plan: PlanType) => {
    setSelectedPlan(plan);
  };

  const handleBackClick = () => {
    setSelectedPlan(null);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (selectedPlan) {
      localStorage.setItem(selectedPlan, JSON.stringify(formData));
    }
    setFormData({});
    setSelectedPlan(null);
  };

  return (
    <section id="pricing" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-2  text-pink-600">Pricing</h2>
        <p className="text-lg mb-10 text-gray-800">Wedding Event Management Plans</p>
      </div>

      {selectedPlan ? (
        <div className="container mx-auto px-4 max-w-lg bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-6 text-primary">{selectedPlan} Plan Details</h2>
          <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
            <div className="text-left">
              <label className="block mb-1 text-sm font-medium">Full Name:</label>
              <input
                type="text"
                name="fullName"
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-primary/50"
              />
            </div>
            <div className="text-left">
              <label className="block mb-1 text-sm font-medium">Email:</label>
              <input
                type="email"
                name="email"
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-primary/50"
              />
            </div>

            {/* Add more fields as needed */}

            <div className="flex justify-between gap-4 mt-4">
              <button
                type="submit"
                className="flex-1 bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={handleBackClick}
                className="flex-1 bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition"
              >
                Back
              </button>
            </div>
          </form>
        </div>
      ) : (
        <>
          <h1 className="text-center text-4xl font-bold text-gray-800 mb-8">Advance Plans</h1>
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* GOLD PLAN */}
            <PricingCard
              planName="Gold"
              price="₹34,999"
              features={[
                'Venue selection assistance',
                'Basic decoration setup',
                'Wedding day coordination',
              ]}
              onSelect={() => handlePlanSelect('Gold')}
              color="gold"
            />

            {/* PLATINUM PLAN */}
            <PricingCard
              planName="Platinum"
              price="₹49,999"
              features={[
                'Venue selection and booking',
                'Comprehensive decoration setup',
                'Wedding day coordination',
                'Photography and videography',
              ]}
              onSelect={() => handlePlanSelect('Platinum')}
              color="platinum"
            />

            {/* DIAMOND PLAN */}
            <PricingCard
              planName="Diamond"
              price="₹74,999"
              features={[
                'Exclusive venue selection and booking',
                'Luxury decoration setup',
                'Wedding day coordination',
                'Photography, videography, and live streaming',
                'Customized wedding planning services',
              ]}
              onSelect={() => handlePlanSelect('Diamond')}
              color="diamond"
            />
          </div>

          <div className="container mx-auto px-4 mb-12">
            <aside className="text-center text-sm text-gray-500">
              Prices include all applicable taxes. You can cancel at any time.<br />
              All plans include the following:
            </aside>
          </div>

          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                text={feature.text}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}

interface PricingCardProps {
  planName: string;
  price: string;
  features: string[];
  onSelect: () => void;
  color: 'gold' | 'platinum' | 'diamond';
}

const PricingCard: React.FC<PricingCardProps> = ({
  planName,
  price,
  features,
  onSelect,
  color,
}) => {
  const bgColor = {
    gold: 'bg-yellow-400 text-yellow-900',
    platinum: 'bg-gray-400 text-gray-900',
    diamond: 'bg-indigo-600 text-white',
  };

  return (
    <div className="rounded-lg shadow-lg bg-white flex flex-col">
      <div className={`p-6 rounded-t-lg ${bgColor[color]}`}>
        <h3 className="text-xl font-bold">{planName}</h3>
        <p className="text-3xl font-extrabold">{price}</p>
      </div>
      <ul className="flex-1 p-6 space-y-4 text-left">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-700">
            ✅ <span className="ml-2">{feature}</span>
          </li>
        ))}
      </ul>
      <div className="p-6">
        <button
          onClick={onSelect}
          className="w-full bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition"
        >
          Plan your wedding
        </button>
      </div>
    </div>
  );
};

interface FeatureCardProps {
  icon: string;
  title: string;
  text: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, text }) => (
  <div className="bg-white rounded-lg shadow p-6 text-center">
    <div className="text-4xl mb-4">{icon}</div>
    <h4 className="text-lg font-semibold mb-2">{title}</h4>
    <p className="text-gray-600 text-sm">{text}</p>
  </div>
);

const features = [
  {
    icon: '📋',
    title: 'Comprehensive planning',
    text: 'Our team handles all aspects of the wedding planning process.',
  },
  {
    icon: '🤝',
    title: 'Vendor coordination',
    text: 'We work with top vendors to ensure a seamless event.',
  },
  {
    icon: '🎯',
    title: 'Attention to detail',
    text: 'Every detail is meticulously planned and executed.',
  },
  {
    icon: '🎨',
    title: 'Customizable packages',
    text: 'Tailor our services to match your unique vision.',
  },
];
