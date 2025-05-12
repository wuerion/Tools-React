import React from "react";

function CreateBoxPage({ title, text, url, img, alt }) {
  return (
    <div className="bg-linear-180 from-[#FFFFFF] to-[#1D1D1D] p-[1px]  my-5 w-full">
      <div className="bg-[#1D1D1D] flex flex-col items-center justify-center gap-1 p-2 h-full w-full text-white cursor-pointer">
        <h3>{title}</h3>
        <a href={`${url}`} className="w-3/4 my-4" target="_blank">
          <img src={`${img}`} alt={`${alt}`} />
        </a>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default CreateBoxPage;
