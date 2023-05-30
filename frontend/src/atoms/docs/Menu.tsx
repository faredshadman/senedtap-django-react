import { FC, useState, Dispatch, SetStateAction } from "react";
import { MenuAtom } from "../../types";
import { AiOutlineCheckSquare, AiFillCheckSquare } from "react-icons/ai";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

interface IState {
  [key: string]: boolean;
}

interface IProps {
  items: MenuAtom[];
  setSelectedTitle: Dispatch<SetStateAction<IState>>;
  selectedTitle: IState;
}
const Menu: FC<IProps> = ({ items, setSelectedTitle, selectedTitle }) => {
  const [displayChildren, setDisplayChildren] = useState<IState>({});

  return (
    <ul className={`py-1 pl-5 rounded-lg bg-white space-y-3`}>
      {items.map((item) => {
        return (
          <li className="rounded" key={item.title}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-0.5">
                <div
                  className="text-lg text-blue-900"
                  onClick={() => {
                    setSelectedTitle({
                      ...selectedTitle,
                      [item.title]: !selectedTitle[item.title],
                    });
                  }}>
                  {selectedTitle[item.title] ? (
                    <AiFillCheckSquare />
                  ) : (
                    <AiOutlineCheckSquare />
                  )}
                </div>

                <span>{item.title}</span>
              </div>
              {item.children && (
                <button
                  onClick={() => {
                    setDisplayChildren({
                      ...displayChildren,
                      [item.title]: !displayChildren[item.title],
                    });
                  }}>
                  {displayChildren[item.title] ? (
                    <BiChevronUp className="text-blue-900 text-3xl" />
                  ) : (
                    <BiChevronDown className="text-blue-900 text-3xl" />
                  )}
                </button>
              )}
            </div>
            {displayChildren[item.title] && item.children ? (
              <Menu
                setSelectedTitle={setSelectedTitle}
                selectedTitle={selectedTitle}
                items={item.children}
              />
            ) : null}
          </li>
        );
      })}
    </ul>
  );
};
export default Menu;
