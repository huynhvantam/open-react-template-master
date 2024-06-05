"use client";
import { useEffect, useRef, useState } from "react";

const AutoResizeText = ({
  text,
  defaultFontSize = "40px",
  minFontSize = "10px",
  fontFamily = "",
  className = "",
}) => {
  const containerRef = useRef(null);
  const [fontSize, setFontSize] = useState(defaultFontSize);

  useEffect(() => {
    const resizeText = () => {
      const container = containerRef.current;
      let currentFontSize = defaultFontSize;

      while (
        container.scrollWidth > container.clientWidth &&
        currentFontSize > minFontSize
      ) {
        currentFontSize = `calc(${currentFontSize} - 1px)`;
        container.style.fontSize = currentFontSize;
      }

      setFontSize(currentFontSize);
    };

    resizeText();
    window.addEventListener("resize", resizeText);

    return () => {
      window.removeEventListener("resize", resizeText);
    };
  }, [text, defaultFontSize, minFontSize]);

  return (
    <div
      ref={containerRef}
      className={`whitespace-nowrap overflow-hidden text-ellipsis  ${className}`}
      style={{ fontSize, fontFamily }}
    >
      {text}
    </div>
  );
};

export default AutoResizeText;
