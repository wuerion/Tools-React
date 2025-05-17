import React, { useState } from "react";
import Gradient from "./Gradient";
import CardGradientSelect from "./CardGradientSelect";

function GalleryGradients() {
  const [selectedGradientColor1, setSelectedGradientColor1] = useState("");
  const [selectedGradientColor2, setSelectedGradientColor2] = useState("");
  const [selectedGradientColor3, setSelectedGradientColor3] = useState("");
  const [selectedGradientColor4, setSelectedGradientColor4] = useState("");
  const [selectedGradientColor5, setSelectedGradientColor5] = useState("");

  return (
    <div className="flex flex-col items-center justify-center">
      <CardGradientSelect
        color1={selectedGradientColor1}
        color2={selectedGradientColor2}
        color3={selectedGradientColor3}
        color4={selectedGradientColor4}
        color5={selectedGradientColor5}
      />
      <div className="flex flex-col items-center w-full h-[500px] overflow-scroll scroll-smooth md:w-4/5">
        <Gradient
          color1={"#a4f9c7"}
          color2={"#acf6f6"}
          color3={"#a2bbef"}
          color4={"#bea3ef"}
          onGradientSelect1={setSelectedGradientColor1}
          onGradientSelect2={setSelectedGradientColor2}
          onGradientSelect3={setSelectedGradientColor3}
          onGradientSelect4={setSelectedGradientColor4}
          onGradientSelect5={setSelectedGradientColor5}
        />
        <Gradient
          color1={"#14191d"}
          color2={"#424242"}
          color3={"#555d77"}
          color4={"#95a2ad"}
          onGradientSelect1={setSelectedGradientColor1}
          onGradientSelect2={setSelectedGradientColor2}
          onGradientSelect3={setSelectedGradientColor3}
          onGradientSelect4={setSelectedGradientColor4}
        />
        <Gradient
          color1={"#b3ebff"}
          color2={"#fbc2eb"}
          color3={""}
          color4={""}
          color5={""}
          onGradientSelect1={setSelectedGradientColor1}
          onGradientSelect2={setSelectedGradientColor2}
          onGradientSelect3={setSelectedGradientColor3}
          onGradientSelect4={setSelectedGradientColor4}
          onGradientSelect5={setSelectedGradientColor5}
        />
        <Gradient
          color1={"#e3bfc3"}
          color2={"#dd7a83"}
          color3={"#bf9dcd"}
          color4={"#e1b79f"}
          color5={""}
          onGradientSelect1={setSelectedGradientColor1}
          onGradientSelect2={setSelectedGradientColor2}
          onGradientSelect3={setSelectedGradientColor3}
          onGradientSelect4={setSelectedGradientColor4}
          onGradientSelect5={setSelectedGradientColor5}
        />
        <Gradient
          color1={"#f2dcdc"}
          color2={"#fef7da"}
          color3={"#d3d4c7"}
          color4={"#6e6d69"}
          color5={"#edd9d7"}
          onGradientSelect1={setSelectedGradientColor1}
          onGradientSelect2={setSelectedGradientColor2}
          onGradientSelect3={setSelectedGradientColor3}
          onGradientSelect4={setSelectedGradientColor4}
          onGradientSelect5={setSelectedGradientColor5}
        />
        <Gradient
          color1={"#01463e"}
          color2={"#b3e4dc"}
          color3={"#e5f2ef"}
          color4={"#c0ded8"}
          color5={"#f0f8f2"}
          onGradientSelect1={setSelectedGradientColor1}
          onGradientSelect2={setSelectedGradientColor2}
          onGradientSelect3={setSelectedGradientColor3}
          onGradientSelect4={setSelectedGradientColor4}
          onGradientSelect5={setSelectedGradientColor5}
        />
        <Gradient
          color1={"#6d678e"}
          color2={"#f6b5cc"}
          color3={""}
          color4={""}
          color5={""}
          onGradientSelect1={selectedGradientColor1}
          onGradientSelect2={selectedGradientColor2}
          onGradientSelect3={selectedGradientColor3}
          onGradientSelect4={selectedGradientColor4}
          onGradientSelect5={selectedGradientColor5}
        />
      </div>
    </div>
  );
}

export default GalleryGradients;
