import React, { useEffect } from "react";
import { usePageTitle } from "../context/PageTitleContext.jsx"; // importamos el hook personalizado para consumir el contexto

function ColorsPage() {
  // obtiene la funcion para actualizar el titulo del contexto
  const { setPageTitle } = usePageTitle();

  // useEffect se ejecura cunado el componente se monta el componente
  useEffect(() => {
    //establecemos el titulo para esta paguina
    setPageTitle("COLORS");
    //el array vacion [] segura que se ejcue solo una vez al montar el componente
    //añadir setPageTitle el array dependencias es buena practica (reglas de eslint)
  }, [setPageTitle]);
  // devuelve SOLO el contenido espeecifico de la paguina
  // no el layout completo
  return (
    <p className="text-red-500">
      {" "}
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex sed eaque
      molestiae eligendi tenetur, consequatur perspiciatis, dolores itaque
      laudantium quos in soluta explicabo, perferendis quo pariatur accusamus et
      nulla omnis!
    </p>
  );
}

export default ColorsPage;
