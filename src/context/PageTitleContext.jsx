// PASO 1
import React, { createContext, useState, useContext, useMemo } from "react";

//1. crear el contexto
// puede tener un valor imicial opcional ()util para outocompletado o default)
const PageTitleContex = createContext({
  pageTitle: "TOOLS", //valor por defecto inicial
  setPageTitle: () => {}, // funcion vacia por defecto
});

//2. crear el componente provedor (provider) que va a envolver a la app
export const PageTitleProvider = ({ children }) => {
  const [pageTitle, setPageTitle] = useState("TOOLs"); // estado para el titulo de la pagina

  // usamos useMemo para asegurarnos que el objeto 'value' no se recree
  //innecesariamente en cada render, optimizando el rendimiento
  const valu = useMemo(() => ({ pageTitle, setPageTitle }), [pageTitle]);

  return (
    <PageTitleContex.Provider value={valu}>
      {children} {/* aqui se renderizara el resto de la aplicacion */}
    </PageTitleContex.Provider>
  );
};

//3. crear un hook personalizado para consumir el contexto facilmente (opcional pero recomendado)
export function usePageTitle() {
  const context = useContext(PageTitleContex);
  if (context === undefined) {
    throw new Error("usePageTitle must be used within a PageTitleProvider");
  }
  return context;
}
// Paso 2
// envolver la aplicacion con el provider en el App.jsx
