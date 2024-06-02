const typing_ground = document.querySelector("#textarea");
const btn = document.querySelector("#btn");
const score = document.querySelector("#score");
const show_sentence = document.querySelector("#showSentence");
const timerDisplay = document.querySelector(".timer-div p");
let startTime, endTime, totalTimeTaken, timer, randomNumber;

const inspirationalContent = [
  "Your life does not get better by chance, it gets better by change. - Jim Rohn",
  "The only way to achieve the impossible is to believe it is possible. - Charles Kingsleigh",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "In the middle of difficulty lies opportunity. - Albert Einstein",
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
  "It's not whether you get knocked down, it's whether you get up. - Vince Lombardi",
  "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
  "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. - Christian D. Larson",
  "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart. - Roy T. Bennett",
  "You have within you, right now, everything you need to deal with whatever the world can throw at you. - Brian Tracy",
  "The more that you read, the more things you will know. The more that you learn, the more places you'll go. - Dr. Seuss",
  "The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson",
  "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. - Christian D. Larson",
  "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart. - Roy T. Bennett",
  "You have within you, right now, everything you need to deal with whatever the world can throw at you. - Brian Tracy",
  "The more that you read, the more things you will know. The more that you learn, the more places you'll go. - Dr. Seuss",
  "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
  "The best way to predict the future is to create it. - Peter Drucker",
  "Success is not just about making money. It's about making a difference. - Unknown",
  "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. - Steve Jobs",
  "Believe you can and you're halfway there. - Theodore Roosevelt",

  "The only way to do great work is to love what you do. - Steve Jobs",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "In the middle of difficulty lies opportunity. - Albert Einstein",
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
  "It's not whether you get knocked down, it's whether you get up. - Vince Lombardi",
  "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
  "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. - Christian D. Larson",
  "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart. - Roy T. Bennett",
  "You have within you, right now, everything you need to deal with whatever the world can throw at you. - Brian Tracy",
  "The more that you read, the more things you will know. The more that you learn, the more places you'll go. - Dr. Seuss",
  "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
  "The best way to predict the future is to create it. - Peter Drucker",
  "Success is not just about making money. It's about making a difference. - Unknown",
  "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. - Steve Jobs",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson",
];

const calculateTypingSpeed = (time_taken) => {
  let totalWords = typing_ground.value.trim().split(/\s+/);
  let expectedWords = inspirationalContent[randomNumber].split(/\s+/);

  let correctWords = 0;

  for (let i = 0; i < Math.min(totalWords.length, expectedWords.length); i++) {
    if (totalWords[i] === expectedWords[i]) {
      correctWords++;
    }
  }

  if (correctWords !== 0) {
    let typing_speed = (correctWords / time_taken) * 60;
    typing_speed = Math.round(typing_speed);
    score.innerHTML = `Your typing speed is ${typing_speed} words per minute & you wrote ${correctWords} correct words & time taken ${time_taken} sec`;
  } else {
    score.innerHTML = `Your typing speed is null (0 correct words) & time taken ${time_taken} sec`;
  }
};

const endTypingTest = () => {
  btn.innerText = "Start";
  let date = new Date();
  endTime = date.getTime();
  totalTimeTaken = (endTime - startTime) / 1000;

  calculateTypingSpeed(totalTimeTaken);

  show_sentence.innerHTML = "";
  typing_ground.value = "";

  clearInterval(timer); // Clear the timer
  timerDisplay.textContent = "";
};

const startTyping = () => {
  // Clear old typing history
  score.innerHTML = "";

  randomNumber = Math.floor(Math.random() * inspirationalContent.length);
  let initialSentence = inspirationalContent[randomNumber];

  // Split the sentence into lines based on punctuation
  const lines = initialSentence.split(/([.?])\s+/).filter(Boolean);

  // Combine lines to achieve a balanced distribution
  let combinedLines = [];
  for (let i = 0; i < lines.length; i += 2) {
    combinedLines.push(lines[i] + (lines[i + 1] || ""));
  }

  initialSentence = combinedLines.join("\n");

  show_sentence.innerHTML = initialSentence;
  typing_ground.value = ""; // Clear the typing box

  let date = new Date();
  startTime = date.getTime();

  btn.innerText = "Done";

  // Set a 1-minute timer
  let seconds = 60;
  timer = setInterval(() => {
    seconds--;
    timerDisplay.textContent = `Time left: ${seconds} seconds`;

    if (seconds <= 0) {
      clearInterval(timer);
      endTypingTest();
      timerDisplay.textContent = "Time is over";
    }
  }, 1000);
};

btn.addEventListener("click", () => {
  switch (btn.innerText.toLowerCase()) {
    case "start":
      typing_ground.removeAttribute("disabled");
      startTyping();
      break;

    case "done":
      typing_ground.setAttribute("disabled", "true");
      endTypingTest();
      break;
  }
});

// loginpage//
