import Image from 'next/image';

export default function OurInstagram() {
  return (
    <section className="relative flex items-center justify-center h-[450px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/Rectangle 17.png" // Replace with your image path
          alt="Background"
          height={450}
          width={1440}
        //   layout="fill"
        //   objectFit="cover"
        //   className="opacity-30"
        //   priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#000000] mb-4">
          Our Instagram
        </h2>
        <p className="text-lg sm:text-xl text-[#000000] mb-6">
          Follow our store on Instagram 
        </p>
        <button className="inline-block px-14 py-3 text-[#000000]  text-lg rounded-full shadow-lg bg-[white] transition"
        >
          Follow Us
        </button>
      </div>
    </section>
  );
}
