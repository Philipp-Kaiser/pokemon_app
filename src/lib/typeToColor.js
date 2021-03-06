export function typeToColor(type) {
  const backgroundColors = {
    fire: "orange",
    water: "deepskyblue",
    grass: "limegreen",
    bug: "brown",
    Default: "silver",
  };

  // return backgroundColors[type] || 'grey'
  return backgroundColors[type]
    ? backgroundColors[type]
    : backgroundColors["Default"];
}

export default typeToColor;
