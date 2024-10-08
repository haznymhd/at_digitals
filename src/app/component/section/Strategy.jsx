import Image from "next/image";
import Link from "next/link";

const Strategy = () => {
  return (
    <section className="containers flex flex-col md:flex-row-reverse gap-4 md:items-center md:justify-center">
      <Image
        className="object-cover object-center md:w-[245px] mx-auto md:mx-0"
        src="/be108bd31437b72eaae8e1dbd7abd910.png"
        alt="Web & Mobile App Development"
        width={414}
        height={414}
        priority
      />

      <div className="flex items-center justify-between mr-auto md:text-center md:items-center md:justify-center ml-auto md:ml-0 mx-auto md:mx-0">
        <div className="flex flex-col gap-3 max-w-[500px] text-center md:text-left">
          <h2 className="font-semibold text-bluishPurple text-2xl">
            Digital Strategy Consulting
          </h2>

          <p className="font-normal text-sm text-wrap text-tricornBlack-900">
            Your digital strategy should complement the overall marketing
            strategy of the company. In online marketing, each component will
            never work in isolation and every business needs a different mix. We
            provide a clear concept and strategic overview to find the most
            efficient model for your business.
          </p>

          <div className="ml:flex ml:justify-center">
            <Link
              href="/"
              className="bg-yuzuJam hover:bg-yuzuJam text-sm text-white font-bold uppercase py-2 px-4 rounded-md w-fit"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Strategy;
