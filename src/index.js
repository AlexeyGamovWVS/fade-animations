import "./style.css";
import { getAnimation } from "./components/getAnimation";
import { UI, initialState } from "./utils/data";
import generateGui from "./components/gui";

generateGui(initialState);

UI.BUTTON_PLAY.addEventListener("click", playAnimation);
UI.BUTTON_GENERATE.addEventListener("click", generateOutput);
UI.BUTTON_COPY.addEventListener("click", copyOutput);

function playAnimation() {
  playAnimationElement(UI.TITLE, initialState.title);
  playAnimationElement(UI.DESCRIPTION, initialState.description);
  playAnimationElement(UI.LINE, initialState.line);
  playAnimationElement(UI.IMG, initialState.img);
}

function playAnimationElement(element, stateObj) {
  const animate = getAnimation(stateObj.type);
  animate(element, stateObj);
}

function generateOutput() {
  const text = JSON.stringify(initialState);
  UI.OUTPUT.textContent = text;
}

function copyOutput() {
  navigator.clipboard.writeText(JSON.stringify(initialState));
}
