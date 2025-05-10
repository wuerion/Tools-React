import React, { useEffect } from "react";
import { usePageTitleAndText } from "../context/PageTitleAndTextContext";
function fontsPage() {
  const { setPageTitle } = usePageTitleAndText();
  const { setPageText } = usePageTitleAndText();
  const { setMenuIs } = usePageTitleAndText();
  useEffect(() => {
    setPageTitle("FONTS");
  }, [setPageTitle]);
  useEffect(() => {
    setPageText(
      "Here you cand find variety of fonts and try them out, choosing the one that suits you best."
    );
  }, [setPageText]);
  useEffect(() => {
    setMenuIs(false);
  }, [setMenuIs]);
  return <div>fontsPage</div>;
}

export default fontsPage;
