import React, { createElement, useState } from "react";
import { ChromePicker } from "react-color";
import Notification from "../../Notification";

function CreationGradients() {
  const [colors, setColors] = useState(["#FFFFFF", "#FFFFFF"]);
  const [piker, setPiker] = useState(null);
  const [notification, setNotification] = useState("");
  const [notificationText, setNotificationText] = useState("");
  React.useEffect(() => {
    //eliminar el scrrol
    if (piker !== null) {
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
      setPiker(null);
      handleSaveGradient(colors);
    };
  }
  // funcion para crear un nuevo (P)
  function newVal() {
    if (colors.length < 5) {
      setColors([...colors, "#FFFFFF"]);
      setPiker(colors.length); // Selecciona el nuevo color agregado
      console.log(piker);
      console.log(colors.length);
      setNotification();
      setNotificationText("New added color");
    } else {
      setNotificationText("Max 5 colors");
    }
  }

  return (
    <div className="flex flex-col items-center justify-center">
      {/* card selected palette */}
      <div className="bg-linear-180 from-[#1D1D1D] to-[#DDDAD8] dark:from-[#FFFFFF] dark:to-[#1D1D1d] p-[1px] my-5 w-full ">
        <div className="bg-[#DDDAD8] dark:bg-[#1D1D1D] flex flex-col items-center justify-evenly h-full text-[#181818] dark:text-[#DDDAD8] p-1">
          <div className="w-full flex justify-between items-center p-2">
            <p>Gradient</p>
            <div className="flex gap-5">
              <button
                onClick={() => {
                  newVal();
                  setNotification(true);
                  setTimeout(() => setNotification(false), 1500);
                }}
                className="hover:cursor-pointer"
              >
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 13 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-[#1D1D1D] dark:fill-[#DDDAD8]"
                >
                  <path d="M0 7V6H6V0H7V6H13V7H7V13H6V7H0Z" />
                </svg>
              </button>
              <button
                onClick={() => {
                  Copy(colors);
                  setPiker(null);
                  setNotification(true),
                    setTimeout(() => setNotification(false), 1500);
                  setNotificationText("Gradient copied");
                }}
                className="hover:cursor-pointer"
              >
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 23 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-2 stroke-[#1D1D1D] dark:stroke-[#DDDAD8]"
                >
                  <path d="M6.5 4.25H4C3.33696 4.25 2.70107 4.51339 2.23223 4.98223C1.76339 5.45107 1.5 6.08696 1.5 6.75V21.75C1.5 22.413 1.76339 23.0489 2.23223 23.5178C2.70107 23.9866 3.33696 24.25 4 24.25H16.5C17.163 24.25 17.7989 23.9866 18.2678 23.5178C18.7366 23.0489 19 22.413 19 21.75V20.5M6.5 4.25C6.5 4.91304 6.76339 5.54893 7.23223 6.01777C7.70107 6.48661 8.33696 6.75 9 6.75H11.5C12.163 6.75 12.7989 6.48661 13.2678 6.01777C13.7366 5.54893 14 4.91304 14 4.25M6.5 4.25C6.5 3.58696 6.76339 2.95107 7.23223 2.48223C7.70107 2.01339 8.33696 1.75 9 1.75H11.5C12.163 1.75 12.7989 2.01339 13.2678 2.48223C13.7366 2.95107 14 3.58696 14 4.25M14 4.25H16.5C17.163 4.25 17.7989 4.51339 18.2678 4.98223C18.7366 5.45107 19 6.08696 19 6.75V10.5M21.5 15.5H9M9 15.5L12.75 11.75M9 15.5L12.75 19.25" />
                </svg>
              </button>
            </div>
          </div>
          <div className="w-full">
            <div className="flex justify-evenly items-center ">
              {colors.map((color, index) => (
                <p
                  key={index}
                  onClick={() => {
                    setPiker(index), console.log(piker);
                  }}
                  className="border-b border-[#1D1D1D] dark:border-[#DDDAD8] cursor-pointer"
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

      <div className="w-full h-full md:w-4/5 md:h-4/5 lg:w-3/5">
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
      {loadFromLocalStorage()}
      {notification && <Notification text={notificationText} />}
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
            "bg-linear-180 from-[#1D1D1D] to-[#DDDAD8] dark:from-[#FFFFFF] dark:to-[#1D1D1d] p-[1px] my-5 w-full md:w-4/5",
        },
        createElement(
          "div",
          {
            className:
              "bg-[#DDDAD8] dark:bg-[#1D1D1D] flex items-center justify-evenly h-full p-2.5 text-[#181818] dark:text-[#DDDAD8]",
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
