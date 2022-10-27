//WORK IN PROGRESS!

let input = document.getElementById("input");
let submit = document.getElementById("submit");
let cleanedOutput = document.getElementById("cleaned-output");
let reversedOutput = document.getElementById("reversed-output");
let answer = document.getElementById("answer");

input.value = "";

submit.onclick = () => {
  let regex = /[^ -/:-@[-``]/gi;
  let extracted = input.value.match(regex);
  let cleanString = "";
  let splitString = "";
  let reversedString = "";

  for (let i = 0; i <= extracted.length - 1; i++) {
    cleanString += extracted[i];
  }
  cleanString = cleanString.toLowerCase();

  splitString = cleanString.split("");

  for (let j = splitString.length - 1; j >= 0; j--) {
    reversedString += splitString[j];
  }
  console.log(reversedString);

  let isPalindrome = cleanString === reversedString ? true : false;

  console.log(splitString);
  console.log(cleanString);
  console.log(reversedString);
  console.log(isPalindrome);

  cleanedOutput.innerHTML = `Original: ${cleanString.toString()}`;
  reversedOutput.innerHTML = `Flipped: ${reversedString.toString()}`;
  answer.innerHTML = isPalindrome
    ? `Answer: It is! <span class = "text-4xl">👍</span>`
    : `Answer: No it is not <span class = "text-4xl">😭</span>`;
};
