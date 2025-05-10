import { color } from "@uiw/react-color";
import React, { createElement, useState } from "react";
import { ChromePicker } from "react-color";
//
function CreationGradients() {
  const [colors, setColors] = useState(["#FFFFFF", "#FFFFFF"]);
  const [piker, setPiker] = useState(false);
  React.useEffect(() => {
    //eliminar el scrrol
    if (piker !== false) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = ""; // Limpieza al desmontar el componente
    };
  }, [piker]);

  function Copy(colors) {
    return () => {
      const gradient = `linear-gradient(90deg, ${colors.join(", ")})`;
      navigator.clipboard.writeText(gradient);
      console.log("Gradient copied:", gradient);
      setPiker(false);
      handleSaveGradient(colors);
    };
  }
  // funcion para crear un nuevo (P)
  function newVal() {
    console.log("newVal");
    if (colors.length < 5) {
      colors.push("#FFFFFF");
      setPiker();
      console.log(colors);
    } else {
      console.log("Limit array");
    }
  }

  return (
    <div>
      {/* card selected palette */}
      <div className="bg-linear-180 from-[#FFFFFF] to-[#1D1D1d] p-[1px] my-5 w-full ">
        <div className="bg-[#1D1D1D] flex flex-col items-center justify-evenly h-full text-white p-1">
          <div className="w-full flex justify-between items-center p-2">
            <p>Gradient</p>
            <div className="flex gap-5">
              <button onClick={newVal}>+</button>
              <button onClick={Copy(colors)}>Save</button>
            </div>
          </div>
          <div className="w-full">
            <div className="flex justify-evenly items-center ">
              {colors.map((color, index) => (
                <p
                  key={index}
                  onClick={() => setPiker(piker === index ? false : index)}
                  className="border-b border-white cursor-pointer"
                >
                  {color}
                </p>
              ))}
            </div>
            <div
              className="h-12 rounded-lg my-2"
              style={{
                backgroundImage: `linear-gradient(90deg, ${colors})`,
              }}
            ></div>
          </div>
        </div>
      </div>

      <div>
        {/* piker */}
        <ChromePicker
          color={colors[piker]}
          onChangeComplete={(updatedColor) => {
            const newColors = [...colors];
            newColors[piker] = updatedColor.hex;
            setColors(newColors);
          }}
          disableAlpha
          width="100%"
        />
      </div>

      {/* card gallery  */}
      <div className="">{loadFromLocalStorage()}</div>
    </div>
  );
}

// funcion para guardar en localStorage
function saveToLocalStorage(colors) {
  const savedGradinets = JSON.parse(localStorage.getItem("gradients")) || [];
  savedGradinets.unshift(colors);
  localStorage.setItem("gradients", JSON.stringify(savedGradinets));
}

//cargar los gradientes desde el localStorage
function loadFromLocalStorage() {
  try {
    const gradient = JSON.parse(localStorage.getItem("gradients")) || [];
    // funcion para crear el box gradient guardado
    return gradient.map((colors, index) =>
      createElement(
        "div",
        {
          key: index,
          className:
            "bg-linear-180 from-[#FFFFFF] to-[#1D1D1d] p-[1px] my-5 w-full ",
        },
        createElement(
          "div",
          {
            className:
              "bg-[#1D1D1D] flex items-center justify-evenly h-full p-2.5 text-white",
          },
          createElement("div", {
            className: `h-10 rounded-lg  w-full `,
            style: { backgroundImage: `linear-gradient(90deg, ${colors})` },
          })
        )
      )
    );
  } catch (error) {
    console.error("Error loading gradients from localStorage:", error);
    return createElement(
      "div",
      {
        className: "bg-[#1D1D1D] text-white p-2 text-center my-5 w-full h-14",
      },
      "Error loading gradients"
    );
  }
}
function handleSaveGradient(color) {
  saveToLocalStorage(color);
  loadFromLocalStorage();
}

export default CreationGradients;
