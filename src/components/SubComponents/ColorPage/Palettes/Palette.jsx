import React, { createElement } from "react";

function Palette({
  color1,
  color2,
  color3,
  color4,
  color5,
  onPaletteSelect1,
  onPaletteSelect2,
  onPaletteSelect3,
  onPaletteSelect4,
  onPaletteSelect5,
}) {
  color1 = "#" + color1.toUpperCase();
  color2 = "#" + color2.toUpperCase();
  color3 = "#" + color3.toUpperCase();
  color4 = "#" + color4.toUpperCase();
  color5 = color5 ? color5.toUpperCase() : "";

  const x = color5 !== undefined && color5 !== null && color5 !== "";
  // function for copy palet
  //? podemos ingresar los colores de la paleta en un arrar dentro de otro array, le asignamos al array un tipo de ID con el map lo buscamos y hacemos considir el ID con el num del array (el primer array va atener el ID 0)

  const handleClick = (color1, color2, color3, color4, color5 = "") => {
    if (typeof onPaletteSelect1 === "function") onPaletteSelect1(color1);
    if (typeof onPaletteSelect2 === "function") onPaletteSelect2(color2);
    if (typeof onPaletteSelect3 === "function") onPaletteSelect3(color3);
    if (typeof onPaletteSelect4 === "function") onPaletteSelect4(color4);
    if (typeof onPaletteSelect5 === "function") onPaletteSelect5(color5);
  };
  const color = [color5 ? [color5] : ""];

  return (
    <>
      {createElement(
        "div",
        {
          className:
            "bg-linear-180 from-[#1D1D1D] to-[#DDDAD8] dark:from-[#DDDAD8] dark:to-[#1D1D1d] p-[1px] my-5 w-full h-14",
        },
        createElement(
          "div",
          {
            className:
              "bg-[#DDDAD8] dark:bg-[#1D1D1D] flex items-center justify-evenly h-full py-1.5 text-white",
            onClick: () => handleClick(color1, color2, color3, color4, color),
          },
          createElement("div", {
            className:
              "w-9 h-9 rounded-lg border border-[#1D1D1D] dark:border-[#DDDAD8]",
            style: { backgroundColor: color1 },
          }),
          createElement("div", {
            className:
              "w-9 h-9 rounded-lg border border-[#1D1D1D] dark:border-[#DDDAD8]",
            style: { backgroundColor: color2 },
          }),
          createElement("div", {
            className:
              "w-9 h-9 rounded-lg border border-[#1D1D1D] dark:border-[#DDDAD8]",
            style: { backgroundColor: color3 },
          }),
          createElement("div", {
            className:
              "w-9 h-9 rounded-lg border border-[#1D1D1D] dark:border-[#DDDAD8]",
            style: { backgroundColor: color4 },
          }),
          createElement("div", {
            className:
              "w-9 h-9 rounded-lg border border-[#1D1D1D] dark:border-[#DDDAD8]",
            style: { backgroundColor: color5 },
          })
        )
      )}
    </>
  );
}

export default Palette;
