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
    <div>
      <CardGradientSelect
        color1={selectedGradientColor1}
        color2={selectedGradientColor2}
        color3={selectedGradientColor3}
        color4={selectedGradientColor4}
        color5={selectedGradientColor5}
      />
      <div>
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
      </div>
    </div>
  );
}

export default GalleryGradients;
