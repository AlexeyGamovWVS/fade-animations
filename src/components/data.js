const title = document.querySelector(".richText__title");
const line = document.querySelector(".richText__separator");
const description = document.querySelector(".rishText__subtitle");
const image = document.querySelector(".richText__img");
const playBtn = document.querySelector(".button__play");

const titleData = {
  type: "fadeIn",
  el: title,
  timeout: 600,
  distance: 200,
  easing: "ease",
  display: "block",
  delay: 10,
  handler: playBtn,
};

const lineData = {
  type: "fadeIn",
  el: line,
  timeout: 600,
  distance: 200,
  easing: "ease",
  display: "block",
  delay: 110,
  handler: playBtn,
};

const descData = {
  type: "fadeIn",
  el: description,
  timeout: 600,
  distance: 200,
  easing: "ease",
  display: "block",
  delay: 210,
  handler: playBtn,
};

const imgData = {
  type: "fadeIn",
  el: image,
  timeout: 600,
  distance: 200,
  easing: "ease",
  display: "block",
  delay: 310,
  handler: playBtn,
};

export { titleData, lineData, descData, imgData };
