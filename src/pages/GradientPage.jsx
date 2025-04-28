import React, { useEffect } from "react";
import { usePageTitle } from "../context/PageTitleContext";

function GradientPage() {
  const { setPageTitle } = usePageTitle();
  useEffect(() => {
    setPageTitle("GRADIENTS");
  }, [setPageTitle]);
  return (
    <p className="text-white">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis optio
      sunt libero hic aliquid non dicta reiciendis sequi qui rerum, voluptate
      quisquam, suscipit dolorum rem deserunt, voluptates iure quibusdam vitae.
    </p>
  );
}

export default GradientPage;
