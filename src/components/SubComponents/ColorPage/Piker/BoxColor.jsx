import React, { createElement } from "react";

function BoxColor({ color, onColorSelect, onColorSelec }) {
  const handleClick = (selectedColor) => {
    onColorSelect(selectedColor);
    const rgbColor = hexToRgb(selectedColor);
    onColorSelec(rgbColor);
    navigator.clipboard.writeText(selectedColor); // Copia el color al portapapeles
    alert(`Color ${selectedColor} copied to clipboard`);
    console.log(selectedColor);
  };

  const hexToRgb = (hex) => {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgb(${r}, ${g}, ${b})`;
  };

  return (
    <div>
      {/* Mapeo de colores */}
      {color.map((col, i) =>
        createElement(
          "div",
          {
            key: i,
            className: "w-[100%] h-5",
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
