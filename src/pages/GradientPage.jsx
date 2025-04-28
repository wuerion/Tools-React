import React, { useEffect } from "react";
import { usePageTitleAndText } from "../context/PageTitleAndTextContext";
function GradientPage() {
  const { setPageTitle } = usePageTitleAndText();
  const { setPageText } = usePageTitleAndText();
  useEffect(() => {
    setPageTitle("GRADIENTS");
  }, [setPageTitle]);
  useEffect(() => {
    setPageText(
      "Here you can find a wide variety of gradients or create your own. whit wich you can create cool desings."
    );
  }, [setPageText]);
  return <div className="hidden"></div>;
}

export default GradientPage;
