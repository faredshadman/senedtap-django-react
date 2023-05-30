import { useState, FC } from "react";
import Menu from "../../atoms/docs/Menu";
import { MenuAtom } from "../../types";

const menu: MenuAtom[] = [
  {
    title: "İcarə müqavilələri",
    children: [
      {
        title: "Bütün icarə sənədləri",
      },
      {
        title: "Əmlak müqaviləsi",
        children: [
          {
            title: "Əmlak subcategory",
            children: [
              {
                title: "Second subcategory",
              },
            ],
          },
        ],
      },
      {
        title: "Sponsorluq müqaviləsi",
      },
      {
        title: "Kuryer",
      },
    ],
  },
  {
    title: "Xidmət müqavilələri",
  },
];

const DocsMenu: FC = () => {
  const [selectedTitle, setSelectedTitle] = useState<{
    [key: string]: boolean;
  }>({});
  return (
    <div className="flex-[1] p-2 bg-blue-100">
      <input
        className="w-full rounded-lg mb-3 p-2 outline-none"
        placeholder="Axtar..."
        type="text"
      />
      <Menu
        selectedTitle={selectedTitle}
        setSelectedTitle={setSelectedTitle}
        items={menu}
      />
    </div>
  );
};

export default DocsMenu;
