document.addEventListener('DOMContentLoaded', function () {
    const colorPicker = document.getElementById('theme-color');

    // Function to set the theme color
    function setThemeColor(color) {
        document.documentElement.style.setProperty('--primary-color', color);
        localStorage.setItem('themeColor', color);
        colorPicker.value = color;
    }

    // Check if there's a saved color in localStorage
    const savedColor = localStorage.getItem('themeColor');
    if (savedColor) {
        setThemeColor(savedColor);
    }

    // Listen for color changes
    colorPicker.addEventListener('input', function (e) {
        setThemeColor(e.target.value);
    });
});