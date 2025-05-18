import React from "react";
import Nav from "./nav.jsx";
import NavOnlyHome from "./NavOnlyHome.jsx"; // importamos el componente de navegacion
import { usePageTitleAndText } from "../context/PageTitleAndTextContext.jsx";

// ya no se necesita el prop title para cambiar el titulo de la pagina
export function Layout({ children }) {
  // usamos el hook para obtener el titulo actual del contexto
  const { pageTitle } = usePageTitleAndText();

  const { pageText } = usePageTitleAndText();

  const { menuIs } = usePageTitleAndText();

  return (
    <div className="font-[Allerta] app-container">
      {/* contenedor prcincipal, here header or components comunes */}

      <div className="text-center text-sm p-5">
        {/* Ajusta clases si es necesario */}

        <div className="bg-linear-180 from-[#1D1D1D] to-transparent  dark:from-[#FFFFFF] dark:to-[#1D1D1D] w-full p-[1px] mb-10 h-96 md:h-1/2 lg:h-[70dvh] ">
          <div className="bg-[#DDDAD8] dark:bg-[#1d1d1d] w-full flex flex-col items-center justify-evenly text-[#1B1B1B] dark:text-white h-full md:h-4/5 lg:h-full gap-10 py-10 px-4">
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

        {menuIs && <Nav />}
        {!menuIs && <NavOnlyHome />}

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
