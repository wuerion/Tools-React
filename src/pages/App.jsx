import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import HomePage from "./HomePage";
import ColorPage from "./ColorsPage";
import GradientPage from "./GradientPage";
import { PageTitleAndTextProvider } from "../context/PageTitleAndTextContext";

function App() {
  return (
    // envolver la aplicacion con el provider
    // para que el contexto este disponible en toda la aplicacion

    <PageTitleAndTextProvider>
      <Layout>
        <Routes>
          <Route path="/homePage" element={<HomePage />} />
          <Route path="/colorPage" element={<ColorPage />} />
          <Route path="/gradientPage" element={<GradientPage />} />
          {/* paguina no encontrada */}
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </Layout>
    </PageTitleAndTextProvider>
  );
}

export default App;
// paso 3
// consumir el contexto en el componente Layout.jsx
