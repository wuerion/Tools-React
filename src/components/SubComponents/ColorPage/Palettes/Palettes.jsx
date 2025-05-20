import React from "react";
import GalleryPalettes from "./GalleryPalettes";
import CreationPalettes from "./CreationPalettes";

function palettes() {
  return (
    <section className="w-full">
      <CreationPalettes />
      <GalleryPalettes />
    </section>
  );
}

export default palettes;
