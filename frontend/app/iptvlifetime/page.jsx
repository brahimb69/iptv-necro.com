import React from "react";
import LifetimePlans from "./LifetimePlans";

export const metadata = {
  title: "Necro IPTV Lifetime Plans | One-Time Payment for Unlimited Access - Save $100+",
  description: "Get lifetime access to Necro IPTV with a one-time payment. 25,000+ channels & 60,000+ VOD in HD/4K. Pay once, watch forever! Starting at $289 for 1 device. Save over $100 compared to monthly plans. Best lifetime IPTV deal with 24/7 support.",
  keywords: "Necro IPTV lifetime, lifetime IPTV subscription, one-time payment IPTV, permanent IPTV access, lifetime streaming service, best IPTV lifetime deal, cheap lifetime IPTV, IPTV pay once, forever IPTV, unlimited IPTV lifetime, lifetime IPTV 2024, best value IPTV",
  alternates: {
    canonical: "https://iptv-necro.com/iptvlifetime",
  },
  openGraph: {
    title: "Necro IPTV Lifetime Plans | Pay Once, Watch Forever",
    description: "Get lifetime access to premium IPTV with 25k+ channels & 60k+ VOD. One-time payment starting at $289.",
    url: "https://iptv-necro.com/iptvlifetime",
    siteName: "Necro IPTV",
    images: [
      {
        url: "/images/preview-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Necro IPTV Lifetime Plans",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Necro IPTV Lifetime Plans | Pay Once, Watch Forever",
    description: "Get lifetime access to premium IPTV with 25k+ channels & 60k+ VOD. One-time payment starting at $289.",
    images: ["/images/preview-hero.jpg"],
    creator: "@NecroIPTV",
  },
};

function IPTVLifetimePage() {
  return <LifetimePlans />;
}

export default IPTVLifetimePage;
