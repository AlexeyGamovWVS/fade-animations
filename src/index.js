import './style.css';
import { titleData, lineData, descData, imgData } from './components/data';
import Animatronix from './components/Animatronix';

const titleAnima = new Animatronix(titleData);
const lineAnima = new Animatronix(lineData);
const descAnima = new Animatronix(descData);
const imgAnima = new Animatronix(imgData);

titleAnima.setHandlers();
lineAnima.setHandlers();
descAnima.setHandlers();
imgAnima.setHandlers();


// const myTestObj = new Animatronix(myObj);
// myTestObj.setHandlers();