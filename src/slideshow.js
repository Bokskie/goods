var i = 0;
var images = [];
var time = 2000;


images[0] = './Images/Jewelry/Jewelry2.jfif';
images[1] = './Images/Jewelry/Jewelry4.jfif';
images[2] = './Images/Clothings/MenClothing3.jpg';
images[3] = './Images/Clothings/WomenClothing2.jpg';
images[4] = './Images/Shorts/WomenShort2.jfif';
images[5] = './Images/Shorts/WomenShorts1.jpeg';
images[6] = './Images/Shorts/MenShort3.jpg';
images[7] = './Images/Bags & Accessories/Bag2.jpg';
images[8] = './Images/Gown/Gown2.jpg';



function changeImg(){
    document.slide.src = images[i];

    if(i < images.length - 1){
        i++;
    } else {
        i = 0;
    }

    setTimeout("changeImg()", time);
}

    window.onload = changeImg;