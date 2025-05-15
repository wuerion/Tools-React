import React from "react";

function fonts({ font, nameFont, onFontSelect }) {
  const handleClick = (font, nameFont) => {
    if (typeof onFontSelect === "function") onFontSelect(font, nameFont);
  };

  return (
    <div className="bg-linear-180 from-[#1D1D1D] to-[#DDDAD8] dark:from-[#DDDAD8] dark:to-[#1D1D1D] p-[1px] my-5 h-12 w-full">
      <div
        className="bg-[#DDDAD8] dark:bg-[#1D1D1D] flex flex-col items-center justify-center gap-1 h-8 w-full text-[#181818] dark:text-[#DDDAD8] p-1 cursor-pointer"
        onClick={() => handleClick(font, nameFont)}
      >
        <p style={{ fontFamily: `${font}` }}>{nameFont}</p>
      </div>
    </div>
  );
}

export default fonts;
