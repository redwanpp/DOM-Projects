/**
 * Change the background color by generating random rgb color
 */

/**
 * step-1: create onload handler
 * Step-2: random color generate
 * step-3: collect all necessary reference
 * step-4: handle the click even
 */

window.onload =  () => {
    main();
}

function main() {
    const root = document.getElementById('root');
    const btn = document.getElementById('change-btn');

    btn.addEventListener('click', function() {
        const bgColor = generateRGBColor();
        root.style.backgroundColor = bgColor;
    })
}

function generateRGBColor() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `rgb(${red}, ${green}, ${blue})`;
}