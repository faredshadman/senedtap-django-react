import { FC } from "react";
import { BsPlayCircleFill } from "react-icons/bs";
import { IContent } from "../../types";
import Image1 from "../../assets/images/image1.png";
import DoubleCircle from "../../assets/images/doublecircle.svg";

const TabContent: FC<IContent> = ({ content, active }) => {
  return (
    <section className="py-10 flex flex-col gap-4 lg:gap-0 lg:flex-row items-center">
      <div className="flex-1">
        <p>{content.title}</p>
        <p className="py-3">
          {active + " "}
          {content.content}
        </p>
        <ul className="space-y-2 pl-4 mt-5 list-disc marker:text-blue-400">
          {content.lists.map((item) => (
            <li key={item.id}>
              {active + " "}
              {item.title}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-1 w-full relative flex justify-end">
        <div className="w-full relative flex justify-center lg:justify-end">
          <div className="relative">
            <img className="max-w-xl w-full h-96" src={Image1} alt={active} />
            <BsPlayCircleFill className="absolute text-blue-800 text-5xl -left-5 bottom-1/4" />
          </div>
        </div>
        <img
          className="max-w-xs hidden lg:inline-flex -z-[1] absolute -top-16 left-20"
          src={DoubleCircle}
          alt="Circle"
        />
      </div>
    </section>
  );
};

export default TabContent;
