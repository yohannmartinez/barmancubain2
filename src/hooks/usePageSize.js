import { useState, useEffect } from "react";

function usePageSize() {
  const windowExist = typeof window !== "undefined";
  const [windowX, setWindowX] = useState(windowExist ? window.innerWidth : 0);
  const [windowY, setWindowY] = useState(windowExist ? window.innerHeight : 0);

  useEffect(() => {
    const handleResize = () => {
      setWindowX(window.innerWidth);
      setWindowY(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { windowX, windowY };
}

export default usePageSize;
