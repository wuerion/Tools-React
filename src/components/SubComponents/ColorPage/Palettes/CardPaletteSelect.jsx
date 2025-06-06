import React from "react";
import Notification from "../../../Notification";
function CardPaletteSelect({ color1, color2, color3, color4, color5 }) {
  const [notification, setNotification] = React.useState(false);

  function copy(val1, val2, val3, val4, val5) {
    navigator.clipboard.writeText([val1, val2, val3, val4, val5]);
  }
  return (
    <div className="bg-linear-180 from-[#1D1D1D] to-[#DDDAD8] dark:from-[#FFFFFF] dark:to-[#1D1D1D] p-[1px] my-5 h-14">
      <div className="bg-[#DDDAD8] dark:bg-[#1D1D1D] flex items-center justify-evenly h-full text-[#181818] dark:text-[#DDDAD8]">
        <p>Palettes:</p>
        <div
          className="w-[12%] h-9 rounded-lg"
          style={{ backgroundColor: color1 }}
        ></div>
        <div
          className="w-[12%] h-9 rounded-lg"
          style={{ backgroundColor: color2 }}
        ></div>
        <div
          className="w-[12%] h-9 rounded-lg"
          style={{ backgroundColor: color3 }}
        ></div>
        <div
          className="w-[12%] h-9 rounded-lg"
          style={{ backgroundColor: color4 }}
        ></div>
        <div
          className="w-[12%] h-9 rounded-lg"
          style={{ backgroundColor: color5 }}
        ></div>
        <button
          onClick={() => {
            copy(color1, color2, color3, color4, color5);
            setNotification(true);
            setTimeout(() => setNotification(false), 1500);
          }}
          className="hover:cursor-pointer"
        >
          <svg
            width="30"
            height="30"
            viewBox="0 0 23 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-2 stroke-[#181818] dark:stroke-[#DDDAD8]"
          >
            <path d="M6.5 4.25H4C3.33696 4.25 2.70107 4.51339 2.23223 4.98223C1.76339 5.45107 1.5 6.08696 1.5 6.75V21.75C1.5 22.413 1.76339 23.0489 2.23223 23.5178C2.70107 23.9866 3.33696 24.25 4 24.25H16.5C17.163 24.25 17.7989 23.9866 18.2678 23.5178C18.7366 23.0489 19 22.413 19 21.75V20.5M6.5 4.25C6.5 4.91304 6.76339 5.54893 7.23223 6.01777C7.70107 6.48661 8.33696 6.75 9 6.75H11.5C12.163 6.75 12.7989 6.48661 13.2678 6.01777C13.7366 5.54893 14 4.91304 14 4.25M6.5 4.25C6.5 3.58696 6.76339 2.95107 7.23223 2.48223C7.70107 2.01339 8.33696 1.75 9 1.75H11.5C12.163 1.75 12.7989 2.01339 13.2678 2.48223C13.7366 2.95107 14 3.58696 14 4.25M14 4.25H16.5C17.163 4.25 17.7989 4.51339 18.2678 4.98223C18.7366 5.45107 19 6.08696 19 6.75V10.5M21.5 15.5H9M9 15.5L12.75 11.75M9 15.5L12.75 19.25" />
          </svg>
        </button>
        {notification && <Notification text={"Palette copied"} />}
      </div>
    </div>
  );
}
export default CardPaletteSelect;
