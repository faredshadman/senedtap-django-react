import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { Link, NavLink } from "react-router-dom";
import { setActiveTab, toggleMenu } from "../store/navigation";
import Logo from "../assets/images/logo.svg";
import { AiOutlineHeart } from "react-icons/ai";
import { CgMenuMotion } from "react-icons/cg";
type Tab = {
  path: string;
  title: "Ana səhifə" | "Bütün sənədlər" | "FAQ";
};

export const tabs: Tab[] = [
  {
    path: "/",
    title: "Ana səhifə",
  },
  {
    path: "/docs",
    title: "Bütün sənədlər",
  },
  {
    path: "/faq",
    title: "FAQ",
  },
];

const Header = () => {
  const { activeTab, isOpen } = useSelector(
    (state: RootState) => state.navigation
  );
  const dispatch = useDispatch<AppDispatch>();

  return (
    <header className="fixed z-98 bg-blue-100 w-full">
      <div className="relative px-5 md:px-16 border-b border-blue-400 flex items-center py-3 md:py-0">
        <div className="flex-1 md:flex-none">
          <Link to="/">
            <img src={Logo} className="w-40 h-10" alt="Logo" />
          </Link>
        </div>
        <div onClick={() => dispatch(toggleMenu())} className="p-1">
          <CgMenuMotion
            className={`md:hidden text-3xl transition-all duration-150 ${
              isOpen && "rotate-90"
            } `}
          />
        </div>
        <nav className="hidden md:inline-flex flex-1 md:ml-10 lg:ml-20">
          <ul className="flex cursor-pointer space-x-5">
            {tabs.map((tab) => (
              <li
                key={tab.title}
                className={`border-b-2 text-center py-4 font-semibold transition-all duration-100 ease-in ${
                  activeTab === tab.title
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent"
                }`}
                onClick={() => dispatch(setActiveTab(tab))}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-blue-900" : "text-black"
                  }
                  to={`${tab.path}`}>
                  {tab.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden md:inline-flex items-center space-x-2">
          <div className="bg-slate-200 grid place-items-center h-8 w-8 rounded-md">
            <AiOutlineHeart />
          </div>
          <button className="bg-blue-600 w-20 h-8 text-white rounded-md">
            Daxil ol
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
