import React from "react";
import Nav from "./nav.jsx";
import NavOnlyHome from "./NavOnlyHome.jsx"; // importamos el componente de navegacion
import { usePageTitleAndText } from "../context/PageTitleAndTextContext.jsx";

// ya no se necesita el prop title para cambiar el titulo de la pagina
export function Layout({ children }) {
  // usamos el hook para obtener el titulo actual del contexto
  const { pageTitle } = usePageTitleAndText();
  const { textTitle } = usePageTitleAndText();
  const { pageText } = usePageTitleAndText();
  const { description } = usePageTitleAndText();
  const { menuIs } = usePageTitleAndText();

  return (
    <div className="font-[Allerta] app-container">
      {/* contenedor prcincipal, here header or components comunes */}

      <div className="text-center text-sm p-5">
        {/* Ajusta clases si es necesario */}

        <div className="bg-linear-180 from-[#1D1D1D] to-transparent  dark:from-[#DDDAD8] dark:to-[#1D1D1D] w-full p-[1px] mb-10 h-96 md:h-4/5 lg:h-full ">
          <div className="bg-[#DDDAD8] dark:bg-[#1d1d1d] w-full flex flex-col items-center justify-evenly text-[#181818] dark:text-[#DDDAD8] h-full md:flex-row md:h-4/5 lg:h-full gap-10 py-10 px-4">
            {/* aqui se renderiza el titulo de la pagina */}
            <h1 className="font-[Julius_Sans_One] text-4xl bg-clip-text text-transparent -bg-linear-270 from-[#B3BEFF] to-[#666666] w-full lg:w-1/2">
              {pageTitle}
            </h1>

            <div className="lg:w-1/2 text-start flex flex-col gap-1.5">
              <h2>{textTitle}</h2>

              <p>{pageText}</p>
            </div>
          </div>
        </div>

        {description && (
          <div className="flex items-center justify-center -my-[20%] md:my-[7%] lg:my-[10%]">
            <div className="bg-linear-180 from-[#1D1D1D] to-[#DDDAD8] dark:from-[#DDDAD8] dark:to-[#1D1D1D] w-full h-[51px] p-[1px] md:w-1/2">
              <div className="bg-[#DDDAD8] dark:bg-[#1d1d1d] w-full h-full text-[#181818] dark:text-[#DDDAD8] text-start p-2">
                <p>
                  Here you will find what you need. This website was created to
                  have a place where you can find: colors, gradients, fonts,
                  frameworks/librarys, webs and plugins.
                </p>
              </div>
            </div>
          </div>
        )}

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
