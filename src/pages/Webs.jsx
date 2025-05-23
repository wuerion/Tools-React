import React, { useState, useEffect } from "react";
import { usePageTitleAndText } from "../context/PageTitleAndTextContext";
import CreateBox from "../components/SubComponents/WebsPageAndPlugins/CreateBox";
import SearchInput from "../components/SubComponents/WebsPageAndPlugins/SearchInput";

const WebList = [
  {
    id: 1,
    title: "MDN",
    url: "https://developer.mozilla.org/en-US/",
    img: "/mdn.webp",
    alt: "MDN",
    text: "MDN Web Docs",
  },
  {
    id: 2,
    title: "SQUOOSH",
    url: "https://squoosh.app",
    img: "/squoosh.webp",
    alt: "Squoosh",
    text: "Squoosh - image compresor",
  },
  {
    id: 3,
    title: "ICONFINDER",
    url: "https://www.iconfinder.com/",
    img: "/iconfinder.webp",
    alt: "Iconfinder",
    text: "Iconfinder - Icons",
  },
  {
    id: 4,
    title: "PAGE SPEED INSIGHTS",
    url: "https://pagespeed.web.dev/",
    img: "/pageSpeed.webp",
    alt: "Page Speed Insights",
    text: "Page Speed Insights",
  },
  {
    id: 5,
    title: "FIGMA",
    url: "https://www.figma.com/",
    img: "/figma.webp",
    alt: "Figma",
    text: "Figma - Desing",
  },
  {
    id: 6,
    title: "UNSPLASH",
    url: "https://unsplash.com/",
    img: "/unsplash.webp",
    alt: "Unsplash",
    text: "Unsplash - Images",
  },
  {
    id: 7,
    title: "PIXABAY",
    url: "https://pixabay.com/",
    img: "/pixabay.webp",
    alt: "Pixabay",
    text: "Pixabay - Images",
  },
  {
    id: 8,
    title: "FREEPIK",
    url: "https://www.freepik.com/",
    img: "/freepik.webp",
    alt: "Freepik",
    text: "Freepik - Images",
  },
  {
    id: 9,
    title: "FLATICON",
    url: "https://www.flaticon.com/",
    img: "/flaticon.webp",
    alt: "Flaticon",
    text: "Flaticon - Icons",
  },
  {
    id: 10,
    title: "PIXELS",
    url: "https://www.pexels.com/",
    img: "/pexels.webp",
    alt: "Pexels",
    text: "Pexels - Images",
  },
  {
    id: 11,
    title: "COLOR HUNT",
    url: "https://colorhunt.co/",
    img: "/colorHunt.webp",
    alt: "Color Hunt",
    text: "Color Hunt - Colors",
  },
  {
    id: 12,
    title: "COLORSPACE",
    url: "https://mycolor.space/",
    img: "/colorSpace.webp",
    alt: "Color Space",
    text: "Color Space - Colors",
  },
];

function Webs() {
  const { setPageTitle, setPageText, setDescription, setMenuIs } =
    usePageTitleAndText();
  useEffect(() => {
    setPageTitle("WEBS");
  }, [setPageTitle]);
  useEffect(() => {
    setPageText(
      "Here you can find a wide variety of websites for programming or developing"
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
  const filteredItems = WebList.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <SearchInput
        searchItem={searchTerm}
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
            No se encontraron resultados para "{searchTerm}"
          </p>
        )}
      </div>
    </div>
  );
}

export default Webs;
