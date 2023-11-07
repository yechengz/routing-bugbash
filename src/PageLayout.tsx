import * as React from "react";

export enum Color {
  RED = "red",
  ORANGE = "orange",
  YELLOW = "yellow",
  GREEN = "green",
  BLUE = "blue",
  PURPLE = "purple",
  BROWN = "brown",
  GRAY = "gray",
}

const colorToRGB = (c: Color) => {
  switch (c) {
    case Color.RED:
      return `rgb(255, 59, 48)`
    case Color.ORANGE:
      return `rgb(255, 149, 0)`
    case Color.YELLOW:
      return `rgb(255, 204, 0)`
    case Color.GREEN:
      return `rgb(40, 205, 65)`
    case Color.BLUE:
      return `rgb(0, 190, 240)`
    case Color.PURPLE:
      return `rgb(175, 82, 222)`
    case Color.BROWN:
      return `rgb(162, 132, 94)`
    case Color.GRAY:
      return `rgb(142, 142, 147)`
  }

}

export const PageLayout = ({ color }: { color?: Color}) => {
  if (!color) {
    color = Color.GRAY;
  }
  return (
    <div className={`h-screen`} style={{ backgroundColor: colorToRGB(color) }}/>
  );
};