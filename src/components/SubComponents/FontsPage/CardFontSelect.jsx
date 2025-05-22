import React, { useState } from "react";
import fonts from "./Fonts";
import Notification from "../../Notification";
function CardFontSelect({ font, nameFont }) {
  const [text, setText] = useState("Hello World");
  const [notification, setNotification] = useState(false);
  function Copy(font) {
    const formattedFont = font.includes(" ") ? font.replace(/ /g, "+") : font;
    navigator.clipboard.writeText(
      `https://fonts.googleapis.com/css2?family=${formattedFont}&display=swap;`
    );
  }
  return (
    <div className="bg-linear-180 from-[#1D1D1D] to-[#DDDAD8] dark:from-[#FFFFFF] dark:to-[#1D1D1D] p-[1px] my-5 ">
      {notification && <Notification text={"Font copied"} />}
      <div className="bg-[#DDDAD8] dark:bg-[#1D1D1D] flex flex-col items-center justify-center gap-4 h-full text-[#181818] dark:text-[#DDDAD8] p-2">
        <div className="bg-[#f2f2f2] dark:bg-white/30 w-full flex justify-between rounded-tl-4xl rounded-lg  gap-2 pr-2 shadow-[0_4px_2px_#DAD7D5] dark:shadow-[0_4px_2px_#181818]">
          <div className="w-full">
            <input
              type="text"
              placeholder="Type something..."
              title="Type something..."
              aria-label="Type something..."
              className=" w-full h-10 pl-5 focus:outline-0 rounded-tl-4xl rounded-br-4xl  text-[#DDDAD8] dark:text-[#181818] bg-[#181818] dark:bg-[#DDDAD8]"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-4 w-16">
            <a
              href={`https://fonts.google.com/specimen/${font}`}
              target="_blank"
              title="Google Fonts"
              aria-label="Google Fonts"
              rel="noreferrer"
              className="cursor-pointer"
            >
              <svg
                width="25"
                height="25"
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-2 stroke-[#1D1D1D] dark:stroke-[#DDDAD8]"
              >
                <path
                  d="M22.1786 11.5C22.1786 14.3321 21.0535 17.0483 19.0509 19.0509C17.0483 21.0535 14.3321 22.1786 11.5 22.1786C8.66785 22.1786 5.95171 21.0535 3.94909 19.0509C1.94647 17.0483 0.821411 14.3321 0.821411 11.5M22.1786 11.5C22.1786 8.66785 21.0535 5.95171 19.0509 3.94909C17.0483 1.94647 14.3321 0.821411 11.5 0.821411C8.66785 0.821411 5.95171 1.94647 3.94909 3.94909C1.94647 5.95171 0.821411 8.66785 0.821411 11.5M22.1786 11.5H0.821411"
                  stroke=""
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.6071 11.5C15.4054 15.405 13.967 19.1448 11.5 22.1786C9.03292 19.1448 7.59456 15.405 7.39282 11.5C7.59456 7.59493 9.03292 3.8552 11.5 0.821411C13.967 3.8552 15.4054 7.59493 15.6071 11.5Z"
                  stroke=""
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
            <button
              className="cursor-pointer"
              title="Copy"
              aria-label="Copy"
              onClick={() => {
                Copy(font);
                setNotification(true);
                setTimeout(() => {
                  setNotification(false);
                }, 1500);
              }}
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
          <p className="text-start text-[#181818] dark:text-[#DDDAD8]">
            {nameFont || "Font"}:
            <span className={"ml-1.5"} style={{ fontFamily: `${font} ` }}>
              {text || "Hello World"}{" "}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CardFontSelect;
