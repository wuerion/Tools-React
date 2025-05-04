import React from "react";
import Palette from "./Palette";

function GalleryPalettes() {
  return (
    <div className="flex flex-col items-center w-full h-[500px] overflow-scroll scroll-smooth">
      <Palette
        color1={"C9FFF2"}
        color2={"799AFF"}
        color3={"FFF4E1"}
        color4={"9DDCDC"}
      />
      <Palette
        color1={"E67A7A"}
        color2={"FFEBB7"}
        color3={"FFF4E1"}
        color4={"9DDCDC"}
      />
      <Palette
        color1={"ddd9d0"}
        color2={"a59094"}
        color3={"906f70"}
        color4={"675b5c"}
      />
      <Palette
        color1={"9a7c6f"}
        color2={"6e4c3e"}
        color3={"6c5b5b"}
        color4={"402810"}
      />
      <Palette
        color1={"72929c"}
        color2={"dddad8"}
        color3={"8a8a8a"}
        color4={"535c5f"}
      />
      <Palette
        color1={"94FFFF"}
        color2={"0DFFC3"}
        color3={"005128"}
        color4={"799AFF"}
      />
    </div>
  );
}

export default GalleryPalettes;
