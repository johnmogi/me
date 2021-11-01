include scss
 npm install node-sass --save
"node-sass": "^4.0.0 || ^5.0.0 || ^6.0.0",
    "sass": "^1.3.0",
package json
global styles import in depth:
https://create-react-app.dev/docs/adding-a-sass-stylesheet/

https://www.mariokandut.com/how-to-fetch-data-with-react-hooks/

0. hook fetch data:
import React, { useState } from 'react';
function App() {
  const [data, setData] = useState({ articles: [] });
  return <div></div>;
}
export default App;

1.css reset:
https://elad2412.github.io/the-new-css-reset/
/*** The new CSS Reset - version 1.3.1 (last updated 28.10.2021) ***//*
    Remove all the styles of the "User-Agent-Stylesheet", except for the 'display' property
    - The "symbol *" part is to solve Firefox SVG sprite bug
 */*:where(:not(iframe, canvas, img, svg, video):not(svg *, symbol *)) {
    all: unset;
    display: revert;
}
/* Preferred box-sizing value */
*,
*::before,
*::after {
    box-sizing: border-box;
}
/* Remove list styles (bullets/numbers) */
ol, ul {
    list-style: none;
}
/* For images to not be able to exceed their container */
img {
    max-width: 100%;
}
/* removes spacing between cells in tables */
table {
    border-collapse: collapse;
}
/* revert the 'white-space' property for textarea elements on Safari */
textarea {
    white-space: revert;
}

0. styled components
https://scottspence.com/posts/styled-components

npx create-react-app client
npm i styled-components
