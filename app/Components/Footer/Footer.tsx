export default function Footer() {
    return (
      
        <div className="container mx-auto px-4 sm:px-8 text-[#000000] p-20">
           
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Left Section */}
            <div className=" pr-[50px] mt-20">
            <p className="text-sm  text-[#9F9F9F]">
                400 University Drive Suite 200<br />
                Coral Gables, </p>
                <p className="text-sm  text-[#9F9F9F]">FL 33134 USA
              </p>
            </div>
  
            {/* Right Section */}
            <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-32 pl-14">
              {/* Links */}
              <div>
                <h4 className="text-lg text-[#9F9F9F] mb-2">Links</h4>
                <ul className="space-y-10 mt-10">
                  <li><a href="#" className="hover:underline">Home</a></li>
                  <li><a href="#" className="hover:underline">Shop</a></li>
                  <li><a href="#" className="hover:underline">About</a></li>
                  <li><a href="#" className="hover:underline">Contact</a></li>
                </ul>
              </div>
  
              {/* Help */}
              <div>
                <h4 className="text-lg text-[#9F9F9F] mb-2">Help</h4>
                <ul className="space-y-10 mt-10">
                  <li><a href="#" className="hover:underline">Payment options</a></li>
                  <li><a href="#" className="hover:underline">Return</a></li>
                  <li><a href="#" className="hover:underline">Privacy Policies</a></li>
                </ul>
              </div>
  
              {/* Newsletter */}
              <div>
                <h4 className="text-lg text-[#9F9F9F] mb-2">Newsletter</h4>
                {/* <p className="text-sm leading-6"> */}
                <form className="mt-2">
                  <input
                    type="email"
                    placeholder="Enter Your Email Address"
                    className="mt-8 text-[#000000] border-b-[1px] border-[#000000] "
                  />
                   </form>
                {/* </p> */}
              </div>
  
              {/* Subscribe */}
              <div>
                <h4 className="text-lg font-semibold text-[#000000] mb-2  "></h4>
                
                  <button
                    type="submit"
                    className=" mt-[60px] border-b-[1px] border-[#000000]"
                  >
                   SUBSCRIBE
                  </button>
               
              </div>
            </div>
          </div>
          <footer className=" border-t-2 mt-9 p-5">2022 Meubel House. All rights reverved</footer>
        </div>
    );
  }
  