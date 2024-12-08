import React from 'react';
import Image from 'next/image';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { AiOutlineCalendar } from 'react-icons/ai';

const OurBlogsSection = () => {
  return (
    <div className='p-8'>
      {/* Section Heading */}
      <div className='text-center mb-8'>
        <h1 className='text-3xl font-bold'>Our Blogs</h1>
        <p className='text-gray-600 mt-2'>
        Find a bright ideal to suit your taste with our great selection
        </p>
      </div>

      {/* Blog Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {/* Blog 1 */}
        <div className='text-center'>
          <Image
            src='/Rectangle 13.png'
            alt='Blog 1'
            width={400}
            height={250}
            className='rounded-md mx-auto'
          />
          <h2 className='text-lg font-medium mt-4'>Going all-in with millennial design</h2>
          <button className='mt-2 py-2 text-2xl border-b-2 border-[#000000]'>
            Read More
          </button>
          <div className='flex justify-center items-center space-x-4 mt-2 text-gray-500'>
            <span className='flex items-center space-x-1'>
              <AiOutlineClockCircle className='text-sm' />
              <p className='text-sm'>5 min</p>
            </span>
            <span className='flex items-center space-x-1'>
              <AiOutlineCalendar className='text-sm' />
              <p className='text-sm'>12 Oct, 2022</p>
            </span>
          </div>
        </div>

        {/* Blog 2 */}
        <div className='text-center'>
          <Image
            src='/Rectangle 14.png'
            alt='Blog 2'
            width={400}
            height={250}
            className='rounded-md mx-auto'
          />
          <h2 className='text-lg font-medium mt-4'>Going all-in with millennial design</h2>
          <button className='mt-2 py-2 text-2xl border-b-2 border-[#000000]'>
            Read More
          </button>
          <div className='flex justify-center items-center space-x-4 mt-2 text-gray-500'>
            <span className='flex items-center space-x-1'>
              <AiOutlineClockCircle className='text-sm' />
              <p className='text-sm'>5 min</p>
            </span>
            <span className='flex items-center space-x-1'>
              <AiOutlineCalendar className='text-sm' />
              <p className='text-sm'>12 Oct, 2022</p>
            </span>
          </div>
        </div>

        {/* Blog 3 */}
        <div className='text-center'>
          <Image
            src='/Rectangle 15.png'
            alt='Blog 3'
            width={400}
            height={250}
            className='rounded-md mx-auto'
          />
          <h2 className='text-lg font-medium mt-4'>Going all-in with millennial design</h2>
          <button className='mt-2 py-2 text-2xl border-b-2 border-[#000000]'>
            Read More
          </button>
          <div className='flex justify-center items-center space-x-4 mt-2 text-gray-500'>
            <span className='flex items-center space-x-1'>
              <AiOutlineClockCircle className='text-sm' />
              <p className='text-sm'>5 min</p>
            </span>
            <span className='flex items-center space-x-1'>
              <AiOutlineCalendar className='text-sm' />
              <p className='text-sm'>12 Oct, 2022</p>
            </span>
          </div>
        </div>
      </div>
      <div className='flex justify-center p-16 '>
        <span className='border-[#000000] border-b-2 p-2 text-2xl'> View All Post </span>
      </div>
    </div>
  );
};

export default OurBlogsSection;
