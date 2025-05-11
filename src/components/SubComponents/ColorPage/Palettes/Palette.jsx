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
  color5 = "#" + color5.toUpperCase();
  // function for copy palet
  //? podemos ingresar los colores de la paleta en un arrar dentro de otro array, le asignamos al array un tipo de ID con el map lo buscamos y hacemos considir el ID con el num del array (el primer array va atener el ID 0)

  const handleClick = (color1, color2, color3, color4, color5) => {
    onPaletteSelect1(color1);
    onPaletteSelect2(color2);
    onPaletteSelect3(color3);
    onPaletteSelect4(color4);
    onPaletteSelect5(color5);
  };

  return (
    <>
      {createElement(
        "div",
        {
          className:
            "bg-linear-180 from-[#FFFFFF] to-[#1D1D1d] p-[1px] my-5 w-full h-14",
        },
        createElement(
          "div",
          {
            className:
              "bg-[#1D1D1D] flex items-center justify-evenly h-full py-1.5 text-white",
            onClick: () => handleClick(color1, color2, color3, color4, color5),
          },
          createElement("div", {
            className: "w-9 h-9 rounded-lg",
            style: { backgroundColor: color1 },
          }),
          createElement("div", {
            className: "w-9 h-9 rounded-lg",
            style: { backgroundColor: color2 },
          }),
          createElement("div", {
            className: "w-9 h-9 rounded-lg",
            style: { backgroundColor: color3 },
          }),
          createElement("div", {
            className: "w-9 h-9 rounded-lg",
            style: { backgroundColor: color4 },
          }),
          createElement("div", {
            className: "w-9 h-9 rounded-lg",
            style: { backgroundColor: color5 },
          })
        )
      )}
    </>
  );
}

export default Palette;
