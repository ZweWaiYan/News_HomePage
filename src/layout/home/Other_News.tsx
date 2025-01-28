import image_gaming_growth from "../../assets/images/image-gaming-growth.jpg";
import image_retro_pcs from "../../assets/images/image-retro-pcs.jpg";
import image_top_laptop from "../../assets/images/image-top-laptops.jpg";

interface OtherNewsItem {
  img: string;
  id: string;
  title: string;
  des: string;
}

const lists: OtherNewsItem[] = [
  {
    img: image_retro_pcs,
    id: "01",
    title: "Reviving Retro PCs",
    des: "What happens when old PCs are given modern upgrades?",
  },
  {
    img: image_top_laptop,
    id: "02",
    title: "Top 10 Laptops of 2022",
    des: "Our Best picks for various needs and budgets.",
  },
  {
    img: image_gaming_growth,
    id: "03",
    title: "The Growth of Gaming",
    des: "How the pandemic has sparked fresh opportunities.",
  },
];

const Other_News: React.FC  = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-20">
      {lists.map((item, index) => (
        <div className="flex" key={index}>
          <img className="w-24 mr-5" src={item.img} alt={item.title} />
          <div className="flex flex-col justify-between">
            <p className="text-[#F15D51] text-3xl font-interExtraBold">{item.id}</p>
            <h2 className="font-interExtraBold text-[14px]">{item.title}</h2>
            <p className="font-interRegular text-[14px] text-[#7E7F94]">{item.des}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Other_News;
