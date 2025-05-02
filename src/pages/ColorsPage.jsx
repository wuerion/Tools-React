import React, { useEffect } from "react";
import { usePageTitleAndText } from "../context/PageTitleAndTextContext.jsx"; // importamos el hook personalizado para consumir el contexto
import CardColorSelect from "../components/SubComponents/ColorPage/CardColorSelect.jsx"; // importamos el componente CardColorSelect
import ColorPiker from "../components/SubComponents/ColorPage/ColorPiker.jsx";

function ColorsPage() {
  // obtiene la funcion para actualizar el titulo del contexto
  const { setPageTitle } = usePageTitleAndText();
  const { setPageText } = usePageTitleAndText();
  const { setMenuIs } = usePageTitleAndText();

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

  useEffect(() => {
    setMenuIs(false);
  }, [setMenuIs]);
  return (
    <div>
      <ColorPiker />
    </div>
  );
}

export default ColorsPage;
