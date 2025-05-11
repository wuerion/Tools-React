import React, { useState } from "react";
import CardPaletteSelect from "./CardPaletteSelect";
import Palette from "./Palette";

function GalleryPalettes() {
  <div className="bg-linear-180 from-[#FFFFFF] to-[#1D1D1D] w-full p-[1px] my-10">
    <div className="bg-[#1d1d1d] w-full h-96 flex flex-col items-center justify-center text-white gap-10 py-10 px-4">
      <h2 className="font-[Julius_Sans_One] text-4xl bg-clip-text text-transparent -bg-linear-270 from-[#B3BEFF] to-[#666666]">
        PALETTES
      </h2>
      <p>Here you can find variety of colors palettes</p>
    </div>
  </div>;

  // creamos un children
  const [selectedPaletteColor1, setSelectedPaletteColor1] = useState("");
  const [selectedPaletteColor2, setSelectedPaletteColor2] = useState("");
  const [selectedPaletteColor3, setSelectedPaletteColor3] = useState("");
  const [selectedPaletteColor4, setSelectedPaletteColor4] = useState("");
  const [selectedPaletteColor5, setSelectedPaletteColor5] = useState("");
  return (
    <div>
      <CardPaletteSelect
        color1={selectedPaletteColor1}
        color2={selectedPaletteColor2}
        color3={selectedPaletteColor3}
        color4={selectedPaletteColor4}
        color5={selectedPaletteColor5}
      />
      <div className="flex flex-col items-center w-full h-[500px] overflow-scroll scroll-smooth galleryPalttes ">
        <Palette
          color1={"C9FFF2"}
          color2={"799AFF"}
          color3={"FFF4E1"}
          color4={"9DDCDC"}
          color5={""}
          onPaletteSelect1={setSelectedPaletteColor1}
          onPaletteSelect2={setSelectedPaletteColor2}
          onPaletteSelect3={setSelectedPaletteColor3}
          onPaletteSelect4={setSelectedPaletteColor4}
          onPaletteSelect5={setSelectedPaletteColor5}
        />
        <Palette
          color1={"E67A7A"}
          color2={"FFEBB7"}
          color3={"FFF4E1"}
          color4={"9DDCDC"}
          color5={""}
          onPaletteSelect1={setSelectedPaletteColor1}
          onPaletteSelect2={setSelectedPaletteColor2}
          onPaletteSelect3={setSelectedPaletteColor3}
          onPaletteSelect4={setSelectedPaletteColor4}
          onPaletteSelect5={setSelectedPaletteColor5}
        />
        <Palette
          color1={"ddd9d0"}
          color2={"a59094"}
          color3={"906f70"}
          color4={"675b5c"}
          color5={""}
          onPaletteSelect1={setSelectedPaletteColor1}
          onPaletteSelect2={setSelectedPaletteColor2}
          onPaletteSelect3={setSelectedPaletteColor3}
          onPaletteSelect4={setSelectedPaletteColor4}
          onPaletteSelect5={setSelectedPaletteColor5}
        />
        <Palette
          color1={"9a7c6f"}
          color2={"6e4c3e"}
          color3={"6c5b5b"}
          color4={"402810"}
          color5={""}
          onPaletteSelect1={setSelectedPaletteColor1}
          onPaletteSelect2={setSelectedPaletteColor2}
          onPaletteSelect3={setSelectedPaletteColor3}
          onPaletteSelect4={setSelectedPaletteColor4}
          onPaletteSelect5={setSelectedPaletteColor5}
        />
        <Palette
          color1={"72929c"}
          color2={"dddad8"}
          color3={"8a8a8a"}
          color4={"535c5f"}
          color5={""}
          onPaletteSelect1={setSelectedPaletteColor1}
          onPaletteSelect2={setSelectedPaletteColor2}
          onPaletteSelect3={setSelectedPaletteColor3}
          onPaletteSelect4={setSelectedPaletteColor4}
          onPaletteSelect5={setSelectedPaletteColor5}
        />
        <Palette
          color1={"94FFFF"}
          color2={"0DFFC3"}
          color3={"005128"}
          color4={"799AFF"}
          color5={""}
          onPaletteSelect1={setSelectedPaletteColor1}
          onPaletteSelect2={setSelectedPaletteColor2}
          onPaletteSelect3={setSelectedPaletteColor3}
          onPaletteSelect4={setSelectedPaletteColor4}
          onPaletteSelect5={setSelectedPaletteColor5}
        />
        <Palette
          color1={"8cc2ee"}
          color2={"a6b7c7"}
          color3={"bec8d1"}
          color4={"73808c"}
          color5={"#596673"}
          onPaletteSelect1={setSelectedPaletteColor1}
          onPaletteSelect2={setSelectedPaletteColor2}
          onPaletteSelect3={setSelectedPaletteColor3}
          onPaletteSelect4={setSelectedPaletteColor4}
          onPaletteSelect5={setSelectedPaletteColor5}
        />
      </div>
    </div>
  );
}

export default GalleryPalettes;
