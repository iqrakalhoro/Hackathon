import React from 'react';
import Image from 'next/image';

const NewArrivalSection = () => {
  return (
    <div className='flex flex-col lg:flex-row items-center p-8 bg-[#FFF9E5]'>
      {/* Left Image */}
      <div className='lg:w-1/2 w-full'>
        <Image
          src='/Asgaard Sofa 1.png'
          alt='Asgaard Sofa'
          width={983}
          height={600}
          className='object-cover rounded-md'
        />
      </div>

      {/* Right Content */}
      <div className='lg:w-1/2 w-full lg:pl-16 mt-8 lg:mt-0 text-center lg:text-left'>
        <p className='text-sm font-semibold text-gray-500 uppercase'>New Arrivals</p>
        <h1 className='text-4xl font-bold mt-4'>Asgaard Sofa</h1>
        <button className='mt-6 px-8 py-3 bg-black text-white text-lg font-medium rounded hover:bg-gray-800 transition'>
          Order Now
        </button>
      </div>
    </div>
  );
};

export default NewArrivalSection;
