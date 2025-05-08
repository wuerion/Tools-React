// import { color } from "@uiw/react-color";
import React, { createElement, useEffect, useState } from "react";
import { ChromePicker } from "react-color";

function Test() {
  const [color, setColor] = useState("#FFFFFF"); // Estado del color seleccionado

  const [piker, setPiker] = useState(false);

  const handleChange = (newColor) => {
    setColor(newColor.hex); // Actualiza el estado con el nuevo color en formato hexadecimal
  };

  React.useEffect(() => {
    if (piker) {
      document.body.style.overflow = "hidden"; // Desactiva el scroll
    } else {
      document.body.style.overflow = ""; // Reactiva el scroll
    }

    return () => {
      document.body.style.overflow = ""; // Limpieza al desmontar el componente
    };
  }, [piker]);

  return (
    <div>
      <div className="flex justify-evenly items-center gap-5 border border-white py-5 text-white">
        <p>Palette:</p>
        {[0, 1, 2, 3].map((index) => (
          <div
            key={index}
            className="w-9 h-9 rounded-lg border border-white"
            style={{ backgroundColor: color[index] || "#FFFFFF" }}
            onClick={() => setPiker(index)} // Cambia el estado de `piker` al índice del div seleccionado
          ></div>
        ))}
        <button
          className="border rounded-lg py-2 px-2.5"
          onClick={() => {
            handleSavePalette(color);
            setColor(["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"]);
          }} // Llamamos a la función para guardar
        >
          Save
        </button>
      </div>

      <div className="w-[100%] mt-1.5 flex justify-center items-center">
        <div className="w-full">
          <ChromePicker
            color={color[piker] || "#FFFFFF"}
            onChange={(newColor) => {
              setColor((prevColors) => {
                const updatedColors = [...prevColors];
                updatedColors[piker] = newColor.hex; // Actualiza solo el color del div seleccionado
                return updatedColors;
              });
            }}
            width="100%"
            disableAlpha
          />
        </div>
      </div>

      <div>
        {/* Aquí se muestran las paletas guardadas */}
        {loadFromLocalStorage()}
      </div>
    </div>
  );
}

// Guardar la paleta en el localStorage
function saveToLocalStorage(palette) {
  const savedPalettes = JSON.parse(localStorage.getItem("palettes")) || [];
  savedPalettes.push(palette);
  localStorage.setItem("palettes", JSON.stringify(savedPalettes));
}

// Cargar las paletas desde el localStorage
function loadFromLocalStorage() {
  const palette = JSON.parse(localStorage.getItem("palettes")) || [];

  return palette.map((color, index) => {
    return createElement(
      "div",
      {
        key: index,
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
          style: { backgroundColor: color[0] || "#FFFFFF" },
        }),
        createElement("div", {
          className: "w-9 h-9 rounded-lg",
          style: { backgroundColor: color[1] || "#FFFFFF" },
        }),
        createElement("div", {
          className: "w-9 h-9 rounded-lg",
          style: { backgroundColor: color[2] || "#FFFFFF" },
        }),
        createElement("div", {
          className: "w-9 h-9 rounded-lg",
          style: { backgroundColor: color[3] || "#FFFFFF" },
        })
      )
    );
  });
}

// Llamar a saveToLocalStorage cuando se guarde una paleta
function handleSavePalette(color) {
  saveToLocalStorage(color);
  loadFromLocalStorage();
}

export default Test;
