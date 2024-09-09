
function blink() {
    const text = document.getElementById('blinkingText');
    text.style.visibility = (text.style.visibility === 'hidden') ? 'visible' : 'hidden';
}
setInterval(blink, 3000);


/* For About page imge slide */
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 3000); // Change image every 2 seconds
}

// about page counter start
const items = document.querySelectorAll('.count')
const updateCount = (el) => {
  const value = parseInt(el.dataset.count);
  const increment = Math.ceil(value/1000);
  
  let initialValue = 0;

  const increaceCount = setInterval(() => {
    initialValue += increment;

    if(initialValue > value){
      el.innerText = `${value}+`;
      clearInterval(increaceCount);
      return;
    }
    el.innerText = `${initialValue}+`;

  })
};
items.forEach((item) =>{
  updateCount(item);
})

/*
const myNum = document.querySelectorAll('.count')
let speed = 200;
myNum.forEach( (myCount) => {
    let target_count = myCount.dataset.count;
    let init_count = +myCount.innerText;
    let new_increment_num = Math.floor(target_count / speed);
    const updateNumber = () => {
        init_count +=  new_increment_num;
        myCount.innerText = init_count;
        
        if(init_count < target_count){
            setTimeout(() => {updateNumber()}, 5)
        }
    }
    updateNumber();
})*/

// about page counter end
