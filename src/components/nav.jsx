import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  // md:w-[clamp(200px,100%,700px)]
  return (
    <div className="w-full flex items-center justify-center text-[#181818] dark:text-[#DDDAD8] ">
      <svg
        width="400"
        height="521"
        viewBox="0 0 400 521"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[calc(100%-50px)] h-[cacl(50dvh)] absolute -bottom-[30px] md:hidden"
      >
        <path
          d="M0 80C0 51.9974 0 37.9961 5.44967 27.3005C10.2433 17.8924 17.8924 10.2433 27.3005 5.44967C37.9961 0 51.9974 0 80 0H320C348.003 0 362.004 0 372.7 5.44967C382.108 10.2433 389.757 17.8924 394.55 27.3005C400 37.9961 400 51.9974 400 80V521.089H0V80Z"
          fill="black"
        />
        <path
          d="M10 74.1951C10 51.793 10 40.5919 14.3597 32.0354C18.1947 24.509 24.3139 18.3897 31.8404 14.5548C40.3969 10.1951 51.5979 10.1951 74 10.1951H326C348.402 10.1951 359.603 10.1951 368.16 14.5548C375.686 18.3897 381.805 24.509 385.64 32.0354C390 40.5919 390 51.793 390 74.1951V519.956H10V74.1951Z"
          className="fill-[#DDDAD8] dark:fill-[#1D1D1D]"
        />
        <path
          d="M170 37.3825C170 31.1262 175.072 26.0545 181.328 26.0545H218.672C224.928 26.0545 230 31.1262 230 37.3825C230 43.6388 224.928 48.7105 218.672 48.7105H181.328C175.072 48.7105 170 43.6388 170 37.3825Z"
          fill="black"
        />
        <defs>
          <linearGradient
            id="paint0_linear_110_27"
            x1="200"
            y1="0"
            x2="200"
            y2="521.089"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.0001" stop-color="#fff" />
            <stop offset="1" />
          </linearGradient>
        </defs>
      </svg>
      <ul className="flex flex-col gap-8 items-center justify-evenly py-2.5 h-[300px] overflow-scroll snap-mandatory snap-y md:snap-x absolute bottom-0 md:static md:flex-row md:justify-evenly md:w-4/5 md:h-[100px] md:p-2.5">
        <li className="bg-linear-180 from-[#1D1D1D] to-[#DDDAD8] dark:from-[#DDDAD8] dark:to-[#1D1D1D] w-[200px] h-[51px] rounded-t-[0.5rem] p-[1px] flex items-center justify-center grow-0 basis-full md:shrink-0 snap-center scroll-m-5 scroll-me-5 md:w-full md:h-[80px]">
          <Link
            to="/homePage"
            className="bg-[#DDDAD8] dark:bg-[#1D1D1D] w-full h-[50px] text-[#181818] dark:text-[#DDDAD8] content-center rounded-t-[0.5rem] text-center md:h-[79px]"
          >
            Home
          </Link>
        </li>
        <li className="bg-linear-180 from-[#1D1D1D] to-[#DDDAD8] dark:from-[#DDDAD8] dark:to-[#1D1D1D] w-[200px] h-[51px] rounded-t-[0.5rem] p-[1px] flex items-center justify-center grow-0 basis-full snap-center scroll-m-5 scroll-me-5 md:shrink-0 md:w-full md:h-[80px]">
          <Link
            to="/colorPage"
            className="bg-[#DDDAD8] dark:bg-[#1D1D1D] w-full h-[50px] text-[#181818] dark:text-[#DDDAD8] content-center rounded-t-[0.5rem] text-center md:h-[79px]"
          >
            Color
          </Link>
        </li>
        <li className="bg-linear-180 from-[#1D1D1D] to-[#DDDAD8] dark:from-[#DDDAD8] dark:to-[#1D1D1D] w-[200px] h-[51px] rounded-t-[0.5rem] p-[1px] flex items-center justify-center grow-0 basis-full md:shrink-0 snap-center scroll-m-5 scroll-me-5 md:w-full md:h-[80px]">
          <Link
            to="/gradientPage"
            className="bg-[#DDDAD8] dark:bg-[#1D1D1D] w-full h-[50px] text-[#181818] dark:text-[#DDDAD8] content-center rounded-t-[0.5rem] text-center md:h-[79px]"
          >
            Gradient
          </Link>
        </li>
        <li className="bg-linear-180 from-[#1D1D1D] to-[#DDDAD8] dark:from-[#DDDAD8] dark:to-[#1D1D1D] w-[200px] h-[51px] rounded-t-[0.5rem] p-[1px] flex items-center justify-center grow-0 basis-full md:shrink-0 snap-center scroll-m-5 scroll-me-5 md:w-full md:h-[80px]">
          <Link
            to="/fontsPage"
            className="bg-[#DDDAD8] dark:bg-[#1D1D1D] w-full h-[50px] text-[#181818] dark:text-[#DDDAD8] content-center rounded-t-[0.5rem] text-center md:h-[79px]"
          >
            Fonts
          </Link>
        </li>
        <li className="bg-linear-180 from-[#1D1D1D] to-[#DDDAD8] dark:from-[#DDDAD8] dark:to-[#1D1D1D] w-[200px] h-[51px] rounded-t-[0.5rem] p-[1px] flex items-center justify-center grow-0 basis-full md:shrink-0 snap-center scroll-m-5 scroll-me-5 md:w-full md:h-[80px]">
          <Link
            to={"/frameAndLibra"}
            className="bg-[#DDDAD8] dark:bg-[#1D1D1D] w-full h-[50px] text-[#181818] dark:text-[#DDDAD8] content-center rounded-t-[0.5rem] text-center md:h-[79px]"
          >
            Frameworks and Libraries
          </Link>
        </li>
        <li className="bg-linear-180 from-[#1D1D1D] to-[#DDDAD8] dark:from-[#DDDAD8] dark:to-[#1D1D1D] w-[200px] h-[51px] rounded-t-[0.5rem] p-[1px] flex items-center justify-center grow-0 basis-full md:shrink-0 snap-center scroll-m-5 scroll-me-5 md:w-full md:h-[80px]">
          <Link
            to={"/webs"}
            className="bg-[#DDDAD8] dark:bg-[#1D1D1D] w-full h-[50px] text-[#181818] dark:text-[#DDDAD8] content-center rounded-t-[0.5rem] text-center md:h-[79px]"
          >
            Webs
          </Link>
        </li>
        <li className="bg-linear-180 from-[#1D1D1D] to-[#DDDAD8] dark:from-[#DDDAD8] dark:to-[#1D1D1D] w-[200px] h-[51px] rounded-t-[0.5rem] p-[1px] flex items-center justify-center grow-0 basis-full md:shrink-0 snap-center scroll-m-5 scroll-me-5 md:w-full md:h-[80px]">
          <Link
            to={"/pluginsFigma"}
            className="bg-[#DDDAD8] dark:bg-[#1D1D1D] w-full h-[50px] text-[#181818] dark:text-[#DDDAD8] content-center rounded-t-[0.5rem] text-center md:h-[79px]"
          >
            Plugins Figma
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
