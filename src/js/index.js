const getEl = (selector) => document.querySelector(selector);

const $js = getEl("#js");
const $iframe = getEl(".output iframe");
const $btnOutput = getEl("button");

$btnOutput.addEventListener("click", update);

function update() {
  const js = createHTML();
  $iframe.setAttribute("srcdoc", js);
}

const createHTML = () => {
  const js = $js.value;

  return `
  <!DOCTYPE html>
  <html lang="en">
  <body>
      <script>${js}</script>
  </body>
  </html>
    `;
};
