
document.addEventListener('DOMContentLoaded', function() {
    const boxes = document.querySelectorAll('.box');
            
    boxes.forEach(box => {
        const colorTag = document.createElement('div');
        colorTag.classList.add('color-tag');
        box.appendChild(colorTag);
                    
        box.addEventListener('mouseenter', function() {
            const bgColor = getComputedStyle(box).backgroundColor;
            colorTag.textContent = rgbToHex(bgColor);
        });
            
        box.addEventListener('click', function() {
            const bgColor = getComputedStyle(box).backgroundColor;
            const colorHex = rgbToHex(bgColor);
            navigator.clipboard.writeText(colorHex).then(() => {
                alert(`Color ${colorHex} copiado al portapapeles`);
            });
        });
    });
            
    function rgbToHex(rgb) {
        let [r, g, b] = rgb.match(/\d+/g).map(Number);
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
    }
});

document.addEventListener("scroll", function() {
    var scrolledHeight= window.pageYOffset;
    var parallaxSpeed = 0.5;
    var estrellasPosition = - scrolledHeight * parallaxSpeed;

    document.getElementById("estrellas").style.transform = `translateY(${estrellasPosition}px)`;
});



document.querySelectorAll('.imagen-hover').forEach(img => {
    img.addEventListener('mouseover', function() {
        document.querySelectorAll('*').forEach(el => {
            if (!el.contains(img) && img !== el) {
                el.classList.add('blur-and-darken');
            }
        });
    });

    img.addEventListener('mouseout', function() {
        document.querySelectorAll('*').forEach(el => {
            el.classList.remove('blur-and-darken');
        });
    });
});




