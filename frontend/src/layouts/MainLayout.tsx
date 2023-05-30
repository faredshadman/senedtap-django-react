import { FC } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import useCloseSidebar from "../hooks/closeSidebar";
import Footer from "../components/Footer";
const MainLayout: FC = () => {
  useCloseSidebar();
  return (
    <>
      <Sidebar />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
