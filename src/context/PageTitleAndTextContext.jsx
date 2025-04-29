import React, { createContext, useState, useContext, useMemo } from "react";

const pageTexteAndTitleContext = createContext({
  pageTitle: "TOOLS",
  pageText: "Do you need color, gradients, fonts, frameworks, web, plugins",
  menuIs: true,
  setManuIs: () => {},
  setPageTitle: () => {},
  setPageText: () => {},
});

export const PageTitleAndTextProvider = ({ children }) => {
  const [pageTitle, setPageTitle] = useState("TOOLS");
  const [pageText, setPageText] = useState(
    "Do you need color, gradients, fonts, frameworks, web, plugins"
  );
  const [menuIs, setMenuIs] = useState(true);

  const value = useMemo(
    () => ({
      pageTitle,
      pageText,
      menuIs,
      setPageTitle,
      setPageText,
      setMenuIs,
    }),
    [pageTitle, pageText, setMenuIs]
  );

  return (
    <pageTexteAndTitleContext.Provider value={value}>
      {children}
    </pageTexteAndTitleContext.Provider>
  );
};

export function usePageTitleAndText() {
  const context = useContext(pageTexteAndTitleContext);
  if (context === undefined) {
    throw new Error(
      "usePageTitleAndText must be used within a PageTitleAndTextProvider"
    );
  }
  return context;
}
