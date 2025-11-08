"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaCheck, FaCrown, FaInfinity, FaStar, FaTv, FaMobileAlt, FaTabletAlt, FaLaptop, FaRocket, FaShieldAlt, FaGift, FaBolt, FaChevronDown } from "react-icons/fa";
import { useState } from "react";

const lifetimeFeatures = [
  "One-Time Payment",
  "Regular Updates",
  "Extensive Channels",
  "Multi-Device Support",
  "Premium Quality",
  "24/7 Customer Support",
];

const lifetimePlans = [
  {
    devices: "1 Device",
    price: "289",
    paymentLink: "https://t.growth4ch.shop/",
    popular: true,
    features: [
      "25,000+ Live TV Channels",
      "60,000+ Movies & Series",
      "HD & 4K Streaming Quality",
      "One-Time Payment",
      "Regular Content Updates",
      "24/7 Customer Support",
    ],
  },
  {
    devices: "2 Devices",
    price: "416",
    paymentLink: "https://wa.link/tt8c55",
    popular: false,
    features: [
      "25,000+ Live TV Channels",
      "60,000+ Movies & Series",
      "HD & 4K Streaming Quality",
      "One-Time Payment",
      "Regular Content Updates",
      "24/7 Customer Support",
    ],
  },
  {
    devices: "3 Devices",
    price: "543",
    paymentLink: "https://wa.link/tt8c55",
    popular: false,
    features: [
      "25,000+ Live TV Channels",
      "60,000+ Movies & Series",
      "HD & 4K Streaming Quality",
      "One-Time Payment",
      "Regular Content Updates",
      "24/7 Customer Support",
    ],
  },
  {
    devices: "4 Devices",
    price: "670",
    paymentLink: "https://wa.link/tt8c55",
    popular: false,
    features: [
      "25,000+ Live TV Channels",
      "60,000+ Movies & Series",
      "HD & 4K Streaming Quality",
      "One-Time Payment",
      "Regular Content Updates",
      "24/7 Customer Support",
    ],
  },
  {
    devices: "5 Devices",
    price: "797",
    paymentLink: "https://wa.link/tt8c55",
    popular: false,
    features: [
      "25,000+ Live TV Channels",
      "60,000+ Movies & Series",
      "HD & 4K Streaming Quality",
      "One-Time Payment",
      "Regular Content Updates",
      "24/7 Customer Support",
    ],
  },
];

const faqData = [
  {
    question: "What does 'Lifetime Access' mean?",
    answer: "Lifetime access means you pay once and get unlimited access to all our IPTV channels and VOD content forever. No monthly fees, no recurring charges, no expiration date. Your subscription will remain active for as long as our service operates."
  },
  {
    question: "Can I upgrade my device limit later?",
    answer: "Yes! You can upgrade from a lower device plan to a higher one at any time. Simply contact our support team, and we'll calculate the difference and help you upgrade seamlessly."
  },
  {
    question: "What happens if I change my devices?",
    answer: "You can change your devices anytime. Your lifetime plan is tied to the number of simultaneous connections, not specific devices. You have full flexibility to switch between different devices whenever you want."
  },
  {
    question: "Is there any quality difference between plans?",
    answer: "No! All lifetime plans offer the same premium quality streaming in HD and 4K, access to all 25,000+ channels and 60,000+ VOD content. The only difference is the number of simultaneous devices you can use."
  },
  {
    question: "Do you offer refunds on lifetime plans?",
    answer: "We offer a satisfaction guarantee. If you're not satisfied within the first 7 days, contact our support team. We stand behind the quality of our service and want you to be completely happy with your purchase."
  },
  {
    question: "Will I get updates and new channels?",
    answer: "Absolutely! Your lifetime plan includes all future updates, new channel additions, and feature improvements at no extra cost. We continuously expand our content library and improve our service."
  }
];

const advantages = [
  {
    icon: FaRocket,
    title: "Instant Activation",
    description: "Get immediate access to all channels and content right after purchase. No waiting, no delays."
  },
  {
    icon: FaShieldAlt,
    title: "Secure Payment",
    description: "Your transaction is protected with industry-standard encryption. Safe and secure checkout process."
  },
  {
    icon: FaGift,
    title: "Best Value",
    description: "Save thousands compared to monthly subscriptions. One payment for unlimited entertainment."
  },
  {
    icon: FaBolt,
    title: "No Contracts",
    description: "No long-term contracts or commitments. Just pure, unlimited access to premium entertainment."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function LifetimePlans() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="relative py-24 overflow-hidden bg-background dark:bg-gradient-to-b dark:from-gray-900 dark:to-black">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-blue-500/5 animate-gradient-x" />
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <div className="p-1 rounded-lg bg-primary/10 dark:bg-gradient-to-r dark:from-primary/20 dark:to-blue-500/20 mb-4">
              <span className="text-primary dark:text-white text-sm font-medium px-4 py-2 flex items-center gap-2">
                <FaInfinity className="w-4 h-4" />
                Lifetime Access
              </span>
            </div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-foreground dark:text-white mb-4"
          >
            Lifetime IPTV Plans
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-muted-foreground dark:text-gray-400 max-w-3xl mx-auto text-lg mb-8"
          >
            Pay once and enjoy unlimited entertainment forever! Get lifetime access to 25,000+ live channels and 60,000+ VOD content with our exclusive one-time payment plans.
          </motion.p>
        </div>

        {/* Lifetime Plans Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="relative"
        >
          <div className="relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-blue-500/5 rounded-3xl" />

            <div className="relative rounded-3xl bg-background/50 dark:bg-gray-800/50 backdrop-blur-sm border border-primary/20 dark:border-primary-hover/20 p-8 md:p-12 overflow-hidden group hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500">
              {/* Section Header */}
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground dark:text-white mb-4 flex items-center gap-3 justify-center">
                  Choose Your Lifetime Plan
                  <span className="inline-flex items-center justify-center bg-primary/10 dark:bg-primary-hover/10 text-primary dark:text-primary-hover p-1.5 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <FaStar className="w-5 h-5" />
                  </span>
                </h2>
                <p className="text-muted-foreground dark:text-gray-400 max-w-2xl mx-auto">
                  Select the number of devices you need. One-time payment for endless entertainment!
                </p>
              </div>

              {/* Lifetime Plans Grid */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12"
              >
                {lifetimePlans.map((plan, index) => (
                  <motion.div
                    key={plan.devices}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    className={`relative group rounded-2xl bg-background/50 dark:bg-gray-800/50 backdrop-blur-sm border border-border dark:border-gray-800/50 p-6 transition-all duration-300 hover:shadow-xl hover:scale-105 ${
                      plan.popular
                        ? "ring-2 ring-primary dark:ring-primary-hover scale-105"
                        : ""
                    }`}
                  >
                    {/* Popular Badge */}
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary dark:bg-primary-hover text-white text-sm rounded-full flex items-center gap-2 whitespace-nowrap">
                        <FaCrown className="w-3 h-3" />
                        <span>Best Value</span>
                      </div>
                    )}

                    {/* Device Count */}
                    <div className="text-lg font-semibold text-foreground dark:text-white mb-2 text-center">
                      {plan.devices}
                    </div>

                    {/* Price */}
                    <div className="flex items-baseline justify-center mb-6">
                      <span className="text-2xl font-bold text-primary dark:text-primary-hover">
                        $
                      </span>
                      <span className="text-4xl font-bold text-foreground dark:text-white mx-1">
                        {plan.price}
                      </span>
                      <span className="text-muted-foreground dark:text-gray-400 text-sm">
                        .00
                      </span>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-border dark:bg-gray-800/50 w-full my-6" />

                    {/* Features List */}
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-center text-sm text-muted-foreground dark:text-gray-400 group-hover:text-foreground dark:group-hover:text-gray-300 transition-colors duration-300"
                        >
                          <div className="w-5 h-5 rounded-full bg-primary/10 dark:bg-primary-hover/10 flex items-center justify-center mr-3 group-hover:bg-primary/20 dark:group-hover:bg-primary-hover/20 transition-colors duration-300 flex-shrink-0">
                            <FaCheck className="w-3 h-3 text-primary dark:text-primary-hover" />
                          </div>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <Link href={plan.paymentLink}>
                      <button className="w-full py-3 px-4 rounded-xl text-white dark:text-primary bg-[#004275] dark:bg-white hover:bg-[#003366] dark:hover:bg-gray-100 font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                        GET LIFETIME
                      </button>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>

              {/* Features Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {lifetimeFeatures.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 text-foreground dark:text-white group/item"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-primary/10 to-blue-500/10 dark:from-primary-hover/10 dark:to-blue-400/10 flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                      <FaCheck className="w-3 h-3 text-primary dark:text-primary-hover" />
                    </div>
                    <span className="text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-r from-primary/5 to-blue-500/5 dark:from-primary-hover/5 dark:to-blue-400/5 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2 group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-r from-blue-500/5 to-primary/5 dark:from-blue-400/5 dark:to-primary-hover/5 rounded-full blur-3xl -z-10 transform -translate-x-1/2 translate-y-1/2 group-hover:scale-110 transition-transform duration-500" />
            </div>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-blue-50 dark:bg-gray-800/30 rounded-2xl p-8 max-w-3xl mx-auto border border-primary/20">
            <h3 className="text-xl font-bold text-foreground dark:text-white mb-4 flex items-center gap-2 justify-center">
              <FaInfinity className="w-6 h-6 text-primary dark:text-primary-hover" />
              Why Choose Lifetime?
            </h3>
            <ul className="text-left space-y-3 text-muted-foreground dark:text-gray-400">
              <li className="flex items-start gap-2">
                <FaCheck className="w-4 h-4 text-primary dark:text-primary-hover mt-1 flex-shrink-0" />
                <span>No monthly fees or recurring charges - pay once and you&apos;re done!</span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheck className="w-4 h-4 text-primary dark:text-primary-hover mt-1 flex-shrink-0" />
                <span>Access to all 25,000+ channels and 60,000+ VOD content forever</span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheck className="w-4 h-4 text-primary dark:text-primary-hover mt-1 flex-shrink-0" />
                <span>Regular content updates and channel additions at no extra cost</span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheck className="w-4 h-4 text-primary dark:text-primary-hover mt-1 flex-shrink-0" />
                <span>Priority 24/7 customer support for lifetime members</span>
              </li>
            </ul>
          </div>

          <p className="text-sm text-muted-foreground dark:text-gray-400 mt-8">
            *All prices are in USD. No additional taxes. Lifetime access is a one-time payment with no expiration.
          </p>
        </motion.div>

        {/* 3D Device Showcase Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground dark:text-white mb-4">
              Watch On Any Device
            </h2>
            <p className="text-muted-foreground dark:text-gray-400 max-w-2xl mx-auto">
              Stream your favorite content seamlessly across all your devices. Our lifetime IPTV service works flawlessly on TVs, phones, tablets, and computers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: FaTv, name: "Smart TV", description: "LG, Samsung, Android TV" },
              { icon: FaMobileAlt, name: "Mobile", description: "iOS & Android Phones" },
              { icon: FaTabletAlt, name: "Tablet", description: "iPad & Android Tablets" },
              { icon: FaLaptop, name: "Computer", description: "Windows, Mac, Linux" }
            ].map((device, index) => (
              <motion.div
                key={device.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="relative bg-gradient-to-br from-primary/5 to-blue-500/5 dark:from-primary-hover/10 dark:to-blue-400/10 rounded-2xl p-8 border border-primary/20 dark:border-primary-hover/20 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
                  {/* 3D Effect Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                       style={{ transform: 'translateZ(20px)' }}></div>

                  {/* Icon Container with 3D effect */}
                  <div className="relative mb-6 transform transition-all duration-500 group-hover:scale-110"
                       style={{ transformStyle: 'preserve-3d' }}>
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary to-blue-500 dark:from-primary-hover dark:to-blue-400 rounded-2xl flex items-center justify-center shadow-xl transform transition-all duration-500 group-hover:rotate-y-12"
                         style={{
                           transform: 'rotateY(0deg) rotateX(0deg)',
                           transition: 'transform 0.5s ease',
                         }}>
                      <device.icon className="w-10 h-10 text-white" />
                    </div>
                    {/* 3D Shadow */}
                    <div className="absolute inset-0 bg-primary/20 blur-xl transform translate-y-2 group-hover:translate-y-4 transition-all duration-500"></div>
                  </div>

                  <h3 className="text-xl font-bold text-foreground dark:text-white mb-2 text-center">
                    {device.name}
                  </h3>
                  <p className="text-sm text-muted-foreground dark:text-gray-400 text-center">
                    {device.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Advantages Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground dark:text-white mb-4">
              Why Choose Lifetime IPTV?
            </h2>
            <p className="text-muted-foreground dark:text-gray-400 max-w-2xl mx-auto">
              Discover the unbeatable advantages of choosing a lifetime IPTV subscription over traditional monthly plans.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-background/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-border dark:border-gray-800/50 hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-blue-500/10 dark:from-primary-hover/10 dark:to-blue-400/10 rounded-xl flex items-center justify-center mb-4">
                  <advantage.icon className="w-7 h-7 text-primary dark:text-primary-hover" />
                </div>
                <h3 className="text-lg font-bold text-foreground dark:text-white mb-2">
                  {advantage.title}
                </h3>
                <p className="text-sm text-muted-foreground dark:text-gray-400">
                  {advantage.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Comparison Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground dark:text-white mb-4">
              Lifetime vs Monthly: The Math Speaks
            </h2>
            <p className="text-muted-foreground dark:text-gray-400 max-w-2xl mx-auto">
              See how much you save with a one-time lifetime payment compared to monthly subscriptions.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Monthly Plan */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-background/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-border dark:border-gray-800/50"
              >
                <h3 className="text-2xl font-bold text-foreground dark:text-white mb-6 flex items-center gap-2">
                  <span className="text-red-500">📅</span> Monthly Plan
                </h3>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground dark:text-gray-400">Monthly Cost:</span>
                    <span className="font-bold text-foreground dark:text-white">$10.99</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground dark:text-gray-400">After 1 Year:</span>
                    <span className="font-bold text-foreground dark:text-white">$131.88</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground dark:text-gray-400">After 2 Years:</span>
                    <span className="font-bold text-foreground dark:text-white">$263.76</span>
                  </div>
                  <div className="flex justify-between border-t border-border dark:border-gray-700 pt-4">
                    <span className="text-muted-foreground dark:text-gray-400">After 3 Years:</span>
                    <span className="font-bold text-xl text-red-500">$395.64</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground dark:text-gray-400 italic">
                  * Continuous monthly payments required
                </p>
              </motion.div>

              {/* Lifetime Plan */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-primary/10 to-blue-500/10 dark:from-primary-hover/10 dark:to-blue-400/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-primary dark:border-primary-hover relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 bg-green-500 text-white text-xs px-3 py-1 rounded-bl-lg font-bold">
                  BEST VALUE
                </div>
                <h3 className="text-2xl font-bold text-foreground dark:text-white mb-6 flex items-center gap-2">
                  <FaInfinity className="text-primary dark:text-primary-hover" /> Lifetime Plan
                </h3>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground dark:text-gray-400">One-Time Cost:</span>
                    <span className="font-bold text-foreground dark:text-white">$289.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground dark:text-gray-400">After 1 Year:</span>
                    <span className="font-bold text-green-600 dark:text-green-400">$289.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground dark:text-gray-400">After 2 Years:</span>
                    <span className="font-bold text-green-600 dark:text-green-400">$289.00</span>
                  </div>
                  <div className="flex justify-between border-t border-primary/20 dark:border-primary-hover/20 pt-4">
                    <span className="text-muted-foreground dark:text-gray-400">After 3 Years:</span>
                    <span className="font-bold text-xl text-green-600 dark:text-green-400">$289.00</span>
                  </div>
                </div>
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3 text-center">
                  <p className="text-lg font-bold text-green-600 dark:text-green-400">
                    Save $106.64+ in 3 Years!
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* SEO Content Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-24"
        >
          <div className="max-w-4xl mx-auto bg-background/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-border dark:border-gray-800/50">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground dark:text-white mb-6">
              What is Lifetime IPTV and Why Choose Necro IPTV?
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground dark:text-gray-400 space-y-4">
              <p>
                Lifetime IPTV represents the future of home entertainment, offering an unbeatable combination of affordability, quality, and convenience. At Necro IPTV, we revolutionize how you consume media by providing permanent access to premium content with just a single payment.
              </p>
              <p>
                Our lifetime IPTV subscription gives you unlimited access to over 25,000 live television channels from around the world, including sports, news, entertainment, movies, and specialty channels. Additionally, enjoy our vast library of 60,000+ movies and TV series on demand, all available in stunning HD and 4K quality.
              </p>
              <p>
                Unlike traditional cable or satellite TV services that lock you into expensive monthly contracts, Necro IPTV&apos;s lifetime plans offer true freedom. Pay once, and never worry about monthly bills again. Your subscription includes all future content updates, new channel additions, and service improvements at no additional cost.
              </p>
              <p>
                We support all major devices and platforms, including Smart TVs (Samsung, LG, Android TV), streaming devices (Firestick, Roku, Apple TV), mobile devices (iOS and Android), tablets, and computers. Watch your favorite shows anywhere, anytime, on up to 5 simultaneous devices depending on your chosen plan.
              </p>
              <p>
                Our commitment to quality extends beyond content. We provide buffer-free streaming with reliable servers, 24/7 customer support, and regular technical updates to ensure you always have the best viewing experience. Join thousands of satisfied customers who have already made the smart choice to invest in lifetime IPTV access.
              </p>
            </div>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground dark:text-gray-400 max-w-2xl mx-auto">
              Got questions? We&apos;ve got answers. Find everything you need to know about our lifetime IPTV plans.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqData.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-background/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-border dark:border-gray-800/50 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-muted/50 dark:hover:bg-gray-700/30 transition-colors duration-200"
                >
                  <span className="font-semibold text-foreground dark:text-white pr-4">
                    {faq.question}
                  </span>
                  <FaChevronDown
                    className={`w-5 h-5 text-primary dark:text-primary-hover flex-shrink-0 transition-transform duration-300 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openFaq === index ? 'auto' : 0,
                    opacity: openFaq === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-5 text-muted-foreground dark:text-gray-400">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
