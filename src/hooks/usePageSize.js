import { useState, useEffect } from "react";

function usePageSize() {
  const [windowX, setWindowX] = useState(window.innerWidth);
  const [windowY, setWindowY] = useState(window.innerHeight);

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
