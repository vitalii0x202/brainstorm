import React from "react";
import DiscoverIntellex from "../DiscoverIntellex/DiscoverIntellex";

const Intelligence = () => {
  return (
    <section className="text-gray-100 pb-2 px-2 py-2 relative overflow-hidden">
      <div className="w-full flex justify-center items-start md:items-center flex-col relative overflow-hidden">
        <p className="text-md xl:text-lg text-[#ffffff8c] leading-relaxed lg:max-w-2xl xl:max-w-4xl text-start md:text-center">
          <strong>How agents use your memory—safely.</strong> Apps ask your private model; permissions are checked;
          the router chooses the right intelligence; you return answers and proofs. Every approved call writes a
          <em> receipt</em> and, when licensed, pays micro-royalties in $ITLX. Results and updates move—ownership stays with you.
        </p>

        <h3 className="titleColor text-[1.6rem] md:text-[2rem] font-bold text-start md:text-center mt-[4rem] mb-3">
          Ask → Route → Answer (with receipts)
        </h3>

        <span className="text-[.75rem] md:text-sm mb-5 !text-[#c1f77a] border-[#333633] border mt-10 rounded-full py-2 px-4 bg-[#1b1b1bee]">
          Activators protect PLMs • Answers + receipts • Optional royalties in $ITLX
        </span>

        <DiscoverIntellex />
      </div>
    </section>
  );
};

export default Intelligence;
