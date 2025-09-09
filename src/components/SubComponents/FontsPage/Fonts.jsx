import React from "react";

function fonts({ font, nameFont, onFontSelect }) {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href = `https://fonts.googleapis.com/css2?family=${font}&display=swap`;
  document.head.appendChild(link);

  const handleClick = (font, nameFont) => {
    if (typeof onFontSelect === "function") onFontSelect(font, nameFont);
  };

  return (
    <div className="bg-linear-180 from-[#1D1D1D] to-[#DDDAD8] dark:from-[#DDDAD8] dark:to-[#1D1D1D] p-[1px] my-5 h-16 w-full">
      <div
        className="bg-[#DDDAD8] dark:bg-[#1D1D1D] flex flex-col items-center justify-center gap-1 h-18 w-full text-[#181818] dark:text-[#DDDAD8] p-1 cursor-pointer"
        onClick={() => handleClick(font, nameFont)}
        title="Click to select font"
        aria-label="Click to select font"
      >
        <p style={{ fontFamily: `${font}` }} className="text-lg">
          {nameFont}
        </p>
      </div>
    </div>
  );
}

export default fonts;
