class Animatronix {
  constructor({
    type,
    el,
    timeout,
    distance = 200,
    easing = "ease",
    display = "block",
    delay = 10,
    handler,
  }) {
    this._type = type;
    this._el = el;
    this._timeout = timeout;
    this._distance = distance;
    this._easing = easing;
    this._display = display;
    this._delay = delay;
    this._handler = handler;
  }

  setHandlers() {
    this._el.style.display = this._display;
    this._handler.addEventListener("click", (e) => {
      const item = this._el;
      switch (this._type) {
        case "fadeIn":
          this._fadeIn(item);
          break;
        case "fadeInLeft":
          this._fadeInLeft(item);
          break;
        case "fadeInRight":
          this._fadeInRight(item);
          break;
        case "fadeInUp":
          this._fadeInUp(item);
          break;
        case "fadeInBottom":
          this._fadeInBottom(item);
          break;
        case "fadeOut":
          this._fadeOut(item);
          break;
        case "fadeOutLeft":
          this._fadeOutLeft(item);
          break;
        case "fadeOutRight":
          this._fadeOutRight(item);
          break;
        case "fadeOutUp":
          this._fadeOutUp(item);
          break;
        case "fadeOutBottom":
          this._fadeOutBottom(item);
          break;
        case "fadeInSizeCenter":
          this._fadeInSizeCenter(item);
          break;
        case "fadeInSizeLeft":
          this._fadeInSizeLeft(item);
          break;
        case "fadeInSizeRight":
          this._fadeInSizeRight(item);
          break;
        default:
          this._fadeIn(item);
      }
    });
  }

  _fadeIn(item) {
    item.style.opacity = 0;
    setTimeout(() => {
      item.style.transition = `all ${this._timeout}ms ${this._easing}`;
      item.style.opacity = 1;
    }, this._delay);
    setTimeout(() => {
      item.style.transition = `all 0ms`;
    }, this._delay + 1);
  }

  _fadeInLeft(item) {
    item.style.opacity = 0;
    item.style.transform = `translateX(${0 - this._distance}px)`;
    setTimeout(() => {
      item.style.transition = `all ${this._timeout}ms ${this._easing}`;
      item.style.opacity = 1;
      item.style.transform = `translateX(${0}px)`;
    }, this._delay);
    setTimeout(() => {
      item.style.transition = `all 0ms`;
    }, this._delay + 1);
  }
  _fadeInRight(item) {
    item.style.opacity = 0;
    item.style.transform = `translateX(${this._distance}px)`;
    setTimeout(() => {
      item.style.transition = `all ${this._timeout}ms ${this._easing}`;
      item.style.opacity = 1;
      item.style.transform = `translateX(${0}px)`;
    }, this._delay);
    setTimeout(() => {
      item.style.transition = `all 0ms`;
    }, this._delay + 1);
  }
  _fadeInUp(item) {
    item.style.opacity = 0;
    item.style.transform = `translateY(${this._distance}px)`;
    setTimeout(() => {
      item.style.transition = `all ${this._timeout}ms ${this._easing}`;
      item.style.opacity = 1;
      item.style.transform = `translateY(${0}px)`;
    }, this._delay);
    setTimeout(() => {
      item.style.transition = `all 0ms`;
    }, this._delay + 1);
  }
  _fadeInBottom(item) {
    item.style.opacity = 0;
    item.style.transform = `translateY(${0 - this._distance}px)`;
    setTimeout(() => {
      item.style.transition = `all ${this._timeout}ms ${this._easing}`;
      item.style.opacity = 1;
      item.style.transform = `translateY(${0}px)`;
    }, this._delay);
    setTimeout(() => {
      item.style.transition = `all 0ms`;
    }, this._delay + 1);
  }
  _fadeOut(item) {
    item.style.opacity = 1;
    setTimeout(() => {
      item.style.transition = `all ${this._timeout}ms ${this._easing}`;
      item.style.opacity = 0;
    }, this._delay);
    setTimeout(() => {
      item.style.transition = `all 0ms`;
    }, this._delay + 1);
  }
  _fadeOutLeft(item) {
    item.style.opacity = 1;
    item.style.transform = `translateX(${0}px)`;
    setTimeout(() => {
      item.style.transition = `all ${this._timeout}ms ${this._easing}`;
      item.style.opacity = 0;
      item.style.transform = `translateX(${0 - this._distance}px)`;
    }, this._delay);
    setTimeout(() => {
      item.style.transition = `all 0ms`;
    }, this._delay + 1);
  }
  _fadeOutRight(item) {
    item.style.opacity = 1;
    item.style.transform = `translateX(${0}px)`;
    setTimeout(() => {
      item.style.transition = `all ${this._timeout}ms ${this._easing}`;
      item.style.opacity = 0;
      item.style.transform = `translateX(${this._distance}px)`;
    }, this._delay);
    setTimeout(() => {
      item.style.transition = `all 0ms`;
    }, this._delay + 1);
  }
  _fadeOutUp(item) {
    item.style.opacity = 1;
    item.style.transform = `translateY(${0}px)`;
    setTimeout(() => {
      item.style.transition = `all ${this._timeout}ms ${this._easing}`;
      item.style.opacity = 0;
      item.style.transform = `translateY(${0 - this._distance}px)`;
    }, this._delay);
    setTimeout(() => {
      item.style.transition = `all 0ms`;
    }, this._delay + 1);
  }
  _fadeOutBottom(item) {
    item.style.opacity = 1;
    item.style.transform = `translateY(${0}px)`;
    setTimeout(() => {
      item.style.transition = `all ${this._timeout}ms ${this._easing}`;
      item.style.opacity = 0;
      item.style.transform = `translateY(${this._distance}px)`;
    }, this._delay);
    setTimeout(() => {
      item.style.transition = `all 0ms`;
    }, this._delay + 1);
  }
  _fadeInSizeCenter(item) {
    item.style.opacity = 0;
    item.style.transform = `scaleX(0)`;
    setTimeout(() => {
      item.style.transition = `all ${this._timeout}ms ${this._easing}`;
      item.style.opacity = 1;
      item.style.left = 0;
      item.style.transform = `scaleX(1)`;
    }, this._delay);
    setTimeout(() => {
      item.style.transition = `all 0ms`;
    }, this._delay + 1);
  }
  _fadeInSizeLeft(item) {
    item.style.opacity = 0;
    item.style.transform = `translateX(-50%) scaleX(0)`;
    setTimeout(() => {
      item.style.transition = `all ${this._timeout}ms ${this._easing}`;
      item.style.opacity = 1;
      item.style.left = 0;
      item.style.transform = `translateX(0) scaleX(1)`;
    }, this._delay);
    setTimeout(() => {
      item.style.transition = `all 0ms`;
    }, this._delay + 1);
	}
  _fadeInSizeRight(item) {
    item.style.opacity = 0;
    item.style.transform = `translateX(50%) scaleX(0)`;
    setTimeout(() => {
      item.style.transition = `all ${this._timeout}ms ${this._easing}`;
      item.style.opacity = 1;
      item.style.left = 0;
      item.style.transform = `translateX(0) scaleX(1)`;
    }, this._delay);
    setTimeout(() => {
      item.style.transition = `all 0ms`;
    }, this._delay + 1);
	}
}

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