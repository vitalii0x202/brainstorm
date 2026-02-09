// app/components/Protocol/Protocol.tsx
import { cn } from "@/lib/utils";
import {
  Brain,
  BadgeCheck,
  Share2,
  Coins,
  ArrowLeftRight,
  Shield,
  RotateCcw,
} from "lucide-react";

export default function Protocol() {
  const lifecycle = [
    {
      title: "Create & Prove",
      description:
        "Register Memory Assets (PLMs, knowledge shards, policies) with ownership, provenance, and consent. Activators write attestations so origin is portable and auditable.",
      icon: Brain,
    },
    {
      title: "Permit & Share (License)",
      description:
        "Issue scoped, time-limited LicensePasses with caps and expiry. Permissions travel with the memory—apps and agents read the rules before they read the results.",
      icon: Share2,
    },
    {
      title: "Use & Meter",
      description:
        "Agents ask your private model. Policy is enforced, the router chooses the right intelligence, and the network writes a receipt. Licensed calls stream micro-royalties in $ITLX.",
      icon: Coins,
    },
    {
      title: "Move (Cross-Chain) & Preserve Policy",
      description:
        "Bridge Memory Assets across chains and vendors with policy and provenance intact. The Bridge Activator wraps/unwraps assets so downstream agents honor the original terms.",
      icon: ArrowLeftRight,
    },
    {
      title: "Update (Federate) & Improve",
      description:
        "Partners train locally and send updates—not raw information. The best improvements earn $ITLX. Collective memory grows without centralizing what should stay private.",
      icon: Shield,
    },
    {
      title: "Revoke & Forget",
      description:
        "End access with a tombstone. Revocations propagate across apps and chains; calls are blocked and receipts prove enforcement.",
      icon: RotateCcw,
    },
  ];

  const crossChain = [
    {
      k: "1",
      title: "Register on NEAR Intent",
      text:
        "Intellex runs as the interop protocol on NEAR Intent. Memory Assets and LicensePasses are registered once—globally referenceable.",
    },
    {
      k: "2",
      title: "Coordinate Across Chains",
      text:
        "Agents on other chains request access through passes. Bridge keeps policy/provenance intact so coordination is consistent everywhere.",
    },
    {
      k: "3",
      title: "Settle with $ITLX + Receipts",
      text:
        "Usage, royalties, federated rewards, and revocations settle in $ITLX with receipts—so every action on memory is provable.",
    },
  ];

  return (
    <section className="text-gray-100 pb-16 px-2 py-2 relative overflow-hidden">
      {/* Positioning: keep these two lines verbatim */}
      <div className="w-full flex justify-center items-center flex-col relative overflow-hidden">
        <p className="text-md xl:text-lg text-[#ffffffc9] leading-relaxed lg:max-w-3xl xl:max-w-4xl text-start md:text-center">
          <strong>
            We make the interop protocol on NEAR Intent that lets agents own,
            share, and use collective memory.
          </strong>
        </p>
        <p className="text-md xl:text-lg text-[#ffffff8c] leading-relaxed lg:max-w-3xl xl:max-w-4xl text-start md:text-center mt-2">
          <strong>
            Intellex protocol guides the network for creating, proving,
            permitting, moving, and improving memory.
          </strong>
        </p>
      </div>

      {/* Explainer */}
      <div className="w-full flex justify-center items-center flex-col relative overflow-hidden mt-6">
        <p className="text-[0.98rem] md:text-[1.05rem] text-[#ffffff8c] leading-relaxed lg:max-w-3xl xl:max-w-4xl text-start md:text-center">
          Activators—our built-in agents—act as the <em>protectors of personal
          memories (PLMs)</em> and stewards of shared memory. They enforce
          permissions, write receipts, run federated updates, bridge policy and
          provenance across chains, and honor revocations—so intelligence stays
          owned while agents coordinate safely across people, apps, chains, and
          systems.
        </p>
      </div>

      {/* Lifecycle grid */}
      <div className="w-full flex justify-center items-start md:items-center flex-col relative overflow-hidden mt-[2.25rem]">
        <span className="text-sm md:text-[.9rem] mb-5 !text-[#c1f77a] border mt-1 rounded-full py-2 px-4 bg-[#1b1b1bee] border-[#333633]">
          Memory Lifecycle on Intellex
        </span>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10 py-4 md:py-8 mx-auto w-full max-w-6xl">
          {lifecycle.map((item, index) => (
            <Feature key={item.title} {...item} index={index} />
          ))}
        </div>
      </div>

      {/* Cross-chain coordination mini-rail */}
      <div className="w-full flex justify-center items-start md:items-center flex-col relative overflow-hidden mt-[1.5rem]">
        <span className="text-sm md:text-[.9rem] mb-5 !text-[#c1f77a] border mt-1 rounded-full py-2 px-4 bg-[#1b1b1bee] border-[#333633]">
          Cross-Blockchain Agent Interoperability & Coordination
        </span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
          {crossChain.map((c) => (
            <div
              key={c.k}
              className="rounded-xl p-5 border border-[#161616] bg-[#000000dc] hover:bg-[#0b0b0bdc] transition"
            >
              <div className="text-[#c1f77a] font-semibold mb-1">{c.title}</div>
              <p className="text-[#ffffff8c] text-[.95rem] leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>
        <p className="text-[0.95rem] text-[#9aa49a] mt-6 max-w-6xl">
          In practice: an agent on Chain A can call a licensed PLM on NEAR Intent; the Licensing
          Activator checks scope and caps, the Metering Activator writes a receipt and pays the
          owner in $ITLX, and the Bridge Activator ensures the policy is honored downstream. For
          model improvement, Federation coordinates local training across organizations and chains—only
          updates and proofs travel—so collective memory improves without surrendering ownership.
        </p>
      </div>
    </section>
  );
}

function Feature({
  title,
  description,
  index,
  icon: Icon,
}: {
  title: string;
  description: string;
  index: number;
  icon: React.ElementType;
}) {
  return (
    <div
      className={cn(
        "flex flex-col mb-2 lg:mb-0 py-6 px-6 relative group/feature rounded-xl border border-[#161616] bg-[#000000dc] hover:bg-[#0b0b0bdc] transition"
      )}
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="rounded-md p-2 border border-[#222]">
          <Icon className="w-6 h-6 text-[#96ff00]" />
        </div>
        <div className="text-lg font-semibold text-[#dae7c9]">{title}</div>
      </div>
      <p className="text-[.93rem] text-[#ffffff8c]">{description}</p>
    </div>
  );
}
