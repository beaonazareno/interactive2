let clockEl = document.querySelector('#clock')

let clockEl2 = document.querySelector('#clock2')
// let secondHand = document.querySelector('#secondHand')

// run getTime once on load

// getTime();

// call getTime every 1 second


setTimeout(function(){


  setInterval(function() {
    getTime();
  }, 1000);

},3000)


// set up time getting function

function getTime(){
  
  // get the date
  
  let manillaD = calcTime('+8') //new Date();
  let hereD = calcTime('-7') //new Date();


  // get hours, minutes, and seconds
  
  let h = addZero(manillaD.getHours());
  let m = addZero(manillaD.getMinutes());
  let s = addZero(manillaD.getSeconds());

  // update the clock's text
  
  let timeText = h + ":" + m + ":" + s
  clockEl.innerText = timeText
  
  
  
  h = addZero(hereD.getHours());
  m = addZero(hereD.getMinutes());
  s = addZero(hereD.getSeconds());
  
  timeText = h + ":" + m + ":" + s
  
  clockEl2.innerText = timeText

  // rotate secondHand based on the second
    
  // secondHand.animate([{
  //   transform:'rotate('+ (s-1) * 6 +'deg)'
  // },
  // {
  //   transform:'rotate('+ s * 6 +'deg)'
  // }],{
  //   duration:100,
  //   easing:'cubic-bezier(0.75, 0.000, 0.800, 1.5)',
  //   fill:'forwards'
  // })
  
  
  // detect a specific time
  
  if(h < 19 && h > 16){
  	clockEl.classList.add('classTime');
  } else {
  	clockEl.classList.remove('classTime');
  }
}

// add a zero to times below 10

function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}


function calcTime(offset) {
    // create Date object for current location
    var d = new Date();

    // convert to msec
    // subtract local time zone offset
    // get UTC time in msec
    var utc = d.getTime() + (d.getTimezoneOffset() * 60000);

    // create new Date object for different city
    // using supplied offset
    var nd = new Date(utc + (3600000*offset));

    // return time as a string
    return nd
}