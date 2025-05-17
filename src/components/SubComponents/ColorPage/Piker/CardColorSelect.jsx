import React from "react";

export function createColor(color) {
  return (
    <div>
      <div
        className="w-8 h-8 rounded-lg"
        style={{ backgroundColor: color }}
        title={`Background color: ${color}`}
      ></div>
    </div>
  );
}

function CardColorSelect({ hexa, rgb, hsl }) {
  return (
    <div className="bg-linear-180 from-[#1D1D1D] to-[#DDDA8] dark:from-[#FFFFFF] dark:to-[#1D1D1D] p-[1px] my-5 h-12 w-full">
      <div className="bg-[#DDDAD8] dark:bg-[#1D1D1D] flex items-center justify-evenly h-full text-[#181818] dark:text-[#DDDAD8]">
        <p>Color:</p>
        <p>{hexa}</p>
        <p>{rgb}</p>
        <p className="hidden md:block">{hsl}</p>
        {createColor(hexa)} {/* Pasa el color como argumento */}
      </div>
    </div>
  );
}

export default CardColorSelect;
