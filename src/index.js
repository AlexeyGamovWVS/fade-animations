import "./style.css";
import { titleData, lineData, descData, imgData } from "./components/data";
import Animatronix from "./components/Animatronix";
import * as dat from "dat.gui";

const gui = new dat.GUI();
const titleFolder = gui.addFolder("Title Animation");

const titleControllerType = titleFolder.add(titleData, "type", {
  "fade-In": "fadeIn",
  "fade-In-Right": "fadeInRight",
  "fade-In-Up": "fadeInUp",
  "fade-In-Bottom": "fadeInBottom",
  "fade-Out": "fadeOut",
  "fade-Out-Left": "fadeOutLeft",
  "fade-Out-Right": "fadeOutRight",
  "fade-Out-Up": "fadeOutUp",
  "fade-Out-Bottom": "fadeOutBottom",
  "fade-In-Size-Center": "fadeInSizeCenter",
  "fade-In-Size-Left": "fadeInSizeLeft",
  "fade-In-Size-Right": "fadeInSizeRight",
});

titleControllerType.onChange((value) => {
  titleData.type = value;
  titleAnima.updateData("type", value);
});

const titleControllerDuration = titleFolder.add(
  titleData,
  "duration",
  0.1,
  3,
  0.1
);

titleControllerDuration.onChange((value) => {
  titleData.duration = value;
  titleAnima.updateData("duration", value);
});

const titleControllerDistance = titleFolder.add(
  titleData,
  "distance",
  10,
  1000,
  10
);
titleControllerDistance.onChange((value) => {
  titleData.distance = value;
  titleAnima.updateData("distance", value);
});

const titleControllerEasing = titleFolder.add(titleData, "easing", [
  "ease",
  "ease-in",
  "ease-out",
  "ease-in-out",
]);

titleControllerEasing.onChange((value) => {
  titleData.easing = value;
  titleAnima.updateData("easing", value);
});

const titleControllerDelay = titleFolder.add(titleData, "delay", 0, 10000, 100);
titleControllerDelay.onChange((value) => {
  titleData.delay = value;
  titleAnima.updateData("delay", value);
});

//////////////////

const lineFolder = gui.addFolder("Line Animation");

const lineControllerType = lineFolder.add(lineData, "type", {
  "fade-In": "fadeIn",
  "fade-In-Right": "fadeInRight",
  "fade-In-Up": "fadeInUp",
  "fade-In-Bottom": "fadeInBottom",
  "fade-Out": "fadeOut",
  "fade-Out-Left": "fadeOutLeft",
  "fade-Out-Right": "fadeOutRight",
  "fade-Out-Up": "fadeOutUp",
  "fade-Out-Bottom": "fadeOutBottom",
  "fade-In-Size-Center": "fadeInSizeCenter",
  "fade-In-Size-Left": "fadeInSizeLeft",
  "fade-In-Size-Right": "fadeInSizeRight",
});

lineControllerType.onChange((value) => {
  lineData.type = value;
  lineAnima.updateData("type", value);
});

const lineControllerDuration = lineFolder.add(
  lineData,
  "duration",
  0.1,
  3,
  0.1
);

lineControllerDuration.onChange((value) => {
  lineData.duration = value;
  lineAnima.updateData("duration", value);
});

const lineControllerDistance = lineFolder.add(
  lineData,
  "distance",
  10,
  1000,
  10
);
lineControllerDistance.onChange((value) => {
  lineData.distance = value;
  lineAnima.updateData("distance", value);
});

const lineControllerEasing = lineFolder.add(lineData, "easing", [
  "ease",
  "ease-in",
  "ease-out",
  "ease-in-out",
]);

lineControllerEasing.onChange((value) => {
  lineData.easing = value;
  lineAnima.updateData("easing", value);
});

const lineControllerDelay = lineFolder.add(lineData, "delay", 0, 10000, 100);
lineControllerDelay.onChange((value) => {
  lineData.delay = value;
  lineAnima.updateData("delay", value);
});

///////////////////////

const descFolder = gui.addFolder("Description Animation");

const descControllerType = descFolder.add(descData, "type", {
  "fade-In": "fadeIn",
  "fade-In-Right": "fadeInRight",
  "fade-In-Up": "fadeInUp",
  "fade-In-Bottom": "fadeInBottom",
  "fade-Out": "fadeOut",
  "fade-Out-Left": "fadeOutLeft",
  "fade-Out-Right": "fadeOutRight",
  "fade-Out-Up": "fadeOutUp",
  "fade-Out-Bottom": "fadeOutBottom",
  "fade-In-Size-Center": "fadeInSizeCenter",
  "fade-In-Size-Left": "fadeInSizeLeft",
  "fade-In-Size-Right": "fadeInSizeRight",
});

descControllerType.onChange((value) => {
  descData.type = value;
  descAnima.updateData("type", value);
});

const descControllerDuration = descFolder.add(
  descData,
  "duration",
  0.1,
  3,
  0.1
);

descControllerDuration.onChange((value) => {
  descData.duration = value;
  descAnima.updateData("duration", value);
});

const descControllerDistance = descFolder.add(
  descData,
  "distance",
  10,
  1000,
  10
);
descControllerDistance.onChange((value) => {
  descData.distance = value;
  descAnima.updateData("distance", value);
});

const descControllerEasing = descFolder.add(descData, "easing", [
  "ease",
  "ease-in",
  "ease-out",
  "ease-in-out",
]);

descControllerEasing.onChange((value) => {
  descData.easing = value;
  descAnima.updateData("easing", value);
});

const descControllerDelay = descFolder.add(descData, "delay", 0, 10000, 100);
descControllerDelay.onChange((value) => {
  descData.delay = value;
  descAnima.updateData("delay", value);
});

//////////////////////

const imgFolder = gui.addFolder("img Animation");

const imgControllerType = imgFolder.add(imgData, "type", {
  "fade-In": "fadeIn",
  "fade-In-Right": "fadeInRight",
  "fade-In-Up": "fadeInUp",
  "fade-In-Bottom": "fadeInBottom",
  "fade-Out": "fadeOut",
  "fade-Out-Left": "fadeOutLeft",
  "fade-Out-Right": "fadeOutRight",
  "fade-Out-Up": "fadeOutUp",
  "fade-Out-Bottom": "fadeOutBottom",
  "fade-In-Size-Center": "fadeInSizeCenter",
  "fade-In-Size-Left": "fadeInSizeLeft",
  "fade-In-Size-Right": "fadeInSizeRight",
});

imgControllerType.onChange((value) => {
  imgData.type = value;
  imgAnima.updateData("type", value);
});

const imgControllerDuration = imgFolder.add(
  imgData,
  "duration",
  0.1,
  3,
  0.1
);

imgControllerDuration.onChange((value) => {
  imgData.duration = value;
  imgAnima.updateData("duration", value);
});

const imgControllerDistance = imgFolder.add(
  imgData,
  "distance",
  10,
  1000,
  10
);
imgControllerDistance.onChange((value) => {
  imgData.distance = value;
  imgAnima.updateData("distance", value);
});

const imgControllerEasing = imgFolder.add(imgData, "easing", [
  "ease",
  "ease-in",
  "ease-out",
  "ease-in-out",
]);

imgControllerEasing.onChange((value) => {
  imgData.easing = value;
  imgAnima.updateData("easing", value);
});

const imgControllerDelay = imgFolder.add(imgData, "delay", 0, 10000, 100);
imgControllerDelay.onChange((value) => {
  imgData.delay = value;
  imgAnima.updateData("delay", value);
});

const titleAnima = new Animatronix(titleData);
const lineAnima = new Animatronix(lineData);
const descAnima = new Animatronix(descData);
const imgAnima = new Animatronix(imgData);

titleAnima.setHandlers();
lineAnima.setHandlers();
descAnima.setHandlers();
imgAnima.setHandlers();

titleFolder.open();
lineFolder.open();
descFolder.open();
imgFolder.open();
