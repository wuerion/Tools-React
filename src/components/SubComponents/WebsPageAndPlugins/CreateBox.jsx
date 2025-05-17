import React from "react";

function CreateBox({ title, text, url, img, alt }) {
  return (
    <div className="bg-linear-180 from-[#1D1D1D] to-[#DDDAD8] dark:from-[#FFFFFF] dark:to-[#1D1D1D] p-[1px]  my-5 w-full h-full md:w-4/5">
      <div className="bg-[#DDDAD8] dark:bg-[#1D1D1D] flex flex-col items-center justify-center gap-1 p-2 h-full w-full text-[#181818] dark:text-[#DDDAD8] cursor-pointer">
        <h3>{title}</h3>
        <a href={`${url}`} className="w-3/4 md:w-1/2 my-4" target="_blank">
          <img src={`${img}`} alt={`${alt}`} />
        </a>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default CreateBox;
