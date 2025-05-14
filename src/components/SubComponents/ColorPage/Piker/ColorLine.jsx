import React, { createElement } from "react";

// TODO: createElement para crear el color en linea, crear el map para recorrer el array de colores y asignarlos

function ColorLine({ color, nameColor }) {
  return (
    <div className="w-full">
      <p className="text-center my-5 text-lg text-[#1D1D1D] dark:text-[#DDDAD8]">
        {nameColor}
      </p>
      <div className="flex items-end w-full flex-col gap-2.5">
        {color.map((col, i) =>
          createElement(
            "div",
            {
              key: i,
              className:
                "text-[#1D1D1D] dark:text-[#DDDAD8] w-full flex border border-[#1D1D1D] dark:border-[#DDDAD8] border-r-0 py-1 pl-1",
            },
            createElement("div", {
              className: "w-5 h-14 min-w-[20px]",
              style: { background: col },
            }),
            createElement(
              "div",
              {
                className:
                  "bg-[#DDDA8] flex flex-col items-start justify-end px-2 min-w-5 w-[100px]",
              },
              createElement("p", {}, "HEXA"),
              createElement("p", {}, col)
            ),
            createElement("div", {
              className: "w-full h-14 w-full",
              style: { background: col },
            }),
            null
          )
        )}
      </div>
    </div>
  );
}

export default ColorLine;
