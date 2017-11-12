// function timer5Seconds(){
//   alert("this is a 5 second timer");
// }
// setTimeout(timer5Seconds,5000);

var myImage = document.getElementById("image");
var arrayImage = ["../images/1.jpg","../images/2.jpg","../images/3.jpg"];
var imageIndex = 0;

function changeImage(){
  myImage.setAttribute("src",arrayImage[imageIndex]);
  imageIndex++;

  if (imageIndex >= arrayImage.length) {
    imageIndex = 0;
  }
}
setInterval(changeImage,3000);
