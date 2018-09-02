let notepad = document.getElementById("notepad");
let backgroundColorPicker = document.getElementById("background-color");
let textColorPicker = document.getElementById("text-color");
let fontFamilyInput = document.getElementById("font-family");
let fontSizeSlider = document.getElementById("font-size");

// sty
const setCustomProperty = (property, value) => {
  document.documentElement.style.setProperty(`--${property}`, value);
};

const setCustomPropertyFromLocalStorage = property => {
  let value = localStorage.getItem(property);
  setCustomProperty(property, value);
};

document.addEventListener("DOMContentLoaded", () => {
  setCustomPropertyFromLocalStorage("background-color");
  setCustomPropertyFromLocalStorage("text-color");
  setCustomPropertyFromLocalStorage("font-family");
  setCustomPropertyFromLocalStorage("font-size");
});

// if there is nothing in localStorage, placeholder text will be displayed
notepad.value = localStorage.getItem("notepad");

// set the value of the inputs to whatever is in localStorage. Falls back to the value attribute in html
backgroundColorPicker.value = localStorage.getItem("background-color") || "#";
textColorPicker.value = localStorage.getItem("text-color");
fontFamilyInput.value = localStorage.getItem("font-family") || "IBM Plex Mono";
fontSizeSlider.value = localStorage.getItem("font-size");

// Event listeners
notepad.addEventListener("input", function(e) {
  localStorage.setItem("notepad", e.target.value);
});

backgroundColorPicker.addEventListener("input", function(e) {
  setCustomProperty("background-color", e.target.value);
  localStorage.setItem("background-color", e.target.value);
});

textColorPicker.addEventListener("input", function(e) {
  setCustomProperty("text-color", e.target.value);
  localStorage.setItem("text-color", e.target.value);
});

fontFamilyInput.addEventListener("input", function(e) {
  setCustomProperty("font-family", e.target.value);
  localStorage.setItem("font-family", e.target.value);
});

fontSizeSlider.addEventListener("input", function(e) {
  setCustomProperty("font-size", e.target.value + "%");
  localStorage.setItem("font-size", e.target.value + "%");
});
