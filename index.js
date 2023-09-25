const text = document.getElementById("input");
const key = document.getElementById("key");
const alphabet = [
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
];

encode = () => {
  if (text.value === "") {
    alert("Please enter text");
    return;
  }
  
  if (key.value === "") {
    alert("Please enter a key");
    return;
  }

  const textValue = text.value.toLowerCase();
  const keyValue = parseInt(key.value) % 26;

  let encodedText = "";

  for (let i = 0; i < textValue.length; i++) {
    let char = textValue[i];
    if (alphabet.includes(char)) {
      let index = alphabet.indexOf(char);
      let newIndex = (index + keyValue) % 26;
      encodedText += alphabet[newIndex];
    } else {
      encodedText += char;
    }
  }
  document.getElementById("output").innerHTML = `${encodedText}`;
};

decode = () => {
  if (text.value === "") {
    alert("Please enter text");
    return;
  }
  
  if (key.value === "") {
    alert("Please enter a key");
    return;
  }

  const textValue = text.value.toLowerCase();
  const keyValue = parseInt(key.value) % 26;

  let decodedText = "";

  for (let i = 0; i < textValue.length; i++) {
    let char = textValue[i];
    if (alphabet.includes(char)) {
      let index = alphabet.indexOf(char);
      let newIndex = (index - keyValue + 26) % 26;
      decodedText += alphabet[newIndex];
    } else {
      decodedText += char;
    }
  }
  document.getElementById("output").innerHTML = `${decodedText}`;
};