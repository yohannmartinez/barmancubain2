import { useState, useEffect } from "react";

function usePageSize() {
  const [windowX, setWindowX] = useState(window.innerWidth || 0);
  const [windowY, setWindowY] = useState(window.innerHeight || 0);

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
