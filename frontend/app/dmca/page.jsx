"use client";

import { motion } from "framer-motion";
import {
  FiShield,
  FiFileText,
  FiAlertCircle,
  FiCheckCircle,
  FiMail,
  FiAlertTriangle,
} from "react-icons/fi";

export default function DMCAPage() {
  return (
    <div className="min-h-screen bg-background dark:bg-background-dark">
      {/* Header Section */}
      <div className="relative bg-gradient-to-b from-muted to-background dark:from-secondary dark:to-background-dark border-b border-border/50 dark:border-border-dark/50 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-slate-100/50 dark:bg-grid-slate-700/25 bg-[size:20px_20px] opacity-20" />

        <div className="relative container py-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-foreground dark:text-foreground-dark mb-4"
          >
            DMCA Notice & Copyright Policy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground dark:text-foreground-dark/70 max-w-2xl"
          >
            IPTV Necro's comprehensive copyright and intellectual property policy. 
            All content and services provided are properly licensed and owned by IPTV Necro.
          </motion.p>
        </div>
      </div>

      <div className="container py-12">
        {/* Content Ownership Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-background/50 dark:bg-gray-800/50 rounded-2xl p-8 border border-border/50 dark:border-border-dark/50 mb-8"
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 rounded-xl bg-primary/10 dark:bg-primary-hover/10">
              <FiShield className="w-6 h-6 text-primary dark:text-primary-hover" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground dark:text-foreground-dark mb-4">
                Content Ownership & Rights Declaration
              </h2>
            </div>
          </div>

          <div className="bg-primary/5 dark:bg-primary/10 border border-primary/20 dark:border-primary/30 rounded-xl p-6 mb-6">
            <p className="text-lg font-semibold text-primary dark:text-primary-hover mb-4">
              IMPORTANT NOTICE: All content, services, and materials provided by IPTV Necro are either owned by us or 
              properly licensed through our authorized content providers and distribution partners.
            </p>
            <p className="text-muted-foreground dark:text-foreground-dark/70 mb-4">
              IPTV Necro maintains exclusive rights to all content distributed through our platform, including but not limited to:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-muted-foreground dark:text-foreground-dark/70">
                <FiCheckCircle className="w-5 h-5 text-primary dark:text-primary-hover flex-shrink-0 mt-0.5" />
                <span>IPTV streaming services and live channel broadcasts</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground dark:text-foreground-dark/70">
                <FiCheckCircle className="w-5 h-5 text-primary dark:text-primary-hover flex-shrink-0 mt-0.5" />
                <span>Video-on-demand libraries and content catalogs</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground dark:text-foreground-dark/70">
                <FiCheckCircle className="w-5 h-5 text-primary dark:text-primary-hover flex-shrink-0 mt-0.5" />
                <span>Channel listings, programming guides, and subscription packages</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground dark:text-foreground-dark/70">
                <FiCheckCircle className="w-5 h-5 text-primary dark:text-primary-hover flex-shrink-0 mt-0.5" />
                <span>Proprietary software, applications, and streaming technology</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground dark:text-foreground-dark/70">
                <FiCheckCircle className="w-5 h-5 text-primary dark:text-primary-hover flex-shrink-0 mt-0.5" />
                <span>Website content, design elements, logos, and branding materials</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground dark:text-foreground-dark/70">
                <FiCheckCircle className="w-5 h-5 text-primary dark:text-primary-hover flex-shrink-0 mt-0.5" />
                <span>Marketing materials, promotional content, and documentation</span>
              </li>
            </ul>
          </div>

          <p className="text-muted-foreground dark:text-foreground-dark/70">
            We have obtained all necessary rights, licenses, authorizations, and permissions to distribute the content 
            and services we offer to our subscribers. Our business model operates in full compliance with applicable 
            copyright laws, international treaties, and regulatory requirements.
          </p>
        </motion.div>

        {/* Legal Authorization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-background/50 dark:bg-gray-800/50 rounded-2xl p-8 border border-border/50 dark:border-border-dark/50 mb-8"
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 rounded-xl bg-primary/10 dark:bg-primary-hover/10">
              <FiFileText className="w-6 h-6 text-primary dark:text-primary-hover" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground dark:text-foreground-dark mb-4">
                Legal Authorization & Licensing
              </h2>
            </div>
          </div>

          <p className="text-muted-foreground dark:text-foreground-dark/70 mb-6">
            IPTV Necro operates as a legitimate content distribution service with proper legal authorization. We maintain 
            active licensing agreements and distribution rights for all content available through our platform.
          </p>

          <div className="bg-muted dark:bg-gray-900/50 rounded-xl p-6 border border-border/30 dark:border-border-dark/30">
            <h3 className="text-xl font-semibold text-foreground dark:text-foreground-dark mb-4">Our Legal Framework:</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-muted-foreground dark:text-foreground-dark/70">
                <FiCheckCircle className="w-5 h-5 text-primary dark:text-primary-hover flex-shrink-0 mt-0.5" />
                <span>Valid distribution agreements with content providers and broadcasters</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground dark:text-foreground-dark/70">
                <FiCheckCircle className="w-5 h-5 text-primary dark:text-primary-hover flex-shrink-0 mt-0.5" />
                <span>Proper licensing for all streamed channels and on-demand content</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground dark:text-foreground-dark/70">
                <FiCheckCircle className="w-5 h-5 text-primary dark:text-primary-hover flex-shrink-0 mt-0.5" />
                <span>Compliance with DMCA safe harbor provisions and notice-and-takedown procedures</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground dark:text-foreground-dark/70">
                <FiCheckCircle className="w-5 h-5 text-primary dark:text-primary-hover flex-shrink-0 mt-0.5" />
                <span>Adherence to international copyright treaties and digital rights management standards</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground dark:text-foreground-dark/70">
                <FiCheckCircle className="w-5 h-5 text-primary dark:text-primary-hover flex-shrink-0 mt-0.5" />
                <span>Full ownership and intellectual property rights to our proprietary technology and branding</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Notice to Copyright Claimants */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-background/50 dark:bg-gray-800/50 rounded-2xl p-8 border border-border/50 dark:border-border-dark/50 mb-8"
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 rounded-xl bg-red-500/10">
              <FiAlertCircle className="w-6 h-6 text-red-500" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground dark:text-foreground-dark mb-4">
                Notice to Copyright Claimants
              </h2>
            </div>
          </div>

          <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/30 rounded-xl p-6 mb-6">
            <p className="text-red-700 dark:text-red-300 font-semibold mb-4">
              IMPORTANT: If you believe that content on IPTV Necro infringes your copyright, please be aware that we 
              maintain proper authorization for all content distributed through our service.
            </p>
            <p className="text-muted-foreground dark:text-foreground-dark/70">
              Filing false or fraudulent DMCA notices can result in legal liability. Before submitting a copyright 
              infringement claim, we strongly recommend that you:
            </p>
          </div>

          <div className="space-y-4 mb-6">
            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary dark:text-primary-hover font-bold">
                1
              </span>
              <p className="text-muted-foreground dark:text-foreground-dark/70 pt-1">
                Verify that the content in question is actually owned by you and not licensed to us
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary dark:text-primary-hover font-bold">
                2
              </span>
              <p className="text-muted-foreground dark:text-foreground-dark/70 pt-1">
                Confirm that you have not granted distribution rights to any intermediary or licensing agency
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary dark:text-primary-hover font-bold">
                3
              </span>
              <p className="text-muted-foreground dark:text-foreground-dark/70 pt-1">
                Contact us directly to resolve any misunderstandings before filing formal complaints
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary dark:text-primary-hover font-bold">
                4
              </span>
              <p className="text-muted-foreground dark:text-foreground-dark/70 pt-1">
                Understand that false claims may result in counter-notifications and potential legal action
              </p>
            </div>
          </div>
        </motion.div>

        {/* DMCA Compliance Procedure */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-background/50 dark:bg-gray-800/50 rounded-2xl p-8 border border-border/50 dark:border-border-dark/50 mb-8"
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 rounded-xl bg-primary/10 dark:bg-primary-hover/10">
              <FiFileText className="w-6 h-6 text-primary dark:text-primary-hover" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground dark:text-foreground-dark mb-4">
                DMCA Compliance Procedure
              </h2>
            </div>
          </div>

          <p className="text-muted-foreground dark:text-foreground-dark/70 mb-4">
            While we maintain proper authorization for our content, IPTV Necro respects the Digital Millennium Copyright 
            Act (DMCA) and will respond to valid notices of alleged copyright infringement in accordance with applicable law.
          </p>
          <p className="text-muted-foreground dark:text-foreground-dark/70 mb-6">
            If you believe, after thorough verification, that your copyrighted work has been used in a way that constitutes 
            infringement, you may submit a DMCA notice containing the following information:
          </p>

          <div className="bg-muted dark:bg-gray-900/50 rounded-xl p-6 border border-border/30 dark:border-border-dark/30">
            <ol className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary dark:text-primary-hover font-bold">
                  A
                </span>
                <p className="text-muted-foreground dark:text-foreground-dark/70 pt-1">
                  A physical or electronic signature of the copyright owner or authorized representative
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary dark:text-primary-hover font-bold">
                  B
                </span>
                <p className="text-muted-foreground dark:text-foreground-dark/70 pt-1">
                  Identification of the copyrighted work claimed to have been infringed
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary dark:text-primary-hover font-bold">
                  C
                </span>
                <p className="text-muted-foreground dark:text-foreground-dark/70 pt-1">
                  Identification of the material that is claimed to be infringing and its location on our platform
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary dark:text-primary-hover font-bold">
                  D
                </span>
                <p className="text-muted-foreground dark:text-foreground-dark/70 pt-1">
                  Your contact information (address, telephone number, and email address)
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary dark:text-primary-hover font-bold">
                  E
                </span>
                <p className="text-muted-foreground dark:text-foreground-dark/70 pt-1">
                  A statement that you have a good faith belief that the disputed use is not authorized by the copyright owner
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary dark:text-primary-hover font-bold">
                  F
                </span>
                <p className="text-muted-foreground dark:text-foreground-dark/70 pt-1">
                  A statement that the information in the notification is accurate, and under penalty of perjury, 
                  that you are authorized to act on behalf of the copyright owner
                </p>
              </li>
            </ol>
          </div>
        </motion.div>

        {/* Grid Layout for Counter-Notification and Repeat Infringer */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Counter-Notification */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-background/50 dark:bg-gray-800/50 rounded-2xl p-8 border border-border/50 dark:border-border-dark/50 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 rounded-xl bg-primary/10 dark:bg-primary-hover/10">
                <FiCheckCircle className="w-6 h-6 text-primary dark:text-primary-hover" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground dark:text-foreground-dark mb-2">
                  Counter-Notification Rights
                </h3>
              </div>
            </div>
            <p className="text-muted-foreground dark:text-foreground-dark/70 mb-4">
              IPTV Necro reserves the right to submit counter-notifications in response to any copyright claims that we 
              believe to be invalid, erroneous, or submitted in bad faith.
            </p>
            <p className="text-muted-foreground dark:text-foreground-dark/70">
              We maintain comprehensive documentation of our content licenses and distribution rights, and will exercise 
              our right to file a counter-notification when warranted.
            </p>
          </motion.div>

          {/* Repeat Infringer Policy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-background/50 dark:bg-gray-800/50 rounded-2xl p-8 border border-border/50 dark:border-border-dark/50 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 rounded-xl bg-red-500/10">
                <FiAlertTriangle className="w-6 h-6 text-red-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground dark:text-foreground-dark mb-2">
                  Repeat Infringer Policy
                </h3>
              </div>
            </div>
            <p className="text-muted-foreground dark:text-foreground-dark/70 mb-4">
              IPTV Necro has adopted and implements a policy that provides for the termination of user accounts in 
              appropriate circumstances of users who are repeat copyright infringers.
            </p>
            <p className="text-muted-foreground dark:text-foreground-dark/70">
              We also reserve the right to take legal action against individuals or entities who repeatedly submit false 
              DMCA claims against our legitimately licensed content.
            </p>
          </motion.div>
        </div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-background/50 dark:bg-gray-800/50 rounded-2xl p-8 border border-border/50 dark:border-border-dark/50 mb-8"
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 rounded-xl bg-primary/10 dark:bg-primary-hover/10">
              <FiMail className="w-6 h-6 text-primary dark:text-primary-hover" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground dark:text-foreground-dark mb-4">
                Contact Information
              </h2>
            </div>
          </div>

          <p className="text-muted-foreground dark:text-foreground-dark/70 mb-6">
            For legitimate copyright inquiries or DMCA-related communications, please contact our designated agent:
          </p>

          <div className="bg-muted dark:bg-gray-900/50 rounded-xl p-6 border border-border/30 dark:border-border-dark/30 mb-4">
            <div className="space-y-3">
              <div>
                <span className="font-semibold text-foreground dark:text-foreground-dark">DMCA Agent:</span>
                <span className="text-muted-foreground dark:text-foreground-dark/70 ml-2">IPTV Necro Legal Department</span>
              </div>
              <div>
                <span className="font-semibold text-foreground dark:text-foreground-dark">Email:</span>
                <span className="text-primary dark:text-primary-hover ml-2">dmca@iptv-necro.com</span>
              </div>
            </div>
          </div>

          <p className="text-sm text-muted-foreground dark:text-foreground-dark/70">
            Please note: Only DMCA notices and counter-notifications should be sent to the DMCA Agent. 
            For general inquiries, please use our main contact form.
          </p>
        </motion.div>

        {/* Important Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="bg-yellow-50 dark:bg-yellow-950/20 rounded-2xl p-8 border border-yellow-200 dark:border-yellow-900/30 mb-8"
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 rounded-xl bg-yellow-500/10">
              <FiAlertTriangle className="w-6 h-6 text-yellow-600 dark:text-yellow-500" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground dark:text-foreground-dark mb-4">
                Important Disclaimer
              </h2>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-yellow-900 dark:text-yellow-300 mb-2">False DMCA Claims:</h3>
              <p className="text-muted-foreground dark:text-foreground-dark/70">
                Submitting a false or fraudulent DMCA notice is a violation of federal law and may subject the claimant 
                to damages, including costs and attorneys' fees incurred by IPTV Necro or alleged infringers.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-yellow-900 dark:text-yellow-300 mb-2">Perjury Warning:</h3>
              <p className="text-muted-foreground dark:text-foreground-dark/70">
                Any person who knowingly materially misrepresents that material or activity is infringing may be subject 
                to liability under Section 512(f) of the DMCA.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-yellow-900 dark:text-yellow-300 mb-2">Our Commitment:</h3>
              <p className="text-muted-foreground dark:text-foreground-dark/70">
                IPTV Necro is committed to operating legally and ethically. We maintain proper licenses and authorizations 
                for all content we distribute. We will vigorously defend against any false or bad faith copyright claims.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Last Updated */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="pt-8 border-t border-border/30 dark:border-border-dark/30"
        >
          <p className="text-sm text-muted-foreground dark:text-foreground-dark/70 text-center">
            Last Updated: November 1, 2025
          </p>
          <p className="text-sm text-muted-foreground dark:text-foreground-dark/70 text-center mt-2">
            This DMCA policy is subject to change. Please review it periodically for updates.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
