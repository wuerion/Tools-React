import React, { useEffect } from "react";
import { usePageTitleAndText } from "../context/PageTitleAndTextContext";
import GalleryGradients from "../components/SubComponents/GradientPage/GalleryGradients";

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
      <GalleryGradients />
    </div>
  );
}

export default GradientPage;
