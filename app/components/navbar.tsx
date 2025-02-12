import React from "react";

function Navbar() {
  return (
    <div className="relative w-full h-[70vh] overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover rounded-br-[30%]"
        autoPlay
        loop
        muted
      >
        <source
          src="https://cdn.medicruiter.com/hubfs/Videos/Background/HeroBgVideoLong-LQ.mp4"
          type="video/mp4"
        />
      </video>

      <h1
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-title text-1xl    lg:text-5xl text-white font-black mb-5 break-normal"
        style={{ textShadow: "0px 5px 20px rgba(0, 0, 0, 0.2)" }}
      >
        Work as a nurse in Germany
      </h1>
      <div className="absolute bottom-[30%] left-1/2 transform -translate-x-1/2 font-body text-lg lg:text-xl text-white">
        We guide you to a better life.
      </div>

      <div
        className="fixed top-0 z-20 flex justify-between items-center w-full py-[16px] backdrop-blur-sm"
        style={{ background: "rgba(99, 99, 99, 0.25)" }}
      >
        <div className="menu flex-grow flex justify-center overflow-x-auto scrollbar-hide">
          <nav>
            <ul className="flex items-center space-x-1 ">
              <li className="text-lg h-[30px] w-full text-white mt-3 font-black">
                EUROSWIFT
              </li>
            </ul>
          </nav>
        </div>
        <div className="menu">
          <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-6 py-2 rounded-lg shadow-md hover:from-white-500 hover:to-white-600 transition-all duration-300 font-semibold tracking-wide  border-yellow-600">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
