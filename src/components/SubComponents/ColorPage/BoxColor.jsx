import React, { createElement } from "react";

function BoxColor({ color, onColorSelect }) {
  const handleClick = (selectedColor) => {
    onColorSelect(selectedColor);
    navigator.clipboard.writeText(selectedColor); // Copia el color al portapapeles
    alert(`Color ${selectedColor} copied to clipboard`);
    console.log(selectedColor);
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
