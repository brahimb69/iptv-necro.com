"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { FaCheck, FaCrown, FaInfinity, FaStar } from "react-icons/fa";

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

          {/* DEVICE SELECTION INSTRUCTION */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mb-8"
          >
            <p className="text-base text-muted-foreground dark:text-gray-400">
              Select the number of simultaneous devices you need
            </p>
          </motion.div>
        </div>

        {/* PROFESSIONAL DEVICE TABS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mb-16"
        >
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-wrap justify-center gap-3 p-2 bg-muted/30 dark:bg-gray-800/50 rounded-xl backdrop-blur-sm border border-border dark:border-gray-700/50">
              {[1, 2, 3, 4, 5].map((deviceCount) => (
                <button
                  key={deviceCount}
                  onClick={() => setActiveDeviceCount(deviceCount)}
                  className={`relative px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 ${
                    activeDeviceCount === deviceCount
                      ? "bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 text-white shadow-lg shadow-blue-500/30"
                      : "bg-transparent text-foreground dark:text-gray-300 hover:bg-muted/50 dark:hover:bg-gray-700/50"
                  }`}
                >
                  <span className="relative z-10">{deviceCount} {deviceCount === 1 ? 'Device' : 'Devices'}</span>
                  {activeDeviceCount === deviceCount && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 rounded-lg"
                      style={{ zIndex: 0 }}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </button>
              ))}
            </div>
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
              className={`relative flex flex-col rounded-xl bg-white dark:bg-gray-800/80 backdrop-blur-sm border transition-all duration-300 hover:shadow-2xl ${
                plan.popular
                  ? "border-blue-600 dark:border-blue-500 shadow-xl shadow-blue-500/20 scale-105"
                  : "border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-600"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 text-white text-xs font-bold rounded-full shadow-lg">
                  MOST POPULAR
                </div>
              )}

              {/* Save Badge */}
              {plan.saveText && (
                <div className="absolute -right-3 top-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                  {plan.saveText}
                </div>
              )}

              <div className="p-8">
                {/* Plan Duration */}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-foreground dark:text-white mb-2">
                    {plan.duration}
                  </h3>
                  <p className="text-sm text-muted-foreground dark:text-gray-400">
                    Subscription Plan
                  </p>
                </div>

                {/* Price */}
                <div className="text-center mb-8">
                  <div className="flex items-baseline justify-center">
                    <span className="text-2xl font-bold text-foreground dark:text-white">$</span>
                    <span className="text-5xl font-bold text-foreground dark:text-white mx-1">
                      {plan.price}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground dark:text-gray-400 mt-2">
                    One-time payment
                  </p>
                </div>

                {/* Divider */}
                <div className="h-px bg-gray-200 dark:bg-gray-700 w-full mb-6" />

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start text-sm text-foreground dark:text-gray-300"
                    >
                      <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                        <FaCheck className="w-3 h-3 text-green-600 dark:text-green-400" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link href={plan.paymentLink} className="block">
                  <button className={`w-full py-4 px-6 rounded-lg font-bold transition-all duration-300 ${
                    plan.popular
                      ? "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40"
                      : "bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 shadow-lg hover:shadow-xl"
                  }`}>
                    Get Started
                  </button>
                </Link>
              </div>
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
