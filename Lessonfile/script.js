// var word = function(t) {
//     var text = t;
//     var translate = function (lang){
//         switch(lang) {
//             case "pig latin":
//                 t = () =>{
//                     return (
//                         this.text.substring(1, this.text.length) + 
//                         this.substring(0, 1) + "a"
//                     );
//                 };
//                 break;
//                 default:
//                     t = ()=> {
//                         return "I don't speak" + lang;
//                     }
//         }
//         return t();

//     }
//     return {
//         text : text,
//         translate: translate,
//     };
// }

// var ourText = word("hello");
// ourText.translate("pig latin");

// ==== Chat Gpt

var word = function(t) {
    var text = t;
    var translate = function (lang){
        switch(lang) {
            case "pig latin":
                t = () =>{
                    return (
                       
                        text.substring(1, text.length) +  // က အစက စာလုံးတစ်လုံးကို ဖြတ်ပြီး ကျန်တာကို ယူပါတယ်။ == hello   == ello
                        text.substring(0, 1)  // h
                         + "a"
                    );
                };
                break;
                default:
                    t = ()=> {
                        return "I don't speak " + lang;
                    }
        }
        return t();

    }
    return {
        text : text, // var text
        translate: translate, //translate function
    };
} 

var ourText = word("hello");
// ourText.translate("pig latin");
// console.log(ourText.translate("pig latin"))
console.log(ourText.translate("french")); // Output: I don't speak french

