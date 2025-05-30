import React, { useEffect } from "react";
import { usePageTitleAndText } from "../context/PageTitleAndTextContext.jsx"; // importamos el hook personalizado para consumir el contexto

function HomePage() {
  // obtiene la funcion para actualizar el titulo del contexto
  const { setPageTitle } = usePageTitleAndText();
  const { setTextTitle } = usePageTitleAndText();
  const { setPageText } = usePageTitleAndText();
  const { setDescription } = usePageTitleAndText();
  const { setMenuIs } = usePageTitleAndText();

  // useEffect se ejecura cunado el componente se monta el componente
  useEffect(() => {
    //establecemos el titulo para esta paguina
    setPageTitle("TOOLS");
    //el array vacion [] segura que se ejcue solo una vez al montar el componente
    //añadir setPageTitle el array dependencias es buena practica (reglas de eslint)
  }, [setPageTitle]);

  // devuelve SOLO el contenido espeecifico de la paguina
  // no el layout completo

  useEffect(() => {
    setTextTitle(
      "Do you need color, gradients, fonts, frameworks, web, plugins?"
    );
  }, [setTextTitle]);
  useEffect(() => {
    setPageText("It`s your site, here you can willl find what do you need.");
  }, [setPageText]);
  useEffect(() => {
    setDescription(true);
  }, [setDescription]);
  useEffect(() => {
    setMenuIs(true);
  }, [setMenuIs]);
  return <div className="hidden h-dvh"></div>;
}

export default HomePage;
