import React from "react";

function fonts({ font, nameFont, onFontSelect }) {
  const handleClick = (font, nameFont) => {
    if (typeof onFontSelect === "function") onFontSelect(font, nameFont);
  };

  return (
    <div className="bg-linear-180 from-[#FFFFFF] to-[#1D1D1D] p-[1px] my-5 h-12 w-full">
      <div
        className="bg-[#1D1D1D] flex flex-col items-center justify-center gap-1 h-8 w-full text-white p-1 cursor-pointer"
        onClick={() => handleClick(font, nameFont)}
      >
        <p style={{ fontFamily: `${font}` }}>{nameFont}</p>
      </div>
    </div>
  );
}

export default fonts;
