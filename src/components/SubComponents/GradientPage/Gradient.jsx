import React, { createElement } from "react";

function Gradient({
  color1,
  color2,
  color3,
  color4,
  color5,
  onGradientSelect1,
  onGradientSelect2,
  onGradientSelect3,
  onGradientSelect4,
  onGradientSelect5,
}) {
  color1 = color1.toUpperCase(); //hacemos mayusculas
  color2 = color2.toUpperCase();
  color3 = color3 ? color3.toUpperCase() : ""; //hacemos mayusculas si no esta vacio
  color4 = color4 ? color4.toUpperCase() : "";
  color5 = color5 ? color5.toUpperCase() : "";

  const x = color3 !== undefined && color3 !== null && color3 !== ""; // si color 3 no esta vacio
  const y = color4 !== undefined && color4 !== null && color4 !== "";
  const z = color5 !== undefined && color5 !== null && color5 !== "";

  const handleClick = (
    color1,
    color2,
    color3 = "",
    color4 = "",
    color5 = ""
  ) => {
    if (typeof onGradientSelect1 === "function") onGradientSelect1(color1);
    if (typeof onGradientSelect2 === "function") onGradientSelect2(color2);
    if (typeof onGradientSelect3 === "function") onGradientSelect3(color3);
    if (typeof onGradientSelect4 === "function") onGradientSelect4(color4);
    if (typeof onGradientSelect5 === "function") onGradientSelect5(color5);
  };

  const colors = [
    color1,
    color2,
    ...(x ? [color3] : []),
    ...(y ? [color4] : []),
    ...(z ? [color5] : []),
  ];
  const gradietStyle = {
    backgroundImage: `linear-gradient(90deg, ${colors.join(", ")})`,
  };
  return createElement(
    "div",
    {
      className:
        "bg-linear-180 from-white to-[#1D1D1D] p-[1px] my-5 w-full h-14",
    },
    createElement(
      "div",
      {
        className: "bg-[#1D1D1D] flex items-center justify-evenly h-full p-2.5",
        onClick: () => handleClick(color1, color2, color3, color4, color5),
      },
      createElement("div", {
        className: "w-full h-10 rounded-lg",
        style: gradietStyle,
      })
    )
  );
}

export default Gradient;
