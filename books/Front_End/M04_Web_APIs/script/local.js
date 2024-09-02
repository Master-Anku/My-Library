window.alert("Hello! မိတ်ဆွေအား ဆတ်သွယ်နိုင်ဖို့ အောက်ပါဖောင်ကို ဖြည့်ပါ။");


var firstName = document.querySelector("#first-name");
var email = document.querySelector("#your-email");
var phNumber = document.querySelector("#ph-number");
var place = document.querySelector("#place");
var button = document.querySelector("#sign-up");
var Form = document.querySelector("#reset");

button.addEventListener("click", function(btn) {
     btn.preventDefault();

     var user = {
        FirstName:firstName.value.trim(),
        Email:email.value.trim(),
        Number:phNumber.value.trim(),
        Place:place.value.trim(),
     };

     localStorage.setItem("user", JSON.stringify(user));
   //   localStorage.setItem("user", JSON.parse(user));

   //  document.getElementById("reset").reset();

    Form.reset();
});


   
