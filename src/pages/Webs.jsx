import React, { useEffect } from "react";
import { usePageTitleAndText } from "../context/PageTitleAndTextContext";
import CreateBox from "../components/SubComponents/WebsPageAndPlugins/CreateBox";

function Webs() {
  const { setPageTitle, setPageText, setMenuIs } = usePageTitleAndText();
  useEffect(() => {
    setPageTitle("WEBS");
  }, [setPageTitle]);
  useEffect(() => {
    setPageText(
      "Here you can find a wide variety of websites for programming or developing"
    );
  }, [setPageText]);
  useEffect(() => {
    setMenuIs(false);
  }, [setMenuIs]);

  return (
    <div className="flex flex-col items-center w-full h-[500px] overflow-scroll scroll-smooth">
      <CreateBox
        title={"MDN"}
        url={"https://developer.mozilla.org/en-US/"}
        img={"/mdn.webp"}
        alt={"MDN"}
        text={"MDN Web Docs"}
      />
      <CreateBox
        title={"SQUOOSH"}
        url={"https://squoosh.app"}
        img={"/squoosh.webp"}
        alt={"Squoosh"}
        text={"Squoosh - image compresor"}
      />
      <CreateBox
        title={"ICONFINDER"}
        url={"https://www.iconfinder.com/"}
        img={"/iconfinder.webp"}
        alt={"Iconfinder"}
        text={"Iconfinder - Icons"}
      />
      <CreateBox
        title={"PAGE SPEED INSIGHTS"}
        url={"https://pagespeed.web.dev/"}
        img={"/pageSpeed.webp"}
        alt={"Page Speed Insights"}
        text={"Page Speed Insights"}
      />
      <CreateBox
        title={"FIGMA"}
        url={"https://www.figma.com/"}
        img={"/figma.webp"}
        alt={"Figma"}
        text={"Figma - Desing"}
      />
      <CreateBox
        title={"UNSPLASH"}
        url={"https://unsplash.com/"}
        img={"/unsplash.webp"}
        alt={"Unsplash"}
        text={"Unsplash - Images"}
      />
    </div>
  );
}

export default Webs;
