import React, { useEffect } from "react";
import { usePageTitle } from "../context/PageTitleContext";

function GradientPage() {
  const { setPageTitle } = usePageTitle();
  useEffect(() => {
    setPageTitle("GRADIENTS");
  }, [setPageTitle]);
  return <div>GradientPage</div>;
}

export default GradientPage;
