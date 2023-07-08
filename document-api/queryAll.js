function onPageLoad() {
  console.log("page load called");
  setDefaultResultColor();
}

function setDefaultResultColor() {
  const resultDiv = document.getElementById("result");
  resultDiv.style.backgroundColor = "red";
}

window.addEventListener("DOMContentLoaded", onPageLoad);

function changeColor() {
  const colorSelect = document.getElementsById("click").values;

  if (colorSelect) {
    console.log(colorSelect);
    const resultDiv = document.getElementById("result");
    resultDiv.style.backgroundColor = colorSelect;
    console.log(resultDiv);
  } else {
    alert("Please enter a valid value.");
  }
}

function reset() {
  document.getElementById("colorSelect").value = "red";
  setDefaultResultColor();
}
