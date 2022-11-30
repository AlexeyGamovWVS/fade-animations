export default function changeStrokeToPrettyText(stroke) {
  let text = stroke;
  const regex = {
    type: /type/gi,
    dur: /duration/gi,
    dist: /distance/gi,
    ease: /easing/gi,
    delay: /delay/gi,
    simb: /"|{|}|:/gi,
    title: /title/gi,
    line: /line/gi,
    desc: /description/gi,
    img: /img/gi,
    hardEasing: /power1.in|power1.out|power1.inOut/gi,
    simpleEasing: /power1./gi,
  }
  text = text.replace(regex.simb, '');
  text = text.replace(regex.type, '\nТип анимации: ');
  text = text.replace(regex.dur, '\nДлительность (сек): ');
  text = text.replace(regex.dist, '\nДистанция (px): ');
  text = text.replace(regex.ease, '\nИзинг: ');
  text = text.replace(regex.delay, '\nЗадержка (сек): ');
  if (text.match(regex.hardEasing)) {
    text = text.replace('power1.in', 'ease-in');
    text = text.replace('power1.out', 'ease-out');
    text = text.replace('power1.inOut', 'ease-in-out');
  }
  text = text.replace(regex.simpleEasing, 'ease');
  text = text.replace(regex.title, 'Заголовок');
  text = text.replace(regex.line, '\n\nЛиния');
  text = text.replace(regex.desc, '\n\nОписание');
  text = text.replace(regex.img, '\n\nКартинка');
  return text;
}
