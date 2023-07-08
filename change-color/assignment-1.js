const btn = document.getElementById("btn");
let colors = document.getElementsByName("c");
const show = document.getElementById("colors");

for (let index = 0; index < colors.length; index++) {
  colors[index].onclick = function () {
    let target = document.show;
    show.style.backgroundColor = colors[index].value;
  };
}
