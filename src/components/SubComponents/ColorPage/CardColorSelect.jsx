import React from "react";

function CardColorSelect({ hexa }) {
  return (
    <div className="bg-linear-180 from-[#FFFFFF] to-[#1D1D1D] p-[1px] my-5 h-12">
      <div className="bg-[#1D1D1D] flex items-center justify-evenly h-full text-white">
        <p>Color:</p>
        <p>{hexa}</p>
        <div className={`rounded-lg w-8 h-8 bg-[#${hexa}]`}></div>
      </div>
    </div>
  );
}

export default CardColorSelect;
