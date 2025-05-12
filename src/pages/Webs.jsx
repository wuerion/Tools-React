import React, { useEffect } from "react";
import { usePageTitleAndText } from "../context/PageTitleAndTextContext";
import CreateBoxPage from "../components/SubComponents/WebsPage/CreateBoxPage";

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
      <CreateBoxPage
        title={"MDN"}
        url={"https://developer.mozilla.org/en-US/"}
        img={"/mdn.webp"}
        alt={"MDN"}
        text={"MDN Web Docs"}
      />
      <CreateBoxPage
        title={"SQUOOSH"}
        url={"https://squoosh.app"}
        img={"/squoosh.webp"}
        alt={"squoosh"}
        text={"Squoosh - image compresor"}
      />
      <CreateBoxPage
        title={"ICONFINDER"}
        url={"https://www.iconfinder.com/"}
        img={"/iconfinder.webp"}
        alt={"Iconfinder"}
        text={"Iconfinder - Icons"}
      />
      <CreateBoxPage
        title={"PAGE SPEED INSIGHTS"}
        url={"https://pagespeed.web.dev/"}
        img={"/pageSpeed.webp"}
        alt={"Page Speed Insights"}
        text={"Page Speed Insights"}
      />
      <CreateBoxPage
        title={"FIGMA"}
        url={"https://www.figma.com/"}
        img={"/figma.webp"}
        alt={"figma"}
        text={"Figma - Desing"}
      />
      <CreateBoxPage
        title={"UNSPLASH"}
        url={"https://unsplash.com/"}
        img={"/unsplash.webp"}
        alt={"unsplash"}
        text={"Unsplash - Images"}
      />
    </div>
  );
}

export default Webs;
