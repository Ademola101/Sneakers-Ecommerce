import { createGlobalStyle } from 'styled-components';

export const GblobalStyle = createGlobalStyle`

html {
  /* Make base font-size 100% of browser font-size */
  font-size: 100%;

  /* Declare your box-sizing here, then inherit the box sizing below in the *, *::before and *::after selector */
  /* https://css-tricks.com/box-sizing */
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
}

body {
  /* Declare your default font stack here */
  font-family: "Font Stack", sans-serif;
  
  /* Better text rendering - font-smoothing has not been officially declared, but can still be useful */
  text-rendering: geometricPrecision;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

img {
  /* For responsive images that adjust & adapt */
  height: auto;
  max-width: 100%;
  
  /* This isn't needed, but as a user, I get frustrated when I highlight text and the image gets highlighted too */
  user-select: none;
}

button {
  color: inherit; /* By default, buttons don't inherit the font colour, this is a useful default to override */
}

a, button {
  touch-action: manipulation; /* Element doesn't want double-tap on mobile to zoom */
}

svg {
  /* Make the SVGs fit the parent container by default */
  height: 100%;
  width: 100%;
  
  /* Optional - make the SVG's fill be the same as the inherited color */
  fill: currentColor;
  
  /* Prevent the SVG from altering cursor interaction */
  pointer-events: none;
}


`;