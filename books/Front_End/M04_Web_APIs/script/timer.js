var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');

var message = 
  'Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.';
  var words = message.split(' ');

function countdown() {
    var timeLeft = 10;

    //1000မီလီစက္ကန့်(1 စက္ကန့်)တိုင်း လုပ်ဆောင်နိုင်ရန် setInterval ကို စေခိုင်းခြင်း
    var timeInterval = setInterval(function(){
        // timeLeft က 1ထက် ကြီး(များ)နေတယ်ဆိုရင် နုတ်သွားရန် စေခိုင်းခြင်းနှင့်  စာသားထည့်ခြင်း
      if (timeLeft > 1) {
        timerEl.textContent =  'Time:' + timeLeft + ' seconds remaining';
        timeLeft--;
      }

      // timeLeft က 1 နဲ့ ညီမျှနေသေးတယ်ဆိုရင် ဆတ်နုတ်ပေးဖို့ စေခိုင်းခြင်းနှင့် စာသားပြောင်းလဲခြင်း
      else if (timeLeft === 1) {
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
      }

      //timerEl မှာ စာသားမရှိတော့ဘူးဆိုရင် အလုပ်မလုပ်တော့ရန် စေခိုင်းခြင်း
      else {
        timerEl.textContent = '';
        clearInterval(timeInterval);
        displayMessage();
      } 
    }, 1000);
}

// မက်ဆေ့ချ်ကို တစ်ကြိမ်လျှင် စာလုံးတစ်လုံးစီ ပြပေးသည်။
function displayMessage() {
    var wordCount = 0;

    //1000မီလီစက္ကန့်(1 စက္ကန့်)တိုင်း လုပ်ဆောင်နိုင်ရန် setInterval ကို စေခိုင်းခြင်း
    var msgInterval = setInterval(function () {
        //message မှာ စာမရှိတော့ရင် (message က undefined ဖြစ်နေရင် )
        if (words[wordCount] === undefined) {
            //အချိန်ကို ရပ်တန့်ရန် clearInterval ကို အသုံးပြုထားသည်။
            clearInterval(msgInterval);
        }
        else {
            //စာလုံးတစ်ခုချင်းဆီ တိုး၍ ပြသရန် စေခိုင်းမှု 
            mainEl.textContent = words[wordCount];
            wordCount++;
        }
      
    }, 1000);
}


countdown();