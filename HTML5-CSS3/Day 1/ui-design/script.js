document.getElementById('theme-color').addEventListener('input', function (e) {
    document.documentElement.style.setProperty('--primary-color', e.target.value);
});