var container = document.querySelector(".container");


container.addEventListener("click", function(even){
    var element = even.target;

    if (element.matches(".box")){
        var state = element.getAttribute("data-state");

        if (state == "hidden") {
            element.textContent = element.dataset.number;
            element.dataset.state = "visible";
        }else {
            element.textContent = "";
            element.setAttribute("data-state", "hidden")
        }
    }
});


// alert("Hello, ဒီနေ့မှာတော့ Data-Attributes ကို လေ့လာကြည့်လိုက်ရအောင်")

// var contact = document.querySelector(".contact");

// contact.addEventListener("click", function(even){
//     var element = even.target;
//     if (element.matches(".box")){
//         var state = element.getAttribute("data-state");
//         if (state == "hidden") {
//             element.textContent = element.dataset.number;
//             element.dataset.state = "visible";

//         }
//         else {
//             element.textContent = "";
//             element.setAttribute("data-state", "hidden")
//         }
//     }
// });


