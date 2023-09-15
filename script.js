let num = 0;

const incrementBtn  = document.getElementById('increase_btn');
const resetBtn = document.getElementById('reset_btn');
const decrementBtn = document.getElementById('decrease_btn');

const displayResult = document.getElementById('display_result');

incrementBtn.addEventListener('click', function(){
  num++;
  if(num > 0){
    displayResult.style.color = 'green';
  }
  if(num === 0){
    displayResult.style.color = 'black';
  }
  displayResult.innerText = num;
});
decrementBtn.addEventListener('click',function(){
  num--;
  if(num < 0 ){
    displayResult.style.color = 'red'
  }
  if(num === 0){
    displayResult.style.color = 'black';
  }
  displayResult.innerText = num;
})
resetBtn.addEventListener('click',function(){
    num = 0;
    displayResult.style.color = 'black';
    displayResult.innerText = num;
})