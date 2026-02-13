let password1 = document.getElementById("password-1");
let password2 = document.getElementById("password-2");

let symbols = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
];

let length = symbols.length;
function generatePassword() {
  let passwordLength = Number(document.getElementById("password-length").value);
  password1.textContent = " ";
  password2.textContent = " ";
  for (let i = 0; i < passwordLength; i++) {
    password1.textContent += symbols[Math.floor(Math.random() * length)];
  }
  for (let i = 0; i < passwordLength; i++) {
    password2.textContent += symbols[Math.floor(Math.random() * length)];
  }
}
