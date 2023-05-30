import { useState } from "react";
import useIsomorphicLayoutEffect from "./effect";
import useEventListener from "./eventListener";
interface WindowSize {
  width: number;
  height: number;
}

function useWindowSize(): boolean {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 0,
    height: 0,
  });

  const handleSize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEventListener("resize", handleSize);

  // Set size at the first client-side load
  useIsomorphicLayoutEffect(() => {
    handleSize();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return windowSize.width > 768;
}

export default useWindowSize;
