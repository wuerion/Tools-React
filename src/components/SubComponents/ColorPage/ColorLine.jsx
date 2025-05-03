import React, { createElement } from "react";

// TODO: createElement para crear el color en linea, crear el map para recorrer el array de colores y asignarlos

function ColorLine({ color, nameColor }) {
  return (
    <div className="mt-5">
      <p className="text-center text-white">{nameColor}</p>
      <div className="flex items-end  w-auto -mx-5 my-5 flex-col gap-2.5">
        {color.map((col, i) =>
          createElement(
            "div",
            {
              key: i,
              className:
                "text-white w-4/5 flex border border-white border-r-0 py-1 pl-1",
              id: col,
            },
            createElement("div", {
              className: "w-5 h-12 min-w-[20px]",
              style: { background: col },
            }),
            createElement(
              "div",
              {
                className:
                  "bg-[#1D1D1D] flex flex-col items-start justify-end px-2 w-[110px]",
              },
              createElement("p", {}, "HEXA"),
              createElement("p", {}, col)
            ),
            createElement("div", {
              className: "w-full h-12 w-full",
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
