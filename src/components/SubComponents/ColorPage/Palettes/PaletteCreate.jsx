import React, { createElement, useState } from "react";
import { ChromePicker } from "react-color";
import Notification from "../../../Notification";

function PalatteCreateSub() {
  const [color, setColor] = useState("#FFFFFF"); // Estado del color seleccionado
  const [piker, setPiker] = useState(null);
  const [showNotify, setShowNotify] = useState(false); // Estado para controlar la visibilidad de la notificación
  const handleChange = (newColor) => {
    setColor(newColor.hex); // Actualiza el estado con el nuevo color en formato hexadecimal
  };

  React.useEffect(() => {
    if (piker !== null) {
      document.body.style.overflow = "hidden"; // Desactiva el scroll
    } else {
      document.body.style.overflow = ""; // Reactiva el scroll
    }

    return () => {
      document.body.style.overflow = ""; // Limpieza al desmontar el componente
    };
  }, [piker]);
  // <div className="flex justify-evenly items-center gap-5 border border-white py-5 text-white">
  return (
    <div className="flex flex-col items-center justify-center my-4">
      <div className="bg-linear-180 from-[#1D1D1D] to-[#DDDAD8] dark:from-[#FFFFFF] dark:to-[#1D1D1D] w-full p-[1px]">
        <div className="bg-[#DDDAD8] dark:bg-[#1D1D1D] w-full flex justify-evenly items-center text-[#181818] dark:text-[#DDDAD8] py-5 ">
          <p>Palette:</p>
          {[0, 1, 2, 3, 4].map((index) => (
            <div
              key={index}
              className="w-9 h-9 rounded-lg border border-[#181818] dark:border-[#DDDAD8]"
              style={{ backgroundColor: color[index] || "" }}
              onClick={() => setPiker(index)} // Cambia el estado de `piker` al índice del div seleccionado
            ></div>
          ))}
          <button
            className="hover:cursor-pointer"
            onClick={() => {
              handleSavePalette(color);
              setColor(["", "", "", "", ""]);
              setPiker(null);
              setShowNotify(true); // Muestra la notificación
              setTimeout(() => {
                setShowNotify(false); // Oculta la notificación después de 2 segundos
              }, 1500); // Cambia el tiempo según tus necesidades
            }} // Llamamos a la función para guardar
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-[#181818] dark:fill-[#DDDAD8]"
            >
              <path
                d="M16 3.423V16H0V0H12.577L16 3.423ZM15 3.85L12.15 1H1V15H15V3.85ZM7.996 12.538C8.55 12.538 9.02233 12.344 9.413 11.956C9.80367 11.568 9.99933 11.097 10 10.543C10.0007 9.989 9.80667 9.51633 9.418 9.125C9.02933 8.73367 8.55833 8.53833 8.005 8.539C7.45167 8.53967 6.97867 8.73333 6.586 9.12C6.19333 9.50667 5.998 9.97833 6 10.535C6.002 11.0917 6.196 11.5643 6.582 11.953C6.968 12.3417 7.43933 12.5373 7.996 12.54M2.769 5.77H10.192V2.77H2.77L2.769 5.77ZM1 3.85V15V1V3.85Z"
                fill=""
              />
            </svg>
          </button>
        </div>
      </div>

      <div className=" mt-1.5 flex justify-center items-center w-full md:w-4/5 md:h-4/5 lg:w-3/5">
        <div className="w-full">
          <ChromePicker
            color={color[piker] || ""}
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
      {showNotify && <Notification text="Palette saved!" show={showNotify} />}
      {/* Aquí se muestran las paletas guardadas */}
      {loadFromLocalStorage()}
    </div>
  );
}

// Guardar la paleta en el localStorage
function saveToLocalStorage(palette) {
  const savedPalettes = JSON.parse(localStorage.getItem("palettes")) || [];
  savedPalettes.unshift(palette);
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
          "bg-linear-180 from-[#1D1D1D] to-[#DDDAD8] dark:from-[#DDDAD8] dark:to-[#1D1D1d] p-[1px] my-5 w-full h-14",
      },
      createElement(
        "div",
        {
          className:
            "bg-[#DDDAD8] dark:bg-[#1D1D1D] flex items-center justify-evenly h-full py-1.5 text-white",
        },
        createElement("div", {
          className: "w-9 h-9 rounded-lg",
          style: { backgroundColor: color[0] || "" },
        }),
        createElement("div", {
          className: "w-9 h-9 rounded-lg",
          style: { backgroundColor: color[1] || "" },
        }),
        createElement("div", {
          className: "w-9 h-9 rounded-lg",
          style: { backgroundColor: color[2] || "" },
        }),
        createElement("div", {
          className: "w-9 h-9 rounded-lg",
          style: { backgroundColor: color[3] || "" },
        }),
        createElement("div", {
          className: "w-9 h-9 rounded-lg",
          style: { backgroundColor: color[4] || "" },
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

export default PalatteCreateSub;
