
// get all the things to hover over
let hovers = document.querySelectorAll('.hover')

// add a function to each hover that adds a class when it gets moused over the first time
for(let counter = 0; counter < hovers.length; counter++){
    hovers[counter].addEventListener('mouseenter',function(){
        hovers[counter].classList.add('beenHovered')
    })
}

//then you could change the style of the letter parts based on that in your css

.hover.beenHovered .LetterK {
    background:red;
}