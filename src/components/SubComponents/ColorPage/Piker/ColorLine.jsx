import React, { createElement } from "react";

function ColorLine({ color, nameColor, hexa, rgb, hsl }) {
  const handleClick = (selectorColor) => {
    const rgbColor = haxeToRgb(selectorColor);
    const hslColor = hexaToHsl(selectorColor);
    hexa(selectorColor);
    rgb(rgbColor);
    hsl(hslColor);
    navigator.clipboard.writeText([selectorColor, rgbColor, hslColor]);
    console.log(selectorColor);
  };
  const haxeToRgb = (hexa) => {
    const bigint = parseInt(hexa.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgb(${r}, ${g}, ${b})`;
  };
  const hexaToHsl = (hexa) => {
    let r = 0,
      g = 0,
      b = 0;
    if (hexa.length === 7) {
      r = parseInt(hexa.slice(1, 3), 16) / 255;
      g = parseInt(hexa.slice(3, 5), 16) / 255;
      b = parseInt(hexa.slice(5, 7), 16) / 255;
    }
    const max = Math.max(r, g, b),
      min = Math.min(r, g, b);
    let h,
      s,
      l = (max + min) / 2;
    if (max === min) {
      h = s = 0;
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
        default:
          h = 0;
      }
      h /= 6;
    }
    h = Math.round(h * 360);
    s = Math.round(s * 100);
    l = Math.round(l * 100);
    return `hsl(${h}, ${s}%, ${l}%)`;
  };
  return (
    <div className="w-full">
      <p className="text-center py-5 text-lg text-[#181818] dark:text-[#DDDAD8] border-y-[1px] border-white">
        {nameColor}
      </p>
      <div className="flex items-end w-full flex-col gap-2.5">
        {color.map((col, i) =>
          createElement(
            "div",
            {
              key: i,
              className:
                "text-[#181818] dark:text-[#DDDAD8] w-full flex border border-[#1D1D1D] dark:border-[#DDDAD8] border-r-0 py-1 pl-1",
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
              onClick: () => handleClick(col),
            }),
            null
          )
        )}
      </div>
    </div>
  );
}

export default ColorLine;
