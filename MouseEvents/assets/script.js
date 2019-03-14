




let shapeBox = document.querySelector('.shapes')
let shapes = document.querySelectorAll('.shapes div')

console.log(shapes)


for(let counter = 0; counter < shapes.length; counter ++){
	shapes[counter].addEventListener('click',function(){
		shapes[counter].classList.add('active')
	})




}


let revealCount = 0
let revealDirection = 1

shapeBox.addEventListener('click',function(){
	console.log('everyone')
	if(revealDirection == 1){
		shapes[revealCount].style.display = 'block'
	} else {
		shapes[revealCount].style.display = 'none'
	}
	
	console.log(revealCount)
	revealCount = revealCount + revealDirection
	if(revealCount >= shapes.length - 1 || revealCount == 0){

		revealDirection = revealDirection * -1

	}
	
	
	
})