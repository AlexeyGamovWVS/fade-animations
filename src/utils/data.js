export const UI = {
  TEXT_SECTION: document.querySelector(".richText"),
  TROUBLE_SECTION: document.querySelector(".display-trouble"),
  BUTTON_PLAY: document.querySelector(".button__play"),
  BUTTON_GENERATE: document.querySelector(".generate"),
  BUTTON_COPY: document.querySelector(".copy"),
  OUTPUT: document.querySelector(".output"),

  TITLE: document.querySelector(".richText__title"),
  LINE: document.querySelector(".richText__separator"),
  DESCRIPTION: document.querySelector(".rishText__subtitle"),
  IMG: document.querySelector(".richText__img"),
};

export const initialState = {
  title: {
    type: "fadeIn",
    duration: 1,
    distance: 100,
    easing: "power1.",
    delay: 0,
  },
  line: {
    type: "fadeInSizeLeft",
    duration: 1,
    distance: 100,
    easing: "power1.",
    delay: 0.1,
  },
  description: {
    type: "fadeIn",
    duration: 1,
    distance: 100,
    easing: "power1.",
    delay: 0.2,
  },
  img: {
    type: "fadeIn",
    duration: 1,
    distance: 100,
    easing: "power1.",
    delay: 0.3,
  },
};
