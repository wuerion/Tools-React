import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import HomePage from "./HomePage";
import ColorPage from "./ColorsPage";
import { PageTitleProvider } from "../context/PageTitleContext";

function App() {
  return (
    // envolver la aplicacion con el provider
    // para que el contexto este disponible en toda la aplicacion
    <PageTitleProvider>
      <Layout>
        <Routes>
          <Route path="/homePage" element={<HomePage />} />
          <Route path="/colorPage" element={<ColorPage />} />
          {/* paguina no encontrada */}
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </Layout>
    </PageTitleProvider>
  );
}

export default App;
// paso 3
// consumir el contexto en el componente Layout.jsx
