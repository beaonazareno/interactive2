'use strict';

var img1 = document.getElementById('shape1');

img1.onmouseover = function() {
	img1.src = "assets/images/Shape1_23_wImage_Revised.png";
}

img1.onmouseout = function() {
	img1.src = "assets/images/Shape1_23_Revised.png";
}

//-

var img2 = document.getElementById('shape2');

img2.onmouseover = function() {
	img2.src = "assets/images/Shape1_Aquarium_wImage_Revised.png";
}

img2.onmouseout = function() {
	img2.src = "assets/images/Shape1_Aquarium_Revised.png";
}

//-

var img3 = document.getElementById('shape3');

img3.onmouseover = function() {
	img3.src = "assets/images/Shape1_Constellation_wImage_Revised.png";
}

img3.onmouseout = function() {
	img3.src = "assets/images/Shape1_Constellation_Revised.png";
}

//-

var img4 = document.getElementById('shape4');

img4.onmouseover = function() {
	img4.src = "assets/images/Shape1_DoubleGang_wImage_Revised.png";
}

img4.onmouseout = function() {
	img4.src = "assets/images/Shape1_DoubleGang_Revised.png";
}

//-

var img5 = document.getElementById('shape5');

img5.onmouseover = function() {
	img5.src = "assets/images/Shape1_Fishy_wImage_Revised.png";
}

img5.onmouseout = function() {
	img5.src = "assets/images/Shape1_Fishy_Revised.png";
}

//-

var img6 = document.getElementById('shape6');

img6.onmouseover = function() {
	img6.src = "assets/images/Shape1_U1949_wImage_Revised.png";
}

img6.onmouseout = function() {
	img6.src = "assets/images/Shape1_U1949_Revised.png";
}

//-

var header = document.getElementById('header');
var bio = document.getElementById('bio');

header.onmouseover = function() {
	bio.style.display = "block";
}

header.onmouseout = function() {
	bio.style.display = "none";
}
