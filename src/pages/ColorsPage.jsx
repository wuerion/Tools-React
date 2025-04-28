import React, { useEffect } from "react";
import { usePageTitleAndText } from "../context/PageTitleAndTextContext.jsx"; // importamos el hook personalizado para consumir el contexto

function ColorsPage() {
  // obtiene la funcion para actualizar el titulo del contexto
  const { setPageTitle } = usePageTitleAndText();
  const { setPageText } = usePageTitleAndText();

  // useEffect se ejecura cunado el componente se monta el componente
  useEffect(() => {
    //establecemos el titulo para esta paguina
    setPageTitle("COLORS");
    //el array vacion [] segura que se ejcue solo una vez al montar el componente
    //añadir setPageTitle el array dependencias es buena practica (reglas de eslint)
  }, [setPageTitle]);
  // devuelve SOLO el contenido espeecifico de la paguina
  // no el layout completo

  useEffect(() => {
    setPageText(
      "Here you can find a wide variety of colors and palettes or create your own palettes. whit them you can create great desings."
    );
  }, [setPageText]);
  return <div className="hidden"></div>;
}

export default ColorsPage;
