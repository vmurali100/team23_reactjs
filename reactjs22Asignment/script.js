var imagebox = document.querySelector(".image-box");
var imgwrap = document.querySelector(".img-drop");
var originalImg = document.getElementById("originalImg");
var line = document.getElementById("line");

originalImg.style.width = imagebox.offsetWidth + "px";

var leftSpace = imagebox.offsetLeft;

imagebox.onmousemove = function(e) {
    var boxwidth = (e.pageX - leftSpace) + "px";
    imgwrap.style.width = boxwidth;
    line.style.left = boxwidth; 
};
