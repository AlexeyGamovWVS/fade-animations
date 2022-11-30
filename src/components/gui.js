import * as dat from "dat.gui";

export default function generateGui(state) {
  const gui = new dat.GUI();
  const titleFolder = gui.addFolder("Title Animation");
  const lineFolder = gui.addFolder("Line Animation");
  const descFolder = gui.addFolder("Description Animation");
  const imgFolder = gui.addFolder("Image Animation");

  addOptionsFolder(titleFolder, state.title);
  addOptionsFolder(lineFolder, state.line);
  addOptionsFolder(descFolder, state.description);
  addOptionsFolder(imgFolder, state.img);

  titleFolder.open();
  lineFolder.open();
  descFolder.open();
  imgFolder.open();
}

function addOptionsFolder(folder, stateItem) {
  folder.add(stateItem, "type", {
    "fade-In": "fadeIn",
    "fade-In-Up": "fadeInUp",
    "fade-In-Left": "fadeInLeft",
    "fade-In-Right": "fadeInRight",
    "fade-In-Down": "fadeInDown",
    "fade-Out": "fadeOut",
    "fade-Out-Left": "fadeOutLeft",
    "fade-Out-Right": "fadeOutRight",
    "fade-Out-Up": "fadeOutUp",
    "fade-Out-Down": "fadeOutDown",
    "fade-In-Size-Center": "fadeInSizeCenter",
    "fade-In-Size-Left": "fadeInSizeLeft",
    "fade-In-Size-Right": "fadeInSizeRight",
  });

  folder.add(stateItem, "duration", 0.1, 3, 0.1);
  folder.add(stateItem, "distance", 10, 1000, 10);
  folder.add(stateItem, "easing", {
    ease: "power1.",
    "ease-in": "power1.in",
    "ease-out": "power1.out",
    "ease-in-out": "power1.inOut",
  });

  folder.add(stateItem, "delay", 0, 10, 0.1);
}
