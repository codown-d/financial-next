import { colorScale } from "@/constant";

export function generateRandomColor() {
  let r, g, b;
  do {
    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);
  } while ((r > 240 && g > 240 && b > 240) || (r < 15 && g < 15 && b < 15));

  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}

export function getColorScale(i: number) {
  let index = i % colorScale.length;
  return colorScale[index];
}
