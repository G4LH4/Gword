import App from "./App.js";
import React from "react";
import ReactDOM from "react-dom";
import "../css/style.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

const getEl = (selector) => document.querySelector(selector);

const $html = getEl("#html");
const $css = getEl("#css");
const $js = getEl("#js");
const $iframe = getEl("#iframe");

$html.addEventListener("input", update);
$css.addEventListener("input", update);
$js.addEventListener("input", update);

function update() {
  const html = createHTML();

  $iframe.setAttribute("srcdoc", html);
}

const createHTML = () => {
  const html = $html.value;
  const css = $css.value;
  const js = $js.value;

  return `
  <!DOCTYPE html>
  <html lang="en">
   <head>
    <style>
      ${css}
    </style>
   </head>
   <body>
   <script>
    ${js}
   </script>
    ${html}
   </body>
  </html>
`;

  // return insertHTML(js);
};

// const insertHTML = () => {};
