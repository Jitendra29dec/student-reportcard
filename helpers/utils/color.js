export const colors = [
  '#2c7be5',
  '#00d97e',
  '#e63757',
  '#39afd1',
  '#fd7e14',
  '#02a8b5',
  '#727cf5',
  '#6b5eae',
  '#ff679b',
  '#f6c343'
];

export const getColor = (name, dom = document.documentElement) => {
  return getComputedStyle(dom).getPropertyValue(`--falcon-${name}`).trim();
};

export const rgbaColor = (color = colors[0], alpha = 0.5) =>
  `rgba(${hexToRgb(color)},${alpha})`;

export const hexToRgb = hexValue => {
  let hex;
  hexValue.indexOf('#') === 0
    ? (hex = hexValue.substring(1))
    : (hex = hexValue);
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(
    hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b)
  );
  return result
    ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16)
      ]
    : null;
};
