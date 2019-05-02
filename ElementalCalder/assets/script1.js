'use strict';

var img1 = document.getElementById('shape1');
var img2 = document.getElementById('shape2');

img1.onmouseover = function() {
	img1.style.display = 'none';
	img2.style.display = 'inline';

}

img1.onmouseover = function() {
	img1.style.display = 'inline';
	img2.style.display = 'none';

}