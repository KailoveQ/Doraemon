// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"K4Xi":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "\n/*  */\n.head {\n  height: 268px;\n  width: 280px;\n  top: 35px;\n  margin-left: -140px;\n}\n.face {\n  width: 246px;\n  height: 232px;\n  top: 70px;\n  margin-left: -123px;\n}\n.eye {\n  width: 56px;\n  height: 64px;\n  top: 42px;\n}\n.smallEye {\n  width: 16px;\n  height: 24px;\n  top: 20px;\n  margin-left: -8px;\n  background: black;\n  transform-origin: 50% 100%;\n}\n\n.smallEye::before {\n  width: 10px;\n  height: 14px;\n  position: relative;\n  top: 0px;\n}\n\n.eye.left > .smallEye {\n  left: 70%;\n}\n\n.eye.right > .smallEye {\n  left: 30%;\n}\n\n.eye.left > .smallEye::before {\n  left: 3px;\n}\n.eye.right > .smallEye::before {\n  left: -1px;\n}\n.nose {\n  width: 36px;\n  height: 36px;\n  top: 94px;\n  margin-left: -18px;\n  background: rgb(212, 3, 41);\n}\n.nose::after {\n  width: 11px;\n  height: 11px;\n  top: 22%;\n  left: 10%;\n}\n\n.lip.left {\n  width: 120px;\n  height: 40px;\n  border-bottom-left-radius: 33px 30px;\n  transform: rotate(-8deg);\n  top: 124px;\n  margin-left: -120px;\n}\n.lip.right {\n  width: 120px;\n  height: 40px;\n  border-bottom-right-radius: 33px 30px;\n  transform: rotate(8deg);\n  top: 124px;\n  margin-right: -120px;\n}\n\n.lip.left::after {\n  border-top-left-radius: 20px 20px;\n  transform: rotate(0deg);\n  top: -51%;\n  right: 69.4%;\n}\n.lip.right::after {\n  top: -51%;\n  left: 69.4%;\n  border-top-right-radius: 20px 20px;\n  transform: rotate(0deg);\n}\n\n.upperLip {\n  height: 24px;\n  width: 0;\n  background: #000;\n  border-radius: 25%;\n  top: 130px;\n}\n\n.beard {\n  height: 1px;\n  width: 57px;\n  background: black;\n}\n\n.beard.left1 {\n  margin-left: -80px;\n  transform: rotate(16deg);\n}\n.beard.right1 {\n  margin-right: -80px;\n  transform: rotate(-16deg);\n}\n.beard.left2 {\n  margin-left: -105px;\n}\n.beard.right2 {\n  margin-right: -105px;\n}\n.beard.left3 {\n  margin-left: -90px;\n  transform: rotate(-10deg);\n}\n.beard.right3 {\n  margin-right: -90px;\n  transform: rotate(10deg);\n}\n.mouse-wrapper {\n  height: 140px;\n  width: 230px;\n  overflow: hidden;\n  top: 155px;\n  margin-left: -115px;\n}\n\n.mouse {\n  height: 700px;\n  width: 200px;\n  border-radius: 270px/378px;\n  top: -576px;\n  margin-left: -100px;\n  background: rgb(209, 5, 44);\n  overflow: hidden;\n}\n.mouse > .tongue {\n  width: 90px;\n  height: 40px;\n  z-index: 2;\n  border-radius: 0 0 100px 100px;\n  background: rgb(244, 83, 2);\n  bottom: -10px;\n  margin-left: -45px;\n}\n\n.mouse > .tongue::before {\n  height: 30px;\n  width: 40px;\n  border-top-left-radius: 80px 50px;\n  transform: rotate(45deg);\n  background: rgb(244, 83, 2);\n  top: -16px;\n  right: 3%;\n}\n\n.mouse > .tongue::after {\n  height: 30px;\n  width: 40px;\n  border-top-right-radius: 90px 50px;\n  transform: rotate(-45deg);\n  background: rgb(244, 83, 2);\n  top: -16px;\n  left: 3%;\n}\n\n/* \u8FD9\u91CC\u662F\u94C3\u94DB */\n.neck {\n  width: 170px;\n  height: 20px;\n  background-color: rgb(182, 0, 23);\n  border-radius: 10px;\n  top: 282px;\n  margin-left: -85px;\n  z-index: 4;\n}\n.neck > .bell {\n  height: 40px;\n  width: 40px;\n  background-color: #f9f12a;\n  top: 4px;\n  margin-left: -20px;\n}\n.neck > .bell > .bellTongue {\n  width: 12px;\n  height: 10px;\n  top: 20px;\n  margin-left: -6px;\n}\n.neck > .bell ::after {\n  width: 36px;\n  height: 2px;\n  background-color: #f9f12a;\n  top: -8px;\n  margin-left: -18px;\n}\n.neck > .bell ::before {\n  width: 3px;\n  height: 15px;\n  top: 3px;\n  margin-left: -1.5px;\n}\n\n/* \u8FD9\u662F\u5723\u4F53 */\n.body {\n  width: 200px;\n  height: 165px;\n  top: 290px;\n  margin-left: -100px;\n}\n.body .pocket {\n  width: 170px;\n  height: 140px;\n  top: -4px;\n  margin-left: -85px;\n}\n\n.body .pocket::after {\n  width: 130px;\n  height: 100px;\n  top: 20px;\n  margin-left: -65px;\n}\n\n.body .pocket::before {\n  width: 130px;\n  height: 54px;\n  border-radius: 50% 50% 10% 10%;\n  top: 0px;\n  margin-left: -65px;\n  margin-top: 20px;\n  z-index: 2;\n}\n\n/* \u624B */\n.body .hand {\n  width: 100px;\n  height: 100px;\n  top: 0px;\n}\n\n.body .hand.left .arm {\n  width: 120px;\n  height: 40px;\n  z-index: -1;\n  left: -20px;\n  transform: rotate(220deg);\n  top: -50px;\n}\n\n.body .hand.right .arm {\n  width: 80px;\n  height: 40px;\n  z-index: -1;\n  top: 0px;\n  transform: rotate(25deg);\n}\n\n.body .hand .arm::after {\n  width: 50px;\n  height: 50px;\n}\n\n.body .hand .write {\n  width: 20px;\n  height: 36px;\n  border-radius: 2px;\n}\n\n.body .hand.left .arm::after {\n  left: 100px;\n  bottom: -5px;\n}\n\n.body .hand.right .arm::after {\n  right: -33px;\n  bottom: -7px;\n}\n\n.body .hand.left .write {\n  top: -5px;\n  left: 64px;\n}\n\n.body .hand.right .write {\n  top: -3px;\n  right: 60px;\n}\n.footer .foot {\n  width: 125px;\n  height: 30px;\n  border-radius: 80px 60px 60px 40px;\n  top: 163px;\n}\n.footer .left {\n  margin-left: -40px;\n}\n\n.footer .right {\n  right: 50%;\n  margin-right: -240px;\n}\n\n.footer .write {\n  width: 28px;\n  height: 20px;\n  border-radius: 60px 60px 0 0;\n  border-bottom: none;\n  top: 144px;\n  margin-left: 86px;\n}\n/* \u52A0\u4E2A\u52A8\u753B */\n.smallEye {\n  animation: move 3s linear infinite;\n}\n\n";
var _default = string;
exports.default = _default;
},{}],"HdJB":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var player = {
  id: undefined,
  time: 100,
  ui: {
    demo: document.querySelector('#demo'),
    demo2: document.querySelector('#demo2')
  },
  events: {
    '#btnPause': 'pause',
    '#btnPlay': 'play',
    '#btnSlow': 'slow',
    '#btnNormal': 'normal',
    '#btnFast': 'fast'
  },
  n: 1,
  init: function init() {
    player.ui.demo.innerText = _css.default.substr(0, player.n);
    player.ui.demo2.innerHTML = _css.default.substr(0, player.n);
    player.bindEvents();
    player.play();
  },
  bindEvents: function bindEvents() {
    for (var key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        var value = player.events[key]; // pause / play / slow

        document.querySelector(key).onclick = player[value];
      }
    }
  },
  run: function run() {
    player.n += 1;

    if (player.n > _css.default.length) {
      window.clearInterval(player.id);
      return;
    }

    player.ui.demo.innerText = _css.default.substr(0, player.n);
    player.ui.demo2.innerHTML = _css.default.substr(0, player.n);
    player.ui.demo.scrollTop = player.ui.demo.scrollHeight;
  },
  play: function play() {
    window.clearInterval(player.id);
    player.id = setInterval(player.run, player.time);
  },
  pause: function pause() {
    window.clearInterval(player.id);
  },
  slow: function slow() {
    player.pause();
    player.time = 200;
    player.play();
  },
  normal: function normal() {
    player.pause();
    player.time = 100;
    player.play();
  },
  fast: function fast() {
    player.pause();
    player.time = 0;
    player.play();
  }
};
player.init();
},{"./css.js":"K4Xi"}]},{},["HdJB"], null)
//# sourceMappingURL=test.29e70b4e.js.map