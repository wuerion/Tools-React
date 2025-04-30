import React from "react";
import BoxColor from "./BoxColor";

function ColorPiker() {
  // El siguiente código genera una serie de scales de colores en formato hexadecimal, desde el más claro al más oscuro, utilizando el modelo de color HSL (Hue, Saturation, Lightness). La función `generateColorScale` toma un matiz (hue), saturación y número de pasos para crear una scale de colores. También se incluye una función para generar una scale de grises.

  function hslToRgb(h, s, l) {
    let r, g, b;

    if (s == 0) {
      r = g = b = l; // achromatic
      // Si la saturación es 0, el color es un gris (achromático)
    } else {
      const hue2rgb = (p, q, t) => {
        // Función auxiliar para calcular el color
        if (t < 0) t += 1; // Ajustar t para que esté en el rango [0, 1]
        if (t > 1) t -= 1;
        if (t < 1 / 6) return p + (q - p) * 6 * t;
        if (t < 1 / 2) return q;
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
        return p;
      };

      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      // Convertir h de grados a [0, 1]
      const hNormalized = h / 360;
      r = hue2rgb(p, q, hNormalized + 1 / 3);
      g = hue2rgb(p, q, hNormalized);
      b = hue2rgb(p, q, hNormalized - 1 / 3);
    }

    // Convertir a [0, 255] y redondear
    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
  }

  /**
   * Convierte un componente de color (0-255) a su representación hexadecimal de dos dígitos.
   */
  function componentToHex(c) {
    const hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }

  /**
   * Convierte un color RGB a formato hexadecimal #RRGGBB.
   * Se asume que r, g, b están en [0, 255].
   */
  function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }

  /**
   * Genera una scale de colores desde el más claro al más oscuro para un matiz (hue) dado.
   * @param {number} hue - Matiz del color en grados [0, 360].
   * @param {number} saturation - Saturación del color [0, 1]. Por defecto 1 (100%).
   * @param {number} numSteps - Número de pasos en la scale (longitud del array).
   * @returns {string[]} - Array de códigos de color hexadecimales.
   */
  function generateColorScale(hue, saturation = 1, numSteps = 20) {
    const colors = [];
    // Iterar cambiando la luminosidad (lightness) de claro (1) a oscuro (0)
    for (let i = 0; i < numSteps; i++) {
      // Calcular la luminosidad para este paso (de 1.0 a 0.0)
      const lightness = 1.0 - i / (numSteps - 1);
      const [r, g, b] = hslToRgb(hue, saturation, lightness);
      colors.push(rgbToHex(r, g, b).toUpperCase()); // Convertir a mayúsculas como en el ejemplo
    }
    return colors;
  }

  /**
   * Genera una scale de grises desde blanco a negro.
   * @param {number} numSteps - Número de pasos en la scale.
   * @returns {string[]} - Array de códigos de color hexadecimales.
   */
  function generateGrayscale(numSteps = 20) {
    const colors = [];
    for (let i = 0; i < numSteps; i++) {
      // Calcular el nivel de gris (de 255 a 0)
      const grayLevel = Math.round(255 * (1.0 - i / (numSteps - 1)));
      colors.push(rgbToHex(grayLevel, grayLevel, grayLevel).toUpperCase());
    }
    return colors;
  }

  // --- Generación de las 20 scales de colores ---
  const numColores = 20;

  // 1. scale de Grises (como el ejemplo)
  const grayScale = generateGrayscale(numColores);

  // Usaremos HSL para generar las otras scales.
  // H (Hue/Matiz) va de 0 a 360 grados:
  // 0=Rojo, 60=Amarillo, 120=Verde, 180=Cian, 240=Azul, 300=Magenta

  // 2. Rojo (H=0)
  const redScale = generateColorScale(0, 1, numColores);

  // 3. Naranja (H=30)
  const orangeScale = generateColorScale(30, 1, numColores);

  // 4. Amarillo (H=60)
  const yellowScale = generateColorScale(60, 1, numColores);

  // 5. Lima (Chartreuse) (H=90)
  const limeScale = generateColorScale(90, 1, numColores);

  // 6. Verde (H=120)
  const greenScale = generateColorScale(120, 1, numColores);

  // 7. Verde Primavera (Spring Green) (H=150)
  const greenSpringScale = generateColorScale(150, 1, numColores);

  // 8. Cian (H=180)
  const cianScale = generateColorScale(180, 1, numColores);

  // 9. Azul Celeste (Azure) (H=210)
  const skyBlueScale = generateColorScale(210, 1, numColores);

  // 10. Azul (H=240)
  const blueScale = generateColorScale(240, 1, numColores);

  // 11. Violeta (H=270)
  const violetScale = generateColorScale(270, 1, numColores);

  // 12. Magenta (H=300)
  const magentaScale = generateColorScale(300, 1, numColores);

  // 13. Rosa (Rose) (H=330)
  const pinkScale = generateColorScale(330, 1, numColores);

  // --- Añadimos algunos colores intermedios o con diferente saturación para llegar a 20 ---

  // 14. Rojo Tomate (un poco más naranja que rojo puro) (H=15)
  const tomatoRedScale = generateColorScale(15, 1, numColores);

  // 15. Oro (un poco más oscuro que amarillo) (H=50)
  const goldScale = generateColorScale(50, 1, numColores); // Matiz cerca de amarillo

  // 16. Verde Mar (H=165)
  const seaGreenScale = generateColorScale(165, 1, numColores);

  // 17. Azul Cobalto (H=225)
  const blueCobaltScale = generateColorScale(225, 1, numColores);

  // 18. Púrpura (H=285)
  const purpleScale = generateColorScale(285, 1, numColores);

  // 19. Rosa Fuerte (Hot Pink) (H=320)
  const hotPinkScale = generateColorScale(320, 1, numColores);

  // 20. Marrón (Simulado con un naranja de baja saturación)
  // Usamos H=30 (Naranja), S=0.6 (Menos saturado)
  const brownScale = generateColorScale(30, 0.6, numColores);
  return (
    <section className=" w-full h-full grid grid-cols-20  colorPiker">
      <div className="GrayGroup">
        <BoxColor color={grayScale} />
      </div>
      <div className="RedGroup">
        <BoxColor color={redScale} />
      </div>
      <div className="OrangeGroup">
        <BoxColor color={orangeScale} />
      </div>
      <div className="YellowGroup">
        <BoxColor color={yellowScale} />
      </div>
      <div className="LimeGroup">
        <BoxColor color={limeScale} />
      </div>
      <div className="GreenGroup">
        <BoxColor color={greenScale} />
      </div>
      <div className="GreenSpringGroup">
        <BoxColor color={greenSpringScale} />
      </div>
      <div className="CianGroup">
        <BoxColor color={cianScale} />
      </div>
      <div className="SkyBlueGroup">
        <BoxColor color={skyBlueScale} />
      </div>
      <div className="BlueGroup">
        <BoxColor color={blueScale} />
      </div>
      <div className="VioletGroup">
        <BoxColor color={violetScale} />
      </div>
      <div className="MagentaGroup">
        <BoxColor color={magentaScale} />
      </div>
      <div className="PinkGroup">
        <BoxColor color={pinkScale} />
      </div>
      <div className="TomatoRedGroup">
        <BoxColor color={tomatoRedScale} />
      </div>
      <div className="GoldGroup">
        <BoxColor color={goldScale} />
      </div>
      <div className="SeaGreenGroup">
        <BoxColor color={seaGreenScale} />
      </div>
      <div className="BlueCobalt">
        <BoxColor color={blueCobaltScale} />
      </div>
      <div className="PurpleGroup">
        <BoxColor color={purpleScale} />
      </div>
      <div className="HotPinkGroup">
        <BoxColor color={hotPinkScale} />
      </div>
      <div className="BrownGroup">
        <BoxColor color={brownScale} />
      </div>
    </section>
  );
}

export default ColorPiker;
