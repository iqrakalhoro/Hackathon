import React from 'react';
import Image from 'next/image';

const SideTableSection = () => {
  return (
    <div className='p-8'>
      {/* Images Section */}
      <div className='flex space-x-2'>
        {/* Image 1 Section */}
        <div className='text-center'>
          <Image
            src='/Mask group.png'
            alt='Side Table 1'
            height={560}
            width={605}
            className='block'
          />
          <h2 className='text-2xl font-bold'>Side Table</h2>
          <button className='mt-2 px-6 py-2 text-black font-medium border-b-2 border-[#000000]'>
            View More
          </button>
        </div>

        {/* Image 2 Section */}
        <div className='text-center'>
          <Image
            src='/Image2.png'
            alt='Side Table 2'
            height={562}
            width={605}
            className='block'
          />
          <h2 className='text-2xl font-bold'>Side Table</h2>
          <button className='mt-2 px-6 py-2 text-black font-medium border-b-2 border-[#000000]'>
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideTableSection;
