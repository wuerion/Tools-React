import React from "react";
import ColorCreate from "./ColorPiker";

function CreationPalettes() {
  return (
    <div>
      <div className="bg-linear-180 from-[#FFFFFF] to-[#1D1D1D] w-full p-[1px] my-10">
        <div className="bg-[#1d1d1d] w-full h-96 flex flex-col items-center justify-center text-white gap-10 py-10 px-4">
          <h2 className="font-[Julius_Sans_One] text-4xl bg-clip-text text-transparent -bg-linear-270 from-[#B3BEFF] to-[#666666]">
            PALETTES
          </h2>
          <p>Here you can create your own palettes</p>
        </div>
      </div>
      <ColorCreate />
    </div>
  );
}
{
  /* importar el compoenete Gallery para mostrar las paletas */
}

// #C9FFF2,#799AFF,#FFF4E1,#9DDCDC
export default CreationPalettes;
