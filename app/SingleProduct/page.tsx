import React from "react";
import Image from "next/image";

const ProductDetails = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-10 px-6 lg:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Side: Product Images */}
        <div className="flex flex-col items-center">
          <div className="w-full h-[500px] relative mb-4">
            <Image
              src="/big-image.jpg" // Replace with your big image
              alt="Product Image"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="flex space-x-4">
            {["/small1.jpg", "/small2.jpg", "/small3.jpg", "/small4.jpg"].map(
              (src, index) => (
                <div key={index} className="w-20 h-20 relative">
                  <Image
                    src={src} // Replace with small image paths
                    alt={`Thumbnail ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md cursor-pointer hover:opacity-80"
                  />
                </div>
              )
            )}
          </div>
        </div>

        {/* Right Side: Product Details */}
        <div className="space-y-6">
          {/* Product Name and Price */}
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Product Name</h1>
            <p className="text-2xl font-semibold text-gray-600 mt-2">$150.00</p>
          </div>

          {/* Rating and Reviews */}
          <div className="flex items-center space-x-4">
            <div className="flex text-yellow-400">
              {"★".repeat(5)}
            </div>
            <span className="text-gray-600">|</span>
            <p className="text-gray-700">5 Customer Reviews</p>
          </div>

          {/* Product Details */}
          <p className="text-gray-600 leading-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut
            velit vitae libero pharetra faucibus vel a arcu. Aenean eget risus
            a enim tempus facilisis.
          </p>

          {/* Product Size */}
          <div>
            <h3 className="font-semibold text-gray-800">Size:</h3>
            <div className="flex space-x-4 mt-2">
              {["XS", "S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  className="border rounded px-4 py-2 text-gray-600 hover:bg-gray-200"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Product Colors */}
          <div>
            <h3 className="font-semibold text-gray-800">Colors:</h3>
            <div className="flex space-x-4 mt-2">
              {["red", "blue", "green"].map((color) => (
                <div
                  key={color}
                  className={`w-8 h-8 rounded-full bg-${color}-500 cursor-pointer hover:ring-2 ring-offset-2`}
                />
              ))}
            </div>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center border rounded">
              <button className="px-4 py-2 text-gray-600 hover:bg-gray-200">
                -
              </button>
              <input
                type="number"
                min="1"
                defaultValue="1"
                className="w-12 text-center border-l border-r"
              />
              <button className="px-4 py-2 text-gray-600 hover:bg-gray-200">
                +
              </button>
            </div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
              Add to Cart
            </button>
          </div>

          {/* Divider */}
          <hr className="border-gray-300 my-6" />

          {/* SKU, Category, Tags, Share */}
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="font-semibold text-gray-600">SKU:</span>
              <span className="text-gray-800">12345</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold text-gray-600">Category:</span>
              <span className="text-gray-800">Electronics</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold text-gray-600">Tags:</span>
              <span className="text-gray-800">Gadget, Technology</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold text-gray-600">Share:</span>
              <div className="flex space-x-2">
                <button className="text-gray-600 hover:text-blue-500">FB</button>
                <button className="text-gray-600 hover:text-blue-300">TW</button>
                <button className="text-gray-600 hover:text-pink-400">IG</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-gray-50 py-10">
      <div className="container mx-auto px-4 sm:px-8">
        {/* Headings */}
        <div className="flex flex-col sm:flex-row justify-between items-center border-b pb-4 mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Description</h2>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <h3 className="text-lg font-semibold text-gray-600 cursor-pointer hover:text-gray-800">
              Additional Information
            </h3>
            <h3 className="text-lg font-semibold text-gray-600 cursor-pointer hover:text-gray-800">
              Reviews <span className="text-blue-600">(5)</span>
            </h3>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6">
          {/* Paragraphs */}
          <p className="text-gray-700 text-lg leading-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel odio eu eros
            tristique cursus. Nullam gravida nulla sed arcu commodo, id convallis turpis eleifend.
          </p>
          <p className="text-gray-700 text-lg leading-7">
            Proin vehicula arcu at nulla feugiat, sit amet fermentum purus sagittis. Morbi ut velit
            vitae libero pharetra faucibus vel a arcu. Aenean eget risus a enim tempus facilisis.
          </p>

          {/* Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <img
              src="/image1.jpg" // Replace with your image path
              alt="Description 1"
              className="rounded-lg shadow-md"
            />
            <img
              src="/image2.jpg" // Replace with your image path
              alt="Description 2"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>

    <div className='p-8'>
      {/* Section Heading */}
      <div className='text-center mb-8'>
        <h1 className='text-3xl font-bold'>Top Picks for you</h1>
        <p className='text-gray-600 mt-2'>
        Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.
        </p>
      </div>

      {/* Product Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
        {/* Product 1 */}
        <div className='text-center'>
          <Image
            src='/Product1.png'
            alt='Product 1'
            width={300}
            height={300}
            className='mx-auto'
          />
          <h2 className='text-lg font-medium mt-4'>Trenton modular sofa_3 1</h2>
          <p className='text-xl font-bold text-black mt-1'>Rs. 25,000.00</p>
        </div>

        {/* Product 2 */}
        <div className='text-start'>
          <Image
            src='/Product2.png'
            alt='Product 2'
            width={300}
            height={300}
            className='mx-auto'
          />
          <h2 className='text-lg font-medium mt-24'>Granite dining table with dining chair</h2>
          <p className='text-xl font-bold text-black mt-1'>Rs. 25,000.00</p>
        </div>

        {/* Product 3 */}
        <div className='text-start'>
          <Image
            src='/Product3.png'
            alt='Product 3'
            width={300}
            height={300}
            className='mx-auto'
          />
          <h2 className='text-lg font-medium mt-4'>Outdoor bar table and stool</h2>
          <p className='text-xl font-bold text-black mt-1'>Rs. 25,000.00</p>
        </div>

        {/* Product 4 */}
        <div className='text-start'>
          <Image
            src='/Product4.png'
            alt='Product 4'
            width={300}
            height={300}
            className='mx-auto'
          />
          <h2 className='text-lg font-medium mt-24'>Plain console with teak mirror</h2>
          <p className='text-xl font-bold text-black mt-1'>Rs. 25,000.00</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProductDetails;
