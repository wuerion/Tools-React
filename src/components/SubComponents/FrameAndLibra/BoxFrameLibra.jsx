import React, { children } from "react";

function BoxFrameLibra({ url, children }) {
  return (
    <div className="bg-linear-180 from-[#1D1D1D] to-[#DDDAD8] dark:from-[#FFFFFF] dark:to-[#1D1D1D] p-[1px] my-5 h-16 w-full">
      <div className="bg-[#DDDAD8] dark:bg-[#1D1D1D] flex flex-col items-center justify-center gap-1 h-20 w-full text-white cursor-pointer">
        <a href={`${url}`}>{children}</a>
      </div>
    </div>
  );
}

export default BoxFrameLibra;
