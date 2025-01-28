import React from "react";
import desktop_main_image from "../../assets/images/image-web-3-desktop.jpg";
import mobile_main_image from "../../assets/images/image-web-3-mobile.jpg";

const Main_News: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-4 justify-between items-center h-full">
      <div className="grid-spans-2">
        <img
          src={mobile_main_image}
          alt="main_news"
          className="w-full block md:hidden rounded-lg" // Show this image only on mobile
        />

        <img
          src={desktop_main_image}
          alt="main_news"
          className="hidden md:block rounded-lg" // Show this image only on desktop and larger screens
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <p className="text-4xl md:text-4xl lg:text-5xl font-interExtraBold text-start">
          The Bright Future of Web 3.0?
        </p>
        <div className="flex justify-between flex-col gap-4">
          <p className="font-interRegular text-[#79787d] text-[14px]">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button
            className="bg-[#F15D51] hover:bg-[#c84b3e] w-[160px] text-black hover:text-white px-6 py-3 text-[12px] text-center font-interExtraBold rounded-lg tracking-extra-wide"
          >
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main_News;
