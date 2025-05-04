import React, { useState } from "react";
import CardPaletteSelect from "./CardPaletteSelect";
import Palette from "./Palette";

function GalleryPalettes() {
  const [selectedPaletteColor1, setSelectedPaletteColor1] = useState("");
  const [selectedPaletteColor2, setSelectedPaletteColor2] = useState("");
  const [selectedPaletteColor3, setSelectedPaletteColor3] = useState("");
  const [selectedPaletteColor4, setSelectedPaletteColor4] = useState("");
  return (
    <div>
      <CardPaletteSelect
        color1={selectedPaletteColor1}
        color2={selectedPaletteColor2}
        color3={selectedPaletteColor3}
        color4={selectedPaletteColor4}
      />
      <div className="flex flex-col items-center w-full h-[500px] overflow-scroll scroll-smooth">
        <Palette
          color1={"C9FFF2"}
          color2={"799AFF"}
          color3={"FFF4E1"}
          color4={"9DDCDC"}
          onPaletteSelect1={setSelectedPaletteColor1}
          onPaletteSelect2={setSelectedPaletteColor2}
          onPaletteSelect3={setSelectedPaletteColor3}
          onPaletteSelect4={setSelectedPaletteColor4}
        />
        <Palette
          color1={"E67A7A"}
          color2={"FFEBB7"}
          color3={"FFF4E1"}
          color4={"9DDCDC"}
          onPaletteSelect={setSelectedPaletteColor1}
        />
        <Palette
          color1={"ddd9d0"}
          color2={"a59094"}
          color3={"906f70"}
          color4={"675b5c"}
          onPaletteSelect={setSelectedPaletteColor1}
        />
        <Palette
          color1={"9a7c6f"}
          color2={"6e4c3e"}
          color3={"6c5b5b"}
          color4={"402810"}
          onPaletteSelect={setSelectedPaletteColor1}
        />
        <Palette
          color1={"72929c"}
          color2={"dddad8"}
          color3={"8a8a8a"}
          color4={"535c5f"}
          onPaletteSelect={setSelectedPaletteColor1}
        />
        <Palette
          color1={"94FFFF"}
          color2={"0DFFC3"}
          color3={"005128"}
          color4={"799AFF"}
          onPaletteSelect={setSelectedPaletteColor1}
        />
      </div>
    </div>
  );
}

export default GalleryPalettes;
