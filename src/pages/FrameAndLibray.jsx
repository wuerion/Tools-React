import React, { useEffect, useState } from "react";
import { usePageTitleAndText } from "../context/PageTitleAndTextContext";
import SearchInput from "../components/SubComponents/WebsPageAndPlugins/SearchInput";
import CreateBox from "../components/SubComponents/WebsPageAndPlugins/CreateBox";
import astroSvg from "../assets/astro.svg";
import reactSvg from "../assets/react.svg";
import vueSvg from "../assets/vue.svg";
import angularSvg from "../assets/angular.svg";
import svelteSvg from "../assets/svelte.svg";
import nextSvg from "../assets/next.svg";
import nuxtSvg from "../assets/nuxt.svg";
import emberSvg from "../assets/ember.svg";
import jquerySvg from "../assets/jquery.svg";

const frameworksAndLibraries = [
  { id: 1, name: "Astro", link: "https://astro.build/", icon: astroSvg },
  { id: 2, name: "React", link: "https://es.react.dev/", icon: reactSvg },
  { id: 3, name: "Vue", link: "https://vuejs.org/", icon: vueSvg },
  { id: 4, name: "Angular", link: "https://angular.io/", icon: angularSvg },
  { id: 5, name: "Svelte", link: "https://svelte.dev/", icon: svelteSvg },
  { id: 6, name: "Next.js", link: "https://nextjs.org/", icon: nextSvg },
  { id: 7, name: "Nuxt.js", link: "https://nuxtjs.org/", icon: nuxtSvg },
  { id: 8, name: "Ember.js", link: "https://emberjs.com/", icon: emberSvg },
  { id: 9, name: "jQuery", link: "https://jquery.com/", icon: jquerySvg },
];

function FrameAndLibray() {
  const { setPageTitle, setPageText, setDescription, setMenuIs } =
    usePageTitleAndText();
  useEffect(() => {
    setPageTitle("FRAMEWORKS AND LIBRARIES");
  }, [setPageTitle]);
  useEffect(() => {
    setPageText(
      "Here you can find a wide variety of framework and libraries for programming or developing"
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

  const filteredItems = frameworksAndLibraries.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
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
              url={item.link}
              img={item.icon}
              alt={item.name}
              height={"h-[100px]"}
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

export default FrameAndLibray;
