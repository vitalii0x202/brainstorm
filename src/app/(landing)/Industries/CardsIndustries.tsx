"use client";

import IndustriesHero from "@/app/components/IndustriesHero/IndustriesHero";
import React from "react";
import { Cpu, Layers, ShieldCheck, Truck, Store, HelpingHand } from "lucide-react";

export default function CardsIndustries() {
  const data = [
    { title: "Shared Memory for Agents", content: "Agents create and use shared memory without moving raw data.", srcImage: "/assets/image/Cards/card1.webp", icon: Layers, color: "#c1f77a" },
    { title: "Private Memory Models (PLMs)", content: "Turn what you know into a model you own and can license.", srcImage: "/assets/image/Cards/card2.webp", icon: Cpu, color: "#c1f77a" },
    { title: "Federated Learning Across Partners", content: "Train locally, send updates, reward improvements in $ITLX.", srcImage: "/assets/image/Cards/card3.webp", icon: ShieldCheck, color: "#c1f77a" },
    { title: "Institutional Memory That Survives", content: "Policies and provenance travel with knowledge across teams.", srcImage: "/assets/image/Cards/card4.webp", icon: Layers, color: "#c1f77a" },

    // Freemium wedges
    { title: "Logistics — Lane Memory Starter (Free)", content: "Upload 8–12 weeks of lanes → forecast & 3 suggested actions.", srcImage: "/assets/image/Cards/card5.webp", icon: Truck, color: "#b19cd9" },
    { title: "Logistics — Dock-Slot Optimizer Lite (Free)", content: "Top 3 slot suggestions from inbound list—no integration needed.", srcImage: "/assets/image/Cards/card6.webp", icon: Truck, color: "#b19cd9" },
    { title: "Retail — FAQ Memory Shard", content: "License a read-only FAQ shard; revoke any time with receipts.", srcImage: "/assets/image/Cards/card7.webp", icon: Store, color: "#b19cd9" },
    { title: "Non-profit — Community Forecast", content: "Federated demand model; contribute locally, keep data private.", srcImage: "/assets/image/Cards/card8.webp", icon: HelpingHand, color: "#b19cd9" },
  ];
  return (
    <div className="w-full max-w-7xl mx-auto h-[800px] md:min-h-[57.5rem]">
      <IndustriesHero data={data} />
    </div>
  );
}
