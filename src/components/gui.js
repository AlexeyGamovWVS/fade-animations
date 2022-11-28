const gui = new dat.GUI();
console.log(gui);
const f1 = gui.addFolder("Title");
const f2 = gui.addFolder("Line");
const f3 = gui.addFolder("Description");
const f4 = gui.addFolder("Image");

f1.add(options, "Type", [
  "fade-In",
  "fade-In-Right",
  "fade-In-Top",
  "fade-In-Bottom",
  "fade-Out",
  "fade-Out-Left",
  "fade-Out-Right",
  "fade-Out-Top",
  "fade-Out-Bottom",
  "fade-In-Size-Center",
  "fade-In-Size-Left",
  "fade-In-Size-Right",
]);
f1.add(text, "duration");
