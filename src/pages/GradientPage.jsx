import React, { useEffect } from "react";
import { usePageTitleAndText } from "../context/PageTitleAndTextContext";
import GalleryGradients from "../components/SubComponents/GradientPage/GalleryGradients";
import CreationGradients from "../components/SubComponents/GradientPage/CreationGradients";

function GradientPage() {
  const { setPageTitle, setPageText, setDescription, setMenuIs } =
    usePageTitleAndText();
  useEffect(() => {
    setPageTitle("GRADIENTS");
  }, [setPageTitle]);
  useEffect(() => {
    setPageText(
      "Here you can find a wide variety of gradients or create your own. whit wich you can create cool desings."
    );
  }, [setPageText]);
  useEffect(() => {
    setDescription(false);
  }, [setDescription]);
  useEffect(() => {
    setMenuIs(false);
  }, [setMenuIs]);
  return (
    <div>
      <GalleryGradients />
      <CreationGradients />
    </div>
  );
}

export default GradientPage;
