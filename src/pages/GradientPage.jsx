import React, { useEffect } from "react";
import { usePageTitleAndText } from "../context/PageTitleAndTextContext";
import GalleryGradients from "../components/SubComponents/GradientPage/GalleryGradients";
import CardGradientSelect from "../components/SubComponents/GradientPage/CardGradientSelect";
function GradientPage() {
  const { setPageTitle } = usePageTitleAndText();
  const { setPageText } = usePageTitleAndText();
  const { setMenuIs } = usePageTitleAndText();
  useEffect(() => {
    setPageTitle("GRADIENTS");
  }, [setPageTitle]);
  useEffect(() => {
    setPageText(
      "Here you can find a wide variety of gradients or create your own. whit wich you can create cool desings."
    );
  }, [setPageText]);
  useEffect(() => {
    setMenuIs(false);
  }, [setMenuIs]);
  return (
    <div>
      <CardGradientSelect
        color1={"#a4f9c7"}
        color2={"#acf6f6"}
        color3={"#a2bbef"}
        color4={"#bea3ef"}
      />
    </div>
  );
}

export default GradientPage;
