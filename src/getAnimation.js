import gsap from "gsap";

export function getAnimation(type) {
  console.log(animationsGlossary, type);
  return animationsGlossary[type];
}

const animationsGlossary = {
  fadeIn(item, { duration, delay, easing }) {
    gsap.fromTo(
      item,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration,
        ease: easing,
        delay,
      }
    );

    // item.style.opacity = 0;
    // setTimeout(() => {
    //   item.style.transition = `all ${duration}s ${easing}`;
    //   item.style.opacity = 1;
    // }, delay);
    // setTimeout(() => {
    //   item.style.transition = `all 0ms`;
    // }, delay + 1);
  },
  fadeInUp(item, { duration, delay, distance, easing }) {
    gsap.fromTo(
      item,
      {
        opacity: 0,
        y: distance,
      },
      {
        opacity: 1,
        y: 0,
        duration,
        ease: easing,
        delay,
      }
    );
    // item.style.opacity = 0;
    // item.style.transform = `translateY(${distance}px)`;
    // setTimeout(() => {
    //   item.style.transition = `all ${duration}ms ${easing}`;
    //   item.style.opacity = 1;
    //   item.style.transform = `translateY(${0}px)`;
    // }, delay);
    // setTimeout(() => {
    //   item.style.transition = `all 0ms`;
    // }, delay + 1);
  },
  // fadeInLeft(item) {
  //   item.style.opacity = 0;
  //   item.style.transform = `translateX(${0 - this._distance}px)`;
  //   setTimeout(() => {
  //     item.style.transition = `all ${this._timeout}ms ${this._easing}`;
  //     item.style.opacity = 1;
  //     item.style.transform = `translateX(${0}px)`;
  //   }, this._delay);
  //   setTimeout(() => {
  //     item.style.transition = `all 0ms`;
  //   }, this._delay + 1);
  // },
  // fadeInRight(item) {
  //   item.style.opacity = 0;
  //   item.style.transform = `translateX(${this._distance}px)`;
  //   setTimeout(() => {
  //     item.style.transition = `all ${this._timeout}ms ${this._easing}`;
  //     item.style.opacity = 1;
  //     item.style.transform = `translateX(${0}px)`;
  //   }, this._delay);
  //   setTimeout(() => {
  //     item.style.transition = `all 0ms`;
  //   }, this._delay + 1);
  // },
  // fadeInBottom(item) {
  //   item.style.opacity = 0;
  //   item.style.transform = `translateY(${0 - this._distance}px)`;
  //   setTimeout(() => {
  //     item.style.transition = `all ${this._timeout}ms ${this._easing}`;
  //     item.style.opacity = 1;
  //     item.style.transform = `translateY(${0}px)`;
  //   }, this._delay);
  //   setTimeout(() => {
  //     item.style.transition = `all 0ms`;
  //   }, this._delay + 1);
  // },
  // fadeOut(item) {
  //   item.style.opacity = 1;
  //   setTimeout(() => {
  //     item.style.transition = `all ${this._timeout}ms ${this._easing}`;
  //     item.style.opacity = 0;
  //   }, this._delay);
  //   setTimeout(() => {
  //     item.style.transition = `all 0ms`;
  //   }, this._delay + 1);
  // },
  // fadeOutLeft(item) {
  //   item.style.opacity = 1;
  //   item.style.transform = `translateX(${0}px)`;
  //   setTimeout(() => {
  //     item.style.transition = `all ${this._timeout}ms ${this._easing}`;
  //     item.style.opacity = 0;
  //     item.style.transform = `translateX(${0 - this._distance}px)`;
  //   }, this._delay);
  //   setTimeout(() => {
  //     item.style.transition = `all 0ms`;
  //   }, this._delay + 1);
  // },
  // fadeOutRight(item) {
  //   item.style.opacity = 1;
  //   item.style.transform = `translateX(${0}px)`;
  //   setTimeout(() => {
  //     item.style.transition = `all ${this._timeout}ms ${this._easing}`;
  //     item.style.opacity = 0;
  //     item.style.transform = `translateX(${this._distance}px)`;
  //   }, this._delay);
  //   setTimeout(() => {
  //     item.style.transition = `all 0ms`;
  //   }, this._delay + 1);
  // },
  // fadeOutUp(item) {
  //   item.style.opacity = 1;
  //   item.style.transform = `translateY(${0}px)`;
  //   setTimeout(() => {
  //     item.style.transition = `all ${this._timeout}ms ${this._easing}`;
  //     item.style.opacity = 0;
  //     item.style.transform = `translateY(${0 - this._distance}px)`;
  //   }, this._delay);
  //   setTimeout(() => {
  //     item.style.transition = `all 0ms`;
  //   }, this._delay + 1);
  // },
  // fadeOutBottom(item) {
  //   item.style.opacity = 1;
  //   item.style.transform = `translateY(${0}px)`;
  //   setTimeout(() => {
  //     item.style.transition = `all ${this._timeout}ms ${this._easing}`;
  //     item.style.opacity = 0;
  //     item.style.transform = `translateY(${this._distance}px)`;
  //   }, this._delay);
  //   setTimeout(() => {
  //     item.style.transition = `all 0ms`;
  //   }, this._delay + 1);
  // },
  // fadeInSizeCenter(item) {
  //   item.style.opacity = 0;
  //   item.style.transform = `scaleX(0)`;
  //   setTimeout(() => {
  //     item.style.transition = `all ${this._timeout}ms ${this._easing}`;
  //     item.style.opacity = 1;
  //     item.style.left = 0;
  //     item.style.transform = `scaleX(1)`;
  //   }, this._delay);
  //   setTimeout(() => {
  //     item.style.transition = `all 0ms`;
  //   }, this._delay + 1);
  // },
  // fadeInSizeLeft(item) {
  //   item.style.opacity = 0;
  //   item.style.transform = `translateX(-50%) scaleX(0)`;
  //   setTimeout(() => {
  //     item.style.transition = `all ${this._timeout}ms ${this._easing}`;
  //     item.style.opacity = 1;
  //     item.style.left = 0;
  //     item.style.transform = `translateX(0) scaleX(1)`;
  //   }, this._delay);
  //   setTimeout(() => {
  //     item.style.transition = `all 0ms`;
  //   }, this._delay + 1);
  // },
  // fadeInSizeRight(item) {
  //   item.style.opacity = 0;
  //   item.style.transform = `translateX(50%) scaleX(0)`;
  //   setTimeout(() => {
  //     item.style.transition = `all ${this._timeout}ms ${this._easing}`;
  //     item.style.opacity = 1;
  //     item.style.left = 0;
  //     item.style.transform = `translateX(0) scaleX(1)`;
  //   }, this._delay);
  //   setTimeout(() => {
  //     item.style.transition = `all 0ms`;
  //   }, this._delay + 1);
  // },
};
