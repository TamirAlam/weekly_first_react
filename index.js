const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = upper.toLowerCase();
const symbol = "!@#$%^&*~<>/?";
const number = "123456789";


const copyBtn = document.getElementById("copybtn");
const Btn = document.getElementById("btn");

const uppercheck = document.getElementById("uppercheck");
const lowercheck = document.getElementById("lowercheck");
const numbercheck = document.getElementById("numbercheck");
const symbolcheck = document.getElementById("symbolcheck");
const passwordcheck = document.getElementById("passwordcheck");

copyBtn.addEventListener("click", copyClipboard);
Btn.addEventListener("click", generateString);

function generateString() {
  let res = "";
  
  if (uppercheck.checked) res += upper;
  if (lowercheck.checked) res += lower;
  if (numbercheck.checked) res += number;
  if (symbolcheck.checked) res += symbol;

  if (res === "") {
    alert("Please select at least one checkbox.");
    return;
  }
  
  generatePassword(res);
}

function generatePassword(res) {
  const inputLength = document.getElementById("input-length").value;
  if (inputLength < 8 || inputLength > 50) {
    alert("Length out of mentioned range");
    return;
  }

  let finalPassword = "";
  for (let i = 0; i < inputLength; i++) {
    const charIndex = Math.floor(Math.random() * res.length);
    finalPassword += res.charAt(charIndex);
  }
  document.getElementById("Password-field").value = finalPassword;
}

function copyClipboard() {
  const mypassword = document.getElementById("Password-field").value;
  if (mypassword === "") {
    alert("Password field is empty, nothing to copy!");
  } else {
    navigator.clipboard.writeText(mypassword);
    alert("Password copied to clipboard.");
  }
}
