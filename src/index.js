import "./style.css";
import { getAnimation } from "./components/getAnimation";
import { UI, initialState } from "./utils/data";
import generateGui from "./components/gui";
import changeStrokeToPrettyText from "./components/strokeIntoText";

window.innerWidth > 1139 ? showApp() : hideApp();

function showApp() {
  UI.TEXT_SECTION.style.display = 'block';
  UI.TROUBLE_SECTION.style.display = 'none';

  generateGui(initialState);

  UI.BUTTON_PLAY.addEventListener("click", playAnimation);
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

  function copyOutput() {
    const text = changeStrokeToPrettyText(JSON.stringify(initialState));
    navigator.clipboard.writeText(text);
  }
}

function hideApp() {
  UI.TEXT_SECTION.style.display = 'none';
  UI.TROUBLE_SECTION.style.display = 'flex';
}