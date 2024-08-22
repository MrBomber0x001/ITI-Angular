document.addEventListener("DOMContentLoaded", function () {
    const colorPicker = document.getElementById("theme-color");

    function setThemeColor(color) {
      document.documentElement.style.setProperty("--primary-color", color);
      localStorage.setItem("themeColor", color);
      colorPicker.value = color;
    }

    const savedColor = localStorage.getItem("themeColor");
    if (savedColor) {
      setThemeColor(savedColor);
    }

    colorPicker.addEventListener("input", function (e) {
      setThemeColor(e.target.value);
    });
  });