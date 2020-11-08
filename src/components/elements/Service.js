import React from "react";

function Service({ service }) {
  const { title, content, icon, color, contentColor, bgColor } = service;
  const hexToRgb = (hex) => {
    const temp = hex
      .replace(
        /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
        (m, r, g, b) => "#" + r + r + g + g + b + b
      )
      .substring(1)
      .match(/.{2}/g)
      .map((x) => parseInt(x, 16));
    return temp.join(",");
  };

  return (
    <div
      className={
        (() => {
          switch (bgColor) {
            case "orange":   return "service-box rounded data-background padding-30 text-center shadow-orange";
            case "green": return "service-box rounded data-background padding-30 text-center shadow-green";
            case "blue":  return "service-box rounded data-background padding-30 text-center shadow-blue";
            default:      return "service-box rounded data-background padding-30 text-center shadow-orange";
          }
        })()
      }
      data-color="#6C6CE5"
      style={{
        background: color,
        boxShadow: `0px 5px 20px 0px rgba(${hexToRgb(color)}, 0.5)`,
      }}
    >
      <img src={icon} alt={title} />
      <h3 className="mb-3 mt-0">{title}</h3>
      <p className="mb-0">{content}</p>
    </div>
  );
}

export default Service;
