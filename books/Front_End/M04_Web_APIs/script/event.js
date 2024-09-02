// var နာမည်ပေးခြင်းနှင့် တန်ဖိုးသတ်မှတ်ချင်း
var count = 0;

// TODO: Add a comment describing the functionality of the following document.querySelector() methods:
// Htmlမှ ID ခလုတ်များနှင့် ပြသမည့်နေရာကို ချိတ်ဆတ်ပေးချင်း 
var incrementEl = document.querySelector('#increment');
var decrementEl = document.querySelector('#decrement');
var countEl = document.querySelector('#count');


// TODO: Add a comment describing the functionality of the following code:
//ပြောင်းလဲသမျှ စာသားများကို ပြသပေးချင်း 
function setCounterText() {
  countEl.textContent = count;
}
// TODO: Add a comment describing the functionality of the following event listener:
//incrementEl ခလုတ်ကို EventListener နှင့် ချိတ်ဆတ်ပေးချင်း
incrementEl.addEventListener('click', function() {
  count++;
  setCounterText();
});

// TODO: Add a comment describing the functionality of the following event listener:
// decrementEl ခလုတ်ကို EventListener နှင့် ချိတ်ဆတ်ပေးချင်း
decrementEl.addEventListener('click', function() {
  // Action will fire if count is greater than  0
  // သုညထက် ကြီးနေရင် ဆတ်မလုပ်ပါနဲ့ 
  if (count > 0) {
    count--;
    setCounterText();
  }
});