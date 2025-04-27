import React, { useEffect } from "react";
import { usePageTitle } from "../context/PageTitleContext"; // importamos el hook

function HomePage() {
  // obtiene la funcion para actualizar el titulo del contexto
  const { setPageTitle } = usePageTitle();

  // useEffect se ejecura cunado el componente se monta el componente
  useEffect(() => {
    //establecemos el titulo para esta paguina
    setPageTitle("TOOLS");
    //el array vacion [] segura que se ejcue solo una vez al montar el componente
    //añadir setPageTitle el array dependencias es buena practica (reglas de eslint)
  }, [setPageTitle]);

  // devuelve SOLO el contenido espeecifico de la paguina
  // no el layout completo
  return (
    <p className="text-white">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis optio
      sunt libero hic aliquid non dicta reiciendis sequi qui rerum, voluptate
      quisquam, suscipit dolorum rem deserunt, voluptates iure quibusdam vitae.
    </p>
  );
}

export default HomePage;
