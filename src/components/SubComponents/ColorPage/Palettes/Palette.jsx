import React, { createElement } from "react";

function Palette({ color1, color2, color3, color4 }) {
  color1 = "#" + color1.toUpperCase();
  color2 = "#" + color2.toUpperCase();
  color3 = "#" + color3.toUpperCase();
  color4 = "#" + color4.toUpperCase();
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
          })
        )
      )}
    </>
  );
}

export default Palette;
