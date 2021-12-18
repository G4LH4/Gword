import React from "react";

// const getEl = (selector) => document.querySelector(selector);

// const $js = getEl("#js");
// const $iframe = getEl(".output iframe");
// const $btnOutput = getEl("button");

// $btnOutput.addEventListener("click", update);

// function update() {
//   const js = createHTML();
//   $iframe.setAttribute("srcdoc", js);
// }

// const createHTML = () => {
//   const js = $js.value;

//   return insertHTML(js);
// };

// const insertHTML = (js) => {
//   return `
//   <!DOCTYPE html>
//   <html lang="en">
//     <body>
//        <script>${js}</script>
//     </body>
//    </html>
// `;
// };

const App = () => {
  return (
    <div className="app">
      <div className="input">
        <textarea id="js"></textarea>
        <button>Show output</button>
      </div>
      <div className="output">
        <iframe srcDoc=""></iframe>
        <p id="results"></p>
      </div>
    </div>
  );
};

console.log("working!");

export default App;
