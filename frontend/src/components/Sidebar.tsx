import { useSelector, useDispatch } from "react-redux";
import { toggleMenu } from "../store/navigation";
import { AiFillCloseCircle } from "react-icons/ai";
import { RootState, AppDispatch } from "../store";
import { tabs } from "./Header";
import Logo from "../assets/images/logo.svg";
const Sidebar = () => {
  const { isOpen } = useSelector((state: RootState) => state.navigation);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <>
      <div
        className={
          isOpen
            ? "bg-black cursor-pointer z-99 lg:hidden inline-block fixed inset-0 opacity-70 visible"
            : "hidden z-100 opacity-0"
        }
        onClick={() => dispatch(toggleMenu())}></div>
      <div
        className={`bg-white shadow-xl duration-500 py-4  z-100 fixed inset-y-0 lg:hidden transition-all w-64 ${
          isOpen ? "right-0" : "-right-full"
        }`}>
        <button
          onClick={() => dispatch(toggleMenu())}
          className="absolute -left-8 p-1 text-2xl rounded-full text-white top-4 transition-all hover:text-blue-700 ">
          <AiFillCloseCircle />
        </button>
        <div className="flex items-center justify-center">
          <img src={Logo} alt="Logo" className="w-40" />
        </div>
        <ul
          onClick={() => dispatch(toggleMenu())}
          className="font-normal mt-5 text-gray-500 space-y-4">
          {tabs.map((tab) => (
            <li
              key={tab.title}
              className="hover:text-blue-400 px-5 cursor-pointer">
              {tab.title}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
