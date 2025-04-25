import React from "react";
import Button from "./buttons.jsx";

function header({ title, text, removeTitle, menuIs }) {
  const element = document.querySelector(".title");
  const menu = document.querySelector(".menu");
  if (!removeTitle) {
    element?.remove();
  }
  if (!menuIs) {
    menu?.remove();
  }

  return (
    <header className="font-[Allerta] text-center text-sm p-5 h-dvh">
      <div className="bg-linear-180 from-[#FFFFFF] to-[#1D1D1D] w-full h-1/2  p-[1px]">
        <div className="bg-[#1d1d1d] w-full h-full flex flex-col items-center justify-center text-white gap-10 py-10 px-4">
          <h2 className="font-[Julius_Sans_One] text-4xl bg-clip-text text-transparent -bg-linear-270 from-[#B3BEFF] to-[#666666]">
            {title}
          </h2>
          <h1 className="title">
            Do you need color, gradients, fonts, frameworks, web, plugins
          </h1>
          <p>{text}</p>
        </div>
      </div>

      <div className="menu flex justify-center items-center  border border-amber-50">
        <svg
          width="400"
          height="459"
          viewBox="0 0 400 459"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute -bottom-1 -z-0"
        >
          <path
            d="M0 80C0 51.9974 0 37.9961 5.44967 27.3005C10.2433 17.8924 17.8924 10.2433 27.3005 5.44967C37.9961 0 51.9974 0 80 0H320C348.003 0 362.004 0 372.7 5.44967C382.108 10.2433 389.757 17.8924 394.55 27.3005C400 37.9961 400 51.9974 400 80V521.089H0V80Z"
            fill="black"
          />
          <path
            d="M10 74.1951C10 51.793 10 40.5919 14.3597 32.0354C18.1947 24.509 24.3139 18.3897 31.8404 14.5548C40.3968 10.1951 51.5979 10.1951 74 10.1951H326C348.402 10.1951 359.603 10.1951 368.16 14.5548C375.686 18.3897 381.805 24.509 385.64 32.0354C390 40.5919 390 51.793 390 74.1951V519.956H10V74.1951Z"
            fill="url(#paint0_linear_110_26)"
          />
          <path
            d="M170 37.3825C170 31.1262 175.072 26.0545 181.328 26.0545H218.672C224.928 26.0545 230 31.1262 230 37.3825C230 43.6388 224.928 48.7105 218.672 48.7105H181.328C175.072 48.7105 170 43.6388 170 37.3825Z"
            fill="black"
          />
          <defs>
            <linearGradient
              id="paint0_linear_110_26"
              x1="200"
              y1="0"
              x2="200"
              y2="521.089"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.0001" stop-color="#1D1D1D" />
              <stop offset="1" />
            </linearGradient>
          </defs>
        </svg>
        <div className="flex flex-col gap-8 tems-center justify-evenly py-2.5  h-[300px]   overflow-scroll snap-mandatory snap-y absolute bottom-0">
          <Button>Colors</Button>
          <Button>Gradients</Button>
          <Button>Fonts</Button>
          <Button>Frameworks</Button>
          <Button>Web</Button>
          <Button>Plugins</Button>
          <Button>Tools</Button>
        </div>
      </div>
    </header>
  );
}

export default header;
