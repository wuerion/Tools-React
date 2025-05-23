import React, { useState, useEffect } from "react";
import { usePageTitleAndText } from "../context/PageTitleAndTextContext";
import CreateBox from "../components/SubComponents/WebsPageAndPlugins/CreateBox";
import SearchInput from "../components/SubComponents/WebsPageAndPlugins/SearchInput";

const PluginsFigmaList = [
  {
    id: 1,
    title: "COLOR PALETTES",
    url: "https://www.figma.com/community/plugin/1259194885839478582",
    img: "/colorPalette.webp",
    alt: "Color Palette",
    text: "Color Palette - Inspire creative",
  },
  {
    id: 2,
    title: "WIREFRAME",
    url: "https://www.figma.com/community/plugin/742764242781786818",
    img: "/wireframe.webp",
    alt: "Wireframe",
    text: "wireframe - Librery",
  },
  {
    id: 3,
    title: "UNSPLASH",
    url: "https://unsplash.com/",
    img: "/unsplash.webp",
    alt: "Unsplash",
    text: "Unsplash - Images",
  },
  {
    id: 4,
    title: "HEROICONS",
    url: "https://www.figma.com/community/plugin/876119978690687541",
    img: "/heroicons.webp",
    alt: "Heroicons",
    text: "Heroicons - Icons",
  },
  {
    id: 5,
    title: "BEAUTIFUL SHADOWS",
    url: "https://www.figma.com/community/plugin/1068595505353552645",
    img: "/beautifulShadows.webp",
    alt: "Beautiful Shadows",
    text: "Beautiful Shadows - Shadows",
  },
];

function PluginsFigma() {
  const { setPageTitle, setPageText, setDescription, setMenuIs } =
    usePageTitleAndText();
  useEffect(() => {
    setPageTitle("PLUGINS FIGMA");
  }, [setPageTitle]);
  useEffect(() => {
    setPageText(
      "Here you can find a wide variety of plugins for figma, to create a better desing"
    );
  }, [setPageText]);
  useEffect(() => {
    setDescription(false);
  }, [setDescription]);
  useEffect(() => {
    setMenuIs(false);
  }, [setMenuIs]);

  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const filteredItems = PluginsFigmaList.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div>
      <SearchInput
        seacrhItem={searchTerm}
        changeSearchItem={handleSearchChange}
      />
      <div className="flex flex-col items-center w-full h-[500px] overflow-scroll scroll-smooth">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <CreateBox
              key={item.id}
              title={item.title}
              url={item.url}
              img={item.img}
              alt={item.alt}
              text={item.text}
              height={"h-3/5"}
            />
          ))
        ) : (
          <p className="text-red-400 mt-5 ">
            No se encontraron resultados para "{searchTerm}".
          </p>
        )}
      </div>
    </div>
  );
}

export default PluginsFigma;
