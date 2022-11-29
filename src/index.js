import "./style.css";
import * as dat from "dat.gui";
import { getAnimation } from "./getAnimation";

const UI = {
  BUTTON_PLAY: document.querySelector(".button__play"),
  BUTTON_GENERATE: document.querySelector(".generate"),
  BUTTON_COPY: document.querySelector(".copy"),
  OUTPUT: document.querySelector(".output"),

  TITLE: document.querySelector(".richText__title"),
  LINE: document.querySelector(".richText__separator"),
  DESCRIPTION: document.querySelector(".rishText__subtitle"),
  IMG: document.querySelector(".richText__img"),
};

const state = {
  title: {
    type: "fadeIn",
    duration: 1,
    distance: 100,
    easing: "ease-in",
    delay: 0,
  },
  description: {
    type: "fadeIn",
    duration: 1,
    distance: 100,
    easing: "ease-in",
    delay: 1,
  },
  img: {
    type: "fadeIn",
    duration: 1,
    distance: 100,
    easing: "ease-in",
    delay: 2,
  },
  line: {
    type: "fadeIn",
    duration: 1,
    distance: 100,
    easing: "ease-in",
    delay: 3,
  },
};

generateGui(state);

UI.BUTTON_PLAY.addEventListener("click", playAnimation);
UI.BUTTON_GENERATE.addEventListener("click", generateOutput);
UI.BUTTON_COPY.addEventListener("click", copyOutput);

function playAnimation() {
  playAnimationElement(UI.TITLE, state.title);
  playAnimationElement(UI.DESCRIPTION, state.description);
  playAnimationElement(UI.LINE, state.line);
  playAnimationElement(UI.IMG, state.img);
}

function playAnimationElement(element, stateObj) {
  const animate = getAnimation(stateObj.type);
  animate(element, stateObj);
}

function generateGui(state) {
  const gui = new dat.GUI();
  const titleFolder = gui.addFolder("Title Animation");
  const lineFolder = gui.addFolder("Line Animation");
  const descFolder = gui.addFolder("Description Animation");
  const imgFolder = gui.addFolder("Image Animation");

  addOptionsFolder(titleFolder, state.title);
  addOptionsFolder(lineFolder, state.line);
  addOptionsFolder(descFolder, state.description);
  addOptionsFolder(imgFolder, state.img);
}

function addOptionsFolder(folder, stateObj) {
  folder.add(stateObj, "type", {
    "fade-In": "fadeIn",
    "fade-In-Up": "fadeInUp",
    // "fade-In-Right": "fadeInRight",
    // "fade-In-Bottom": "fadeInBottom",
    // "fade-Out": "fadeOut",
    // "fade-Out-Left": "fadeOutLeft",
    // "fade-Out-Right": "fadeOutRight",
    // "fade-Out-Up": "fadeOutUp",
    // "fade-Out-Bottom": "fadeOutBottom",
    // "fade-In-Size-Center": "fadeInSizeCenter",
    // "fade-In-Size-Left": "fadeInSizeLeft",
    // "fade-In-Size-Right": "fadeInSizeRight",
  });

  folder.add(stateObj, "duration", 0.1, 3, 0.1);

  folder.add(stateObj, "distance", 10, 1000, 10);

  folder.add(stateObj, "easing", {
    ease: "power1.",
    "ease-in": "power1.in",
    "ease-out": "power1.out",
    "ease-in-out": "power1.inOut",
  });

  folder.add(stateObj, "delay", 0, 10000, 100);
}

function generateOutput() {
  const json = JSON.stringify(state);
  UI.OUTPUT.textContent = json;
}

function copyOutput() {
  navigator.clipboard.writeText(JSON.stringify(state));
}
