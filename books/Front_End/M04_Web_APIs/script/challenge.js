let questions = [
    {
      question:
        "မြတ်စွာဘုရား သက်တော်ဘယ်လောက်မှာ ဘုရားဖြစ်လဲ။",
      options: ["45", "46", "36", "35"],
      answer: "35",
    },
    {
      question:
        "မြတ်စွာဘုရား သက်တော်ဘယ်လောက်မှာ ပရိနိဗ္ဗာန်စံသွားတာလဲ။",
      options: ["80", "85", "87", "100"],
      answer: "80",
    },
    {
      question:
        "မြန်မာနိုင်ငံတော်ရဲ့ ပထမဆုံး သမ္မတက ဘယ်သူလဲ။",
      options: ["ဦးနု", "စစ်ရွှေသိုက်", "ဦးစောမောင်", "ဦးသိန်းစိန်"],
      answer: "စစ်ရွှေသိုက်",
    },
    {
      question:
        "မြန်မာနိုင်ငံရဲ့ စီးပွားရေးအဓိကကျဆုံး မြို့က ဘယ်မြို့လဲ။",
      options: ["ရန်ကုန်", "နေပြည်တော်", "မန္တလေး", "တောင်ကြီး"],
      answer: "ရန်ကုန်",
    },
  ];
  
  let currentQuestion = 0;
  let timeLeft = 15;
  let timer;
  let score = 0;
  
  
  function startQuiz() {
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
   
  
    questionContainer.appendChild(questionNumberLine);
    questionContainer.appendChild(questionTextLine);
  
    const optionsContainer = document.querySelector(".options");
    optionsContainer.innerHTML = ""; 
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
    timer = setInterval(function () {
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
      timeLeft = 10;
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
  