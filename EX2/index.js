const fontColor = document.querySelector(".clr");
const fontSize = document.querySelector(".nbr");
const fontFamily = document.querySelector(".slc");
const txt = document.querySelector("#txt-area");

txt.style.color = fontColor;
txt.style.fontSize = fontSize;
txt.style.fontFamily = fontFamily;


fontColor.addEventListener('input', () => {txt.style.color = fontColor.value;})
fontSize.addEventListener('input', () => {txt.style.fontSize = fontSize.value + "px";})
fontFamily.addEventListener('input', () => {txt.style.fontFamily = fontFamily.value;})
