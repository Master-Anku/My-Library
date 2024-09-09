let questions = [
    {
      question: "HTMLကို ဘယ်လိုရေးလဲ။",
      options: ["html", "hmlt", "htlm", "mhtl"],
      answer: "html",
    },
    {
      question: "<h1></h1> tag က ဘယ်နေရာမှာ ရေးလဲ။",
      options: ["ကြိုက်တဲ့နေရာ", "အဆင်ပြေဖို့", "ခေါင်းစဉ်မှန်းသိနိုင်ဖို့", "လိုအပ်လို့"],
      answer: "ခေါင်းစဉ်မှန်းသိနိုင်ဖို့",
    },
    {
      question: "h2 နဲ့ ရေးပီး  h1 နဲ့ ထပ်ရေးသင့်လား။",
      options: ["ရေးသင့်", "မရေးသင့်", "အဆင်ပြေတယ်", "မကောင်းပါ"],
      answer: "မရေးသင့်",
    },
    {
      question: "အဖ္ငင့်ပါပီး အပိတ်မပါသော tag များ ",
      options: ["p", "div", "img", "h6"],
      answer: "img",
    },
    {
        question: "မှန်ကန်သော p tag ကို ရွေးပြပါ။",
        options: ["<p><p/>", "</p><p>", "<p><p/>", "<p>"],
        answer: "<p><p/>",
      },
  ];
  
  let currentQuestion = 0;
  let timeLeft = 36;
  let timer;
  let score = 0;
  
  // function startQuiz() {
  //   const username = document.getElementById("username").value;
  //   if (username.trim() === "") {
  //     alert("Please enter your name.");
  //     return;
  //   }
  //   // Shuffle questions array
  //   questions = shuffleArray(questions);
  //   document.getElementById("start-container").style.display = "none";
  //   document.getElementById("quiz-container").style.display = "block";
  //   displayQuestion();
  //   startTimer(); // Start the timer after displaying the first question
  // }
  
  function startQuiz() {
    // console.log("hello");
    const username = document.getElementById("username").value;
    if (username.trim() === "") {
      alert("Please enter your name.");
      return;
    }
    // Shuffle questions array
    questions = shuffleArray(questions);
    document.getElementById("start-container").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";
    displayQuestion();
    startTimer(); // Start the timer after displaying the first question
  }
  
  // function displayQuestion() {
  //   document.getElementById("question").textContent = `Question ${
  //     currentQuestion + 1
  //   }: ${questions[currentQuestion].question}`;
  //   const optionsContainer = document.querySelector(".options");
  //   optionsContainer.innerHTML = "";
  //   // Shuffle options array
  //   const shuffledOptions = shuffleArray(questions[currentQuestion].options);
  //   shuffledOptions.forEach((option) => {
  //     const optionDiv = document.createElement("div");
  //     optionDiv.classList.add("option");
  //     optionDiv.innerHTML = `<input type="radio" name="answer" value="${option}"> ${option}`;
  //     optionsContainer.appendChild(optionDiv);
  //   });
  // }
  
  
  function displayQuestion() {
    const questionContainer = document.getElementById("question");
    questionContainer.innerHTML = ""; // Clear previous content
  
    const questionNumberLine = document.createElement("div");
    questionNumberLine.textContent = `Question ${currentQuestion + 1}: `;
    questionNumberLine.style.textAlign = "center"; // Center alignment
    questionNumberLine.style.color = "maroon"; // Maroon color
    questionNumberLine.style.position = "relative"; // Set position to relative
    questionNumberLine.style.paddingBottom = "10px"; // Offset beneath the text
    questionNumberLine.style.borderBottom = "1px solid black"; // Underline
  
    const questionTextLine = document.createElement("div");
    questionTextLine.textContent = questions[currentQuestion].question;
    questionTextLine.style.marginTop = "20px";
    // questionTextLine.style.maxWidth = "500px"; // Limit maximum width to prevent overflow
  
    questionContainer.appendChild(questionNumberLine);
    questionContainer.appendChild(questionTextLine);
  
    const optionsContainer = document.querySelector(".options");
    optionsContainer.innerHTML = ""; // Clear previous options
    const shuffledOptions = shuffleArray(questions[currentQuestion].options);
    shuffledOptions.forEach((option) => {
      const optionDiv = document.createElement("div");
      optionDiv.classList.add("option");
      optionDiv.innerHTML = `<input type="radio" name="answer" value="${option}"> ${option}`;
      optionsContainer.appendChild(optionDiv);
    });
    document.getElementById("next-question").style.display = "block";
  }
  
  
  function startTimer() {
    // console.log("Mdy");
    timer = setInterval(function () {
      // console.log("Yangon");
      if (timeLeft > 0) {
        timeLeft--;
        document.getElementById("time").textContent = timeLeft;
      } else {
        clearInterval(timer);
        document.getElementById("time").textContent = "Time's up!";
        document.querySelectorAll('input[type="radio"]').forEach((input) => {
          input.disabled = true;
        });
        setTimeout(nextQuestion, 2000);
      }
    }, 1000);
  }
  
  function checkAnswer() {
    clearInterval(timer);
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (!selectedAnswer) {
      document.getElementById("feedback").textContent =
        "Please select an answer!";
      return;
    }
    const answer = selectedAnswer.value;
    if (answer === questions[currentQuestion].answer) {
      score++;
      document.getElementById("feedback").textContent = "Correct!";
    } else {
      document.getElementById(
        "feedback"
      ).textContent = `Incorrect. The correct answer is ${questions[currentQuestion].answer}.`;
    }
    document.querySelectorAll('input[type="radio"]').forEach((input) => {
      input.disabled = true;
    });
    setTimeout(nextQuestion, 1000);
  }
  
  function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      timeLeft = 36;
      displayQuestion();
      startTimer();
      document.getElementById("feedback").textContent = "";
    } else {
      showResult();
    }
  }
  
  function showResult() {
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("result-container").style.display = "block";
    const username = document.getElementById("username").value;
    const percentage = (score / questions.length) * 100;
    let resultText;
    if (percentage >= 50) {
      resultText = `<span class="pass">You Pass!</span>`;
    } else {
      resultText = `<span class="fail">You Fail!</span>`;
    }
    document.getElementById(
      "result"
    ).innerHTML = `${username}, you scored ${score} out of ${questions.length}!<br>${resultText}`;
  }
  
  function testAgain() {
    currentQuestion = 0;
    timeLeft = 10;
    score = 0;
    questions = shuffleArray(questions);
    document.getElementById("result-container").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";
    displayQuestion();
    startTimer();
  }
  
  // Function to shuffle array
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  function clearPlaceholder(element) {
    element.placeholder = "";
  }
  