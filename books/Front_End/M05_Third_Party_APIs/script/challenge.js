//အမည်သစ်ကြေငြာ၍ ID ကို ချိတ်ဆတ်ပေးခြင်း 
document.addEventListener('DOMContentLoaded', () => {
    const currentDayEl = document.getElementById('currentDay');
    const timeblocksEl = document.getElementById('timeblocks');

    //အလုပ်ချိန်ကို သတ်မှတ်ခြင်း 
    const businessHours = [
        { hour: 9, label: "9 AM" },
        { hour: 10, label: "10 AM" },
        { hour: 11, label: "11 AM" },
        { hour: 12, label: "12 PM" },
        { hour: 13, label: "1 PM" },
        { hour: 14, label: "2 PM" },
        { hour: 15, label: "3 PM" },
        { hour: 16, label: "4 PM" },
        { hour: 17, label: "5 PM" },
        { hour: 18, label: "7 PM" },
        { hour: 19, label: "8 PM" },
        { hour: 20, label: "9 PM" },
        { hour: 21, label: "10 PM" },
    ];
//function အသစ်ကြေငြာ၍ Date ကို တောင်းခြင်းနှင့် option ထည့်ခြင်း 
    function displayCurrentDay() {
        const today = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        currentDayEl.textContent = today.toLocaleDateString(undefined, options);
    }
//function အသစ်ကြေငြာ၍ date ထည့်ခြင်း 
    function createTimeBlocks() {
        const currentHour = new Date().getHours();
//Add to  create  and class  
        businessHours.forEach(({ hour, label }) => {
            const timeBlock = document.createElement('div');
            timeBlock.className = 'timeblock';

            const input = document.createElement('input');
            input.type = 'text';
            input.value = localStorage.getItem(`time-${hour}`) || '';

            const button = document.createElement('button');
            button.textContent = 'Save';

            button.addEventListener('click', () => {
                localStorage.setItem(`time-${hour}`, input.value);
            });
//if နဲ့ စစ်၍ color ထည့်ခြင်း 
            if (hour < currentHour) {
                timeBlock.classList.add('past');
            } else if (hour === currentHour) {
                timeBlock.classList.add('present');
            } else {
                timeBlock.classList.add('future');
            }
//appendChild ပြုလုပ်ခြင်း 
            timeBlock.innerHTML = `<div>${label}</div>`;
            timeBlock.appendChild(input);
            timeBlock.appendChild(button);

            timeblocksEl.appendChild(timeBlock);
        });
    }
//နာမည်ပြန်ခေါ်၍ အလုပ်လုပ်ခိုင်းခြင်း 
    displayCurrentDay();
    createTimeBlocks();
});