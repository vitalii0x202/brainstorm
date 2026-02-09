import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import WhatActivators from "./WhatActivators";

const jobs = [
  {
    title: "Guardian (PLM Protector)",
    subtitle: "Protecting Personal Memories",
    description:
      "Guards access to personal language models (PLMs). Enforces consent, scopes, and rate limits so personal memory stays private while still useful.",
    responsibilities: [
      "Enforce permission policies on every call to a PLM.",
      "Issue and verify proofs that only allowed queries were served.",
    ],
    uniqueness: "Makes 'your memory, your rules' real for people and creators."
  },
  {
    title: "Registry",
    subtitle: "Ownership & Provenance",
    description:
      "Registers Memory Assets (PLMs, knowledge shards, policies) and attaches fingerprints, owners, and provenance.",
    responsibilities: [
      "Write/verify ownership records and attestations.",
      "Link derived artifacts to sources for auditability."
    ],
    uniqueness: "Turns intelligence into portable, referenceable assets."
  },
  {
    title: "Licensing",
    subtitle: "Passes, Caps, Expiry",
    description:
      "Issues scoped, time-limited LicensePasses for Memory Assets and handles revocation (tombstones).",
    responsibilities: [
      "Generate passes with scope/caps/expiry; propagate revocations.",
      "Expose receipts so partners can self-audit."
    ],
    uniqueness: "Makes sharing possible without giving memory away."
  },
  {
    title: "Metering",
    subtitle: "Receipts & Micro-Royalties",
    description:
      "Writes use receipts and splits micro-royalties in $ITLX to owners and verifiers—answers and proofs, not raw content.",
    responsibilities: ["Emit and settle usage receipts.", "Split and route $ITLX payouts automatically."],
    uniqueness: "When memory is used, owners get paid."
  },
  {
    title: "Federation",
    subtitle: "Collaborate without Centralizing",
    description:
      "Runs federated rounds so models improve from many orgs without moving raw information.",
    responsibilities: [
      "Coordinate local training, evaluate updates, pay for improvements in $ITLX.",
      "Maintain fairness and basic anti-spam staking."
    ],
    uniqueness: "Lets intelligence work together while staying self-owned."
  },
  {
    title: "Bridge",
    subtitle: "Keep Policy & Provenance Intact",
    description:
      "Packages Memory Assets for other chains/vendors while preserving policy and provenance.",
    responsibilities: [
      "Wrap/unwrap assets with their permissions.",
      "Verify that downstream calls still respect the original rules."
    ],
    uniqueness: "Shared memory that travels safely across ecosystems."
  }
];

export default function JobsActivators() {
  return (
    <div className="md:px-[4.5rem] 2xl:px-2 relative w-full">
      <div className="w-full flex justify-start items-center flex-col relative overflow-hidden mt-2 z-[10]">
        <p className="text-md xl:text-lg text-[#ffffff8c] leading-relaxed lg:max-w-2xl xl:max-w-4xl text-start md:text-center">
          <strong>Activators are the protectors of personal memories (PLMs) and the stewards of shared memory.</strong>
          They enforce permissions, issue licenses, write receipts, run federated improvements, and keep provenance intact—so intelligence stays owned while agents work together.
        </p>
      </div>
      {/* Keep your existing renderer for job cards */}
      <WhatActivators />
    </div>
  );
}
