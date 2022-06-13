let image = document.getElementById("image");

let images = ["images/E-commerce/1.png", "images/E-commerce/2.png", "images/E-commerce/3.png", "images/E-commerce/4.png"];

setInterval(function() {
    let random = Math.floor(Math.random() * 4);
    image.src = images[random];
    
}, 2000);
