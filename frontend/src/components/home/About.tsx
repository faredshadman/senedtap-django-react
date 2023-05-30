import { useState } from "react";
import SectionHeader from "../../atoms/SectionHeader";
import TabContent from "../../atoms/home/TabContent";
import { IActive } from "../../types";
const tabs = ["Biz kimik?", "Tariximiz", "Vizyonumuz"];
const contents = {
  "Biz kimik?": {
    title: `Lorem Biz ipsum dolor sit amet consectetur adipisicing elit. Esse, consequatur
    asperiores sit dolores sint perferendis! Minima dignissimos rem doloribus
    sunt?`,
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, numquam
    ea itaque eveniet deleniti quam non minima eum neque a voluptatibus
    quidem nostrum assumenda dolorum explicabo velit nisi blanditiis magnam
    nobis fugit ad provident tempore enim. Fugiat consectetur quia id
    voluptas, placeat nulla adipisci non culpa minima alias. Accusamus ullam
    laboriosam est expedita! Eum corrupti quia pariatur! Vel necessitatibus
    vero at fuga voluptates. Id soluta delectus quod laboriosam ea ut
    quisquam quia iure molestias eos, cupiditate quam? Pariatur explicabo
    esse illum cupiditate, cum quia qui adipisci ad nesciunt autem itaque
    laborum similique, tenetur culpa consequuntur repellendus voluptates
    exercitationem odit veniam!`,
    lists: [
      {
        id: 1,
        title:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, consequatur",
      },
      {
        id: 2,
        title:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, consequatur",
      },
      {
        id: 3,
        title:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, consequatur",
      },
      {
        id: 4,
        title:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, consequatur",
      },
    ],
  },
  Tariximiz: {
    title: `Lorem Tarix ipsum dolor sit amet consectetur adipisicing elit. Esse, consequatur
    asperiores sit dolores sint perferendis! Minima dignissimos rem doloribus
    sunt?`,
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, numquam
    ea itaque eveniet deleniti quam non minima eum neque a voluptatibus
    quidem nostrum assumenda dolorum explicabo velit nisi blanditiis magnam
    nobis fugit ad provident tempore enim. Fugiat consectetur quia id
    voluptas, placeat nulla adipisci non culpa minima alias. Accusamus ullam
    laboriosam est expedita! Eum corrupti quia pariatur! Vel necessitatibus
    vero at fuga voluptates. Id soluta delectus quod laboriosam ea ut
    quisquam quia iure molestias eos, cupiditate quam? Pariatur explicabo
    esse illum cupiditate, cum quia qui adipisci ad nesciunt autem itaque
    laborum similique, tenetur culpa consequuntur repellendus voluptates
    exercitationem odit veniam!`,
    lists: [
      {
        id: 1,
        title:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, consequatur",
      },
      {
        id: 2,
        title:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, consequatur",
      },
      {
        id: 3,
        title:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, consequatur",
      },
      {
        id: 4,
        title:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, consequatur",
      },
    ],
  },
  Vizyonumuz: {
    title: `Lorem Vizyon ipsum dolor sit amet consectetur adipisicing elit. Esse, consequatur
    asperiores sit dolores sint perferendis! Minima dignissimos rem doloribus
    sunt?`,
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, numquam
    ea itaque eveniet deleniti quam non minima eum neque a voluptatibus
    quidem nostrum assumenda dolorum explicabo velit nisi blanditiis magnam
    nobis fugit ad provident tempore enim. Fugiat consectetur quia id
    voluptas, placeat nulla adipisci non culpa minima alias. Accusamus ullam
    laboriosam est expedita! Eum corrupti quia pariatur! Vel necessitatibus
    vero at fuga voluptates. Id soluta delectus quod laboriosam ea ut
    quisquam quia iure molestias eos, cupiditate quam? Pariatur explicabo
    esse illum cupiditate, cum quia qui adipisci ad nesciunt autem itaque
    laborum similique, tenetur culpa consequuntur repellendus voluptates
    exercitationem odit veniam!`,
    lists: [
      {
        id: 1,
        title:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, consequatur",
      },
      {
        id: 2,
        title:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, consequatur",
      },
      {
        id: 3,
        title:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, consequatur",
      },
      {
        id: 4,
        title:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, consequatur",
      },
    ],
  },
};
const About = () => {
  const [active, setActive] = useState<IActive>("Biz kimik?");
  return (
    <section className="px-5 py-10 lg:px-16">
      <SectionHeader
        first="Haqqımızda məlumat"
        child={
          <h1 className="flex-1 text-3xl">
            SənədTap sənədləşdirmə işlərinizi <br /> rahatlaşdırmaq üçün
            buradadır!
          </h1>
        }
        third="Daha çox məlumat"
      />
      <div className="mt-10">
        <div className="space-x-5">
          {tabs.map((item) => {
            return (
              <button
                key={item}
                className={`transition-all duration-75 border-b-2 ease-in-out ${
                  active === item
                    ? "text-blue-600  border-blue-600"
                    : "text-gray-500 border-transparent"
                }`}
                onClick={() => setActive(item as IActive)}>
                {item}
              </button>
            );
          })}
        </div>
        <TabContent active={active} content={contents[active]} />
      </div>
    </section>
  );
};

export default About;
