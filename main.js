let image = document.getElementById("image");

let images = ["images/E-commerce/1.png", "images/E-commerce/2.png", "images/E-commerce/3.png", "images/E-commerce/4.png","images/E-commerce/1.png", "images/E-commerce/2.png", "images/E-commerce/3.png", "images/E-commerce/4.png","images/E-commerce/1.png", "images/E-commerce/2.png", "images/E-commerce/3.png", "images/E-commerce/4.png","images/E-commerce/1.png", "images/E-commerce/2.png"];



function slideshow(){
    let random = Math.floor(Math.random() * 14);
    image.src = images[random];
    setTimeout(slideshow, 5000);
}

slideshow();