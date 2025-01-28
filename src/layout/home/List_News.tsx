import React from "react";

interface NewsItem {
  title: string;
  des: string;
}

const lists: NewsItem[] = [
  {
    title: "Hydrogen VS Electric Cars",
    des: "Will hydrogen-fueled cars ever catch up to EVs?",
  },
  {
    title: "The Downsides of AI Artistry",
    des: "What are the possible adverse effects of on-demand AI image generation?",
  },
  {
    title: "Is VC Funding Drying Up?",
    des: "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
  },
];

const List_News: React.FC = () => {
  return (
    <div className="bg-[#00001A] flex flex-col justify-evenly mt-10 lg:mt-0 px-5 py-5 rounded-lg shadow-md">
      <div className="text-[#EFB259] font-interBold text-4xl mb-4">New</div>
      <div className="space-y-5 xl:space-y-10">
        {lists.map((item, index) => (
          <div key={index} className="border-b border-[#7E7F94] pb-5">
            <p className="text-[#FBFBFD] font-interBold hover:text-[#EFB259] mb-2 cursor-pointer">
              {item.title}
            </p>
            <p className="text-[#7E7F94] font-interRegular text-[14px]">
              {item.des}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List_News;
