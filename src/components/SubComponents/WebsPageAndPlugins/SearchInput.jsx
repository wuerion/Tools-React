import React from "react";

function SearchInput({ seacrhItem, changeSearchItem }) {
  return (
    <div className="bg-[#DDDAD8] dark:bg-[#1D1D1D] flex flex-col items-center justify-center gap-4 h-full text-[#181818] dark:text-[#dddad8] p-2">
      <div className="bg-[#f2f2f2] dark:bg-white/30 w-full md:w-4/5 lg:w-3/4 h-10 md:h-11 flex justify-between rounded-tl-4xl rounded-lg shadow-[0_4px_2px_#DAD7D5] dark:shadow-[0_4px_2px_#181818]">
        <div className="w-full ">
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Type something..."
            title="Type something..."
            value={seacrhItem}
            onChange={changeSearchItem}
            aria-label="Type something..."
            className=" w-full h-10 md:h-11 px-5 focus:outline-0 rounded-tl-4xl rounded-br-4xl  text-[#DDDAD8] dark:text-[#181818] bg-[#181818] dark:bg-[#DDDAD8]"
          />
        </div>
        <div className="flex items-center justify-center w-16">
          <a
            href={changeSearchItem}
            target="_blank"
            title="Google Fonts"
            aria-label="Google Fonts"
            rel="noreferrer"
            className="cursor-pointer p-2.5 text-[#181818] dark:text-[#DDDAD8] "
          >
            Search
          </a>
        </div>
      </div>
    </div>
  );
}

export default SearchInput;
