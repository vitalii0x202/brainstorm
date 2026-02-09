import MarqueePartners from "./MarqueePartners/MarqueePartners";

export default function Customers() {
  return (
    <section className="text-gray-100 px-2 py-2 relative overflow-hidden">
      <div className="w-full flex justify-center items-center flex-col relative overflow-hidden">
        <p className="text-md xl:text-lg text-[#ffffff8c] leading-relaxed lg:max-w-2xl xl:max-w-4xl text-start md:text-center mt-2">
          Turn institutional memory into a working asset. Intellex packages your know-how as private models,
          issues limited licenses to trusted partners, and settles usage with $ITLX—answers and proofs, never raw data.
        </p>
      </div>

      <div className="w-full flex justify-start items-start flex-col relative overflow-hidden mt-[6rem]">
        <MarqueePartners />
      </div>
    </section>
  );
}
