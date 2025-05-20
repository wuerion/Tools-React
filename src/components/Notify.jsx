import React from "react";

function Notify({ text }) {
  return (
    <div className="fixed bottom-20 flex items-center justify-center w-full -m-5">
      <p className="bg-[#1D1D1D] text-[#DDDAD8] dark:bg-[#DDDAD8] dark:text-[#181818] w-1/2 h-10 absolute rounded-lg flex items-center justify-center text-center">
        {text}
      </p>
    </div>
  );
}

export default Notify;
