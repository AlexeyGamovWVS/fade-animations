import './style.css';
import Animatronix from './components/Animatronix';


const title = document.querySelector(".richText__title");
const playBtn = document.querySelector(".button__play");
const line = document.querySelector(".richText__separator");

const myObj = {
  el: title,
  type: "fadeInUp",
  timeout: 3000,
  delay: 2000,
  handler: playBtn,
	easing: 'ease-in-out',
};
const myTestObj = new Animatronix(myObj);
myTestObj.setHandlers();