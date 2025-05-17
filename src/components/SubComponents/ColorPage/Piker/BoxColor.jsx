import React, { createElement } from "react";

function BoxColor({ color, colorSelectHtml, colorSelectRgb, colorSelectHsl }) {
  const handleClick = (selectedColor) => {
    // funcion para seleccionar el color y copiar el (hexa, rgb, hsl)
    const rgbColor = hexToRgb(selectedColor);
    const hslColor = hexToHsl(selectedColor);
    colorSelectHtml(selectedColor);
    colorSelectRgb(rgbColor);
    colorSelectHsl(hslColor);
    navigator.clipboard.writeText([selectedColor, rgbColor, hslColor]); // Copia el color al portapapeles
    console.log(rgbColor);
  };
  const hexToRgb = (hex) => {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgb(${r}, ${g}, ${b})`;
  };

  const hexToHsl = (hex) => {
    // funcion para convertir el codigo hexa a hsl
    let r = 0,
      g = 0,
      b = 0;
    if (hex.length === 7) {
      r = parseInt(hex.slice(1, 3), 16) / 255;
      g = parseInt(hex.slice(3, 5), 16) / 255;
      b = parseInt(hex.slice(5, 7), 16) / 255;
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
    <div>
      {/* Mapeo de colores */}
      {color.map((col, i) =>
        createElement(
          "div",
          {
            key: i,
            className: "w-[100%] h-5 hover:scale-125",
            style: { backgroundColor: col },
            id: col,
            onClick: () => handleClick(col), // Llama a handleClick con el color seleccionado
          },
          null
        )
      )}
    </div>
  );
}

export default BoxColor;
