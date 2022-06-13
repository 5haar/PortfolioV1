let image = document.getElementById("image");

let images = ["images/1.png", "images/2.png", "images/3.png", "images/4.png","images/1.png", "images/2.png", "images/3.png", "images/4.png","images/1.png", "images/2.png", "images/3.png", "images/4.png","images/1.png", "images/2.png"];



function slideshow(){
    let random = Math.floor(Math.random() * 14);
    image.src = images[random];
    setTimeout(slideshow, 5000);
}

slideshow();