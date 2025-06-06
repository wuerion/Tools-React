import React, { useState } from "react";
import CardPaletteSelect from "./CardPaletteSelect";
import Palette from "./Palette";

function GalleryPalettes() {
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
        <Palette
          color1={"969696"}
          color2={"a5a5a5"}
          color3={"858585"}
          color4={"5f5f5f"}
          color5={"#3a3a3a"}
          onPaletteSelect1={setSelectedPaletteColor1}
          onPaletteSelect2={setSelectedPaletteColor2}
          onPaletteSelect3={setSelectedPaletteColor3}
          onPaletteSelect4={setSelectedPaletteColor4}
          onPaletteSelect5={setSelectedPaletteColor5}
        />
        <Palette
          color1={"c4cdd8"}
          color2={"b0c8db"}
          color3={"90a5b8"}
          color4={"738698"}
          color5={""}
          onPaletteSelect1={setSelectedPaletteColor1}
          onPaletteSelect2={setSelectedPaletteColor2}
          onPaletteSelect3={setSelectedPaletteColor3}
          onPaletteSelect4={setSelectedPaletteColor4}
          onPaletteSelect5={setSelectedPaletteColor5}
        />
        <Palette
          color1={"f5d5e0"}
          color2={"6667ab"}
          color3={"7b337e"}
          color4={"420d4b"}
          color5={"#210635"}
          onPaletteSelect1={setSelectedPaletteColor1}
          onPaletteSelect2={setSelectedPaletteColor2}
          onPaletteSelect3={setSelectedPaletteColor3}
          onPaletteSelect4={setSelectedPaletteColor4}
          onPaletteSelect5={setSelectedPaletteColor5}
        />
        <Palette
          color1={"ffbb94"}
          color2={"fb9590"}
          color3={"dc586d"}
          color4={"a33757"}
          color5={"#852e4e"}
          onPaletteSelect1={setSelectedPaletteColor1}
          onPaletteSelect2={setSelectedPaletteColor2}
          onPaletteSelect3={setSelectedPaletteColor3}
          onPaletteSelect4={setSelectedPaletteColor4}
          onPaletteSelect5={setSelectedPaletteColor5}
        />
        <Palette
          color1={"280f17"}
          color2={"8f0b13"}
          color3={"efdfc5"}
          color4={"252b2b"}
          color5={"#4c4f54"}
          onPaletteSelect1={setSelectedPaletteColor1}
          onPaletteSelect2={setSelectedPaletteColor2}
          onPaletteSelect3={setSelectedPaletteColor3}
          onPaletteSelect4={setSelectedPaletteColor4}
          onPaletteSelect5={setSelectedPaletteColor5}
        />
        <Palette
          color1={"fea38e"}
          color2={"ffdfc3"}
          color3={"fba2ab"}
          color4={"f6e6d0"}
          color5={"#f3b5a0"}
          onPaletteSelect1={setSelectedPaletteColor1}
          onPaletteSelect2={setSelectedPaletteColor2}
          onPaletteSelect3={setSelectedPaletteColor3}
          onPaletteSelect4={setSelectedPaletteColor4}
          onPaletteSelect5={setSelectedPaletteColor5}
        />
        <Palette
          color1={"cd94d8"}
          color2={"ffc8dd"}
          color3={"ffafcc"}
          color4={"bde0fe"}
          color5={"#a2d2ff"}
          onPaletteSelect1={setSelectedPaletteColor1}
          onPaletteSelect2={setSelectedPaletteColor2}
          onPaletteSelect3={setSelectedPaletteColor3}
          onPaletteSelect4={setSelectedPaletteColor4}
          onPaletteSelect5={setSelectedPaletteColor5}
        />
        <Palette
          color1={"3e2522"}
          color2={"8c6e63"}
          color3={"d3a376"}
          color4={"ffe0b2"}
          color5={"#fff2df"}
          onPaletteSelect1={setSelectedPaletteColor1}
          onPaletteSelect2={setSelectedPaletteColor2}
          onPaletteSelect3={setSelectedPaletteColor3}
          onPaletteSelect4={setSelectedPaletteColor4}
          onPaletteSelect5={setSelectedPaletteColor5}
        />
        <Palette
          color1={"001e4c"}
          color2={"c48cb3"}
          color3={"e5c9d7"}
          color4={"83a6ce"}
          color5={"#26415e"}
          onPaletteSelect1={setSelectedPaletteColor1}
          onPaletteSelect2={setSelectedPaletteColor2}
          onPaletteSelect3={setSelectedPaletteColor3}
          onPaletteSelect4={setSelectedPaletteColor4}
          onPaletteSelect5={setSelectedPaletteColor5}
        />
        <Palette
          color1={"850e35"}
          color2={"ee6983"}
          color3={"ffc4c4"}
          color4={"fff5e4"}
          color5={""}
          onPaletteSelect1={setSelectedPaletteColor1}
          onPaletteSelect2={setSelectedPaletteColor2}
          onPaletteSelect3={setSelectedPaletteColor3}
          onPaletteSelect4={setSelectedPaletteColor4}
          onPaletteSelect5={setSelectedPaletteColor5}
        />
        <Palette
          color1={"965E26"}
          color2={"E4BC94"}
          color3={"D49453"}
          color4={"F2E0CC"}
          color5={"#FAF2EA"}
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
