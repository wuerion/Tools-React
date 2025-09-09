import React, { useEffect, useState } from "react";
import { usePageTitleAndText } from "../context/PageTitleAndTextContext";
import Fonts from "../components/SubComponents/FontsPage/Fonts";
import CardFontSelect from "../components/SubComponents/FontsPage/CardFontSelect";
function fontsPage() {
  const { setPageTitle, setPageText, setDescription, setMenuIs } =
    usePageTitleAndText();
  useEffect(() => {
    setPageTitle("FONTS");
  }, [setPageTitle]);
  useEffect(() => {
    setPageText(
      "Here you cand find variety of fonts and try them out, choosing the one that suits you best."
    );
  }, [setPageText]);
  useEffect(() => {
    setDescription(false);
  }, [setDescription]);
  useEffect(() => {
    setMenuIs(false);
  }, [setMenuIs]);

  // ===

  const [selectedFont, setSelectedFont] = useState("");
  return (
    <div>
      <div>
        <CardFontSelect font={selectedFont} nameFont={selectedFont} />
      </div>
      <div className="flex flex-col items-center w-full h-[500px] overflow-scroll scroll-smooth">
        <Fonts
          font={"Kite One"}
          nameFont={"Kite One"}
          onFontSelect={setSelectedFont}
        />
        <Fonts
          font={"Julius Sans One"}
          nameFont={"Julius Sans One"}
          onFontSelect={setSelectedFont}
        />
        <Fonts font={"Jura"} nameFont={"Jura"} onFontSelect={setSelectedFont} />
        <Fonts font={"Jua"} nameFont={"Jua"} onFontSelect={setSelectedFont} />
        <Fonts font={"K2D"} nameFont={"K2D"} onFontSelect={setSelectedFont} />
        <Fonts
          font={"Kodchasan"}
          nameFont={"Kodchasan"}
          onFontSelect={setSelectedFont}
        />
        <Fonts
          font={"Borel"}
          nameFont={"Borel"}
          onFontSelect={setSelectedFont}
        />
        <Fonts
          font={"Antic"}
          nameFont={"Antic"}
          onFontSelect={setSelectedFont}
        />
        <Fonts
          font={"Story Script"}
          nameFont={"Story Script"}
          onFontSelect={setSelectedFont}
        />
        <Fonts
          font={"Google Sans Code"}
          nameFont={"Google Sans Code"}
          onFontSelect={setSelectedFont}
        />
        <Fonts
          font={"DM Serif Text"}
          nameFont={"DM Serif Text"}
          onFontSelect={setSelectedFont}
        />
      </div>
    </div>
  );
}

export default fontsPage;
