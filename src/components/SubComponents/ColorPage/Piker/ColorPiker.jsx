import React, { useState } from "react";
import BoxColor from "./BoxColor";
import CardColorSelect from "./CardColorSelect";
import ColorLine from "./ColorLine";
import Notification from "../../../Notification";

function ColorPiker() {
  const [selectedHexa, setSelectedHexa] = useState("");
  const [selectedRgb, setSelectedRgb] = useState("");
  const [selectedHsl, setSelectedHsl] = useState("");
  const [notification, setNotification] = useState("");

  // El siguiente código genera una serie de scales de colores en formato hexadecimal, desde el más claro al más oscuro, utilizando el modelo de color HSL (Hue, Saturation, Lightness). La función `generateColorScale` toma un matiz (hue), saturación y número de pasos para crear una scale de colores. También se incluye una función para generar una scale de grises.

  function hslToRgb(h, s, l) {
    //
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

  // Generación de scales de colores (sin cambios)
  const numColores = 20;
  const grayScale = generateGrayscale(numColores);
  const redScale = generateColorScale(0, 1, numColores);
  const orangeScale = generateColorScale(30, 1, numColores);
  const yellowScale = generateColorScale(60, 1, numColores);
  const limeScale = generateColorScale(90, 1, numColores);
  const greenScale = generateColorScale(120, 1, numColores);
  const greenSpringScale = generateColorScale(150, 1, numColores);
  const cianScale = generateColorScale(180, 1, numColores);
  const skyBlueScale = generateColorScale(210, 1, numColores);
  const blueScale = generateColorScale(240, 1, numColores);
  const violetScale = generateColorScale(270, 1, numColores);
  const magentaScale = generateColorScale(300, 1, numColores);
  const pinkScale = generateColorScale(330, 1, numColores);
  const tomatoRedScale = generateColorScale(15, 1, numColores);
  const goldScale = generateColorScale(50, 1, numColores);
  const seaGreenScale = generateColorScale(165, 1, numColores);
  const blueCobaltScale = generateColorScale(225, 1, numColores);
  const purpleScale = generateColorScale(285, 1, numColores);
  const hotPinkScale = generateColorScale(320, 1, numColores);
  const brownScale = generateColorScale(30, 0.6, numColores);

  const showNotification = (text) => {
    setNotification(text);
    setTimeout(() => {
      setNotification("");
    }, 1500);
  };
  return (
    <section className="flex flex-col items-center justify-center w-full">
      {notification && <Notification text={notification} />}
      <CardColorSelect
        hexa={selectedHexa}
        rgb={selectedRgb}
        hsl={selectedHsl}
      />
      <div className="w-full h-full grid grid-cols-20 md:w-4/5 md:h-4/5 md:gap-1.5">
        {/* Pasa setSelectedHexa a cada BoxColor */}
        <div className="GrayGroup">
          <BoxColor
            color={grayScale}
            colorSelectHtml={setSelectedHexa}
            colorSelectRgb={setSelectedRgb}
            colorSelectHsl={setSelectedHsl}
            showNotification={showNotification}
          />
        </div>
        <div className="RedGroup">
          <BoxColor
            color={redScale}
            colorSelectHtml={setSelectedHexa}
            colorSelectRgb={setSelectedRgb}
            colorSelectHsl={setSelectedHsl}
            showNotification={showNotification}
          />
        </div>
        <div className="OrangeGroup">
          <BoxColor
            color={orangeScale}
            colorSelectHtml={setSelectedHexa}
            colorSelectRgb={setSelectedRgb}
            colorSelectHsl={setSelectedHsl}
            showNotification={showNotification}
          />
        </div>
        <div className="YellowGroup">
          <BoxColor
            color={yellowScale}
            colorSelectHtml={setSelectedHexa}
            colorSelectRgb={setSelectedRgb}
            colorSelectHsl={setSelectedHsl}
            showNotification={showNotification}
          />
        </div>
        <div className="LimeGroup">
          <BoxColor
            color={limeScale}
            colorSelectHtml={setSelectedHexa}
            colorSelectRgb={setSelectedRgb}
            colorSelectHsl={setSelectedHsl}
            showNotification={showNotification}
          />
        </div>
        <div className="GreenGroup">
          <BoxColor
            color={greenScale}
            colorSelectHtml={setSelectedHexa}
            colorSelectRgb={setSelectedRgb}
            colorSelectHsl={setSelectedHsl}
            showNotification={showNotification}
          />
        </div>
        <div className="GreenSpringGroup">
          <BoxColor
            color={greenSpringScale}
            colorSelectHtml={setSelectedHexa}
            colorSelectRgb={setSelectedRgb}
            colorSelectHsl={setSelectedHsl}
            showNotification={showNotification}
          />
        </div>
        <div className="CianGroup">
          <BoxColor
            color={cianScale}
            colorSelectHtml={setSelectedHexa}
            colorSelectRgb={setSelectedRgb}
            colorSelectHsl={setSelectedHsl}
            showNotification={showNotification}
          />
        </div>
        <div className="SkyBlueGroup">
          <BoxColor
            color={skyBlueScale}
            colorSelectHtml={setSelectedHexa}
            colorSelectRgb={setSelectedRgb}
            colorSelectHsl={setSelectedHsl}
            showNotification={showNotification}
          />
        </div>
        <div className="BlueGroup">
          <BoxColor
            color={blueScale}
            colorSelectHtml={setSelectedHexa}
            colorSelectRgb={setSelectedRgb}
            colorSelectHsl={setSelectedHsl}
            showNotification={showNotification}
          />
        </div>
        <div className="VioletGroup">
          <BoxColor
            color={violetScale}
            colorSelectHtml={setSelectedHexa}
            colorSelectRgb={setSelectedRgb}
            colorSelectHsl={setSelectedHsl}
            showNotification={showNotification}
          />
        </div>
        <div className="MagentaGroup">
          <BoxColor
            color={magentaScale}
            colorSelectHtml={setSelectedHexa}
            colorSelectRgb={setSelectedRgb}
            colorSelectHsl={setSelectedHsl}
            showNotification={showNotification}
          />
        </div>
        <div className="PinkGroup">
          <BoxColor
            color={pinkScale}
            colorSelectHtml={setSelectedHexa}
            colorSelectRgb={setSelectedRgb}
            colorSelectHsl={setSelectedHsl}
            showNotification={showNotification}
          />
        </div>
        <div className="TomatoRedGroup">
          <BoxColor
            color={tomatoRedScale}
            colorSelectHtml={setSelectedHexa}
            colorSelectRgb={setSelectedRgb}
            colorSelectHsl={setSelectedHsl}
            showNotification={showNotification}
          />
        </div>
        <div className="GoldGroup">
          <BoxColor
            color={goldScale}
            colorSelectHtml={setSelectedHexa}
            colorSelectRgb={setSelectedRgb}
            colorSelectHsl={setSelectedHsl}
            showNotification={showNotification}
          />
        </div>
        <div className="SeaGreenGroup">
          <BoxColor
            color={seaGreenScale}
            colorSelectHtml={setSelectedHexa}
            colorSelectRgb={setSelectedRgb}
            colorSelectHsl={setSelectedHsl}
            showNotification={showNotification}
          />
        </div>
        <div className="BlueCobalt">
          <BoxColor
            color={blueCobaltScale}
            colorSelectHtml={setSelectedHexa}
            colorSelectRgb={setSelectedRgb}
            colorSelectHsl={setSelectedHsl}
            showNotification={showNotification}
          />
        </div>
        <div className="PurpleGroup">
          <BoxColor
            color={purpleScale}
            colorSelectHtml={setSelectedHexa}
            colorSelectRgb={setSelectedRgb}
            colorSelectHsl={setSelectedHsl}
            showNotification={showNotification}
          />
        </div>
        <div className="HotPinkGroup">
          <BoxColor
            color={hotPinkScale}
            colorSelectHtml={setSelectedHexa}
            colorSelectRgb={setSelectedRgb}
            colorSelectHsl={setSelectedHsl}
            showNotification={showNotification}
          />
        </div>
        <div className="BrownGroup">
          <BoxColor
            color={brownScale}
            colorSelectHtml={setSelectedHexa}
            colorSelectRgb={setSelectedRgb}
            colorSelectHsl={setSelectedHsl}
            showNotification={showNotification}
          />
        </div>
      </div>
      <div className="my-8 w-full md:w-4/5">
        <div className="flex flex-col items-center w-full h-[500px] overflow-scroll scroll-smooth snap-x">
          <ColorLine
            color={grayScale}
            nameColor={"Gray Scale"}
            hexa={setSelectedHexa}
            rgb={setSelectedRgb}
            hsl={setSelectedHsl}
          />
          <ColorLine
            color={redScale}
            nameColor={"Red Scale"}
            hexa={setSelectedHexa}
            rgb={setSelectedRgb}
            hsl={setSelectedHsl}
          />
          <ColorLine
            color={orangeScale}
            nameColor={"Orange Scale"}
            hexa={setSelectedHexa}
            rgb={setSelectedRgb}
            hsl={setSelectedHsl}
          />
          <ColorLine
            color={yellowScale}
            nameColor={"Yellow Scale"}
            hexa={setSelectedHexa}
            rgb={setSelectedRgb}
            hsl={setSelectedHsl}
          />
          <ColorLine
            color={limeScale}
            nameColor={"Lime Scale"}
            hexa={setSelectedHexa}
            rgb={setSelectedRgb}
            hsl={setSelectedHsl}
          />
          <ColorLine
            color={greenScale}
            nameColor={"Green Scale"}
            hexa={setSelectedHexa}
            rgb={setSelectedRgb}
            hsl={setSelectedHsl}
          />
          <ColorLine
            color={greenSpringScale}
            nameColor={"Green Spring Scale"}
            hexa={setSelectedHexa}
            rgb={setSelectedRgb}
            hsl={setSelectedHsl}
          />
          <ColorLine
            color={cianScale}
            nameColor={"Cian Scale"}
            hexa={setSelectedHexa}
            rgb={setSelectedRgb}
            hsl={setSelectedHsl}
          />
          <ColorLine
            color={skyBlueScale}
            nameColor={"Sky Blue Scale"}
            hexa={setSelectedHexa}
            rgb={setSelectedRgb}
            hsl={setSelectedHsl}
          />
          <ColorLine
            color={blueScale}
            nameColor={"Blue Scale"}
            hexa={setSelectedHexa}
            rgb={setSelectedRgb}
            hsl={setSelectedHsl}
          />
          <ColorLine
            color={violetScale}
            nameColor={"Violet Scale"}
            hexa={setSelectedHexa}
            rgb={setSelectedRgb}
            hsl={setSelectedHsl}
          />
          <ColorLine
            color={magentaScale}
            nameColor={"Magenta Scale"}
            hexa={setSelectedHexa}
            rgb={setSelectedRgb}
            hsl={setSelectedHsl}
          />
          <ColorLine
            color={pinkScale}
            nameColor={"Pink Scale"}
            hexa={setSelectedHexa}
            rgb={setSelectedRgb}
            hsl={setSelectedHsl}
          />
          <ColorLine
            color={tomatoRedScale}
            nameColor={"Tomato Red Scale"}
            hexa={setSelectedHexa}
            rgb={setSelectedRgb}
            hsl={setSelectedHsl}
          />
          <ColorLine
            color={goldScale}
            nameColor={"Gold Scale"}
            hexa={setSelectedHexa}
            rgb={setSelectedRgb}
            hsl={setSelectedHsl}
          />
          <ColorLine
            color={seaGreenScale}
            nameColor={"Sea Green Scale"}
            hexa={setSelectedHexa}
            rgb={setSelectedRgb}
            hsl={setSelectedHsl}
          />
          <ColorLine
            color={blueCobaltScale}
            nameColor={"Blue Cobalt Scale"}
            hexa={setSelectedHexa}
            rgb={setSelectedRgb}
            hsl={setSelectedHsl}
          />
          <ColorLine
            color={purpleScale}
            nameColor={"Purple Scale"}
            hexa={setSelectedHexa}
            rgb={setSelectedRgb}
            hsl={setSelectedHsl}
          />
          <ColorLine
            color={hotPinkScale}
            nameColor={"Hot Pink Scale"}
            hexa={setSelectedHexa}
            rgb={setSelectedRgb}
            hsl={setSelectedHsl}
          />
          <ColorLine
            color={brownScale}
            nameColor={"Brown Scale"}
            hexa={setSelectedHexa}
            rgb={setSelectedRgb}
            hsl={setSelectedHsl}
          />
        </div>
      </div>
    </section>
  );
}

export default ColorPiker;
