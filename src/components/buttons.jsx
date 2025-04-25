import React from "react";

function buttons({ children }) {
  //   const { children } = props;
  return (
    <>
      <a
        href="#"
        className="bg-linear-180 from-[#FFFFFF] to-[#1D1D1D] w-[200px] h-[150px] rounded-t-[0.5rem] p-[1px] flex items-center justify-center grow-0 basis-full snap-center scroll-m-5 scroll-me-5"
      >
        <span className="bg-[#1D1D1D] w-full h-[50px] text-white content-center rounded-t-[0.5rem]">
          {children}
        </span>
      </a>
    </>
  );
}

export default buttons;
