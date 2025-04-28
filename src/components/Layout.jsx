import React from "react";
import Nav from "./nav.jsx";
import { usePageTitleAndText } from "../context/PageTitleAndTextContext.jsx";

// ya no se necesita el prop title para cambiar el titulo de la pagina
export function Layout({ children }) {
  // usamos el hook para obtener el titulo actual del contexto
  const { pageTitle } = usePageTitleAndText();

  const { pageText } = usePageTitleAndText();

  return (
    <div className="font-[Allerta] app-container h-dvh">
      {/* contenedor prcincipal, here header or components comunes */}

      <div className="text-center text-sm p-5">
        {/* Ajusta clases si es necesario */}

        <div className="bg-linear-180 from-[#FFFFFF] to-[#1D1D1D] w-full p-[1px] mb-10">
          <div className="bg-[#1d1d1d] w-full flex flex-col items-center justify-center text-white gap-10 py-10 px-4">
            {/* aqui se renderiza el titulo de la pagina */}
            <h2 className="font-[Julius_Sans_One] text-4xl bg-clip-text text-transparent -bg-linear-270 from-[#B3BEFF] to-[#666666]">
              {pageTitle}
            </h2>

            <h1>
              Do you need color, gradients, fonts, frameworks, web, plugins?
            </h1>

            <p>{pageText}</p>
          </div>
        </div>

        <Nav />

        {/* contenedor principal, aqui se renderizan los componentes de la ruta activa*/}

        <main>{children}</main>

        {/* opcional footer */}
      </div>
    </div>
  );
}

export default Layout;
// paso 4
// actualizar el titulo desdelas paguinas
