import React, { createContext, useState, useContext, useMemo } from "react";

const pageTexteAndTitleContext = createContext({
  pageTitle: "TOOLS",
  textTitle: "Do you need color, gradients, fonts, frameworks, web, plugins?",
  pageText: "It`s your site, here you can willl find what do you need.",
  description: true,
  menuIs: true,
  setPageTitle: () => {},
  setTextTitle: () => {},
  setPageText: () => {},
  setDescription: () => {},
  setManuIs: () => {},
});

export const PageTitleAndTextProvider = ({ children }) => {
  const [pageTitle, setPageTitle] = useState("TOOLS");
  const [pageText, setPageText] = useState(
    "It`s your site, here you can willl find what do you need."
  );
  const [textTitle, setTextTitle] = useState(
    "Do you need color, gradients, fonts, frameworks, web, plugins"
  );
  const [description, setDescription] = useState(true);
  const [menuIs, setMenuIs] = useState(true);

  const value = useMemo(
    () => ({
      pageTitle,
      textTitle,
      pageText,
      description,
      menuIs,
      setPageTitle,
      setTextTitle,
      setPageText,
      setDescription,
      setMenuIs,
    }),
    [pageTitle, pageText, textTitle, setDescription, setMenuIs]
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
