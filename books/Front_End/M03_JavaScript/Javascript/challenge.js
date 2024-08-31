//generating password base on checkbox condition 
function generatePassword() {
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()-_+=<>?";

    let allChars = "";

    if (document.getElementById("lowercase").checked) {
      allChars += lowercaseChars;
    }
    if (document.getElementById("uppercase").checked) {
      allChars += uppercaseChars;
    }
    if (document.getElementById("numbers").checked) {
      allChars += numbers;
    }
    if (document.getElementById("special").checked) {
      allChars += specialChars;
    }

    if (allChars === "") {
      alert("Please select at least one character type.");
      return "";
    }

    // PasswordLength 
    let passwordLength = parseInt(
      document.getElementById("passwordLength").value
    );

    if (passwordLength < 8 || passwordLength > 128) {
      alert("Password length must be between 8 and 128 characters.");
      return "";
    }

    // password 
    let password = "";

    // charAt (လေ့လာရန်)
    if (document.getElementById("lowercase").checked) {
      const lowercaseChar = lowercaseChars.charAt(
        Math.floor(Math.random() * lowercaseChars.length)
      );
      password += lowercaseChar;
    }
    if (document.getElementById("uppercase").checked) {
      const uppercaseChar = uppercaseChars.charAt(
        Math.floor(Math.random() * uppercaseChars.length)
      );
      password += uppercaseChar;
    }
    if (document.getElementById("numbers").checked) {
      const numberChar = numbers.charAt(
        Math.floor(Math.random() * numbers.length)
      );
      password += numberChar;
    }
    if (document.getElementById("special").checked) {
      const specialChar = specialChars.charAt(
        Math.floor(Math.random() * specialChars.length)
      );
      password += specialChar;
    }

    // while loop
    while (password.length < passwordLength) {
      const randomChar = allChars.charAt(
        Math.floor(Math.random() * allChars.length)
      );
      password += randomChar;
    }//12 ab KL ^^&

    password = password
      .split("")
      .sort(function () {
        return 0.5 - Math.random();
      })
      .join("");

    return password;
  }



  document
    .getElementById("button")
    .addEventListener("click", function () {
      const passwordInput = document.getElementById("password");
      const generatedPassword = generatePassword();
      passwordInput.value = generatedPassword;
    });