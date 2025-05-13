import React, { useEffect } from "react";
import { usePageTitleAndText } from "../context/PageTitleAndTextContext";
import CreateBox from "../components/SubComponents/WebsPageAndPlugins/CreateBox";
function PluginsFigma() {
  const { setPageTitle, setPageText, setMenuIs } = usePageTitleAndText();
  useEffect(() => {
    setPageTitle("PLUGINS FIGMA");
  }, [setPageTitle]);
  useEffect(() => {
    setPageText(
      "Here you can find a wide variety of plugins for figma, to create a better desing"
    );
  }, [setPageText]);
  useEffect(() => {
    setMenuIs(false);
  }, [setMenuIs]);
  return (
    <div className="flex flex-col items-center w-full h-[500px] overflow-scroll scroll-smooth">
      <CreateBox
        title={"COLOR PALETTES"}
        url={"https://www.figma.com/community/plugin/1259194885839478582"}
        img={"/colorPalette.webp"}
        alt={"Color Palette"}
        text={"Color Palette - Inspire creative"}
      />
      <CreateBox
        title={"WIREFRAME"}
        url={"https://www.figma.com/community/plugin/742764242781786818"}
        img={"wireframe.webp"}
        alt={"Wireframe"}
        text={"wireframe - Librery"}
      />
      <CreateBox
        title={"UNSPLASH"}
        url={"https://unsplash.com/"}
        img={"/unsplash.webp"}
        alt={"Unsplash"}
        text={"Unsplash - Images"}
      />
      <CreateBox
        title={"HEROICONS"}
        url={"https://www.figma.com/community/plugin/876119978690687541"}
        img={"heroicons.webp"}
        alt={"Heroicons"}
        text={"Heroicons - Icons"}
      />
      <CreateBox
        title={"BEAUTIFUL SHADOWS"}
        url={"https://www.figma.com/community/plugin/1068595505353552645"}
        img={"/beautifulShadows.webp"}
        alt={"Beautiful Shadows"}
        text={"Beautiful Shadows - Shadows"}
      />
    </div>
  );
}

export default PluginsFigma;
