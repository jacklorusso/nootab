const setValue = (property, value) => {
  document.documentElement.style.setProperty(`--${property}`, value);
};

const setValueFromLocalStorage = property => {
  let value = localStorage.getItem(property);
  setValue(property, value);
};

const setTheme = options => {
  for (let option of Object.keys(options)) {
    const property = option;
    const value = options[option];

    setValue(property, value);
    localStorage.setItem(property, value);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  setValueFromLocalStorage("background-color");
  setValueFromLocalStorage("text-color");
  setValueFromLocalStorage("link-color");
});

const dataThemeButtons = document.querySelectorAll("[data-theme]");
for (let i = 0; i < dataThemeButtons.length; i++) {
  dataThemeButtons[i].addEventListener("click", () => {
    const theme = dataThemeButtons[i].dataset.theme;

    switch (theme) {
      case "black":
        setTheme({
          "background-color": "#010101",
          "text-color": "#ffffff",
          "accent-color": "#ff5252"
        });
        return;
      case "blue":
        setTheme({
          "background-color": "#3f51b5",
          "text-color": "#ffffff",
          "accent-color": "#4fa3ef"
        });
        return;
      case "white":
        setTheme({
          "background-color": "#ffffff",
          "text-color": "#222222",
          "accent-color": "#ff5252"
        });
        return;
    }
  });
}
