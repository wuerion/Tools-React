import React, { createElement } from "react";

function BoxColor({ color }) {
  return (
    <div>
      {color.map((col, i) =>
        createElement(
          "div",
          { key: i, className: "w-5 h-5", style: { backgroundColor: col } },
          null
        )
      )}
    </div>
  );
}

export default BoxColor;
