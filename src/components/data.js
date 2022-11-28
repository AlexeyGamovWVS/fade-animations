const title = document.querySelector(".richText__title");
const line = document.querySelector(".richText__separator");
const description = document.querySelector(".rishText__subtitle");
const image = document.querySelector(".richText__img-box");
const playBtn = document.querySelector(".button__play");

const titleData = {
  type: "fadeIn",
  el: title,
  duration: .600,
  distance: 200,
  easing: "ease",
  display: "block",
  delay: 100,
  handler: playBtn,
};

const lineData = {
  type: "fadeIn",
  el: line,
  duration: .600,
  distance: 200,
  easing: "ease",
  display: "block",
  delay: 200,
  handler: playBtn,
};

const descData = {
  type: "fadeIn",
  el: description,
  duration: .600,
  distance: 200,
  easing: "ease",
  display: "block",
  delay: 300,
  handler: playBtn,
};

const imgData = {
  type: "fadeIn",
  el: image,
  duration: .600,
  distance: 200,
  easing: "ease",
  display: "block",
  delay: 400,
  handler: playBtn,
};

export { titleData, lineData, descData, imgData };
