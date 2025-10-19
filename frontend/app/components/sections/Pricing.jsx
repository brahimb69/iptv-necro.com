"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { FaCheck, FaCrown, FaDesktop, FaInfinity, FaStar, FaMobileAlt } from "react-icons/fa";

const multiDevicePlans = {
  1: [
    {
      duration: "1MONTH",
      price: "10.99",
      popular: false,
      saveText: "",
      paymentLink: "https://1ai.growth4ch.shop/",
    },
    {
      duration: "3MONTH",
      price: "25.99",
      popular: false,
      saveText: "Save 21%",
      paymentLink: "https://3ai.growth4ch.shop/",
    },
    {
      duration: "6MONTH",
      price: "39.99",
      popular: true,
      saveText: "Save 39%",
      paymentLink: "https://6ai.growth4ch.shop/",
    },
    {
      duration: "12MONTH",
      price: "49.99",
      popular: false,
      saveText: "Save 62%",
      paymentLink: "https://12ai.growth4ch.shop/",
    },
  ],
  2: [
    {
      duration: "1MONTH",
      price: "19.99",
      popular: false,
      saveText: "",
      paymentLink: "https://2c1.growth4ch.shop/",
    },
    {
      duration: "3MONTH",
      price: "46.99",
      popular: false,
      saveText: "Save 21%",
      paymentLink: "https://2c3.growth4ch.shop/",
    },
    {
      duration: "6MONTH",
      price: "71.99",
      popular: true,
      saveText: "Save 39%",
      paymentLink: "https://2c6.growth4ch.shop/",
    },
    {
      duration: "12MONTH",
      price: "89.99",
      popular: false,
      saveText: "Save 62%",
      paymentLink: "https://2c12.growth4ch.shop/",
    },
  ],
  3: [
    {
      duration: "1MONTH",
      price: "25.99",
      popular: false,
      saveText: "",
      paymentLink: "https://3c1.growth4ch.shop/",
    },
    {
      duration: "3MONTH",
      price: "70.99",
      popular: false,
      saveText: "Save 21%",
      paymentLink: "https://3c3.growth4ch.shop/",
    },
    {
      duration: "6MONTH",
      price: "107.99",
      popular: true,
      saveText: "Save 39%",
      paymentLink: "https://3c6.growth4ch.shop/",
    },
    {
      duration: "12MONTH",
      price: "134.99",
      popular: false,
      saveText: "Save 62%",
      paymentLink: "https://3c12.growth4ch.shop/",
    },
  ],
  4: [
    {
      duration: "1MONTH",
      price: "32.99",
      popular: false,
      saveText: "",
      paymentLink: "https://4c1.growth4ch.shop/",
    },
    {
      duration: "3MONTH",
      price: "89.99",
      popular: false,
      saveText: "Save 21%",
      paymentLink: "https://4c3.growth4ch.shop/",
    },
    {
      duration: "6MONTH",
      price: "139.99",
      popular: true,
      saveText: "Save 39%",
      paymentLink: "https://4c6.growth4ch.shop/",
    },
    {
      duration: "12MONTH",
      price: "179.99",
      popular: false,
      saveText: "Save 62%",
      paymentLink: "https://4c12.growth4ch.shop/",
    },
  ],
  5: [
    {
      duration: "1MONTH",
      price: "39.99",
      popular: false,
      saveText: "",
      paymentLink: "https://5c1.growth4ch.shop/",
    },
    {
      duration: "3MONTH",
      price: "109.99",
      popular: false,
      saveText: "Save 21%",
      paymentLink: "https://5c3.growth4ch.shop/",
    },
    {
      duration: "6MONTH",
      price: "169.99",
      popular: true,
      saveText: "Save 39%",
      paymentLink: "https://5c6.growth4ch.shop/",
    },
    {
      duration: "12MONTH",
      price: "219.99",
      popular: false,
      saveText: "Save 62%",
      paymentLink: "https://5c12.growth4ch.shop/",
    },
  ],
};

const features = [
  "25,000+ Live TV Channels",
  "HD & 4K Streaming Quality",
  "Regular Content Updates",
  "24/7 Necro IPTV Support",
  "Compatible with All Devices",
  "Adult Content Included",
];

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
  },
  {
    devices: "2 Devices",
    price: "416",
    paymentLink: "https://wa.link/tt8c55",
    popular: false,
  },
  {
    devices: "3 Devices",
    price: "543",
    paymentLink: "https://wa.link/tt8c55",
    popular: false,
  },
  {
    devices: "4 Devices",
    price: "670",
    paymentLink: "https://wa.link/tt8c55",
    popular: false,
  },
  {
    devices: "5 Devices",
    price: "797",
    paymentLink: "https://wa.link/tt8c55",
    popular: false,
  },
];

const Pricing = () => {
  const [activeDeviceCount, setActiveDeviceCount] = useState(1);

  const getDeviceIcons = (count, isActive) => {
    const icons = [];
    for (let i = 0; i < count; i++) {
      icons.push(
        <FaDesktop 
          key={i} 
          className={`w-5 h-5 ${isActive ? 'text-white' : (i === 0 ? 'text-primary dark:text-gray-300' : 'text-primary/70 dark:text-gray-400')}`} 
        />
      );
    }
    return icons;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
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
              <span className="text-primary dark:text-white text-sm font-medium px-4 py-2">
                Flexible Plans
              </span>
            </div>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold text-foreground dark:text-white mb-4"
          >
            Choose Your Perfect Plan
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-muted-foreground dark:text-gray-400 max-w-2xl mx-auto mb-8"
          >
            Get access to premium entertainment with our flexible subscription
            plans. All plans include full access to our premium features.
          </motion.p>

          {/* PROMINENT DEVICE SELECTION INSTRUCTION */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="inline-block bg-gradient-to-r from-blue-100 to-primary/10 dark:from-blue-400/20 dark:to-primary-hover/20 border-2 border-primary/50 dark:border-primary-hover/40 rounded-2xl px-8 py-5 mb-8 shadow-xl"
          >
            <p className="text-lg md:text-xl font-bold text-gray-800 dark:text-white mb-2 flex items-center gap-3 justify-center">
              <FaMobileAlt className="w-7 h-7 text-primary dark:text-primary-hover animate-bounce" />
              👇 Select Number of Devices Below 👇
              <FaMobileAlt className="w-7 h-7 text-primary dark:text-primary-hover animate-bounce" />
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">
              Click on the device tabs to see pricing for 1-5 simultaneous devices
            </p>
          </motion.div>
        </div>

        {/* PROMINENT DEVICE COUNT TABS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-4 p-4 bg-white/80 dark:bg-gray-800/30 rounded-2xl border-2 border-primary/30 dark:border-primary-hover/20 shadow-lg">
            {[1, 2, 3, 4, 5].map((deviceCount) => (
              <button
                key={deviceCount}
                onClick={() => setActiveDeviceCount(deviceCount)}
                className={`flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                  activeDeviceCount === deviceCount
                    ? "bg-gradient-to-r from-primary to-blue-500 dark:from-primary-hover dark:to-blue-400 text-white shadow-xl scale-105 ring-2 ring-primary/30 dark:ring-white/50"
                    : "bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-300 hover:bg-primary/10 dark:hover:bg-gray-600 border-2 border-gray-200 dark:border-gray-600 shadow-sm"
                }`}
              >
                <div className="flex items-center gap-1">
                  {getDeviceIcons(deviceCount, activeDeviceCount === deviceCount)}
                </div>
                <span className="whitespace-nowrap">{deviceCount} Device{deviceCount > 1 ? 's' : ''}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {multiDevicePlans[activeDeviceCount]?.map((plan, index) => (
            <motion.div
              key={plan.duration}
              variants={itemVariants}
              className={`relative group rounded-2xl bg-background/50 dark:bg-gray-800/50 backdrop-blur-sm hover:bg-background-hover/50 dark:hover:bg-gray-800/70 border border-border dark:border-gray-800/50 p-6 transition-all duration-300 hover:shadow-xl hover:scale-105 ${
                plan.popular
                  ? "ring-2 ring-primary dark:ring-primary-hover scale-105"
                  : ""
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary dark:bg-primary-hover text-white text-sm rounded-full flex items-center gap-2 whitespace-nowrap">
                  <FaCrown className="w-3 h-3" />
                  <span>Most Popular</span>
                </div>
              )}

              {/* Save Badge */}
              {plan.saveText && (
                <div className="absolute -right-2 -top-2 bg-green-500/90 text-white text-xs px-2 py-1 rounded-lg transform rotate-12">
                  {plan.saveText}
                </div>
              )}

              {/* Plan Duration */}
              <div className="text-lg font-semibold text-foreground dark:text-white mb-2 text-center">
                {plan.duration} Access
              </div>

              {/* Price */}
              <div className="flex items-baseline justify-center mb-6">
                <span className="text-2xl font-bold text-primary dark:text-primary-hover">
                  $
                </span>
                <span className="text-5xl font-bold text-foreground dark:text-white mx-1">
                  {plan.price}
                </span>
                <span className="text-muted-foreground dark:text-gray-400 text-sm">
                  /plan
                </span>
              </div>

              {/* Divider */}
              <div className="h-px bg-border dark:bg-gray-800/50 w-full my-6" />

              {/* Features List */}
              <ul className="space-y-4 mb-8">
                {features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center text-sm text-muted-foreground dark:text-gray-400 group-hover:text-foreground dark:group-hover:text-gray-300 transition-colors duration-300"
                  >
                    <div className="w-5 h-5 rounded-full bg-primary/10 dark:bg-primary-hover/10 flex items-center justify-center mr-3 group-hover:bg-primary/20 dark:group-hover:bg-primary-hover/20 transition-colors duration-300">
                      <FaCheck className="w-3 h-3 text-primary dark:text-primary-hover" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Link href={plan.paymentLink}>
                <button className="w-full py-4 px-6 rounded-xl text-white dark:text-primary bg-[#004275] dark:bg-white hover:bg-[#003366] dark:hover:bg-gray-100 font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  BUY NOW
                </button>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Lifetime Plans Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-20 relative"
        >
          {/* Special Badge */}
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-blue-500 text-white px-6 py-2 rounded-full flex items-center gap-2 whitespace-nowrap shadow-lg z-20">
            <FaInfinity className="w-4 h-4" />
            <span className="text-sm font-semibold">LIFETIME PLANS</span>
          </div>

          <div className="relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-blue-500/5 rounded-3xl" />

            <div className="relative rounded-3xl bg-background/50 dark:bg-gray-800/50 backdrop-blur-sm border border-primary/20 dark:border-primary-hover/20 p-8 md:p-12 overflow-hidden group hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500">
              {/* Section Header */}
              <div className="text-center mb-12">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground dark:text-white mb-4 flex items-center gap-3 justify-center">
                  Lifetime Access Plans
                  <span className="inline-flex items-center justify-center bg-primary/10 dark:bg-primary-hover/10 text-primary dark:text-primary-hover p-1.5 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <FaStar className="w-5 h-5" />
                  </span>
                </h3>
                <p className="text-muted-foreground dark:text-gray-400 max-w-2xl mx-auto">
                  One-time payment for endless entertainment. Pay once, watch forever!
                </p>
              </div>

              {/* Lifetime Plans Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12">
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

                    {/* CTA Button */}
                    <Link href={plan.paymentLink}>
                      <button className="w-full py-3 px-4 rounded-xl text-white dark:text-primary bg-[#004275] dark:bg-white hover:bg-[#003366] dark:hover:bg-gray-100 font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                        GET LIFETIME
                      </button>
                    </Link>
                  </motion.div>
                ))}
              </div>

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
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-muted-foreground dark:text-gray-400">
            *All prices are in USD. No additional taxes.
            <br />
            Subscription doesn't auto-renew, you have to manually renew. Lifetime
            access is a one-time payment.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
