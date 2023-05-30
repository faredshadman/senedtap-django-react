import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../store/navigation";
import { AppDispatch } from "../store";
const useCloseSidebar = () => {
  const dispatch = useDispatch<AppDispatch>();
  const handleResize = useCallback(() => {
    if (window.innerWidth > 768) {
      dispatch(closeMenu());
    }
  }, [dispatch]);
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [dispatch, handleResize]);
};

export default useCloseSidebar;
