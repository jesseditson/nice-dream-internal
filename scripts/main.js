var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/feather-icons/dist/feather.js
var require_feather = __commonJS({
  "node_modules/feather-icons/dist/feather.js"(exports, module) {
    (function webpackUniversalModuleDefinition(root2, factory) {
      if (typeof exports === "object" && typeof module === "object")
        module.exports = factory();
      else if (typeof define === "function" && define.amd)
        define([], factory);
      else if (typeof exports === "object")
        exports["feather"] = factory();
      else
        root2["feather"] = factory();
    })(typeof self !== "undefined" ? self : exports, function() {
      return (
        /******/
        function(modules) {
          var installedModules = {};
          function __webpack_require__(moduleId) {
            if (installedModules[moduleId]) {
              return installedModules[moduleId].exports;
            }
            var module2 = installedModules[moduleId] = {
              /******/
              i: moduleId,
              /******/
              l: false,
              /******/
              exports: {}
              /******/
            };
            modules[moduleId].call(module2.exports, module2, module2.exports, __webpack_require__);
            module2.l = true;
            return module2.exports;
          }
          __webpack_require__.m = modules;
          __webpack_require__.c = installedModules;
          __webpack_require__.d = function(exports2, name, getter) {
            if (!__webpack_require__.o(exports2, name)) {
              Object.defineProperty(exports2, name, {
                /******/
                configurable: false,
                /******/
                enumerable: true,
                /******/
                get: getter
                /******/
              });
            }
          };
          __webpack_require__.r = function(exports2) {
            Object.defineProperty(exports2, "__esModule", { value: true });
          };
          __webpack_require__.n = function(module2) {
            var getter = module2 && module2.__esModule ? (
              /******/
              function getDefault() {
                return module2["default"];
              }
            ) : (
              /******/
              function getModuleExports() {
                return module2;
              }
            );
            __webpack_require__.d(getter, "a", getter);
            return getter;
          };
          __webpack_require__.o = function(object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
          };
          __webpack_require__.p = "";
          return __webpack_require__(__webpack_require__.s = 0);
        }({
          /***/
          "./dist/icons.json": (
            /*!*************************!*\
              !*** ./dist/icons.json ***!
              \*************************/
            /*! exports provided: activity, airplay, alert-circle, alert-octagon, alert-triangle, align-center, align-justify, align-left, align-right, anchor, aperture, archive, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, award, bar-chart-2, bar-chart, battery-charging, battery, bell-off, bell, bluetooth, bold, book-open, book, bookmark, box, briefcase, calendar, camera-off, camera, cast, check-circle, check-square, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, chrome, circle, clipboard, clock, cloud-drizzle, cloud-lightning, cloud-off, cloud-rain, cloud-snow, cloud, code, codepen, codesandbox, coffee, columns, command, compass, copy, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, cpu, credit-card, crop, crosshair, database, delete, disc, divide-circle, divide-square, divide, dollar-sign, download-cloud, download, dribbble, droplet, edit-2, edit-3, edit, external-link, eye-off, eye, facebook, fast-forward, feather, figma, file-minus, file-plus, file-text, file, film, filter, flag, folder-minus, folder-plus, folder, framer, frown, gift, git-branch, git-commit, git-merge, git-pull-request, github, gitlab, globe, grid, hard-drive, hash, headphones, heart, help-circle, hexagon, home, image, inbox, info, instagram, italic, key, layers, layout, life-buoy, link-2, link, linkedin, list, loader, lock, log-in, log-out, mail, map-pin, map, maximize-2, maximize, meh, menu, message-circle, message-square, mic-off, mic, minimize-2, minimize, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, mouse-pointer, move, music, navigation-2, navigation, octagon, package, paperclip, pause-circle, pause, pen-tool, percent, phone-call, phone-forwarded, phone-incoming, phone-missed, phone-off, phone-outgoing, phone, pie-chart, play-circle, play, plus-circle, plus-square, plus, pocket, power, printer, radio, refresh-ccw, refresh-cw, repeat, rewind, rotate-ccw, rotate-cw, rss, save, scissors, search, send, server, settings, share-2, share, shield-off, shield, shopping-bag, shopping-cart, shuffle, sidebar, skip-back, skip-forward, slack, slash, sliders, smartphone, smile, speaker, square, star, stop-circle, sun, sunrise, sunset, table, tablet, tag, target, terminal, thermometer, thumbs-down, thumbs-up, toggle-left, toggle-right, tool, trash-2, trash, trello, trending-down, trending-up, triangle, truck, tv, twitch, twitter, type, umbrella, underline, unlock, upload-cloud, upload, user-check, user-minus, user-plus, user-x, user, users, video-off, video, voicemail, volume-1, volume-2, volume-x, volume, watch, wifi-off, wifi, wind, x-circle, x-octagon, x-square, x, youtube, zap-off, zap, zoom-in, zoom-out, default */
            /***/
            function(module2) {
              module2.exports = { "activity": '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>', "airplay": '<path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path><polygon points="12 15 17 21 7 21 12 15"></polygon>', "alert-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>', "alert-octagon": '<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>', "alert-triangle": '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line>', "align-center": '<line x1="18" y1="10" x2="6" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="18" y1="18" x2="6" y2="18"></line>', "align-justify": '<line x1="21" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="3" y2="18"></line>', "align-left": '<line x1="17" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="17" y1="18" x2="3" y2="18"></line>', "align-right": '<line x1="21" y1="10" x2="7" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="7" y2="18"></line>', "anchor": '<circle cx="12" cy="5" r="3"></circle><line x1="12" y1="22" x2="12" y2="8"></line><path d="M5 12H2a10 10 0 0 0 20 0h-3"></path>', "aperture": '<circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>', "archive": '<polyline points="21 8 21 21 3 21 3 8"></polyline><rect x="1" y="3" width="22" height="5"></rect><line x1="10" y1="12" x2="14" y2="12"></line>', "arrow-down-circle": '<circle cx="12" cy="12" r="10"></circle><polyline points="8 12 12 16 16 12"></polyline><line x1="12" y1="8" x2="12" y2="16"></line>', "arrow-down-left": '<line x1="17" y1="7" x2="7" y2="17"></line><polyline points="17 17 7 17 7 7"></polyline>', "arrow-down-right": '<line x1="7" y1="7" x2="17" y2="17"></line><polyline points="17 7 17 17 7 17"></polyline>', "arrow-down": '<line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline>', "arrow-left-circle": '<circle cx="12" cy="12" r="10"></circle><polyline points="12 8 8 12 12 16"></polyline><line x1="16" y1="12" x2="8" y2="12"></line>', "arrow-left": '<line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline>', "arrow-right-circle": '<circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line>', "arrow-right": '<line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>', "arrow-up-circle": '<circle cx="12" cy="12" r="10"></circle><polyline points="16 12 12 8 8 12"></polyline><line x1="12" y1="16" x2="12" y2="8"></line>', "arrow-up-left": '<line x1="17" y1="17" x2="7" y2="7"></line><polyline points="7 17 7 7 17 7"></polyline>', "arrow-up-right": '<line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline>', "arrow-up": '<line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline>', "at-sign": '<circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>', "award": '<circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>', "bar-chart-2": '<line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line>', "bar-chart": '<line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line>', "battery-charging": '<path d="M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19"></path><line x1="23" y1="13" x2="23" y2="11"></line><polyline points="11 6 7 12 13 12 9 18"></polyline>', "battery": '<rect x="1" y="6" width="18" height="12" rx="2" ry="2"></rect><line x1="23" y1="13" x2="23" y2="11"></line>', "bell-off": '<path d="M13.73 21a2 2 0 0 1-3.46 0"></path><path d="M18.63 13A17.89 17.89 0 0 1 18 8"></path><path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"></path><path d="M18 8a6 6 0 0 0-9.33-5"></path><line x1="1" y1="1" x2="23" y2="23"></line>', "bell": '<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path>', "bluetooth": '<polyline points="6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5"></polyline>', "bold": '<path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path><path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path>', "book-open": '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>', "book": '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>', "bookmark": '<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>', "box": '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>', "briefcase": '<rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>', "calendar": '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>', "camera-off": '<line x1="1" y1="1" x2="23" y2="23"></line><path d="M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56"></path>', "camera": '<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle>', "cast": '<path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path><line x1="2" y1="20" x2="2.01" y2="20"></line>', "check-circle": '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>', "check-square": '<polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>', "check": '<polyline points="20 6 9 17 4 12"></polyline>', "chevron-down": '<polyline points="6 9 12 15 18 9"></polyline>', "chevron-left": '<polyline points="15 18 9 12 15 6"></polyline>', "chevron-right": '<polyline points="9 18 15 12 9 6"></polyline>', "chevron-up": '<polyline points="18 15 12 9 6 15"></polyline>', "chevrons-down": '<polyline points="7 13 12 18 17 13"></polyline><polyline points="7 6 12 11 17 6"></polyline>', "chevrons-left": '<polyline points="11 17 6 12 11 7"></polyline><polyline points="18 17 13 12 18 7"></polyline>', "chevrons-right": '<polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline>', "chevrons-up": '<polyline points="17 11 12 6 7 11"></polyline><polyline points="17 18 12 13 7 18"></polyline>', "chrome": '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="21.17" y1="8" x2="12" y2="8"></line><line x1="3.95" y1="6.06" x2="8.54" y2="14"></line><line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>', "circle": '<circle cx="12" cy="12" r="10"></circle>', "clipboard": '<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>', "clock": '<circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>', "cloud-drizzle": '<line x1="8" y1="19" x2="8" y2="21"></line><line x1="8" y1="13" x2="8" y2="15"></line><line x1="16" y1="19" x2="16" y2="21"></line><line x1="16" y1="13" x2="16" y2="15"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="12" y1="15" x2="12" y2="17"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>', "cloud-lightning": '<path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"></path><polyline points="13 11 9 17 15 17 11 23"></polyline>', "cloud-off": '<path d="M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3"></path><line x1="1" y1="1" x2="23" y2="23"></line>', "cloud-rain": '<line x1="16" y1="13" x2="16" y2="21"></line><line x1="8" y1="13" x2="8" y2="21"></line><line x1="12" y1="15" x2="12" y2="23"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>', "cloud-snow": '<path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"></path><line x1="8" y1="16" x2="8.01" y2="16"></line><line x1="8" y1="20" x2="8.01" y2="20"></line><line x1="12" y1="18" x2="12.01" y2="18"></line><line x1="12" y1="22" x2="12.01" y2="22"></line><line x1="16" y1="16" x2="16.01" y2="16"></line><line x1="16" y1="20" x2="16.01" y2="20"></line>', "cloud": '<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>', "code": '<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>', "codepen": '<polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon><line x1="12" y1="22" x2="12" y2="15.5"></line><polyline points="22 8.5 12 15.5 2 8.5"></polyline><polyline points="2 15.5 12 8.5 22 15.5"></polyline><line x1="12" y1="2" x2="12" y2="8.5"></line>', "codesandbox": '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline><polyline points="7.5 19.79 7.5 14.6 3 12"></polyline><polyline points="21 12 16.5 14.6 16.5 19.79"></polyline><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>', "coffee": '<path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line>', "columns": '<path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"></path>', "command": '<path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>', "compass": '<circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>', "copy": '<rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>', "corner-down-left": '<polyline points="9 10 4 15 9 20"></polyline><path d="M20 4v7a4 4 0 0 1-4 4H4"></path>', "corner-down-right": '<polyline points="15 10 20 15 15 20"></polyline><path d="M4 4v7a4 4 0 0 0 4 4h12"></path>', "corner-left-down": '<polyline points="14 15 9 20 4 15"></polyline><path d="M20 4h-7a4 4 0 0 0-4 4v12"></path>', "corner-left-up": '<polyline points="14 9 9 4 4 9"></polyline><path d="M20 20h-7a4 4 0 0 1-4-4V4"></path>', "corner-right-down": '<polyline points="10 15 15 20 20 15"></polyline><path d="M4 4h7a4 4 0 0 1 4 4v12"></path>', "corner-right-up": '<polyline points="10 9 15 4 20 9"></polyline><path d="M4 20h7a4 4 0 0 0 4-4V4"></path>', "corner-up-left": '<polyline points="9 14 4 9 9 4"></polyline><path d="M20 20v-7a4 4 0 0 0-4-4H4"></path>', "corner-up-right": '<polyline points="15 14 20 9 15 4"></polyline><path d="M4 20v-7a4 4 0 0 1 4-4h12"></path>', "cpu": '<rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line>', "credit-card": '<rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line>', "crop": '<path d="M6.13 1L6 16a2 2 0 0 0 2 2h15"></path><path d="M1 6.13L16 6a2 2 0 0 1 2 2v15"></path>', "crosshair": '<circle cx="12" cy="12" r="10"></circle><line x1="22" y1="12" x2="18" y2="12"></line><line x1="6" y1="12" x2="2" y2="12"></line><line x1="12" y1="6" x2="12" y2="2"></line><line x1="12" y1="22" x2="12" y2="18"></line>', "database": '<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>', "delete": '<path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path><line x1="18" y1="9" x2="12" y2="15"></line><line x1="12" y1="9" x2="18" y2="15"></line>', "disc": '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle>', "divide-circle": '<line x1="8" y1="12" x2="16" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line><line x1="12" y1="8" x2="12" y2="8"></line><circle cx="12" cy="12" r="10"></circle>', "divide-square": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="8" y1="12" x2="16" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line><line x1="12" y1="8" x2="12" y2="8"></line>', "divide": '<circle cx="12" cy="6" r="2"></circle><line x1="5" y1="12" x2="19" y2="12"></line><circle cx="12" cy="18" r="2"></circle>', "dollar-sign": '<line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>', "download-cloud": '<polyline points="8 17 12 21 16 17"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"></path>', "download": '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line>', "dribbble": '<circle cx="12" cy="12" r="10"></circle><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path>', "droplet": '<path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>', "edit-2": '<path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>', "edit-3": '<path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>', "edit": '<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>', "external-link": '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>', "eye-off": '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line>', "eye": '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>', "facebook": '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>', "fast-forward": '<polygon points="13 19 22 12 13 5 13 19"></polygon><polygon points="2 19 11 12 2 5 2 19"></polygon>', "feather": '<path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line>', "figma": '<path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path>', "file-minus": '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="9" y1="15" x2="15" y2="15"></line>', "file-plus": '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line>', "file-text": '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>', "file": '<path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline>', "film": '<rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line>', "filter": '<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>', "flag": '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line>', "folder-minus": '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="9" y1="14" x2="15" y2="14"></line>', "folder-plus": '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="12" y1="11" x2="12" y2="17"></line><line x1="9" y1="14" x2="15" y2="14"></line>', "folder": '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>', "framer": '<path d="M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7"></path>', "frown": '<circle cx="12" cy="12" r="10"></circle><path d="M16 16s-1.5-2-4-2-4 2-4 2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>', "gift": '<polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>', "git-branch": '<line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path>', "git-commit": '<circle cx="12" cy="12" r="4"></circle><line x1="1.05" y1="12" x2="7" y2="12"></line><line x1="17.01" y1="12" x2="22.96" y2="12"></line>', "git-merge": '<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M6 21V9a9 9 0 0 0 9 9"></path>', "git-pull-request": '<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M13 6h3a2 2 0 0 1 2 2v7"></path><line x1="6" y1="9" x2="6" y2="21"></line>', "github": '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>', "gitlab": '<path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"></path>', "globe": '<circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>', "grid": '<rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect>', "hard-drive": '<line x1="22" y1="12" x2="2" y2="12"></line><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path><line x1="6" y1="16" x2="6.01" y2="16"></line><line x1="10" y1="16" x2="10.01" y2="16"></line>', "hash": '<line x1="4" y1="9" x2="20" y2="9"></line><line x1="4" y1="15" x2="20" y2="15"></line><line x1="10" y1="3" x2="8" y2="21"></line><line x1="16" y1="3" x2="14" y2="21"></line>', "headphones": '<path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>', "heart": '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>', "help-circle": '<circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line>', "hexagon": '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>', "home": '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>', "image": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline>', "inbox": '<polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>', "info": '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>', "instagram": '<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>', "italic": '<line x1="19" y1="4" x2="10" y2="4"></line><line x1="14" y1="20" x2="5" y2="20"></line><line x1="15" y1="4" x2="9" y2="20"></line>', "key": '<path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>', "layers": '<polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline>', "layout": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line>', "life-buoy": '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line><line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line>', "link-2": '<path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path><line x1="8" y1="12" x2="16" y2="12"></line>', "link": '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>', "linkedin": '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>', "list": '<line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line>', "loader": '<line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>', "lock": '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path>', "log-in": '<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line>', "log-out": '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line>', "mail": '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>', "map-pin": '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>', "map": '<polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line>', "maximize-2": '<polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line>', "maximize": '<path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>', "meh": '<circle cx="12" cy="12" r="10"></circle><line x1="8" y1="15" x2="16" y2="15"></line><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>', "menu": '<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>', "message-circle": '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>', "message-square": '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>', "mic-off": '<line x1="1" y1="1" x2="23" y2="23"></line><path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"></path><path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>', "mic": '<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>', "minimize-2": '<polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" y1="10" x2="21" y2="3"></line><line x1="3" y1="21" x2="10" y2="14"></line>', "minimize": '<path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path>', "minus-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line>', "minus-square": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="8" y1="12" x2="16" y2="12"></line>', "minus": '<line x1="5" y1="12" x2="19" y2="12"></line>', "monitor": '<rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line>', "moon": '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>', "more-horizontal": '<circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle>', "more-vertical": '<circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle>', "mouse-pointer": '<path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path><path d="M13 13l6 6"></path>', "move": '<polyline points="5 9 2 12 5 15"></polyline><polyline points="9 5 12 2 15 5"></polyline><polyline points="15 19 12 22 9 19"></polyline><polyline points="19 9 22 12 19 15"></polyline><line x1="2" y1="12" x2="22" y2="12"></line><line x1="12" y1="2" x2="12" y2="22"></line>', "music": '<path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle>', "navigation-2": '<polygon points="12 2 19 21 12 17 5 21 12 2"></polygon>', "navigation": '<polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>', "octagon": '<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>', "package": '<line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>', "paperclip": '<path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>', "pause-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="10" y1="15" x2="10" y2="9"></line><line x1="14" y1="15" x2="14" y2="9"></line>', "pause": '<rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect>', "pen-tool": '<path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle>', "percent": '<line x1="19" y1="5" x2="5" y2="19"></line><circle cx="6.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle>', "phone-call": '<path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>', "phone-forwarded": '<polyline points="19 1 23 5 19 9"></polyline><line x1="15" y1="5" x2="23" y2="5"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>', "phone-incoming": '<polyline points="16 2 16 8 22 8"></polyline><line x1="23" y1="1" x2="16" y2="8"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>', "phone-missed": '<line x1="23" y1="1" x2="17" y2="7"></line><line x1="17" y1="1" x2="23" y2="7"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>', "phone-off": '<path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"></path><line x1="23" y1="1" x2="1" y2="23"></line>', "phone-outgoing": '<polyline points="23 7 23 1 17 1"></polyline><line x1="16" y1="8" x2="23" y2="1"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>', "phone": '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>', "pie-chart": '<path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path>', "play-circle": '<circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon>', "play": '<polygon points="5 3 19 12 5 21 5 3"></polygon>', "plus-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>', "plus-square": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>', "plus": '<line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>', "pocket": '<path d="M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z"></path><polyline points="8 10 12 14 16 10"></polyline>', "power": '<path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path><line x1="12" y1="2" x2="12" y2="12"></line>', "printer": '<polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect>', "radio": '<circle cx="12" cy="12" r="2"></circle><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path>', "refresh-ccw": '<polyline points="1 4 1 10 7 10"></polyline><polyline points="23 20 23 14 17 14"></polyline><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path>', "refresh-cw": '<polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>', "repeat": '<polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path>', "rewind": '<polygon points="11 19 2 12 11 5 11 19"></polygon><polygon points="22 19 13 12 22 5 22 19"></polygon>', "rotate-ccw": '<polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>', "rotate-cw": '<polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>', "rss": '<path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle>', "save": '<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline>', "scissors": '<circle cx="6" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><line x1="20" y1="4" x2="8.12" y2="15.88"></line><line x1="14.47" y1="14.48" x2="20" y2="20"></line><line x1="8.12" y1="8.12" x2="12" y2="12"></line>', "search": '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>', "send": '<line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>', "server": '<rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line>', "settings": '<circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>', "share-2": '<circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>', "share": '<path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line>', "shield-off": '<path d="M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18"></path><path d="M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38"></path><line x1="1" y1="1" x2="23" y2="23"></line>', "shield": '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>', "shopping-bag": '<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path>', "shopping-cart": '<circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>', "shuffle": '<polyline points="16 3 21 3 21 8"></polyline><line x1="4" y1="20" x2="21" y2="3"></line><polyline points="21 16 21 21 16 21"></polyline><line x1="15" y1="15" x2="21" y2="21"></line><line x1="4" y1="4" x2="9" y2="9"></line>', "sidebar": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line>', "skip-back": '<polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" y1="19" x2="5" y2="5"></line>', "skip-forward": '<polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" y1="5" x2="19" y2="19"></line>', "slack": '<path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"></path><path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path><path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"></path><path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"></path><path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"></path><path d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"></path><path d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"></path><path d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"></path>', "slash": '<circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>', "sliders": '<line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line>', "smartphone": '<rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>', "smile": '<circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>', "speaker": '<rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><circle cx="12" cy="14" r="4"></circle><line x1="12" y1="6" x2="12.01" y2="6"></line>', "square": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>', "star": '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>', "stop-circle": '<circle cx="12" cy="12" r="10"></circle><rect x="9" y="9" width="6" height="6"></rect>', "sun": '<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>', "sunrise": '<path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="2" x2="12" y2="9"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="8 6 12 2 16 6"></polyline>', "sunset": '<path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="9" x2="12" y2="2"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="16 5 12 9 8 5"></polyline>', "table": '<path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"></path>', "tablet": '<rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>', "tag": '<path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line>', "target": '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle>', "terminal": '<polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line>', "thermometer": '<path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path>', "thumbs-down": '<path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path>', "thumbs-up": '<path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>', "toggle-left": '<rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="8" cy="12" r="3"></circle>', "toggle-right": '<rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="16" cy="12" r="3"></circle>', "tool": '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>', "trash-2": '<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line>', "trash": '<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>', "trello": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><rect x="7" y="7" width="3" height="9"></rect><rect x="14" y="7" width="3" height="5"></rect>', "trending-down": '<polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline><polyline points="17 18 23 18 23 12"></polyline>', "trending-up": '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline>', "triangle": '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>', "truck": '<rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle>', "tv": '<rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline>', "twitch": '<path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"></path>', "twitter": '<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>', "type": '<polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" y1="20" x2="15" y2="20"></line><line x1="12" y1="4" x2="12" y2="20"></line>', "umbrella": '<path d="M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7"></path>', "underline": '<path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"></path><line x1="4" y1="21" x2="20" y2="21"></line>', "unlock": '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path>', "upload-cloud": '<polyline points="16 16 12 12 8 16"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path><polyline points="16 16 12 12 8 16"></polyline>', "upload": '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line>', "user-check": '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline>', "user-minus": '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="23" y1="11" x2="17" y2="11"></line>', "user-plus": '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line>', "user-x": '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="18" y1="8" x2="23" y2="13"></line><line x1="23" y1="8" x2="18" y2="13"></line>', "user": '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>', "users": '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>', "video-off": '<path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10"></path><line x1="1" y1="1" x2="23" y2="23"></line>', "video": '<polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>', "voicemail": '<circle cx="5.5" cy="11.5" r="4.5"></circle><circle cx="18.5" cy="11.5" r="4.5"></circle><line x1="5.5" y1="16" x2="18.5" y2="16"></line>', "volume-1": '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>', "volume-2": '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>', "volume-x": '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line>', "volume": '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>', "watch": '<circle cx="12" cy="12" r="7"></circle><polyline points="12 9 12 12 13.5 13.5"></polyline><path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"></path>', "wifi-off": '<line x1="1" y1="1" x2="23" y2="23"></line><path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"></path><path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"></path><path d="M10.71 5.05A16 16 0 0 1 22.58 9"></path><path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line>', "wifi": '<path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line>', "wind": '<path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path>', "x-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>', "x-octagon": '<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>', "x-square": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="9" x2="15" y2="15"></line><line x1="15" y1="9" x2="9" y2="15"></line>', "x": '<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>', "youtube": '<path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>', "zap-off": '<polyline points="12.41 6.75 13 2 10.57 4.92"></polyline><polyline points="18.57 12.91 21 10 15.66 10"></polyline><polyline points="8 8 3 14 12 14 11 22 16 16"></polyline><line x1="1" y1="1" x2="23" y2="23"></line>', "zap": '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>', "zoom-in": '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line>', "zoom-out": '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="8" y1="11" x2="14" y2="11"></line>' };
            }
          ),
          /***/
          "./node_modules/classnames/dedupe.js": (
            /*!*******************************************!*\
              !*** ./node_modules/classnames/dedupe.js ***!
              \*******************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
              (function() {
                "use strict";
                var classNames = function() {
                  function StorageObject() {
                  }
                  StorageObject.prototype = /* @__PURE__ */ Object.create(null);
                  function _parseArray(resultSet, array2) {
                    var length3 = array2.length;
                    for (var i = 0; i < length3; ++i) {
                      _parse(resultSet, array2[i]);
                    }
                  }
                  var hasOwn = {}.hasOwnProperty;
                  function _parseNumber(resultSet, num) {
                    resultSet[num] = true;
                  }
                  function _parseObject(resultSet, object) {
                    for (var k2 in object) {
                      if (hasOwn.call(object, k2)) {
                        resultSet[k2] = !!object[k2];
                      }
                    }
                  }
                  var SPACE = /\s+/;
                  function _parseString(resultSet, str) {
                    var array2 = str.split(SPACE);
                    var length3 = array2.length;
                    for (var i = 0; i < length3; ++i) {
                      resultSet[array2[i]] = true;
                    }
                  }
                  function _parse(resultSet, arg) {
                    if (!arg)
                      return;
                    var argType = typeof arg;
                    if (argType === "string") {
                      _parseString(resultSet, arg);
                    } else if (Array.isArray(arg)) {
                      _parseArray(resultSet, arg);
                    } else if (argType === "object") {
                      _parseObject(resultSet, arg);
                    } else if (argType === "number") {
                      _parseNumber(resultSet, arg);
                    }
                  }
                  function _classNames() {
                    var len = arguments.length;
                    var args = Array(len);
                    for (var i = 0; i < len; i++) {
                      args[i] = arguments[i];
                    }
                    var classSet = new StorageObject();
                    _parseArray(classSet, args);
                    var list = [];
                    for (var k2 in classSet) {
                      if (classSet[k2]) {
                        list.push(k2);
                      }
                    }
                    return list.join(" ");
                  }
                  return _classNames;
                }();
                if (typeof module2 !== "undefined" && module2.exports) {
                  module2.exports = classNames;
                } else if (true) {
                  !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
                    return classNames;
                  }.apply(exports2, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== void 0 && (module2.exports = __WEBPACK_AMD_DEFINE_RESULT__));
                } else {
                }
              })();
            }
          ),
          /***/
          "./node_modules/core-js/es/array/from.js": (
            /*!***********************************************!*\
              !*** ./node_modules/core-js/es/array/from.js ***!
              \***********************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              __webpack_require__(
                /*! ../../modules/es.string.iterator */
                "./node_modules/core-js/modules/es.string.iterator.js"
              );
              __webpack_require__(
                /*! ../../modules/es.array.from */
                "./node_modules/core-js/modules/es.array.from.js"
              );
              var path2 = __webpack_require__(
                /*! ../../internals/path */
                "./node_modules/core-js/internals/path.js"
              );
              module2.exports = path2.Array.from;
            }
          ),
          /***/
          "./node_modules/core-js/internals/a-function.js": (
            /*!******************************************************!*\
              !*** ./node_modules/core-js/internals/a-function.js ***!
              \******************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2) {
              module2.exports = function(it2) {
                if (typeof it2 != "function") {
                  throw TypeError(String(it2) + " is not a function");
                }
                return it2;
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/an-object.js": (
            /*!*****************************************************!*\
              !*** ./node_modules/core-js/internals/an-object.js ***!
              \*****************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var isObject2 = __webpack_require__(
                /*! ../internals/is-object */
                "./node_modules/core-js/internals/is-object.js"
              );
              module2.exports = function(it2) {
                if (!isObject2(it2)) {
                  throw TypeError(String(it2) + " is not an object");
                }
                return it2;
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/array-from.js": (
            /*!******************************************************!*\
              !*** ./node_modules/core-js/internals/array-from.js ***!
              \******************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              var bind = __webpack_require__(
                /*! ../internals/bind-context */
                "./node_modules/core-js/internals/bind-context.js"
              );
              var toObject = __webpack_require__(
                /*! ../internals/to-object */
                "./node_modules/core-js/internals/to-object.js"
              );
              var callWithSafeIterationClosing = __webpack_require__(
                /*! ../internals/call-with-safe-iteration-closing */
                "./node_modules/core-js/internals/call-with-safe-iteration-closing.js"
              );
              var isArrayIteratorMethod = __webpack_require__(
                /*! ../internals/is-array-iterator-method */
                "./node_modules/core-js/internals/is-array-iterator-method.js"
              );
              var toLength = __webpack_require__(
                /*! ../internals/to-length */
                "./node_modules/core-js/internals/to-length.js"
              );
              var createProperty = __webpack_require__(
                /*! ../internals/create-property */
                "./node_modules/core-js/internals/create-property.js"
              );
              var getIteratorMethod = __webpack_require__(
                /*! ../internals/get-iterator-method */
                "./node_modules/core-js/internals/get-iterator-method.js"
              );
              module2.exports = function from(arrayLike) {
                var O = toObject(arrayLike);
                var C2 = typeof this == "function" ? this : Array;
                var argumentsLength = arguments.length;
                var mapfn = argumentsLength > 1 ? arguments[1] : void 0;
                var mapping = mapfn !== void 0;
                var index2 = 0;
                var iteratorMethod = getIteratorMethod(O);
                var length3, result, step, iterator;
                if (mapping)
                  mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : void 0, 2);
                if (iteratorMethod != void 0 && !(C2 == Array && isArrayIteratorMethod(iteratorMethod))) {
                  iterator = iteratorMethod.call(O);
                  result = new C2();
                  for (; !(step = iterator.next()).done; index2++) {
                    createProperty(
                      result,
                      index2,
                      mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index2], true) : step.value
                    );
                  }
                } else {
                  length3 = toLength(O.length);
                  result = new C2(length3);
                  for (; length3 > index2; index2++) {
                    createProperty(result, index2, mapping ? mapfn(O[index2], index2) : O[index2]);
                  }
                }
                result.length = index2;
                return result;
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/array-includes.js": (
            /*!**********************************************************!*\
              !*** ./node_modules/core-js/internals/array-includes.js ***!
              \**********************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var toIndexedObject = __webpack_require__(
                /*! ../internals/to-indexed-object */
                "./node_modules/core-js/internals/to-indexed-object.js"
              );
              var toLength = __webpack_require__(
                /*! ../internals/to-length */
                "./node_modules/core-js/internals/to-length.js"
              );
              var toAbsoluteIndex = __webpack_require__(
                /*! ../internals/to-absolute-index */
                "./node_modules/core-js/internals/to-absolute-index.js"
              );
              module2.exports = function(IS_INCLUDES) {
                return function($this, el, fromIndex) {
                  var O = toIndexedObject($this);
                  var length3 = toLength(O.length);
                  var index2 = toAbsoluteIndex(fromIndex, length3);
                  var value;
                  if (IS_INCLUDES && el != el)
                    while (length3 > index2) {
                      value = O[index2++];
                      if (value != value)
                        return true;
                    }
                  else
                    for (; length3 > index2; index2++)
                      if (IS_INCLUDES || index2 in O) {
                        if (O[index2] === el)
                          return IS_INCLUDES || index2 || 0;
                      }
                  return !IS_INCLUDES && -1;
                };
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/bind-context.js": (
            /*!********************************************************!*\
              !*** ./node_modules/core-js/internals/bind-context.js ***!
              \********************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var aFunction = __webpack_require__(
                /*! ../internals/a-function */
                "./node_modules/core-js/internals/a-function.js"
              );
              module2.exports = function(fn, that, length3) {
                aFunction(fn);
                if (that === void 0)
                  return fn;
                switch (length3) {
                  case 0:
                    return function() {
                      return fn.call(that);
                    };
                  case 1:
                    return function(a2) {
                      return fn.call(that, a2);
                    };
                  case 2:
                    return function(a2, b) {
                      return fn.call(that, a2, b);
                    };
                  case 3:
                    return function(a2, b, c4) {
                      return fn.call(that, a2, b, c4);
                    };
                }
                return function() {
                  return fn.apply(that, arguments);
                };
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/call-with-safe-iteration-closing.js": (
            /*!****************************************************************************!*\
              !*** ./node_modules/core-js/internals/call-with-safe-iteration-closing.js ***!
              \****************************************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var anObject = __webpack_require__(
                /*! ../internals/an-object */
                "./node_modules/core-js/internals/an-object.js"
              );
              module2.exports = function(iterator, fn, value, ENTRIES) {
                try {
                  return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
                } catch (error) {
                  var returnMethod = iterator["return"];
                  if (returnMethod !== void 0)
                    anObject(returnMethod.call(iterator));
                  throw error;
                }
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/check-correctness-of-iteration.js": (
            /*!**************************************************************************!*\
              !*** ./node_modules/core-js/internals/check-correctness-of-iteration.js ***!
              \**************************************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var wellKnownSymbol = __webpack_require__(
                /*! ../internals/well-known-symbol */
                "./node_modules/core-js/internals/well-known-symbol.js"
              );
              var ITERATOR = wellKnownSymbol("iterator");
              var SAFE_CLOSING = false;
              try {
                var called = 0;
                var iteratorWithReturn = {
                  next: function() {
                    return { done: !!called++ };
                  },
                  "return": function() {
                    SAFE_CLOSING = true;
                  }
                };
                iteratorWithReturn[ITERATOR] = function() {
                  return this;
                };
                Array.from(iteratorWithReturn, function() {
                  throw 2;
                });
              } catch (error) {
              }
              module2.exports = function(exec, SKIP_CLOSING) {
                if (!SKIP_CLOSING && !SAFE_CLOSING)
                  return false;
                var ITERATION_SUPPORT = false;
                try {
                  var object = {};
                  object[ITERATOR] = function() {
                    return {
                      next: function() {
                        return { done: ITERATION_SUPPORT = true };
                      }
                    };
                  };
                  exec(object);
                } catch (error) {
                }
                return ITERATION_SUPPORT;
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/classof-raw.js": (
            /*!*******************************************************!*\
              !*** ./node_modules/core-js/internals/classof-raw.js ***!
              \*******************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2) {
              var toString = {}.toString;
              module2.exports = function(it2) {
                return toString.call(it2).slice(8, -1);
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/classof.js": (
            /*!***************************************************!*\
              !*** ./node_modules/core-js/internals/classof.js ***!
              \***************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var classofRaw = __webpack_require__(
                /*! ../internals/classof-raw */
                "./node_modules/core-js/internals/classof-raw.js"
              );
              var wellKnownSymbol = __webpack_require__(
                /*! ../internals/well-known-symbol */
                "./node_modules/core-js/internals/well-known-symbol.js"
              );
              var TO_STRING_TAG = wellKnownSymbol("toStringTag");
              var CORRECT_ARGUMENTS = classofRaw(function() {
                return arguments;
              }()) == "Arguments";
              var tryGet = function(it2, key) {
                try {
                  return it2[key];
                } catch (error) {
                }
              };
              module2.exports = function(it2) {
                var O, tag, result;
                return it2 === void 0 ? "Undefined" : it2 === null ? "Null" : typeof (tag = tryGet(O = Object(it2), TO_STRING_TAG)) == "string" ? tag : CORRECT_ARGUMENTS ? classofRaw(O) : (result = classofRaw(O)) == "Object" && typeof O.callee == "function" ? "Arguments" : result;
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/copy-constructor-properties.js": (
            /*!***********************************************************************!*\
              !*** ./node_modules/core-js/internals/copy-constructor-properties.js ***!
              \***********************************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var has = __webpack_require__(
                /*! ../internals/has */
                "./node_modules/core-js/internals/has.js"
              );
              var ownKeys = __webpack_require__(
                /*! ../internals/own-keys */
                "./node_modules/core-js/internals/own-keys.js"
              );
              var getOwnPropertyDescriptorModule = __webpack_require__(
                /*! ../internals/object-get-own-property-descriptor */
                "./node_modules/core-js/internals/object-get-own-property-descriptor.js"
              );
              var definePropertyModule = __webpack_require__(
                /*! ../internals/object-define-property */
                "./node_modules/core-js/internals/object-define-property.js"
              );
              module2.exports = function(target, source) {
                var keys = ownKeys(source);
                var defineProperty = definePropertyModule.f;
                var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
                for (var i = 0; i < keys.length; i++) {
                  var key = keys[i];
                  if (!has(target, key))
                    defineProperty(target, key, getOwnPropertyDescriptor(source, key));
                }
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/correct-prototype-getter.js": (
            /*!********************************************************************!*\
              !*** ./node_modules/core-js/internals/correct-prototype-getter.js ***!
              \********************************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var fails = __webpack_require__(
                /*! ../internals/fails */
                "./node_modules/core-js/internals/fails.js"
              );
              module2.exports = !fails(function() {
                function F() {
                }
                F.prototype.constructor = null;
                return Object.getPrototypeOf(new F()) !== F.prototype;
              });
            }
          ),
          /***/
          "./node_modules/core-js/internals/create-iterator-constructor.js": (
            /*!***********************************************************************!*\
              !*** ./node_modules/core-js/internals/create-iterator-constructor.js ***!
              \***********************************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              var IteratorPrototype = __webpack_require__(
                /*! ../internals/iterators-core */
                "./node_modules/core-js/internals/iterators-core.js"
              ).IteratorPrototype;
              var create3 = __webpack_require__(
                /*! ../internals/object-create */
                "./node_modules/core-js/internals/object-create.js"
              );
              var createPropertyDescriptor = __webpack_require__(
                /*! ../internals/create-property-descriptor */
                "./node_modules/core-js/internals/create-property-descriptor.js"
              );
              var setToStringTag = __webpack_require__(
                /*! ../internals/set-to-string-tag */
                "./node_modules/core-js/internals/set-to-string-tag.js"
              );
              var Iterators = __webpack_require__(
                /*! ../internals/iterators */
                "./node_modules/core-js/internals/iterators.js"
              );
              var returnThis = function() {
                return this;
              };
              module2.exports = function(IteratorConstructor, NAME, next) {
                var TO_STRING_TAG = NAME + " Iterator";
                IteratorConstructor.prototype = create3(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
                setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
                Iterators[TO_STRING_TAG] = returnThis;
                return IteratorConstructor;
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/create-property-descriptor.js": (
            /*!**********************************************************************!*\
              !*** ./node_modules/core-js/internals/create-property-descriptor.js ***!
              \**********************************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2) {
              module2.exports = function(bitmap, value) {
                return {
                  enumerable: !(bitmap & 1),
                  configurable: !(bitmap & 2),
                  writable: !(bitmap & 4),
                  value
                };
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/create-property.js": (
            /*!***********************************************************!*\
              !*** ./node_modules/core-js/internals/create-property.js ***!
              \***********************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              var toPrimitive = __webpack_require__(
                /*! ../internals/to-primitive */
                "./node_modules/core-js/internals/to-primitive.js"
              );
              var definePropertyModule = __webpack_require__(
                /*! ../internals/object-define-property */
                "./node_modules/core-js/internals/object-define-property.js"
              );
              var createPropertyDescriptor = __webpack_require__(
                /*! ../internals/create-property-descriptor */
                "./node_modules/core-js/internals/create-property-descriptor.js"
              );
              module2.exports = function(object, key, value) {
                var propertyKey = toPrimitive(key);
                if (propertyKey in object)
                  definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
                else
                  object[propertyKey] = value;
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/define-iterator.js": (
            /*!***********************************************************!*\
              !*** ./node_modules/core-js/internals/define-iterator.js ***!
              \***********************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              var $ = __webpack_require__(
                /*! ../internals/export */
                "./node_modules/core-js/internals/export.js"
              );
              var createIteratorConstructor = __webpack_require__(
                /*! ../internals/create-iterator-constructor */
                "./node_modules/core-js/internals/create-iterator-constructor.js"
              );
              var getPrototypeOf = __webpack_require__(
                /*! ../internals/object-get-prototype-of */
                "./node_modules/core-js/internals/object-get-prototype-of.js"
              );
              var setPrototypeOf = __webpack_require__(
                /*! ../internals/object-set-prototype-of */
                "./node_modules/core-js/internals/object-set-prototype-of.js"
              );
              var setToStringTag = __webpack_require__(
                /*! ../internals/set-to-string-tag */
                "./node_modules/core-js/internals/set-to-string-tag.js"
              );
              var hide = __webpack_require__(
                /*! ../internals/hide */
                "./node_modules/core-js/internals/hide.js"
              );
              var redefine = __webpack_require__(
                /*! ../internals/redefine */
                "./node_modules/core-js/internals/redefine.js"
              );
              var wellKnownSymbol = __webpack_require__(
                /*! ../internals/well-known-symbol */
                "./node_modules/core-js/internals/well-known-symbol.js"
              );
              var IS_PURE = __webpack_require__(
                /*! ../internals/is-pure */
                "./node_modules/core-js/internals/is-pure.js"
              );
              var Iterators = __webpack_require__(
                /*! ../internals/iterators */
                "./node_modules/core-js/internals/iterators.js"
              );
              var IteratorsCore = __webpack_require__(
                /*! ../internals/iterators-core */
                "./node_modules/core-js/internals/iterators-core.js"
              );
              var IteratorPrototype = IteratorsCore.IteratorPrototype;
              var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
              var ITERATOR = wellKnownSymbol("iterator");
              var KEYS = "keys";
              var VALUES = "values";
              var ENTRIES = "entries";
              var returnThis = function() {
                return this;
              };
              module2.exports = function(Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
                createIteratorConstructor(IteratorConstructor, NAME, next);
                var getIterationMethod = function(KIND) {
                  if (KIND === DEFAULT && defaultIterator)
                    return defaultIterator;
                  if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype)
                    return IterablePrototype[KIND];
                  switch (KIND) {
                    case KEYS:
                      return function keys() {
                        return new IteratorConstructor(this, KIND);
                      };
                    case VALUES:
                      return function values2() {
                        return new IteratorConstructor(this, KIND);
                      };
                    case ENTRIES:
                      return function entries() {
                        return new IteratorConstructor(this, KIND);
                      };
                  }
                  return function() {
                    return new IteratorConstructor(this);
                  };
                };
                var TO_STRING_TAG = NAME + " Iterator";
                var INCORRECT_VALUES_NAME = false;
                var IterablePrototype = Iterable.prototype;
                var nativeIterator = IterablePrototype[ITERATOR] || IterablePrototype["@@iterator"] || DEFAULT && IterablePrototype[DEFAULT];
                var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
                var anyNativeIterator = NAME == "Array" ? IterablePrototype.entries || nativeIterator : nativeIterator;
                var CurrentIteratorPrototype, methods, KEY;
                if (anyNativeIterator) {
                  CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
                  if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
                    if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
                      if (setPrototypeOf) {
                        setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
                      } else if (typeof CurrentIteratorPrototype[ITERATOR] != "function") {
                        hide(CurrentIteratorPrototype, ITERATOR, returnThis);
                      }
                    }
                    setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
                    if (IS_PURE)
                      Iterators[TO_STRING_TAG] = returnThis;
                  }
                }
                if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
                  INCORRECT_VALUES_NAME = true;
                  defaultIterator = function values2() {
                    return nativeIterator.call(this);
                  };
                }
                if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
                  hide(IterablePrototype, ITERATOR, defaultIterator);
                }
                Iterators[NAME] = defaultIterator;
                if (DEFAULT) {
                  methods = {
                    values: getIterationMethod(VALUES),
                    keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
                    entries: getIterationMethod(ENTRIES)
                  };
                  if (FORCED)
                    for (KEY in methods) {
                      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
                        redefine(IterablePrototype, KEY, methods[KEY]);
                      }
                    }
                  else
                    $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
                }
                return methods;
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/descriptors.js": (
            /*!*******************************************************!*\
              !*** ./node_modules/core-js/internals/descriptors.js ***!
              \*******************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var fails = __webpack_require__(
                /*! ../internals/fails */
                "./node_modules/core-js/internals/fails.js"
              );
              module2.exports = !fails(function() {
                return Object.defineProperty({}, "a", { get: function() {
                  return 7;
                } }).a != 7;
              });
            }
          ),
          /***/
          "./node_modules/core-js/internals/document-create-element.js": (
            /*!*******************************************************************!*\
              !*** ./node_modules/core-js/internals/document-create-element.js ***!
              \*******************************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var global = __webpack_require__(
                /*! ../internals/global */
                "./node_modules/core-js/internals/global.js"
              );
              var isObject2 = __webpack_require__(
                /*! ../internals/is-object */
                "./node_modules/core-js/internals/is-object.js"
              );
              var document2 = global.document;
              var exist = isObject2(document2) && isObject2(document2.createElement);
              module2.exports = function(it2) {
                return exist ? document2.createElement(it2) : {};
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/enum-bug-keys.js": (
            /*!*********************************************************!*\
              !*** ./node_modules/core-js/internals/enum-bug-keys.js ***!
              \*********************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2) {
              module2.exports = [
                "constructor",
                "hasOwnProperty",
                "isPrototypeOf",
                "propertyIsEnumerable",
                "toLocaleString",
                "toString",
                "valueOf"
              ];
            }
          ),
          /***/
          "./node_modules/core-js/internals/export.js": (
            /*!**************************************************!*\
              !*** ./node_modules/core-js/internals/export.js ***!
              \**************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var global = __webpack_require__(
                /*! ../internals/global */
                "./node_modules/core-js/internals/global.js"
              );
              var getOwnPropertyDescriptor = __webpack_require__(
                /*! ../internals/object-get-own-property-descriptor */
                "./node_modules/core-js/internals/object-get-own-property-descriptor.js"
              ).f;
              var hide = __webpack_require__(
                /*! ../internals/hide */
                "./node_modules/core-js/internals/hide.js"
              );
              var redefine = __webpack_require__(
                /*! ../internals/redefine */
                "./node_modules/core-js/internals/redefine.js"
              );
              var setGlobal = __webpack_require__(
                /*! ../internals/set-global */
                "./node_modules/core-js/internals/set-global.js"
              );
              var copyConstructorProperties = __webpack_require__(
                /*! ../internals/copy-constructor-properties */
                "./node_modules/core-js/internals/copy-constructor-properties.js"
              );
              var isForced = __webpack_require__(
                /*! ../internals/is-forced */
                "./node_modules/core-js/internals/is-forced.js"
              );
              module2.exports = function(options, source) {
                var TARGET = options.target;
                var GLOBAL = options.global;
                var STATIC = options.stat;
                var FORCED, target, key, targetProperty, sourceProperty, descriptor;
                if (GLOBAL) {
                  target = global;
                } else if (STATIC) {
                  target = global[TARGET] || setGlobal(TARGET, {});
                } else {
                  target = (global[TARGET] || {}).prototype;
                }
                if (target)
                  for (key in source) {
                    sourceProperty = source[key];
                    if (options.noTargetGet) {
                      descriptor = getOwnPropertyDescriptor(target, key);
                      targetProperty = descriptor && descriptor.value;
                    } else
                      targetProperty = target[key];
                    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced);
                    if (!FORCED && targetProperty !== void 0) {
                      if (typeof sourceProperty === typeof targetProperty)
                        continue;
                      copyConstructorProperties(sourceProperty, targetProperty);
                    }
                    if (options.sham || targetProperty && targetProperty.sham) {
                      hide(sourceProperty, "sham", true);
                    }
                    redefine(target, key, sourceProperty, options);
                  }
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/fails.js": (
            /*!*************************************************!*\
              !*** ./node_modules/core-js/internals/fails.js ***!
              \*************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2) {
              module2.exports = function(exec) {
                try {
                  return !!exec();
                } catch (error) {
                  return true;
                }
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/function-to-string.js": (
            /*!**************************************************************!*\
              !*** ./node_modules/core-js/internals/function-to-string.js ***!
              \**************************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var shared = __webpack_require__(
                /*! ../internals/shared */
                "./node_modules/core-js/internals/shared.js"
              );
              module2.exports = shared("native-function-to-string", Function.toString);
            }
          ),
          /***/
          "./node_modules/core-js/internals/get-iterator-method.js": (
            /*!***************************************************************!*\
              !*** ./node_modules/core-js/internals/get-iterator-method.js ***!
              \***************************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var classof = __webpack_require__(
                /*! ../internals/classof */
                "./node_modules/core-js/internals/classof.js"
              );
              var Iterators = __webpack_require__(
                /*! ../internals/iterators */
                "./node_modules/core-js/internals/iterators.js"
              );
              var wellKnownSymbol = __webpack_require__(
                /*! ../internals/well-known-symbol */
                "./node_modules/core-js/internals/well-known-symbol.js"
              );
              var ITERATOR = wellKnownSymbol("iterator");
              module2.exports = function(it2) {
                if (it2 != void 0)
                  return it2[ITERATOR] || it2["@@iterator"] || Iterators[classof(it2)];
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/global.js": (
            /*!**************************************************!*\
              !*** ./node_modules/core-js/internals/global.js ***!
              \**************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              (function(global) {
                var O = "object";
                var check = function(it2) {
                  return it2 && it2.Math == Math && it2;
                };
                module2.exports = // eslint-disable-next-line no-undef
                check(typeof globalThis == O && globalThis) || check(typeof window == O && window) || check(typeof self == O && self) || check(typeof global == O && global) || // eslint-disable-next-line no-new-func
                Function("return this")();
              }).call(this, __webpack_require__(
                /*! ./../../webpack/buildin/global.js */
                "./node_modules/webpack/buildin/global.js"
              ));
            }
          ),
          /***/
          "./node_modules/core-js/internals/has.js": (
            /*!***********************************************!*\
              !*** ./node_modules/core-js/internals/has.js ***!
              \***********************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2) {
              var hasOwnProperty = {}.hasOwnProperty;
              module2.exports = function(it2, key) {
                return hasOwnProperty.call(it2, key);
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/hidden-keys.js": (
            /*!*******************************************************!*\
              !*** ./node_modules/core-js/internals/hidden-keys.js ***!
              \*******************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2) {
              module2.exports = {};
            }
          ),
          /***/
          "./node_modules/core-js/internals/hide.js": (
            /*!************************************************!*\
              !*** ./node_modules/core-js/internals/hide.js ***!
              \************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var DESCRIPTORS = __webpack_require__(
                /*! ../internals/descriptors */
                "./node_modules/core-js/internals/descriptors.js"
              );
              var definePropertyModule = __webpack_require__(
                /*! ../internals/object-define-property */
                "./node_modules/core-js/internals/object-define-property.js"
              );
              var createPropertyDescriptor = __webpack_require__(
                /*! ../internals/create-property-descriptor */
                "./node_modules/core-js/internals/create-property-descriptor.js"
              );
              module2.exports = DESCRIPTORS ? function(object, key, value) {
                return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
              } : function(object, key, value) {
                object[key] = value;
                return object;
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/html.js": (
            /*!************************************************!*\
              !*** ./node_modules/core-js/internals/html.js ***!
              \************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var global = __webpack_require__(
                /*! ../internals/global */
                "./node_modules/core-js/internals/global.js"
              );
              var document2 = global.document;
              module2.exports = document2 && document2.documentElement;
            }
          ),
          /***/
          "./node_modules/core-js/internals/ie8-dom-define.js": (
            /*!**********************************************************!*\
              !*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
              \**********************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var DESCRIPTORS = __webpack_require__(
                /*! ../internals/descriptors */
                "./node_modules/core-js/internals/descriptors.js"
              );
              var fails = __webpack_require__(
                /*! ../internals/fails */
                "./node_modules/core-js/internals/fails.js"
              );
              var createElement = __webpack_require__(
                /*! ../internals/document-create-element */
                "./node_modules/core-js/internals/document-create-element.js"
              );
              module2.exports = !DESCRIPTORS && !fails(function() {
                return Object.defineProperty(createElement("div"), "a", {
                  get: function() {
                    return 7;
                  }
                }).a != 7;
              });
            }
          ),
          /***/
          "./node_modules/core-js/internals/indexed-object.js": (
            /*!**********************************************************!*\
              !*** ./node_modules/core-js/internals/indexed-object.js ***!
              \**********************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var fails = __webpack_require__(
                /*! ../internals/fails */
                "./node_modules/core-js/internals/fails.js"
              );
              var classof = __webpack_require__(
                /*! ../internals/classof-raw */
                "./node_modules/core-js/internals/classof-raw.js"
              );
              var split = "".split;
              module2.exports = fails(function() {
                return !Object("z").propertyIsEnumerable(0);
              }) ? function(it2) {
                return classof(it2) == "String" ? split.call(it2, "") : Object(it2);
              } : Object;
            }
          ),
          /***/
          "./node_modules/core-js/internals/internal-state.js": (
            /*!**********************************************************!*\
              !*** ./node_modules/core-js/internals/internal-state.js ***!
              \**********************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var NATIVE_WEAK_MAP = __webpack_require__(
                /*! ../internals/native-weak-map */
                "./node_modules/core-js/internals/native-weak-map.js"
              );
              var global = __webpack_require__(
                /*! ../internals/global */
                "./node_modules/core-js/internals/global.js"
              );
              var isObject2 = __webpack_require__(
                /*! ../internals/is-object */
                "./node_modules/core-js/internals/is-object.js"
              );
              var hide = __webpack_require__(
                /*! ../internals/hide */
                "./node_modules/core-js/internals/hide.js"
              );
              var objectHas = __webpack_require__(
                /*! ../internals/has */
                "./node_modules/core-js/internals/has.js"
              );
              var sharedKey = __webpack_require__(
                /*! ../internals/shared-key */
                "./node_modules/core-js/internals/shared-key.js"
              );
              var hiddenKeys = __webpack_require__(
                /*! ../internals/hidden-keys */
                "./node_modules/core-js/internals/hidden-keys.js"
              );
              var WeakMap2 = global.WeakMap;
              var set3, get3, has;
              var enforce = function(it2) {
                return has(it2) ? get3(it2) : set3(it2, {});
              };
              var getterFor = function(TYPE) {
                return function(it2) {
                  var state;
                  if (!isObject2(it2) || (state = get3(it2)).type !== TYPE) {
                    throw TypeError("Incompatible receiver, " + TYPE + " required");
                  }
                  return state;
                };
              };
              if (NATIVE_WEAK_MAP) {
                var store = new WeakMap2();
                var wmget = store.get;
                var wmhas = store.has;
                var wmset = store.set;
                set3 = function(it2, metadata) {
                  wmset.call(store, it2, metadata);
                  return metadata;
                };
                get3 = function(it2) {
                  return wmget.call(store, it2) || {};
                };
                has = function(it2) {
                  return wmhas.call(store, it2);
                };
              } else {
                var STATE = sharedKey("state");
                hiddenKeys[STATE] = true;
                set3 = function(it2, metadata) {
                  hide(it2, STATE, metadata);
                  return metadata;
                };
                get3 = function(it2) {
                  return objectHas(it2, STATE) ? it2[STATE] : {};
                };
                has = function(it2) {
                  return objectHas(it2, STATE);
                };
              }
              module2.exports = {
                set: set3,
                get: get3,
                has,
                enforce,
                getterFor
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/is-array-iterator-method.js": (
            /*!********************************************************************!*\
              !*** ./node_modules/core-js/internals/is-array-iterator-method.js ***!
              \********************************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var wellKnownSymbol = __webpack_require__(
                /*! ../internals/well-known-symbol */
                "./node_modules/core-js/internals/well-known-symbol.js"
              );
              var Iterators = __webpack_require__(
                /*! ../internals/iterators */
                "./node_modules/core-js/internals/iterators.js"
              );
              var ITERATOR = wellKnownSymbol("iterator");
              var ArrayPrototype = Array.prototype;
              module2.exports = function(it2) {
                return it2 !== void 0 && (Iterators.Array === it2 || ArrayPrototype[ITERATOR] === it2);
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/is-forced.js": (
            /*!*****************************************************!*\
              !*** ./node_modules/core-js/internals/is-forced.js ***!
              \*****************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var fails = __webpack_require__(
                /*! ../internals/fails */
                "./node_modules/core-js/internals/fails.js"
              );
              var replacement = /#|\.prototype\./;
              var isForced = function(feature, detection) {
                var value = data[normalize2(feature)];
                return value == POLYFILL ? true : value == NATIVE ? false : typeof detection == "function" ? fails(detection) : !!detection;
              };
              var normalize2 = isForced.normalize = function(string2) {
                return String(string2).replace(replacement, ".").toLowerCase();
              };
              var data = isForced.data = {};
              var NATIVE = isForced.NATIVE = "N";
              var POLYFILL = isForced.POLYFILL = "P";
              module2.exports = isForced;
            }
          ),
          /***/
          "./node_modules/core-js/internals/is-object.js": (
            /*!*****************************************************!*\
              !*** ./node_modules/core-js/internals/is-object.js ***!
              \*****************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2) {
              module2.exports = function(it2) {
                return typeof it2 === "object" ? it2 !== null : typeof it2 === "function";
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/is-pure.js": (
            /*!***************************************************!*\
              !*** ./node_modules/core-js/internals/is-pure.js ***!
              \***************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2) {
              module2.exports = false;
            }
          ),
          /***/
          "./node_modules/core-js/internals/iterators-core.js": (
            /*!**********************************************************!*\
              !*** ./node_modules/core-js/internals/iterators-core.js ***!
              \**********************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              var getPrototypeOf = __webpack_require__(
                /*! ../internals/object-get-prototype-of */
                "./node_modules/core-js/internals/object-get-prototype-of.js"
              );
              var hide = __webpack_require__(
                /*! ../internals/hide */
                "./node_modules/core-js/internals/hide.js"
              );
              var has = __webpack_require__(
                /*! ../internals/has */
                "./node_modules/core-js/internals/has.js"
              );
              var wellKnownSymbol = __webpack_require__(
                /*! ../internals/well-known-symbol */
                "./node_modules/core-js/internals/well-known-symbol.js"
              );
              var IS_PURE = __webpack_require__(
                /*! ../internals/is-pure */
                "./node_modules/core-js/internals/is-pure.js"
              );
              var ITERATOR = wellKnownSymbol("iterator");
              var BUGGY_SAFARI_ITERATORS = false;
              var returnThis = function() {
                return this;
              };
              var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;
              if ([].keys) {
                arrayIterator = [].keys();
                if (!("next" in arrayIterator))
                  BUGGY_SAFARI_ITERATORS = true;
                else {
                  PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
                  if (PrototypeOfArrayIteratorPrototype !== Object.prototype)
                    IteratorPrototype = PrototypeOfArrayIteratorPrototype;
                }
              }
              if (IteratorPrototype == void 0)
                IteratorPrototype = {};
              if (!IS_PURE && !has(IteratorPrototype, ITERATOR))
                hide(IteratorPrototype, ITERATOR, returnThis);
              module2.exports = {
                IteratorPrototype,
                BUGGY_SAFARI_ITERATORS
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/iterators.js": (
            /*!*****************************************************!*\
              !*** ./node_modules/core-js/internals/iterators.js ***!
              \*****************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2) {
              module2.exports = {};
            }
          ),
          /***/
          "./node_modules/core-js/internals/native-symbol.js": (
            /*!*********************************************************!*\
              !*** ./node_modules/core-js/internals/native-symbol.js ***!
              \*********************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var fails = __webpack_require__(
                /*! ../internals/fails */
                "./node_modules/core-js/internals/fails.js"
              );
              module2.exports = !!Object.getOwnPropertySymbols && !fails(function() {
                return !String(Symbol());
              });
            }
          ),
          /***/
          "./node_modules/core-js/internals/native-weak-map.js": (
            /*!***********************************************************!*\
              !*** ./node_modules/core-js/internals/native-weak-map.js ***!
              \***********************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var global = __webpack_require__(
                /*! ../internals/global */
                "./node_modules/core-js/internals/global.js"
              );
              var nativeFunctionToString = __webpack_require__(
                /*! ../internals/function-to-string */
                "./node_modules/core-js/internals/function-to-string.js"
              );
              var WeakMap2 = global.WeakMap;
              module2.exports = typeof WeakMap2 === "function" && /native code/.test(nativeFunctionToString.call(WeakMap2));
            }
          ),
          /***/
          "./node_modules/core-js/internals/object-create.js": (
            /*!*********************************************************!*\
              !*** ./node_modules/core-js/internals/object-create.js ***!
              \*********************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var anObject = __webpack_require__(
                /*! ../internals/an-object */
                "./node_modules/core-js/internals/an-object.js"
              );
              var defineProperties = __webpack_require__(
                /*! ../internals/object-define-properties */
                "./node_modules/core-js/internals/object-define-properties.js"
              );
              var enumBugKeys = __webpack_require__(
                /*! ../internals/enum-bug-keys */
                "./node_modules/core-js/internals/enum-bug-keys.js"
              );
              var hiddenKeys = __webpack_require__(
                /*! ../internals/hidden-keys */
                "./node_modules/core-js/internals/hidden-keys.js"
              );
              var html = __webpack_require__(
                /*! ../internals/html */
                "./node_modules/core-js/internals/html.js"
              );
              var documentCreateElement = __webpack_require__(
                /*! ../internals/document-create-element */
                "./node_modules/core-js/internals/document-create-element.js"
              );
              var sharedKey = __webpack_require__(
                /*! ../internals/shared-key */
                "./node_modules/core-js/internals/shared-key.js"
              );
              var IE_PROTO = sharedKey("IE_PROTO");
              var PROTOTYPE = "prototype";
              var Empty = function() {
              };
              var createDict = function() {
                var iframe = documentCreateElement("iframe");
                var length3 = enumBugKeys.length;
                var lt = "<";
                var script = "script";
                var gt = ">";
                var js = "java" + script + ":";
                var iframeDocument;
                iframe.style.display = "none";
                html.appendChild(iframe);
                iframe.src = String(js);
                iframeDocument = iframe.contentWindow.document;
                iframeDocument.open();
                iframeDocument.write(lt + script + gt + "document.F=Object" + lt + "/" + script + gt);
                iframeDocument.close();
                createDict = iframeDocument.F;
                while (length3--)
                  delete createDict[PROTOTYPE][enumBugKeys[length3]];
                return createDict();
              };
              module2.exports = Object.create || function create3(O, Properties) {
                var result;
                if (O !== null) {
                  Empty[PROTOTYPE] = anObject(O);
                  result = new Empty();
                  Empty[PROTOTYPE] = null;
                  result[IE_PROTO] = O;
                } else
                  result = createDict();
                return Properties === void 0 ? result : defineProperties(result, Properties);
              };
              hiddenKeys[IE_PROTO] = true;
            }
          ),
          /***/
          "./node_modules/core-js/internals/object-define-properties.js": (
            /*!********************************************************************!*\
              !*** ./node_modules/core-js/internals/object-define-properties.js ***!
              \********************************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var DESCRIPTORS = __webpack_require__(
                /*! ../internals/descriptors */
                "./node_modules/core-js/internals/descriptors.js"
              );
              var definePropertyModule = __webpack_require__(
                /*! ../internals/object-define-property */
                "./node_modules/core-js/internals/object-define-property.js"
              );
              var anObject = __webpack_require__(
                /*! ../internals/an-object */
                "./node_modules/core-js/internals/an-object.js"
              );
              var objectKeys = __webpack_require__(
                /*! ../internals/object-keys */
                "./node_modules/core-js/internals/object-keys.js"
              );
              module2.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
                anObject(O);
                var keys = objectKeys(Properties);
                var length3 = keys.length;
                var i = 0;
                var key;
                while (length3 > i)
                  definePropertyModule.f(O, key = keys[i++], Properties[key]);
                return O;
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/object-define-property.js": (
            /*!******************************************************************!*\
              !*** ./node_modules/core-js/internals/object-define-property.js ***!
              \******************************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var DESCRIPTORS = __webpack_require__(
                /*! ../internals/descriptors */
                "./node_modules/core-js/internals/descriptors.js"
              );
              var IE8_DOM_DEFINE = __webpack_require__(
                /*! ../internals/ie8-dom-define */
                "./node_modules/core-js/internals/ie8-dom-define.js"
              );
              var anObject = __webpack_require__(
                /*! ../internals/an-object */
                "./node_modules/core-js/internals/an-object.js"
              );
              var toPrimitive = __webpack_require__(
                /*! ../internals/to-primitive */
                "./node_modules/core-js/internals/to-primitive.js"
              );
              var nativeDefineProperty = Object.defineProperty;
              exports2.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
                anObject(O);
                P = toPrimitive(P, true);
                anObject(Attributes);
                if (IE8_DOM_DEFINE)
                  try {
                    return nativeDefineProperty(O, P, Attributes);
                  } catch (error) {
                  }
                if ("get" in Attributes || "set" in Attributes)
                  throw TypeError("Accessors not supported");
                if ("value" in Attributes)
                  O[P] = Attributes.value;
                return O;
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/object-get-own-property-descriptor.js": (
            /*!******************************************************************************!*\
              !*** ./node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
              \******************************************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var DESCRIPTORS = __webpack_require__(
                /*! ../internals/descriptors */
                "./node_modules/core-js/internals/descriptors.js"
              );
              var propertyIsEnumerableModule = __webpack_require__(
                /*! ../internals/object-property-is-enumerable */
                "./node_modules/core-js/internals/object-property-is-enumerable.js"
              );
              var createPropertyDescriptor = __webpack_require__(
                /*! ../internals/create-property-descriptor */
                "./node_modules/core-js/internals/create-property-descriptor.js"
              );
              var toIndexedObject = __webpack_require__(
                /*! ../internals/to-indexed-object */
                "./node_modules/core-js/internals/to-indexed-object.js"
              );
              var toPrimitive = __webpack_require__(
                /*! ../internals/to-primitive */
                "./node_modules/core-js/internals/to-primitive.js"
              );
              var has = __webpack_require__(
                /*! ../internals/has */
                "./node_modules/core-js/internals/has.js"
              );
              var IE8_DOM_DEFINE = __webpack_require__(
                /*! ../internals/ie8-dom-define */
                "./node_modules/core-js/internals/ie8-dom-define.js"
              );
              var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
              exports2.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
                O = toIndexedObject(O);
                P = toPrimitive(P, true);
                if (IE8_DOM_DEFINE)
                  try {
                    return nativeGetOwnPropertyDescriptor(O, P);
                  } catch (error) {
                  }
                if (has(O, P))
                  return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/object-get-own-property-names.js": (
            /*!*************************************************************************!*\
              !*** ./node_modules/core-js/internals/object-get-own-property-names.js ***!
              \*************************************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var internalObjectKeys = __webpack_require__(
                /*! ../internals/object-keys-internal */
                "./node_modules/core-js/internals/object-keys-internal.js"
              );
              var enumBugKeys = __webpack_require__(
                /*! ../internals/enum-bug-keys */
                "./node_modules/core-js/internals/enum-bug-keys.js"
              );
              var hiddenKeys = enumBugKeys.concat("length", "prototype");
              exports2.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
                return internalObjectKeys(O, hiddenKeys);
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/object-get-own-property-symbols.js": (
            /*!***************************************************************************!*\
              !*** ./node_modules/core-js/internals/object-get-own-property-symbols.js ***!
              \***************************************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2) {
              exports2.f = Object.getOwnPropertySymbols;
            }
          ),
          /***/
          "./node_modules/core-js/internals/object-get-prototype-of.js": (
            /*!*******************************************************************!*\
              !*** ./node_modules/core-js/internals/object-get-prototype-of.js ***!
              \*******************************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var has = __webpack_require__(
                /*! ../internals/has */
                "./node_modules/core-js/internals/has.js"
              );
              var toObject = __webpack_require__(
                /*! ../internals/to-object */
                "./node_modules/core-js/internals/to-object.js"
              );
              var sharedKey = __webpack_require__(
                /*! ../internals/shared-key */
                "./node_modules/core-js/internals/shared-key.js"
              );
              var CORRECT_PROTOTYPE_GETTER = __webpack_require__(
                /*! ../internals/correct-prototype-getter */
                "./node_modules/core-js/internals/correct-prototype-getter.js"
              );
              var IE_PROTO = sharedKey("IE_PROTO");
              var ObjectPrototype = Object.prototype;
              module2.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function(O) {
                O = toObject(O);
                if (has(O, IE_PROTO))
                  return O[IE_PROTO];
                if (typeof O.constructor == "function" && O instanceof O.constructor) {
                  return O.constructor.prototype;
                }
                return O instanceof Object ? ObjectPrototype : null;
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/object-keys-internal.js": (
            /*!****************************************************************!*\
              !*** ./node_modules/core-js/internals/object-keys-internal.js ***!
              \****************************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var has = __webpack_require__(
                /*! ../internals/has */
                "./node_modules/core-js/internals/has.js"
              );
              var toIndexedObject = __webpack_require__(
                /*! ../internals/to-indexed-object */
                "./node_modules/core-js/internals/to-indexed-object.js"
              );
              var arrayIncludes = __webpack_require__(
                /*! ../internals/array-includes */
                "./node_modules/core-js/internals/array-includes.js"
              );
              var hiddenKeys = __webpack_require__(
                /*! ../internals/hidden-keys */
                "./node_modules/core-js/internals/hidden-keys.js"
              );
              var arrayIndexOf = arrayIncludes(false);
              module2.exports = function(object, names) {
                var O = toIndexedObject(object);
                var i = 0;
                var result = [];
                var key;
                for (key in O)
                  !has(hiddenKeys, key) && has(O, key) && result.push(key);
                while (names.length > i)
                  if (has(O, key = names[i++])) {
                    ~arrayIndexOf(result, key) || result.push(key);
                  }
                return result;
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/object-keys.js": (
            /*!*******************************************************!*\
              !*** ./node_modules/core-js/internals/object-keys.js ***!
              \*******************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var internalObjectKeys = __webpack_require__(
                /*! ../internals/object-keys-internal */
                "./node_modules/core-js/internals/object-keys-internal.js"
              );
              var enumBugKeys = __webpack_require__(
                /*! ../internals/enum-bug-keys */
                "./node_modules/core-js/internals/enum-bug-keys.js"
              );
              module2.exports = Object.keys || function keys(O) {
                return internalObjectKeys(O, enumBugKeys);
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/object-property-is-enumerable.js": (
            /*!*************************************************************************!*\
              !*** ./node_modules/core-js/internals/object-property-is-enumerable.js ***!
              \*************************************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
              var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
              var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);
              exports2.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
                var descriptor = getOwnPropertyDescriptor(this, V);
                return !!descriptor && descriptor.enumerable;
              } : nativePropertyIsEnumerable;
            }
          ),
          /***/
          "./node_modules/core-js/internals/object-set-prototype-of.js": (
            /*!*******************************************************************!*\
              !*** ./node_modules/core-js/internals/object-set-prototype-of.js ***!
              \*******************************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var validateSetPrototypeOfArguments = __webpack_require__(
                /*! ../internals/validate-set-prototype-of-arguments */
                "./node_modules/core-js/internals/validate-set-prototype-of-arguments.js"
              );
              module2.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
                var correctSetter = false;
                var test = {};
                var setter;
                try {
                  setter = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set;
                  setter.call(test, []);
                  correctSetter = test instanceof Array;
                } catch (error) {
                }
                return function setPrototypeOf(O, proto) {
                  validateSetPrototypeOfArguments(O, proto);
                  if (correctSetter)
                    setter.call(O, proto);
                  else
                    O.__proto__ = proto;
                  return O;
                };
              }() : void 0);
            }
          ),
          /***/
          "./node_modules/core-js/internals/own-keys.js": (
            /*!****************************************************!*\
              !*** ./node_modules/core-js/internals/own-keys.js ***!
              \****************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var global = __webpack_require__(
                /*! ../internals/global */
                "./node_modules/core-js/internals/global.js"
              );
              var getOwnPropertyNamesModule = __webpack_require__(
                /*! ../internals/object-get-own-property-names */
                "./node_modules/core-js/internals/object-get-own-property-names.js"
              );
              var getOwnPropertySymbolsModule = __webpack_require__(
                /*! ../internals/object-get-own-property-symbols */
                "./node_modules/core-js/internals/object-get-own-property-symbols.js"
              );
              var anObject = __webpack_require__(
                /*! ../internals/an-object */
                "./node_modules/core-js/internals/an-object.js"
              );
              var Reflect2 = global.Reflect;
              module2.exports = Reflect2 && Reflect2.ownKeys || function ownKeys(it2) {
                var keys = getOwnPropertyNamesModule.f(anObject(it2));
                var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
                return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it2)) : keys;
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/path.js": (
            /*!************************************************!*\
              !*** ./node_modules/core-js/internals/path.js ***!
              \************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              module2.exports = __webpack_require__(
                /*! ../internals/global */
                "./node_modules/core-js/internals/global.js"
              );
            }
          ),
          /***/
          "./node_modules/core-js/internals/redefine.js": (
            /*!****************************************************!*\
              !*** ./node_modules/core-js/internals/redefine.js ***!
              \****************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var global = __webpack_require__(
                /*! ../internals/global */
                "./node_modules/core-js/internals/global.js"
              );
              var shared = __webpack_require__(
                /*! ../internals/shared */
                "./node_modules/core-js/internals/shared.js"
              );
              var hide = __webpack_require__(
                /*! ../internals/hide */
                "./node_modules/core-js/internals/hide.js"
              );
              var has = __webpack_require__(
                /*! ../internals/has */
                "./node_modules/core-js/internals/has.js"
              );
              var setGlobal = __webpack_require__(
                /*! ../internals/set-global */
                "./node_modules/core-js/internals/set-global.js"
              );
              var nativeFunctionToString = __webpack_require__(
                /*! ../internals/function-to-string */
                "./node_modules/core-js/internals/function-to-string.js"
              );
              var InternalStateModule = __webpack_require__(
                /*! ../internals/internal-state */
                "./node_modules/core-js/internals/internal-state.js"
              );
              var getInternalState = InternalStateModule.get;
              var enforceInternalState = InternalStateModule.enforce;
              var TEMPLATE = String(nativeFunctionToString).split("toString");
              shared("inspectSource", function(it2) {
                return nativeFunctionToString.call(it2);
              });
              (module2.exports = function(O, key, value, options) {
                var unsafe = options ? !!options.unsafe : false;
                var simple = options ? !!options.enumerable : false;
                var noTargetGet = options ? !!options.noTargetGet : false;
                if (typeof value == "function") {
                  if (typeof key == "string" && !has(value, "name"))
                    hide(value, "name", key);
                  enforceInternalState(value).source = TEMPLATE.join(typeof key == "string" ? key : "");
                }
                if (O === global) {
                  if (simple)
                    O[key] = value;
                  else
                    setGlobal(key, value);
                  return;
                } else if (!unsafe) {
                  delete O[key];
                } else if (!noTargetGet && O[key]) {
                  simple = true;
                }
                if (simple)
                  O[key] = value;
                else
                  hide(O, key, value);
              })(Function.prototype, "toString", function toString() {
                return typeof this == "function" && getInternalState(this).source || nativeFunctionToString.call(this);
              });
            }
          ),
          /***/
          "./node_modules/core-js/internals/require-object-coercible.js": (
            /*!********************************************************************!*\
              !*** ./node_modules/core-js/internals/require-object-coercible.js ***!
              \********************************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2) {
              module2.exports = function(it2) {
                if (it2 == void 0)
                  throw TypeError("Can't call method on " + it2);
                return it2;
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/set-global.js": (
            /*!******************************************************!*\
              !*** ./node_modules/core-js/internals/set-global.js ***!
              \******************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var global = __webpack_require__(
                /*! ../internals/global */
                "./node_modules/core-js/internals/global.js"
              );
              var hide = __webpack_require__(
                /*! ../internals/hide */
                "./node_modules/core-js/internals/hide.js"
              );
              module2.exports = function(key, value) {
                try {
                  hide(global, key, value);
                } catch (error) {
                  global[key] = value;
                }
                return value;
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/set-to-string-tag.js": (
            /*!*************************************************************!*\
              !*** ./node_modules/core-js/internals/set-to-string-tag.js ***!
              \*************************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var defineProperty = __webpack_require__(
                /*! ../internals/object-define-property */
                "./node_modules/core-js/internals/object-define-property.js"
              ).f;
              var has = __webpack_require__(
                /*! ../internals/has */
                "./node_modules/core-js/internals/has.js"
              );
              var wellKnownSymbol = __webpack_require__(
                /*! ../internals/well-known-symbol */
                "./node_modules/core-js/internals/well-known-symbol.js"
              );
              var TO_STRING_TAG = wellKnownSymbol("toStringTag");
              module2.exports = function(it2, TAG, STATIC) {
                if (it2 && !has(it2 = STATIC ? it2 : it2.prototype, TO_STRING_TAG)) {
                  defineProperty(it2, TO_STRING_TAG, { configurable: true, value: TAG });
                }
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/shared-key.js": (
            /*!******************************************************!*\
              !*** ./node_modules/core-js/internals/shared-key.js ***!
              \******************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var shared = __webpack_require__(
                /*! ../internals/shared */
                "./node_modules/core-js/internals/shared.js"
              );
              var uid = __webpack_require__(
                /*! ../internals/uid */
                "./node_modules/core-js/internals/uid.js"
              );
              var keys = shared("keys");
              module2.exports = function(key) {
                return keys[key] || (keys[key] = uid(key));
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/shared.js": (
            /*!**************************************************!*\
              !*** ./node_modules/core-js/internals/shared.js ***!
              \**************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var global = __webpack_require__(
                /*! ../internals/global */
                "./node_modules/core-js/internals/global.js"
              );
              var setGlobal = __webpack_require__(
                /*! ../internals/set-global */
                "./node_modules/core-js/internals/set-global.js"
              );
              var IS_PURE = __webpack_require__(
                /*! ../internals/is-pure */
                "./node_modules/core-js/internals/is-pure.js"
              );
              var SHARED = "__core-js_shared__";
              var store = global[SHARED] || setGlobal(SHARED, {});
              (module2.exports = function(key, value) {
                return store[key] || (store[key] = value !== void 0 ? value : {});
              })("versions", []).push({
                version: "3.1.3",
                mode: IS_PURE ? "pure" : "global",
                copyright: "\xA9 2019 Denis Pushkarev (zloirock.ru)"
              });
            }
          ),
          /***/
          "./node_modules/core-js/internals/string-at.js": (
            /*!*****************************************************!*\
              !*** ./node_modules/core-js/internals/string-at.js ***!
              \*****************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var toInteger = __webpack_require__(
                /*! ../internals/to-integer */
                "./node_modules/core-js/internals/to-integer.js"
              );
              var requireObjectCoercible = __webpack_require__(
                /*! ../internals/require-object-coercible */
                "./node_modules/core-js/internals/require-object-coercible.js"
              );
              module2.exports = function(that, pos, CONVERT_TO_STRING) {
                var S = String(requireObjectCoercible(that));
                var position2 = toInteger(pos);
                var size = S.length;
                var first2, second3;
                if (position2 < 0 || position2 >= size)
                  return CONVERT_TO_STRING ? "" : void 0;
                first2 = S.charCodeAt(position2);
                return first2 < 55296 || first2 > 56319 || position2 + 1 === size || (second3 = S.charCodeAt(position2 + 1)) < 56320 || second3 > 57343 ? CONVERT_TO_STRING ? S.charAt(position2) : first2 : CONVERT_TO_STRING ? S.slice(position2, position2 + 2) : (first2 - 55296 << 10) + (second3 - 56320) + 65536;
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/to-absolute-index.js": (
            /*!*************************************************************!*\
              !*** ./node_modules/core-js/internals/to-absolute-index.js ***!
              \*************************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var toInteger = __webpack_require__(
                /*! ../internals/to-integer */
                "./node_modules/core-js/internals/to-integer.js"
              );
              var max3 = Math.max;
              var min4 = Math.min;
              module2.exports = function(index2, length3) {
                var integer = toInteger(index2);
                return integer < 0 ? max3(integer + length3, 0) : min4(integer, length3);
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/to-indexed-object.js": (
            /*!*************************************************************!*\
              !*** ./node_modules/core-js/internals/to-indexed-object.js ***!
              \*************************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var IndexedObject = __webpack_require__(
                /*! ../internals/indexed-object */
                "./node_modules/core-js/internals/indexed-object.js"
              );
              var requireObjectCoercible = __webpack_require__(
                /*! ../internals/require-object-coercible */
                "./node_modules/core-js/internals/require-object-coercible.js"
              );
              module2.exports = function(it2) {
                return IndexedObject(requireObjectCoercible(it2));
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/to-integer.js": (
            /*!******************************************************!*\
              !*** ./node_modules/core-js/internals/to-integer.js ***!
              \******************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2) {
              var ceil = Math.ceil;
              var floor = Math.floor;
              module2.exports = function(argument) {
                return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/to-length.js": (
            /*!*****************************************************!*\
              !*** ./node_modules/core-js/internals/to-length.js ***!
              \*****************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var toInteger = __webpack_require__(
                /*! ../internals/to-integer */
                "./node_modules/core-js/internals/to-integer.js"
              );
              var min4 = Math.min;
              module2.exports = function(argument) {
                return argument > 0 ? min4(toInteger(argument), 9007199254740991) : 0;
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/to-object.js": (
            /*!*****************************************************!*\
              !*** ./node_modules/core-js/internals/to-object.js ***!
              \*****************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var requireObjectCoercible = __webpack_require__(
                /*! ../internals/require-object-coercible */
                "./node_modules/core-js/internals/require-object-coercible.js"
              );
              module2.exports = function(argument) {
                return Object(requireObjectCoercible(argument));
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/to-primitive.js": (
            /*!********************************************************!*\
              !*** ./node_modules/core-js/internals/to-primitive.js ***!
              \********************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var isObject2 = __webpack_require__(
                /*! ../internals/is-object */
                "./node_modules/core-js/internals/is-object.js"
              );
              module2.exports = function(it2, S) {
                if (!isObject2(it2))
                  return it2;
                var fn, val;
                if (S && typeof (fn = it2.toString) == "function" && !isObject2(val = fn.call(it2)))
                  return val;
                if (typeof (fn = it2.valueOf) == "function" && !isObject2(val = fn.call(it2)))
                  return val;
                if (!S && typeof (fn = it2.toString) == "function" && !isObject2(val = fn.call(it2)))
                  return val;
                throw TypeError("Can't convert object to primitive value");
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/uid.js": (
            /*!***********************************************!*\
              !*** ./node_modules/core-js/internals/uid.js ***!
              \***********************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2) {
              var id2 = 0;
              var postfix = Math.random();
              module2.exports = function(key) {
                return "Symbol(".concat(key === void 0 ? "" : key, ")_", (++id2 + postfix).toString(36));
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/validate-set-prototype-of-arguments.js": (
            /*!*******************************************************************************!*\
              !*** ./node_modules/core-js/internals/validate-set-prototype-of-arguments.js ***!
              \*******************************************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var isObject2 = __webpack_require__(
                /*! ../internals/is-object */
                "./node_modules/core-js/internals/is-object.js"
              );
              var anObject = __webpack_require__(
                /*! ../internals/an-object */
                "./node_modules/core-js/internals/an-object.js"
              );
              module2.exports = function(O, proto) {
                anObject(O);
                if (!isObject2(proto) && proto !== null) {
                  throw TypeError("Can't set " + String(proto) + " as a prototype");
                }
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/well-known-symbol.js": (
            /*!*************************************************************!*\
              !*** ./node_modules/core-js/internals/well-known-symbol.js ***!
              \*************************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var global = __webpack_require__(
                /*! ../internals/global */
                "./node_modules/core-js/internals/global.js"
              );
              var shared = __webpack_require__(
                /*! ../internals/shared */
                "./node_modules/core-js/internals/shared.js"
              );
              var uid = __webpack_require__(
                /*! ../internals/uid */
                "./node_modules/core-js/internals/uid.js"
              );
              var NATIVE_SYMBOL = __webpack_require__(
                /*! ../internals/native-symbol */
                "./node_modules/core-js/internals/native-symbol.js"
              );
              var Symbol3 = global.Symbol;
              var store = shared("wks");
              module2.exports = function(name) {
                return store[name] || (store[name] = NATIVE_SYMBOL && Symbol3[name] || (NATIVE_SYMBOL ? Symbol3 : uid)("Symbol." + name));
              };
            }
          ),
          /***/
          "./node_modules/core-js/modules/es.array.from.js": (
            /*!*******************************************************!*\
              !*** ./node_modules/core-js/modules/es.array.from.js ***!
              \*******************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var $ = __webpack_require__(
                /*! ../internals/export */
                "./node_modules/core-js/internals/export.js"
              );
              var from = __webpack_require__(
                /*! ../internals/array-from */
                "./node_modules/core-js/internals/array-from.js"
              );
              var checkCorrectnessOfIteration = __webpack_require__(
                /*! ../internals/check-correctness-of-iteration */
                "./node_modules/core-js/internals/check-correctness-of-iteration.js"
              );
              var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function(iterable) {
                Array.from(iterable);
              });
              $({ target: "Array", stat: true, forced: INCORRECT_ITERATION }, {
                from
              });
            }
          ),
          /***/
          "./node_modules/core-js/modules/es.string.iterator.js": (
            /*!************************************************************!*\
              !*** ./node_modules/core-js/modules/es.string.iterator.js ***!
              \************************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              var codePointAt = __webpack_require__(
                /*! ../internals/string-at */
                "./node_modules/core-js/internals/string-at.js"
              );
              var InternalStateModule = __webpack_require__(
                /*! ../internals/internal-state */
                "./node_modules/core-js/internals/internal-state.js"
              );
              var defineIterator = __webpack_require__(
                /*! ../internals/define-iterator */
                "./node_modules/core-js/internals/define-iterator.js"
              );
              var STRING_ITERATOR = "String Iterator";
              var setInternalState = InternalStateModule.set;
              var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);
              defineIterator(String, "String", function(iterated) {
                setInternalState(this, {
                  type: STRING_ITERATOR,
                  string: String(iterated),
                  index: 0
                });
              }, function next() {
                var state = getInternalState(this);
                var string2 = state.string;
                var index2 = state.index;
                var point6;
                if (index2 >= string2.length)
                  return { value: void 0, done: true };
                point6 = codePointAt(string2, index2, true);
                state.index += point6.length;
                return { value: point6, done: false };
              });
            }
          ),
          /***/
          "./node_modules/webpack/buildin/global.js": (
            /*!***********************************!*\
              !*** (webpack)/buildin/global.js ***!
              \***********************************/
            /*! no static exports found */
            /***/
            function(module2, exports2) {
              var g;
              g = function() {
                return this;
              }();
              try {
                g = g || Function("return this")() || (1, eval)("this");
              } catch (e) {
                if (typeof window === "object")
                  g = window;
              }
              module2.exports = g;
            }
          ),
          /***/
          "./src/default-attrs.json": (
            /*!********************************!*\
              !*** ./src/default-attrs.json ***!
              \********************************/
            /*! exports provided: xmlns, width, height, viewBox, fill, stroke, stroke-width, stroke-linecap, stroke-linejoin, default */
            /***/
            function(module2) {
              module2.exports = { "xmlns": "http://www.w3.org/2000/svg", "width": 24, "height": 24, "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "stroke-width": 2, "stroke-linecap": "round", "stroke-linejoin": "round" };
            }
          ),
          /***/
          "./src/icon.js": (
            /*!*********************!*\
              !*** ./src/icon.js ***!
              \*********************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              var _extends = Object.assign || function(target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = arguments[i];
                  for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                      target[key] = source[key];
                    }
                  }
                }
                return target;
              };
              var _createClass = function() {
                function defineProperties(target, props) {
                  for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor)
                      descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                  }
                }
                return function(Constructor, protoProps, staticProps) {
                  if (protoProps)
                    defineProperties(Constructor.prototype, protoProps);
                  if (staticProps)
                    defineProperties(Constructor, staticProps);
                  return Constructor;
                };
              }();
              var _dedupe = __webpack_require__(
                /*! classnames/dedupe */
                "./node_modules/classnames/dedupe.js"
              );
              var _dedupe2 = _interopRequireDefault(_dedupe);
              var _defaultAttrs = __webpack_require__(
                /*! ./default-attrs.json */
                "./src/default-attrs.json"
              );
              var _defaultAttrs2 = _interopRequireDefault(_defaultAttrs);
              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }
              function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                  throw new TypeError("Cannot call a class as a function");
                }
              }
              var Icon = function() {
                function Icon2(name, contents) {
                  var tags = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
                  _classCallCheck(this, Icon2);
                  this.name = name;
                  this.contents = contents;
                  this.tags = tags;
                  this.attrs = _extends({}, _defaultAttrs2.default, { class: "feather feather-" + name });
                }
                _createClass(Icon2, [{
                  key: "toSvg",
                  value: function toSvg() {
                    var attrs = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                    var combinedAttrs = _extends({}, this.attrs, attrs, { class: (0, _dedupe2.default)(this.attrs.class, attrs.class) });
                    return "<svg " + attrsToString(combinedAttrs) + ">" + this.contents + "</svg>";
                  }
                  /**
                   * Return string representation of an `Icon`.
                   *
                   * Added for backward compatibility. If old code expects `feather.icons.<name>`
                   * to be a string, `toString()` will get implicitly called.
                   *
                   * @returns {string}
                   */
                }, {
                  key: "toString",
                  value: function toString() {
                    return this.contents;
                  }
                }]);
                return Icon2;
              }();
              function attrsToString(attrs) {
                return Object.keys(attrs).map(function(key) {
                  return key + '="' + attrs[key] + '"';
                }).join(" ");
              }
              exports2.default = Icon;
            }
          ),
          /***/
          "./src/icons.js": (
            /*!**********************!*\
              !*** ./src/icons.js ***!
              \**********************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              var _icon = __webpack_require__(
                /*! ./icon */
                "./src/icon.js"
              );
              var _icon2 = _interopRequireDefault(_icon);
              var _icons = __webpack_require__(
                /*! ../dist/icons.json */
                "./dist/icons.json"
              );
              var _icons2 = _interopRequireDefault(_icons);
              var _tags = __webpack_require__(
                /*! ./tags.json */
                "./src/tags.json"
              );
              var _tags2 = _interopRequireDefault(_tags);
              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }
              exports2.default = Object.keys(_icons2.default).map(function(key) {
                return new _icon2.default(key, _icons2.default[key], _tags2.default[key]);
              }).reduce(function(object, icon) {
                object[icon.name] = icon;
                return object;
              }, {});
            }
          ),
          /***/
          "./src/index.js": (
            /*!**********************!*\
              !*** ./src/index.js ***!
              \**********************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              var _icons = __webpack_require__(
                /*! ./icons */
                "./src/icons.js"
              );
              var _icons2 = _interopRequireDefault(_icons);
              var _toSvg = __webpack_require__(
                /*! ./to-svg */
                "./src/to-svg.js"
              );
              var _toSvg2 = _interopRequireDefault(_toSvg);
              var _replace = __webpack_require__(
                /*! ./replace */
                "./src/replace.js"
              );
              var _replace2 = _interopRequireDefault(_replace);
              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }
              module2.exports = { icons: _icons2.default, toSvg: _toSvg2.default, replace: _replace2.default };
            }
          ),
          /***/
          "./src/replace.js": (
            /*!************************!*\
              !*** ./src/replace.js ***!
              \************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              var _extends = Object.assign || function(target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = arguments[i];
                  for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                      target[key] = source[key];
                    }
                  }
                }
                return target;
              };
              var _dedupe = __webpack_require__(
                /*! classnames/dedupe */
                "./node_modules/classnames/dedupe.js"
              );
              var _dedupe2 = _interopRequireDefault(_dedupe);
              var _icons = __webpack_require__(
                /*! ./icons */
                "./src/icons.js"
              );
              var _icons2 = _interopRequireDefault(_icons);
              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }
              function replace() {
                var attrs = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                if (typeof document === "undefined") {
                  throw new Error("`feather.replace()` only works in a browser environment.");
                }
                var elementsToReplace = document.querySelectorAll("[data-feather]");
                Array.from(elementsToReplace).forEach(function(element) {
                  return replaceElement(element, attrs);
                });
              }
              function replaceElement(element) {
                var attrs = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                var elementAttrs = getAttrs(element);
                var name = elementAttrs["data-feather"];
                delete elementAttrs["data-feather"];
                if (_icons2.default[name] === void 0) {
                  console.warn("feather: '" + name + "' is not a valid icon");
                  return;
                }
                var svgString = _icons2.default[name].toSvg(_extends({}, attrs, elementAttrs, { class: (0, _dedupe2.default)(attrs.class, elementAttrs.class) }));
                var svgDocument = new DOMParser().parseFromString(svgString, "image/svg+xml");
                var svgElement = svgDocument.querySelector("svg");
                element.parentNode.replaceChild(svgElement, element);
              }
              function getAttrs(element) {
                return Array.from(element.attributes).reduce(function(attrs, attr) {
                  attrs[attr.name] = attr.value;
                  return attrs;
                }, {});
              }
              exports2.default = replace;
            }
          ),
          /***/
          "./src/tags.json": (
            /*!***********************!*\
              !*** ./src/tags.json ***!
              \***********************/
            /*! exports provided: activity, airplay, alert-circle, alert-octagon, alert-triangle, align-center, align-justify, align-left, align-right, anchor, archive, at-sign, award, aperture, bar-chart, bar-chart-2, battery, battery-charging, bell, bell-off, bluetooth, book-open, book, bookmark, box, briefcase, calendar, camera, cast, chevron-down, chevron-up, circle, clipboard, clock, cloud-drizzle, cloud-lightning, cloud-rain, cloud-snow, cloud, codepen, codesandbox, code, coffee, columns, command, compass, copy, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, cpu, credit-card, crop, crosshair, database, delete, disc, dollar-sign, droplet, edit, edit-2, edit-3, eye, eye-off, external-link, facebook, fast-forward, figma, file-minus, file-plus, file-text, film, filter, flag, folder-minus, folder-plus, folder, framer, frown, gift, git-branch, git-commit, git-merge, git-pull-request, github, gitlab, globe, hard-drive, hash, headphones, heart, help-circle, hexagon, home, image, inbox, instagram, key, layers, layout, life-buoy, link, link-2, linkedin, list, lock, log-in, log-out, mail, map-pin, map, maximize, maximize-2, meh, menu, message-circle, message-square, mic-off, mic, minimize, minimize-2, minus, monitor, moon, more-horizontal, more-vertical, mouse-pointer, move, music, navigation, navigation-2, octagon, package, paperclip, pause, pause-circle, pen-tool, percent, phone-call, phone-forwarded, phone-incoming, phone-missed, phone-off, phone-outgoing, phone, play, pie-chart, play-circle, plus, plus-circle, plus-square, pocket, power, printer, radio, refresh-cw, refresh-ccw, repeat, rewind, rotate-ccw, rotate-cw, rss, save, scissors, search, send, settings, share-2, shield, shield-off, shopping-bag, shopping-cart, shuffle, skip-back, skip-forward, slack, slash, sliders, smartphone, smile, speaker, star, stop-circle, sun, sunrise, sunset, tablet, tag, target, terminal, thermometer, thumbs-down, thumbs-up, toggle-left, toggle-right, tool, trash, trash-2, triangle, truck, tv, twitch, twitter, type, umbrella, unlock, user-check, user-minus, user-plus, user-x, user, users, video-off, video, voicemail, volume, volume-1, volume-2, volume-x, watch, wifi-off, wifi, wind, x-circle, x-octagon, x-square, x, youtube, zap-off, zap, zoom-in, zoom-out, default */
            /***/
            function(module2) {
              module2.exports = { "activity": ["pulse", "health", "action", "motion"], "airplay": ["stream", "cast", "mirroring"], "alert-circle": ["warning", "alert", "danger"], "alert-octagon": ["warning", "alert", "danger"], "alert-triangle": ["warning", "alert", "danger"], "align-center": ["text alignment", "center"], "align-justify": ["text alignment", "justified"], "align-left": ["text alignment", "left"], "align-right": ["text alignment", "right"], "anchor": [], "archive": ["index", "box"], "at-sign": ["mention", "at", "email", "message"], "award": ["achievement", "badge"], "aperture": ["camera", "photo"], "bar-chart": ["statistics", "diagram", "graph"], "bar-chart-2": ["statistics", "diagram", "graph"], "battery": ["power", "electricity"], "battery-charging": ["power", "electricity"], "bell": ["alarm", "notification", "sound"], "bell-off": ["alarm", "notification", "silent"], "bluetooth": ["wireless"], "book-open": ["read", "library"], "book": ["read", "dictionary", "booklet", "magazine", "library"], "bookmark": ["read", "clip", "marker", "tag"], "box": ["cube"], "briefcase": ["work", "bag", "baggage", "folder"], "calendar": ["date"], "camera": ["photo"], "cast": ["chromecast", "airplay"], "chevron-down": ["expand"], "chevron-up": ["collapse"], "circle": ["off", "zero", "record"], "clipboard": ["copy"], "clock": ["time", "watch", "alarm"], "cloud-drizzle": ["weather", "shower"], "cloud-lightning": ["weather", "bolt"], "cloud-rain": ["weather"], "cloud-snow": ["weather", "blizzard"], "cloud": ["weather"], "codepen": ["logo"], "codesandbox": ["logo"], "code": ["source", "programming"], "coffee": ["drink", "cup", "mug", "tea", "cafe", "hot", "beverage"], "columns": ["layout"], "command": ["keyboard", "cmd", "terminal", "prompt"], "compass": ["navigation", "safari", "travel", "direction"], "copy": ["clone", "duplicate"], "corner-down-left": ["arrow", "return"], "corner-down-right": ["arrow"], "corner-left-down": ["arrow"], "corner-left-up": ["arrow"], "corner-right-down": ["arrow"], "corner-right-up": ["arrow"], "corner-up-left": ["arrow"], "corner-up-right": ["arrow"], "cpu": ["processor", "technology"], "credit-card": ["purchase", "payment", "cc"], "crop": ["photo", "image"], "crosshair": ["aim", "target"], "database": ["storage", "memory"], "delete": ["remove"], "disc": ["album", "cd", "dvd", "music"], "dollar-sign": ["currency", "money", "payment"], "droplet": ["water"], "edit": ["pencil", "change"], "edit-2": ["pencil", "change"], "edit-3": ["pencil", "change"], "eye": ["view", "watch"], "eye-off": ["view", "watch", "hide", "hidden"], "external-link": ["outbound"], "facebook": ["logo", "social"], "fast-forward": ["music"], "figma": ["logo", "design", "tool"], "file-minus": ["delete", "remove", "erase"], "file-plus": ["add", "create", "new"], "file-text": ["data", "txt", "pdf"], "film": ["movie", "video"], "filter": ["funnel", "hopper"], "flag": ["report"], "folder-minus": ["directory"], "folder-plus": ["directory"], "folder": ["directory"], "framer": ["logo", "design", "tool"], "frown": ["emoji", "face", "bad", "sad", "emotion"], "gift": ["present", "box", "birthday", "party"], "git-branch": ["code", "version control"], "git-commit": ["code", "version control"], "git-merge": ["code", "version control"], "git-pull-request": ["code", "version control"], "github": ["logo", "version control"], "gitlab": ["logo", "version control"], "globe": ["world", "browser", "language", "translate"], "hard-drive": ["computer", "server", "memory", "data"], "hash": ["hashtag", "number", "pound"], "headphones": ["music", "audio", "sound"], "heart": ["like", "love", "emotion"], "help-circle": ["question mark"], "hexagon": ["shape", "node.js", "logo"], "home": ["house", "living"], "image": ["picture"], "inbox": ["email"], "instagram": ["logo", "camera"], "key": ["password", "login", "authentication", "secure"], "layers": ["stack"], "layout": ["window", "webpage"], "life-buoy": ["help", "life ring", "support"], "link": ["chain", "url"], "link-2": ["chain", "url"], "linkedin": ["logo", "social media"], "list": ["options"], "lock": ["security", "password", "secure"], "log-in": ["sign in", "arrow", "enter"], "log-out": ["sign out", "arrow", "exit"], "mail": ["email", "message"], "map-pin": ["location", "navigation", "travel", "marker"], "map": ["location", "navigation", "travel"], "maximize": ["fullscreen"], "maximize-2": ["fullscreen", "arrows", "expand"], "meh": ["emoji", "face", "neutral", "emotion"], "menu": ["bars", "navigation", "hamburger"], "message-circle": ["comment", "chat"], "message-square": ["comment", "chat"], "mic-off": ["record", "sound", "mute"], "mic": ["record", "sound", "listen"], "minimize": ["exit fullscreen", "close"], "minimize-2": ["exit fullscreen", "arrows", "close"], "minus": ["subtract"], "monitor": ["tv", "screen", "display"], "moon": ["dark", "night"], "more-horizontal": ["ellipsis"], "more-vertical": ["ellipsis"], "mouse-pointer": ["arrow", "cursor"], "move": ["arrows"], "music": ["note"], "navigation": ["location", "travel"], "navigation-2": ["location", "travel"], "octagon": ["stop"], "package": ["box", "container"], "paperclip": ["attachment"], "pause": ["music", "stop"], "pause-circle": ["music", "audio", "stop"], "pen-tool": ["vector", "drawing"], "percent": ["discount"], "phone-call": ["ring"], "phone-forwarded": ["call"], "phone-incoming": ["call"], "phone-missed": ["call"], "phone-off": ["call", "mute"], "phone-outgoing": ["call"], "phone": ["call"], "play": ["music", "start"], "pie-chart": ["statistics", "diagram"], "play-circle": ["music", "start"], "plus": ["add", "new"], "plus-circle": ["add", "new"], "plus-square": ["add", "new"], "pocket": ["logo", "save"], "power": ["on", "off"], "printer": ["fax", "office", "device"], "radio": ["signal"], "refresh-cw": ["synchronise", "arrows"], "refresh-ccw": ["arrows"], "repeat": ["loop", "arrows"], "rewind": ["music"], "rotate-ccw": ["arrow"], "rotate-cw": ["arrow"], "rss": ["feed", "subscribe"], "save": ["floppy disk"], "scissors": ["cut"], "search": ["find", "magnifier", "magnifying glass"], "send": ["message", "mail", "email", "paper airplane", "paper aeroplane"], "settings": ["cog", "edit", "gear", "preferences"], "share-2": ["network", "connections"], "shield": ["security", "secure"], "shield-off": ["security", "insecure"], "shopping-bag": ["ecommerce", "cart", "purchase", "store"], "shopping-cart": ["ecommerce", "cart", "purchase", "store"], "shuffle": ["music"], "skip-back": ["music"], "skip-forward": ["music"], "slack": ["logo"], "slash": ["ban", "no"], "sliders": ["settings", "controls"], "smartphone": ["cellphone", "device"], "smile": ["emoji", "face", "happy", "good", "emotion"], "speaker": ["audio", "music"], "star": ["bookmark", "favorite", "like"], "stop-circle": ["media", "music"], "sun": ["brightness", "weather", "light"], "sunrise": ["weather", "time", "morning", "day"], "sunset": ["weather", "time", "evening", "night"], "tablet": ["device"], "tag": ["label"], "target": ["logo", "bullseye"], "terminal": ["code", "command line", "prompt"], "thermometer": ["temperature", "celsius", "fahrenheit", "weather"], "thumbs-down": ["dislike", "bad", "emotion"], "thumbs-up": ["like", "good", "emotion"], "toggle-left": ["on", "off", "switch"], "toggle-right": ["on", "off", "switch"], "tool": ["settings", "spanner"], "trash": ["garbage", "delete", "remove", "bin"], "trash-2": ["garbage", "delete", "remove", "bin"], "triangle": ["delta"], "truck": ["delivery", "van", "shipping", "transport", "lorry"], "tv": ["television", "stream"], "twitch": ["logo"], "twitter": ["logo", "social"], "type": ["text"], "umbrella": ["rain", "weather"], "unlock": ["security"], "user-check": ["followed", "subscribed"], "user-minus": ["delete", "remove", "unfollow", "unsubscribe"], "user-plus": ["new", "add", "create", "follow", "subscribe"], "user-x": ["delete", "remove", "unfollow", "unsubscribe", "unavailable"], "user": ["person", "account"], "users": ["group"], "video-off": ["camera", "movie", "film"], "video": ["camera", "movie", "film"], "voicemail": ["phone"], "volume": ["music", "sound", "mute"], "volume-1": ["music", "sound"], "volume-2": ["music", "sound"], "volume-x": ["music", "sound", "mute"], "watch": ["clock", "time"], "wifi-off": ["disabled"], "wifi": ["connection", "signal", "wireless"], "wind": ["weather", "air"], "x-circle": ["cancel", "close", "delete", "remove", "times", "clear"], "x-octagon": ["delete", "stop", "alert", "warning", "times", "clear"], "x-square": ["cancel", "close", "delete", "remove", "times", "clear"], "x": ["cancel", "close", "delete", "remove", "times", "clear"], "youtube": ["logo", "video", "play"], "zap-off": ["flash", "camera", "lightning"], "zap": ["flash", "camera", "lightning"], "zoom-in": ["magnifying glass"], "zoom-out": ["magnifying glass"] };
            }
          ),
          /***/
          "./src/to-svg.js": (
            /*!***********************!*\
              !*** ./src/to-svg.js ***!
              \***********************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              var _icons = __webpack_require__(
                /*! ./icons */
                "./src/icons.js"
              );
              var _icons2 = _interopRequireDefault(_icons);
              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }
              function toSvg(name) {
                var attrs = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                console.warn("feather.toSvg() is deprecated. Please use feather.icons[name].toSvg() instead.");
                if (!name) {
                  throw new Error("The required `key` (icon name) parameter is missing.");
                }
                if (!_icons2.default[name]) {
                  throw new Error("No icon matching '" + name + "'. See the complete list of icons at https://feathericons.com");
                }
                return _icons2.default[name].toSvg(attrs);
              }
              exports2.default = toSvg;
            }
          ),
          /***/
          0: (
            /*!**************************************************!*\
              !*** multi core-js/es/array/from ./src/index.js ***!
              \**************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              __webpack_require__(
                /*! core-js/es/array/from */
                "./node_modules/core-js/es/array/from.js"
              );
              module2.exports = __webpack_require__(
                /*! /home/runner/work/feather/feather/src/index.js */
                "./src/index.js"
              );
            }
          )
          /******/
        })
      );
    });
  }
});

// src/index.ts
var import_feather_icons = __toESM(require_feather());

// node_modules/upd8/lib/upd8.js
var views = /* @__PURE__ */ new Map();
var initialized = false;
var visibleViews = /* @__PURE__ */ new Set();
var cre8 = (allViews, _config = {}) => {
  if (!_config.viewUpdated) {
    _config.viewUpdated = (_view) => {
    };
  }
  if (!_config.didUpdate) {
    _config.didUpdate = (_state) => {
    };
  }
  const config = _config;
  const initUpd8 = (state, eventHandler) => {
    if (initialized) {
      throw new Error("upd8 may only be initialized once.");
    }
    for (const ViewK of allViews) {
      const view = new ViewK(state, (view2, state2) => {
        config.viewUpdated(view2);
        config.didUpdate(state2);
      });
      if (views.has(view.id)) {
        throw new Error(`View ${view.id} already exists.`);
      }
      views.set(view.id, view);
      view.listen(eventHandler);
    }
    const upd8 = async (state2) => {
      for (const view of views.values()) {
        const visible = view.showing(state2);
        if (visible) {
          if (!visibleViews.has(view.id)) {
            view.show();
            visibleViews.add(view.id);
            view.update(state2);
            view.becameVisible();
          } else {
            view.update(state2);
          }
        } else {
          view.hide();
          visibleViews.delete(view.id);
        }
      }
      config.didUpdate(state2);
    };
    setTimeout(() => upd8(state), 0);
    return upd8;
  };
  initUpd8.imperative = (id2, upd8) => {
    for (const view of views.values()) {
      if (view.id === id2) {
        upd8(view);
        break;
      }
    }
  };
  return initUpd8;
};
var Upd8View = class {
  get id() {
    throw new Error("Upd8View subclasses must define id");
  }
  _upd8_initialized = false;
  get rootElement() {
    return document.getElementById(this.id);
  }
  state;
  _upd8_els = /* @__PURE__ */ new Map();
  _upd8_templates = /* @__PURE__ */ new Map();
  _upd8_eventListeners = /* @__PURE__ */ new Set();
  didUpdate(_view, _state) {
  }
  constructor(state, updated) {
    this.state = state;
    this.didUpdate = updated;
  }
  _upd8_lazyInit() {
    if (!this._upd8_initialized) {
      if (!this.rootElement) {
        throw new Error(`Upd8View element not found: ${this.id}`);
      }
      this._upd8_initElements();
      this.mount();
      this._upd8_initialized = true;
    }
  }
  hide() {
    this.rootElement?.classList.add("hidden");
  }
  show() {
    this._upd8_lazyInit();
    this.rootElement?.classList.remove("hidden");
  }
  internalError(message) {
    this._upd8_lazyInit();
    this.errored(message);
  }
  errored(message) {
  }
  showing(state) {
    return !!this.rootElement;
  }
  update(state) {
    this._upd8_lazyInit();
    this.state = state;
    this.updated();
  }
  internalUpdate() {
    this.updated();
    this.didUpdate(this, this.state);
  }
  dispatchEvent(event) {
    this._upd8_eventListeners.forEach((listener) => listener(event));
  }
  listen(handler) {
    this._upd8_eventListeners.add(handler);
    return () => this._upd8_eventListeners.delete(handler);
  }
  updated() {
  }
  mount() {
    return [];
  }
  becameVisible() {
  }
  template(name) {
    const t = this._upd8_templates.get(name)?.cloneNode(true);
    if (!t) {
      throw new Error(`upd8 template ${name} does not exist.`);
    }
    return t;
  }
  el(id2) {
    let el = this._upd8_els.get(id2);
    if (!el) {
      throw new Error(`ID ${id2} does not exist.`);
    }
    return el;
  }
  eventListener(el, event, handler, selectorOrOptions) {
    let htmlEl;
    if (typeof el === "string") {
      htmlEl = this._upd8_els.get(el);
    } else {
      htmlEl = el;
    }
    let targetSelector = null;
    let useCapture = false;
    if (typeof selectorOrOptions === "string") {
      targetSelector = selectorOrOptions;
    } else if (selectorOrOptions) {
      targetSelector = selectorOrOptions.selector;
      useCapture = !!selectorOrOptions.useCapture;
    }
    const listenedHandler = targetSelector ? (e) => {
      const el2 = e.target;
      const matchedEl = el2.matches(targetSelector) ? el2 : el2.closest(targetSelector);
      if (matchedEl) {
        handler.call(matchedEl, e, matchedEl);
      }
    } : (e) => {
      handler.call(htmlEl, e, htmlEl);
    };
    const events = typeof event === "string" ? [event] : event;
    events.forEach((event2) => {
      htmlEl.addEventListener(event2, listenedHandler, useCapture);
    });
    return () => {
      events.forEach((event2) => {
        htmlEl.removeEventListener(event2, listenedHandler, useCapture);
      });
    };
  }
  findElement(el, selector) {
    let htmlEl;
    const isSel = typeof el === "string";
    if (isSel) {
      htmlEl = this._upd8_els.get(el);
    } else {
      htmlEl = el;
    }
    const raw = htmlEl?.outerHTML;
    if (selector) {
      htmlEl = htmlEl?.querySelector(selector);
    }
    if (!htmlEl) {
      throw new Error(`Couldn't find element ${isSel ? el : ""}${selector ? (isSel ? " " : "") + selector : ""} in ${raw}`);
    }
    return htmlEl;
  }
  _upd8_findElements(el, selector) {
    let rootEl;
    if (typeof el === "string") {
      rootEl = this._upd8_els.get(el);
    } else {
      rootEl = el;
    }
    if (!rootEl) {
      throw new Error(`Couldn't find element ${el}`);
    }
    const raw = rootEl.innerHTML;
    const els = rootEl.querySelectorAll(selector);
    if (!els.length) {
      throw new Error(`Couldn't find element ${el} ${selector} in ${raw}`);
    }
    return Array.from(els);
  }
  setContent(el, value, selector) {
    if (selector) {
      const els = this._upd8_findElements(el, selector);
      for (const el2 of els) {
        this.setContent(el2, value);
      }
    } else {
      const htmlEl = this.findElement(el);
      if (Array.isArray(value)) {
        htmlEl?.replaceChildren(...value);
      } else {
        htmlEl?.replaceChildren(value);
      }
    }
  }
  setData(el, data, selector) {
    const htmlEl = this.findElement(el, selector);
    Object.entries(data).forEach((d) => {
      const [k2, v] = d;
      htmlEl.dataset[k2] = v;
    });
  }
  setAttrs(el, data, selector) {
    const htmlEl = this.findElement(el, selector);
    Object.entries(data).forEach((d) => {
      const [k2, v] = d;
      if (typeof v === "boolean") {
        if (v) {
          htmlEl.setAttribute(k2, "");
        } else {
          htmlEl.removeAttribute(k2);
        }
      } else {
        htmlEl.setAttribute(k2, v);
      }
    });
  }
  _upd8_initElements() {
    this.rootElement?.querySelectorAll("[id]").forEach((el) => {
      this._upd8_els.set(el.id, el);
    });
    this.rootElement?.querySelectorAll("[data-template]").forEach((el) => {
      const e = el;
      this._upd8_templates.set(e.dataset["template"], e);
      delete e.dataset["template"];
      e.parentNode?.removeChild(e);
    });
  }
};

// node_modules/d3-array/src/ascending.js
function ascending(a2, b) {
  return a2 == null || b == null ? NaN : a2 < b ? -1 : a2 > b ? 1 : a2 >= b ? 0 : NaN;
}

// node_modules/d3-array/src/descending.js
function descending(a2, b) {
  return a2 == null || b == null ? NaN : b < a2 ? -1 : b > a2 ? 1 : b >= a2 ? 0 : NaN;
}

// node_modules/d3-array/src/bisector.js
function bisector(f) {
  let compare1, compare2, delta;
  if (f.length !== 2) {
    compare1 = ascending;
    compare2 = (d, x2) => ascending(f(d), x2);
    delta = (d, x2) => f(d) - x2;
  } else {
    compare1 = f === ascending || f === descending ? f : zero;
    compare2 = f;
    delta = f;
  }
  function left2(a2, x2, lo = 0, hi = a2.length) {
    if (lo < hi) {
      if (compare1(x2, x2) !== 0)
        return hi;
      do {
        const mid2 = lo + hi >>> 1;
        if (compare2(a2[mid2], x2) < 0)
          lo = mid2 + 1;
        else
          hi = mid2;
      } while (lo < hi);
    }
    return lo;
  }
  function right2(a2, x2, lo = 0, hi = a2.length) {
    if (lo < hi) {
      if (compare1(x2, x2) !== 0)
        return hi;
      do {
        const mid2 = lo + hi >>> 1;
        if (compare2(a2[mid2], x2) <= 0)
          lo = mid2 + 1;
        else
          hi = mid2;
      } while (lo < hi);
    }
    return lo;
  }
  function center2(a2, x2, lo = 0, hi = a2.length) {
    const i = left2(a2, x2, lo, hi - 1);
    return i > lo && delta(a2[i - 1], x2) > -delta(a2[i], x2) ? i - 1 : i;
  }
  return { left: left2, center: center2, right: right2 };
}
function zero() {
  return 0;
}

// node_modules/d3-array/src/number.js
function number(x2) {
  return x2 === null ? NaN : +x2;
}
function* numbers(values2, valueof2) {
  if (valueof2 === void 0) {
    for (let value of values2) {
      if (value != null && (value = +value) >= value) {
        yield value;
      }
    }
  } else {
    let index2 = -1;
    for (let value of values2) {
      if ((value = valueof2(value, ++index2, values2)) != null && (value = +value) >= value) {
        yield value;
      }
    }
  }
}

// node_modules/d3-array/src/bisect.js
var ascendingBisect = bisector(ascending);
var bisectRight = ascendingBisect.right;
var bisectLeft = ascendingBisect.left;
var bisectCenter = bisector(number).center;
var bisect_default = bisectRight;

// node_modules/d3-array/src/count.js
function count(values2, valueof2) {
  let count2 = 0;
  if (valueof2 === void 0) {
    for (let value of values2) {
      if (value != null && (value = +value) >= value) {
        ++count2;
      }
    }
  } else {
    let index2 = -1;
    for (let value of values2) {
      if ((value = valueof2(value, ++index2, values2)) != null && (value = +value) >= value) {
        ++count2;
      }
    }
  }
  return count2;
}

// node_modules/d3-array/src/cross.js
function length(array2) {
  return array2.length | 0;
}
function empty(length3) {
  return !(length3 > 0);
}
function arrayify(values2) {
  return typeof values2 !== "object" || "length" in values2 ? values2 : Array.from(values2);
}
function reducer(reduce) {
  return (values2) => reduce(...values2);
}
function cross(...values2) {
  const reduce = typeof values2[values2.length - 1] === "function" && reducer(values2.pop());
  values2 = values2.map(arrayify);
  const lengths = values2.map(length);
  const j = values2.length - 1;
  const index2 = new Array(j + 1).fill(0);
  const product = [];
  if (j < 0 || lengths.some(empty))
    return product;
  while (true) {
    product.push(index2.map((j2, i2) => values2[i2][j2]));
    let i = j;
    while (++index2[i] === lengths[i]) {
      if (i === 0)
        return reduce ? product.map(reduce) : product;
      index2[i--] = 0;
    }
  }
}

// node_modules/d3-array/src/cumsum.js
function cumsum(values2, valueof2) {
  var sum2 = 0, index2 = 0;
  return Float64Array.from(values2, valueof2 === void 0 ? (v) => sum2 += +v || 0 : (v) => sum2 += +valueof2(v, index2++, values2) || 0);
}

// node_modules/d3-array/src/variance.js
function variance(values2, valueof2) {
  let count2 = 0;
  let delta;
  let mean2 = 0;
  let sum2 = 0;
  if (valueof2 === void 0) {
    for (let value of values2) {
      if (value != null && (value = +value) >= value) {
        delta = value - mean2;
        mean2 += delta / ++count2;
        sum2 += delta * (value - mean2);
      }
    }
  } else {
    let index2 = -1;
    for (let value of values2) {
      if ((value = valueof2(value, ++index2, values2)) != null && (value = +value) >= value) {
        delta = value - mean2;
        mean2 += delta / ++count2;
        sum2 += delta * (value - mean2);
      }
    }
  }
  if (count2 > 1)
    return sum2 / (count2 - 1);
}

// node_modules/d3-array/src/deviation.js
function deviation(values2, valueof2) {
  const v = variance(values2, valueof2);
  return v ? Math.sqrt(v) : v;
}

// node_modules/d3-array/src/extent.js
function extent(values2, valueof2) {
  let min4;
  let max3;
  if (valueof2 === void 0) {
    for (const value of values2) {
      if (value != null) {
        if (min4 === void 0) {
          if (value >= value)
            min4 = max3 = value;
        } else {
          if (min4 > value)
            min4 = value;
          if (max3 < value)
            max3 = value;
        }
      }
    }
  } else {
    let index2 = -1;
    for (let value of values2) {
      if ((value = valueof2(value, ++index2, values2)) != null) {
        if (min4 === void 0) {
          if (value >= value)
            min4 = max3 = value;
        } else {
          if (min4 > value)
            min4 = value;
          if (max3 < value)
            max3 = value;
        }
      }
    }
  }
  return [min4, max3];
}

// node_modules/d3-array/src/fsum.js
var Adder = class {
  constructor() {
    this._partials = new Float64Array(32);
    this._n = 0;
  }
  add(x2) {
    const p = this._partials;
    let i = 0;
    for (let j = 0; j < this._n && j < 32; j++) {
      const y2 = p[j], hi = x2 + y2, lo = Math.abs(x2) < Math.abs(y2) ? x2 - (hi - y2) : y2 - (hi - x2);
      if (lo)
        p[i++] = lo;
      x2 = hi;
    }
    p[i] = x2;
    this._n = i + 1;
    return this;
  }
  valueOf() {
    const p = this._partials;
    let n = this._n, x2, y2, lo, hi = 0;
    if (n > 0) {
      hi = p[--n];
      while (n > 0) {
        x2 = hi;
        y2 = p[--n];
        hi = x2 + y2;
        lo = y2 - (hi - x2);
        if (lo)
          break;
      }
      if (n > 0 && (lo < 0 && p[n - 1] < 0 || lo > 0 && p[n - 1] > 0)) {
        y2 = lo * 2;
        x2 = hi + y2;
        if (y2 == x2 - hi)
          hi = x2;
      }
    }
    return hi;
  }
};

// node_modules/internmap/src/index.js
var InternMap = class extends Map {
  constructor(entries, key = keyof) {
    super();
    Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: key } });
    if (entries != null)
      for (const [key2, value] of entries)
        this.set(key2, value);
  }
  get(key) {
    return super.get(intern_get(this, key));
  }
  has(key) {
    return super.has(intern_get(this, key));
  }
  set(key, value) {
    return super.set(intern_set(this, key), value);
  }
  delete(key) {
    return super.delete(intern_delete(this, key));
  }
};
var InternSet = class extends Set {
  constructor(values2, key = keyof) {
    super();
    Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: key } });
    if (values2 != null)
      for (const value of values2)
        this.add(value);
  }
  has(value) {
    return super.has(intern_get(this, value));
  }
  add(value) {
    return super.add(intern_set(this, value));
  }
  delete(value) {
    return super.delete(intern_delete(this, value));
  }
};
function intern_get({ _intern, _key }, value) {
  const key = _key(value);
  return _intern.has(key) ? _intern.get(key) : value;
}
function intern_set({ _intern, _key }, value) {
  const key = _key(value);
  if (_intern.has(key))
    return _intern.get(key);
  _intern.set(key, value);
  return value;
}
function intern_delete({ _intern, _key }, value) {
  const key = _key(value);
  if (_intern.has(key)) {
    value = _intern.get(key);
    _intern.delete(key);
  }
  return value;
}
function keyof(value) {
  return value !== null && typeof value === "object" ? value.valueOf() : value;
}

// node_modules/d3-array/src/identity.js
function identity(x2) {
  return x2;
}

// node_modules/d3-array/src/group.js
function group(values2, ...keys) {
  return nest(values2, identity, identity, keys);
}
function rollup(values2, reduce, ...keys) {
  return nest(values2, identity, reduce, keys);
}
function rollups(values2, reduce, ...keys) {
  return nest(values2, Array.from, reduce, keys);
}
function nest(values2, map3, reduce, keys) {
  return function regroup(values3, i) {
    if (i >= keys.length)
      return reduce(values3);
    const groups2 = new InternMap();
    const keyof3 = keys[i++];
    let index2 = -1;
    for (const value of values3) {
      const key = keyof3(value, ++index2, values3);
      const group2 = groups2.get(key);
      if (group2)
        group2.push(value);
      else
        groups2.set(key, [value]);
    }
    for (const [key, values4] of groups2) {
      groups2.set(key, regroup(values4, i));
    }
    return map3(groups2);
  }(values2, 0);
}

// node_modules/d3-array/src/permute.js
function permute(source, keys) {
  return Array.from(keys, (key) => source[key]);
}

// node_modules/d3-array/src/sort.js
function sort(values2, ...F) {
  if (typeof values2[Symbol.iterator] !== "function")
    throw new TypeError("values is not iterable");
  values2 = Array.from(values2);
  let [f] = F;
  if (f && f.length !== 2 || F.length > 1) {
    const index2 = Uint32Array.from(values2, (d, i) => i);
    if (F.length > 1) {
      F = F.map((f2) => values2.map(f2));
      index2.sort((i, j) => {
        for (const f2 of F) {
          const c4 = ascendingDefined(f2[i], f2[j]);
          if (c4)
            return c4;
        }
      });
    } else {
      f = values2.map(f);
      index2.sort((i, j) => ascendingDefined(f[i], f[j]));
    }
    return permute(values2, index2);
  }
  return values2.sort(compareDefined(f));
}
function compareDefined(compare = ascending) {
  if (compare === ascending)
    return ascendingDefined;
  if (typeof compare !== "function")
    throw new TypeError("compare is not a function");
  return (a2, b) => {
    const x2 = compare(a2, b);
    if (x2 || x2 === 0)
      return x2;
    return (compare(b, b) === 0) - (compare(a2, a2) === 0);
  };
}
function ascendingDefined(a2, b) {
  return (a2 == null || !(a2 >= a2)) - (b == null || !(b >= b)) || (a2 < b ? -1 : a2 > b ? 1 : 0);
}

// node_modules/d3-array/src/groupSort.js
function groupSort(values2, reduce, key) {
  return (reduce.length !== 2 ? sort(rollup(values2, reduce, key), ([ak, av], [bk, bv]) => ascending(av, bv) || ascending(ak, bk)) : sort(group(values2, key), ([ak, av], [bk, bv]) => reduce(av, bv) || ascending(ak, bk))).map(([key2]) => key2);
}

// node_modules/d3-array/src/ticks.js
var e10 = Math.sqrt(50);
var e5 = Math.sqrt(10);
var e2 = Math.sqrt(2);
function tickSpec(start2, stop, count2) {
  const step = (stop - start2) / Math.max(0, count2), power = Math.floor(Math.log10(step)), error = step / Math.pow(10, power), factor = error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1;
  let i1, i2, inc;
  if (power < 0) {
    inc = Math.pow(10, -power) / factor;
    i1 = Math.round(start2 * inc);
    i2 = Math.round(stop * inc);
    if (i1 / inc < start2)
      ++i1;
    if (i2 / inc > stop)
      --i2;
    inc = -inc;
  } else {
    inc = Math.pow(10, power) * factor;
    i1 = Math.round(start2 / inc);
    i2 = Math.round(stop / inc);
    if (i1 * inc < start2)
      ++i1;
    if (i2 * inc > stop)
      --i2;
  }
  if (i2 < i1 && 0.5 <= count2 && count2 < 2)
    return tickSpec(start2, stop, count2 * 2);
  return [i1, i2, inc];
}
function ticks(start2, stop, count2) {
  stop = +stop, start2 = +start2, count2 = +count2;
  if (!(count2 > 0))
    return [];
  if (start2 === stop)
    return [start2];
  const reverse2 = stop < start2, [i1, i2, inc] = reverse2 ? tickSpec(stop, start2, count2) : tickSpec(start2, stop, count2);
  if (!(i2 >= i1))
    return [];
  const n = i2 - i1 + 1, ticks2 = new Array(n);
  if (reverse2) {
    if (inc < 0)
      for (let i = 0; i < n; ++i)
        ticks2[i] = (i2 - i) / -inc;
    else
      for (let i = 0; i < n; ++i)
        ticks2[i] = (i2 - i) * inc;
  } else {
    if (inc < 0)
      for (let i = 0; i < n; ++i)
        ticks2[i] = (i1 + i) / -inc;
    else
      for (let i = 0; i < n; ++i)
        ticks2[i] = (i1 + i) * inc;
  }
  return ticks2;
}
function tickIncrement(start2, stop, count2) {
  stop = +stop, start2 = +start2, count2 = +count2;
  return tickSpec(start2, stop, count2)[2];
}
function tickStep(start2, stop, count2) {
  stop = +stop, start2 = +start2, count2 = +count2;
  const reverse2 = stop < start2, inc = reverse2 ? tickIncrement(stop, start2, count2) : tickIncrement(start2, stop, count2);
  return (reverse2 ? -1 : 1) * (inc < 0 ? 1 / -inc : inc);
}

// node_modules/d3-array/src/threshold/sturges.js
function thresholdSturges(values2) {
  return Math.max(1, Math.ceil(Math.log(count(values2)) / Math.LN2) + 1);
}

// node_modules/d3-array/src/max.js
function max(values2, valueof2) {
  let max3;
  if (valueof2 === void 0) {
    for (const value of values2) {
      if (value != null && (max3 < value || max3 === void 0 && value >= value)) {
        max3 = value;
      }
    }
  } else {
    let index2 = -1;
    for (let value of values2) {
      if ((value = valueof2(value, ++index2, values2)) != null && (max3 < value || max3 === void 0 && value >= value)) {
        max3 = value;
      }
    }
  }
  return max3;
}

// node_modules/d3-array/src/maxIndex.js
function maxIndex(values2, valueof2) {
  let max3;
  let maxIndex2 = -1;
  let index2 = -1;
  if (valueof2 === void 0) {
    for (const value of values2) {
      ++index2;
      if (value != null && (max3 < value || max3 === void 0 && value >= value)) {
        max3 = value, maxIndex2 = index2;
      }
    }
  } else {
    for (let value of values2) {
      if ((value = valueof2(value, ++index2, values2)) != null && (max3 < value || max3 === void 0 && value >= value)) {
        max3 = value, maxIndex2 = index2;
      }
    }
  }
  return maxIndex2;
}

// node_modules/d3-array/src/min.js
function min(values2, valueof2) {
  let min4;
  if (valueof2 === void 0) {
    for (const value of values2) {
      if (value != null && (min4 > value || min4 === void 0 && value >= value)) {
        min4 = value;
      }
    }
  } else {
    let index2 = -1;
    for (let value of values2) {
      if ((value = valueof2(value, ++index2, values2)) != null && (min4 > value || min4 === void 0 && value >= value)) {
        min4 = value;
      }
    }
  }
  return min4;
}

// node_modules/d3-array/src/minIndex.js
function minIndex(values2, valueof2) {
  let min4;
  let minIndex2 = -1;
  let index2 = -1;
  if (valueof2 === void 0) {
    for (const value of values2) {
      ++index2;
      if (value != null && (min4 > value || min4 === void 0 && value >= value)) {
        min4 = value, minIndex2 = index2;
      }
    }
  } else {
    for (let value of values2) {
      if ((value = valueof2(value, ++index2, values2)) != null && (min4 > value || min4 === void 0 && value >= value)) {
        min4 = value, minIndex2 = index2;
      }
    }
  }
  return minIndex2;
}

// node_modules/d3-array/src/quickselect.js
function quickselect(array2, k2, left2 = 0, right2 = Infinity, compare) {
  k2 = Math.floor(k2);
  left2 = Math.floor(Math.max(0, left2));
  right2 = Math.floor(Math.min(array2.length - 1, right2));
  if (!(left2 <= k2 && k2 <= right2))
    return array2;
  compare = compare === void 0 ? ascendingDefined : compareDefined(compare);
  while (right2 > left2) {
    if (right2 - left2 > 600) {
      const n = right2 - left2 + 1;
      const m = k2 - left2 + 1;
      const z = Math.log(n);
      const s2 = 0.5 * Math.exp(2 * z / 3);
      const sd = 0.5 * Math.sqrt(z * s2 * (n - s2) / n) * (m - n / 2 < 0 ? -1 : 1);
      const newLeft = Math.max(left2, Math.floor(k2 - m * s2 / n + sd));
      const newRight = Math.min(right2, Math.floor(k2 + (n - m) * s2 / n + sd));
      quickselect(array2, k2, newLeft, newRight, compare);
    }
    const t = array2[k2];
    let i = left2;
    let j = right2;
    swap(array2, left2, k2);
    if (compare(array2[right2], t) > 0)
      swap(array2, left2, right2);
    while (i < j) {
      swap(array2, i, j), ++i, --j;
      while (compare(array2[i], t) < 0)
        ++i;
      while (compare(array2[j], t) > 0)
        --j;
    }
    if (compare(array2[left2], t) === 0)
      swap(array2, left2, j);
    else
      ++j, swap(array2, j, right2);
    if (j <= k2)
      left2 = j + 1;
    if (k2 <= j)
      right2 = j - 1;
  }
  return array2;
}
function swap(array2, i, j) {
  const t = array2[i];
  array2[i] = array2[j];
  array2[j] = t;
}

// node_modules/d3-array/src/greatest.js
function greatest(values2, compare = ascending) {
  let max3;
  let defined2 = false;
  if (compare.length === 1) {
    let maxValue;
    for (const element of values2) {
      const value = compare(element);
      if (defined2 ? ascending(value, maxValue) > 0 : ascending(value, value) === 0) {
        max3 = element;
        maxValue = value;
        defined2 = true;
      }
    }
  } else {
    for (const value of values2) {
      if (defined2 ? compare(value, max3) > 0 : compare(value, value) === 0) {
        max3 = value;
        defined2 = true;
      }
    }
  }
  return max3;
}

// node_modules/d3-array/src/quantile.js
function quantile(values2, p, valueof2) {
  values2 = Float64Array.from(numbers(values2, valueof2));
  if (!(n = values2.length) || isNaN(p = +p))
    return;
  if (p <= 0 || n < 2)
    return min(values2);
  if (p >= 1)
    return max(values2);
  var n, i = (n - 1) * p, i0 = Math.floor(i), value0 = max(quickselect(values2, i0).subarray(0, i0 + 1)), value1 = min(values2.subarray(i0 + 1));
  return value0 + (value1 - value0) * (i - i0);
}
function quantileSorted(values2, p, valueof2 = number) {
  if (!(n = values2.length) || isNaN(p = +p))
    return;
  if (p <= 0 || n < 2)
    return +valueof2(values2[0], 0, values2);
  if (p >= 1)
    return +valueof2(values2[n - 1], n - 1, values2);
  var n, i = (n - 1) * p, i0 = Math.floor(i), value0 = +valueof2(values2[i0], i0, values2), value1 = +valueof2(values2[i0 + 1], i0 + 1, values2);
  return value0 + (value1 - value0) * (i - i0);
}

// node_modules/d3-array/src/threshold/freedmanDiaconis.js
function thresholdFreedmanDiaconis(values2, min4, max3) {
  const c4 = count(values2), d = quantile(values2, 0.75) - quantile(values2, 0.25);
  return c4 && d ? Math.ceil((max3 - min4) / (2 * d * Math.pow(c4, -1 / 3))) : 1;
}

// node_modules/d3-array/src/threshold/scott.js
function thresholdScott(values2, min4, max3) {
  const c4 = count(values2), d = deviation(values2);
  return c4 && d ? Math.ceil((max3 - min4) * Math.cbrt(c4) / (3.49 * d)) : 1;
}

// node_modules/d3-array/src/mean.js
function mean(values2, valueof2) {
  let count2 = 0;
  let sum2 = 0;
  if (valueof2 === void 0) {
    for (let value of values2) {
      if (value != null && (value = +value) >= value) {
        ++count2, sum2 += value;
      }
    }
  } else {
    let index2 = -1;
    for (let value of values2) {
      if ((value = valueof2(value, ++index2, values2)) != null && (value = +value) >= value) {
        ++count2, sum2 += value;
      }
    }
  }
  if (count2)
    return sum2 / count2;
}

// node_modules/d3-array/src/median.js
function median(values2, valueof2) {
  return quantile(values2, 0.5, valueof2);
}

// node_modules/d3-array/src/merge.js
function* flatten(arrays) {
  for (const array2 of arrays) {
    yield* array2;
  }
}
function merge(arrays) {
  return Array.from(flatten(arrays));
}

// node_modules/d3-array/src/mode.js
function mode(values2, valueof2) {
  const counts = new InternMap();
  if (valueof2 === void 0) {
    for (let value of values2) {
      if (value != null && value >= value) {
        counts.set(value, (counts.get(value) || 0) + 1);
      }
    }
  } else {
    let index2 = -1;
    for (let value of values2) {
      if ((value = valueof2(value, ++index2, values2)) != null && value >= value) {
        counts.set(value, (counts.get(value) || 0) + 1);
      }
    }
  }
  let modeValue;
  let modeCount = 0;
  for (const [value, count2] of counts) {
    if (count2 > modeCount) {
      modeCount = count2;
      modeValue = value;
    }
  }
  return modeValue;
}

// node_modules/d3-array/src/pairs.js
function pairs(values2, pairof = pair) {
  const pairs2 = [];
  let previous;
  let first2 = false;
  for (const value of values2) {
    if (first2)
      pairs2.push(pairof(previous, value));
    previous = value;
    first2 = true;
  }
  return pairs2;
}
function pair(a2, b) {
  return [a2, b];
}

// node_modules/d3-array/src/range.js
function range(start2, stop, step) {
  start2 = +start2, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start2, start2 = 0, 1) : n < 3 ? 1 : +step;
  var i = -1, n = Math.max(0, Math.ceil((stop - start2) / step)) | 0, range3 = new Array(n);
  while (++i < n) {
    range3[i] = start2 + i * step;
  }
  return range3;
}

// node_modules/d3-array/src/sum.js
function sum(values2, valueof2) {
  let sum2 = 0;
  if (valueof2 === void 0) {
    for (let value of values2) {
      if (value = +value) {
        sum2 += value;
      }
    }
  } else {
    let index2 = -1;
    for (let value of values2) {
      if (value = +valueof2(value, ++index2, values2)) {
        sum2 += value;
      }
    }
  }
  return sum2;
}

// node_modules/d3-array/src/reverse.js
function reverse(values2) {
  if (typeof values2[Symbol.iterator] !== "function")
    throw new TypeError("values is not iterable");
  return Array.from(values2).reverse();
}

// node_modules/d3-axis/src/identity.js
function identity_default(x2) {
  return x2;
}

// node_modules/d3-axis/src/axis.js
var top = 1;
var right = 2;
var bottom = 3;
var left = 4;
var epsilon = 1e-6;
function translateX(x2) {
  return "translate(" + x2 + ",0)";
}
function translateY(y2) {
  return "translate(0," + y2 + ")";
}
function number2(scale) {
  return (d) => +scale(d);
}
function center(scale, offset2) {
  offset2 = Math.max(0, scale.bandwidth() - offset2 * 2) / 2;
  if (scale.round())
    offset2 = Math.round(offset2);
  return (d) => +scale(d) + offset2;
}
function entering() {
  return !this.__axis;
}
function axis(orient, scale) {
  var tickArguments = [], tickValues = null, tickFormat2 = null, tickSizeInner = 6, tickSizeOuter = 6, tickPadding = 3, offset2 = typeof window !== "undefined" && window.devicePixelRatio > 1 ? 0 : 0.5, k2 = orient === top || orient === left ? -1 : 1, x2 = orient === left || orient === right ? "x" : "y", transform2 = orient === top || orient === bottom ? translateX : translateY;
  function axis2(context) {
    var values2 = tickValues == null ? scale.ticks ? scale.ticks.apply(scale, tickArguments) : scale.domain() : tickValues, format3 = tickFormat2 == null ? scale.tickFormat ? scale.tickFormat.apply(scale, tickArguments) : identity_default : tickFormat2, spacing = Math.max(tickSizeInner, 0) + tickPadding, range3 = scale.range(), range0 = +range3[0] + offset2, range1 = +range3[range3.length - 1] + offset2, position2 = (scale.bandwidth ? center : number2)(scale.copy(), offset2), selection2 = context.selection ? context.selection() : context, path2 = selection2.selectAll(".domain").data([null]), tick = selection2.selectAll(".tick").data(values2, scale).order(), tickExit = tick.exit(), tickEnter = tick.enter().append("g").attr("class", "tick"), line2 = tick.select("line"), text2 = tick.select("text");
    path2 = path2.merge(path2.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor"));
    tick = tick.merge(tickEnter);
    line2 = line2.merge(tickEnter.append("line").attr("stroke", "currentColor").attr(x2 + "2", k2 * tickSizeInner));
    text2 = text2.merge(tickEnter.append("text").attr("fill", "currentColor").attr(x2, k2 * spacing).attr("dy", orient === top ? "0em" : orient === bottom ? "0.71em" : "0.32em"));
    if (context !== selection2) {
      path2 = path2.transition(context);
      tick = tick.transition(context);
      line2 = line2.transition(context);
      text2 = text2.transition(context);
      tickExit = tickExit.transition(context).attr("opacity", epsilon).attr("transform", function(d) {
        return isFinite(d = position2(d)) ? transform2(d + offset2) : this.getAttribute("transform");
      });
      tickEnter.attr("opacity", epsilon).attr("transform", function(d) {
        var p = this.parentNode.__axis;
        return transform2((p && isFinite(p = p(d)) ? p : position2(d)) + offset2);
      });
    }
    tickExit.remove();
    path2.attr("d", orient === left || orient === right ? tickSizeOuter ? "M" + k2 * tickSizeOuter + "," + range0 + "H" + offset2 + "V" + range1 + "H" + k2 * tickSizeOuter : "M" + offset2 + "," + range0 + "V" + range1 : tickSizeOuter ? "M" + range0 + "," + k2 * tickSizeOuter + "V" + offset2 + "H" + range1 + "V" + k2 * tickSizeOuter : "M" + range0 + "," + offset2 + "H" + range1);
    tick.attr("opacity", 1).attr("transform", function(d) {
      return transform2(position2(d) + offset2);
    });
    line2.attr(x2 + "2", k2 * tickSizeInner);
    text2.attr(x2, k2 * spacing).text(format3);
    selection2.filter(entering).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", orient === right ? "start" : orient === left ? "end" : "middle");
    selection2.each(function() {
      this.__axis = position2;
    });
  }
  axis2.scale = function(_) {
    return arguments.length ? (scale = _, axis2) : scale;
  };
  axis2.ticks = function() {
    return tickArguments = Array.from(arguments), axis2;
  };
  axis2.tickArguments = function(_) {
    return arguments.length ? (tickArguments = _ == null ? [] : Array.from(_), axis2) : tickArguments.slice();
  };
  axis2.tickValues = function(_) {
    return arguments.length ? (tickValues = _ == null ? null : Array.from(_), axis2) : tickValues && tickValues.slice();
  };
  axis2.tickFormat = function(_) {
    return arguments.length ? (tickFormat2 = _, axis2) : tickFormat2;
  };
  axis2.tickSize = function(_) {
    return arguments.length ? (tickSizeInner = tickSizeOuter = +_, axis2) : tickSizeInner;
  };
  axis2.tickSizeInner = function(_) {
    return arguments.length ? (tickSizeInner = +_, axis2) : tickSizeInner;
  };
  axis2.tickSizeOuter = function(_) {
    return arguments.length ? (tickSizeOuter = +_, axis2) : tickSizeOuter;
  };
  axis2.tickPadding = function(_) {
    return arguments.length ? (tickPadding = +_, axis2) : tickPadding;
  };
  axis2.offset = function(_) {
    return arguments.length ? (offset2 = +_, axis2) : offset2;
  };
  return axis2;
}
function axisBottom(scale) {
  return axis(bottom, scale);
}

// node_modules/d3-dispatch/src/dispatch.js
var noop = { value: () => {
} };
function dispatch() {
  for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
    if (!(t = arguments[i] + "") || t in _ || /[\s.]/.test(t))
      throw new Error("illegal type: " + t);
    _[t] = [];
  }
  return new Dispatch(_);
}
function Dispatch(_) {
  this._ = _;
}
function parseTypenames(typenames, types) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0)
      name = t.slice(i + 1), t = t.slice(0, i);
    if (t && !types.hasOwnProperty(t))
      throw new Error("unknown type: " + t);
    return { type: t, name };
  });
}
Dispatch.prototype = dispatch.prototype = {
  constructor: Dispatch,
  on: function(typename, callback) {
    var _ = this._, T = parseTypenames(typename + "", _), t, i = -1, n = T.length;
    if (arguments.length < 2) {
      while (++i < n)
        if ((t = (typename = T[i]).type) && (t = get(_[t], typename.name)))
          return t;
      return;
    }
    if (callback != null && typeof callback !== "function")
      throw new Error("invalid callback: " + callback);
    while (++i < n) {
      if (t = (typename = T[i]).type)
        _[t] = set(_[t], typename.name, callback);
      else if (callback == null)
        for (t in _)
          _[t] = set(_[t], typename.name, null);
    }
    return this;
  },
  copy: function() {
    var copy3 = {}, _ = this._;
    for (var t in _)
      copy3[t] = _[t].slice();
    return new Dispatch(copy3);
  },
  call: function(type2, that) {
    if ((n = arguments.length - 2) > 0)
      for (var args = new Array(n), i = 0, n, t; i < n; ++i)
        args[i] = arguments[i + 2];
    if (!this._.hasOwnProperty(type2))
      throw new Error("unknown type: " + type2);
    for (t = this._[type2], i = 0, n = t.length; i < n; ++i)
      t[i].value.apply(that, args);
  },
  apply: function(type2, that, args) {
    if (!this._.hasOwnProperty(type2))
      throw new Error("unknown type: " + type2);
    for (var t = this._[type2], i = 0, n = t.length; i < n; ++i)
      t[i].value.apply(that, args);
  }
};
function get(type2, name) {
  for (var i = 0, n = type2.length, c4; i < n; ++i) {
    if ((c4 = type2[i]).name === name) {
      return c4.value;
    }
  }
}
function set(type2, name, callback) {
  for (var i = 0, n = type2.length; i < n; ++i) {
    if (type2[i].name === name) {
      type2[i] = noop, type2 = type2.slice(0, i).concat(type2.slice(i + 1));
      break;
    }
  }
  if (callback != null)
    type2.push({ name, value: callback });
  return type2;
}
var dispatch_default = dispatch;

// node_modules/d3-selection/src/namespaces.js
var xhtml = "http://www.w3.org/1999/xhtml";
var namespaces_default = {
  svg: "http://www.w3.org/2000/svg",
  xhtml,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};

// node_modules/d3-selection/src/namespace.js
function namespace_default(name) {
  var prefix = name += "", i = prefix.indexOf(":");
  if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns")
    name = name.slice(i + 1);
  return namespaces_default.hasOwnProperty(prefix) ? { space: namespaces_default[prefix], local: name } : name;
}

// node_modules/d3-selection/src/creator.js
function creatorInherit(name) {
  return function() {
    var document2 = this.ownerDocument, uri = this.namespaceURI;
    return uri === xhtml && document2.documentElement.namespaceURI === xhtml ? document2.createElement(name) : document2.createElementNS(uri, name);
  };
}
function creatorFixed(fullname) {
  return function() {
    return this.ownerDocument.createElementNS(fullname.space, fullname.local);
  };
}
function creator_default(name) {
  var fullname = namespace_default(name);
  return (fullname.local ? creatorFixed : creatorInherit)(fullname);
}

// node_modules/d3-selection/src/selector.js
function none() {
}
function selector_default(selector) {
  return selector == null ? none : function() {
    return this.querySelector(selector);
  };
}

// node_modules/d3-selection/src/selection/select.js
function select_default(select) {
  if (typeof select !== "function")
    select = selector_default(select);
  for (var groups2 = this._groups, m = groups2.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group2 = groups2[j], n = group2.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group2[i]) && (subnode = select.call(node, node.__data__, i, group2))) {
        if ("__data__" in node)
          subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
      }
    }
  }
  return new Selection(subgroups, this._parents);
}

// node_modules/d3-selection/src/array.js
function array(x2) {
  return x2 == null ? [] : Array.isArray(x2) ? x2 : Array.from(x2);
}

// node_modules/d3-selection/src/selectorAll.js
function empty2() {
  return [];
}
function selectorAll_default(selector) {
  return selector == null ? empty2 : function() {
    return this.querySelectorAll(selector);
  };
}

// node_modules/d3-selection/src/selection/selectAll.js
function arrayAll(select) {
  return function() {
    return array(select.apply(this, arguments));
  };
}
function selectAll_default(select) {
  if (typeof select === "function")
    select = arrayAll(select);
  else
    select = selectorAll_default(select);
  for (var groups2 = this._groups, m = groups2.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group2 = groups2[j], n = group2.length, node, i = 0; i < n; ++i) {
      if (node = group2[i]) {
        subgroups.push(select.call(node, node.__data__, i, group2));
        parents.push(node);
      }
    }
  }
  return new Selection(subgroups, parents);
}

// node_modules/d3-selection/src/matcher.js
function matcher_default(selector) {
  return function() {
    return this.matches(selector);
  };
}
function childMatcher(selector) {
  return function(node) {
    return node.matches(selector);
  };
}

// node_modules/d3-selection/src/selection/selectChild.js
var find = Array.prototype.find;
function childFind(match) {
  return function() {
    return find.call(this.children, match);
  };
}
function childFirst() {
  return this.firstElementChild;
}
function selectChild_default(match) {
  return this.select(match == null ? childFirst : childFind(typeof match === "function" ? match : childMatcher(match)));
}

// node_modules/d3-selection/src/selection/selectChildren.js
var filter = Array.prototype.filter;
function children() {
  return Array.from(this.children);
}
function childrenFilter(match) {
  return function() {
    return filter.call(this.children, match);
  };
}
function selectChildren_default(match) {
  return this.selectAll(match == null ? children : childrenFilter(typeof match === "function" ? match : childMatcher(match)));
}

// node_modules/d3-selection/src/selection/filter.js
function filter_default(match) {
  if (typeof match !== "function")
    match = matcher_default(match);
  for (var groups2 = this._groups, m = groups2.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group2 = groups2[j], n = group2.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group2[i]) && match.call(node, node.__data__, i, group2)) {
        subgroup.push(node);
      }
    }
  }
  return new Selection(subgroups, this._parents);
}

// node_modules/d3-selection/src/selection/sparse.js
function sparse_default(update) {
  return new Array(update.length);
}

// node_modules/d3-selection/src/selection/enter.js
function enter_default() {
  return new Selection(this._enter || this._groups.map(sparse_default), this._parents);
}
function EnterNode(parent, datum2) {
  this.ownerDocument = parent.ownerDocument;
  this.namespaceURI = parent.namespaceURI;
  this._next = null;
  this._parent = parent;
  this.__data__ = datum2;
}
EnterNode.prototype = {
  constructor: EnterNode,
  appendChild: function(child) {
    return this._parent.insertBefore(child, this._next);
  },
  insertBefore: function(child, next) {
    return this._parent.insertBefore(child, next);
  },
  querySelector: function(selector) {
    return this._parent.querySelector(selector);
  },
  querySelectorAll: function(selector) {
    return this._parent.querySelectorAll(selector);
  }
};

// node_modules/d3-selection/src/constant.js
function constant_default(x2) {
  return function() {
    return x2;
  };
}

// node_modules/d3-selection/src/selection/data.js
function bindIndex(parent, group2, enter, update, exit, data) {
  var i = 0, node, groupLength = group2.length, dataLength = data.length;
  for (; i < dataLength; ++i) {
    if (node = group2[i]) {
      node.__data__ = data[i];
      update[i] = node;
    } else {
      enter[i] = new EnterNode(parent, data[i]);
    }
  }
  for (; i < groupLength; ++i) {
    if (node = group2[i]) {
      exit[i] = node;
    }
  }
}
function bindKey(parent, group2, enter, update, exit, data, key) {
  var i, node, nodeByKeyValue = /* @__PURE__ */ new Map(), groupLength = group2.length, dataLength = data.length, keyValues = new Array(groupLength), keyValue;
  for (i = 0; i < groupLength; ++i) {
    if (node = group2[i]) {
      keyValues[i] = keyValue = key.call(node, node.__data__, i, group2) + "";
      if (nodeByKeyValue.has(keyValue)) {
        exit[i] = node;
      } else {
        nodeByKeyValue.set(keyValue, node);
      }
    }
  }
  for (i = 0; i < dataLength; ++i) {
    keyValue = key.call(parent, data[i], i, data) + "";
    if (node = nodeByKeyValue.get(keyValue)) {
      update[i] = node;
      node.__data__ = data[i];
      nodeByKeyValue.delete(keyValue);
    } else {
      enter[i] = new EnterNode(parent, data[i]);
    }
  }
  for (i = 0; i < groupLength; ++i) {
    if ((node = group2[i]) && nodeByKeyValue.get(keyValues[i]) === node) {
      exit[i] = node;
    }
  }
}
function datum(node) {
  return node.__data__;
}
function data_default(value, key) {
  if (!arguments.length)
    return Array.from(this, datum);
  var bind = key ? bindKey : bindIndex, parents = this._parents, groups2 = this._groups;
  if (typeof value !== "function")
    value = constant_default(value);
  for (var m = groups2.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
    var parent = parents[j], group2 = groups2[j], groupLength = group2.length, data = arraylike(value.call(parent, parent && parent.__data__, j, parents)), dataLength = data.length, enterGroup = enter[j] = new Array(dataLength), updateGroup = update[j] = new Array(dataLength), exitGroup = exit[j] = new Array(groupLength);
    bind(parent, group2, enterGroup, updateGroup, exitGroup, data, key);
    for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
      if (previous = enterGroup[i0]) {
        if (i0 >= i1)
          i1 = i0 + 1;
        while (!(next = updateGroup[i1]) && ++i1 < dataLength)
          ;
        previous._next = next || null;
      }
    }
  }
  update = new Selection(update, parents);
  update._enter = enter;
  update._exit = exit;
  return update;
}
function arraylike(data) {
  return typeof data === "object" && "length" in data ? data : Array.from(data);
}

// node_modules/d3-selection/src/selection/exit.js
function exit_default() {
  return new Selection(this._exit || this._groups.map(sparse_default), this._parents);
}

// node_modules/d3-selection/src/selection/join.js
function join_default(onenter, onupdate, onexit) {
  var enter = this.enter(), update = this, exit = this.exit();
  if (typeof onenter === "function") {
    enter = onenter(enter);
    if (enter)
      enter = enter.selection();
  } else {
    enter = enter.append(onenter + "");
  }
  if (onupdate != null) {
    update = onupdate(update);
    if (update)
      update = update.selection();
  }
  if (onexit == null)
    exit.remove();
  else
    onexit(exit);
  return enter && update ? enter.merge(update).order() : update;
}

// node_modules/d3-selection/src/selection/merge.js
function merge_default(context) {
  var selection2 = context.selection ? context.selection() : context;
  for (var groups0 = this._groups, groups1 = selection2._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge2 = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge2[i] = node;
      }
    }
  }
  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }
  return new Selection(merges, this._parents);
}

// node_modules/d3-selection/src/selection/order.js
function order_default() {
  for (var groups2 = this._groups, j = -1, m = groups2.length; ++j < m; ) {
    for (var group2 = groups2[j], i = group2.length - 1, next = group2[i], node; --i >= 0; ) {
      if (node = group2[i]) {
        if (next && node.compareDocumentPosition(next) ^ 4)
          next.parentNode.insertBefore(node, next);
        next = node;
      }
    }
  }
  return this;
}

// node_modules/d3-selection/src/selection/sort.js
function sort_default(compare) {
  if (!compare)
    compare = ascending2;
  function compareNode(a2, b) {
    return a2 && b ? compare(a2.__data__, b.__data__) : !a2 - !b;
  }
  for (var groups2 = this._groups, m = groups2.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group2 = groups2[j], n = group2.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group2[i]) {
        sortgroup[i] = node;
      }
    }
    sortgroup.sort(compareNode);
  }
  return new Selection(sortgroups, this._parents).order();
}
function ascending2(a2, b) {
  return a2 < b ? -1 : a2 > b ? 1 : a2 >= b ? 0 : NaN;
}

// node_modules/d3-selection/src/selection/call.js
function call_default() {
  var callback = arguments[0];
  arguments[0] = this;
  callback.apply(null, arguments);
  return this;
}

// node_modules/d3-selection/src/selection/nodes.js
function nodes_default() {
  return Array.from(this);
}

// node_modules/d3-selection/src/selection/node.js
function node_default() {
  for (var groups2 = this._groups, j = 0, m = groups2.length; j < m; ++j) {
    for (var group2 = groups2[j], i = 0, n = group2.length; i < n; ++i) {
      var node = group2[i];
      if (node)
        return node;
    }
  }
  return null;
}

// node_modules/d3-selection/src/selection/size.js
function size_default() {
  let size = 0;
  for (const node of this)
    ++size;
  return size;
}

// node_modules/d3-selection/src/selection/empty.js
function empty_default() {
  return !this.node();
}

// node_modules/d3-selection/src/selection/each.js
function each_default(callback) {
  for (var groups2 = this._groups, j = 0, m = groups2.length; j < m; ++j) {
    for (var group2 = groups2[j], i = 0, n = group2.length, node; i < n; ++i) {
      if (node = group2[i])
        callback.call(node, node.__data__, i, group2);
    }
  }
  return this;
}

// node_modules/d3-selection/src/selection/attr.js
function attrRemove(name) {
  return function() {
    this.removeAttribute(name);
  };
}
function attrRemoveNS(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}
function attrConstant(name, value) {
  return function() {
    this.setAttribute(name, value);
  };
}
function attrConstantNS(fullname, value) {
  return function() {
    this.setAttributeNS(fullname.space, fullname.local, value);
  };
}
function attrFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null)
      this.removeAttribute(name);
    else
      this.setAttribute(name, v);
  };
}
function attrFunctionNS(fullname, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null)
      this.removeAttributeNS(fullname.space, fullname.local);
    else
      this.setAttributeNS(fullname.space, fullname.local, v);
  };
}
function attr_default(name, value) {
  var fullname = namespace_default(name);
  if (arguments.length < 2) {
    var node = this.node();
    return fullname.local ? node.getAttributeNS(fullname.space, fullname.local) : node.getAttribute(fullname);
  }
  return this.each((value == null ? fullname.local ? attrRemoveNS : attrRemove : typeof value === "function" ? fullname.local ? attrFunctionNS : attrFunction : fullname.local ? attrConstantNS : attrConstant)(fullname, value));
}

// node_modules/d3-selection/src/window.js
function window_default(node) {
  return node.ownerDocument && node.ownerDocument.defaultView || node.document && node || node.defaultView;
}

// node_modules/d3-selection/src/selection/style.js
function styleRemove(name) {
  return function() {
    this.style.removeProperty(name);
  };
}
function styleConstant(name, value, priority) {
  return function() {
    this.style.setProperty(name, value, priority);
  };
}
function styleFunction(name, value, priority) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null)
      this.style.removeProperty(name);
    else
      this.style.setProperty(name, v, priority);
  };
}
function style_default(name, value, priority) {
  return arguments.length > 1 ? this.each((value == null ? styleRemove : typeof value === "function" ? styleFunction : styleConstant)(name, value, priority == null ? "" : priority)) : styleValue(this.node(), name);
}
function styleValue(node, name) {
  return node.style.getPropertyValue(name) || window_default(node).getComputedStyle(node, null).getPropertyValue(name);
}

// node_modules/d3-selection/src/selection/property.js
function propertyRemove(name) {
  return function() {
    delete this[name];
  };
}
function propertyConstant(name, value) {
  return function() {
    this[name] = value;
  };
}
function propertyFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null)
      delete this[name];
    else
      this[name] = v;
  };
}
function property_default(name, value) {
  return arguments.length > 1 ? this.each((value == null ? propertyRemove : typeof value === "function" ? propertyFunction : propertyConstant)(name, value)) : this.node()[name];
}

// node_modules/d3-selection/src/selection/classed.js
function classArray(string2) {
  return string2.trim().split(/^|\s+/);
}
function classList(node) {
  return node.classList || new ClassList(node);
}
function ClassList(node) {
  this._node = node;
  this._names = classArray(node.getAttribute("class") || "");
}
ClassList.prototype = {
  add: function(name) {
    var i = this._names.indexOf(name);
    if (i < 0) {
      this._names.push(name);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  remove: function(name) {
    var i = this._names.indexOf(name);
    if (i >= 0) {
      this._names.splice(i, 1);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  contains: function(name) {
    return this._names.indexOf(name) >= 0;
  }
};
function classedAdd(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n)
    list.add(names[i]);
}
function classedRemove(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n)
    list.remove(names[i]);
}
function classedTrue(names) {
  return function() {
    classedAdd(this, names);
  };
}
function classedFalse(names) {
  return function() {
    classedRemove(this, names);
  };
}
function classedFunction(names, value) {
  return function() {
    (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
  };
}
function classed_default(name, value) {
  var names = classArray(name + "");
  if (arguments.length < 2) {
    var list = classList(this.node()), i = -1, n = names.length;
    while (++i < n)
      if (!list.contains(names[i]))
        return false;
    return true;
  }
  return this.each((typeof value === "function" ? classedFunction : value ? classedTrue : classedFalse)(names, value));
}

// node_modules/d3-selection/src/selection/text.js
function textRemove() {
  this.textContent = "";
}
function textConstant(value) {
  return function() {
    this.textContent = value;
  };
}
function textFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.textContent = v == null ? "" : v;
  };
}
function text_default(value) {
  return arguments.length ? this.each(value == null ? textRemove : (typeof value === "function" ? textFunction : textConstant)(value)) : this.node().textContent;
}

// node_modules/d3-selection/src/selection/html.js
function htmlRemove() {
  this.innerHTML = "";
}
function htmlConstant(value) {
  return function() {
    this.innerHTML = value;
  };
}
function htmlFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.innerHTML = v == null ? "" : v;
  };
}
function html_default(value) {
  return arguments.length ? this.each(value == null ? htmlRemove : (typeof value === "function" ? htmlFunction : htmlConstant)(value)) : this.node().innerHTML;
}

// node_modules/d3-selection/src/selection/raise.js
function raise() {
  if (this.nextSibling)
    this.parentNode.appendChild(this);
}
function raise_default() {
  return this.each(raise);
}

// node_modules/d3-selection/src/selection/lower.js
function lower() {
  if (this.previousSibling)
    this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function lower_default() {
  return this.each(lower);
}

// node_modules/d3-selection/src/selection/append.js
function append_default(name) {
  var create3 = typeof name === "function" ? name : creator_default(name);
  return this.select(function() {
    return this.appendChild(create3.apply(this, arguments));
  });
}

// node_modules/d3-selection/src/selection/insert.js
function constantNull() {
  return null;
}
function insert_default(name, before) {
  var create3 = typeof name === "function" ? name : creator_default(name), select = before == null ? constantNull : typeof before === "function" ? before : selector_default(before);
  return this.select(function() {
    return this.insertBefore(create3.apply(this, arguments), select.apply(this, arguments) || null);
  });
}

// node_modules/d3-selection/src/selection/remove.js
function remove() {
  var parent = this.parentNode;
  if (parent)
    parent.removeChild(this);
}
function remove_default() {
  return this.each(remove);
}

// node_modules/d3-selection/src/selection/clone.js
function selection_cloneShallow() {
  var clone = this.cloneNode(false), parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}
function selection_cloneDeep() {
  var clone = this.cloneNode(true), parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}
function clone_default(deep) {
  return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
}

// node_modules/d3-selection/src/selection/datum.js
function datum_default(value) {
  return arguments.length ? this.property("__data__", value) : this.node().__data__;
}

// node_modules/d3-selection/src/selection/on.js
function contextListener(listener) {
  return function(event) {
    listener.call(this, event, this.__data__);
  };
}
function parseTypenames2(typenames) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0)
      name = t.slice(i + 1), t = t.slice(0, i);
    return { type: t, name };
  });
}
function onRemove(typename) {
  return function() {
    var on = this.__on;
    if (!on)
      return;
    for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
      if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.options);
      } else {
        on[++i] = o;
      }
    }
    if (++i)
      on.length = i;
    else
      delete this.__on;
  };
}
function onAdd(typename, value, options) {
  return function() {
    var on = this.__on, o, listener = contextListener(value);
    if (on)
      for (var j = 0, m = on.length; j < m; ++j) {
        if ((o = on[j]).type === typename.type && o.name === typename.name) {
          this.removeEventListener(o.type, o.listener, o.options);
          this.addEventListener(o.type, o.listener = listener, o.options = options);
          o.value = value;
          return;
        }
      }
    this.addEventListener(typename.type, listener, options);
    o = { type: typename.type, name: typename.name, value, listener, options };
    if (!on)
      this.__on = [o];
    else
      on.push(o);
  };
}
function on_default(typename, value, options) {
  var typenames = parseTypenames2(typename + ""), i, n = typenames.length, t;
  if (arguments.length < 2) {
    var on = this.node().__on;
    if (on)
      for (var j = 0, m = on.length, o; j < m; ++j) {
        for (i = 0, o = on[j]; i < n; ++i) {
          if ((t = typenames[i]).type === o.type && t.name === o.name) {
            return o.value;
          }
        }
      }
    return;
  }
  on = value ? onAdd : onRemove;
  for (i = 0; i < n; ++i)
    this.each(on(typenames[i], value, options));
  return this;
}

// node_modules/d3-selection/src/selection/dispatch.js
function dispatchEvent(node, type2, params) {
  var window2 = window_default(node), event = window2.CustomEvent;
  if (typeof event === "function") {
    event = new event(type2, params);
  } else {
    event = window2.document.createEvent("Event");
    if (params)
      event.initEvent(type2, params.bubbles, params.cancelable), event.detail = params.detail;
    else
      event.initEvent(type2, false, false);
  }
  node.dispatchEvent(event);
}
function dispatchConstant(type2, params) {
  return function() {
    return dispatchEvent(this, type2, params);
  };
}
function dispatchFunction(type2, params) {
  return function() {
    return dispatchEvent(this, type2, params.apply(this, arguments));
  };
}
function dispatch_default2(type2, params) {
  return this.each((typeof params === "function" ? dispatchFunction : dispatchConstant)(type2, params));
}

// node_modules/d3-selection/src/selection/iterator.js
function* iterator_default() {
  for (var groups2 = this._groups, j = 0, m = groups2.length; j < m; ++j) {
    for (var group2 = groups2[j], i = 0, n = group2.length, node; i < n; ++i) {
      if (node = group2[i])
        yield node;
    }
  }
}

// node_modules/d3-selection/src/selection/index.js
var root = [null];
function Selection(groups2, parents) {
  this._groups = groups2;
  this._parents = parents;
}
function selection() {
  return new Selection([[document.documentElement]], root);
}
function selection_selection() {
  return this;
}
Selection.prototype = selection.prototype = {
  constructor: Selection,
  select: select_default,
  selectAll: selectAll_default,
  selectChild: selectChild_default,
  selectChildren: selectChildren_default,
  filter: filter_default,
  data: data_default,
  enter: enter_default,
  exit: exit_default,
  join: join_default,
  merge: merge_default,
  selection: selection_selection,
  order: order_default,
  sort: sort_default,
  call: call_default,
  nodes: nodes_default,
  node: node_default,
  size: size_default,
  empty: empty_default,
  each: each_default,
  attr: attr_default,
  style: style_default,
  property: property_default,
  classed: classed_default,
  text: text_default,
  html: html_default,
  raise: raise_default,
  lower: lower_default,
  append: append_default,
  insert: insert_default,
  remove: remove_default,
  clone: clone_default,
  datum: datum_default,
  on: on_default,
  dispatch: dispatch_default2,
  [Symbol.iterator]: iterator_default
};
var selection_default = selection;

// node_modules/d3-selection/src/select.js
function select_default2(selector) {
  return typeof selector === "string" ? new Selection([[document.querySelector(selector)]], [document.documentElement]) : new Selection([[selector]], root);
}

// node_modules/d3-selection/src/sourceEvent.js
function sourceEvent_default(event) {
  let sourceEvent;
  while (sourceEvent = event.sourceEvent)
    event = sourceEvent;
  return event;
}

// node_modules/d3-selection/src/pointer.js
function pointer_default(event, node) {
  event = sourceEvent_default(event);
  if (node === void 0)
    node = event.currentTarget;
  if (node) {
    var svg = node.ownerSVGElement || node;
    if (svg.createSVGPoint) {
      var point6 = svg.createSVGPoint();
      point6.x = event.clientX, point6.y = event.clientY;
      point6 = point6.matrixTransform(node.getScreenCTM().inverse());
      return [point6.x, point6.y];
    }
    if (node.getBoundingClientRect) {
      var rect = node.getBoundingClientRect();
      return [event.clientX - rect.left - node.clientLeft, event.clientY - rect.top - node.clientTop];
    }
  }
  return [event.pageX, event.pageY];
}

// node_modules/d3-color/src/define.js
function define_default(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
}
function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition)
    prototype[key] = definition[key];
  return prototype;
}

// node_modules/d3-color/src/color.js
function Color() {
}
var darker = 0.7;
var brighter = 1 / darker;
var reI = "\\s*([+-]?\\d+)\\s*";
var reN = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*";
var reP = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*";
var reHex = /^#([0-9a-f]{3,8})$/;
var reRgbInteger = new RegExp(`^rgb\\(${reI},${reI},${reI}\\)$`);
var reRgbPercent = new RegExp(`^rgb\\(${reP},${reP},${reP}\\)$`);
var reRgbaInteger = new RegExp(`^rgba\\(${reI},${reI},${reI},${reN}\\)$`);
var reRgbaPercent = new RegExp(`^rgba\\(${reP},${reP},${reP},${reN}\\)$`);
var reHslPercent = new RegExp(`^hsl\\(${reN},${reP},${reP}\\)$`);
var reHslaPercent = new RegExp(`^hsla\\(${reN},${reP},${reP},${reN}\\)$`);
var named = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
define_default(Color, color, {
  copy(channels) {
    return Object.assign(new this.constructor(), this, channels);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: color_formatHex,
  // Deprecated! Use color.formatHex.
  formatHex: color_formatHex,
  formatHex8: color_formatHex8,
  formatHsl: color_formatHsl,
  formatRgb: color_formatRgb,
  toString: color_formatRgb
});
function color_formatHex() {
  return this.rgb().formatHex();
}
function color_formatHex8() {
  return this.rgb().formatHex8();
}
function color_formatHsl() {
  return hslConvert(this).formatHsl();
}
function color_formatRgb() {
  return this.rgb().formatRgb();
}
function color(format3) {
  var m, l;
  format3 = (format3 + "").trim().toLowerCase();
  return (m = reHex.exec(format3)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) : l === 3 ? new Rgb(m >> 8 & 15 | m >> 4 & 240, m >> 4 & 15 | m & 240, (m & 15) << 4 | m & 15, 1) : l === 8 ? rgba(m >> 24 & 255, m >> 16 & 255, m >> 8 & 255, (m & 255) / 255) : l === 4 ? rgba(m >> 12 & 15 | m >> 8 & 240, m >> 8 & 15 | m >> 4 & 240, m >> 4 & 15 | m & 240, ((m & 15) << 4 | m & 15) / 255) : null) : (m = reRgbInteger.exec(format3)) ? new Rgb(m[1], m[2], m[3], 1) : (m = reRgbPercent.exec(format3)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) : (m = reRgbaInteger.exec(format3)) ? rgba(m[1], m[2], m[3], m[4]) : (m = reRgbaPercent.exec(format3)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) : (m = reHslPercent.exec(format3)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) : (m = reHslaPercent.exec(format3)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) : named.hasOwnProperty(format3) ? rgbn(named[format3]) : format3 === "transparent" ? new Rgb(NaN, NaN, NaN, 0) : null;
}
function rgbn(n) {
  return new Rgb(n >> 16 & 255, n >> 8 & 255, n & 255, 1);
}
function rgba(r, g, b, a2) {
  if (a2 <= 0)
    r = g = b = NaN;
  return new Rgb(r, g, b, a2);
}
function rgbConvert(o) {
  if (!(o instanceof Color))
    o = color(o);
  if (!o)
    return new Rgb();
  o = o.rgb();
  return new Rgb(o.r, o.g, o.b, o.opacity);
}
function rgb(r, g, b, opacity2) {
  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity2 == null ? 1 : opacity2);
}
function Rgb(r, g, b, opacity2) {
  this.r = +r;
  this.g = +g;
  this.b = +b;
  this.opacity = +opacity2;
}
define_default(Rgb, rgb, extend(Color, {
  brighter(k2) {
    k2 = k2 == null ? brighter : Math.pow(brighter, k2);
    return new Rgb(this.r * k2, this.g * k2, this.b * k2, this.opacity);
  },
  darker(k2) {
    k2 = k2 == null ? darker : Math.pow(darker, k2);
    return new Rgb(this.r * k2, this.g * k2, this.b * k2, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Rgb(clampi(this.r), clampi(this.g), clampi(this.b), clampa(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && (-0.5 <= this.g && this.g < 255.5) && (-0.5 <= this.b && this.b < 255.5) && (0 <= this.opacity && this.opacity <= 1);
  },
  hex: rgb_formatHex,
  // Deprecated! Use color.formatHex.
  formatHex: rgb_formatHex,
  formatHex8: rgb_formatHex8,
  formatRgb: rgb_formatRgb,
  toString: rgb_formatRgb
}));
function rgb_formatHex() {
  return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}`;
}
function rgb_formatHex8() {
  return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}${hex((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function rgb_formatRgb() {
  const a2 = clampa(this.opacity);
  return `${a2 === 1 ? "rgb(" : "rgba("}${clampi(this.r)}, ${clampi(this.g)}, ${clampi(this.b)}${a2 === 1 ? ")" : `, ${a2})`}`;
}
function clampa(opacity2) {
  return isNaN(opacity2) ? 1 : Math.max(0, Math.min(1, opacity2));
}
function clampi(value) {
  return Math.max(0, Math.min(255, Math.round(value) || 0));
}
function hex(value) {
  value = clampi(value);
  return (value < 16 ? "0" : "") + value.toString(16);
}
function hsla(h, s2, l, a2) {
  if (a2 <= 0)
    h = s2 = l = NaN;
  else if (l <= 0 || l >= 1)
    h = s2 = NaN;
  else if (s2 <= 0)
    h = NaN;
  return new Hsl(h, s2, l, a2);
}
function hslConvert(o) {
  if (o instanceof Hsl)
    return new Hsl(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color))
    o = color(o);
  if (!o)
    return new Hsl();
  if (o instanceof Hsl)
    return o;
  o = o.rgb();
  var r = o.r / 255, g = o.g / 255, b = o.b / 255, min4 = Math.min(r, g, b), max3 = Math.max(r, g, b), h = NaN, s2 = max3 - min4, l = (max3 + min4) / 2;
  if (s2) {
    if (r === max3)
      h = (g - b) / s2 + (g < b) * 6;
    else if (g === max3)
      h = (b - r) / s2 + 2;
    else
      h = (r - g) / s2 + 4;
    s2 /= l < 0.5 ? max3 + min4 : 2 - max3 - min4;
    h *= 60;
  } else {
    s2 = l > 0 && l < 1 ? 0 : h;
  }
  return new Hsl(h, s2, l, o.opacity);
}
function hsl(h, s2, l, opacity2) {
  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s2, l, opacity2 == null ? 1 : opacity2);
}
function Hsl(h, s2, l, opacity2) {
  this.h = +h;
  this.s = +s2;
  this.l = +l;
  this.opacity = +opacity2;
}
define_default(Hsl, hsl, extend(Color, {
  brighter(k2) {
    k2 = k2 == null ? brighter : Math.pow(brighter, k2);
    return new Hsl(this.h, this.s, this.l * k2, this.opacity);
  },
  darker(k2) {
    k2 = k2 == null ? darker : Math.pow(darker, k2);
    return new Hsl(this.h, this.s, this.l * k2, this.opacity);
  },
  rgb() {
    var h = this.h % 360 + (this.h < 0) * 360, s2 = isNaN(h) || isNaN(this.s) ? 0 : this.s, l = this.l, m2 = l + (l < 0.5 ? l : 1 - l) * s2, m1 = 2 * l - m2;
    return new Rgb(
      hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
      hsl2rgb(h, m1, m2),
      hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
      this.opacity
    );
  },
  clamp() {
    return new Hsl(clamph(this.h), clampt(this.s), clampt(this.l), clampa(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && (0 <= this.l && this.l <= 1) && (0 <= this.opacity && this.opacity <= 1);
  },
  formatHsl() {
    const a2 = clampa(this.opacity);
    return `${a2 === 1 ? "hsl(" : "hsla("}${clamph(this.h)}, ${clampt(this.s) * 100}%, ${clampt(this.l) * 100}%${a2 === 1 ? ")" : `, ${a2})`}`;
  }
}));
function clamph(value) {
  value = (value || 0) % 360;
  return value < 0 ? value + 360 : value;
}
function clampt(value) {
  return Math.max(0, Math.min(1, value || 0));
}
function hsl2rgb(h, m1, m2) {
  return (h < 60 ? m1 + (m2 - m1) * h / 60 : h < 180 ? m2 : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60 : m1) * 255;
}

// node_modules/d3-color/src/math.js
var radians = Math.PI / 180;
var degrees = 180 / Math.PI;

// node_modules/d3-color/src/lab.js
var K = 18;
var Xn = 0.96422;
var Yn = 1;
var Zn = 0.82521;
var t0 = 4 / 29;
var t1 = 6 / 29;
var t2 = 3 * t1 * t1;
var t3 = t1 * t1 * t1;
function labConvert(o) {
  if (o instanceof Lab)
    return new Lab(o.l, o.a, o.b, o.opacity);
  if (o instanceof Hcl)
    return hcl2lab(o);
  if (!(o instanceof Rgb))
    o = rgbConvert(o);
  var r = rgb2lrgb(o.r), g = rgb2lrgb(o.g), b = rgb2lrgb(o.b), y2 = xyz2lab((0.2225045 * r + 0.7168786 * g + 0.0606169 * b) / Yn), x2, z;
  if (r === g && g === b)
    x2 = z = y2;
  else {
    x2 = xyz2lab((0.4360747 * r + 0.3850649 * g + 0.1430804 * b) / Xn);
    z = xyz2lab((0.0139322 * r + 0.0971045 * g + 0.7141733 * b) / Zn);
  }
  return new Lab(116 * y2 - 16, 500 * (x2 - y2), 200 * (y2 - z), o.opacity);
}
function lab(l, a2, b, opacity2) {
  return arguments.length === 1 ? labConvert(l) : new Lab(l, a2, b, opacity2 == null ? 1 : opacity2);
}
function Lab(l, a2, b, opacity2) {
  this.l = +l;
  this.a = +a2;
  this.b = +b;
  this.opacity = +opacity2;
}
define_default(Lab, lab, extend(Color, {
  brighter(k2) {
    return new Lab(this.l + K * (k2 == null ? 1 : k2), this.a, this.b, this.opacity);
  },
  darker(k2) {
    return new Lab(this.l - K * (k2 == null ? 1 : k2), this.a, this.b, this.opacity);
  },
  rgb() {
    var y2 = (this.l + 16) / 116, x2 = isNaN(this.a) ? y2 : y2 + this.a / 500, z = isNaN(this.b) ? y2 : y2 - this.b / 200;
    x2 = Xn * lab2xyz(x2);
    y2 = Yn * lab2xyz(y2);
    z = Zn * lab2xyz(z);
    return new Rgb(
      lrgb2rgb(3.1338561 * x2 - 1.6168667 * y2 - 0.4906146 * z),
      lrgb2rgb(-0.9787684 * x2 + 1.9161415 * y2 + 0.033454 * z),
      lrgb2rgb(0.0719453 * x2 - 0.2289914 * y2 + 1.4052427 * z),
      this.opacity
    );
  }
}));
function xyz2lab(t) {
  return t > t3 ? Math.pow(t, 1 / 3) : t / t2 + t0;
}
function lab2xyz(t) {
  return t > t1 ? t * t * t : t2 * (t - t0);
}
function lrgb2rgb(x2) {
  return 255 * (x2 <= 31308e-7 ? 12.92 * x2 : 1.055 * Math.pow(x2, 1 / 2.4) - 0.055);
}
function rgb2lrgb(x2) {
  return (x2 /= 255) <= 0.04045 ? x2 / 12.92 : Math.pow((x2 + 0.055) / 1.055, 2.4);
}
function hclConvert(o) {
  if (o instanceof Hcl)
    return new Hcl(o.h, o.c, o.l, o.opacity);
  if (!(o instanceof Lab))
    o = labConvert(o);
  if (o.a === 0 && o.b === 0)
    return new Hcl(NaN, 0 < o.l && o.l < 100 ? 0 : NaN, o.l, o.opacity);
  var h = Math.atan2(o.b, o.a) * degrees;
  return new Hcl(h < 0 ? h + 360 : h, Math.sqrt(o.a * o.a + o.b * o.b), o.l, o.opacity);
}
function hcl(h, c4, l, opacity2) {
  return arguments.length === 1 ? hclConvert(h) : new Hcl(h, c4, l, opacity2 == null ? 1 : opacity2);
}
function Hcl(h, c4, l, opacity2) {
  this.h = +h;
  this.c = +c4;
  this.l = +l;
  this.opacity = +opacity2;
}
function hcl2lab(o) {
  if (isNaN(o.h))
    return new Lab(o.l, 0, 0, o.opacity);
  var h = o.h * radians;
  return new Lab(o.l, Math.cos(h) * o.c, Math.sin(h) * o.c, o.opacity);
}
define_default(Hcl, hcl, extend(Color, {
  brighter(k2) {
    return new Hcl(this.h, this.c, this.l + K * (k2 == null ? 1 : k2), this.opacity);
  },
  darker(k2) {
    return new Hcl(this.h, this.c, this.l - K * (k2 == null ? 1 : k2), this.opacity);
  },
  rgb() {
    return hcl2lab(this).rgb();
  }
}));

// node_modules/d3-color/src/cubehelix.js
var A = -0.14861;
var B = 1.78277;
var C = -0.29227;
var D = -0.90649;
var E = 1.97294;
var ED = E * D;
var EB = E * B;
var BC_DA = B * C - D * A;
function cubehelixConvert(o) {
  if (o instanceof Cubehelix)
    return new Cubehelix(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Rgb))
    o = rgbConvert(o);
  var r = o.r / 255, g = o.g / 255, b = o.b / 255, l = (BC_DA * b + ED * r - EB * g) / (BC_DA + ED - EB), bl = b - l, k2 = (E * (g - l) - C * bl) / D, s2 = Math.sqrt(k2 * k2 + bl * bl) / (E * l * (1 - l)), h = s2 ? Math.atan2(k2, bl) * degrees - 120 : NaN;
  return new Cubehelix(h < 0 ? h + 360 : h, s2, l, o.opacity);
}
function cubehelix(h, s2, l, opacity2) {
  return arguments.length === 1 ? cubehelixConvert(h) : new Cubehelix(h, s2, l, opacity2 == null ? 1 : opacity2);
}
function Cubehelix(h, s2, l, opacity2) {
  this.h = +h;
  this.s = +s2;
  this.l = +l;
  this.opacity = +opacity2;
}
define_default(Cubehelix, cubehelix, extend(Color, {
  brighter(k2) {
    k2 = k2 == null ? brighter : Math.pow(brighter, k2);
    return new Cubehelix(this.h, this.s, this.l * k2, this.opacity);
  },
  darker(k2) {
    k2 = k2 == null ? darker : Math.pow(darker, k2);
    return new Cubehelix(this.h, this.s, this.l * k2, this.opacity);
  },
  rgb() {
    var h = isNaN(this.h) ? 0 : (this.h + 120) * radians, l = +this.l, a2 = isNaN(this.s) ? 0 : this.s * l * (1 - l), cosh = Math.cos(h), sinh = Math.sin(h);
    return new Rgb(
      255 * (l + a2 * (A * cosh + B * sinh)),
      255 * (l + a2 * (C * cosh + D * sinh)),
      255 * (l + a2 * (E * cosh)),
      this.opacity
    );
  }
}));

// node_modules/d3-interpolate/src/basis.js
function basis(t13, v0, v1, v2, v3) {
  var t22 = t13 * t13, t32 = t22 * t13;
  return ((1 - 3 * t13 + 3 * t22 - t32) * v0 + (4 - 6 * t22 + 3 * t32) * v1 + (1 + 3 * t13 + 3 * t22 - 3 * t32) * v2 + t32 * v3) / 6;
}
function basis_default(values2) {
  var n = values2.length - 1;
  return function(t) {
    var i = t <= 0 ? t = 0 : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n), v1 = values2[i], v2 = values2[i + 1], v0 = i > 0 ? values2[i - 1] : 2 * v1 - v2, v3 = i < n - 1 ? values2[i + 2] : 2 * v2 - v1;
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
}

// node_modules/d3-interpolate/src/basisClosed.js
function basisClosed_default(values2) {
  var n = values2.length;
  return function(t) {
    var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n), v0 = values2[(i + n - 1) % n], v1 = values2[i % n], v2 = values2[(i + 1) % n], v3 = values2[(i + 2) % n];
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
}

// node_modules/d3-interpolate/src/constant.js
var constant_default2 = (x2) => () => x2;

// node_modules/d3-interpolate/src/color.js
function linear(a2, d) {
  return function(t) {
    return a2 + t * d;
  };
}
function exponential(a2, b, y2) {
  return a2 = Math.pow(a2, y2), b = Math.pow(b, y2) - a2, y2 = 1 / y2, function(t) {
    return Math.pow(a2 + t * b, y2);
  };
}
function hue(a2, b) {
  var d = b - a2;
  return d ? linear(a2, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : constant_default2(isNaN(a2) ? b : a2);
}
function gamma(y2) {
  return (y2 = +y2) === 1 ? nogamma : function(a2, b) {
    return b - a2 ? exponential(a2, b, y2) : constant_default2(isNaN(a2) ? b : a2);
  };
}
function nogamma(a2, b) {
  var d = b - a2;
  return d ? linear(a2, d) : constant_default2(isNaN(a2) ? b : a2);
}

// node_modules/d3-interpolate/src/rgb.js
var rgb_default = function rgbGamma(y2) {
  var color3 = gamma(y2);
  function rgb2(start2, end) {
    var r = color3((start2 = rgb(start2)).r, (end = rgb(end)).r), g = color3(start2.g, end.g), b = color3(start2.b, end.b), opacity2 = nogamma(start2.opacity, end.opacity);
    return function(t) {
      start2.r = r(t);
      start2.g = g(t);
      start2.b = b(t);
      start2.opacity = opacity2(t);
      return start2 + "";
    };
  }
  rgb2.gamma = rgbGamma;
  return rgb2;
}(1);
function rgbSpline(spline) {
  return function(colors) {
    var n = colors.length, r = new Array(n), g = new Array(n), b = new Array(n), i, color3;
    for (i = 0; i < n; ++i) {
      color3 = rgb(colors[i]);
      r[i] = color3.r || 0;
      g[i] = color3.g || 0;
      b[i] = color3.b || 0;
    }
    r = spline(r);
    g = spline(g);
    b = spline(b);
    color3.opacity = 1;
    return function(t) {
      color3.r = r(t);
      color3.g = g(t);
      color3.b = b(t);
      return color3 + "";
    };
  };
}
var rgbBasis = rgbSpline(basis_default);
var rgbBasisClosed = rgbSpline(basisClosed_default);

// node_modules/d3-interpolate/src/numberArray.js
function numberArray_default(a2, b) {
  if (!b)
    b = [];
  var n = a2 ? Math.min(b.length, a2.length) : 0, c4 = b.slice(), i;
  return function(t) {
    for (i = 0; i < n; ++i)
      c4[i] = a2[i] * (1 - t) + b[i] * t;
    return c4;
  };
}
function isNumberArray(x2) {
  return ArrayBuffer.isView(x2) && !(x2 instanceof DataView);
}

// node_modules/d3-interpolate/src/array.js
function genericArray(a2, b) {
  var nb = b ? b.length : 0, na = a2 ? Math.min(nb, a2.length) : 0, x2 = new Array(na), c4 = new Array(nb), i;
  for (i = 0; i < na; ++i)
    x2[i] = value_default(a2[i], b[i]);
  for (; i < nb; ++i)
    c4[i] = b[i];
  return function(t) {
    for (i = 0; i < na; ++i)
      c4[i] = x2[i](t);
    return c4;
  };
}

// node_modules/d3-interpolate/src/date.js
function date_default(a2, b) {
  var d = /* @__PURE__ */ new Date();
  return a2 = +a2, b = +b, function(t) {
    return d.setTime(a2 * (1 - t) + b * t), d;
  };
}

// node_modules/d3-interpolate/src/number.js
function number_default(a2, b) {
  return a2 = +a2, b = +b, function(t) {
    return a2 * (1 - t) + b * t;
  };
}

// node_modules/d3-interpolate/src/object.js
function object_default(a2, b) {
  var i = {}, c4 = {}, k2;
  if (a2 === null || typeof a2 !== "object")
    a2 = {};
  if (b === null || typeof b !== "object")
    b = {};
  for (k2 in b) {
    if (k2 in a2) {
      i[k2] = value_default(a2[k2], b[k2]);
    } else {
      c4[k2] = b[k2];
    }
  }
  return function(t) {
    for (k2 in i)
      c4[k2] = i[k2](t);
    return c4;
  };
}

// node_modules/d3-interpolate/src/string.js
var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
var reB = new RegExp(reA.source, "g");
function zero2(b) {
  return function() {
    return b;
  };
}
function one(b) {
  return function(t) {
    return b(t) + "";
  };
}
function string_default(a2, b) {
  var bi = reA.lastIndex = reB.lastIndex = 0, am, bm, bs, i = -1, s2 = [], q = [];
  a2 = a2 + "", b = b + "";
  while ((am = reA.exec(a2)) && (bm = reB.exec(b))) {
    if ((bs = bm.index) > bi) {
      bs = b.slice(bi, bs);
      if (s2[i])
        s2[i] += bs;
      else
        s2[++i] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) {
      if (s2[i])
        s2[i] += bm;
      else
        s2[++i] = bm;
    } else {
      s2[++i] = null;
      q.push({ i, x: number_default(am, bm) });
    }
    bi = reB.lastIndex;
  }
  if (bi < b.length) {
    bs = b.slice(bi);
    if (s2[i])
      s2[i] += bs;
    else
      s2[++i] = bs;
  }
  return s2.length < 2 ? q[0] ? one(q[0].x) : zero2(b) : (b = q.length, function(t) {
    for (var i2 = 0, o; i2 < b; ++i2)
      s2[(o = q[i2]).i] = o.x(t);
    return s2.join("");
  });
}

// node_modules/d3-interpolate/src/value.js
function value_default(a2, b) {
  var t = typeof b, c4;
  return b == null || t === "boolean" ? constant_default2(b) : (t === "number" ? number_default : t === "string" ? (c4 = color(b)) ? (b = c4, rgb_default) : string_default : b instanceof color ? rgb_default : b instanceof Date ? date_default : isNumberArray(b) ? numberArray_default : Array.isArray(b) ? genericArray : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? object_default : number_default)(a2, b);
}

// node_modules/d3-interpolate/src/round.js
function round_default(a2, b) {
  return a2 = +a2, b = +b, function(t) {
    return Math.round(a2 * (1 - t) + b * t);
  };
}

// node_modules/d3-interpolate/src/transform/decompose.js
var degrees2 = 180 / Math.PI;
var identity2 = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function decompose_default(a2, b, c4, d, e, f) {
  var scaleX, scaleY, skewX;
  if (scaleX = Math.sqrt(a2 * a2 + b * b))
    a2 /= scaleX, b /= scaleX;
  if (skewX = a2 * c4 + b * d)
    c4 -= a2 * skewX, d -= b * skewX;
  if (scaleY = Math.sqrt(c4 * c4 + d * d))
    c4 /= scaleY, d /= scaleY, skewX /= scaleY;
  if (a2 * d < b * c4)
    a2 = -a2, b = -b, skewX = -skewX, scaleX = -scaleX;
  return {
    translateX: e,
    translateY: f,
    rotate: Math.atan2(b, a2) * degrees2,
    skewX: Math.atan(skewX) * degrees2,
    scaleX,
    scaleY
  };
}

// node_modules/d3-interpolate/src/transform/parse.js
var svgNode;
function parseCss(value) {
  const m = new (typeof DOMMatrix === "function" ? DOMMatrix : WebKitCSSMatrix)(value + "");
  return m.isIdentity ? identity2 : decompose_default(m.a, m.b, m.c, m.d, m.e, m.f);
}
function parseSvg(value) {
  if (value == null)
    return identity2;
  if (!svgNode)
    svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
  svgNode.setAttribute("transform", value);
  if (!(value = svgNode.transform.baseVal.consolidate()))
    return identity2;
  value = value.matrix;
  return decompose_default(value.a, value.b, value.c, value.d, value.e, value.f);
}

// node_modules/d3-interpolate/src/transform/index.js
function interpolateTransform(parse2, pxComma, pxParen, degParen) {
  function pop(s2) {
    return s2.length ? s2.pop() + " " : "";
  }
  function translate(xa, ya, xb, yb, s2, q) {
    if (xa !== xb || ya !== yb) {
      var i = s2.push("translate(", null, pxComma, null, pxParen);
      q.push({ i: i - 4, x: number_default(xa, xb) }, { i: i - 2, x: number_default(ya, yb) });
    } else if (xb || yb) {
      s2.push("translate(" + xb + pxComma + yb + pxParen);
    }
  }
  function rotate(a2, b, s2, q) {
    if (a2 !== b) {
      if (a2 - b > 180)
        b += 360;
      else if (b - a2 > 180)
        a2 += 360;
      q.push({ i: s2.push(pop(s2) + "rotate(", null, degParen) - 2, x: number_default(a2, b) });
    } else if (b) {
      s2.push(pop(s2) + "rotate(" + b + degParen);
    }
  }
  function skewX(a2, b, s2, q) {
    if (a2 !== b) {
      q.push({ i: s2.push(pop(s2) + "skewX(", null, degParen) - 2, x: number_default(a2, b) });
    } else if (b) {
      s2.push(pop(s2) + "skewX(" + b + degParen);
    }
  }
  function scale(xa, ya, xb, yb, s2, q) {
    if (xa !== xb || ya !== yb) {
      var i = s2.push(pop(s2) + "scale(", null, ",", null, ")");
      q.push({ i: i - 4, x: number_default(xa, xb) }, { i: i - 2, x: number_default(ya, yb) });
    } else if (xb !== 1 || yb !== 1) {
      s2.push(pop(s2) + "scale(" + xb + "," + yb + ")");
    }
  }
  return function(a2, b) {
    var s2 = [], q = [];
    a2 = parse2(a2), b = parse2(b);
    translate(a2.translateX, a2.translateY, b.translateX, b.translateY, s2, q);
    rotate(a2.rotate, b.rotate, s2, q);
    skewX(a2.skewX, b.skewX, s2, q);
    scale(a2.scaleX, a2.scaleY, b.scaleX, b.scaleY, s2, q);
    a2 = b = null;
    return function(t) {
      var i = -1, n = q.length, o;
      while (++i < n)
        s2[(o = q[i]).i] = o.x(t);
      return s2.join("");
    };
  };
}
var interpolateTransformCss = interpolateTransform(parseCss, "px, ", "px)", "deg)");
var interpolateTransformSvg = interpolateTransform(parseSvg, ", ", ")", ")");

// node_modules/d3-interpolate/src/hsl.js
function hsl2(hue2) {
  return function(start2, end) {
    var h = hue2((start2 = hsl(start2)).h, (end = hsl(end)).h), s2 = nogamma(start2.s, end.s), l = nogamma(start2.l, end.l), opacity2 = nogamma(start2.opacity, end.opacity);
    return function(t) {
      start2.h = h(t);
      start2.s = s2(t);
      start2.l = l(t);
      start2.opacity = opacity2(t);
      return start2 + "";
    };
  };
}
var hsl_default = hsl2(hue);
var hslLong = hsl2(nogamma);

// node_modules/d3-interpolate/src/lab.js
function lab2(start2, end) {
  var l = nogamma((start2 = lab(start2)).l, (end = lab(end)).l), a2 = nogamma(start2.a, end.a), b = nogamma(start2.b, end.b), opacity2 = nogamma(start2.opacity, end.opacity);
  return function(t) {
    start2.l = l(t);
    start2.a = a2(t);
    start2.b = b(t);
    start2.opacity = opacity2(t);
    return start2 + "";
  };
}

// node_modules/d3-interpolate/src/hcl.js
function hcl2(hue2) {
  return function(start2, end) {
    var h = hue2((start2 = hcl(start2)).h, (end = hcl(end)).h), c4 = nogamma(start2.c, end.c), l = nogamma(start2.l, end.l), opacity2 = nogamma(start2.opacity, end.opacity);
    return function(t) {
      start2.h = h(t);
      start2.c = c4(t);
      start2.l = l(t);
      start2.opacity = opacity2(t);
      return start2 + "";
    };
  };
}
var hcl_default = hcl2(hue);
var hclLong = hcl2(nogamma);

// node_modules/d3-interpolate/src/cubehelix.js
function cubehelix2(hue2) {
  return function cubehelixGamma(y2) {
    y2 = +y2;
    function cubehelix3(start2, end) {
      var h = hue2((start2 = cubehelix(start2)).h, (end = cubehelix(end)).h), s2 = nogamma(start2.s, end.s), l = nogamma(start2.l, end.l), opacity2 = nogamma(start2.opacity, end.opacity);
      return function(t) {
        start2.h = h(t);
        start2.s = s2(t);
        start2.l = l(Math.pow(t, y2));
        start2.opacity = opacity2(t);
        return start2 + "";
      };
    }
    cubehelix3.gamma = cubehelixGamma;
    return cubehelix3;
  }(1);
}
var cubehelix_default = cubehelix2(hue);
var cubehelixLong = cubehelix2(nogamma);

// node_modules/d3-interpolate/src/piecewise.js
function piecewise(interpolate, values2) {
  if (values2 === void 0)
    values2 = interpolate, interpolate = value_default;
  var i = 0, n = values2.length - 1, v = values2[0], I = new Array(n < 0 ? 0 : n);
  while (i < n)
    I[i] = interpolate(v, v = values2[++i]);
  return function(t) {
    var i2 = Math.max(0, Math.min(n - 1, Math.floor(t *= n)));
    return I[i2](t - i2);
  };
}

// node_modules/d3-interpolate/src/quantize.js
function quantize_default(interpolator, n) {
  var samples = new Array(n);
  for (var i = 0; i < n; ++i)
    samples[i] = interpolator(i / (n - 1));
  return samples;
}

// node_modules/d3-timer/src/timer.js
var frame = 0;
var timeout = 0;
var interval = 0;
var pokeDelay = 1e3;
var taskHead;
var taskTail;
var clockLast = 0;
var clockNow = 0;
var clockSkew = 0;
var clock = typeof performance === "object" && performance.now ? performance : Date;
var setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) {
  setTimeout(f, 17);
};
function now() {
  return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
}
function clearNow() {
  clockNow = 0;
}
function Timer() {
  this._call = this._time = this._next = null;
}
Timer.prototype = timer.prototype = {
  constructor: Timer,
  restart: function(callback, delay, time2) {
    if (typeof callback !== "function")
      throw new TypeError("callback is not a function");
    time2 = (time2 == null ? now() : +time2) + (delay == null ? 0 : +delay);
    if (!this._next && taskTail !== this) {
      if (taskTail)
        taskTail._next = this;
      else
        taskHead = this;
      taskTail = this;
    }
    this._call = callback;
    this._time = time2;
    sleep();
  },
  stop: function() {
    if (this._call) {
      this._call = null;
      this._time = Infinity;
      sleep();
    }
  }
};
function timer(callback, delay, time2) {
  var t = new Timer();
  t.restart(callback, delay, time2);
  return t;
}
function timerFlush() {
  now();
  ++frame;
  var t = taskHead, e;
  while (t) {
    if ((e = clockNow - t._time) >= 0)
      t._call.call(void 0, e);
    t = t._next;
  }
  --frame;
}
function wake() {
  clockNow = (clockLast = clock.now()) + clockSkew;
  frame = timeout = 0;
  try {
    timerFlush();
  } finally {
    frame = 0;
    nap();
    clockNow = 0;
  }
}
function poke() {
  var now2 = clock.now(), delay = now2 - clockLast;
  if (delay > pokeDelay)
    clockSkew -= delay, clockLast = now2;
}
function nap() {
  var t03, t13 = taskHead, t22, time2 = Infinity;
  while (t13) {
    if (t13._call) {
      if (time2 > t13._time)
        time2 = t13._time;
      t03 = t13, t13 = t13._next;
    } else {
      t22 = t13._next, t13._next = null;
      t13 = t03 ? t03._next = t22 : taskHead = t22;
    }
  }
  taskTail = t03;
  sleep(time2);
}
function sleep(time2) {
  if (frame)
    return;
  if (timeout)
    timeout = clearTimeout(timeout);
  var delay = time2 - clockNow;
  if (delay > 24) {
    if (time2 < Infinity)
      timeout = setTimeout(wake, time2 - clock.now() - clockSkew);
    if (interval)
      interval = clearInterval(interval);
  } else {
    if (!interval)
      clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
    frame = 1, setFrame(wake);
  }
}

// node_modules/d3-timer/src/timeout.js
function timeout_default(callback, delay, time2) {
  var t = new Timer();
  delay = delay == null ? 0 : +delay;
  t.restart((elapsed) => {
    t.stop();
    callback(elapsed + delay);
  }, delay, time2);
  return t;
}

// node_modules/d3-transition/src/transition/schedule.js
var emptyOn = dispatch_default("start", "end", "cancel", "interrupt");
var emptyTween = [];
var CREATED = 0;
var SCHEDULED = 1;
var STARTING = 2;
var STARTED = 3;
var RUNNING = 4;
var ENDING = 5;
var ENDED = 6;
function schedule_default(node, name, id2, index2, group2, timing) {
  var schedules = node.__transition;
  if (!schedules)
    node.__transition = {};
  else if (id2 in schedules)
    return;
  create(node, id2, {
    name,
    index: index2,
    // For context during callback.
    group: group2,
    // For context during callback.
    on: emptyOn,
    tween: emptyTween,
    time: timing.time,
    delay: timing.delay,
    duration: timing.duration,
    ease: timing.ease,
    timer: null,
    state: CREATED
  });
}
function init(node, id2) {
  var schedule = get2(node, id2);
  if (schedule.state > CREATED)
    throw new Error("too late; already scheduled");
  return schedule;
}
function set2(node, id2) {
  var schedule = get2(node, id2);
  if (schedule.state > STARTED)
    throw new Error("too late; already running");
  return schedule;
}
function get2(node, id2) {
  var schedule = node.__transition;
  if (!schedule || !(schedule = schedule[id2]))
    throw new Error("transition not found");
  return schedule;
}
function create(node, id2, self2) {
  var schedules = node.__transition, tween;
  schedules[id2] = self2;
  self2.timer = timer(schedule, 0, self2.time);
  function schedule(elapsed) {
    self2.state = SCHEDULED;
    self2.timer.restart(start2, self2.delay, self2.time);
    if (self2.delay <= elapsed)
      start2(elapsed - self2.delay);
  }
  function start2(elapsed) {
    var i, j, n, o;
    if (self2.state !== SCHEDULED)
      return stop();
    for (i in schedules) {
      o = schedules[i];
      if (o.name !== self2.name)
        continue;
      if (o.state === STARTED)
        return timeout_default(start2);
      if (o.state === RUNNING) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("interrupt", node, node.__data__, o.index, o.group);
        delete schedules[i];
      } else if (+i < id2) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("cancel", node, node.__data__, o.index, o.group);
        delete schedules[i];
      }
    }
    timeout_default(function() {
      if (self2.state === STARTED) {
        self2.state = RUNNING;
        self2.timer.restart(tick, self2.delay, self2.time);
        tick(elapsed);
      }
    });
    self2.state = STARTING;
    self2.on.call("start", node, node.__data__, self2.index, self2.group);
    if (self2.state !== STARTING)
      return;
    self2.state = STARTED;
    tween = new Array(n = self2.tween.length);
    for (i = 0, j = -1; i < n; ++i) {
      if (o = self2.tween[i].value.call(node, node.__data__, self2.index, self2.group)) {
        tween[++j] = o;
      }
    }
    tween.length = j + 1;
  }
  function tick(elapsed) {
    var t = elapsed < self2.duration ? self2.ease.call(null, elapsed / self2.duration) : (self2.timer.restart(stop), self2.state = ENDING, 1), i = -1, n = tween.length;
    while (++i < n) {
      tween[i].call(node, t);
    }
    if (self2.state === ENDING) {
      self2.on.call("end", node, node.__data__, self2.index, self2.group);
      stop();
    }
  }
  function stop() {
    self2.state = ENDED;
    self2.timer.stop();
    delete schedules[id2];
    for (var i in schedules)
      return;
    delete node.__transition;
  }
}

// node_modules/d3-transition/src/interrupt.js
function interrupt_default(node, name) {
  var schedules = node.__transition, schedule, active, empty3 = true, i;
  if (!schedules)
    return;
  name = name == null ? null : name + "";
  for (i in schedules) {
    if ((schedule = schedules[i]).name !== name) {
      empty3 = false;
      continue;
    }
    active = schedule.state > STARTING && schedule.state < ENDING;
    schedule.state = ENDED;
    schedule.timer.stop();
    schedule.on.call(active ? "interrupt" : "cancel", node, node.__data__, schedule.index, schedule.group);
    delete schedules[i];
  }
  if (empty3)
    delete node.__transition;
}

// node_modules/d3-transition/src/selection/interrupt.js
function interrupt_default2(name) {
  return this.each(function() {
    interrupt_default(this, name);
  });
}

// node_modules/d3-transition/src/transition/tween.js
function tweenRemove(id2, name) {
  var tween0, tween1;
  return function() {
    var schedule = set2(this, id2), tween = schedule.tween;
    if (tween !== tween0) {
      tween1 = tween0 = tween;
      for (var i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1 = tween1.slice();
          tween1.splice(i, 1);
          break;
        }
      }
    }
    schedule.tween = tween1;
  };
}
function tweenFunction(id2, name, value) {
  var tween0, tween1;
  if (typeof value !== "function")
    throw new Error();
  return function() {
    var schedule = set2(this, id2), tween = schedule.tween;
    if (tween !== tween0) {
      tween1 = (tween0 = tween).slice();
      for (var t = { name, value }, i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1[i] = t;
          break;
        }
      }
      if (i === n)
        tween1.push(t);
    }
    schedule.tween = tween1;
  };
}
function tween_default(name, value) {
  var id2 = this._id;
  name += "";
  if (arguments.length < 2) {
    var tween = get2(this.node(), id2).tween;
    for (var i = 0, n = tween.length, t; i < n; ++i) {
      if ((t = tween[i]).name === name) {
        return t.value;
      }
    }
    return null;
  }
  return this.each((value == null ? tweenRemove : tweenFunction)(id2, name, value));
}
function tweenValue(transition2, name, value) {
  var id2 = transition2._id;
  transition2.each(function() {
    var schedule = set2(this, id2);
    (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
  });
  return function(node) {
    return get2(node, id2).value[name];
  };
}

// node_modules/d3-transition/src/transition/interpolate.js
function interpolate_default(a2, b) {
  var c4;
  return (typeof b === "number" ? number_default : b instanceof color ? rgb_default : (c4 = color(b)) ? (b = c4, rgb_default) : string_default)(a2, b);
}

// node_modules/d3-transition/src/transition/attr.js
function attrRemove2(name) {
  return function() {
    this.removeAttribute(name);
  };
}
function attrRemoveNS2(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}
function attrConstant2(name, interpolate, value1) {
  var string00, string1 = value1 + "", interpolate0;
  return function() {
    var string0 = this.getAttribute(name);
    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
  };
}
function attrConstantNS2(fullname, interpolate, value1) {
  var string00, string1 = value1 + "", interpolate0;
  return function() {
    var string0 = this.getAttributeNS(fullname.space, fullname.local);
    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
  };
}
function attrFunction2(name, interpolate, value) {
  var string00, string10, interpolate0;
  return function() {
    var string0, value1 = value(this), string1;
    if (value1 == null)
      return void this.removeAttribute(name);
    string0 = this.getAttribute(name);
    string1 = value1 + "";
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}
function attrFunctionNS2(fullname, interpolate, value) {
  var string00, string10, interpolate0;
  return function() {
    var string0, value1 = value(this), string1;
    if (value1 == null)
      return void this.removeAttributeNS(fullname.space, fullname.local);
    string0 = this.getAttributeNS(fullname.space, fullname.local);
    string1 = value1 + "";
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}
function attr_default2(name, value) {
  var fullname = namespace_default(name), i = fullname === "transform" ? interpolateTransformSvg : interpolate_default;
  return this.attrTween(name, typeof value === "function" ? (fullname.local ? attrFunctionNS2 : attrFunction2)(fullname, i, tweenValue(this, "attr." + name, value)) : value == null ? (fullname.local ? attrRemoveNS2 : attrRemove2)(fullname) : (fullname.local ? attrConstantNS2 : attrConstant2)(fullname, i, value));
}

// node_modules/d3-transition/src/transition/attrTween.js
function attrInterpolate(name, i) {
  return function(t) {
    this.setAttribute(name, i.call(this, t));
  };
}
function attrInterpolateNS(fullname, i) {
  return function(t) {
    this.setAttributeNS(fullname.space, fullname.local, i.call(this, t));
  };
}
function attrTweenNS(fullname, value) {
  var t03, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0)
      t03 = (i0 = i) && attrInterpolateNS(fullname, i);
    return t03;
  }
  tween._value = value;
  return tween;
}
function attrTween(name, value) {
  var t03, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0)
      t03 = (i0 = i) && attrInterpolate(name, i);
    return t03;
  }
  tween._value = value;
  return tween;
}
function attrTween_default(name, value) {
  var key = "attr." + name;
  if (arguments.length < 2)
    return (key = this.tween(key)) && key._value;
  if (value == null)
    return this.tween(key, null);
  if (typeof value !== "function")
    throw new Error();
  var fullname = namespace_default(name);
  return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
}

// node_modules/d3-transition/src/transition/delay.js
function delayFunction(id2, value) {
  return function() {
    init(this, id2).delay = +value.apply(this, arguments);
  };
}
function delayConstant(id2, value) {
  return value = +value, function() {
    init(this, id2).delay = value;
  };
}
function delay_default(value) {
  var id2 = this._id;
  return arguments.length ? this.each((typeof value === "function" ? delayFunction : delayConstant)(id2, value)) : get2(this.node(), id2).delay;
}

// node_modules/d3-transition/src/transition/duration.js
function durationFunction(id2, value) {
  return function() {
    set2(this, id2).duration = +value.apply(this, arguments);
  };
}
function durationConstant(id2, value) {
  return value = +value, function() {
    set2(this, id2).duration = value;
  };
}
function duration_default(value) {
  var id2 = this._id;
  return arguments.length ? this.each((typeof value === "function" ? durationFunction : durationConstant)(id2, value)) : get2(this.node(), id2).duration;
}

// node_modules/d3-transition/src/transition/ease.js
function easeConstant(id2, value) {
  if (typeof value !== "function")
    throw new Error();
  return function() {
    set2(this, id2).ease = value;
  };
}
function ease_default(value) {
  var id2 = this._id;
  return arguments.length ? this.each(easeConstant(id2, value)) : get2(this.node(), id2).ease;
}

// node_modules/d3-transition/src/transition/easeVarying.js
function easeVarying(id2, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (typeof v !== "function")
      throw new Error();
    set2(this, id2).ease = v;
  };
}
function easeVarying_default(value) {
  if (typeof value !== "function")
    throw new Error();
  return this.each(easeVarying(this._id, value));
}

// node_modules/d3-transition/src/transition/filter.js
function filter_default2(match) {
  if (typeof match !== "function")
    match = matcher_default(match);
  for (var groups2 = this._groups, m = groups2.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group2 = groups2[j], n = group2.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group2[i]) && match.call(node, node.__data__, i, group2)) {
        subgroup.push(node);
      }
    }
  }
  return new Transition(subgroups, this._parents, this._name, this._id);
}

// node_modules/d3-transition/src/transition/merge.js
function merge_default2(transition2) {
  if (transition2._id !== this._id)
    throw new Error();
  for (var groups0 = this._groups, groups1 = transition2._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge2 = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge2[i] = node;
      }
    }
  }
  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }
  return new Transition(merges, this._parents, this._name, this._id);
}

// node_modules/d3-transition/src/transition/on.js
function start(name) {
  return (name + "").trim().split(/^|\s+/).every(function(t) {
    var i = t.indexOf(".");
    if (i >= 0)
      t = t.slice(0, i);
    return !t || t === "start";
  });
}
function onFunction(id2, name, listener) {
  var on0, on1, sit = start(name) ? init : set2;
  return function() {
    var schedule = sit(this, id2), on = schedule.on;
    if (on !== on0)
      (on1 = (on0 = on).copy()).on(name, listener);
    schedule.on = on1;
  };
}
function on_default2(name, listener) {
  var id2 = this._id;
  return arguments.length < 2 ? get2(this.node(), id2).on.on(name) : this.each(onFunction(id2, name, listener));
}

// node_modules/d3-transition/src/transition/remove.js
function removeFunction(id2) {
  return function() {
    var parent = this.parentNode;
    for (var i in this.__transition)
      if (+i !== id2)
        return;
    if (parent)
      parent.removeChild(this);
  };
}
function remove_default2() {
  return this.on("end.remove", removeFunction(this._id));
}

// node_modules/d3-transition/src/transition/select.js
function select_default3(select) {
  var name = this._name, id2 = this._id;
  if (typeof select !== "function")
    select = selector_default(select);
  for (var groups2 = this._groups, m = groups2.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group2 = groups2[j], n = group2.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group2[i]) && (subnode = select.call(node, node.__data__, i, group2))) {
        if ("__data__" in node)
          subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
        schedule_default(subgroup[i], name, id2, i, subgroup, get2(node, id2));
      }
    }
  }
  return new Transition(subgroups, this._parents, name, id2);
}

// node_modules/d3-transition/src/transition/selectAll.js
function selectAll_default2(select) {
  var name = this._name, id2 = this._id;
  if (typeof select !== "function")
    select = selectorAll_default(select);
  for (var groups2 = this._groups, m = groups2.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group2 = groups2[j], n = group2.length, node, i = 0; i < n; ++i) {
      if (node = group2[i]) {
        for (var children2 = select.call(node, node.__data__, i, group2), child, inherit3 = get2(node, id2), k2 = 0, l = children2.length; k2 < l; ++k2) {
          if (child = children2[k2]) {
            schedule_default(child, name, id2, k2, children2, inherit3);
          }
        }
        subgroups.push(children2);
        parents.push(node);
      }
    }
  }
  return new Transition(subgroups, parents, name, id2);
}

// node_modules/d3-transition/src/transition/selection.js
var Selection2 = selection_default.prototype.constructor;
function selection_default2() {
  return new Selection2(this._groups, this._parents);
}

// node_modules/d3-transition/src/transition/style.js
function styleNull(name, interpolate) {
  var string00, string10, interpolate0;
  return function() {
    var string0 = styleValue(this, name), string1 = (this.style.removeProperty(name), styleValue(this, name));
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : interpolate0 = interpolate(string00 = string0, string10 = string1);
  };
}
function styleRemove2(name) {
  return function() {
    this.style.removeProperty(name);
  };
}
function styleConstant2(name, interpolate, value1) {
  var string00, string1 = value1 + "", interpolate0;
  return function() {
    var string0 = styleValue(this, name);
    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
  };
}
function styleFunction2(name, interpolate, value) {
  var string00, string10, interpolate0;
  return function() {
    var string0 = styleValue(this, name), value1 = value(this), string1 = value1 + "";
    if (value1 == null)
      string1 = value1 = (this.style.removeProperty(name), styleValue(this, name));
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}
function styleMaybeRemove(id2, name) {
  var on0, on1, listener0, key = "style." + name, event = "end." + key, remove2;
  return function() {
    var schedule = set2(this, id2), on = schedule.on, listener = schedule.value[key] == null ? remove2 || (remove2 = styleRemove2(name)) : void 0;
    if (on !== on0 || listener0 !== listener)
      (on1 = (on0 = on).copy()).on(event, listener0 = listener);
    schedule.on = on1;
  };
}
function style_default2(name, value, priority) {
  var i = (name += "") === "transform" ? interpolateTransformCss : interpolate_default;
  return value == null ? this.styleTween(name, styleNull(name, i)).on("end.style." + name, styleRemove2(name)) : typeof value === "function" ? this.styleTween(name, styleFunction2(name, i, tweenValue(this, "style." + name, value))).each(styleMaybeRemove(this._id, name)) : this.styleTween(name, styleConstant2(name, i, value), priority).on("end.style." + name, null);
}

// node_modules/d3-transition/src/transition/styleTween.js
function styleInterpolate(name, i, priority) {
  return function(t) {
    this.style.setProperty(name, i.call(this, t), priority);
  };
}
function styleTween(name, value, priority) {
  var t, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0)
      t = (i0 = i) && styleInterpolate(name, i, priority);
    return t;
  }
  tween._value = value;
  return tween;
}
function styleTween_default(name, value, priority) {
  var key = "style." + (name += "");
  if (arguments.length < 2)
    return (key = this.tween(key)) && key._value;
  if (value == null)
    return this.tween(key, null);
  if (typeof value !== "function")
    throw new Error();
  return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
}

// node_modules/d3-transition/src/transition/text.js
function textConstant2(value) {
  return function() {
    this.textContent = value;
  };
}
function textFunction2(value) {
  return function() {
    var value1 = value(this);
    this.textContent = value1 == null ? "" : value1;
  };
}
function text_default2(value) {
  return this.tween("text", typeof value === "function" ? textFunction2(tweenValue(this, "text", value)) : textConstant2(value == null ? "" : value + ""));
}

// node_modules/d3-transition/src/transition/textTween.js
function textInterpolate(i) {
  return function(t) {
    this.textContent = i.call(this, t);
  };
}
function textTween(value) {
  var t03, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0)
      t03 = (i0 = i) && textInterpolate(i);
    return t03;
  }
  tween._value = value;
  return tween;
}
function textTween_default(value) {
  var key = "text";
  if (arguments.length < 1)
    return (key = this.tween(key)) && key._value;
  if (value == null)
    return this.tween(key, null);
  if (typeof value !== "function")
    throw new Error();
  return this.tween(key, textTween(value));
}

// node_modules/d3-transition/src/transition/transition.js
function transition_default() {
  var name = this._name, id0 = this._id, id1 = newId();
  for (var groups2 = this._groups, m = groups2.length, j = 0; j < m; ++j) {
    for (var group2 = groups2[j], n = group2.length, node, i = 0; i < n; ++i) {
      if (node = group2[i]) {
        var inherit3 = get2(node, id0);
        schedule_default(node, name, id1, i, group2, {
          time: inherit3.time + inherit3.delay + inherit3.duration,
          delay: 0,
          duration: inherit3.duration,
          ease: inherit3.ease
        });
      }
    }
  }
  return new Transition(groups2, this._parents, name, id1);
}

// node_modules/d3-transition/src/transition/end.js
function end_default() {
  var on0, on1, that = this, id2 = that._id, size = that.size();
  return new Promise(function(resolve, reject) {
    var cancel = { value: reject }, end = { value: function() {
      if (--size === 0)
        resolve();
    } };
    that.each(function() {
      var schedule = set2(this, id2), on = schedule.on;
      if (on !== on0) {
        on1 = (on0 = on).copy();
        on1._.cancel.push(cancel);
        on1._.interrupt.push(cancel);
        on1._.end.push(end);
      }
      schedule.on = on1;
    });
    if (size === 0)
      resolve();
  });
}

// node_modules/d3-transition/src/transition/index.js
var id = 0;
function Transition(groups2, parents, name, id2) {
  this._groups = groups2;
  this._parents = parents;
  this._name = name;
  this._id = id2;
}
function transition(name) {
  return selection_default().transition(name);
}
function newId() {
  return ++id;
}
var selection_prototype = selection_default.prototype;
Transition.prototype = transition.prototype = {
  constructor: Transition,
  select: select_default3,
  selectAll: selectAll_default2,
  selectChild: selection_prototype.selectChild,
  selectChildren: selection_prototype.selectChildren,
  filter: filter_default2,
  merge: merge_default2,
  selection: selection_default2,
  transition: transition_default,
  call: selection_prototype.call,
  nodes: selection_prototype.nodes,
  node: selection_prototype.node,
  size: selection_prototype.size,
  empty: selection_prototype.empty,
  each: selection_prototype.each,
  on: on_default2,
  attr: attr_default2,
  attrTween: attrTween_default,
  style: style_default2,
  styleTween: styleTween_default,
  text: text_default2,
  textTween: textTween_default,
  remove: remove_default2,
  tween: tween_default,
  delay: delay_default,
  duration: duration_default,
  ease: ease_default,
  easeVarying: easeVarying_default,
  end: end_default,
  [Symbol.iterator]: selection_prototype[Symbol.iterator]
};

// node_modules/d3-ease/src/cubic.js
function cubicInOut(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}

// node_modules/d3-transition/src/selection/transition.js
var defaultTiming = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: cubicInOut
};
function inherit(node, id2) {
  var timing;
  while (!(timing = node.__transition) || !(timing = timing[id2])) {
    if (!(node = node.parentNode)) {
      throw new Error(`transition ${id2} not found`);
    }
  }
  return timing;
}
function transition_default2(name) {
  var id2, timing;
  if (name instanceof Transition) {
    id2 = name._id, name = name._name;
  } else {
    id2 = newId(), (timing = defaultTiming).time = now(), name = name == null ? null : name + "";
  }
  for (var groups2 = this._groups, m = groups2.length, j = 0; j < m; ++j) {
    for (var group2 = groups2[j], n = group2.length, node, i = 0; i < n; ++i) {
      if (node = group2[i]) {
        schedule_default(node, name, id2, i, group2, timing || inherit(node, id2));
      }
    }
  }
  return new Transition(groups2, this._parents, name, id2);
}

// node_modules/d3-transition/src/selection/index.js
selection_default.prototype.interrupt = interrupt_default2;
selection_default.prototype.transition = transition_default2;

// node_modules/d3-brush/src/brush.js
var { abs, max: max2, min: min2 } = Math;
function number1(e) {
  return [+e[0], +e[1]];
}
function number22(e) {
  return [number1(e[0]), number1(e[1])];
}
var X = {
  name: "x",
  handles: ["w", "e"].map(type),
  input: function(x2, e) {
    return x2 == null ? null : [[+x2[0], e[0][1]], [+x2[1], e[1][1]]];
  },
  output: function(xy) {
    return xy && [xy[0][0], xy[1][0]];
  }
};
var Y = {
  name: "y",
  handles: ["n", "s"].map(type),
  input: function(y2, e) {
    return y2 == null ? null : [[e[0][0], +y2[0]], [e[1][0], +y2[1]]];
  },
  output: function(xy) {
    return xy && [xy[0][1], xy[1][1]];
  }
};
var XY = {
  name: "xy",
  handles: ["n", "w", "e", "s", "nw", "ne", "sw", "se"].map(type),
  input: function(xy) {
    return xy == null ? null : number22(xy);
  },
  output: function(xy) {
    return xy;
  }
};
function type(t) {
  return { type: t };
}

// node_modules/d3-path/src/path.js
var pi = Math.PI;
var tau = 2 * pi;
var epsilon2 = 1e-6;
var tauEpsilon = tau - epsilon2;
function append(strings) {
  this._ += strings[0];
  for (let i = 1, n = strings.length; i < n; ++i) {
    this._ += arguments[i] + strings[i];
  }
}
function appendRound(digits) {
  let d = Math.floor(digits);
  if (!(d >= 0))
    throw new Error(`invalid digits: ${digits}`);
  if (d > 15)
    return append;
  const k2 = 10 ** d;
  return function(strings) {
    this._ += strings[0];
    for (let i = 1, n = strings.length; i < n; ++i) {
      this._ += Math.round(arguments[i] * k2) / k2 + strings[i];
    }
  };
}
var Path = class {
  constructor(digits) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null;
    this._ = "";
    this._append = digits == null ? append : appendRound(digits);
  }
  moveTo(x2, y2) {
    this._append`M${this._x0 = this._x1 = +x2},${this._y0 = this._y1 = +y2}`;
  }
  closePath() {
    if (this._x1 !== null) {
      this._x1 = this._x0, this._y1 = this._y0;
      this._append`Z`;
    }
  }
  lineTo(x2, y2) {
    this._append`L${this._x1 = +x2},${this._y1 = +y2}`;
  }
  quadraticCurveTo(x12, y12, x2, y2) {
    this._append`Q${+x12},${+y12},${this._x1 = +x2},${this._y1 = +y2}`;
  }
  bezierCurveTo(x12, y12, x2, y2, x3, y3) {
    this._append`C${+x12},${+y12},${+x2},${+y2},${this._x1 = +x3},${this._y1 = +y3}`;
  }
  arcTo(x12, y12, x2, y2, r) {
    x12 = +x12, y12 = +y12, x2 = +x2, y2 = +y2, r = +r;
    if (r < 0)
      throw new Error(`negative radius: ${r}`);
    let x05 = this._x1, y05 = this._y1, x21 = x2 - x12, y21 = y2 - y12, x01 = x05 - x12, y01 = y05 - y12, l01_2 = x01 * x01 + y01 * y01;
    if (this._x1 === null) {
      this._append`M${this._x1 = x12},${this._y1 = y12}`;
    } else if (!(l01_2 > epsilon2))
      ;
    else if (!(Math.abs(y01 * x21 - y21 * x01) > epsilon2) || !r) {
      this._append`L${this._x1 = x12},${this._y1 = y12}`;
    } else {
      let x20 = x2 - x05, y20 = y2 - y05, l21_2 = x21 * x21 + y21 * y21, l20_2 = x20 * x20 + y20 * y20, l21 = Math.sqrt(l21_2), l01 = Math.sqrt(l01_2), l = r * Math.tan((pi - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2), t01 = l / l01, t21 = l / l21;
      if (Math.abs(t01 - 1) > epsilon2) {
        this._append`L${x12 + t01 * x01},${y12 + t01 * y01}`;
      }
      this._append`A${r},${r},0,0,${+(y01 * x20 > x01 * y20)},${this._x1 = x12 + t21 * x21},${this._y1 = y12 + t21 * y21}`;
    }
  }
  arc(x2, y2, r, a0, a1, ccw) {
    x2 = +x2, y2 = +y2, r = +r, ccw = !!ccw;
    if (r < 0)
      throw new Error(`negative radius: ${r}`);
    let dx = r * Math.cos(a0), dy = r * Math.sin(a0), x05 = x2 + dx, y05 = y2 + dy, cw = 1 ^ ccw, da = ccw ? a0 - a1 : a1 - a0;
    if (this._x1 === null) {
      this._append`M${x05},${y05}`;
    } else if (Math.abs(this._x1 - x05) > epsilon2 || Math.abs(this._y1 - y05) > epsilon2) {
      this._append`L${x05},${y05}`;
    }
    if (!r)
      return;
    if (da < 0)
      da = da % tau + tau;
    if (da > tauEpsilon) {
      this._append`A${r},${r},0,1,${cw},${x2 - dx},${y2 - dy}A${r},${r},0,1,${cw},${this._x1 = x05},${this._y1 = y05}`;
    } else if (da > epsilon2) {
      this._append`A${r},${r},0,${+(da >= pi)},${cw},${this._x1 = x2 + r * Math.cos(a1)},${this._y1 = y2 + r * Math.sin(a1)}`;
    }
  }
  rect(x2, y2, w, h) {
    this._append`M${this._x0 = this._x1 = +x2},${this._y0 = this._y1 = +y2}h${w = +w}v${+h}h${-w}Z`;
  }
  toString() {
    return this._;
  }
};
function path() {
  return new Path();
}
path.prototype = Path.prototype;
function pathRound(digits = 3) {
  return new Path(+digits);
}

// node_modules/d3-format/src/formatDecimal.js
function formatDecimal_default(x2) {
  return Math.abs(x2 = Math.round(x2)) >= 1e21 ? x2.toLocaleString("en").replace(/,/g, "") : x2.toString(10);
}
function formatDecimalParts(x2, p) {
  if ((i = (x2 = p ? x2.toExponential(p - 1) : x2.toExponential()).indexOf("e")) < 0)
    return null;
  var i, coefficient = x2.slice(0, i);
  return [
    coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient,
    +x2.slice(i + 1)
  ];
}

// node_modules/d3-format/src/exponent.js
function exponent_default(x2) {
  return x2 = formatDecimalParts(Math.abs(x2)), x2 ? x2[1] : NaN;
}

// node_modules/d3-format/src/formatGroup.js
function formatGroup_default(grouping, thousands) {
  return function(value, width) {
    var i = value.length, t = [], j = 0, g = grouping[0], length3 = 0;
    while (i > 0 && g > 0) {
      if (length3 + g + 1 > width)
        g = Math.max(1, width - length3);
      t.push(value.substring(i -= g, i + g));
      if ((length3 += g + 1) > width)
        break;
      g = grouping[j = (j + 1) % grouping.length];
    }
    return t.reverse().join(thousands);
  };
}

// node_modules/d3-format/src/formatNumerals.js
function formatNumerals_default(numerals) {
  return function(value) {
    return value.replace(/[0-9]/g, function(i) {
      return numerals[+i];
    });
  };
}

// node_modules/d3-format/src/formatSpecifier.js
var re = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function formatSpecifier(specifier) {
  if (!(match = re.exec(specifier)))
    throw new Error("invalid format: " + specifier);
  var match;
  return new FormatSpecifier({
    fill: match[1],
    align: match[2],
    sign: match[3],
    symbol: match[4],
    zero: match[5],
    width: match[6],
    comma: match[7],
    precision: match[8] && match[8].slice(1),
    trim: match[9],
    type: match[10]
  });
}
formatSpecifier.prototype = FormatSpecifier.prototype;
function FormatSpecifier(specifier) {
  this.fill = specifier.fill === void 0 ? " " : specifier.fill + "";
  this.align = specifier.align === void 0 ? ">" : specifier.align + "";
  this.sign = specifier.sign === void 0 ? "-" : specifier.sign + "";
  this.symbol = specifier.symbol === void 0 ? "" : specifier.symbol + "";
  this.zero = !!specifier.zero;
  this.width = specifier.width === void 0 ? void 0 : +specifier.width;
  this.comma = !!specifier.comma;
  this.precision = specifier.precision === void 0 ? void 0 : +specifier.precision;
  this.trim = !!specifier.trim;
  this.type = specifier.type === void 0 ? "" : specifier.type + "";
}
FormatSpecifier.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};

// node_modules/d3-format/src/formatTrim.js
function formatTrim_default(s2) {
  out:
    for (var n = s2.length, i = 1, i0 = -1, i1; i < n; ++i) {
      switch (s2[i]) {
        case ".":
          i0 = i1 = i;
          break;
        case "0":
          if (i0 === 0)
            i0 = i;
          i1 = i;
          break;
        default:
          if (!+s2[i])
            break out;
          if (i0 > 0)
            i0 = 0;
          break;
      }
    }
  return i0 > 0 ? s2.slice(0, i0) + s2.slice(i1 + 1) : s2;
}

// node_modules/d3-format/src/formatPrefixAuto.js
var prefixExponent;
function formatPrefixAuto_default(x2, p) {
  var d = formatDecimalParts(x2, p);
  if (!d)
    return x2 + "";
  var coefficient = d[0], exponent = d[1], i = exponent - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent / 3))) * 3) + 1, n = coefficient.length;
  return i === n ? coefficient : i > n ? coefficient + new Array(i - n + 1).join("0") : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i) : "0." + new Array(1 - i).join("0") + formatDecimalParts(x2, Math.max(0, p + i - 1))[0];
}

// node_modules/d3-format/src/formatRounded.js
function formatRounded_default(x2, p) {
  var d = formatDecimalParts(x2, p);
  if (!d)
    return x2 + "";
  var coefficient = d[0], exponent = d[1];
  return exponent < 0 ? "0." + new Array(-exponent).join("0") + coefficient : coefficient.length > exponent + 1 ? coefficient.slice(0, exponent + 1) + "." + coefficient.slice(exponent + 1) : coefficient + new Array(exponent - coefficient.length + 2).join("0");
}

// node_modules/d3-format/src/formatTypes.js
var formatTypes_default = {
  "%": (x2, p) => (x2 * 100).toFixed(p),
  "b": (x2) => Math.round(x2).toString(2),
  "c": (x2) => x2 + "",
  "d": formatDecimal_default,
  "e": (x2, p) => x2.toExponential(p),
  "f": (x2, p) => x2.toFixed(p),
  "g": (x2, p) => x2.toPrecision(p),
  "o": (x2) => Math.round(x2).toString(8),
  "p": (x2, p) => formatRounded_default(x2 * 100, p),
  "r": formatRounded_default,
  "s": formatPrefixAuto_default,
  "X": (x2) => Math.round(x2).toString(16).toUpperCase(),
  "x": (x2) => Math.round(x2).toString(16)
};

// node_modules/d3-format/src/identity.js
function identity_default2(x2) {
  return x2;
}

// node_modules/d3-format/src/locale.js
var map = Array.prototype.map;
var prefixes = ["y", "z", "a", "f", "p", "n", "\xB5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function locale_default(locale3) {
  var group2 = locale3.grouping === void 0 || locale3.thousands === void 0 ? identity_default2 : formatGroup_default(map.call(locale3.grouping, Number), locale3.thousands + ""), currencyPrefix = locale3.currency === void 0 ? "" : locale3.currency[0] + "", currencySuffix = locale3.currency === void 0 ? "" : locale3.currency[1] + "", decimal = locale3.decimal === void 0 ? "." : locale3.decimal + "", numerals = locale3.numerals === void 0 ? identity_default2 : formatNumerals_default(map.call(locale3.numerals, String)), percent = locale3.percent === void 0 ? "%" : locale3.percent + "", minus = locale3.minus === void 0 ? "\u2212" : locale3.minus + "", nan = locale3.nan === void 0 ? "NaN" : locale3.nan + "";
  function newFormat(specifier) {
    specifier = formatSpecifier(specifier);
    var fill = specifier.fill, align = specifier.align, sign3 = specifier.sign, symbol2 = specifier.symbol, zero3 = specifier.zero, width = specifier.width, comma = specifier.comma, precision = specifier.precision, trim = specifier.trim, type2 = specifier.type;
    if (type2 === "n")
      comma = true, type2 = "g";
    else if (!formatTypes_default[type2])
      precision === void 0 && (precision = 12), trim = true, type2 = "g";
    if (zero3 || fill === "0" && align === "=")
      zero3 = true, fill = "0", align = "=";
    var prefix = symbol2 === "$" ? currencyPrefix : symbol2 === "#" && /[boxX]/.test(type2) ? "0" + type2.toLowerCase() : "", suffix = symbol2 === "$" ? currencySuffix : /[%p]/.test(type2) ? percent : "";
    var formatType = formatTypes_default[type2], maybeSuffix = /[defgprs%]/.test(type2);
    precision = precision === void 0 ? 6 : /[gprs]/.test(type2) ? Math.max(1, Math.min(21, precision)) : Math.max(0, Math.min(20, precision));
    function format3(value) {
      var valuePrefix = prefix, valueSuffix = suffix, i, n, c4;
      if (type2 === "c") {
        valueSuffix = formatType(value) + valueSuffix;
        value = "";
      } else {
        value = +value;
        var valueNegative = value < 0 || 1 / value < 0;
        value = isNaN(value) ? nan : formatType(Math.abs(value), precision);
        if (trim)
          value = formatTrim_default(value);
        if (valueNegative && +value === 0 && sign3 !== "+")
          valueNegative = false;
        valuePrefix = (valueNegative ? sign3 === "(" ? sign3 : minus : sign3 === "-" || sign3 === "(" ? "" : sign3) + valuePrefix;
        valueSuffix = (type2 === "s" ? prefixes[8 + prefixExponent / 3] : "") + valueSuffix + (valueNegative && sign3 === "(" ? ")" : "");
        if (maybeSuffix) {
          i = -1, n = value.length;
          while (++i < n) {
            if (c4 = value.charCodeAt(i), 48 > c4 || c4 > 57) {
              valueSuffix = (c4 === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
              value = value.slice(0, i);
              break;
            }
          }
        }
      }
      if (comma && !zero3)
        value = group2(value, Infinity);
      var length3 = valuePrefix.length + value.length + valueSuffix.length, padding = length3 < width ? new Array(width - length3 + 1).join(fill) : "";
      if (comma && zero3)
        value = group2(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";
      switch (align) {
        case "<":
          value = valuePrefix + value + valueSuffix + padding;
          break;
        case "=":
          value = valuePrefix + padding + value + valueSuffix;
          break;
        case "^":
          value = padding.slice(0, length3 = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length3);
          break;
        default:
          value = padding + valuePrefix + value + valueSuffix;
          break;
      }
      return numerals(value);
    }
    format3.toString = function() {
      return specifier + "";
    };
    return format3;
  }
  function formatPrefix2(specifier, value) {
    var f = newFormat((specifier = formatSpecifier(specifier), specifier.type = "f", specifier)), e = Math.max(-8, Math.min(8, Math.floor(exponent_default(value) / 3))) * 3, k2 = Math.pow(10, -e), prefix = prefixes[8 + e / 3];
    return function(value2) {
      return f(k2 * value2) + prefix;
    };
  }
  return {
    format: newFormat,
    formatPrefix: formatPrefix2
  };
}

// node_modules/d3-format/src/defaultLocale.js
var locale;
var format;
var formatPrefix;
defaultLocale({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function defaultLocale(definition) {
  locale = locale_default(definition);
  format = locale.format;
  formatPrefix = locale.formatPrefix;
  return locale;
}

// node_modules/d3-format/src/precisionFixed.js
function precisionFixed_default(step) {
  return Math.max(0, -exponent_default(Math.abs(step)));
}

// node_modules/d3-format/src/precisionPrefix.js
function precisionPrefix_default(step, value) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(exponent_default(value) / 3))) * 3 - exponent_default(Math.abs(step)));
}

// node_modules/d3-format/src/precisionRound.js
function precisionRound_default(step, max3) {
  step = Math.abs(step), max3 = Math.abs(max3) - step;
  return Math.max(0, exponent_default(max3) - exponent_default(step)) + 1;
}

// node_modules/d3-geo/src/math.js
var epsilon3 = 1e-6;
var epsilon22 = 1e-12;
var pi2 = Math.PI;
var halfPi = pi2 / 2;
var quarterPi = pi2 / 4;
var tau2 = pi2 * 2;
var degrees3 = 180 / pi2;
var radians2 = pi2 / 180;
var abs2 = Math.abs;
var atan = Math.atan;
var atan2 = Math.atan2;
var cos = Math.cos;
var exp = Math.exp;
var log = Math.log;
var pow = Math.pow;
var sin = Math.sin;
var sign = Math.sign || function(x2) {
  return x2 > 0 ? 1 : x2 < 0 ? -1 : 0;
};
var sqrt = Math.sqrt;
var tan = Math.tan;
function acos(x2) {
  return x2 > 1 ? 0 : x2 < -1 ? pi2 : Math.acos(x2);
}
function asin(x2) {
  return x2 > 1 ? halfPi : x2 < -1 ? -halfPi : Math.asin(x2);
}

// node_modules/d3-geo/src/noop.js
function noop2() {
}

// node_modules/d3-geo/src/stream.js
function streamGeometry(geometry, stream) {
  if (geometry && streamGeometryType.hasOwnProperty(geometry.type)) {
    streamGeometryType[geometry.type](geometry, stream);
  }
}
var streamObjectType = {
  Feature: function(object, stream) {
    streamGeometry(object.geometry, stream);
  },
  FeatureCollection: function(object, stream) {
    var features = object.features, i = -1, n = features.length;
    while (++i < n)
      streamGeometry(features[i].geometry, stream);
  }
};
var streamGeometryType = {
  Sphere: function(object, stream) {
    stream.sphere();
  },
  Point: function(object, stream) {
    object = object.coordinates;
    stream.point(object[0], object[1], object[2]);
  },
  MultiPoint: function(object, stream) {
    var coordinates = object.coordinates, i = -1, n = coordinates.length;
    while (++i < n)
      object = coordinates[i], stream.point(object[0], object[1], object[2]);
  },
  LineString: function(object, stream) {
    streamLine(object.coordinates, stream, 0);
  },
  MultiLineString: function(object, stream) {
    var coordinates = object.coordinates, i = -1, n = coordinates.length;
    while (++i < n)
      streamLine(coordinates[i], stream, 0);
  },
  Polygon: function(object, stream) {
    streamPolygon(object.coordinates, stream);
  },
  MultiPolygon: function(object, stream) {
    var coordinates = object.coordinates, i = -1, n = coordinates.length;
    while (++i < n)
      streamPolygon(coordinates[i], stream);
  },
  GeometryCollection: function(object, stream) {
    var geometries = object.geometries, i = -1, n = geometries.length;
    while (++i < n)
      streamGeometry(geometries[i], stream);
  }
};
function streamLine(coordinates, stream, closed) {
  var i = -1, n = coordinates.length - closed, coordinate;
  stream.lineStart();
  while (++i < n)
    coordinate = coordinates[i], stream.point(coordinate[0], coordinate[1], coordinate[2]);
  stream.lineEnd();
}
function streamPolygon(coordinates, stream) {
  var i = -1, n = coordinates.length;
  stream.polygonStart();
  while (++i < n)
    streamLine(coordinates[i], stream, 1);
  stream.polygonEnd();
}
function stream_default(object, stream) {
  if (object && streamObjectType.hasOwnProperty(object.type)) {
    streamObjectType[object.type](object, stream);
  } else {
    streamGeometry(object, stream);
  }
}

// node_modules/d3-geo/src/cartesian.js
function spherical(cartesian2) {
  return [atan2(cartesian2[1], cartesian2[0]), asin(cartesian2[2])];
}
function cartesian(spherical2) {
  var lambda = spherical2[0], phi = spherical2[1], cosPhi = cos(phi);
  return [cosPhi * cos(lambda), cosPhi * sin(lambda), sin(phi)];
}
function cartesianDot(a2, b) {
  return a2[0] * b[0] + a2[1] * b[1] + a2[2] * b[2];
}
function cartesianCross(a2, b) {
  return [a2[1] * b[2] - a2[2] * b[1], a2[2] * b[0] - a2[0] * b[2], a2[0] * b[1] - a2[1] * b[0]];
}
function cartesianAddInPlace(a2, b) {
  a2[0] += b[0], a2[1] += b[1], a2[2] += b[2];
}
function cartesianScale(vector, k2) {
  return [vector[0] * k2, vector[1] * k2, vector[2] * k2];
}
function cartesianNormalizeInPlace(d) {
  var l = sqrt(d[0] * d[0] + d[1] * d[1] + d[2] * d[2]);
  d[0] /= l, d[1] /= l, d[2] /= l;
}

// node_modules/d3-geo/src/compose.js
function compose_default(a2, b) {
  function compose(x2, y2) {
    return x2 = a2(x2, y2), b(x2[0], x2[1]);
  }
  if (a2.invert && b.invert)
    compose.invert = function(x2, y2) {
      return x2 = b.invert(x2, y2), x2 && a2.invert(x2[0], x2[1]);
    };
  return compose;
}

// node_modules/d3-geo/src/rotation.js
function rotationIdentity(lambda, phi) {
  if (abs2(lambda) > pi2)
    lambda -= Math.round(lambda / tau2) * tau2;
  return [lambda, phi];
}
rotationIdentity.invert = rotationIdentity;
function rotateRadians(deltaLambda, deltaPhi, deltaGamma) {
  return (deltaLambda %= tau2) ? deltaPhi || deltaGamma ? compose_default(rotationLambda(deltaLambda), rotationPhiGamma(deltaPhi, deltaGamma)) : rotationLambda(deltaLambda) : deltaPhi || deltaGamma ? rotationPhiGamma(deltaPhi, deltaGamma) : rotationIdentity;
}
function forwardRotationLambda(deltaLambda) {
  return function(lambda, phi) {
    lambda += deltaLambda;
    if (abs2(lambda) > pi2)
      lambda -= Math.round(lambda / tau2) * tau2;
    return [lambda, phi];
  };
}
function rotationLambda(deltaLambda) {
  var rotation = forwardRotationLambda(deltaLambda);
  rotation.invert = forwardRotationLambda(-deltaLambda);
  return rotation;
}
function rotationPhiGamma(deltaPhi, deltaGamma) {
  var cosDeltaPhi = cos(deltaPhi), sinDeltaPhi = sin(deltaPhi), cosDeltaGamma = cos(deltaGamma), sinDeltaGamma = sin(deltaGamma);
  function rotation(lambda, phi) {
    var cosPhi = cos(phi), x2 = cos(lambda) * cosPhi, y2 = sin(lambda) * cosPhi, z = sin(phi), k2 = z * cosDeltaPhi + x2 * sinDeltaPhi;
    return [
      atan2(y2 * cosDeltaGamma - k2 * sinDeltaGamma, x2 * cosDeltaPhi - z * sinDeltaPhi),
      asin(k2 * cosDeltaGamma + y2 * sinDeltaGamma)
    ];
  }
  rotation.invert = function(lambda, phi) {
    var cosPhi = cos(phi), x2 = cos(lambda) * cosPhi, y2 = sin(lambda) * cosPhi, z = sin(phi), k2 = z * cosDeltaGamma - y2 * sinDeltaGamma;
    return [
      atan2(y2 * cosDeltaGamma + z * sinDeltaGamma, x2 * cosDeltaPhi + k2 * sinDeltaPhi),
      asin(k2 * cosDeltaPhi - x2 * sinDeltaPhi)
    ];
  };
  return rotation;
}
function rotation_default(rotate) {
  rotate = rotateRadians(rotate[0] * radians2, rotate[1] * radians2, rotate.length > 2 ? rotate[2] * radians2 : 0);
  function forward(coordinates) {
    coordinates = rotate(coordinates[0] * radians2, coordinates[1] * radians2);
    return coordinates[0] *= degrees3, coordinates[1] *= degrees3, coordinates;
  }
  forward.invert = function(coordinates) {
    coordinates = rotate.invert(coordinates[0] * radians2, coordinates[1] * radians2);
    return coordinates[0] *= degrees3, coordinates[1] *= degrees3, coordinates;
  };
  return forward;
}

// node_modules/d3-geo/src/circle.js
function circleStream(stream, radius2, delta, direction, t03, t13) {
  if (!delta)
    return;
  var cosRadius = cos(radius2), sinRadius = sin(radius2), step = direction * delta;
  if (t03 == null) {
    t03 = radius2 + direction * tau2;
    t13 = radius2 - step / 2;
  } else {
    t03 = circleRadius(cosRadius, t03);
    t13 = circleRadius(cosRadius, t13);
    if (direction > 0 ? t03 < t13 : t03 > t13)
      t03 += direction * tau2;
  }
  for (var point6, t = t03; direction > 0 ? t > t13 : t < t13; t -= step) {
    point6 = spherical([cosRadius, -sinRadius * cos(t), -sinRadius * sin(t)]);
    stream.point(point6[0], point6[1]);
  }
}
function circleRadius(cosRadius, point6) {
  point6 = cartesian(point6), point6[0] -= cosRadius;
  cartesianNormalizeInPlace(point6);
  var radius2 = acos(-point6[1]);
  return ((-point6[2] < 0 ? -radius2 : radius2) + tau2 - epsilon3) % tau2;
}

// node_modules/d3-geo/src/clip/buffer.js
function buffer_default() {
  var lines = [], line2;
  return {
    point: function(x2, y2, m) {
      line2.push([x2, y2, m]);
    },
    lineStart: function() {
      lines.push(line2 = []);
    },
    lineEnd: noop2,
    rejoin: function() {
      if (lines.length > 1)
        lines.push(lines.pop().concat(lines.shift()));
    },
    result: function() {
      var result = lines;
      lines = [];
      line2 = null;
      return result;
    }
  };
}

// node_modules/d3-geo/src/pointEqual.js
function pointEqual_default(a2, b) {
  return abs2(a2[0] - b[0]) < epsilon3 && abs2(a2[1] - b[1]) < epsilon3;
}

// node_modules/d3-geo/src/clip/rejoin.js
function Intersection(point6, points, other, entry) {
  this.x = point6;
  this.z = points;
  this.o = other;
  this.e = entry;
  this.v = false;
  this.n = this.p = null;
}
function rejoin_default(segments, compareIntersection2, startInside, interpolate, stream) {
  var subject = [], clip = [], i, n;
  segments.forEach(function(segment) {
    if ((n2 = segment.length - 1) <= 0)
      return;
    var n2, p0 = segment[0], p1 = segment[n2], x2;
    if (pointEqual_default(p0, p1)) {
      if (!p0[2] && !p1[2]) {
        stream.lineStart();
        for (i = 0; i < n2; ++i)
          stream.point((p0 = segment[i])[0], p0[1]);
        stream.lineEnd();
        return;
      }
      p1[0] += 2 * epsilon3;
    }
    subject.push(x2 = new Intersection(p0, segment, null, true));
    clip.push(x2.o = new Intersection(p0, null, x2, false));
    subject.push(x2 = new Intersection(p1, segment, null, false));
    clip.push(x2.o = new Intersection(p1, null, x2, true));
  });
  if (!subject.length)
    return;
  clip.sort(compareIntersection2);
  link(subject);
  link(clip);
  for (i = 0, n = clip.length; i < n; ++i) {
    clip[i].e = startInside = !startInside;
  }
  var start2 = subject[0], points, point6;
  while (1) {
    var current = start2, isSubject = true;
    while (current.v)
      if ((current = current.n) === start2)
        return;
    points = current.z;
    stream.lineStart();
    do {
      current.v = current.o.v = true;
      if (current.e) {
        if (isSubject) {
          for (i = 0, n = points.length; i < n; ++i)
            stream.point((point6 = points[i])[0], point6[1]);
        } else {
          interpolate(current.x, current.n.x, 1, stream);
        }
        current = current.n;
      } else {
        if (isSubject) {
          points = current.p.z;
          for (i = points.length - 1; i >= 0; --i)
            stream.point((point6 = points[i])[0], point6[1]);
        } else {
          interpolate(current.x, current.p.x, -1, stream);
        }
        current = current.p;
      }
      current = current.o;
      points = current.z;
      isSubject = !isSubject;
    } while (!current.v);
    stream.lineEnd();
  }
}
function link(array2) {
  if (!(n = array2.length))
    return;
  var n, i = 0, a2 = array2[0], b;
  while (++i < n) {
    a2.n = b = array2[i];
    b.p = a2;
    a2 = b;
  }
  a2.n = b = array2[0];
  b.p = a2;
}

// node_modules/d3-geo/src/polygonContains.js
function longitude(point6) {
  return abs2(point6[0]) <= pi2 ? point6[0] : sign(point6[0]) * ((abs2(point6[0]) + pi2) % tau2 - pi2);
}
function polygonContains_default(polygon, point6) {
  var lambda = longitude(point6), phi = point6[1], sinPhi = sin(phi), normal = [sin(lambda), -cos(lambda), 0], angle = 0, winding = 0;
  var sum2 = new Adder();
  if (sinPhi === 1)
    phi = halfPi + epsilon3;
  else if (sinPhi === -1)
    phi = -halfPi - epsilon3;
  for (var i = 0, n = polygon.length; i < n; ++i) {
    if (!(m = (ring = polygon[i]).length))
      continue;
    var ring, m, point0 = ring[m - 1], lambda0 = longitude(point0), phi0 = point0[1] / 2 + quarterPi, sinPhi0 = sin(phi0), cosPhi0 = cos(phi0);
    for (var j = 0; j < m; ++j, lambda0 = lambda1, sinPhi0 = sinPhi1, cosPhi0 = cosPhi1, point0 = point1) {
      var point1 = ring[j], lambda1 = longitude(point1), phi1 = point1[1] / 2 + quarterPi, sinPhi1 = sin(phi1), cosPhi1 = cos(phi1), delta = lambda1 - lambda0, sign3 = delta >= 0 ? 1 : -1, absDelta = sign3 * delta, antimeridian = absDelta > pi2, k2 = sinPhi0 * sinPhi1;
      sum2.add(atan2(k2 * sign3 * sin(absDelta), cosPhi0 * cosPhi1 + k2 * cos(absDelta)));
      angle += antimeridian ? delta + sign3 * tau2 : delta;
      if (antimeridian ^ lambda0 >= lambda ^ lambda1 >= lambda) {
        var arc = cartesianCross(cartesian(point0), cartesian(point1));
        cartesianNormalizeInPlace(arc);
        var intersection = cartesianCross(normal, arc);
        cartesianNormalizeInPlace(intersection);
        var phiArc = (antimeridian ^ delta >= 0 ? -1 : 1) * asin(intersection[2]);
        if (phi > phiArc || phi === phiArc && (arc[0] || arc[1])) {
          winding += antimeridian ^ delta >= 0 ? 1 : -1;
        }
      }
    }
  }
  return (angle < -epsilon3 || angle < epsilon3 && sum2 < -epsilon22) ^ winding & 1;
}

// node_modules/d3-geo/src/clip/index.js
function clip_default(pointVisible, clipLine, interpolate, start2) {
  return function(sink) {
    var line2 = clipLine(sink), ringBuffer = buffer_default(), ringSink = clipLine(ringBuffer), polygonStarted = false, polygon, segments, ring;
    var clip = {
      point: point6,
      lineStart,
      lineEnd,
      polygonStart: function() {
        clip.point = pointRing;
        clip.lineStart = ringStart;
        clip.lineEnd = ringEnd;
        segments = [];
        polygon = [];
      },
      polygonEnd: function() {
        clip.point = point6;
        clip.lineStart = lineStart;
        clip.lineEnd = lineEnd;
        segments = merge(segments);
        var startInside = polygonContains_default(polygon, start2);
        if (segments.length) {
          if (!polygonStarted)
            sink.polygonStart(), polygonStarted = true;
          rejoin_default(segments, compareIntersection, startInside, interpolate, sink);
        } else if (startInside) {
          if (!polygonStarted)
            sink.polygonStart(), polygonStarted = true;
          sink.lineStart();
          interpolate(null, null, 1, sink);
          sink.lineEnd();
        }
        if (polygonStarted)
          sink.polygonEnd(), polygonStarted = false;
        segments = polygon = null;
      },
      sphere: function() {
        sink.polygonStart();
        sink.lineStart();
        interpolate(null, null, 1, sink);
        sink.lineEnd();
        sink.polygonEnd();
      }
    };
    function point6(lambda, phi) {
      if (pointVisible(lambda, phi))
        sink.point(lambda, phi);
    }
    function pointLine(lambda, phi) {
      line2.point(lambda, phi);
    }
    function lineStart() {
      clip.point = pointLine;
      line2.lineStart();
    }
    function lineEnd() {
      clip.point = point6;
      line2.lineEnd();
    }
    function pointRing(lambda, phi) {
      ring.push([lambda, phi]);
      ringSink.point(lambda, phi);
    }
    function ringStart() {
      ringSink.lineStart();
      ring = [];
    }
    function ringEnd() {
      pointRing(ring[0][0], ring[0][1]);
      ringSink.lineEnd();
      var clean = ringSink.clean(), ringSegments = ringBuffer.result(), i, n = ringSegments.length, m, segment, point7;
      ring.pop();
      polygon.push(ring);
      ring = null;
      if (!n)
        return;
      if (clean & 1) {
        segment = ringSegments[0];
        if ((m = segment.length - 1) > 0) {
          if (!polygonStarted)
            sink.polygonStart(), polygonStarted = true;
          sink.lineStart();
          for (i = 0; i < m; ++i)
            sink.point((point7 = segment[i])[0], point7[1]);
          sink.lineEnd();
        }
        return;
      }
      if (n > 1 && clean & 2)
        ringSegments.push(ringSegments.pop().concat(ringSegments.shift()));
      segments.push(ringSegments.filter(validSegment));
    }
    return clip;
  };
}
function validSegment(segment) {
  return segment.length > 1;
}
function compareIntersection(a2, b) {
  return ((a2 = a2.x)[0] < 0 ? a2[1] - halfPi - epsilon3 : halfPi - a2[1]) - ((b = b.x)[0] < 0 ? b[1] - halfPi - epsilon3 : halfPi - b[1]);
}

// node_modules/d3-geo/src/clip/antimeridian.js
var antimeridian_default = clip_default(
  function() {
    return true;
  },
  clipAntimeridianLine,
  clipAntimeridianInterpolate,
  [-pi2, -halfPi]
);
function clipAntimeridianLine(stream) {
  var lambda0 = NaN, phi0 = NaN, sign0 = NaN, clean;
  return {
    lineStart: function() {
      stream.lineStart();
      clean = 1;
    },
    point: function(lambda1, phi1) {
      var sign1 = lambda1 > 0 ? pi2 : -pi2, delta = abs2(lambda1 - lambda0);
      if (abs2(delta - pi2) < epsilon3) {
        stream.point(lambda0, phi0 = (phi0 + phi1) / 2 > 0 ? halfPi : -halfPi);
        stream.point(sign0, phi0);
        stream.lineEnd();
        stream.lineStart();
        stream.point(sign1, phi0);
        stream.point(lambda1, phi0);
        clean = 0;
      } else if (sign0 !== sign1 && delta >= pi2) {
        if (abs2(lambda0 - sign0) < epsilon3)
          lambda0 -= sign0 * epsilon3;
        if (abs2(lambda1 - sign1) < epsilon3)
          lambda1 -= sign1 * epsilon3;
        phi0 = clipAntimeridianIntersect(lambda0, phi0, lambda1, phi1);
        stream.point(sign0, phi0);
        stream.lineEnd();
        stream.lineStart();
        stream.point(sign1, phi0);
        clean = 0;
      }
      stream.point(lambda0 = lambda1, phi0 = phi1);
      sign0 = sign1;
    },
    lineEnd: function() {
      stream.lineEnd();
      lambda0 = phi0 = NaN;
    },
    clean: function() {
      return 2 - clean;
    }
  };
}
function clipAntimeridianIntersect(lambda0, phi0, lambda1, phi1) {
  var cosPhi0, cosPhi1, sinLambda0Lambda1 = sin(lambda0 - lambda1);
  return abs2(sinLambda0Lambda1) > epsilon3 ? atan((sin(phi0) * (cosPhi1 = cos(phi1)) * sin(lambda1) - sin(phi1) * (cosPhi0 = cos(phi0)) * sin(lambda0)) / (cosPhi0 * cosPhi1 * sinLambda0Lambda1)) : (phi0 + phi1) / 2;
}
function clipAntimeridianInterpolate(from, to, direction, stream) {
  var phi;
  if (from == null) {
    phi = direction * halfPi;
    stream.point(-pi2, phi);
    stream.point(0, phi);
    stream.point(pi2, phi);
    stream.point(pi2, 0);
    stream.point(pi2, -phi);
    stream.point(0, -phi);
    stream.point(-pi2, -phi);
    stream.point(-pi2, 0);
    stream.point(-pi2, phi);
  } else if (abs2(from[0] - to[0]) > epsilon3) {
    var lambda = from[0] < to[0] ? pi2 : -pi2;
    phi = direction * lambda / 2;
    stream.point(-lambda, phi);
    stream.point(0, phi);
    stream.point(lambda, phi);
  } else {
    stream.point(to[0], to[1]);
  }
}

// node_modules/d3-geo/src/clip/circle.js
function circle_default(radius2) {
  var cr = cos(radius2), delta = 2 * radians2, smallRadius = cr > 0, notHemisphere = abs2(cr) > epsilon3;
  function interpolate(from, to, direction, stream) {
    circleStream(stream, radius2, delta, direction, from, to);
  }
  function visible(lambda, phi) {
    return cos(lambda) * cos(phi) > cr;
  }
  function clipLine(stream) {
    var point0, c0, v0, v00, clean;
    return {
      lineStart: function() {
        v00 = v0 = false;
        clean = 1;
      },
      point: function(lambda, phi) {
        var point1 = [lambda, phi], point22, v = visible(lambda, phi), c4 = smallRadius ? v ? 0 : code(lambda, phi) : v ? code(lambda + (lambda < 0 ? pi2 : -pi2), phi) : 0;
        if (!point0 && (v00 = v0 = v))
          stream.lineStart();
        if (v !== v0) {
          point22 = intersect(point0, point1);
          if (!point22 || pointEqual_default(point0, point22) || pointEqual_default(point1, point22))
            point1[2] = 1;
        }
        if (v !== v0) {
          clean = 0;
          if (v) {
            stream.lineStart();
            point22 = intersect(point1, point0);
            stream.point(point22[0], point22[1]);
          } else {
            point22 = intersect(point0, point1);
            stream.point(point22[0], point22[1], 2);
            stream.lineEnd();
          }
          point0 = point22;
        } else if (notHemisphere && point0 && smallRadius ^ v) {
          var t;
          if (!(c4 & c0) && (t = intersect(point1, point0, true))) {
            clean = 0;
            if (smallRadius) {
              stream.lineStart();
              stream.point(t[0][0], t[0][1]);
              stream.point(t[1][0], t[1][1]);
              stream.lineEnd();
            } else {
              stream.point(t[1][0], t[1][1]);
              stream.lineEnd();
              stream.lineStart();
              stream.point(t[0][0], t[0][1], 3);
            }
          }
        }
        if (v && (!point0 || !pointEqual_default(point0, point1))) {
          stream.point(point1[0], point1[1]);
        }
        point0 = point1, v0 = v, c0 = c4;
      },
      lineEnd: function() {
        if (v0)
          stream.lineEnd();
        point0 = null;
      },
      // Rejoin first and last segments if there were intersections and the first
      // and last points were visible.
      clean: function() {
        return clean | (v00 && v0) << 1;
      }
    };
  }
  function intersect(a2, b, two) {
    var pa = cartesian(a2), pb = cartesian(b);
    var n1 = [1, 0, 0], n2 = cartesianCross(pa, pb), n2n2 = cartesianDot(n2, n2), n1n2 = n2[0], determinant = n2n2 - n1n2 * n1n2;
    if (!determinant)
      return !two && a2;
    var c1 = cr * n2n2 / determinant, c22 = -cr * n1n2 / determinant, n1xn2 = cartesianCross(n1, n2), A5 = cartesianScale(n1, c1), B2 = cartesianScale(n2, c22);
    cartesianAddInPlace(A5, B2);
    var u = n1xn2, w = cartesianDot(A5, u), uu = cartesianDot(u, u), t22 = w * w - uu * (cartesianDot(A5, A5) - 1);
    if (t22 < 0)
      return;
    var t = sqrt(t22), q = cartesianScale(u, (-w - t) / uu);
    cartesianAddInPlace(q, A5);
    q = spherical(q);
    if (!two)
      return q;
    var lambda0 = a2[0], lambda1 = b[0], phi0 = a2[1], phi1 = b[1], z;
    if (lambda1 < lambda0)
      z = lambda0, lambda0 = lambda1, lambda1 = z;
    var delta2 = lambda1 - lambda0, polar = abs2(delta2 - pi2) < epsilon3, meridian = polar || delta2 < epsilon3;
    if (!polar && phi1 < phi0)
      z = phi0, phi0 = phi1, phi1 = z;
    if (meridian ? polar ? phi0 + phi1 > 0 ^ q[1] < (abs2(q[0] - lambda0) < epsilon3 ? phi0 : phi1) : phi0 <= q[1] && q[1] <= phi1 : delta2 > pi2 ^ (lambda0 <= q[0] && q[0] <= lambda1)) {
      var q1 = cartesianScale(u, (-w + t) / uu);
      cartesianAddInPlace(q1, A5);
      return [q, spherical(q1)];
    }
  }
  function code(lambda, phi) {
    var r = smallRadius ? radius2 : pi2 - radius2, code2 = 0;
    if (lambda < -r)
      code2 |= 1;
    else if (lambda > r)
      code2 |= 2;
    if (phi < -r)
      code2 |= 4;
    else if (phi > r)
      code2 |= 8;
    return code2;
  }
  return clip_default(visible, clipLine, interpolate, smallRadius ? [0, -radius2] : [-pi2, radius2 - pi2]);
}

// node_modules/d3-geo/src/clip/line.js
function line_default(a2, b, x05, y05, x12, y12) {
  var ax = a2[0], ay = a2[1], bx = b[0], by = b[1], t03 = 0, t13 = 1, dx = bx - ax, dy = by - ay, r;
  r = x05 - ax;
  if (!dx && r > 0)
    return;
  r /= dx;
  if (dx < 0) {
    if (r < t03)
      return;
    if (r < t13)
      t13 = r;
  } else if (dx > 0) {
    if (r > t13)
      return;
    if (r > t03)
      t03 = r;
  }
  r = x12 - ax;
  if (!dx && r < 0)
    return;
  r /= dx;
  if (dx < 0) {
    if (r > t13)
      return;
    if (r > t03)
      t03 = r;
  } else if (dx > 0) {
    if (r < t03)
      return;
    if (r < t13)
      t13 = r;
  }
  r = y05 - ay;
  if (!dy && r > 0)
    return;
  r /= dy;
  if (dy < 0) {
    if (r < t03)
      return;
    if (r < t13)
      t13 = r;
  } else if (dy > 0) {
    if (r > t13)
      return;
    if (r > t03)
      t03 = r;
  }
  r = y12 - ay;
  if (!dy && r < 0)
    return;
  r /= dy;
  if (dy < 0) {
    if (r > t13)
      return;
    if (r > t03)
      t03 = r;
  } else if (dy > 0) {
    if (r < t03)
      return;
    if (r < t13)
      t13 = r;
  }
  if (t03 > 0)
    a2[0] = ax + t03 * dx, a2[1] = ay + t03 * dy;
  if (t13 < 1)
    b[0] = ax + t13 * dx, b[1] = ay + t13 * dy;
  return true;
}

// node_modules/d3-geo/src/clip/rectangle.js
var clipMax = 1e9;
var clipMin = -clipMax;
function clipRectangle(x05, y05, x12, y12) {
  function visible(x2, y2) {
    return x05 <= x2 && x2 <= x12 && y05 <= y2 && y2 <= y12;
  }
  function interpolate(from, to, direction, stream) {
    var a2 = 0, a1 = 0;
    if (from == null || (a2 = corner(from, direction)) !== (a1 = corner(to, direction)) || comparePoint(from, to) < 0 ^ direction > 0) {
      do
        stream.point(a2 === 0 || a2 === 3 ? x05 : x12, a2 > 1 ? y12 : y05);
      while ((a2 = (a2 + direction + 4) % 4) !== a1);
    } else {
      stream.point(to[0], to[1]);
    }
  }
  function corner(p, direction) {
    return abs2(p[0] - x05) < epsilon3 ? direction > 0 ? 0 : 3 : abs2(p[0] - x12) < epsilon3 ? direction > 0 ? 2 : 1 : abs2(p[1] - y05) < epsilon3 ? direction > 0 ? 1 : 0 : direction > 0 ? 3 : 2;
  }
  function compareIntersection2(a2, b) {
    return comparePoint(a2.x, b.x);
  }
  function comparePoint(a2, b) {
    var ca = corner(a2, 1), cb = corner(b, 1);
    return ca !== cb ? ca - cb : ca === 0 ? b[1] - a2[1] : ca === 1 ? a2[0] - b[0] : ca === 2 ? a2[1] - b[1] : b[0] - a2[0];
  }
  return function(stream) {
    var activeStream = stream, bufferStream = buffer_default(), segments, polygon, ring, x__, y__, v__, x_, y_, v_, first2, clean;
    var clipStream = {
      point: point6,
      lineStart,
      lineEnd,
      polygonStart,
      polygonEnd
    };
    function point6(x2, y2) {
      if (visible(x2, y2))
        activeStream.point(x2, y2);
    }
    function polygonInside() {
      var winding = 0;
      for (var i = 0, n = polygon.length; i < n; ++i) {
        for (var ring2 = polygon[i], j = 1, m = ring2.length, point7 = ring2[0], a0, a1, b0 = point7[0], b1 = point7[1]; j < m; ++j) {
          a0 = b0, a1 = b1, point7 = ring2[j], b0 = point7[0], b1 = point7[1];
          if (a1 <= y12) {
            if (b1 > y12 && (b0 - a0) * (y12 - a1) > (b1 - a1) * (x05 - a0))
              ++winding;
          } else {
            if (b1 <= y12 && (b0 - a0) * (y12 - a1) < (b1 - a1) * (x05 - a0))
              --winding;
          }
        }
      }
      return winding;
    }
    function polygonStart() {
      activeStream = bufferStream, segments = [], polygon = [], clean = true;
    }
    function polygonEnd() {
      var startInside = polygonInside(), cleanInside = clean && startInside, visible2 = (segments = merge(segments)).length;
      if (cleanInside || visible2) {
        stream.polygonStart();
        if (cleanInside) {
          stream.lineStart();
          interpolate(null, null, 1, stream);
          stream.lineEnd();
        }
        if (visible2) {
          rejoin_default(segments, compareIntersection2, startInside, interpolate, stream);
        }
        stream.polygonEnd();
      }
      activeStream = stream, segments = polygon = ring = null;
    }
    function lineStart() {
      clipStream.point = linePoint;
      if (polygon)
        polygon.push(ring = []);
      first2 = true;
      v_ = false;
      x_ = y_ = NaN;
    }
    function lineEnd() {
      if (segments) {
        linePoint(x__, y__);
        if (v__ && v_)
          bufferStream.rejoin();
        segments.push(bufferStream.result());
      }
      clipStream.point = point6;
      if (v_)
        activeStream.lineEnd();
    }
    function linePoint(x2, y2) {
      var v = visible(x2, y2);
      if (polygon)
        ring.push([x2, y2]);
      if (first2) {
        x__ = x2, y__ = y2, v__ = v;
        first2 = false;
        if (v) {
          activeStream.lineStart();
          activeStream.point(x2, y2);
        }
      } else {
        if (v && v_)
          activeStream.point(x2, y2);
        else {
          var a2 = [x_ = Math.max(clipMin, Math.min(clipMax, x_)), y_ = Math.max(clipMin, Math.min(clipMax, y_))], b = [x2 = Math.max(clipMin, Math.min(clipMax, x2)), y2 = Math.max(clipMin, Math.min(clipMax, y2))];
          if (line_default(a2, b, x05, y05, x12, y12)) {
            if (!v_) {
              activeStream.lineStart();
              activeStream.point(a2[0], a2[1]);
            }
            activeStream.point(b[0], b[1]);
            if (!v)
              activeStream.lineEnd();
            clean = false;
          } else if (v) {
            activeStream.lineStart();
            activeStream.point(x2, y2);
            clean = false;
          }
        }
      }
      x_ = x2, y_ = y2, v_ = v;
    }
    return clipStream;
  };
}

// node_modules/d3-geo/src/identity.js
var identity_default3 = (x2) => x2;

// node_modules/d3-geo/src/path/area.js
var areaSum = new Adder();
var areaRingSum = new Adder();
var x00;
var y00;
var x0;
var y0;
var areaStream = {
  point: noop2,
  lineStart: noop2,
  lineEnd: noop2,
  polygonStart: function() {
    areaStream.lineStart = areaRingStart;
    areaStream.lineEnd = areaRingEnd;
  },
  polygonEnd: function() {
    areaStream.lineStart = areaStream.lineEnd = areaStream.point = noop2;
    areaSum.add(abs2(areaRingSum));
    areaRingSum = new Adder();
  },
  result: function() {
    var area2 = areaSum / 2;
    areaSum = new Adder();
    return area2;
  }
};
function areaRingStart() {
  areaStream.point = areaPointFirst;
}
function areaPointFirst(x2, y2) {
  areaStream.point = areaPoint;
  x00 = x0 = x2, y00 = y0 = y2;
}
function areaPoint(x2, y2) {
  areaRingSum.add(y0 * x2 - x0 * y2);
  x0 = x2, y0 = y2;
}
function areaRingEnd() {
  areaPoint(x00, y00);
}
var area_default = areaStream;

// node_modules/d3-geo/src/path/bounds.js
var x02 = Infinity;
var y02 = x02;
var x1 = -x02;
var y1 = x1;
var boundsStream = {
  point: boundsPoint,
  lineStart: noop2,
  lineEnd: noop2,
  polygonStart: noop2,
  polygonEnd: noop2,
  result: function() {
    var bounds = [[x02, y02], [x1, y1]];
    x1 = y1 = -(y02 = x02 = Infinity);
    return bounds;
  }
};
function boundsPoint(x2, y2) {
  if (x2 < x02)
    x02 = x2;
  if (x2 > x1)
    x1 = x2;
  if (y2 < y02)
    y02 = y2;
  if (y2 > y1)
    y1 = y2;
}
var bounds_default = boundsStream;

// node_modules/d3-geo/src/path/centroid.js
var X0 = 0;
var Y0 = 0;
var Z0 = 0;
var X1 = 0;
var Y1 = 0;
var Z1 = 0;
var X2 = 0;
var Y2 = 0;
var Z2 = 0;
var x002;
var y002;
var x03;
var y03;
var centroidStream = {
  point: centroidPoint,
  lineStart: centroidLineStart,
  lineEnd: centroidLineEnd,
  polygonStart: function() {
    centroidStream.lineStart = centroidRingStart;
    centroidStream.lineEnd = centroidRingEnd;
  },
  polygonEnd: function() {
    centroidStream.point = centroidPoint;
    centroidStream.lineStart = centroidLineStart;
    centroidStream.lineEnd = centroidLineEnd;
  },
  result: function() {
    var centroid = Z2 ? [X2 / Z2, Y2 / Z2] : Z1 ? [X1 / Z1, Y1 / Z1] : Z0 ? [X0 / Z0, Y0 / Z0] : [NaN, NaN];
    X0 = Y0 = Z0 = X1 = Y1 = Z1 = X2 = Y2 = Z2 = 0;
    return centroid;
  }
};
function centroidPoint(x2, y2) {
  X0 += x2;
  Y0 += y2;
  ++Z0;
}
function centroidLineStart() {
  centroidStream.point = centroidPointFirstLine;
}
function centroidPointFirstLine(x2, y2) {
  centroidStream.point = centroidPointLine;
  centroidPoint(x03 = x2, y03 = y2);
}
function centroidPointLine(x2, y2) {
  var dx = x2 - x03, dy = y2 - y03, z = sqrt(dx * dx + dy * dy);
  X1 += z * (x03 + x2) / 2;
  Y1 += z * (y03 + y2) / 2;
  Z1 += z;
  centroidPoint(x03 = x2, y03 = y2);
}
function centroidLineEnd() {
  centroidStream.point = centroidPoint;
}
function centroidRingStart() {
  centroidStream.point = centroidPointFirstRing;
}
function centroidRingEnd() {
  centroidPointRing(x002, y002);
}
function centroidPointFirstRing(x2, y2) {
  centroidStream.point = centroidPointRing;
  centroidPoint(x002 = x03 = x2, y002 = y03 = y2);
}
function centroidPointRing(x2, y2) {
  var dx = x2 - x03, dy = y2 - y03, z = sqrt(dx * dx + dy * dy);
  X1 += z * (x03 + x2) / 2;
  Y1 += z * (y03 + y2) / 2;
  Z1 += z;
  z = y03 * x2 - x03 * y2;
  X2 += z * (x03 + x2);
  Y2 += z * (y03 + y2);
  Z2 += z * 3;
  centroidPoint(x03 = x2, y03 = y2);
}
var centroid_default = centroidStream;

// node_modules/d3-geo/src/path/context.js
function PathContext(context) {
  this._context = context;
}
PathContext.prototype = {
  _radius: 4.5,
  pointRadius: function(_) {
    return this._radius = _, this;
  },
  polygonStart: function() {
    this._line = 0;
  },
  polygonEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line === 0)
      this._context.closePath();
    this._point = NaN;
  },
  point: function(x2, y2) {
    switch (this._point) {
      case 0: {
        this._context.moveTo(x2, y2);
        this._point = 1;
        break;
      }
      case 1: {
        this._context.lineTo(x2, y2);
        break;
      }
      default: {
        this._context.moveTo(x2 + this._radius, y2);
        this._context.arc(x2, y2, this._radius, 0, tau2);
        break;
      }
    }
  },
  result: noop2
};

// node_modules/d3-geo/src/path/measure.js
var lengthSum = new Adder();
var lengthRing;
var x003;
var y003;
var x04;
var y04;
var lengthStream = {
  point: noop2,
  lineStart: function() {
    lengthStream.point = lengthPointFirst;
  },
  lineEnd: function() {
    if (lengthRing)
      lengthPoint(x003, y003);
    lengthStream.point = noop2;
  },
  polygonStart: function() {
    lengthRing = true;
  },
  polygonEnd: function() {
    lengthRing = null;
  },
  result: function() {
    var length3 = +lengthSum;
    lengthSum = new Adder();
    return length3;
  }
};
function lengthPointFirst(x2, y2) {
  lengthStream.point = lengthPoint;
  x003 = x04 = x2, y003 = y04 = y2;
}
function lengthPoint(x2, y2) {
  x04 -= x2, y04 -= y2;
  lengthSum.add(sqrt(x04 * x04 + y04 * y04));
  x04 = x2, y04 = y2;
}
var measure_default = lengthStream;

// node_modules/d3-geo/src/path/string.js
var cacheDigits;
var cacheAppend;
var cacheRadius;
var cacheCircle;
var PathString = class {
  constructor(digits) {
    this._append = digits == null ? append2 : appendRound2(digits);
    this._radius = 4.5;
    this._ = "";
  }
  pointRadius(_) {
    this._radius = +_;
    return this;
  }
  polygonStart() {
    this._line = 0;
  }
  polygonEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    if (this._line === 0)
      this._ += "Z";
    this._point = NaN;
  }
  point(x2, y2) {
    switch (this._point) {
      case 0: {
        this._append`M${x2},${y2}`;
        this._point = 1;
        break;
      }
      case 1: {
        this._append`L${x2},${y2}`;
        break;
      }
      default: {
        this._append`M${x2},${y2}`;
        if (this._radius !== cacheRadius || this._append !== cacheAppend) {
          const r = this._radius;
          const s2 = this._;
          this._ = "";
          this._append`m0,${r}a${r},${r} 0 1,1 0,${-2 * r}a${r},${r} 0 1,1 0,${2 * r}z`;
          cacheRadius = r;
          cacheAppend = this._append;
          cacheCircle = this._;
          this._ = s2;
        }
        this._ += cacheCircle;
        break;
      }
    }
  }
  result() {
    const result = this._;
    this._ = "";
    return result.length ? result : null;
  }
};
function append2(strings) {
  let i = 1;
  this._ += strings[0];
  for (const j = strings.length; i < j; ++i) {
    this._ += arguments[i] + strings[i];
  }
}
function appendRound2(digits) {
  const d = Math.floor(digits);
  if (!(d >= 0))
    throw new RangeError(`invalid digits: ${digits}`);
  if (d > 15)
    return append2;
  if (d !== cacheDigits) {
    const k2 = 10 ** d;
    cacheDigits = d;
    cacheAppend = function append3(strings) {
      let i = 1;
      this._ += strings[0];
      for (const j = strings.length; i < j; ++i) {
        this._ += Math.round(arguments[i] * k2) / k2 + strings[i];
      }
    };
  }
  return cacheAppend;
}

// node_modules/d3-geo/src/path/index.js
function path_default(projection3, context) {
  let digits = 3, pointRadius = 4.5, projectionStream, contextStream;
  function path2(object) {
    if (object) {
      if (typeof pointRadius === "function")
        contextStream.pointRadius(+pointRadius.apply(this, arguments));
      stream_default(object, projectionStream(contextStream));
    }
    return contextStream.result();
  }
  path2.area = function(object) {
    stream_default(object, projectionStream(area_default));
    return area_default.result();
  };
  path2.measure = function(object) {
    stream_default(object, projectionStream(measure_default));
    return measure_default.result();
  };
  path2.bounds = function(object) {
    stream_default(object, projectionStream(bounds_default));
    return bounds_default.result();
  };
  path2.centroid = function(object) {
    stream_default(object, projectionStream(centroid_default));
    return centroid_default.result();
  };
  path2.projection = function(_) {
    if (!arguments.length)
      return projection3;
    projectionStream = _ == null ? (projection3 = null, identity_default3) : (projection3 = _).stream;
    return path2;
  };
  path2.context = function(_) {
    if (!arguments.length)
      return context;
    contextStream = _ == null ? (context = null, new PathString(digits)) : new PathContext(context = _);
    if (typeof pointRadius !== "function")
      contextStream.pointRadius(pointRadius);
    return path2;
  };
  path2.pointRadius = function(_) {
    if (!arguments.length)
      return pointRadius;
    pointRadius = typeof _ === "function" ? _ : (contextStream.pointRadius(+_), +_);
    return path2;
  };
  path2.digits = function(_) {
    if (!arguments.length)
      return digits;
    if (_ == null)
      digits = null;
    else {
      const d = Math.floor(_);
      if (!(d >= 0))
        throw new RangeError(`invalid digits: ${_}`);
      digits = d;
    }
    if (context === null)
      contextStream = new PathString(digits);
    return path2;
  };
  return path2.projection(projection3).digits(digits).context(context);
}

// node_modules/d3-geo/src/transform.js
function transform_default(methods) {
  return {
    stream: transformer(methods)
  };
}
function transformer(methods) {
  return function(stream) {
    var s2 = new TransformStream();
    for (var key in methods)
      s2[key] = methods[key];
    s2.stream = stream;
    return s2;
  };
}
function TransformStream() {
}
TransformStream.prototype = {
  constructor: TransformStream,
  point: function(x2, y2) {
    this.stream.point(x2, y2);
  },
  sphere: function() {
    this.stream.sphere();
  },
  lineStart: function() {
    this.stream.lineStart();
  },
  lineEnd: function() {
    this.stream.lineEnd();
  },
  polygonStart: function() {
    this.stream.polygonStart();
  },
  polygonEnd: function() {
    this.stream.polygonEnd();
  }
};

// node_modules/d3-geo/src/projection/fit.js
function fit(projection3, fitBounds, object) {
  var clip = projection3.clipExtent && projection3.clipExtent();
  projection3.scale(150).translate([0, 0]);
  if (clip != null)
    projection3.clipExtent(null);
  stream_default(object, projection3.stream(bounds_default));
  fitBounds(bounds_default.result());
  if (clip != null)
    projection3.clipExtent(clip);
  return projection3;
}
function fitExtent(projection3, extent3, object) {
  return fit(projection3, function(b) {
    var w = extent3[1][0] - extent3[0][0], h = extent3[1][1] - extent3[0][1], k2 = Math.min(w / (b[1][0] - b[0][0]), h / (b[1][1] - b[0][1])), x2 = +extent3[0][0] + (w - k2 * (b[1][0] + b[0][0])) / 2, y2 = +extent3[0][1] + (h - k2 * (b[1][1] + b[0][1])) / 2;
    projection3.scale(150 * k2).translate([x2, y2]);
  }, object);
}
function fitSize(projection3, size, object) {
  return fitExtent(projection3, [[0, 0], size], object);
}
function fitWidth(projection3, width, object) {
  return fit(projection3, function(b) {
    var w = +width, k2 = w / (b[1][0] - b[0][0]), x2 = (w - k2 * (b[1][0] + b[0][0])) / 2, y2 = -k2 * b[0][1];
    projection3.scale(150 * k2).translate([x2, y2]);
  }, object);
}
function fitHeight(projection3, height, object) {
  return fit(projection3, function(b) {
    var h = +height, k2 = h / (b[1][1] - b[0][1]), x2 = -k2 * b[0][0], y2 = (h - k2 * (b[1][1] + b[0][1])) / 2;
    projection3.scale(150 * k2).translate([x2, y2]);
  }, object);
}

// node_modules/d3-geo/src/projection/resample.js
var maxDepth = 16;
var cosMinDistance = cos(30 * radians2);
function resample_default(project2, delta2) {
  return +delta2 ? resample(project2, delta2) : resampleNone(project2);
}
function resampleNone(project2) {
  return transformer({
    point: function(x2, y2) {
      x2 = project2(x2, y2);
      this.stream.point(x2[0], x2[1]);
    }
  });
}
function resample(project2, delta2) {
  function resampleLineTo(x05, y05, lambda0, a0, b0, c0, x12, y12, lambda1, a1, b1, c1, depth, stream) {
    var dx = x12 - x05, dy = y12 - y05, d2 = dx * dx + dy * dy;
    if (d2 > 4 * delta2 && depth--) {
      var a2 = a0 + a1, b = b0 + b1, c4 = c0 + c1, m = sqrt(a2 * a2 + b * b + c4 * c4), phi2 = asin(c4 /= m), lambda2 = abs2(abs2(c4) - 1) < epsilon3 || abs2(lambda0 - lambda1) < epsilon3 ? (lambda0 + lambda1) / 2 : atan2(b, a2), p = project2(lambda2, phi2), x2 = p[0], y2 = p[1], dx2 = x2 - x05, dy2 = y2 - y05, dz = dy * dx2 - dx * dy2;
      if (dz * dz / d2 > delta2 || abs2((dx * dx2 + dy * dy2) / d2 - 0.5) > 0.3 || a0 * a1 + b0 * b1 + c0 * c1 < cosMinDistance) {
        resampleLineTo(x05, y05, lambda0, a0, b0, c0, x2, y2, lambda2, a2 /= m, b /= m, c4, depth, stream);
        stream.point(x2, y2);
        resampleLineTo(x2, y2, lambda2, a2, b, c4, x12, y12, lambda1, a1, b1, c1, depth, stream);
      }
    }
  }
  return function(stream) {
    var lambda00, x004, y004, a00, b00, c00, lambda0, x05, y05, a0, b0, c0;
    var resampleStream = {
      point: point6,
      lineStart,
      lineEnd,
      polygonStart: function() {
        stream.polygonStart();
        resampleStream.lineStart = ringStart;
      },
      polygonEnd: function() {
        stream.polygonEnd();
        resampleStream.lineStart = lineStart;
      }
    };
    function point6(x2, y2) {
      x2 = project2(x2, y2);
      stream.point(x2[0], x2[1]);
    }
    function lineStart() {
      x05 = NaN;
      resampleStream.point = linePoint;
      stream.lineStart();
    }
    function linePoint(lambda, phi) {
      var c4 = cartesian([lambda, phi]), p = project2(lambda, phi);
      resampleLineTo(x05, y05, lambda0, a0, b0, c0, x05 = p[0], y05 = p[1], lambda0 = lambda, a0 = c4[0], b0 = c4[1], c0 = c4[2], maxDepth, stream);
      stream.point(x05, y05);
    }
    function lineEnd() {
      resampleStream.point = point6;
      stream.lineEnd();
    }
    function ringStart() {
      lineStart();
      resampleStream.point = ringPoint;
      resampleStream.lineEnd = ringEnd;
    }
    function ringPoint(lambda, phi) {
      linePoint(lambda00 = lambda, phi), x004 = x05, y004 = y05, a00 = a0, b00 = b0, c00 = c0;
      resampleStream.point = linePoint;
    }
    function ringEnd() {
      resampleLineTo(x05, y05, lambda0, a0, b0, c0, x004, y004, lambda00, a00, b00, c00, maxDepth, stream);
      resampleStream.lineEnd = lineEnd;
      lineEnd();
    }
    return resampleStream;
  };
}

// node_modules/d3-geo/src/projection/index.js
var transformRadians = transformer({
  point: function(x2, y2) {
    this.stream.point(x2 * radians2, y2 * radians2);
  }
});
function transformRotate(rotate) {
  return transformer({
    point: function(x2, y2) {
      var r = rotate(x2, y2);
      return this.stream.point(r[0], r[1]);
    }
  });
}
function scaleTranslate(k2, dx, dy, sx, sy) {
  function transform2(x2, y2) {
    x2 *= sx;
    y2 *= sy;
    return [dx + k2 * x2, dy - k2 * y2];
  }
  transform2.invert = function(x2, y2) {
    return [(x2 - dx) / k2 * sx, (dy - y2) / k2 * sy];
  };
  return transform2;
}
function scaleTranslateRotate(k2, dx, dy, sx, sy, alpha) {
  if (!alpha)
    return scaleTranslate(k2, dx, dy, sx, sy);
  var cosAlpha = cos(alpha), sinAlpha = sin(alpha), a2 = cosAlpha * k2, b = sinAlpha * k2, ai = cosAlpha / k2, bi = sinAlpha / k2, ci = (sinAlpha * dy - cosAlpha * dx) / k2, fi = (sinAlpha * dx + cosAlpha * dy) / k2;
  function transform2(x2, y2) {
    x2 *= sx;
    y2 *= sy;
    return [a2 * x2 - b * y2 + dx, dy - b * x2 - a2 * y2];
  }
  transform2.invert = function(x2, y2) {
    return [sx * (ai * x2 - bi * y2 + ci), sy * (fi - bi * x2 - ai * y2)];
  };
  return transform2;
}
function projection(project2) {
  return projectionMutator(function() {
    return project2;
  })();
}
function projectionMutator(projectAt) {
  var project2, k2 = 150, x2 = 480, y2 = 250, lambda = 0, phi = 0, deltaLambda = 0, deltaPhi = 0, deltaGamma = 0, rotate, alpha = 0, sx = 1, sy = 1, theta = null, preclip = antimeridian_default, x05 = null, y05, x12, y12, postclip = identity_default3, delta2 = 0.5, projectResample, projectTransform, projectRotateTransform, cache, cacheStream;
  function projection3(point6) {
    return projectRotateTransform(point6[0] * radians2, point6[1] * radians2);
  }
  function invert(point6) {
    point6 = projectRotateTransform.invert(point6[0], point6[1]);
    return point6 && [point6[0] * degrees3, point6[1] * degrees3];
  }
  projection3.stream = function(stream) {
    return cache && cacheStream === stream ? cache : cache = transformRadians(transformRotate(rotate)(preclip(projectResample(postclip(cacheStream = stream)))));
  };
  projection3.preclip = function(_) {
    return arguments.length ? (preclip = _, theta = void 0, reset()) : preclip;
  };
  projection3.postclip = function(_) {
    return arguments.length ? (postclip = _, x05 = y05 = x12 = y12 = null, reset()) : postclip;
  };
  projection3.clipAngle = function(_) {
    return arguments.length ? (preclip = +_ ? circle_default(theta = _ * radians2) : (theta = null, antimeridian_default), reset()) : theta * degrees3;
  };
  projection3.clipExtent = function(_) {
    return arguments.length ? (postclip = _ == null ? (x05 = y05 = x12 = y12 = null, identity_default3) : clipRectangle(x05 = +_[0][0], y05 = +_[0][1], x12 = +_[1][0], y12 = +_[1][1]), reset()) : x05 == null ? null : [[x05, y05], [x12, y12]];
  };
  projection3.scale = function(_) {
    return arguments.length ? (k2 = +_, recenter()) : k2;
  };
  projection3.translate = function(_) {
    return arguments.length ? (x2 = +_[0], y2 = +_[1], recenter()) : [x2, y2];
  };
  projection3.center = function(_) {
    return arguments.length ? (lambda = _[0] % 360 * radians2, phi = _[1] % 360 * radians2, recenter()) : [lambda * degrees3, phi * degrees3];
  };
  projection3.rotate = function(_) {
    return arguments.length ? (deltaLambda = _[0] % 360 * radians2, deltaPhi = _[1] % 360 * radians2, deltaGamma = _.length > 2 ? _[2] % 360 * radians2 : 0, recenter()) : [deltaLambda * degrees3, deltaPhi * degrees3, deltaGamma * degrees3];
  };
  projection3.angle = function(_) {
    return arguments.length ? (alpha = _ % 360 * radians2, recenter()) : alpha * degrees3;
  };
  projection3.reflectX = function(_) {
    return arguments.length ? (sx = _ ? -1 : 1, recenter()) : sx < 0;
  };
  projection3.reflectY = function(_) {
    return arguments.length ? (sy = _ ? -1 : 1, recenter()) : sy < 0;
  };
  projection3.precision = function(_) {
    return arguments.length ? (projectResample = resample_default(projectTransform, delta2 = _ * _), reset()) : sqrt(delta2);
  };
  projection3.fitExtent = function(extent3, object) {
    return fitExtent(projection3, extent3, object);
  };
  projection3.fitSize = function(size, object) {
    return fitSize(projection3, size, object);
  };
  projection3.fitWidth = function(width, object) {
    return fitWidth(projection3, width, object);
  };
  projection3.fitHeight = function(height, object) {
    return fitHeight(projection3, height, object);
  };
  function recenter() {
    var center2 = scaleTranslateRotate(k2, 0, 0, sx, sy, alpha).apply(null, project2(lambda, phi)), transform2 = scaleTranslateRotate(k2, x2 - center2[0], y2 - center2[1], sx, sy, alpha);
    rotate = rotateRadians(deltaLambda, deltaPhi, deltaGamma);
    projectTransform = compose_default(project2, transform2);
    projectRotateTransform = compose_default(rotate, projectTransform);
    projectResample = resample_default(projectTransform, delta2);
    return reset();
  }
  function reset() {
    cache = cacheStream = null;
    return projection3;
  }
  return function() {
    project2 = projectAt.apply(this, arguments);
    projection3.invert = project2.invert && invert;
    return recenter();
  };
}

// node_modules/d3-geo/src/projection/conic.js
function conicProjection(projectAt) {
  var phi0 = 0, phi1 = pi2 / 3, m = projectionMutator(projectAt), p = m(phi0, phi1);
  p.parallels = function(_) {
    return arguments.length ? m(phi0 = _[0] * radians2, phi1 = _[1] * radians2) : [phi0 * degrees3, phi1 * degrees3];
  };
  return p;
}

// node_modules/d3-geo/src/projection/cylindricalEqualArea.js
function cylindricalEqualAreaRaw(phi0) {
  var cosPhi0 = cos(phi0);
  function forward(lambda, phi) {
    return [lambda * cosPhi0, sin(phi) / cosPhi0];
  }
  forward.invert = function(x2, y2) {
    return [x2 / cosPhi0, asin(y2 * cosPhi0)];
  };
  return forward;
}

// node_modules/d3-geo/src/projection/conicEqualArea.js
function conicEqualAreaRaw(y05, y12) {
  var sy0 = sin(y05), n = (sy0 + sin(y12)) / 2;
  if (abs2(n) < epsilon3)
    return cylindricalEqualAreaRaw(y05);
  var c4 = 1 + sy0 * (2 * n - sy0), r0 = sqrt(c4) / n;
  function project2(x2, y2) {
    var r = sqrt(c4 - 2 * n * sin(y2)) / n;
    return [r * sin(x2 *= n), r0 - r * cos(x2)];
  }
  project2.invert = function(x2, y2) {
    var r0y = r0 - y2, l = atan2(x2, abs2(r0y)) * sign(r0y);
    if (r0y * n < 0)
      l -= pi2 * sign(x2) * sign(r0y);
    return [l / n, asin((c4 - (x2 * x2 + r0y * r0y) * n * n) / (2 * n))];
  };
  return project2;
}
function conicEqualArea_default() {
  return conicProjection(conicEqualAreaRaw).scale(155.424).center([0, 33.6442]);
}

// node_modules/d3-geo/src/projection/albers.js
function albers_default() {
  return conicEqualArea_default().parallels([29.5, 45.5]).scale(1070).translate([480, 250]).rotate([96, 0]).center([-0.6, 38.7]);
}

// node_modules/d3-geo/src/projection/albersUsa.js
function multiplex(streams) {
  var n = streams.length;
  return {
    point: function(x2, y2) {
      var i = -1;
      while (++i < n)
        streams[i].point(x2, y2);
    },
    sphere: function() {
      var i = -1;
      while (++i < n)
        streams[i].sphere();
    },
    lineStart: function() {
      var i = -1;
      while (++i < n)
        streams[i].lineStart();
    },
    lineEnd: function() {
      var i = -1;
      while (++i < n)
        streams[i].lineEnd();
    },
    polygonStart: function() {
      var i = -1;
      while (++i < n)
        streams[i].polygonStart();
    },
    polygonEnd: function() {
      var i = -1;
      while (++i < n)
        streams[i].polygonEnd();
    }
  };
}
function albersUsa_default() {
  var cache, cacheStream, lower48 = albers_default(), lower48Point, alaska = conicEqualArea_default().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]), alaskaPoint, hawaii = conicEqualArea_default().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]), hawaiiPoint, point6, pointStream = { point: function(x2, y2) {
    point6 = [x2, y2];
  } };
  function albersUsa(coordinates) {
    var x2 = coordinates[0], y2 = coordinates[1];
    return point6 = null, (lower48Point.point(x2, y2), point6) || (alaskaPoint.point(x2, y2), point6) || (hawaiiPoint.point(x2, y2), point6);
  }
  albersUsa.invert = function(coordinates) {
    var k2 = lower48.scale(), t = lower48.translate(), x2 = (coordinates[0] - t[0]) / k2, y2 = (coordinates[1] - t[1]) / k2;
    return (y2 >= 0.12 && y2 < 0.234 && x2 >= -0.425 && x2 < -0.214 ? alaska : y2 >= 0.166 && y2 < 0.234 && x2 >= -0.214 && x2 < -0.115 ? hawaii : lower48).invert(coordinates);
  };
  albersUsa.stream = function(stream) {
    return cache && cacheStream === stream ? cache : cache = multiplex([lower48.stream(cacheStream = stream), alaska.stream(stream), hawaii.stream(stream)]);
  };
  albersUsa.precision = function(_) {
    if (!arguments.length)
      return lower48.precision();
    lower48.precision(_), alaska.precision(_), hawaii.precision(_);
    return reset();
  };
  albersUsa.scale = function(_) {
    if (!arguments.length)
      return lower48.scale();
    lower48.scale(_), alaska.scale(_ * 0.35), hawaii.scale(_);
    return albersUsa.translate(lower48.translate());
  };
  albersUsa.translate = function(_) {
    if (!arguments.length)
      return lower48.translate();
    var k2 = lower48.scale(), x2 = +_[0], y2 = +_[1];
    lower48Point = lower48.translate(_).clipExtent([[x2 - 0.455 * k2, y2 - 0.238 * k2], [x2 + 0.455 * k2, y2 + 0.238 * k2]]).stream(pointStream);
    alaskaPoint = alaska.translate([x2 - 0.307 * k2, y2 + 0.201 * k2]).clipExtent([[x2 - 0.425 * k2 + epsilon3, y2 + 0.12 * k2 + epsilon3], [x2 - 0.214 * k2 - epsilon3, y2 + 0.234 * k2 - epsilon3]]).stream(pointStream);
    hawaiiPoint = hawaii.translate([x2 - 0.205 * k2, y2 + 0.212 * k2]).clipExtent([[x2 - 0.214 * k2 + epsilon3, y2 + 0.166 * k2 + epsilon3], [x2 - 0.115 * k2 - epsilon3, y2 + 0.234 * k2 - epsilon3]]).stream(pointStream);
    return reset();
  };
  albersUsa.fitExtent = function(extent3, object) {
    return fitExtent(albersUsa, extent3, object);
  };
  albersUsa.fitSize = function(size, object) {
    return fitSize(albersUsa, size, object);
  };
  albersUsa.fitWidth = function(width, object) {
    return fitWidth(albersUsa, width, object);
  };
  albersUsa.fitHeight = function(height, object) {
    return fitHeight(albersUsa, height, object);
  };
  function reset() {
    cache = cacheStream = null;
    return albersUsa;
  }
  return albersUsa.scale(1070);
}

// node_modules/d3-geo/src/projection/azimuthal.js
function azimuthalRaw(scale) {
  return function(x2, y2) {
    var cx = cos(x2), cy = cos(y2), k2 = scale(cx * cy);
    if (k2 === Infinity)
      return [2, 0];
    return [
      k2 * cy * sin(x2),
      k2 * sin(y2)
    ];
  };
}
function azimuthalInvert(angle) {
  return function(x2, y2) {
    var z = sqrt(x2 * x2 + y2 * y2), c4 = angle(z), sc = sin(c4), cc = cos(c4);
    return [
      atan2(x2 * sc, z * cc),
      asin(z && y2 * sc / z)
    ];
  };
}

// node_modules/d3-geo/src/projection/azimuthalEqualArea.js
var azimuthalEqualAreaRaw = azimuthalRaw(function(cxcy) {
  return sqrt(2 / (1 + cxcy));
});
azimuthalEqualAreaRaw.invert = azimuthalInvert(function(z) {
  return 2 * asin(z / 2);
});
function azimuthalEqualArea_default() {
  return projection(azimuthalEqualAreaRaw).scale(124.75).clipAngle(180 - 1e-3);
}

// node_modules/d3-geo/src/projection/azimuthalEquidistant.js
var azimuthalEquidistantRaw = azimuthalRaw(function(c4) {
  return (c4 = acos(c4)) && c4 / sin(c4);
});
azimuthalEquidistantRaw.invert = azimuthalInvert(function(z) {
  return z;
});
function azimuthalEquidistant_default() {
  return projection(azimuthalEquidistantRaw).scale(79.4188).clipAngle(180 - 1e-3);
}

// node_modules/d3-geo/src/projection/mercator.js
function mercatorRaw(lambda, phi) {
  return [lambda, log(tan((halfPi + phi) / 2))];
}
mercatorRaw.invert = function(x2, y2) {
  return [x2, 2 * atan(exp(y2)) - halfPi];
};
function mercator_default() {
  return mercatorProjection(mercatorRaw).scale(961 / tau2);
}
function mercatorProjection(project2) {
  var m = projection(project2), center2 = m.center, scale = m.scale, translate = m.translate, clipExtent = m.clipExtent, x05 = null, y05, x12, y12;
  m.scale = function(_) {
    return arguments.length ? (scale(_), reclip()) : scale();
  };
  m.translate = function(_) {
    return arguments.length ? (translate(_), reclip()) : translate();
  };
  m.center = function(_) {
    return arguments.length ? (center2(_), reclip()) : center2();
  };
  m.clipExtent = function(_) {
    return arguments.length ? (_ == null ? x05 = y05 = x12 = y12 = null : (x05 = +_[0][0], y05 = +_[0][1], x12 = +_[1][0], y12 = +_[1][1]), reclip()) : x05 == null ? null : [[x05, y05], [x12, y12]];
  };
  function reclip() {
    var k2 = pi2 * scale(), t = m(rotation_default(m.rotate()).invert([0, 0]));
    return clipExtent(x05 == null ? [[t[0] - k2, t[1] - k2], [t[0] + k2, t[1] + k2]] : project2 === mercatorRaw ? [[Math.max(t[0] - k2, x05), y05], [Math.min(t[0] + k2, x12), y12]] : [[x05, Math.max(t[1] - k2, y05)], [x12, Math.min(t[1] + k2, y12)]]);
  }
  return reclip();
}

// node_modules/d3-geo/src/projection/conicConformal.js
function tany(y2) {
  return tan((halfPi + y2) / 2);
}
function conicConformalRaw(y05, y12) {
  var cy0 = cos(y05), n = y05 === y12 ? sin(y05) : log(cy0 / cos(y12)) / log(tany(y12) / tany(y05)), f = cy0 * pow(tany(y05), n) / n;
  if (!n)
    return mercatorRaw;
  function project2(x2, y2) {
    if (f > 0) {
      if (y2 < -halfPi + epsilon3)
        y2 = -halfPi + epsilon3;
    } else {
      if (y2 > halfPi - epsilon3)
        y2 = halfPi - epsilon3;
    }
    var r = f / pow(tany(y2), n);
    return [r * sin(n * x2), f - r * cos(n * x2)];
  }
  project2.invert = function(x2, y2) {
    var fy = f - y2, r = sign(n) * sqrt(x2 * x2 + fy * fy), l = atan2(x2, abs2(fy)) * sign(fy);
    if (fy * n < 0)
      l -= pi2 * sign(x2) * sign(fy);
    return [l / n, 2 * atan(pow(f / r, 1 / n)) - halfPi];
  };
  return project2;
}
function conicConformal_default() {
  return conicProjection(conicConformalRaw).scale(109.5).parallels([30, 30]);
}

// node_modules/d3-geo/src/projection/equirectangular.js
function equirectangularRaw(lambda, phi) {
  return [lambda, phi];
}
equirectangularRaw.invert = equirectangularRaw;
function equirectangular_default() {
  return projection(equirectangularRaw).scale(152.63);
}

// node_modules/d3-geo/src/projection/conicEquidistant.js
function conicEquidistantRaw(y05, y12) {
  var cy0 = cos(y05), n = y05 === y12 ? sin(y05) : (cy0 - cos(y12)) / (y12 - y05), g = cy0 / n + y05;
  if (abs2(n) < epsilon3)
    return equirectangularRaw;
  function project2(x2, y2) {
    var gy = g - y2, nx = n * x2;
    return [gy * sin(nx), g - gy * cos(nx)];
  }
  project2.invert = function(x2, y2) {
    var gy = g - y2, l = atan2(x2, abs2(gy)) * sign(gy);
    if (gy * n < 0)
      l -= pi2 * sign(x2) * sign(gy);
    return [l / n, g - sign(n) * sqrt(x2 * x2 + gy * gy)];
  };
  return project2;
}
function conicEquidistant_default() {
  return conicProjection(conicEquidistantRaw).scale(131.154).center([0, 13.9389]);
}

// node_modules/d3-geo/src/projection/equalEarth.js
var A1 = 1.340264;
var A2 = -0.081106;
var A3 = 893e-6;
var A4 = 3796e-6;
var M = sqrt(3) / 2;
var iterations = 12;
function equalEarthRaw(lambda, phi) {
  var l = asin(M * sin(phi)), l2 = l * l, l6 = l2 * l2 * l2;
  return [
    lambda * cos(l) / (M * (A1 + 3 * A2 * l2 + l6 * (7 * A3 + 9 * A4 * l2))),
    l * (A1 + A2 * l2 + l6 * (A3 + A4 * l2))
  ];
}
equalEarthRaw.invert = function(x2, y2) {
  var l = y2, l2 = l * l, l6 = l2 * l2 * l2;
  for (var i = 0, delta, fy, fpy; i < iterations; ++i) {
    fy = l * (A1 + A2 * l2 + l6 * (A3 + A4 * l2)) - y2;
    fpy = A1 + 3 * A2 * l2 + l6 * (7 * A3 + 9 * A4 * l2);
    l -= delta = fy / fpy, l2 = l * l, l6 = l2 * l2 * l2;
    if (abs2(delta) < epsilon22)
      break;
  }
  return [
    M * x2 * (A1 + 3 * A2 * l2 + l6 * (7 * A3 + 9 * A4 * l2)) / cos(l),
    asin(sin(l) / M)
  ];
};
function equalEarth_default() {
  return projection(equalEarthRaw).scale(177.158);
}

// node_modules/d3-geo/src/projection/gnomonic.js
function gnomonicRaw(x2, y2) {
  var cy = cos(y2), k2 = cos(x2) * cy;
  return [cy * sin(x2) / k2, sin(y2) / k2];
}
gnomonicRaw.invert = azimuthalInvert(atan);
function gnomonic_default() {
  return projection(gnomonicRaw).scale(144.049).clipAngle(60);
}

// node_modules/d3-geo/src/projection/orthographic.js
function orthographicRaw(x2, y2) {
  return [cos(y2) * sin(x2), sin(y2)];
}
orthographicRaw.invert = azimuthalInvert(asin);
function orthographic_default() {
  return projection(orthographicRaw).scale(249.5).clipAngle(90 + epsilon3);
}

// node_modules/d3-geo/src/projection/stereographic.js
function stereographicRaw(x2, y2) {
  var cy = cos(y2), k2 = 1 + cos(x2) * cy;
  return [cy * sin(x2) / k2, sin(y2) / k2];
}
stereographicRaw.invert = azimuthalInvert(function(z) {
  return 2 * atan(z);
});
function stereographic_default() {
  return projection(stereographicRaw).scale(250).clipAngle(142);
}

// node_modules/d3-geo/src/projection/transverseMercator.js
function transverseMercatorRaw(lambda, phi) {
  return [log(tan((halfPi + phi) / 2)), -lambda];
}
transverseMercatorRaw.invert = function(x2, y2) {
  return [-y2, 2 * atan(exp(x2)) - halfPi];
};
function transverseMercator_default() {
  var m = mercatorProjection(transverseMercatorRaw), center2 = m.center, rotate = m.rotate;
  m.center = function(_) {
    return arguments.length ? center2([-_[1], _[0]]) : (_ = center2(), [_[1], -_[0]]);
  };
  m.rotate = function(_) {
    return arguments.length ? rotate([_[0], _[1], _.length > 2 ? _[2] + 90 : 90]) : (_ = rotate(), [_[0], _[1], _[2] - 90]);
  };
  return rotate([0, 0, 90]).scale(159.155);
}

// node_modules/d3-scale/src/init.js
function initRange(domain, range3) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(domain);
      break;
    default:
      this.range(range3).domain(domain);
      break;
  }
  return this;
}
function initInterpolator(domain, interpolator) {
  switch (arguments.length) {
    case 0:
      break;
    case 1: {
      if (typeof domain === "function")
        this.interpolator(domain);
      else
        this.range(domain);
      break;
    }
    default: {
      this.domain(domain);
      if (typeof interpolator === "function")
        this.interpolator(interpolator);
      else
        this.range(interpolator);
      break;
    }
  }
  return this;
}

// node_modules/d3-scale/src/ordinal.js
var implicit = Symbol("implicit");
function ordinal() {
  var index2 = new InternMap(), domain = [], range3 = [], unknown = implicit;
  function scale(d) {
    let i = index2.get(d);
    if (i === void 0) {
      if (unknown !== implicit)
        return unknown;
      index2.set(d, i = domain.push(d) - 1);
    }
    return range3[i % range3.length];
  }
  scale.domain = function(_) {
    if (!arguments.length)
      return domain.slice();
    domain = [], index2 = new InternMap();
    for (const value of _) {
      if (index2.has(value))
        continue;
      index2.set(value, domain.push(value) - 1);
    }
    return scale;
  };
  scale.range = function(_) {
    return arguments.length ? (range3 = Array.from(_), scale) : range3.slice();
  };
  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };
  scale.copy = function() {
    return ordinal(domain, range3).unknown(unknown);
  };
  initRange.apply(scale, arguments);
  return scale;
}

// node_modules/d3-scale/src/band.js
function band() {
  var scale = ordinal().unknown(void 0), domain = scale.domain, ordinalRange2 = scale.range, r0 = 0, r1 = 1, step, bandwidth, round = false, paddingInner = 0, paddingOuter = 0, align = 0.5;
  delete scale.unknown;
  function rescale() {
    var n = domain().length, reverse2 = r1 < r0, start2 = reverse2 ? r1 : r0, stop = reverse2 ? r0 : r1;
    step = (stop - start2) / Math.max(1, n - paddingInner + paddingOuter * 2);
    if (round)
      step = Math.floor(step);
    start2 += (stop - start2 - step * (n - paddingInner)) * align;
    bandwidth = step * (1 - paddingInner);
    if (round)
      start2 = Math.round(start2), bandwidth = Math.round(bandwidth);
    var values2 = range(n).map(function(i) {
      return start2 + step * i;
    });
    return ordinalRange2(reverse2 ? values2.reverse() : values2);
  }
  scale.domain = function(_) {
    return arguments.length ? (domain(_), rescale()) : domain();
  };
  scale.range = function(_) {
    return arguments.length ? ([r0, r1] = _, r0 = +r0, r1 = +r1, rescale()) : [r0, r1];
  };
  scale.rangeRound = function(_) {
    return [r0, r1] = _, r0 = +r0, r1 = +r1, round = true, rescale();
  };
  scale.bandwidth = function() {
    return bandwidth;
  };
  scale.step = function() {
    return step;
  };
  scale.round = function(_) {
    return arguments.length ? (round = !!_, rescale()) : round;
  };
  scale.padding = function(_) {
    return arguments.length ? (paddingInner = Math.min(1, paddingOuter = +_), rescale()) : paddingInner;
  };
  scale.paddingInner = function(_) {
    return arguments.length ? (paddingInner = Math.min(1, _), rescale()) : paddingInner;
  };
  scale.paddingOuter = function(_) {
    return arguments.length ? (paddingOuter = +_, rescale()) : paddingOuter;
  };
  scale.align = function(_) {
    return arguments.length ? (align = Math.max(0, Math.min(1, _)), rescale()) : align;
  };
  scale.copy = function() {
    return band(domain(), [r0, r1]).round(round).paddingInner(paddingInner).paddingOuter(paddingOuter).align(align);
  };
  return initRange.apply(rescale(), arguments);
}
function pointish(scale) {
  var copy3 = scale.copy;
  scale.padding = scale.paddingOuter;
  delete scale.paddingInner;
  delete scale.paddingOuter;
  scale.copy = function() {
    return pointish(copy3());
  };
  return scale;
}
function point() {
  return pointish(band.apply(null, arguments).paddingInner(1));
}

// node_modules/d3-scale/src/constant.js
function constants(x2) {
  return function() {
    return x2;
  };
}

// node_modules/d3-scale/src/number.js
function number3(x2) {
  return +x2;
}

// node_modules/d3-scale/src/continuous.js
var unit = [0, 1];
function identity3(x2) {
  return x2;
}
function normalize(a2, b) {
  return (b -= a2 = +a2) ? function(x2) {
    return (x2 - a2) / b;
  } : constants(isNaN(b) ? NaN : 0.5);
}
function clamper(a2, b) {
  var t;
  if (a2 > b)
    t = a2, a2 = b, b = t;
  return function(x2) {
    return Math.max(a2, Math.min(b, x2));
  };
}
function bimap(domain, range3, interpolate) {
  var d0 = domain[0], d1 = domain[1], r0 = range3[0], r1 = range3[1];
  if (d1 < d0)
    d0 = normalize(d1, d0), r0 = interpolate(r1, r0);
  else
    d0 = normalize(d0, d1), r0 = interpolate(r0, r1);
  return function(x2) {
    return r0(d0(x2));
  };
}
function polymap(domain, range3, interpolate) {
  var j = Math.min(domain.length, range3.length) - 1, d = new Array(j), r = new Array(j), i = -1;
  if (domain[j] < domain[0]) {
    domain = domain.slice().reverse();
    range3 = range3.slice().reverse();
  }
  while (++i < j) {
    d[i] = normalize(domain[i], domain[i + 1]);
    r[i] = interpolate(range3[i], range3[i + 1]);
  }
  return function(x2) {
    var i2 = bisect_default(domain, x2, 1, j) - 1;
    return r[i2](d[i2](x2));
  };
}
function copy(source, target) {
  return target.domain(source.domain()).range(source.range()).interpolate(source.interpolate()).clamp(source.clamp()).unknown(source.unknown());
}
function transformer2() {
  var domain = unit, range3 = unit, interpolate = value_default, transform2, untransform, unknown, clamp = identity3, piecewise2, output, input;
  function rescale() {
    var n = Math.min(domain.length, range3.length);
    if (clamp !== identity3)
      clamp = clamper(domain[0], domain[n - 1]);
    piecewise2 = n > 2 ? polymap : bimap;
    output = input = null;
    return scale;
  }
  function scale(x2) {
    return x2 == null || isNaN(x2 = +x2) ? unknown : (output || (output = piecewise2(domain.map(transform2), range3, interpolate)))(transform2(clamp(x2)));
  }
  scale.invert = function(y2) {
    return clamp(untransform((input || (input = piecewise2(range3, domain.map(transform2), number_default)))(y2)));
  };
  scale.domain = function(_) {
    return arguments.length ? (domain = Array.from(_, number3), rescale()) : domain.slice();
  };
  scale.range = function(_) {
    return arguments.length ? (range3 = Array.from(_), rescale()) : range3.slice();
  };
  scale.rangeRound = function(_) {
    return range3 = Array.from(_), interpolate = round_default, rescale();
  };
  scale.clamp = function(_) {
    return arguments.length ? (clamp = _ ? true : identity3, rescale()) : clamp !== identity3;
  };
  scale.interpolate = function(_) {
    return arguments.length ? (interpolate = _, rescale()) : interpolate;
  };
  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };
  return function(t, u) {
    transform2 = t, untransform = u;
    return rescale();
  };
}
function continuous() {
  return transformer2()(identity3, identity3);
}

// node_modules/d3-scale/src/tickFormat.js
function tickFormat(start2, stop, count2, specifier) {
  var step = tickStep(start2, stop, count2), precision;
  specifier = formatSpecifier(specifier == null ? ",f" : specifier);
  switch (specifier.type) {
    case "s": {
      var value = Math.max(Math.abs(start2), Math.abs(stop));
      if (specifier.precision == null && !isNaN(precision = precisionPrefix_default(step, value)))
        specifier.precision = precision;
      return formatPrefix(specifier, value);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      if (specifier.precision == null && !isNaN(precision = precisionRound_default(step, Math.max(Math.abs(start2), Math.abs(stop)))))
        specifier.precision = precision - (specifier.type === "e");
      break;
    }
    case "f":
    case "%": {
      if (specifier.precision == null && !isNaN(precision = precisionFixed_default(step)))
        specifier.precision = precision - (specifier.type === "%") * 2;
      break;
    }
  }
  return format(specifier);
}

// node_modules/d3-scale/src/linear.js
function linearish(scale) {
  var domain = scale.domain;
  scale.ticks = function(count2) {
    var d = domain();
    return ticks(d[0], d[d.length - 1], count2 == null ? 10 : count2);
  };
  scale.tickFormat = function(count2, specifier) {
    var d = domain();
    return tickFormat(d[0], d[d.length - 1], count2 == null ? 10 : count2, specifier);
  };
  scale.nice = function(count2) {
    if (count2 == null)
      count2 = 10;
    var d = domain();
    var i0 = 0;
    var i1 = d.length - 1;
    var start2 = d[i0];
    var stop = d[i1];
    var prestep;
    var step;
    var maxIter = 10;
    if (stop < start2) {
      step = start2, start2 = stop, stop = step;
      step = i0, i0 = i1, i1 = step;
    }
    while (maxIter-- > 0) {
      step = tickIncrement(start2, stop, count2);
      if (step === prestep) {
        d[i0] = start2;
        d[i1] = stop;
        return domain(d);
      } else if (step > 0) {
        start2 = Math.floor(start2 / step) * step;
        stop = Math.ceil(stop / step) * step;
      } else if (step < 0) {
        start2 = Math.ceil(start2 * step) / step;
        stop = Math.floor(stop * step) / step;
      } else {
        break;
      }
      prestep = step;
    }
    return scale;
  };
  return scale;
}
function linear2() {
  var scale = continuous();
  scale.copy = function() {
    return copy(scale, linear2());
  };
  initRange.apply(scale, arguments);
  return linearish(scale);
}

// node_modules/d3-scale/src/identity.js
function identity4(domain) {
  var unknown;
  function scale(x2) {
    return x2 == null || isNaN(x2 = +x2) ? unknown : x2;
  }
  scale.invert = scale;
  scale.domain = scale.range = function(_) {
    return arguments.length ? (domain = Array.from(_, number3), scale) : domain.slice();
  };
  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };
  scale.copy = function() {
    return identity4(domain).unknown(unknown);
  };
  domain = arguments.length ? Array.from(domain, number3) : [0, 1];
  return linearish(scale);
}

// node_modules/d3-scale/src/nice.js
function nice(domain, interval2) {
  domain = domain.slice();
  var i0 = 0, i1 = domain.length - 1, x05 = domain[i0], x12 = domain[i1], t;
  if (x12 < x05) {
    t = i0, i0 = i1, i1 = t;
    t = x05, x05 = x12, x12 = t;
  }
  domain[i0] = interval2.floor(x05);
  domain[i1] = interval2.ceil(x12);
  return domain;
}

// node_modules/d3-scale/src/log.js
function transformLog(x2) {
  return Math.log(x2);
}
function transformExp(x2) {
  return Math.exp(x2);
}
function transformLogn(x2) {
  return -Math.log(-x2);
}
function transformExpn(x2) {
  return -Math.exp(-x2);
}
function pow10(x2) {
  return isFinite(x2) ? +("1e" + x2) : x2 < 0 ? 0 : x2;
}
function powp(base) {
  return base === 10 ? pow10 : base === Math.E ? Math.exp : (x2) => Math.pow(base, x2);
}
function logp(base) {
  return base === Math.E ? Math.log : base === 10 && Math.log10 || base === 2 && Math.log2 || (base = Math.log(base), (x2) => Math.log(x2) / base);
}
function reflect(f) {
  return (x2, k2) => -f(-x2, k2);
}
function loggish(transform2) {
  const scale = transform2(transformLog, transformExp);
  const domain = scale.domain;
  let base = 10;
  let logs;
  let pows;
  function rescale() {
    logs = logp(base), pows = powp(base);
    if (domain()[0] < 0) {
      logs = reflect(logs), pows = reflect(pows);
      transform2(transformLogn, transformExpn);
    } else {
      transform2(transformLog, transformExp);
    }
    return scale;
  }
  scale.base = function(_) {
    return arguments.length ? (base = +_, rescale()) : base;
  };
  scale.domain = function(_) {
    return arguments.length ? (domain(_), rescale()) : domain();
  };
  scale.ticks = (count2) => {
    const d = domain();
    let u = d[0];
    let v = d[d.length - 1];
    const r = v < u;
    if (r)
      [u, v] = [v, u];
    let i = logs(u);
    let j = logs(v);
    let k2;
    let t;
    const n = count2 == null ? 10 : +count2;
    let z = [];
    if (!(base % 1) && j - i < n) {
      i = Math.floor(i), j = Math.ceil(j);
      if (u > 0)
        for (; i <= j; ++i) {
          for (k2 = 1; k2 < base; ++k2) {
            t = i < 0 ? k2 / pows(-i) : k2 * pows(i);
            if (t < u)
              continue;
            if (t > v)
              break;
            z.push(t);
          }
        }
      else
        for (; i <= j; ++i) {
          for (k2 = base - 1; k2 >= 1; --k2) {
            t = i > 0 ? k2 / pows(-i) : k2 * pows(i);
            if (t < u)
              continue;
            if (t > v)
              break;
            z.push(t);
          }
        }
      if (z.length * 2 < n)
        z = ticks(u, v, n);
    } else {
      z = ticks(i, j, Math.min(j - i, n)).map(pows);
    }
    return r ? z.reverse() : z;
  };
  scale.tickFormat = (count2, specifier) => {
    if (count2 == null)
      count2 = 10;
    if (specifier == null)
      specifier = base === 10 ? "s" : ",";
    if (typeof specifier !== "function") {
      if (!(base % 1) && (specifier = formatSpecifier(specifier)).precision == null)
        specifier.trim = true;
      specifier = format(specifier);
    }
    if (count2 === Infinity)
      return specifier;
    const k2 = Math.max(1, base * count2 / scale.ticks().length);
    return (d) => {
      let i = d / pows(Math.round(logs(d)));
      if (i * base < base - 0.5)
        i *= base;
      return i <= k2 ? specifier(d) : "";
    };
  };
  scale.nice = () => {
    return domain(nice(domain(), {
      floor: (x2) => pows(Math.floor(logs(x2))),
      ceil: (x2) => pows(Math.ceil(logs(x2)))
    }));
  };
  return scale;
}
function log2() {
  const scale = loggish(transformer2()).domain([1, 10]);
  scale.copy = () => copy(scale, log2()).base(scale.base());
  initRange.apply(scale, arguments);
  return scale;
}

// node_modules/d3-scale/src/symlog.js
function transformSymlog(c4) {
  return function(x2) {
    return Math.sign(x2) * Math.log1p(Math.abs(x2 / c4));
  };
}
function transformSymexp(c4) {
  return function(x2) {
    return Math.sign(x2) * Math.expm1(Math.abs(x2)) * c4;
  };
}
function symlogish(transform2) {
  var c4 = 1, scale = transform2(transformSymlog(c4), transformSymexp(c4));
  scale.constant = function(_) {
    return arguments.length ? transform2(transformSymlog(c4 = +_), transformSymexp(c4)) : c4;
  };
  return linearish(scale);
}
function symlog() {
  var scale = symlogish(transformer2());
  scale.copy = function() {
    return copy(scale, symlog()).constant(scale.constant());
  };
  return initRange.apply(scale, arguments);
}

// node_modules/d3-scale/src/pow.js
function transformPow(exponent) {
  return function(x2) {
    return x2 < 0 ? -Math.pow(-x2, exponent) : Math.pow(x2, exponent);
  };
}
function transformSqrt(x2) {
  return x2 < 0 ? -Math.sqrt(-x2) : Math.sqrt(x2);
}
function transformSquare(x2) {
  return x2 < 0 ? -x2 * x2 : x2 * x2;
}
function powish(transform2) {
  var scale = transform2(identity3, identity3), exponent = 1;
  function rescale() {
    return exponent === 1 ? transform2(identity3, identity3) : exponent === 0.5 ? transform2(transformSqrt, transformSquare) : transform2(transformPow(exponent), transformPow(1 / exponent));
  }
  scale.exponent = function(_) {
    return arguments.length ? (exponent = +_, rescale()) : exponent;
  };
  return linearish(scale);
}
function pow2() {
  var scale = powish(transformer2());
  scale.copy = function() {
    return copy(scale, pow2()).exponent(scale.exponent());
  };
  initRange.apply(scale, arguments);
  return scale;
}

// node_modules/d3-scale/src/quantile.js
function quantile2() {
  var domain = [], range3 = [], thresholds = [], unknown;
  function rescale() {
    var i = 0, n = Math.max(1, range3.length);
    thresholds = new Array(n - 1);
    while (++i < n)
      thresholds[i - 1] = quantileSorted(domain, i / n);
    return scale;
  }
  function scale(x2) {
    return x2 == null || isNaN(x2 = +x2) ? unknown : range3[bisect_default(thresholds, x2)];
  }
  scale.invertExtent = function(y2) {
    var i = range3.indexOf(y2);
    return i < 0 ? [NaN, NaN] : [
      i > 0 ? thresholds[i - 1] : domain[0],
      i < thresholds.length ? thresholds[i] : domain[domain.length - 1]
    ];
  };
  scale.domain = function(_) {
    if (!arguments.length)
      return domain.slice();
    domain = [];
    for (let d of _)
      if (d != null && !isNaN(d = +d))
        domain.push(d);
    domain.sort(ascending);
    return rescale();
  };
  scale.range = function(_) {
    return arguments.length ? (range3 = Array.from(_), rescale()) : range3.slice();
  };
  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };
  scale.quantiles = function() {
    return thresholds.slice();
  };
  scale.copy = function() {
    return quantile2().domain(domain).range(range3).unknown(unknown);
  };
  return initRange.apply(scale, arguments);
}

// node_modules/d3-scale/src/threshold.js
function threshold() {
  var domain = [0.5], range3 = [0, 1], unknown, n = 1;
  function scale(x2) {
    return x2 != null && x2 <= x2 ? range3[bisect_default(domain, x2, 0, n)] : unknown;
  }
  scale.domain = function(_) {
    return arguments.length ? (domain = Array.from(_), n = Math.min(domain.length, range3.length - 1), scale) : domain.slice();
  };
  scale.range = function(_) {
    return arguments.length ? (range3 = Array.from(_), n = Math.min(domain.length, range3.length - 1), scale) : range3.slice();
  };
  scale.invertExtent = function(y2) {
    var i = range3.indexOf(y2);
    return [domain[i - 1], domain[i]];
  };
  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };
  scale.copy = function() {
    return threshold().domain(domain).range(range3).unknown(unknown);
  };
  return initRange.apply(scale, arguments);
}

// node_modules/d3-time/src/interval.js
var t02 = /* @__PURE__ */ new Date();
var t12 = /* @__PURE__ */ new Date();
function timeInterval(floori, offseti, count2, field2) {
  function interval2(date2) {
    return floori(date2 = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+date2)), date2;
  }
  interval2.floor = (date2) => {
    return floori(date2 = /* @__PURE__ */ new Date(+date2)), date2;
  };
  interval2.ceil = (date2) => {
    return floori(date2 = new Date(date2 - 1)), offseti(date2, 1), floori(date2), date2;
  };
  interval2.round = (date2) => {
    const d0 = interval2(date2), d1 = interval2.ceil(date2);
    return date2 - d0 < d1 - date2 ? d0 : d1;
  };
  interval2.offset = (date2, step) => {
    return offseti(date2 = /* @__PURE__ */ new Date(+date2), step == null ? 1 : Math.floor(step)), date2;
  };
  interval2.range = (start2, stop, step) => {
    const range3 = [];
    start2 = interval2.ceil(start2);
    step = step == null ? 1 : Math.floor(step);
    if (!(start2 < stop) || !(step > 0))
      return range3;
    let previous;
    do
      range3.push(previous = /* @__PURE__ */ new Date(+start2)), offseti(start2, step), floori(start2);
    while (previous < start2 && start2 < stop);
    return range3;
  };
  interval2.filter = (test) => {
    return timeInterval((date2) => {
      if (date2 >= date2)
        while (floori(date2), !test(date2))
          date2.setTime(date2 - 1);
    }, (date2, step) => {
      if (date2 >= date2) {
        if (step < 0)
          while (++step <= 0) {
            while (offseti(date2, -1), !test(date2)) {
            }
          }
        else
          while (--step >= 0) {
            while (offseti(date2, 1), !test(date2)) {
            }
          }
      }
    });
  };
  if (count2) {
    interval2.count = (start2, end) => {
      t02.setTime(+start2), t12.setTime(+end);
      floori(t02), floori(t12);
      return Math.floor(count2(t02, t12));
    };
    interval2.every = (step) => {
      step = Math.floor(step);
      return !isFinite(step) || !(step > 0) ? null : !(step > 1) ? interval2 : interval2.filter(field2 ? (d) => field2(d) % step === 0 : (d) => interval2.count(0, d) % step === 0);
    };
  }
  return interval2;
}

// node_modules/d3-time/src/millisecond.js
var millisecond = timeInterval(() => {
}, (date2, step) => {
  date2.setTime(+date2 + step);
}, (start2, end) => {
  return end - start2;
});
millisecond.every = (k2) => {
  k2 = Math.floor(k2);
  if (!isFinite(k2) || !(k2 > 0))
    return null;
  if (!(k2 > 1))
    return millisecond;
  return timeInterval((date2) => {
    date2.setTime(Math.floor(date2 / k2) * k2);
  }, (date2, step) => {
    date2.setTime(+date2 + step * k2);
  }, (start2, end) => {
    return (end - start2) / k2;
  });
};
var milliseconds = millisecond.range;

// node_modules/d3-time/src/duration.js
var durationSecond = 1e3;
var durationMinute = durationSecond * 60;
var durationHour = durationMinute * 60;
var durationDay = durationHour * 24;
var durationWeek = durationDay * 7;
var durationMonth = durationDay * 30;
var durationYear = durationDay * 365;

// node_modules/d3-time/src/second.js
var second = timeInterval((date2) => {
  date2.setTime(date2 - date2.getMilliseconds());
}, (date2, step) => {
  date2.setTime(+date2 + step * durationSecond);
}, (start2, end) => {
  return (end - start2) / durationSecond;
}, (date2) => {
  return date2.getUTCSeconds();
});
var seconds = second.range;

// node_modules/d3-time/src/minute.js
var timeMinute = timeInterval((date2) => {
  date2.setTime(date2 - date2.getMilliseconds() - date2.getSeconds() * durationSecond);
}, (date2, step) => {
  date2.setTime(+date2 + step * durationMinute);
}, (start2, end) => {
  return (end - start2) / durationMinute;
}, (date2) => {
  return date2.getMinutes();
});
var timeMinutes = timeMinute.range;
var utcMinute = timeInterval((date2) => {
  date2.setUTCSeconds(0, 0);
}, (date2, step) => {
  date2.setTime(+date2 + step * durationMinute);
}, (start2, end) => {
  return (end - start2) / durationMinute;
}, (date2) => {
  return date2.getUTCMinutes();
});
var utcMinutes = utcMinute.range;

// node_modules/d3-time/src/hour.js
var timeHour = timeInterval((date2) => {
  date2.setTime(date2 - date2.getMilliseconds() - date2.getSeconds() * durationSecond - date2.getMinutes() * durationMinute);
}, (date2, step) => {
  date2.setTime(+date2 + step * durationHour);
}, (start2, end) => {
  return (end - start2) / durationHour;
}, (date2) => {
  return date2.getHours();
});
var timeHours = timeHour.range;
var utcHour = timeInterval((date2) => {
  date2.setUTCMinutes(0, 0, 0);
}, (date2, step) => {
  date2.setTime(+date2 + step * durationHour);
}, (start2, end) => {
  return (end - start2) / durationHour;
}, (date2) => {
  return date2.getUTCHours();
});
var utcHours = utcHour.range;

// node_modules/d3-time/src/day.js
var timeDay = timeInterval(
  (date2) => date2.setHours(0, 0, 0, 0),
  (date2, step) => date2.setDate(date2.getDate() + step),
  (start2, end) => (end - start2 - (end.getTimezoneOffset() - start2.getTimezoneOffset()) * durationMinute) / durationDay,
  (date2) => date2.getDate() - 1
);
var timeDays = timeDay.range;
var utcDay = timeInterval((date2) => {
  date2.setUTCHours(0, 0, 0, 0);
}, (date2, step) => {
  date2.setUTCDate(date2.getUTCDate() + step);
}, (start2, end) => {
  return (end - start2) / durationDay;
}, (date2) => {
  return date2.getUTCDate() - 1;
});
var utcDays = utcDay.range;
var unixDay = timeInterval((date2) => {
  date2.setUTCHours(0, 0, 0, 0);
}, (date2, step) => {
  date2.setUTCDate(date2.getUTCDate() + step);
}, (start2, end) => {
  return (end - start2) / durationDay;
}, (date2) => {
  return Math.floor(date2 / durationDay);
});
var unixDays = unixDay.range;

// node_modules/d3-time/src/week.js
function timeWeekday(i) {
  return timeInterval((date2) => {
    date2.setDate(date2.getDate() - (date2.getDay() + 7 - i) % 7);
    date2.setHours(0, 0, 0, 0);
  }, (date2, step) => {
    date2.setDate(date2.getDate() + step * 7);
  }, (start2, end) => {
    return (end - start2 - (end.getTimezoneOffset() - start2.getTimezoneOffset()) * durationMinute) / durationWeek;
  });
}
var timeSunday = timeWeekday(0);
var timeMonday = timeWeekday(1);
var timeTuesday = timeWeekday(2);
var timeWednesday = timeWeekday(3);
var timeThursday = timeWeekday(4);
var timeFriday = timeWeekday(5);
var timeSaturday = timeWeekday(6);
var timeSundays = timeSunday.range;
var timeMondays = timeMonday.range;
var timeTuesdays = timeTuesday.range;
var timeWednesdays = timeWednesday.range;
var timeThursdays = timeThursday.range;
var timeFridays = timeFriday.range;
var timeSaturdays = timeSaturday.range;
function utcWeekday(i) {
  return timeInterval((date2) => {
    date2.setUTCDate(date2.getUTCDate() - (date2.getUTCDay() + 7 - i) % 7);
    date2.setUTCHours(0, 0, 0, 0);
  }, (date2, step) => {
    date2.setUTCDate(date2.getUTCDate() + step * 7);
  }, (start2, end) => {
    return (end - start2) / durationWeek;
  });
}
var utcSunday = utcWeekday(0);
var utcMonday = utcWeekday(1);
var utcTuesday = utcWeekday(2);
var utcWednesday = utcWeekday(3);
var utcThursday = utcWeekday(4);
var utcFriday = utcWeekday(5);
var utcSaturday = utcWeekday(6);
var utcSundays = utcSunday.range;
var utcMondays = utcMonday.range;
var utcTuesdays = utcTuesday.range;
var utcWednesdays = utcWednesday.range;
var utcThursdays = utcThursday.range;
var utcFridays = utcFriday.range;
var utcSaturdays = utcSaturday.range;

// node_modules/d3-time/src/month.js
var timeMonth = timeInterval((date2) => {
  date2.setDate(1);
  date2.setHours(0, 0, 0, 0);
}, (date2, step) => {
  date2.setMonth(date2.getMonth() + step);
}, (start2, end) => {
  return end.getMonth() - start2.getMonth() + (end.getFullYear() - start2.getFullYear()) * 12;
}, (date2) => {
  return date2.getMonth();
});
var timeMonths = timeMonth.range;
var utcMonth = timeInterval((date2) => {
  date2.setUTCDate(1);
  date2.setUTCHours(0, 0, 0, 0);
}, (date2, step) => {
  date2.setUTCMonth(date2.getUTCMonth() + step);
}, (start2, end) => {
  return end.getUTCMonth() - start2.getUTCMonth() + (end.getUTCFullYear() - start2.getUTCFullYear()) * 12;
}, (date2) => {
  return date2.getUTCMonth();
});
var utcMonths = utcMonth.range;

// node_modules/d3-time/src/year.js
var timeYear = timeInterval((date2) => {
  date2.setMonth(0, 1);
  date2.setHours(0, 0, 0, 0);
}, (date2, step) => {
  date2.setFullYear(date2.getFullYear() + step);
}, (start2, end) => {
  return end.getFullYear() - start2.getFullYear();
}, (date2) => {
  return date2.getFullYear();
});
timeYear.every = (k2) => {
  return !isFinite(k2 = Math.floor(k2)) || !(k2 > 0) ? null : timeInterval((date2) => {
    date2.setFullYear(Math.floor(date2.getFullYear() / k2) * k2);
    date2.setMonth(0, 1);
    date2.setHours(0, 0, 0, 0);
  }, (date2, step) => {
    date2.setFullYear(date2.getFullYear() + step * k2);
  });
};
var timeYears = timeYear.range;
var utcYear = timeInterval((date2) => {
  date2.setUTCMonth(0, 1);
  date2.setUTCHours(0, 0, 0, 0);
}, (date2, step) => {
  date2.setUTCFullYear(date2.getUTCFullYear() + step);
}, (start2, end) => {
  return end.getUTCFullYear() - start2.getUTCFullYear();
}, (date2) => {
  return date2.getUTCFullYear();
});
utcYear.every = (k2) => {
  return !isFinite(k2 = Math.floor(k2)) || !(k2 > 0) ? null : timeInterval((date2) => {
    date2.setUTCFullYear(Math.floor(date2.getUTCFullYear() / k2) * k2);
    date2.setUTCMonth(0, 1);
    date2.setUTCHours(0, 0, 0, 0);
  }, (date2, step) => {
    date2.setUTCFullYear(date2.getUTCFullYear() + step * k2);
  });
};
var utcYears = utcYear.range;

// node_modules/d3-time/src/ticks.js
function ticker(year, month, week, day, hour, minute) {
  const tickIntervals2 = [
    [second, 1, durationSecond],
    [second, 5, 5 * durationSecond],
    [second, 15, 15 * durationSecond],
    [second, 30, 30 * durationSecond],
    [minute, 1, durationMinute],
    [minute, 5, 5 * durationMinute],
    [minute, 15, 15 * durationMinute],
    [minute, 30, 30 * durationMinute],
    [hour, 1, durationHour],
    [hour, 3, 3 * durationHour],
    [hour, 6, 6 * durationHour],
    [hour, 12, 12 * durationHour],
    [day, 1, durationDay],
    [day, 2, 2 * durationDay],
    [week, 1, durationWeek],
    [month, 1, durationMonth],
    [month, 3, 3 * durationMonth],
    [year, 1, durationYear]
  ];
  function ticks2(start2, stop, count2) {
    const reverse2 = stop < start2;
    if (reverse2)
      [start2, stop] = [stop, start2];
    const interval2 = count2 && typeof count2.range === "function" ? count2 : tickInterval(start2, stop, count2);
    const ticks3 = interval2 ? interval2.range(start2, +stop + 1) : [];
    return reverse2 ? ticks3.reverse() : ticks3;
  }
  function tickInterval(start2, stop, count2) {
    const target = Math.abs(stop - start2) / count2;
    const i = bisector(([, , step2]) => step2).right(tickIntervals2, target);
    if (i === tickIntervals2.length)
      return year.every(tickStep(start2 / durationYear, stop / durationYear, count2));
    if (i === 0)
      return millisecond.every(Math.max(tickStep(start2, stop, count2), 1));
    const [t, step] = tickIntervals2[target / tickIntervals2[i - 1][2] < tickIntervals2[i][2] / target ? i - 1 : i];
    return t.every(step);
  }
  return [ticks2, tickInterval];
}
var [utcTicks, utcTickInterval] = ticker(utcYear, utcMonth, utcSunday, unixDay, utcHour, utcMinute);
var [timeTicks, timeTickInterval] = ticker(timeYear, timeMonth, timeSunday, timeDay, timeHour, timeMinute);

// node_modules/d3-time-format/src/locale.js
function localDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date2 = new Date(-1, d.m, d.d, d.H, d.M, d.S, d.L);
    date2.setFullYear(d.y);
    return date2;
  }
  return new Date(d.y, d.m, d.d, d.H, d.M, d.S, d.L);
}
function utcDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date2 = new Date(Date.UTC(-1, d.m, d.d, d.H, d.M, d.S, d.L));
    date2.setUTCFullYear(d.y);
    return date2;
  }
  return new Date(Date.UTC(d.y, d.m, d.d, d.H, d.M, d.S, d.L));
}
function newDate(y2, m, d) {
  return { y: y2, m, d, H: 0, M: 0, S: 0, L: 0 };
}
function formatLocale(locale3) {
  var locale_dateTime = locale3.dateTime, locale_date = locale3.date, locale_time = locale3.time, locale_periods = locale3.periods, locale_weekdays = locale3.days, locale_shortWeekdays = locale3.shortDays, locale_months = locale3.months, locale_shortMonths = locale3.shortMonths;
  var periodRe = formatRe(locale_periods), periodLookup = formatLookup(locale_periods), weekdayRe = formatRe(locale_weekdays), weekdayLookup = formatLookup(locale_weekdays), shortWeekdayRe = formatRe(locale_shortWeekdays), shortWeekdayLookup = formatLookup(locale_shortWeekdays), monthRe = formatRe(locale_months), monthLookup = formatLookup(locale_months), shortMonthRe = formatRe(locale_shortMonths), shortMonthLookup = formatLookup(locale_shortMonths);
  var formats = {
    "a": formatShortWeekday,
    "A": formatWeekday,
    "b": formatShortMonth,
    "B": formatMonth,
    "c": null,
    "d": formatDayOfMonth,
    "e": formatDayOfMonth,
    "f": formatMicroseconds,
    "g": formatYearISO,
    "G": formatFullYearISO,
    "H": formatHour24,
    "I": formatHour12,
    "j": formatDayOfYear,
    "L": formatMilliseconds,
    "m": formatMonthNumber,
    "M": formatMinutes,
    "p": formatPeriod,
    "q": formatQuarter,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatSeconds,
    "u": formatWeekdayNumberMonday,
    "U": formatWeekNumberSunday,
    "V": formatWeekNumberISO,
    "w": formatWeekdayNumberSunday,
    "W": formatWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatYear,
    "Y": formatFullYear,
    "Z": formatZone,
    "%": formatLiteralPercent
  };
  var utcFormats = {
    "a": formatUTCShortWeekday,
    "A": formatUTCWeekday,
    "b": formatUTCShortMonth,
    "B": formatUTCMonth,
    "c": null,
    "d": formatUTCDayOfMonth,
    "e": formatUTCDayOfMonth,
    "f": formatUTCMicroseconds,
    "g": formatUTCYearISO,
    "G": formatUTCFullYearISO,
    "H": formatUTCHour24,
    "I": formatUTCHour12,
    "j": formatUTCDayOfYear,
    "L": formatUTCMilliseconds,
    "m": formatUTCMonthNumber,
    "M": formatUTCMinutes,
    "p": formatUTCPeriod,
    "q": formatUTCQuarter,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatUTCSeconds,
    "u": formatUTCWeekdayNumberMonday,
    "U": formatUTCWeekNumberSunday,
    "V": formatUTCWeekNumberISO,
    "w": formatUTCWeekdayNumberSunday,
    "W": formatUTCWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatUTCYear,
    "Y": formatUTCFullYear,
    "Z": formatUTCZone,
    "%": formatLiteralPercent
  };
  var parses = {
    "a": parseShortWeekday,
    "A": parseWeekday,
    "b": parseShortMonth,
    "B": parseMonth,
    "c": parseLocaleDateTime,
    "d": parseDayOfMonth,
    "e": parseDayOfMonth,
    "f": parseMicroseconds,
    "g": parseYear,
    "G": parseFullYear,
    "H": parseHour24,
    "I": parseHour24,
    "j": parseDayOfYear,
    "L": parseMilliseconds,
    "m": parseMonthNumber,
    "M": parseMinutes,
    "p": parsePeriod,
    "q": parseQuarter,
    "Q": parseUnixTimestamp,
    "s": parseUnixTimestampSeconds,
    "S": parseSeconds,
    "u": parseWeekdayNumberMonday,
    "U": parseWeekNumberSunday,
    "V": parseWeekNumberISO,
    "w": parseWeekdayNumberSunday,
    "W": parseWeekNumberMonday,
    "x": parseLocaleDate,
    "X": parseLocaleTime,
    "y": parseYear,
    "Y": parseFullYear,
    "Z": parseZone,
    "%": parseLiteralPercent
  };
  formats.x = newFormat(locale_date, formats);
  formats.X = newFormat(locale_time, formats);
  formats.c = newFormat(locale_dateTime, formats);
  utcFormats.x = newFormat(locale_date, utcFormats);
  utcFormats.X = newFormat(locale_time, utcFormats);
  utcFormats.c = newFormat(locale_dateTime, utcFormats);
  function newFormat(specifier, formats2) {
    return function(date2) {
      var string2 = [], i = -1, j = 0, n = specifier.length, c4, pad3, format3;
      if (!(date2 instanceof Date))
        date2 = /* @__PURE__ */ new Date(+date2);
      while (++i < n) {
        if (specifier.charCodeAt(i) === 37) {
          string2.push(specifier.slice(j, i));
          if ((pad3 = pads[c4 = specifier.charAt(++i)]) != null)
            c4 = specifier.charAt(++i);
          else
            pad3 = c4 === "e" ? " " : "0";
          if (format3 = formats2[c4])
            c4 = format3(date2, pad3);
          string2.push(c4);
          j = i + 1;
        }
      }
      string2.push(specifier.slice(j, i));
      return string2.join("");
    };
  }
  function newParse(specifier, Z) {
    return function(string2) {
      var d = newDate(1900, void 0, 1), i = parseSpecifier(d, specifier, string2 += "", 0), week, day;
      if (i != string2.length)
        return null;
      if ("Q" in d)
        return new Date(d.Q);
      if ("s" in d)
        return new Date(d.s * 1e3 + ("L" in d ? d.L : 0));
      if (Z && !("Z" in d))
        d.Z = 0;
      if ("p" in d)
        d.H = d.H % 12 + d.p * 12;
      if (d.m === void 0)
        d.m = "q" in d ? d.q : 0;
      if ("V" in d) {
        if (d.V < 1 || d.V > 53)
          return null;
        if (!("w" in d))
          d.w = 1;
        if ("Z" in d) {
          week = utcDate(newDate(d.y, 0, 1)), day = week.getUTCDay();
          week = day > 4 || day === 0 ? utcMonday.ceil(week) : utcMonday(week);
          week = utcDay.offset(week, (d.V - 1) * 7);
          d.y = week.getUTCFullYear();
          d.m = week.getUTCMonth();
          d.d = week.getUTCDate() + (d.w + 6) % 7;
        } else {
          week = localDate(newDate(d.y, 0, 1)), day = week.getDay();
          week = day > 4 || day === 0 ? timeMonday.ceil(week) : timeMonday(week);
          week = timeDay.offset(week, (d.V - 1) * 7);
          d.y = week.getFullYear();
          d.m = week.getMonth();
          d.d = week.getDate() + (d.w + 6) % 7;
        }
      } else if ("W" in d || "U" in d) {
        if (!("w" in d))
          d.w = "u" in d ? d.u % 7 : "W" in d ? 1 : 0;
        day = "Z" in d ? utcDate(newDate(d.y, 0, 1)).getUTCDay() : localDate(newDate(d.y, 0, 1)).getDay();
        d.m = 0;
        d.d = "W" in d ? (d.w + 6) % 7 + d.W * 7 - (day + 5) % 7 : d.w + d.U * 7 - (day + 6) % 7;
      }
      if ("Z" in d) {
        d.H += d.Z / 100 | 0;
        d.M += d.Z % 100;
        return utcDate(d);
      }
      return localDate(d);
    };
  }
  function parseSpecifier(d, specifier, string2, j) {
    var i = 0, n = specifier.length, m = string2.length, c4, parse2;
    while (i < n) {
      if (j >= m)
        return -1;
      c4 = specifier.charCodeAt(i++);
      if (c4 === 37) {
        c4 = specifier.charAt(i++);
        parse2 = parses[c4 in pads ? specifier.charAt(i++) : c4];
        if (!parse2 || (j = parse2(d, string2, j)) < 0)
          return -1;
      } else if (c4 != string2.charCodeAt(j++)) {
        return -1;
      }
    }
    return j;
  }
  function parsePeriod(d, string2, i) {
    var n = periodRe.exec(string2.slice(i));
    return n ? (d.p = periodLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }
  function parseShortWeekday(d, string2, i) {
    var n = shortWeekdayRe.exec(string2.slice(i));
    return n ? (d.w = shortWeekdayLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }
  function parseWeekday(d, string2, i) {
    var n = weekdayRe.exec(string2.slice(i));
    return n ? (d.w = weekdayLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }
  function parseShortMonth(d, string2, i) {
    var n = shortMonthRe.exec(string2.slice(i));
    return n ? (d.m = shortMonthLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }
  function parseMonth(d, string2, i) {
    var n = monthRe.exec(string2.slice(i));
    return n ? (d.m = monthLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }
  function parseLocaleDateTime(d, string2, i) {
    return parseSpecifier(d, locale_dateTime, string2, i);
  }
  function parseLocaleDate(d, string2, i) {
    return parseSpecifier(d, locale_date, string2, i);
  }
  function parseLocaleTime(d, string2, i) {
    return parseSpecifier(d, locale_time, string2, i);
  }
  function formatShortWeekday(d) {
    return locale_shortWeekdays[d.getDay()];
  }
  function formatWeekday(d) {
    return locale_weekdays[d.getDay()];
  }
  function formatShortMonth(d) {
    return locale_shortMonths[d.getMonth()];
  }
  function formatMonth(d) {
    return locale_months[d.getMonth()];
  }
  function formatPeriod(d) {
    return locale_periods[+(d.getHours() >= 12)];
  }
  function formatQuarter(d) {
    return 1 + ~~(d.getMonth() / 3);
  }
  function formatUTCShortWeekday(d) {
    return locale_shortWeekdays[d.getUTCDay()];
  }
  function formatUTCWeekday(d) {
    return locale_weekdays[d.getUTCDay()];
  }
  function formatUTCShortMonth(d) {
    return locale_shortMonths[d.getUTCMonth()];
  }
  function formatUTCMonth(d) {
    return locale_months[d.getUTCMonth()];
  }
  function formatUTCPeriod(d) {
    return locale_periods[+(d.getUTCHours() >= 12)];
  }
  function formatUTCQuarter(d) {
    return 1 + ~~(d.getUTCMonth() / 3);
  }
  return {
    format: function(specifier) {
      var f = newFormat(specifier += "", formats);
      f.toString = function() {
        return specifier;
      };
      return f;
    },
    parse: function(specifier) {
      var p = newParse(specifier += "", false);
      p.toString = function() {
        return specifier;
      };
      return p;
    },
    utcFormat: function(specifier) {
      var f = newFormat(specifier += "", utcFormats);
      f.toString = function() {
        return specifier;
      };
      return f;
    },
    utcParse: function(specifier) {
      var p = newParse(specifier += "", true);
      p.toString = function() {
        return specifier;
      };
      return p;
    }
  };
}
var pads = { "-": "", "_": " ", "0": "0" };
var numberRe = /^\s*\d+/;
var percentRe = /^%/;
var requoteRe = /[\\^$*+?|[\]().{}]/g;
function pad(value, fill, width) {
  var sign3 = value < 0 ? "-" : "", string2 = (sign3 ? -value : value) + "", length3 = string2.length;
  return sign3 + (length3 < width ? new Array(width - length3 + 1).join(fill) + string2 : string2);
}
function requote(s2) {
  return s2.replace(requoteRe, "\\$&");
}
function formatRe(names) {
  return new RegExp("^(?:" + names.map(requote).join("|") + ")", "i");
}
function formatLookup(names) {
  return new Map(names.map((name, i) => [name.toLowerCase(), i]));
}
function parseWeekdayNumberSunday(d, string2, i) {
  var n = numberRe.exec(string2.slice(i, i + 1));
  return n ? (d.w = +n[0], i + n[0].length) : -1;
}
function parseWeekdayNumberMonday(d, string2, i) {
  var n = numberRe.exec(string2.slice(i, i + 1));
  return n ? (d.u = +n[0], i + n[0].length) : -1;
}
function parseWeekNumberSunday(d, string2, i) {
  var n = numberRe.exec(string2.slice(i, i + 2));
  return n ? (d.U = +n[0], i + n[0].length) : -1;
}
function parseWeekNumberISO(d, string2, i) {
  var n = numberRe.exec(string2.slice(i, i + 2));
  return n ? (d.V = +n[0], i + n[0].length) : -1;
}
function parseWeekNumberMonday(d, string2, i) {
  var n = numberRe.exec(string2.slice(i, i + 2));
  return n ? (d.W = +n[0], i + n[0].length) : -1;
}
function parseFullYear(d, string2, i) {
  var n = numberRe.exec(string2.slice(i, i + 4));
  return n ? (d.y = +n[0], i + n[0].length) : -1;
}
function parseYear(d, string2, i) {
  var n = numberRe.exec(string2.slice(i, i + 2));
  return n ? (d.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3), i + n[0].length) : -1;
}
function parseZone(d, string2, i) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(string2.slice(i, i + 6));
  return n ? (d.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), i + n[0].length) : -1;
}
function parseQuarter(d, string2, i) {
  var n = numberRe.exec(string2.slice(i, i + 1));
  return n ? (d.q = n[0] * 3 - 3, i + n[0].length) : -1;
}
function parseMonthNumber(d, string2, i) {
  var n = numberRe.exec(string2.slice(i, i + 2));
  return n ? (d.m = n[0] - 1, i + n[0].length) : -1;
}
function parseDayOfMonth(d, string2, i) {
  var n = numberRe.exec(string2.slice(i, i + 2));
  return n ? (d.d = +n[0], i + n[0].length) : -1;
}
function parseDayOfYear(d, string2, i) {
  var n = numberRe.exec(string2.slice(i, i + 3));
  return n ? (d.m = 0, d.d = +n[0], i + n[0].length) : -1;
}
function parseHour24(d, string2, i) {
  var n = numberRe.exec(string2.slice(i, i + 2));
  return n ? (d.H = +n[0], i + n[0].length) : -1;
}
function parseMinutes(d, string2, i) {
  var n = numberRe.exec(string2.slice(i, i + 2));
  return n ? (d.M = +n[0], i + n[0].length) : -1;
}
function parseSeconds(d, string2, i) {
  var n = numberRe.exec(string2.slice(i, i + 2));
  return n ? (d.S = +n[0], i + n[0].length) : -1;
}
function parseMilliseconds(d, string2, i) {
  var n = numberRe.exec(string2.slice(i, i + 3));
  return n ? (d.L = +n[0], i + n[0].length) : -1;
}
function parseMicroseconds(d, string2, i) {
  var n = numberRe.exec(string2.slice(i, i + 6));
  return n ? (d.L = Math.floor(n[0] / 1e3), i + n[0].length) : -1;
}
function parseLiteralPercent(d, string2, i) {
  var n = percentRe.exec(string2.slice(i, i + 1));
  return n ? i + n[0].length : -1;
}
function parseUnixTimestamp(d, string2, i) {
  var n = numberRe.exec(string2.slice(i));
  return n ? (d.Q = +n[0], i + n[0].length) : -1;
}
function parseUnixTimestampSeconds(d, string2, i) {
  var n = numberRe.exec(string2.slice(i));
  return n ? (d.s = +n[0], i + n[0].length) : -1;
}
function formatDayOfMonth(d, p) {
  return pad(d.getDate(), p, 2);
}
function formatHour24(d, p) {
  return pad(d.getHours(), p, 2);
}
function formatHour12(d, p) {
  return pad(d.getHours() % 12 || 12, p, 2);
}
function formatDayOfYear(d, p) {
  return pad(1 + timeDay.count(timeYear(d), d), p, 3);
}
function formatMilliseconds(d, p) {
  return pad(d.getMilliseconds(), p, 3);
}
function formatMicroseconds(d, p) {
  return formatMilliseconds(d, p) + "000";
}
function formatMonthNumber(d, p) {
  return pad(d.getMonth() + 1, p, 2);
}
function formatMinutes(d, p) {
  return pad(d.getMinutes(), p, 2);
}
function formatSeconds(d, p) {
  return pad(d.getSeconds(), p, 2);
}
function formatWeekdayNumberMonday(d) {
  var day = d.getDay();
  return day === 0 ? 7 : day;
}
function formatWeekNumberSunday(d, p) {
  return pad(timeSunday.count(timeYear(d) - 1, d), p, 2);
}
function dISO(d) {
  var day = d.getDay();
  return day >= 4 || day === 0 ? timeThursday(d) : timeThursday.ceil(d);
}
function formatWeekNumberISO(d, p) {
  d = dISO(d);
  return pad(timeThursday.count(timeYear(d), d) + (timeYear(d).getDay() === 4), p, 2);
}
function formatWeekdayNumberSunday(d) {
  return d.getDay();
}
function formatWeekNumberMonday(d, p) {
  return pad(timeMonday.count(timeYear(d) - 1, d), p, 2);
}
function formatYear(d, p) {
  return pad(d.getFullYear() % 100, p, 2);
}
function formatYearISO(d, p) {
  d = dISO(d);
  return pad(d.getFullYear() % 100, p, 2);
}
function formatFullYear(d, p) {
  return pad(d.getFullYear() % 1e4, p, 4);
}
function formatFullYearISO(d, p) {
  var day = d.getDay();
  d = day >= 4 || day === 0 ? timeThursday(d) : timeThursday.ceil(d);
  return pad(d.getFullYear() % 1e4, p, 4);
}
function formatZone(d) {
  var z = d.getTimezoneOffset();
  return (z > 0 ? "-" : (z *= -1, "+")) + pad(z / 60 | 0, "0", 2) + pad(z % 60, "0", 2);
}
function formatUTCDayOfMonth(d, p) {
  return pad(d.getUTCDate(), p, 2);
}
function formatUTCHour24(d, p) {
  return pad(d.getUTCHours(), p, 2);
}
function formatUTCHour12(d, p) {
  return pad(d.getUTCHours() % 12 || 12, p, 2);
}
function formatUTCDayOfYear(d, p) {
  return pad(1 + utcDay.count(utcYear(d), d), p, 3);
}
function formatUTCMilliseconds(d, p) {
  return pad(d.getUTCMilliseconds(), p, 3);
}
function formatUTCMicroseconds(d, p) {
  return formatUTCMilliseconds(d, p) + "000";
}
function formatUTCMonthNumber(d, p) {
  return pad(d.getUTCMonth() + 1, p, 2);
}
function formatUTCMinutes(d, p) {
  return pad(d.getUTCMinutes(), p, 2);
}
function formatUTCSeconds(d, p) {
  return pad(d.getUTCSeconds(), p, 2);
}
function formatUTCWeekdayNumberMonday(d) {
  var dow = d.getUTCDay();
  return dow === 0 ? 7 : dow;
}
function formatUTCWeekNumberSunday(d, p) {
  return pad(utcSunday.count(utcYear(d) - 1, d), p, 2);
}
function UTCdISO(d) {
  var day = d.getUTCDay();
  return day >= 4 || day === 0 ? utcThursday(d) : utcThursday.ceil(d);
}
function formatUTCWeekNumberISO(d, p) {
  d = UTCdISO(d);
  return pad(utcThursday.count(utcYear(d), d) + (utcYear(d).getUTCDay() === 4), p, 2);
}
function formatUTCWeekdayNumberSunday(d) {
  return d.getUTCDay();
}
function formatUTCWeekNumberMonday(d, p) {
  return pad(utcMonday.count(utcYear(d) - 1, d), p, 2);
}
function formatUTCYear(d, p) {
  return pad(d.getUTCFullYear() % 100, p, 2);
}
function formatUTCYearISO(d, p) {
  d = UTCdISO(d);
  return pad(d.getUTCFullYear() % 100, p, 2);
}
function formatUTCFullYear(d, p) {
  return pad(d.getUTCFullYear() % 1e4, p, 4);
}
function formatUTCFullYearISO(d, p) {
  var day = d.getUTCDay();
  d = day >= 4 || day === 0 ? utcThursday(d) : utcThursday.ceil(d);
  return pad(d.getUTCFullYear() % 1e4, p, 4);
}
function formatUTCZone() {
  return "+0000";
}
function formatLiteralPercent() {
  return "%";
}
function formatUnixTimestamp(d) {
  return +d;
}
function formatUnixTimestampSeconds(d) {
  return Math.floor(+d / 1e3);
}

// node_modules/d3-time-format/src/defaultLocale.js
var locale2;
var timeFormat;
var timeParse;
var utcFormat;
var utcParse;
defaultLocale2({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function defaultLocale2(definition) {
  locale2 = formatLocale(definition);
  timeFormat = locale2.format;
  timeParse = locale2.parse;
  utcFormat = locale2.utcFormat;
  utcParse = locale2.utcParse;
  return locale2;
}

// node_modules/d3-scale/src/time.js
function date(t) {
  return new Date(t);
}
function number4(t) {
  return t instanceof Date ? +t : +/* @__PURE__ */ new Date(+t);
}
function calendar(ticks2, tickInterval, year, month, week, day, hour, minute, second3, format3) {
  var scale = continuous(), invert = scale.invert, domain = scale.domain;
  var formatMillisecond = format3(".%L"), formatSecond = format3(":%S"), formatMinute = format3("%I:%M"), formatHour = format3("%I %p"), formatDay = format3("%a %d"), formatWeek = format3("%b %d"), formatMonth = format3("%B"), formatYear3 = format3("%Y");
  function tickFormat2(date2) {
    return (second3(date2) < date2 ? formatMillisecond : minute(date2) < date2 ? formatSecond : hour(date2) < date2 ? formatMinute : day(date2) < date2 ? formatHour : month(date2) < date2 ? week(date2) < date2 ? formatDay : formatWeek : year(date2) < date2 ? formatMonth : formatYear3)(date2);
  }
  scale.invert = function(y2) {
    return new Date(invert(y2));
  };
  scale.domain = function(_) {
    return arguments.length ? domain(Array.from(_, number4)) : domain().map(date);
  };
  scale.ticks = function(interval2) {
    var d = domain();
    return ticks2(d[0], d[d.length - 1], interval2 == null ? 10 : interval2);
  };
  scale.tickFormat = function(count2, specifier) {
    return specifier == null ? tickFormat2 : format3(specifier);
  };
  scale.nice = function(interval2) {
    var d = domain();
    if (!interval2 || typeof interval2.range !== "function")
      interval2 = tickInterval(d[0], d[d.length - 1], interval2 == null ? 10 : interval2);
    return interval2 ? domain(nice(d, interval2)) : scale;
  };
  scale.copy = function() {
    return copy(scale, calendar(ticks2, tickInterval, year, month, week, day, hour, minute, second3, format3));
  };
  return scale;
}
function time() {
  return initRange.apply(calendar(timeTicks, timeTickInterval, timeYear, timeMonth, timeSunday, timeDay, timeHour, timeMinute, second, timeFormat).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}

// node_modules/d3-scale/src/utcTime.js
function utcTime() {
  return initRange.apply(calendar(utcTicks, utcTickInterval, utcYear, utcMonth, utcSunday, utcDay, utcHour, utcMinute, second, utcFormat).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}

// node_modules/d3-scale/src/sequential.js
function copy2(source, target) {
  return target.domain(source.domain()).interpolator(source.interpolator()).clamp(source.clamp()).unknown(source.unknown());
}

// node_modules/d3-scale/src/diverging.js
function transformer3() {
  var x05 = 0, x12 = 0.5, x2 = 1, s2 = 1, t03, t13, t22, k10, k21, interpolator = identity3, transform2, clamp = false, unknown;
  function scale(x3) {
    return isNaN(x3 = +x3) ? unknown : (x3 = 0.5 + ((x3 = +transform2(x3)) - t13) * (s2 * x3 < s2 * t13 ? k10 : k21), interpolator(clamp ? Math.max(0, Math.min(1, x3)) : x3));
  }
  scale.domain = function(_) {
    return arguments.length ? ([x05, x12, x2] = _, t03 = transform2(x05 = +x05), t13 = transform2(x12 = +x12), t22 = transform2(x2 = +x2), k10 = t03 === t13 ? 0 : 0.5 / (t13 - t03), k21 = t13 === t22 ? 0 : 0.5 / (t22 - t13), s2 = t13 < t03 ? -1 : 1, scale) : [x05, x12, x2];
  };
  scale.clamp = function(_) {
    return arguments.length ? (clamp = !!_, scale) : clamp;
  };
  scale.interpolator = function(_) {
    return arguments.length ? (interpolator = _, scale) : interpolator;
  };
  function range3(interpolate) {
    return function(_) {
      var r0, r1, r2;
      return arguments.length ? ([r0, r1, r2] = _, interpolator = piecewise(interpolate, [r0, r1, r2]), scale) : [interpolator(0), interpolator(0.5), interpolator(1)];
    };
  }
  scale.range = range3(value_default);
  scale.rangeRound = range3(round_default);
  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };
  return function(t) {
    transform2 = t, t03 = t(x05), t13 = t(x12), t22 = t(x2), k10 = t03 === t13 ? 0 : 0.5 / (t13 - t03), k21 = t13 === t22 ? 0 : 0.5 / (t22 - t13), s2 = t13 < t03 ? -1 : 1;
    return scale;
  };
}
function diverging() {
  var scale = linearish(transformer3()(identity3));
  scale.copy = function() {
    return copy2(scale, diverging());
  };
  return initInterpolator.apply(scale, arguments);
}
function divergingLog() {
  var scale = loggish(transformer3()).domain([0.1, 1, 10]);
  scale.copy = function() {
    return copy2(scale, divergingLog()).base(scale.base());
  };
  return initInterpolator.apply(scale, arguments);
}
function divergingSymlog() {
  var scale = symlogish(transformer3());
  scale.copy = function() {
    return copy2(scale, divergingSymlog()).constant(scale.constant());
  };
  return initInterpolator.apply(scale, arguments);
}
function divergingPow() {
  var scale = powish(transformer3());
  scale.copy = function() {
    return copy2(scale, divergingPow()).exponent(scale.exponent());
  };
  return initInterpolator.apply(scale, arguments);
}

// node_modules/d3-scale-chromatic/src/colors.js
function colors_default(specifier) {
  var n = specifier.length / 6 | 0, colors = new Array(n), i = 0;
  while (i < n)
    colors[i] = "#" + specifier.slice(i * 6, ++i * 6);
  return colors;
}

// node_modules/d3-scale-chromatic/src/categorical/category10.js
var category10_default = colors_default("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf");

// node_modules/d3-scale-chromatic/src/categorical/Accent.js
var Accent_default = colors_default("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666");

// node_modules/d3-scale-chromatic/src/categorical/Dark2.js
var Dark2_default = colors_default("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666");

// node_modules/d3-scale-chromatic/src/categorical/observable10.js
var observable10_default = colors_default("4269d0efb118ff725c6cc5b03ca951ff8ab7a463f297bbf59c6b4e9498a0");

// node_modules/d3-scale-chromatic/src/categorical/Paired.js
var Paired_default = colors_default("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928");

// node_modules/d3-scale-chromatic/src/categorical/Pastel1.js
var Pastel1_default = colors_default("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2");

// node_modules/d3-scale-chromatic/src/categorical/Pastel2.js
var Pastel2_default = colors_default("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc");

// node_modules/d3-scale-chromatic/src/categorical/Set1.js
var Set1_default = colors_default("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999");

// node_modules/d3-scale-chromatic/src/categorical/Set2.js
var Set2_default = colors_default("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3");

// node_modules/d3-scale-chromatic/src/categorical/Set3.js
var Set3_default = colors_default("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f");

// node_modules/d3-scale-chromatic/src/categorical/Tableau10.js
var Tableau10_default = colors_default("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab");

// node_modules/d3-scale-chromatic/src/ramp.js
var ramp_default = (scheme28) => rgbBasis(scheme28[scheme28.length - 1]);

// node_modules/d3-scale-chromatic/src/diverging/BrBG.js
var scheme = new Array(3).concat(
  "d8b365f5f5f55ab4ac",
  "a6611adfc27d80cdc1018571",
  "a6611adfc27df5f5f580cdc1018571",
  "8c510ad8b365f6e8c3c7eae55ab4ac01665e",
  "8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e",
  "8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e",
  "8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e",
  "5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30",
  "5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30"
).map(colors_default);
var BrBG_default = ramp_default(scheme);

// node_modules/d3-scale-chromatic/src/diverging/PRGn.js
var scheme2 = new Array(3).concat(
  "af8dc3f7f7f77fbf7b",
  "7b3294c2a5cfa6dba0008837",
  "7b3294c2a5cff7f7f7a6dba0008837",
  "762a83af8dc3e7d4e8d9f0d37fbf7b1b7837",
  "762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837",
  "762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837",
  "762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837",
  "40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b",
  "40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b"
).map(colors_default);
var PRGn_default = ramp_default(scheme2);

// node_modules/d3-scale-chromatic/src/diverging/PiYG.js
var scheme3 = new Array(3).concat(
  "e9a3c9f7f7f7a1d76a",
  "d01c8bf1b6dab8e1864dac26",
  "d01c8bf1b6daf7f7f7b8e1864dac26",
  "c51b7de9a3c9fde0efe6f5d0a1d76a4d9221",
  "c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221",
  "c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221",
  "c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221",
  "8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419",
  "8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419"
).map(colors_default);
var PiYG_default = ramp_default(scheme3);

// node_modules/d3-scale-chromatic/src/diverging/PuOr.js
var scheme4 = new Array(3).concat(
  "998ec3f7f7f7f1a340",
  "5e3c99b2abd2fdb863e66101",
  "5e3c99b2abd2f7f7f7fdb863e66101",
  "542788998ec3d8daebfee0b6f1a340b35806",
  "542788998ec3d8daebf7f7f7fee0b6f1a340b35806",
  "5427888073acb2abd2d8daebfee0b6fdb863e08214b35806",
  "5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806",
  "2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08",
  "2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08"
).map(colors_default);
var PuOr_default = ramp_default(scheme4);

// node_modules/d3-scale-chromatic/src/diverging/RdBu.js
var scheme5 = new Array(3).concat(
  "ef8a62f7f7f767a9cf",
  "ca0020f4a58292c5de0571b0",
  "ca0020f4a582f7f7f792c5de0571b0",
  "b2182bef8a62fddbc7d1e5f067a9cf2166ac",
  "b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac",
  "b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac",
  "b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac",
  "67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061",
  "67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061"
).map(colors_default);
var RdBu_default = ramp_default(scheme5);

// node_modules/d3-scale-chromatic/src/diverging/RdGy.js
var scheme6 = new Array(3).concat(
  "ef8a62ffffff999999",
  "ca0020f4a582bababa404040",
  "ca0020f4a582ffffffbababa404040",
  "b2182bef8a62fddbc7e0e0e09999994d4d4d",
  "b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d",
  "b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d",
  "b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d",
  "67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a",
  "67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a"
).map(colors_default);
var RdGy_default = ramp_default(scheme6);

// node_modules/d3-scale-chromatic/src/diverging/RdYlBu.js
var scheme7 = new Array(3).concat(
  "fc8d59ffffbf91bfdb",
  "d7191cfdae61abd9e92c7bb6",
  "d7191cfdae61ffffbfabd9e92c7bb6",
  "d73027fc8d59fee090e0f3f891bfdb4575b4",
  "d73027fc8d59fee090ffffbfe0f3f891bfdb4575b4",
  "d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4",
  "d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4",
  "a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695",
  "a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695"
).map(colors_default);
var RdYlBu_default = ramp_default(scheme7);

// node_modules/d3-scale-chromatic/src/diverging/RdYlGn.js
var scheme8 = new Array(3).concat(
  "fc8d59ffffbf91cf60",
  "d7191cfdae61a6d96a1a9641",
  "d7191cfdae61ffffbfa6d96a1a9641",
  "d73027fc8d59fee08bd9ef8b91cf601a9850",
  "d73027fc8d59fee08bffffbfd9ef8b91cf601a9850",
  "d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850",
  "d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850",
  "a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837",
  "a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837"
).map(colors_default);
var RdYlGn_default = ramp_default(scheme8);

// node_modules/d3-scale-chromatic/src/diverging/Spectral.js
var scheme9 = new Array(3).concat(
  "fc8d59ffffbf99d594",
  "d7191cfdae61abdda42b83ba",
  "d7191cfdae61ffffbfabdda42b83ba",
  "d53e4ffc8d59fee08be6f59899d5943288bd",
  "d53e4ffc8d59fee08bffffbfe6f59899d5943288bd",
  "d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd",
  "d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd",
  "9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2",
  "9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2"
).map(colors_default);
var Spectral_default = ramp_default(scheme9);

// node_modules/d3-scale-chromatic/src/sequential-multi/BuGn.js
var scheme10 = new Array(3).concat(
  "e5f5f999d8c92ca25f",
  "edf8fbb2e2e266c2a4238b45",
  "edf8fbb2e2e266c2a42ca25f006d2c",
  "edf8fbccece699d8c966c2a42ca25f006d2c",
  "edf8fbccece699d8c966c2a441ae76238b45005824",
  "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824",
  "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b"
).map(colors_default);
var BuGn_default = ramp_default(scheme10);

// node_modules/d3-scale-chromatic/src/sequential-multi/BuPu.js
var scheme11 = new Array(3).concat(
  "e0ecf49ebcda8856a7",
  "edf8fbb3cde38c96c688419d",
  "edf8fbb3cde38c96c68856a7810f7c",
  "edf8fbbfd3e69ebcda8c96c68856a7810f7c",
  "edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b",
  "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b",
  "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b"
).map(colors_default);
var BuPu_default = ramp_default(scheme11);

// node_modules/d3-scale-chromatic/src/sequential-multi/GnBu.js
var scheme12 = new Array(3).concat(
  "e0f3dba8ddb543a2ca",
  "f0f9e8bae4bc7bccc42b8cbe",
  "f0f9e8bae4bc7bccc443a2ca0868ac",
  "f0f9e8ccebc5a8ddb57bccc443a2ca0868ac",
  "f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e",
  "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e",
  "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081"
).map(colors_default);
var GnBu_default = ramp_default(scheme12);

// node_modules/d3-scale-chromatic/src/sequential-multi/OrRd.js
var scheme13 = new Array(3).concat(
  "fee8c8fdbb84e34a33",
  "fef0d9fdcc8afc8d59d7301f",
  "fef0d9fdcc8afc8d59e34a33b30000",
  "fef0d9fdd49efdbb84fc8d59e34a33b30000",
  "fef0d9fdd49efdbb84fc8d59ef6548d7301f990000",
  "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000",
  "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000"
).map(colors_default);
var OrRd_default = ramp_default(scheme13);

// node_modules/d3-scale-chromatic/src/sequential-multi/PuBuGn.js
var scheme14 = new Array(3).concat(
  "ece2f0a6bddb1c9099",
  "f6eff7bdc9e167a9cf02818a",
  "f6eff7bdc9e167a9cf1c9099016c59",
  "f6eff7d0d1e6a6bddb67a9cf1c9099016c59",
  "f6eff7d0d1e6a6bddb67a9cf3690c002818a016450",
  "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450",
  "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636"
).map(colors_default);
var PuBuGn_default = ramp_default(scheme14);

// node_modules/d3-scale-chromatic/src/sequential-multi/PuBu.js
var scheme15 = new Array(3).concat(
  "ece7f2a6bddb2b8cbe",
  "f1eef6bdc9e174a9cf0570b0",
  "f1eef6bdc9e174a9cf2b8cbe045a8d",
  "f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d",
  "f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b",
  "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b",
  "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858"
).map(colors_default);
var PuBu_default = ramp_default(scheme15);

// node_modules/d3-scale-chromatic/src/sequential-multi/PuRd.js
var scheme16 = new Array(3).concat(
  "e7e1efc994c7dd1c77",
  "f1eef6d7b5d8df65b0ce1256",
  "f1eef6d7b5d8df65b0dd1c77980043",
  "f1eef6d4b9dac994c7df65b0dd1c77980043",
  "f1eef6d4b9dac994c7df65b0e7298ace125691003f",
  "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f",
  "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f"
).map(colors_default);
var PuRd_default = ramp_default(scheme16);

// node_modules/d3-scale-chromatic/src/sequential-multi/RdPu.js
var scheme17 = new Array(3).concat(
  "fde0ddfa9fb5c51b8a",
  "feebe2fbb4b9f768a1ae017e",
  "feebe2fbb4b9f768a1c51b8a7a0177",
  "feebe2fcc5c0fa9fb5f768a1c51b8a7a0177",
  "feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177",
  "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177",
  "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a"
).map(colors_default);
var RdPu_default = ramp_default(scheme17);

// node_modules/d3-scale-chromatic/src/sequential-multi/YlGnBu.js
var scheme18 = new Array(3).concat(
  "edf8b17fcdbb2c7fb8",
  "ffffcca1dab441b6c4225ea8",
  "ffffcca1dab441b6c42c7fb8253494",
  "ffffccc7e9b47fcdbb41b6c42c7fb8253494",
  "ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84",
  "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84",
  "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58"
).map(colors_default);
var YlGnBu_default = ramp_default(scheme18);

// node_modules/d3-scale-chromatic/src/sequential-multi/YlGn.js
var scheme19 = new Array(3).concat(
  "f7fcb9addd8e31a354",
  "ffffccc2e69978c679238443",
  "ffffccc2e69978c67931a354006837",
  "ffffccd9f0a3addd8e78c67931a354006837",
  "ffffccd9f0a3addd8e78c67941ab5d238443005a32",
  "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32",
  "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529"
).map(colors_default);
var YlGn_default = ramp_default(scheme19);

// node_modules/d3-scale-chromatic/src/sequential-multi/YlOrBr.js
var scheme20 = new Array(3).concat(
  "fff7bcfec44fd95f0e",
  "ffffd4fed98efe9929cc4c02",
  "ffffd4fed98efe9929d95f0e993404",
  "ffffd4fee391fec44ffe9929d95f0e993404",
  "ffffd4fee391fec44ffe9929ec7014cc4c028c2d04",
  "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04",
  "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506"
).map(colors_default);
var YlOrBr_default = ramp_default(scheme20);

// node_modules/d3-scale-chromatic/src/sequential-multi/YlOrRd.js
var scheme21 = new Array(3).concat(
  "ffeda0feb24cf03b20",
  "ffffb2fecc5cfd8d3ce31a1c",
  "ffffb2fecc5cfd8d3cf03b20bd0026",
  "ffffb2fed976feb24cfd8d3cf03b20bd0026",
  "ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026",
  "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026",
  "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026"
).map(colors_default);
var YlOrRd_default = ramp_default(scheme21);

// node_modules/d3-scale-chromatic/src/sequential-single/Blues.js
var scheme22 = new Array(3).concat(
  "deebf79ecae13182bd",
  "eff3ffbdd7e76baed62171b5",
  "eff3ffbdd7e76baed63182bd08519c",
  "eff3ffc6dbef9ecae16baed63182bd08519c",
  "eff3ffc6dbef9ecae16baed64292c62171b5084594",
  "f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594",
  "f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b"
).map(colors_default);
var Blues_default = ramp_default(scheme22);

// node_modules/d3-scale-chromatic/src/sequential-single/Greens.js
var scheme23 = new Array(3).concat(
  "e5f5e0a1d99b31a354",
  "edf8e9bae4b374c476238b45",
  "edf8e9bae4b374c47631a354006d2c",
  "edf8e9c7e9c0a1d99b74c47631a354006d2c",
  "edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32",
  "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32",
  "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b"
).map(colors_default);
var Greens_default = ramp_default(scheme23);

// node_modules/d3-scale-chromatic/src/sequential-single/Greys.js
var scheme24 = new Array(3).concat(
  "f0f0f0bdbdbd636363",
  "f7f7f7cccccc969696525252",
  "f7f7f7cccccc969696636363252525",
  "f7f7f7d9d9d9bdbdbd969696636363252525",
  "f7f7f7d9d9d9bdbdbd969696737373525252252525",
  "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525",
  "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000"
).map(colors_default);
var Greys_default = ramp_default(scheme24);

// node_modules/d3-scale-chromatic/src/sequential-single/Purples.js
var scheme25 = new Array(3).concat(
  "efedf5bcbddc756bb1",
  "f2f0f7cbc9e29e9ac86a51a3",
  "f2f0f7cbc9e29e9ac8756bb154278f",
  "f2f0f7dadaebbcbddc9e9ac8756bb154278f",
  "f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486",
  "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486",
  "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d"
).map(colors_default);
var Purples_default = ramp_default(scheme25);

// node_modules/d3-scale-chromatic/src/sequential-single/Reds.js
var scheme26 = new Array(3).concat(
  "fee0d2fc9272de2d26",
  "fee5d9fcae91fb6a4acb181d",
  "fee5d9fcae91fb6a4ade2d26a50f15",
  "fee5d9fcbba1fc9272fb6a4ade2d26a50f15",
  "fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d",
  "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d",
  "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d"
).map(colors_default);
var Reds_default = ramp_default(scheme26);

// node_modules/d3-scale-chromatic/src/sequential-single/Oranges.js
var scheme27 = new Array(3).concat(
  "fee6cefdae6be6550d",
  "feeddefdbe85fd8d3cd94701",
  "feeddefdbe85fd8d3ce6550da63603",
  "feeddefdd0a2fdae6bfd8d3ce6550da63603",
  "feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04",
  "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04",
  "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704"
).map(colors_default);
var Oranges_default = ramp_default(scheme27);

// node_modules/d3-scale-chromatic/src/sequential-multi/cividis.js
function cividis_default(t) {
  t = Math.max(0, Math.min(1, t));
  return "rgb(" + Math.max(0, Math.min(255, Math.round(-4.54 - t * (35.34 - t * (2381.73 - t * (6402.7 - t * (7024.72 - t * 2710.57))))))) + ", " + Math.max(0, Math.min(255, Math.round(32.49 + t * (170.73 + t * (52.82 - t * (131.46 - t * (176.58 - t * 67.37))))))) + ", " + Math.max(0, Math.min(255, Math.round(81.24 + t * (442.36 - t * (2482.43 - t * (6167.24 - t * (6614.94 - t * 2475.67))))))) + ")";
}

// node_modules/d3-scale-chromatic/src/sequential-multi/cubehelix.js
var cubehelix_default2 = cubehelixLong(cubehelix(300, 0.5, 0), cubehelix(-240, 0.5, 1));

// node_modules/d3-scale-chromatic/src/sequential-multi/rainbow.js
var warm = cubehelixLong(cubehelix(-100, 0.75, 0.35), cubehelix(80, 1.5, 0.8));
var cool = cubehelixLong(cubehelix(260, 0.75, 0.35), cubehelix(80, 1.5, 0.8));
var c = cubehelix();
function rainbow_default(t) {
  if (t < 0 || t > 1)
    t -= Math.floor(t);
  var ts = Math.abs(t - 0.5);
  c.h = 360 * t - 100;
  c.s = 1.5 - 1.5 * ts;
  c.l = 0.8 - 0.9 * ts;
  return c + "";
}

// node_modules/d3-scale-chromatic/src/sequential-multi/sinebow.js
var c2 = rgb();
var pi_1_3 = Math.PI / 3;
var pi_2_3 = Math.PI * 2 / 3;
function sinebow_default(t) {
  var x2;
  t = (0.5 - t) * Math.PI;
  c2.r = 255 * (x2 = Math.sin(t)) * x2;
  c2.g = 255 * (x2 = Math.sin(t + pi_1_3)) * x2;
  c2.b = 255 * (x2 = Math.sin(t + pi_2_3)) * x2;
  return c2 + "";
}

// node_modules/d3-scale-chromatic/src/sequential-multi/turbo.js
function turbo_default(t) {
  t = Math.max(0, Math.min(1, t));
  return "rgb(" + Math.max(0, Math.min(255, Math.round(34.61 + t * (1172.33 - t * (10793.56 - t * (33300.12 - t * (38394.49 - t * 14825.05))))))) + ", " + Math.max(0, Math.min(255, Math.round(23.31 + t * (557.33 + t * (1225.33 - t * (3574.96 - t * (1073.77 + t * 707.56))))))) + ", " + Math.max(0, Math.min(255, Math.round(27.2 + t * (3211.1 - t * (15327.97 - t * (27814 - t * (22569.18 - t * 6838.66))))))) + ")";
}

// node_modules/d3-scale-chromatic/src/sequential-multi/viridis.js
function ramp(range3) {
  var n = range3.length;
  return function(t) {
    return range3[Math.max(0, Math.min(n - 1, Math.floor(t * n)))];
  };
}
var viridis_default = ramp(colors_default("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"));
var magma = ramp(colors_default("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf"));
var inferno = ramp(colors_default("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4"));
var plasma = ramp(colors_default("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));

// node_modules/d3-shape/src/constant.js
function constant_default4(x2) {
  return function constant2() {
    return x2;
  };
}

// node_modules/d3-shape/src/math.js
var cos2 = Math.cos;
var min3 = Math.min;
var sin2 = Math.sin;
var sqrt3 = Math.sqrt;
var epsilon4 = 1e-12;
var pi3 = Math.PI;
var halfPi2 = pi3 / 2;
var tau3 = 2 * pi3;

// node_modules/d3-shape/src/path.js
function withPath(shape) {
  let digits = 3;
  shape.digits = function(_) {
    if (!arguments.length)
      return digits;
    if (_ == null) {
      digits = null;
    } else {
      const d = Math.floor(_);
      if (!(d >= 0))
        throw new RangeError(`invalid digits: ${_}`);
      digits = d;
    }
    return shape;
  };
  return () => new Path(digits);
}

// node_modules/d3-shape/src/array.js
var slice = Array.prototype.slice;
function array_default(x2) {
  return typeof x2 === "object" && "length" in x2 ? x2 : Array.from(x2);
}

// node_modules/d3-shape/src/curve/linear.js
function Linear(context) {
  this._context = context;
}
Linear.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || this._line !== 0 && this._point === 1)
      this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x2, y2) {
    x2 = +x2, y2 = +y2;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x2, y2) : this._context.moveTo(x2, y2);
        break;
      case 1:
        this._point = 2;
      default:
        this._context.lineTo(x2, y2);
        break;
    }
  }
};
function linear_default(context) {
  return new Linear(context);
}

// node_modules/d3-shape/src/point.js
function x(p) {
  return p[0];
}
function y(p) {
  return p[1];
}

// node_modules/d3-shape/src/line.js
function line_default2(x2, y2) {
  var defined2 = constant_default4(true), context = null, curve = linear_default, output = null, path2 = withPath(line2);
  x2 = typeof x2 === "function" ? x2 : x2 === void 0 ? x : constant_default4(x2);
  y2 = typeof y2 === "function" ? y2 : y2 === void 0 ? y : constant_default4(y2);
  function line2(data) {
    var i, n = (data = array_default(data)).length, d, defined0 = false, buffer;
    if (context == null)
      output = curve(buffer = path2());
    for (i = 0; i <= n; ++i) {
      if (!(i < n && defined2(d = data[i], i, data)) === defined0) {
        if (defined0 = !defined0)
          output.lineStart();
        else
          output.lineEnd();
      }
      if (defined0)
        output.point(+x2(d, i, data), +y2(d, i, data));
    }
    if (buffer)
      return output = null, buffer + "" || null;
  }
  line2.x = function(_) {
    return arguments.length ? (x2 = typeof _ === "function" ? _ : constant_default4(+_), line2) : x2;
  };
  line2.y = function(_) {
    return arguments.length ? (y2 = typeof _ === "function" ? _ : constant_default4(+_), line2) : y2;
  };
  line2.defined = function(_) {
    return arguments.length ? (defined2 = typeof _ === "function" ? _ : constant_default4(!!_), line2) : defined2;
  };
  line2.curve = function(_) {
    return arguments.length ? (curve = _, context != null && (output = curve(context)), line2) : curve;
  };
  line2.context = function(_) {
    return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), line2) : context;
  };
  return line2;
}

// node_modules/d3-shape/src/area.js
function area_default2(x05, y05, y12) {
  var x12 = null, defined2 = constant_default4(true), context = null, curve = linear_default, output = null, path2 = withPath(area2);
  x05 = typeof x05 === "function" ? x05 : x05 === void 0 ? x : constant_default4(+x05);
  y05 = typeof y05 === "function" ? y05 : y05 === void 0 ? constant_default4(0) : constant_default4(+y05);
  y12 = typeof y12 === "function" ? y12 : y12 === void 0 ? y : constant_default4(+y12);
  function area2(data) {
    var i, j, k2, n = (data = array_default(data)).length, d, defined0 = false, buffer, x0z = new Array(n), y0z = new Array(n);
    if (context == null)
      output = curve(buffer = path2());
    for (i = 0; i <= n; ++i) {
      if (!(i < n && defined2(d = data[i], i, data)) === defined0) {
        if (defined0 = !defined0) {
          j = i;
          output.areaStart();
          output.lineStart();
        } else {
          output.lineEnd();
          output.lineStart();
          for (k2 = i - 1; k2 >= j; --k2) {
            output.point(x0z[k2], y0z[k2]);
          }
          output.lineEnd();
          output.areaEnd();
        }
      }
      if (defined0) {
        x0z[i] = +x05(d, i, data), y0z[i] = +y05(d, i, data);
        output.point(x12 ? +x12(d, i, data) : x0z[i], y12 ? +y12(d, i, data) : y0z[i]);
      }
    }
    if (buffer)
      return output = null, buffer + "" || null;
  }
  function arealine() {
    return line_default2().defined(defined2).curve(curve).context(context);
  }
  area2.x = function(_) {
    return arguments.length ? (x05 = typeof _ === "function" ? _ : constant_default4(+_), x12 = null, area2) : x05;
  };
  area2.x0 = function(_) {
    return arguments.length ? (x05 = typeof _ === "function" ? _ : constant_default4(+_), area2) : x05;
  };
  area2.x1 = function(_) {
    return arguments.length ? (x12 = _ == null ? null : typeof _ === "function" ? _ : constant_default4(+_), area2) : x12;
  };
  area2.y = function(_) {
    return arguments.length ? (y05 = typeof _ === "function" ? _ : constant_default4(+_), y12 = null, area2) : y05;
  };
  area2.y0 = function(_) {
    return arguments.length ? (y05 = typeof _ === "function" ? _ : constant_default4(+_), area2) : y05;
  };
  area2.y1 = function(_) {
    return arguments.length ? (y12 = _ == null ? null : typeof _ === "function" ? _ : constant_default4(+_), area2) : y12;
  };
  area2.lineX0 = area2.lineY0 = function() {
    return arealine().x(x05).y(y05);
  };
  area2.lineY1 = function() {
    return arealine().x(x05).y(y12);
  };
  area2.lineX1 = function() {
    return arealine().x(x12).y(y05);
  };
  area2.defined = function(_) {
    return arguments.length ? (defined2 = typeof _ === "function" ? _ : constant_default4(!!_), area2) : defined2;
  };
  area2.curve = function(_) {
    return arguments.length ? (curve = _, context != null && (output = curve(context)), area2) : curve;
  };
  area2.context = function(_) {
    return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), area2) : context;
  };
  return area2;
}

// node_modules/d3-shape/src/curve/bump.js
var Bump = class {
  constructor(context, x2) {
    this._context = context;
    this._x = x2;
  }
  areaStart() {
    this._line = 0;
  }
  areaEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    if (this._line || this._line !== 0 && this._point === 1)
      this._context.closePath();
    this._line = 1 - this._line;
  }
  point(x2, y2) {
    x2 = +x2, y2 = +y2;
    switch (this._point) {
      case 0: {
        this._point = 1;
        if (this._line)
          this._context.lineTo(x2, y2);
        else
          this._context.moveTo(x2, y2);
        break;
      }
      case 1:
        this._point = 2;
      default: {
        if (this._x)
          this._context.bezierCurveTo(this._x0 = (this._x0 + x2) / 2, this._y0, this._x0, y2, x2, y2);
        else
          this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + y2) / 2, x2, this._y0, x2, y2);
        break;
      }
    }
    this._x0 = x2, this._y0 = y2;
  }
};
function bumpX(context) {
  return new Bump(context, true);
}
function bumpY(context) {
  return new Bump(context, false);
}

// node_modules/d3-shape/src/symbol/asterisk.js
var sqrt32 = sqrt3(3);
var asterisk_default = {
  draw(context, size) {
    const r = sqrt3(size + min3(size / 28, 0.75)) * 0.59436;
    const t = r / 2;
    const u = t * sqrt32;
    context.moveTo(0, r);
    context.lineTo(0, -r);
    context.moveTo(-u, -t);
    context.lineTo(u, t);
    context.moveTo(-u, t);
    context.lineTo(u, -t);
  }
};

// node_modules/d3-shape/src/symbol/circle.js
var circle_default2 = {
  draw(context, size) {
    const r = sqrt3(size / pi3);
    context.moveTo(r, 0);
    context.arc(0, 0, r, 0, tau3);
  }
};

// node_modules/d3-shape/src/symbol/cross.js
var cross_default = {
  draw(context, size) {
    const r = sqrt3(size / 5) / 2;
    context.moveTo(-3 * r, -r);
    context.lineTo(-r, -r);
    context.lineTo(-r, -3 * r);
    context.lineTo(r, -3 * r);
    context.lineTo(r, -r);
    context.lineTo(3 * r, -r);
    context.lineTo(3 * r, r);
    context.lineTo(r, r);
    context.lineTo(r, 3 * r);
    context.lineTo(-r, 3 * r);
    context.lineTo(-r, r);
    context.lineTo(-3 * r, r);
    context.closePath();
  }
};

// node_modules/d3-shape/src/symbol/diamond.js
var tan30 = sqrt3(1 / 3);
var tan30_2 = tan30 * 2;
var diamond_default = {
  draw(context, size) {
    const y2 = sqrt3(size / tan30_2);
    const x2 = y2 * tan30;
    context.moveTo(0, -y2);
    context.lineTo(x2, 0);
    context.lineTo(0, y2);
    context.lineTo(-x2, 0);
    context.closePath();
  }
};

// node_modules/d3-shape/src/symbol/diamond2.js
var diamond2_default = {
  draw(context, size) {
    const r = sqrt3(size) * 0.62625;
    context.moveTo(0, -r);
    context.lineTo(r, 0);
    context.lineTo(0, r);
    context.lineTo(-r, 0);
    context.closePath();
  }
};

// node_modules/d3-shape/src/symbol/plus.js
var plus_default = {
  draw(context, size) {
    const r = sqrt3(size - min3(size / 7, 2)) * 0.87559;
    context.moveTo(-r, 0);
    context.lineTo(r, 0);
    context.moveTo(0, r);
    context.lineTo(0, -r);
  }
};

// node_modules/d3-shape/src/symbol/square.js
var square_default = {
  draw(context, size) {
    const w = sqrt3(size);
    const x2 = -w / 2;
    context.rect(x2, x2, w, w);
  }
};

// node_modules/d3-shape/src/symbol/square2.js
var square2_default = {
  draw(context, size) {
    const r = sqrt3(size) * 0.4431;
    context.moveTo(r, r);
    context.lineTo(r, -r);
    context.lineTo(-r, -r);
    context.lineTo(-r, r);
    context.closePath();
  }
};

// node_modules/d3-shape/src/symbol/star.js
var ka = 0.8908130915292852;
var kr = sin2(pi3 / 10) / sin2(7 * pi3 / 10);
var kx = sin2(tau3 / 10) * kr;
var ky = -cos2(tau3 / 10) * kr;
var star_default = {
  draw(context, size) {
    const r = sqrt3(size * ka);
    const x2 = kx * r;
    const y2 = ky * r;
    context.moveTo(0, -r);
    context.lineTo(x2, y2);
    for (let i = 1; i < 5; ++i) {
      const a2 = tau3 * i / 5;
      const c4 = cos2(a2);
      const s2 = sin2(a2);
      context.lineTo(s2 * r, -c4 * r);
      context.lineTo(c4 * x2 - s2 * y2, s2 * x2 + c4 * y2);
    }
    context.closePath();
  }
};

// node_modules/d3-shape/src/symbol/triangle.js
var sqrt33 = sqrt3(3);
var triangle_default = {
  draw(context, size) {
    const y2 = -sqrt3(size / (sqrt33 * 3));
    context.moveTo(0, y2 * 2);
    context.lineTo(-sqrt33 * y2, -y2);
    context.lineTo(sqrt33 * y2, -y2);
    context.closePath();
  }
};

// node_modules/d3-shape/src/symbol/triangle2.js
var sqrt34 = sqrt3(3);
var triangle2_default = {
  draw(context, size) {
    const s2 = sqrt3(size) * 0.6824;
    const t = s2 / 2;
    const u = s2 * sqrt34 / 2;
    context.moveTo(0, -s2);
    context.lineTo(u, t);
    context.lineTo(-u, t);
    context.closePath();
  }
};

// node_modules/d3-shape/src/symbol/wye.js
var c3 = -0.5;
var s = sqrt3(3) / 2;
var k = 1 / sqrt3(12);
var a = (k / 2 + 1) * 3;
var wye_default = {
  draw(context, size) {
    const r = sqrt3(size / a);
    const x05 = r / 2, y05 = r * k;
    const x12 = x05, y12 = r * k + r;
    const x2 = -x12, y2 = y12;
    context.moveTo(x05, y05);
    context.lineTo(x12, y12);
    context.lineTo(x2, y2);
    context.lineTo(c3 * x05 - s * y05, s * x05 + c3 * y05);
    context.lineTo(c3 * x12 - s * y12, s * x12 + c3 * y12);
    context.lineTo(c3 * x2 - s * y2, s * x2 + c3 * y2);
    context.lineTo(c3 * x05 + s * y05, c3 * y05 - s * x05);
    context.lineTo(c3 * x12 + s * y12, c3 * y12 - s * x12);
    context.lineTo(c3 * x2 + s * y2, c3 * y2 - s * x2);
    context.closePath();
  }
};

// node_modules/d3-shape/src/symbol/times.js
var times_default = {
  draw(context, size) {
    const r = sqrt3(size - min3(size / 6, 1.7)) * 0.6189;
    context.moveTo(-r, -r);
    context.lineTo(r, r);
    context.moveTo(-r, r);
    context.lineTo(r, -r);
  }
};

// node_modules/d3-shape/src/symbol.js
var symbolsFill = [
  circle_default2,
  cross_default,
  diamond_default,
  square_default,
  star_default,
  triangle_default,
  wye_default
];
var symbolsStroke = [
  circle_default2,
  plus_default,
  times_default,
  triangle2_default,
  asterisk_default,
  square2_default,
  diamond2_default
];

// node_modules/d3-shape/src/noop.js
function noop_default() {
}

// node_modules/d3-shape/src/curve/basis.js
function point2(that, x2, y2) {
  that._context.bezierCurveTo(
    (2 * that._x0 + that._x1) / 3,
    (2 * that._y0 + that._y1) / 3,
    (that._x0 + 2 * that._x1) / 3,
    (that._y0 + 2 * that._y1) / 3,
    (that._x0 + 4 * that._x1 + x2) / 6,
    (that._y0 + 4 * that._y1 + y2) / 6
  );
}
function Basis(context) {
  this._context = context;
}
Basis.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 3:
        point2(this, this._x1, this._y1);
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
    }
    if (this._line || this._line !== 0 && this._point === 1)
      this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x2, y2) {
    x2 = +x2, y2 = +y2;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x2, y2) : this._context.moveTo(x2, y2);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
      default:
        point2(this, x2, y2);
        break;
    }
    this._x0 = this._x1, this._x1 = x2;
    this._y0 = this._y1, this._y1 = y2;
  }
};
function basis_default2(context) {
  return new Basis(context);
}

// node_modules/d3-shape/src/curve/basisClosed.js
function BasisClosed(context) {
  this._context = context;
}
BasisClosed.prototype = {
  areaStart: noop_default,
  areaEnd: noop_default,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x2, this._y2);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3);
        this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x2, this._y2);
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        break;
      }
    }
  },
  point: function(x2, y2) {
    x2 = +x2, y2 = +y2;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._x2 = x2, this._y2 = y2;
        break;
      case 1:
        this._point = 2;
        this._x3 = x2, this._y3 = y2;
        break;
      case 2:
        this._point = 3;
        this._x4 = x2, this._y4 = y2;
        this._context.moveTo((this._x0 + 4 * this._x1 + x2) / 6, (this._y0 + 4 * this._y1 + y2) / 6);
        break;
      default:
        point2(this, x2, y2);
        break;
    }
    this._x0 = this._x1, this._x1 = x2;
    this._y0 = this._y1, this._y1 = y2;
  }
};
function basisClosed_default2(context) {
  return new BasisClosed(context);
}

// node_modules/d3-shape/src/curve/basisOpen.js
function BasisOpen(context) {
  this._context = context;
}
BasisOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || this._line !== 0 && this._point === 3)
      this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x2, y2) {
    x2 = +x2, y2 = +y2;
    switch (this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        var x05 = (this._x0 + 4 * this._x1 + x2) / 6, y05 = (this._y0 + 4 * this._y1 + y2) / 6;
        this._line ? this._context.lineTo(x05, y05) : this._context.moveTo(x05, y05);
        break;
      case 3:
        this._point = 4;
      default:
        point2(this, x2, y2);
        break;
    }
    this._x0 = this._x1, this._x1 = x2;
    this._y0 = this._y1, this._y1 = y2;
  }
};
function basisOpen_default(context) {
  return new BasisOpen(context);
}

// node_modules/d3-shape/src/curve/bundle.js
function Bundle(context, beta) {
  this._basis = new Basis(context);
  this._beta = beta;
}
Bundle.prototype = {
  lineStart: function() {
    this._x = [];
    this._y = [];
    this._basis.lineStart();
  },
  lineEnd: function() {
    var x2 = this._x, y2 = this._y, j = x2.length - 1;
    if (j > 0) {
      var x05 = x2[0], y05 = y2[0], dx = x2[j] - x05, dy = y2[j] - y05, i = -1, t;
      while (++i <= j) {
        t = i / j;
        this._basis.point(
          this._beta * x2[i] + (1 - this._beta) * (x05 + t * dx),
          this._beta * y2[i] + (1 - this._beta) * (y05 + t * dy)
        );
      }
    }
    this._x = this._y = null;
    this._basis.lineEnd();
  },
  point: function(x2, y2) {
    this._x.push(+x2);
    this._y.push(+y2);
  }
};
var bundle_default = function custom(beta) {
  function bundle(context) {
    return beta === 1 ? new Basis(context) : new Bundle(context, beta);
  }
  bundle.beta = function(beta2) {
    return custom(+beta2);
  };
  return bundle;
}(0.85);

// node_modules/d3-shape/src/curve/cardinal.js
function point3(that, x2, y2) {
  that._context.bezierCurveTo(
    that._x1 + that._k * (that._x2 - that._x0),
    that._y1 + that._k * (that._y2 - that._y0),
    that._x2 + that._k * (that._x1 - x2),
    that._y2 + that._k * (that._y1 - y2),
    that._x2,
    that._y2
  );
}
function Cardinal(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}
Cardinal.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x2, this._y2);
        break;
      case 3:
        point3(this, this._x1, this._y1);
        break;
    }
    if (this._line || this._line !== 0 && this._point === 1)
      this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x2, y2) {
    x2 = +x2, y2 = +y2;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x2, y2) : this._context.moveTo(x2, y2);
        break;
      case 1:
        this._point = 2;
        this._x1 = x2, this._y1 = y2;
        break;
      case 2:
        this._point = 3;
      default:
        point3(this, x2, y2);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x2;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y2;
  }
};
var cardinal_default = function custom2(tension) {
  function cardinal(context) {
    return new Cardinal(context, tension);
  }
  cardinal.tension = function(tension2) {
    return custom2(+tension2);
  };
  return cardinal;
}(0);

// node_modules/d3-shape/src/curve/cardinalClosed.js
function CardinalClosed(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}
CardinalClosed.prototype = {
  areaStart: noop_default,
  areaEnd: noop_default,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(x2, y2) {
    x2 = +x2, y2 = +y2;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._x3 = x2, this._y3 = y2;
        break;
      case 1:
        this._point = 2;
        this._context.moveTo(this._x4 = x2, this._y4 = y2);
        break;
      case 2:
        this._point = 3;
        this._x5 = x2, this._y5 = y2;
        break;
      default:
        point3(this, x2, y2);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x2;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y2;
  }
};
var cardinalClosed_default = function custom3(tension) {
  function cardinal(context) {
    return new CardinalClosed(context, tension);
  }
  cardinal.tension = function(tension2) {
    return custom3(+tension2);
  };
  return cardinal;
}(0);

// node_modules/d3-shape/src/curve/cardinalOpen.js
function CardinalOpen(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}
CardinalOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || this._line !== 0 && this._point === 3)
      this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x2, y2) {
    x2 = +x2, y2 = +y2;
    switch (this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
        break;
      case 3:
        this._point = 4;
      default:
        point3(this, x2, y2);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x2;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y2;
  }
};
var cardinalOpen_default = function custom4(tension) {
  function cardinal(context) {
    return new CardinalOpen(context, tension);
  }
  cardinal.tension = function(tension2) {
    return custom4(+tension2);
  };
  return cardinal;
}(0);

// node_modules/d3-shape/src/curve/catmullRom.js
function point4(that, x2, y2) {
  var x12 = that._x1, y12 = that._y1, x22 = that._x2, y22 = that._y2;
  if (that._l01_a > epsilon4) {
    var a2 = 2 * that._l01_2a + 3 * that._l01_a * that._l12_a + that._l12_2a, n = 3 * that._l01_a * (that._l01_a + that._l12_a);
    x12 = (x12 * a2 - that._x0 * that._l12_2a + that._x2 * that._l01_2a) / n;
    y12 = (y12 * a2 - that._y0 * that._l12_2a + that._y2 * that._l01_2a) / n;
  }
  if (that._l23_a > epsilon4) {
    var b = 2 * that._l23_2a + 3 * that._l23_a * that._l12_a + that._l12_2a, m = 3 * that._l23_a * (that._l23_a + that._l12_a);
    x22 = (x22 * b + that._x1 * that._l23_2a - x2 * that._l12_2a) / m;
    y22 = (y22 * b + that._y1 * that._l23_2a - y2 * that._l12_2a) / m;
  }
  that._context.bezierCurveTo(x12, y12, x22, y22, that._x2, that._y2);
}
function CatmullRom(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}
CatmullRom.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
    this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x2, this._y2);
        break;
      case 3:
        this.point(this._x2, this._y2);
        break;
    }
    if (this._line || this._line !== 0 && this._point === 1)
      this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x2, y2) {
    x2 = +x2, y2 = +y2;
    if (this._point) {
      var x23 = this._x2 - x2, y23 = this._y2 - y2;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x2, y2) : this._context.moveTo(x2, y2);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
      default:
        point4(this, x2, y2);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x2;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y2;
  }
};
var catmullRom_default = function custom5(alpha) {
  function catmullRom(context) {
    return alpha ? new CatmullRom(context, alpha) : new Cardinal(context, 0);
  }
  catmullRom.alpha = function(alpha2) {
    return custom5(+alpha2);
  };
  return catmullRom;
}(0.5);

// node_modules/d3-shape/src/curve/catmullRomClosed.js
function CatmullRomClosed(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}
CatmullRomClosed.prototype = {
  areaStart: noop_default,
  areaEnd: noop_default,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
    this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(x2, y2) {
    x2 = +x2, y2 = +y2;
    if (this._point) {
      var x23 = this._x2 - x2, y23 = this._y2 - y2;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1;
        this._x3 = x2, this._y3 = y2;
        break;
      case 1:
        this._point = 2;
        this._context.moveTo(this._x4 = x2, this._y4 = y2);
        break;
      case 2:
        this._point = 3;
        this._x5 = x2, this._y5 = y2;
        break;
      default:
        point4(this, x2, y2);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x2;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y2;
  }
};
var catmullRomClosed_default = function custom6(alpha) {
  function catmullRom(context) {
    return alpha ? new CatmullRomClosed(context, alpha) : new CardinalClosed(context, 0);
  }
  catmullRom.alpha = function(alpha2) {
    return custom6(+alpha2);
  };
  return catmullRom;
}(0.5);

// node_modules/d3-shape/src/curve/catmullRomOpen.js
function CatmullRomOpen(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}
CatmullRomOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
    this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    if (this._line || this._line !== 0 && this._point === 3)
      this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x2, y2) {
    x2 = +x2, y2 = +y2;
    if (this._point) {
      var x23 = this._x2 - x2, y23 = this._y2 - y2;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
        break;
      case 3:
        this._point = 4;
      default:
        point4(this, x2, y2);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x2;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y2;
  }
};
var catmullRomOpen_default = function custom7(alpha) {
  function catmullRom(context) {
    return alpha ? new CatmullRomOpen(context, alpha) : new CardinalOpen(context, 0);
  }
  catmullRom.alpha = function(alpha2) {
    return custom7(+alpha2);
  };
  return catmullRom;
}(0.5);

// node_modules/d3-shape/src/curve/linearClosed.js
function LinearClosed(context) {
  this._context = context;
}
LinearClosed.prototype = {
  areaStart: noop_default,
  areaEnd: noop_default,
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._point)
      this._context.closePath();
  },
  point: function(x2, y2) {
    x2 = +x2, y2 = +y2;
    if (this._point)
      this._context.lineTo(x2, y2);
    else
      this._point = 1, this._context.moveTo(x2, y2);
  }
};
function linearClosed_default(context) {
  return new LinearClosed(context);
}

// node_modules/d3-shape/src/curve/monotone.js
function sign2(x2) {
  return x2 < 0 ? -1 : 1;
}
function slope3(that, x2, y2) {
  var h0 = that._x1 - that._x0, h1 = x2 - that._x1, s0 = (that._y1 - that._y0) / (h0 || h1 < 0 && -0), s1 = (y2 - that._y1) / (h1 || h0 < 0 && -0), p = (s0 * h1 + s1 * h0) / (h0 + h1);
  return (sign2(s0) + sign2(s1)) * Math.min(Math.abs(s0), Math.abs(s1), 0.5 * Math.abs(p)) || 0;
}
function slope2(that, t) {
  var h = that._x1 - that._x0;
  return h ? (3 * (that._y1 - that._y0) / h - t) / 2 : t;
}
function point5(that, t03, t13) {
  var x05 = that._x0, y05 = that._y0, x12 = that._x1, y12 = that._y1, dx = (x12 - x05) / 3;
  that._context.bezierCurveTo(x05 + dx, y05 + dx * t03, x12 - dx, y12 - dx * t13, x12, y12);
}
function MonotoneX(context) {
  this._context = context;
}
MonotoneX.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
      case 3:
        point5(this, this._t0, slope2(this, this._t0));
        break;
    }
    if (this._line || this._line !== 0 && this._point === 1)
      this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x2, y2) {
    var t13 = NaN;
    x2 = +x2, y2 = +y2;
    if (x2 === this._x1 && y2 === this._y1)
      return;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x2, y2) : this._context.moveTo(x2, y2);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        point5(this, slope2(this, t13 = slope3(this, x2, y2)), t13);
        break;
      default:
        point5(this, this._t0, t13 = slope3(this, x2, y2));
        break;
    }
    this._x0 = this._x1, this._x1 = x2;
    this._y0 = this._y1, this._y1 = y2;
    this._t0 = t13;
  }
};
function MonotoneY(context) {
  this._context = new ReflectContext(context);
}
(MonotoneY.prototype = Object.create(MonotoneX.prototype)).point = function(x2, y2) {
  MonotoneX.prototype.point.call(this, y2, x2);
};
function ReflectContext(context) {
  this._context = context;
}
ReflectContext.prototype = {
  moveTo: function(x2, y2) {
    this._context.moveTo(y2, x2);
  },
  closePath: function() {
    this._context.closePath();
  },
  lineTo: function(x2, y2) {
    this._context.lineTo(y2, x2);
  },
  bezierCurveTo: function(x12, y12, x2, y2, x3, y3) {
    this._context.bezierCurveTo(y12, x12, y2, x2, y3, x3);
  }
};
function monotoneX(context) {
  return new MonotoneX(context);
}
function monotoneY(context) {
  return new MonotoneY(context);
}

// node_modules/d3-shape/src/curve/natural.js
function Natural(context) {
  this._context = context;
}
Natural.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = [];
    this._y = [];
  },
  lineEnd: function() {
    var x2 = this._x, y2 = this._y, n = x2.length;
    if (n) {
      this._line ? this._context.lineTo(x2[0], y2[0]) : this._context.moveTo(x2[0], y2[0]);
      if (n === 2) {
        this._context.lineTo(x2[1], y2[1]);
      } else {
        var px = controlPoints(x2), py = controlPoints(y2);
        for (var i0 = 0, i1 = 1; i1 < n; ++i0, ++i1) {
          this._context.bezierCurveTo(px[0][i0], py[0][i0], px[1][i0], py[1][i0], x2[i1], y2[i1]);
        }
      }
    }
    if (this._line || this._line !== 0 && n === 1)
      this._context.closePath();
    this._line = 1 - this._line;
    this._x = this._y = null;
  },
  point: function(x2, y2) {
    this._x.push(+x2);
    this._y.push(+y2);
  }
};
function controlPoints(x2) {
  var i, n = x2.length - 1, m, a2 = new Array(n), b = new Array(n), r = new Array(n);
  a2[0] = 0, b[0] = 2, r[0] = x2[0] + 2 * x2[1];
  for (i = 1; i < n - 1; ++i)
    a2[i] = 1, b[i] = 4, r[i] = 4 * x2[i] + 2 * x2[i + 1];
  a2[n - 1] = 2, b[n - 1] = 7, r[n - 1] = 8 * x2[n - 1] + x2[n];
  for (i = 1; i < n; ++i)
    m = a2[i] / b[i - 1], b[i] -= m, r[i] -= m * r[i - 1];
  a2[n - 1] = r[n - 1] / b[n - 1];
  for (i = n - 2; i >= 0; --i)
    a2[i] = (r[i] - a2[i + 1]) / b[i];
  b[n - 1] = (x2[n] + a2[n - 1]) / 2;
  for (i = 0; i < n - 1; ++i)
    b[i] = 2 * x2[i + 1] - a2[i + 1];
  return [a2, b];
}
function natural_default(context) {
  return new Natural(context);
}

// node_modules/d3-shape/src/curve/step.js
function Step(context, t) {
  this._context = context;
  this._t = t;
}
Step.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = this._y = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (0 < this._t && this._t < 1 && this._point === 2)
      this._context.lineTo(this._x, this._y);
    if (this._line || this._line !== 0 && this._point === 1)
      this._context.closePath();
    if (this._line >= 0)
      this._t = 1 - this._t, this._line = 1 - this._line;
  },
  point: function(x2, y2) {
    x2 = +x2, y2 = +y2;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x2, y2) : this._context.moveTo(x2, y2);
        break;
      case 1:
        this._point = 2;
      default: {
        if (this._t <= 0) {
          this._context.lineTo(this._x, y2);
          this._context.lineTo(x2, y2);
        } else {
          var x12 = this._x * (1 - this._t) + x2 * this._t;
          this._context.lineTo(x12, this._y);
          this._context.lineTo(x12, y2);
        }
        break;
      }
    }
    this._x = x2, this._y = y2;
  }
};
function step_default(context) {
  return new Step(context, 0.5);
}
function stepBefore(context) {
  return new Step(context, 0);
}
function stepAfter(context) {
  return new Step(context, 1);
}

// node_modules/d3-zoom/src/transform.js
function Transform(k2, x2, y2) {
  this.k = k2;
  this.x = x2;
  this.y = y2;
}
Transform.prototype = {
  constructor: Transform,
  scale: function(k2) {
    return k2 === 1 ? this : new Transform(this.k * k2, this.x, this.y);
  },
  translate: function(x2, y2) {
    return x2 === 0 & y2 === 0 ? this : new Transform(this.k, this.x + this.k * x2, this.y + this.k * y2);
  },
  apply: function(point6) {
    return [point6[0] * this.k + this.x, point6[1] * this.k + this.y];
  },
  applyX: function(x2) {
    return x2 * this.k + this.x;
  },
  applyY: function(y2) {
    return y2 * this.k + this.y;
  },
  invert: function(location2) {
    return [(location2[0] - this.x) / this.k, (location2[1] - this.y) / this.k];
  },
  invertX: function(x2) {
    return (x2 - this.x) / this.k;
  },
  invertY: function(y2) {
    return (y2 - this.y) / this.k;
  },
  rescaleX: function(x2) {
    return x2.copy().domain(x2.range().map(this.invertX, this).map(x2.invert, x2));
  },
  rescaleY: function(y2) {
    return y2.copy().domain(y2.range().map(this.invertY, this).map(y2.invert, y2));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
var identity5 = new Transform(1, 0, 0);
transform.prototype = Transform.prototype;
function transform(node) {
  while (!node.__zoom)
    if (!(node = node.parentNode))
      return identity5;
  return node.__zoom;
}

// node_modules/@observablehq/plot/src/defined.js
function defined(x2) {
  return x2 != null && !Number.isNaN(x2);
}
function ascendingDefined2(a2, b) {
  return +defined(b) - +defined(a2) || ascending(a2, b);
}
function descendingDefined(a2, b) {
  return +defined(b) - +defined(a2) || descending(a2, b);
}
function nonempty(x2) {
  return x2 != null && `${x2}` !== "";
}
function finite(x2) {
  return isFinite(x2) ? x2 : NaN;
}
function positive(x2) {
  return x2 > 0 && isFinite(x2) ? x2 : NaN;
}
function negative(x2) {
  return x2 < 0 && isFinite(x2) ? x2 : NaN;
}

// node_modules/isoformat/src/format.js
function format2(date2, fallback) {
  if (!(date2 instanceof Date))
    date2 = /* @__PURE__ */ new Date(+date2);
  if (isNaN(date2))
    return typeof fallback === "function" ? fallback(date2) : fallback;
  const hours = date2.getUTCHours();
  const minutes = date2.getUTCMinutes();
  const seconds2 = date2.getUTCSeconds();
  const milliseconds2 = date2.getUTCMilliseconds();
  return `${formatYear2(date2.getUTCFullYear(), 4)}-${pad2(date2.getUTCMonth() + 1, 2)}-${pad2(date2.getUTCDate(), 2)}${hours || minutes || seconds2 || milliseconds2 ? `T${pad2(hours, 2)}:${pad2(minutes, 2)}${seconds2 || milliseconds2 ? `:${pad2(seconds2, 2)}${milliseconds2 ? `.${pad2(milliseconds2, 3)}` : ``}` : ``}Z` : ``}`;
}
function formatYear2(year) {
  return year < 0 ? `-${pad2(-year, 6)}` : year > 9999 ? `+${pad2(year, 6)}` : pad2(year, 4);
}
function pad2(value, width) {
  return `${value}`.padStart(width, "0");
}

// node_modules/isoformat/src/parse.js
var re2 = /^(?:[-+]\d{2})?\d{4}(?:-\d{2}(?:-\d{2})?)?(?:T\d{2}:\d{2}(?::\d{2}(?:\.\d{3})?)?(?:Z|[-+]\d{2}:?\d{2})?)?$/;
function parse(string2, fallback) {
  if (!re2.test(string2 += ""))
    return typeof fallback === "function" ? fallback(string2) : fallback;
  return new Date(string2);
}

// node_modules/@observablehq/plot/src/order.js
function orderof(values2) {
  if (values2 == null)
    return;
  const first2 = values2[0];
  const last = values2[values2.length - 1];
  return descending(first2, last);
}

// node_modules/@observablehq/plot/src/time.js
var durationSecond2 = 1e3;
var durationMinute2 = durationSecond2 * 60;
var durationHour2 = durationMinute2 * 60;
var durationDay2 = durationHour2 * 24;
var durationWeek2 = durationDay2 * 7;
var durationMonth2 = durationDay2 * 30;
var durationYear2 = durationDay2 * 365;
var tickIntervals = [
  ["millisecond", 1],
  ["2 milliseconds", 2],
  ["5 milliseconds", 5],
  ["10 milliseconds", 10],
  ["20 milliseconds", 20],
  ["50 milliseconds", 50],
  ["100 milliseconds", 100],
  ["200 milliseconds", 200],
  ["500 milliseconds", 500],
  ["second", durationSecond2],
  ["5 seconds", 5 * durationSecond2],
  ["15 seconds", 15 * durationSecond2],
  ["30 seconds", 30 * durationSecond2],
  ["minute", durationMinute2],
  ["5 minutes", 5 * durationMinute2],
  ["15 minutes", 15 * durationMinute2],
  ["30 minutes", 30 * durationMinute2],
  ["hour", durationHour2],
  ["3 hours", 3 * durationHour2],
  ["6 hours", 6 * durationHour2],
  ["12 hours", 12 * durationHour2],
  ["day", durationDay2],
  ["2 days", 2 * durationDay2],
  ["week", durationWeek2],
  ["2 weeks", 2 * durationWeek2],
  // https://github.com/d3/d3-time/issues/46
  ["month", durationMonth2],
  ["3 months", 3 * durationMonth2],
  ["6 months", 6 * durationMonth2],
  // https://github.com/d3/d3-time/issues/46
  ["year", durationYear2],
  ["2 years", 2 * durationYear2],
  ["5 years", 5 * durationYear2],
  ["10 years", 10 * durationYear2],
  ["20 years", 20 * durationYear2],
  ["50 years", 50 * durationYear2],
  ["100 years", 100 * durationYear2]
  // TODO generalize to longer time scales
];
var durations = /* @__PURE__ */ new Map([
  ["second", durationSecond2],
  ["minute", durationMinute2],
  ["hour", durationHour2],
  ["day", durationDay2],
  ["monday", durationWeek2],
  ["tuesday", durationWeek2],
  ["wednesday", durationWeek2],
  ["thursday", durationWeek2],
  ["friday", durationWeek2],
  ["saturday", durationWeek2],
  ["sunday", durationWeek2],
  ["week", durationWeek2],
  ["month", durationMonth2],
  ["year", durationYear2]
]);
var timeIntervals = /* @__PURE__ */ new Map([
  ["second", second],
  ["minute", timeMinute],
  ["hour", timeHour],
  ["day", timeDay],
  // https://github.com/d3/d3-time/issues/62
  ["monday", timeMonday],
  ["tuesday", timeTuesday],
  ["wednesday", timeWednesday],
  ["thursday", timeThursday],
  ["friday", timeFriday],
  ["saturday", timeSaturday],
  ["sunday", timeSunday],
  ["week", timeSunday],
  ["month", timeMonth],
  ["year", timeYear]
]);
var utcIntervals = /* @__PURE__ */ new Map([
  ["second", second],
  ["minute", utcMinute],
  ["hour", utcHour],
  ["day", unixDay],
  ["monday", utcMonday],
  ["tuesday", utcTuesday],
  ["wednesday", utcWednesday],
  ["thursday", utcThursday],
  ["friday", utcFriday],
  ["saturday", utcSaturday],
  ["sunday", utcSunday],
  ["week", utcSunday],
  ["month", utcMonth],
  ["year", utcYear]
]);
var intervalDuration = Symbol("intervalDuration");
var intervalType = Symbol("intervalType");
for (const [name, interval2] of timeIntervals) {
  interval2[intervalDuration] = durations.get(name);
  interval2[intervalType] = "time";
}
for (const [name, interval2] of utcIntervals) {
  interval2[intervalDuration] = durations.get(name);
  interval2[intervalType] = "utc";
}
var utcFormatIntervals = [
  ["year", utcYear, "utc"],
  ["month", utcMonth, "utc"],
  ["day", unixDay, "utc", 6 * durationMonth2],
  ["hour", utcHour, "utc", 3 * durationDay2],
  ["minute", utcMinute, "utc", 6 * durationHour2],
  ["second", second, "utc", 30 * durationMinute2]
];
var timeFormatIntervals = [
  ["year", timeYear, "time"],
  ["month", timeMonth, "time"],
  ["day", timeDay, "time", 6 * durationMonth2],
  ["hour", timeHour, "time", 3 * durationDay2],
  ["minute", timeMinute, "time", 6 * durationHour2],
  ["second", second, "time", 30 * durationMinute2]
];
var formatIntervals = [
  utcFormatIntervals[0],
  timeFormatIntervals[0],
  utcFormatIntervals[1],
  timeFormatIntervals[1],
  utcFormatIntervals[2],
  timeFormatIntervals[2],
  // Below day, local time typically has an hourly offset from UTC and hence the
  // two are aligned and indistinguishable; therefore, we only consider UTC, and
  // we don’t consider these if the domain only has a single value.
  ...utcFormatIntervals.slice(3)
];
function parseTimeInterval(input) {
  let name = `${input}`.toLowerCase();
  if (name.endsWith("s"))
    name = name.slice(0, -1);
  let period = 1;
  const match = /^(?:(\d+)\s+)/.exec(name);
  if (match) {
    name = name.slice(match[0].length);
    period = +match[1];
  }
  switch (name) {
    case "quarter":
      name = "month";
      period *= 3;
      break;
    case "half":
      name = "month";
      period *= 6;
      break;
  }
  let interval2 = utcIntervals.get(name);
  if (!interval2)
    throw new Error(`unknown interval: ${input}`);
  if (period > 1 && !interval2.every)
    throw new Error(`non-periodic interval: ${name}`);
  return [name, period];
}
function timeInterval2(input) {
  return asInterval(parseTimeInterval(input), "time");
}
function utcInterval(input) {
  return asInterval(parseTimeInterval(input), "utc");
}
function asInterval([name, period], type2) {
  let interval2 = (type2 === "time" ? timeIntervals : utcIntervals).get(name);
  if (period > 1) {
    interval2 = interval2.every(period);
    interval2[intervalDuration] = durations.get(name) * period;
    interval2[intervalType] = type2;
  }
  return interval2;
}
function generalizeTimeInterval(interval2, n) {
  if (!(n > 1))
    return;
  const duration = interval2[intervalDuration];
  if (!tickIntervals.some(([, d]) => d === duration))
    return;
  if (duration % durationDay2 === 0 && durationDay2 < duration && duration < durationMonth2)
    return;
  const [i] = tickIntervals[bisector(([, step]) => Math.log(step)).center(tickIntervals, Math.log(duration * n))];
  return (interval2[intervalType] === "time" ? timeInterval2 : utcInterval)(i);
}
function formatTimeInterval(name, type2, anchor) {
  const format3 = type2 === "time" ? timeFormat : utcFormat;
  if (anchor == null) {
    return format3(
      name === "year" ? "%Y" : name === "month" ? "%Y-%m" : name === "day" ? "%Y-%m-%d" : name === "hour" || name === "minute" ? "%Y-%m-%dT%H:%M" : name === "second" ? "%Y-%m-%dT%H:%M:%S" : "%Y-%m-%dT%H:%M:%S.%L"
    );
  }
  const template2 = getTimeTemplate(anchor);
  switch (name) {
    case "millisecond":
      return formatConditional(format3(".%L"), format3(":%M:%S"), template2);
    case "second":
      return formatConditional(format3(":%S"), format3("%-I:%M"), template2);
    case "minute":
      return formatConditional(format3("%-I:%M"), format3("%p"), template2);
    case "hour":
      return formatConditional(format3("%-I %p"), format3("%b %-d"), template2);
    case "day":
      return formatConditional(format3("%-d"), format3("%b"), template2);
    case "month":
      return formatConditional(format3("%b"), format3("%Y"), template2);
    case "year":
      return format3("%Y");
  }
  throw new Error("unable to format time ticks");
}
function getTimeTemplate(anchor) {
  return anchor === "left" || anchor === "right" ? (f1, f2) => `
${f1}
${f2}` : anchor === "top" ? (f1, f2) => `${f2}
${f1}` : (f1, f2) => `${f1}
${f2}`;
}
function getFormatIntervals(type2) {
  return type2 === "time" ? timeFormatIntervals : type2 === "utc" ? utcFormatIntervals : formatIntervals;
}
function inferTimeFormat(type2, dates, anchor) {
  const step = max(pairs(dates, (a2, b) => Math.abs(b - a2)));
  if (step < 1e3)
    return formatTimeInterval("millisecond", "utc", anchor);
  for (const [name, interval2, intervalType2, maxStep] of getFormatIntervals(type2)) {
    if (step > maxStep)
      break;
    if (name === "hour" && !step)
      break;
    if (dates.every((d) => interval2.floor(d) >= d))
      return formatTimeInterval(name, intervalType2, anchor);
  }
}
function formatConditional(format1, format22, template2) {
  return (x2, i, X3) => {
    const f1 = format1(x2, i);
    const f2 = format22(x2, i);
    const j = i - orderof(X3);
    return i !== j && X3[j] !== void 0 && f2 === format22(X3[j], j) ? f1 : template2(f1, f2);
  };
}

// node_modules/@observablehq/plot/src/options.js
var TypedArray = Object.getPrototypeOf(Uint8Array);
var objectToString = Object.prototype.toString;
var reindex = Symbol("reindex");
function valueof(data, value, type2) {
  const valueType = typeof value;
  return valueType === "string" ? maybeTypedMap(data, field(value), type2) : valueType === "function" ? maybeTypedMap(data, value, type2) : valueType === "number" || value instanceof Date || valueType === "boolean" ? map2(data, constant(value), type2) : typeof value?.transform === "function" ? maybeTypedArrayify(value.transform(data), type2) : maybeTake(maybeTypedArrayify(value, type2), data?.[reindex]);
}
function maybeTake(values2, index2) {
  return values2 != null && index2 ? take(values2, index2) : values2;
}
function maybeTypedMap(data, f, type2) {
  return map2(data, type2?.prototype instanceof TypedArray ? floater(f) : f, type2);
}
function maybeTypedArrayify(data, type2) {
  return type2 === void 0 ? arrayify2(data) : data instanceof type2 ? data : type2.prototype instanceof TypedArray && !(data instanceof TypedArray) ? type2.from(data, coerceNumber) : type2.from(data);
}
function floater(f) {
  return (d, i) => coerceNumber(f(d, i));
}
var singleton = [null];
var field = (name) => (d) => d[name];
var indexOf = { transform: range2 };
var identity6 = { transform: (d) => d };
var one2 = () => 1;
var yes = () => true;
var string = (x2) => x2 == null ? x2 : `${x2}`;
var number5 = (x2) => x2 == null ? x2 : +x2;
var first = (x2) => x2 ? x2[0] : void 0;
var second2 = (x2) => x2 ? x2[1] : void 0;
var constant = (x2) => () => x2;
function percentile(reduce) {
  const p = +`${reduce}`.slice(1) / 100;
  return (I, f) => quantile(I, p, f);
}
function coerceNumbers(values2) {
  return values2 instanceof TypedArray ? values2 : map2(values2, coerceNumber, Float64Array);
}
function coerceNumber(x2) {
  return x2 == null ? NaN : Number(x2);
}
function coerceDates(values2) {
  return map2(values2, coerceDate);
}
function coerceDate(x2) {
  return x2 instanceof Date && !isNaN(x2) ? x2 : typeof x2 === "string" ? parse(x2) : x2 == null || isNaN(x2 = +x2) ? void 0 : new Date(x2);
}
function maybeColorChannel(value, defaultValue) {
  if (value === void 0)
    value = defaultValue;
  return value === null ? [void 0, "none"] : isColor(value) ? [void 0, value] : [value, void 0];
}
function maybeNumberChannel(value, defaultValue) {
  if (value === void 0)
    value = defaultValue;
  return value === null || typeof value === "number" ? [void 0, value] : [value, void 0];
}
function maybeKeyword(input, name, allowed) {
  if (input != null)
    return keyword(input, name, allowed);
}
function keyword(input, name, allowed) {
  const i = `${input}`.toLowerCase();
  if (!allowed.includes(i))
    throw new Error(`invalid ${name}: ${input}`);
  return i;
}
function arrayify2(data) {
  return data == null || data instanceof Array || data instanceof TypedArray ? data : Array.from(data);
}
function map2(values2, f, type2 = Array) {
  return values2 == null ? values2 : values2 instanceof type2 ? values2.map(f) : type2.from(values2, f);
}
function slice2(values2, type2 = Array) {
  return values2 instanceof type2 ? values2.slice() : type2.from(values2);
}
function hasY({ y: y2, y1: y12, y2: y22 }) {
  return y2 !== void 0 || y12 !== void 0 || y22 !== void 0;
}
function isObject(option) {
  return option?.toString === objectToString;
}
function isScaleOptions(option) {
  return isObject(option) && (option.type !== void 0 || option.domain !== void 0);
}
function isOptions(option) {
  return isObject(option) && typeof option.transform !== "function";
}
function isDomainSort(sort2) {
  return isOptions(sort2) && sort2.value === void 0 && sort2.channel === void 0;
}
function maybeZero(x2, x12, x22, x3 = identity6) {
  if (x12 === void 0 && x22 === void 0) {
    x12 = 0, x22 = x2 === void 0 ? x3 : x2;
  } else if (x12 === void 0) {
    x12 = x2 === void 0 ? 0 : x2;
  } else if (x22 === void 0) {
    x22 = x2 === void 0 ? 0 : x2;
  }
  return [x12, x22];
}
function maybeTuple(x2, y2) {
  return x2 === void 0 && y2 === void 0 ? [first, second2] : [x2, y2];
}
function maybeZ({ z, fill, stroke } = {}) {
  if (z === void 0)
    [z] = maybeColorChannel(fill);
  if (z === void 0)
    [z] = maybeColorChannel(stroke);
  return z;
}
function range2(data) {
  const n = data.length;
  const r = new Uint32Array(n);
  for (let i = 0; i < n; ++i)
    r[i] = i;
  return r;
}
function take(values2, index2) {
  return map2(index2, (i) => values2[i], values2.constructor);
}
function subarray(I, i, j) {
  return I.subarray ? I.subarray(i, j) : I.slice(i, j);
}
function keyof2(value) {
  return value !== null && typeof value === "object" ? value.valueOf() : value;
}
function maybeInput(key, options) {
  if (options[key] !== void 0)
    return options[key];
  switch (key) {
    case "x1":
    case "x2":
      key = "x";
      break;
    case "y1":
    case "y2":
      key = "y";
      break;
  }
  return options[key];
}
function column(source) {
  let value;
  return [
    {
      transform: () => value,
      label: labelof(source)
    },
    (v) => value = v
  ];
}
function maybeColumn(source) {
  return source == null ? [source] : column(source);
}
function labelof(value, defaultValue) {
  return typeof value === "string" ? value : value && value.label !== void 0 ? value.label : defaultValue;
}
function mid(x12, x2) {
  return {
    transform(data) {
      const X12 = x12.transform(data);
      const X22 = x2.transform(data);
      return isTemporal(X12) || isTemporal(X22) ? map2(X12, (_, i) => new Date((+X12[i] + +X22[i]) / 2)) : map2(X12, (_, i) => (+X12[i] + +X22[i]) / 2, Float64Array);
    },
    label: x12.label
  };
}
function maybeApplyInterval(V, scale) {
  const t = maybeIntervalTransform(scale?.interval, scale?.type);
  return t ? map2(V, t) : V;
}
function maybeIntervalTransform(interval2, type2) {
  const i = maybeInterval(interval2, type2);
  return i && ((v) => defined(v) ? i.floor(v) : v);
}
function maybeInterval(interval2, type2) {
  if (interval2 == null)
    return;
  if (typeof interval2 === "number")
    return numberInterval(interval2);
  if (typeof interval2 === "string")
    return (type2 === "time" ? timeInterval2 : utcInterval)(interval2);
  if (typeof interval2.floor !== "function")
    throw new Error("invalid interval; missing floor method");
  if (typeof interval2.offset !== "function")
    throw new Error("invalid interval; missing offset method");
  return interval2;
}
function numberInterval(interval2) {
  interval2 = +interval2;
  if (0 < interval2 && interval2 < 1 && Number.isInteger(1 / interval2))
    interval2 = -1 / interval2;
  const n = Math.abs(interval2);
  return interval2 < 0 ? {
    floor: (d) => Math.floor(d * n) / n,
    offset: (d, s2 = 1) => (d * n + Math.floor(s2)) / n,
    range: (lo, hi) => range(Math.ceil(lo * n), hi * n).map((x2) => x2 / n)
  } : {
    floor: (d) => Math.floor(d / n) * n,
    offset: (d, s2 = 1) => d + n * Math.floor(s2),
    range: (lo, hi) => range(Math.ceil(lo / n), hi / n).map((x2) => x2 * n)
  };
}
function maybeRangeInterval(interval2, type2) {
  interval2 = maybeInterval(interval2, type2);
  if (interval2 && typeof interval2.range !== "function")
    throw new Error("invalid interval: missing range method");
  return interval2;
}
function maybeNiceInterval(interval2, type2) {
  interval2 = maybeRangeInterval(interval2, type2);
  if (interval2 && typeof interval2.ceil !== "function")
    throw new Error("invalid interval: missing ceil method");
  return interval2;
}
function isTimeInterval(t) {
  return isInterval(t) && typeof t?.floor === "function" && t.floor() instanceof Date;
}
function isInterval(t) {
  return typeof t?.range === "function";
}
function maybeValue(value) {
  return value === void 0 || isOptions(value) ? value : { value };
}
function numberChannel(source) {
  return source == null ? null : {
    transform: (data) => valueof(data, source, Float64Array),
    label: labelof(source)
  };
}
function isIterable(value) {
  return value && typeof value[Symbol.iterator] === "function";
}
function isTextual(values2) {
  for (const value of values2) {
    if (value == null)
      continue;
    return typeof value !== "object" || value instanceof Date;
  }
}
function isOrdinal(values2) {
  for (const value of values2) {
    if (value == null)
      continue;
    const type2 = typeof value;
    return type2 === "string" || type2 === "boolean";
  }
}
function isTemporal(values2) {
  for (const value of values2) {
    if (value == null)
      continue;
    return value instanceof Date;
  }
}
function isTemporalString(values2) {
  for (const value of values2) {
    if (value == null)
      continue;
    return typeof value === "string" && isNaN(value) && parse(value);
  }
}
function isNumericString(values2) {
  for (const value of values2) {
    if (value == null)
      continue;
    if (typeof value !== "string")
      return false;
    if (!value.trim())
      continue;
    return !isNaN(value);
  }
}
function isNumeric(values2) {
  for (const value of values2) {
    if (value == null)
      continue;
    return typeof value === "number";
  }
}
function isEvery(values2, is) {
  let every;
  for (const value of values2) {
    if (value == null)
      continue;
    if (!is(value))
      return false;
    every = true;
  }
  return every;
}
var namedColors = new Set("none,currentcolor,transparent,aliceblue,antiquewhite,aqua,aquamarine,azure,beige,bisque,black,blanchedalmond,blue,blueviolet,brown,burlywood,cadetblue,chartreuse,chocolate,coral,cornflowerblue,cornsilk,crimson,cyan,darkblue,darkcyan,darkgoldenrod,darkgray,darkgreen,darkgrey,darkkhaki,darkmagenta,darkolivegreen,darkorange,darkorchid,darkred,darksalmon,darkseagreen,darkslateblue,darkslategray,darkslategrey,darkturquoise,darkviolet,deeppink,deepskyblue,dimgray,dimgrey,dodgerblue,firebrick,floralwhite,forestgreen,fuchsia,gainsboro,ghostwhite,gold,goldenrod,gray,green,greenyellow,grey,honeydew,hotpink,indianred,indigo,ivory,khaki,lavender,lavenderblush,lawngreen,lemonchiffon,lightblue,lightcoral,lightcyan,lightgoldenrodyellow,lightgray,lightgreen,lightgrey,lightpink,lightsalmon,lightseagreen,lightskyblue,lightslategray,lightslategrey,lightsteelblue,lightyellow,lime,limegreen,linen,magenta,maroon,mediumaquamarine,mediumblue,mediumorchid,mediumpurple,mediumseagreen,mediumslateblue,mediumspringgreen,mediumturquoise,mediumvioletred,midnightblue,mintcream,mistyrose,moccasin,navajowhite,navy,oldlace,olive,olivedrab,orange,orangered,orchid,palegoldenrod,palegreen,paleturquoise,palevioletred,papayawhip,peachpuff,peru,pink,plum,powderblue,purple,rebeccapurple,red,rosybrown,royalblue,saddlebrown,salmon,sandybrown,seagreen,seashell,sienna,silver,skyblue,slateblue,slategray,slategrey,snow,springgreen,steelblue,tan,teal,thistle,tomato,turquoise,violet,wheat,white,whitesmoke,yellow".split(","));
function isColor(value) {
  if (typeof value !== "string")
    return false;
  value = value.toLowerCase().trim();
  return /^#[0-9a-f]{3,8}$/.test(value) || // hex rgb, rgba, rrggbb, rrggbbaa
  /^(?:url|var|rgb|rgba|hsl|hsla|hwb|lab|lch|oklab|oklch|color|color-mix)\(.*\)$/.test(value) || // <funciri>, CSS variable, color, etc.
  namedColors.has(value);
}
function isOpacity(value) {
  return typeof value === "number" && (0 <= value && value <= 1 || isNaN(value));
}
function isNoneish(value) {
  return value == null || isNone(value);
}
function isNone(value) {
  return /^\s*none\s*$/i.test(value);
}
function isRound(value) {
  return /^\s*round\s*$/i.test(value);
}
function maybeAnchor(value, name) {
  return maybeKeyword(value, name, [
    "middle",
    "top-left",
    "top",
    "top-right",
    "right",
    "bottom-right",
    "bottom",
    "bottom-left",
    "left"
  ]);
}
function maybeFrameAnchor(value = "middle") {
  return maybeAnchor(value, "frameAnchor");
}
function inherit2(options = {}, ...rest) {
  let o = options;
  for (const defaults9 of rest) {
    for (const key in defaults9) {
      if (o[key] === void 0) {
        const value = defaults9[key];
        if (o === options)
          o = { ...o, [key]: value };
        else
          o[key] = value;
      }
    }
  }
  return o;
}
function named2(things) {
  console.warn("named iterables are deprecated; please use an object instead");
  const names = /* @__PURE__ */ new Set();
  return Object.fromEntries(
    Array.from(things, (thing) => {
      const { name } = thing;
      if (name == null)
        throw new Error("missing name");
      const key = `${name}`;
      if (key === "__proto__")
        throw new Error(`illegal name: ${key}`);
      if (names.has(key))
        throw new Error(`duplicate name: ${key}`);
      names.add(key);
      return [name, thing];
    })
  );
}
function maybeNamed(things) {
  return isIterable(things) ? named2(things) : things;
}
function maybeClip(clip) {
  if (clip === true)
    clip = "frame";
  else if (clip === false)
    clip = null;
  else if (clip != null)
    clip = keyword(clip, "clip", ["frame", "sphere"]);
  return clip;
}

// node_modules/@observablehq/plot/src/scales/index.js
var position = Symbol("position");
var color2 = Symbol("color");
var radius = Symbol("radius");
var length2 = Symbol("length");
var opacity = Symbol("opacity");
var symbol = Symbol("symbol");
var projection2 = Symbol("projection");
var registry = /* @__PURE__ */ new Map([
  ["x", position],
  ["y", position],
  ["fx", position],
  ["fy", position],
  ["r", radius],
  ["color", color2],
  ["opacity", opacity],
  ["symbol", symbol],
  ["length", length2],
  ["projection", projection2]
]);
function isPosition(kind) {
  return kind === position || kind === projection2;
}
function hasNumericRange(kind) {
  return kind === position || kind === radius || kind === length2 || kind === opacity;
}

// node_modules/@observablehq/plot/src/symbol.js
var sqrt35 = Math.sqrt(3);
var sqrt4_3 = 2 / sqrt35;
var symbolHexagon = {
  draw(context, size) {
    const rx = Math.sqrt(size / Math.PI), ry = rx * sqrt4_3, hy = ry / 2;
    context.moveTo(0, ry);
    context.lineTo(rx, hy);
    context.lineTo(rx, -hy);
    context.lineTo(0, -ry);
    context.lineTo(-rx, -hy);
    context.lineTo(-rx, hy);
    context.closePath();
  }
};
var symbols = /* @__PURE__ */ new Map([
  ["asterisk", asterisk_default],
  ["circle", circle_default2],
  ["cross", cross_default],
  ["diamond", diamond_default],
  ["diamond2", diamond2_default],
  ["hexagon", symbolHexagon],
  ["plus", plus_default],
  ["square", square_default],
  ["square2", square2_default],
  ["star", star_default],
  ["times", times_default],
  ["triangle", triangle_default],
  ["triangle2", triangle2_default],
  ["wye", wye_default]
]);
function isSymbolObject(value) {
  return value && typeof value.draw === "function";
}
function isSymbol(value) {
  if (isSymbolObject(value))
    return true;
  if (typeof value !== "string")
    return false;
  return symbols.has(value.toLowerCase());
}
function maybeSymbol(symbol2) {
  if (symbol2 == null || isSymbolObject(symbol2))
    return symbol2;
  const value = symbols.get(`${symbol2}`.toLowerCase());
  if (value)
    return value;
  throw new Error(`invalid symbol: ${symbol2}`);
}

// node_modules/@observablehq/plot/src/transforms/basic.js
function basic({ filter: f1, sort: s1, reverse: r1, transform: t13, initializer: i1, ...options } = {}, transform2) {
  if (t13 === void 0) {
    if (f1 != null)
      t13 = filterTransform(f1);
    if (s1 != null && !isDomainSort(s1))
      t13 = composeTransform(t13, sortTransform(s1));
    if (r1)
      t13 = composeTransform(t13, reverseTransform);
  }
  if (transform2 != null && i1 != null)
    throw new Error("transforms cannot be applied after initializers");
  return {
    ...options,
    ...(s1 === null || isDomainSort(s1)) && { sort: s1 },
    transform: composeTransform(t13, transform2)
  };
}
function initializer({ filter: f1, sort: s1, reverse: r1, initializer: i1, ...options } = {}, initializer2) {
  if (i1 === void 0) {
    if (f1 != null)
      i1 = filterTransform(f1);
    if (s1 != null && !isDomainSort(s1))
      i1 = composeInitializer(i1, sortTransform(s1));
    if (r1)
      i1 = composeInitializer(i1, reverseTransform);
  }
  return {
    ...options,
    ...(s1 === null || isDomainSort(s1)) && { sort: s1 },
    initializer: composeInitializer(i1, initializer2)
  };
}
function composeTransform(t13, t22) {
  if (t13 == null)
    return t22 === null ? void 0 : t22;
  if (t22 == null)
    return t13 === null ? void 0 : t13;
  return function(data, facets, plotOptions) {
    ({ data, facets } = t13.call(this, data, facets, plotOptions));
    return t22.call(this, arrayify2(data), facets, plotOptions);
  };
}
function composeInitializer(i1, i2) {
  if (i1 == null)
    return i2 === null ? void 0 : i2;
  if (i2 == null)
    return i1 === null ? void 0 : i1;
  return function(data, facets, channels, ...args) {
    let c1, d1, f1, c22, d2, f2;
    ({ data: d1 = data, facets: f1 = facets, channels: c1 } = i1.call(this, data, facets, channels, ...args));
    ({ data: d2 = d1, facets: f2 = f1, channels: c22 } = i2.call(this, d1, f1, { ...channels, ...c1 }, ...args));
    return { data: d2, facets: f2, channels: { ...c1, ...c22 } };
  };
}
function filterTransform(value) {
  return (data, facets) => {
    const V = valueof(data, value);
    return { data, facets: facets.map((I) => I.filter((i) => V[i])) };
  };
}
function reverseTransform(data, facets) {
  return { data, facets: facets.map((I) => I.slice().reverse()) };
}
function sortTransform(value) {
  return (typeof value === "function" && value.length !== 1 ? sortData : sortValue)(value);
}
function sortData(compare) {
  return (data, facets) => {
    const compareData = (i, j) => compare(data[i], data[j]);
    return { data, facets: facets.map((I) => I.slice().sort(compareData)) };
  };
}
function sortValue(value) {
  let channel, order;
  ({ channel, value, order } = { ...maybeValue(value) });
  const negate = channel?.startsWith("-");
  if (negate)
    channel = channel.slice(1);
  if (order === void 0)
    order = negate ? descendingDefined : ascendingDefined2;
  if (typeof order !== "function") {
    switch (`${order}`.toLowerCase()) {
      case "ascending":
        order = ascendingDefined2;
        break;
      case "descending":
        order = descendingDefined;
        break;
      default:
        throw new Error(`invalid order: ${order}`);
    }
  }
  return (data, facets, channels) => {
    let V;
    if (channel === void 0) {
      V = valueof(data, value);
    } else {
      if (channels === void 0)
        throw new Error("channel sort requires an initializer");
      V = channels[channel];
      if (!V)
        return {};
      V = V.value;
    }
    const compareValue = (i, j) => order(V[i], V[j]);
    return { data, facets: facets.map((I) => I.slice().sort(compareValue)) };
  };
}

// node_modules/@observablehq/plot/src/transforms/group.js
function hasOutput(outputs, ...names) {
  for (const { name } of outputs) {
    if (names.includes(name)) {
      return true;
    }
  }
  return false;
}
function maybeOutputs(outputs, inputs2, asOutput = maybeOutput) {
  const entries = Object.entries(outputs);
  if (inputs2.title != null && outputs.title === void 0)
    entries.push(["title", reduceTitle]);
  if (inputs2.href != null && outputs.href === void 0)
    entries.push(["href", reduceFirst]);
  return entries.filter(([, reduce]) => reduce !== void 0).map(([name, reduce]) => reduce === null ? nullOutput(name) : asOutput(name, reduce, inputs2));
}
function maybeOutput(name, reduce, inputs2, asEvaluator = maybeEvaluator) {
  let scale;
  if (isObject(reduce) && "reduce" in reduce)
    scale = reduce.scale, reduce = reduce.reduce;
  const evaluator = asEvaluator(name, reduce, inputs2);
  const [output, setOutput] = column(evaluator.label);
  let O;
  return {
    name,
    output: scale === void 0 ? output : { value: output, scale },
    initialize(data) {
      evaluator.initialize(data);
      O = setOutput([]);
    },
    scope(scope, I) {
      evaluator.scope(scope, I);
    },
    reduce(I, extent3) {
      O.push(evaluator.reduce(I, extent3));
    }
  };
}
function nullOutput(name) {
  return { name, initialize() {
  }, scope() {
  }, reduce() {
  } };
}
function maybeEvaluator(name, reduce, inputs2, asReduce = maybeReduce) {
  const input = maybeInput(name, inputs2);
  const reducer2 = asReduce(reduce, input);
  let V, context;
  return {
    label: labelof(reducer2 === reduceCount ? null : input, reducer2.label),
    initialize(data) {
      V = input === void 0 ? data : valueof(data, input);
      if (reducer2.scope === "data") {
        context = reducer2.reduceIndex(range2(data), V);
      }
    },
    scope(scope, I) {
      if (reducer2.scope === scope) {
        context = reducer2.reduceIndex(I, V);
      }
    },
    reduce(I, extent3) {
      return reducer2.scope == null ? reducer2.reduceIndex(I, V, extent3) : reducer2.reduceIndex(I, V, context, extent3);
    }
  };
}
function maybeGroup(I, X3) {
  return X3 ? group(I, (i) => X3[i]) : [[, I]];
}
function maybeReduce(reduce, value, fallback = invalidReduce) {
  if (reduce == null)
    return fallback(reduce);
  if (typeof reduce.reduceIndex === "function")
    return reduce;
  if (typeof reduce.reduce === "function" && isObject(reduce))
    return reduceReduce(reduce);
  if (typeof reduce === "function")
    return reduceFunction(reduce);
  if (/^p\d{2}$/i.test(reduce))
    return reduceAccessor(percentile(reduce));
  switch (`${reduce}`.toLowerCase()) {
    case "first":
      return reduceFirst;
    case "last":
      return reduceLast;
    case "identity":
      return reduceIdentity;
    case "count":
      return reduceCount;
    case "distinct":
      return reduceDistinct;
    case "sum":
      return value == null ? reduceCount : reduceSum;
    case "proportion":
      return reduceProportion(value, "data");
    case "proportion-facet":
      return reduceProportion(value, "facet");
    case "deviation":
      return reduceAccessor(deviation);
    case "min":
      return reduceAccessor(min);
    case "min-index":
      return reduceAccessor(minIndex);
    case "max":
      return reduceAccessor(max);
    case "max-index":
      return reduceAccessor(maxIndex);
    case "mean":
      return reduceMaybeTemporalAccessor(mean);
    case "median":
      return reduceMaybeTemporalAccessor(median);
    case "variance":
      return reduceAccessor(variance);
    case "mode":
      return reduceAccessor(mode);
  }
  return fallback(reduce);
}
function invalidReduce(reduce) {
  throw new Error(`invalid reduce: ${reduce}`);
}
function maybeSubgroup(outputs, inputs2) {
  for (const name in inputs2) {
    const value = inputs2[name];
    if (value !== void 0 && !outputs.some((o) => o.name === name)) {
      return value;
    }
  }
}
function maybeSort(facets, sort2, reverse2) {
  if (sort2) {
    const S = sort2.output.transform();
    const compare = (i, j) => ascendingDefined2(S[i], S[j]);
    facets.forEach((f) => f.sort(compare));
  }
  if (reverse2) {
    facets.forEach((f) => f.reverse());
  }
}
function reduceReduce(reduce) {
  console.warn("deprecated reduce interface; implement reduceIndex instead.");
  return { ...reduce, reduceIndex: reduce.reduce.bind(reduce) };
}
function reduceFunction(f) {
  return {
    reduceIndex(I, X3, extent3) {
      return f(take(X3, I), extent3);
    }
  };
}
function reduceAccessor(f) {
  return {
    reduceIndex(I, X3) {
      return f(I, (i) => X3[i]);
    }
  };
}
function reduceMaybeTemporalAccessor(f) {
  return {
    reduceIndex(I, X3) {
      const x2 = f(I, (i) => X3[i]);
      return isTemporal(X3) ? new Date(x2) : x2;
    }
  };
}
var reduceIdentity = {
  reduceIndex(I, X3) {
    return take(X3, I);
  }
};
var reduceFirst = {
  reduceIndex(I, X3) {
    return X3[I[0]];
  }
};
var reduceTitle = {
  reduceIndex(I, X3) {
    const n = 5;
    const groups2 = sort(
      rollup(
        I,
        (V) => V.length,
        (i) => X3[i]
      ),
      second2
    );
    const top2 = groups2.slice(-n).reverse();
    if (top2.length < groups2.length) {
      const bottom2 = groups2.slice(0, 1 - n);
      top2[n - 1] = [`\u2026 ${bottom2.length.toLocaleString("en-US")} more`, sum(bottom2, second2)];
    }
    return top2.map(([key, value]) => `${key} (${value.toLocaleString("en-US")})`).join("\n");
  }
};
var reduceLast = {
  reduceIndex(I, X3) {
    return X3[I[I.length - 1]];
  }
};
var reduceCount = {
  label: "Frequency",
  reduceIndex(I) {
    return I.length;
  }
};
var reduceDistinct = {
  label: "Distinct",
  reduceIndex(I, X3) {
    const s2 = new InternSet();
    for (const i of I)
      s2.add(X3[i]);
    return s2.size;
  }
};
var reduceSum = reduceAccessor(sum);
function reduceProportion(value, scope) {
  return value == null ? { scope, label: "Frequency", reduceIndex: (I, V, basis2 = 1) => I.length / basis2 } : { scope, reduceIndex: (I, V, basis2 = 1) => sum(I, (i) => V[i]) / basis2 };
}
var reduceZ = {
  reduceIndex(I, X3, { z }) {
    return z;
  }
};

// node_modules/@observablehq/plot/src/channel.js
function createChannel(data, { scale, type: type2, value, filter: filter2, hint, label = labelof(value) }, name) {
  if (hint === void 0 && typeof value?.transform === "function")
    hint = value.hint;
  return inferChannelScale(name, {
    scale,
    type: type2,
    value: valueof(data, value),
    label,
    filter: filter2,
    hint
  });
}
function createChannels(channels, data) {
  return Object.fromEntries(
    Object.entries(channels).map(([name, channel]) => [name, createChannel(data, channel, name)])
  );
}
function valueObject(channels, scales) {
  const values2 = Object.fromEntries(
    Object.entries(channels).map(([name, { scale: scaleName, value }]) => {
      const scale = scaleName == null ? null : scales[scaleName];
      return [name, scale == null ? value : map2(value, scale)];
    })
  );
  values2.channels = channels;
  return values2;
}
function inferChannelScale(name, channel) {
  const { scale, value } = channel;
  if (scale === true || scale === "auto") {
    switch (name) {
      case "fill":
      case "stroke":
      case "color":
        channel.scale = scale !== true && isEvery(value, isColor) ? null : "color";
        break;
      case "fillOpacity":
      case "strokeOpacity":
      case "opacity":
        channel.scale = scale !== true && isEvery(value, isOpacity) ? null : "opacity";
        break;
      case "symbol":
        if (scale !== true && isEvery(value, isSymbol)) {
          channel.scale = null;
          channel.value = map2(value, maybeSymbol);
        } else {
          channel.scale = "symbol";
        }
        break;
      default:
        channel.scale = registry.has(name) ? name : null;
        break;
    }
  } else if (scale === false) {
    channel.scale = null;
  } else if (scale != null && !registry.has(scale)) {
    throw new Error(`unknown scale: ${scale}`);
  }
  return channel;
}
function channelDomain(data, facets, channels, facetChannels, options) {
  const { order: defaultOrder, reverse: defaultReverse, reduce: defaultReduce = true, limit: defaultLimit } = options;
  for (const x2 in options) {
    if (!registry.has(x2))
      continue;
    let { value: y2, order = defaultOrder, reverse: reverse2 = defaultReverse, reduce = defaultReduce, limit = defaultLimit } = maybeValue(options[x2]);
    const negate = y2?.startsWith("-");
    if (negate)
      y2 = y2.slice(1);
    order = order === void 0 ? negate !== (y2 === "width" || y2 === "height") ? descendingGroup : ascendingGroup : maybeOrder(order);
    if (reduce == null || reduce === false)
      continue;
    const X3 = x2 === "fx" || x2 === "fy" ? reindexFacetChannel(facets, facetChannels[x2]) : findScaleChannel(channels, x2);
    if (!X3)
      throw new Error(`missing channel for scale: ${x2}`);
    const XV = X3.value;
    const [lo = 0, hi = Infinity] = isIterable(limit) ? limit : limit < 0 ? [limit] : [0, limit];
    if (y2 == null) {
      X3.domain = () => {
        let domain = Array.from(new InternSet(XV));
        if (reverse2)
          domain = domain.reverse();
        if (lo !== 0 || hi !== Infinity)
          domain = domain.slice(lo, hi);
        return domain;
      };
    } else {
      const YV = y2 === "data" ? data : y2 === "height" ? difference(channels, "y1", "y2") : y2 === "width" ? difference(channels, "x1", "x2") : values(channels, y2, y2 === "y" ? "y2" : y2 === "x" ? "x2" : void 0);
      const reducer2 = maybeReduce(reduce === true ? "max" : reduce, YV);
      X3.domain = () => {
        let domain = rollups(
          range2(XV),
          (I) => reducer2.reduceIndex(I, YV),
          (i) => XV[i]
        );
        if (order)
          domain.sort(order);
        if (reverse2)
          domain.reverse();
        if (lo !== 0 || hi !== Infinity)
          domain = domain.slice(lo, hi);
        return domain.map(first);
      };
    }
  }
}
function findScaleChannel(channels, scale) {
  for (const name in channels) {
    const channel = channels[name];
    if (channel.scale === scale)
      return channel;
  }
}
function reindexFacetChannel(facets, channel) {
  const originalFacets = facets.original;
  if (originalFacets === facets)
    return channel;
  const V1 = channel.value;
  const V2 = channel.value = [];
  for (let i = 0; i < originalFacets.length; ++i) {
    const vi = V1[originalFacets[i][0]];
    for (const j of facets[i])
      V2[j] = vi;
  }
  return channel;
}
function difference(channels, k1, k2) {
  const X12 = values(channels, k1);
  const X22 = values(channels, k2);
  return map2(X22, (x2, i) => Math.abs(x2 - X12[i]), Float64Array);
}
function values(channels, name, alias) {
  let channel = channels[name];
  if (!channel && alias !== void 0)
    channel = channels[alias];
  if (channel)
    return channel.value;
  throw new Error(`missing channel: ${name}`);
}
function maybeOrder(order) {
  if (order == null || typeof order === "function")
    return order;
  switch (`${order}`.toLowerCase()) {
    case "ascending":
      return ascendingGroup;
    case "descending":
      return descendingGroup;
  }
  throw new Error(`invalid order: ${order}`);
}
function ascendingGroup([ak, av], [bk, bv]) {
  return ascendingDefined2(av, bv) || ascendingDefined2(ak, bk);
}
function descendingGroup([ak, av], [bk, bv]) {
  return descendingDefined(av, bv) || ascendingDefined2(ak, bk);
}
function getSource(channels, key) {
  let channel = channels[key];
  if (!channel)
    return;
  while (channel.source)
    channel = channel.source;
  return channel.source === null ? null : channel;
}

// node_modules/@observablehq/plot/src/scales/schemes.js
var categoricalSchemes = /* @__PURE__ */ new Map([
  ["accent", Accent_default],
  ["category10", category10_default],
  ["dark2", Dark2_default],
  ["observable10", observable10_default],
  ["paired", Paired_default],
  ["pastel1", Pastel1_default],
  ["pastel2", Pastel2_default],
  ["set1", Set1_default],
  ["set2", Set2_default],
  ["set3", Set3_default],
  ["tableau10", Tableau10_default]
]);
function isCategoricalScheme(scheme28) {
  return scheme28 != null && categoricalSchemes.has(`${scheme28}`.toLowerCase());
}
var ordinalSchemes = new Map([
  ...categoricalSchemes,
  // diverging
  ["brbg", scheme112(scheme, BrBG_default)],
  ["prgn", scheme112(scheme2, PRGn_default)],
  ["piyg", scheme112(scheme3, PiYG_default)],
  ["puor", scheme112(scheme4, PuOr_default)],
  ["rdbu", scheme112(scheme5, RdBu_default)],
  ["rdgy", scheme112(scheme6, RdGy_default)],
  ["rdylbu", scheme112(scheme7, RdYlBu_default)],
  ["rdylgn", scheme112(scheme8, RdYlGn_default)],
  ["spectral", scheme112(scheme9, Spectral_default)],
  // reversed diverging (for temperature data)
  ["burd", scheme11r(scheme5, RdBu_default)],
  ["buylrd", scheme11r(scheme7, RdYlBu_default)],
  // sequential (single-hue)
  ["blues", scheme92(scheme22, Blues_default)],
  ["greens", scheme92(scheme23, Greens_default)],
  ["greys", scheme92(scheme24, Greys_default)],
  ["oranges", scheme92(scheme27, Oranges_default)],
  ["purples", scheme92(scheme25, Purples_default)],
  ["reds", scheme92(scheme26, Reds_default)],
  // sequential (multi-hue)
  ["turbo", schemei(turbo_default)],
  ["viridis", schemei(viridis_default)],
  ["magma", schemei(magma)],
  ["inferno", schemei(inferno)],
  ["plasma", schemei(plasma)],
  ["cividis", schemei(cividis_default)],
  ["cubehelix", schemei(cubehelix_default2)],
  ["warm", schemei(warm)],
  ["cool", schemei(cool)],
  ["bugn", scheme92(scheme10, BuGn_default)],
  ["bupu", scheme92(scheme11, BuPu_default)],
  ["gnbu", scheme92(scheme12, GnBu_default)],
  ["orrd", scheme92(scheme13, OrRd_default)],
  ["pubu", scheme92(scheme15, PuBu_default)],
  ["pubugn", scheme92(scheme14, PuBuGn_default)],
  ["purd", scheme92(scheme16, PuRd_default)],
  ["rdpu", scheme92(scheme17, RdPu_default)],
  ["ylgn", scheme92(scheme19, YlGn_default)],
  ["ylgnbu", scheme92(scheme18, YlGnBu_default)],
  ["ylorbr", scheme92(scheme20, YlOrBr_default)],
  ["ylorrd", scheme92(scheme21, YlOrRd_default)],
  // cyclical
  ["rainbow", schemeicyclical(rainbow_default)],
  ["sinebow", schemeicyclical(sinebow_default)]
]);
function scheme92(scheme28, interpolate) {
  return ({ length: n }) => {
    if (n === 1)
      return [scheme28[3][1]];
    if (n === 2)
      return [scheme28[3][1], scheme28[3][2]];
    n = Math.max(3, Math.floor(n));
    return n > 9 ? quantize_default(interpolate, n) : scheme28[n];
  };
}
function scheme112(scheme28, interpolate) {
  return ({ length: n }) => {
    if (n === 2)
      return [scheme28[3][0], scheme28[3][2]];
    n = Math.max(3, Math.floor(n));
    return n > 11 ? quantize_default(interpolate, n) : scheme28[n];
  };
}
function scheme11r(scheme28, interpolate) {
  return ({ length: n }) => {
    if (n === 2)
      return [scheme28[3][2], scheme28[3][0]];
    n = Math.max(3, Math.floor(n));
    return n > 11 ? quantize_default((t) => interpolate(1 - t), n) : scheme28[n].slice().reverse();
  };
}
function schemei(interpolate) {
  return ({ length: n }) => quantize_default(interpolate, Math.max(2, Math.floor(n)));
}
function schemeicyclical(interpolate) {
  return ({ length: n }) => quantize_default(interpolate, Math.floor(n) + 1).slice(0, -1);
}
function ordinalScheme(scheme28) {
  const s2 = `${scheme28}`.toLowerCase();
  if (!ordinalSchemes.has(s2))
    throw new Error(`unknown ordinal scheme: ${s2}`);
  return ordinalSchemes.get(s2);
}
function ordinalRange(scheme28, length3) {
  const s2 = ordinalScheme(scheme28);
  const r = typeof s2 === "function" ? s2({ length: length3 }) : s2;
  return r.length !== length3 ? r.slice(0, length3) : r;
}
function maybeBooleanRange(domain, scheme28 = "greys") {
  const range3 = /* @__PURE__ */ new Set();
  const [f, t] = ordinalRange(scheme28, 2);
  for (const value of domain) {
    if (value == null)
      continue;
    if (value === true)
      range3.add(t);
    else if (value === false)
      range3.add(f);
    else
      return;
  }
  return [...range3];
}
var quantitativeSchemes = /* @__PURE__ */ new Map([
  // diverging
  ["brbg", BrBG_default],
  ["prgn", PRGn_default],
  ["piyg", PiYG_default],
  ["puor", PuOr_default],
  ["rdbu", RdBu_default],
  ["rdgy", RdGy_default],
  ["rdylbu", RdYlBu_default],
  ["rdylgn", RdYlGn_default],
  ["spectral", Spectral_default],
  // reversed diverging (for temperature data)
  ["burd", (t) => RdBu_default(1 - t)],
  ["buylrd", (t) => RdYlBu_default(1 - t)],
  // sequential (single-hue)
  ["blues", Blues_default],
  ["greens", Greens_default],
  ["greys", Greys_default],
  ["purples", Purples_default],
  ["reds", Reds_default],
  ["oranges", Oranges_default],
  // sequential (multi-hue)
  ["turbo", turbo_default],
  ["viridis", viridis_default],
  ["magma", magma],
  ["inferno", inferno],
  ["plasma", plasma],
  ["cividis", cividis_default],
  ["cubehelix", cubehelix_default2],
  ["warm", warm],
  ["cool", cool],
  ["bugn", BuGn_default],
  ["bupu", BuPu_default],
  ["gnbu", GnBu_default],
  ["orrd", OrRd_default],
  ["pubugn", PuBuGn_default],
  ["pubu", PuBu_default],
  ["purd", PuRd_default],
  ["rdpu", RdPu_default],
  ["ylgnbu", YlGnBu_default],
  ["ylgn", YlGn_default],
  ["ylorbr", YlOrBr_default],
  ["ylorrd", YlOrRd_default],
  // cyclical
  ["rainbow", rainbow_default],
  ["sinebow", sinebow_default]
]);
function quantitativeScheme(scheme28) {
  const s2 = `${scheme28}`.toLowerCase();
  if (!quantitativeSchemes.has(s2))
    throw new Error(`unknown quantitative scheme: ${s2}`);
  return quantitativeSchemes.get(s2);
}
var divergingSchemes = /* @__PURE__ */ new Set([
  "brbg",
  "prgn",
  "piyg",
  "puor",
  "rdbu",
  "rdgy",
  "rdylbu",
  "rdylgn",
  "spectral",
  "burd",
  "buylrd"
]);
function isDivergingScheme(scheme28) {
  return scheme28 != null && divergingSchemes.has(`${scheme28}`.toLowerCase());
}

// node_modules/@observablehq/plot/src/scales/quantitative.js
var flip = (i) => (t) => i(1 - t);
var unit2 = [0, 1];
var interpolators = /* @__PURE__ */ new Map([
  // numbers
  ["number", number_default],
  // color spaces
  ["rgb", rgb_default],
  ["hsl", hsl_default],
  ["hcl", hcl_default],
  ["lab", lab2]
]);
function maybeInterpolator(interpolate) {
  const i = `${interpolate}`.toLowerCase();
  if (!interpolators.has(i))
    throw new Error(`unknown interpolator: ${i}`);
  return interpolators.get(i);
}
function createScaleQ(key, scale, channels, {
  type: type2,
  nice: nice2,
  clamp,
  zero: zero3,
  domain = inferAutoDomain(key, channels),
  unknown,
  round,
  scheme: scheme28,
  interval: interval2,
  range: range3 = registry.get(key) === radius ? inferRadialRange(channels, domain) : registry.get(key) === length2 ? inferLengthRange(channels, domain) : registry.get(key) === opacity ? unit2 : void 0,
  interpolate = registry.get(key) === color2 ? scheme28 == null && range3 !== void 0 ? rgb_default : quantitativeScheme(scheme28 !== void 0 ? scheme28 : type2 === "cyclical" ? "rainbow" : "turbo") : round ? round_default : number_default,
  reverse: reverse2
}) {
  interval2 = maybeRangeInterval(interval2, type2);
  if (type2 === "cyclical" || type2 === "sequential")
    type2 = "linear";
  if (typeof interpolate !== "function")
    interpolate = maybeInterpolator(interpolate);
  reverse2 = !!reverse2;
  if (range3 !== void 0) {
    const n = (domain = arrayify2(domain)).length;
    const m = (range3 = arrayify2(range3)).length;
    if (n !== m) {
      if (interpolate.length === 1)
        throw new Error("invalid piecewise interpolator");
      interpolate = piecewise(interpolate, range3);
      range3 = void 0;
    }
  }
  if (interpolate.length === 1) {
    if (reverse2) {
      interpolate = flip(interpolate);
      reverse2 = false;
    }
    if (range3 === void 0) {
      range3 = Float64Array.from(domain, (_, i) => i / (domain.length - 1));
      if (range3.length === 2)
        range3 = unit2;
    }
    scale.interpolate((range3 === unit2 ? constant : interpolatePiecewise)(interpolate));
  } else {
    scale.interpolate(interpolate);
  }
  if (zero3) {
    const [min4, max3] = extent(domain);
    if (min4 > 0 || max3 < 0) {
      domain = slice2(domain);
      const o = orderof(domain) || 1;
      if (o === Math.sign(min4))
        domain[0] = 0;
      else
        domain[domain.length - 1] = 0;
    }
  }
  if (reverse2)
    domain = reverse(domain);
  scale.domain(domain).unknown(unknown);
  if (nice2)
    scale.nice(maybeNice(nice2, type2)), domain = scale.domain();
  if (range3 !== void 0)
    scale.range(range3);
  if (clamp)
    scale.clamp(clamp);
  return { type: type2, domain, range: range3, scale, interpolate, interval: interval2 };
}
function maybeNice(nice2, type2) {
  return nice2 === true ? void 0 : typeof nice2 === "number" ? nice2 : maybeNiceInterval(nice2, type2);
}
function createScaleLinear(key, channels, options) {
  return createScaleQ(key, linear2(), channels, options);
}
function createScaleSqrt(key, channels, options) {
  return createScalePow(key, channels, { ...options, exponent: 0.5 });
}
function createScalePow(key, channels, { exponent = 1, ...options }) {
  return createScaleQ(key, pow2().exponent(exponent), channels, { ...options, type: "pow" });
}
function createScaleLog(key, channels, { base = 10, domain = inferLogDomain(channels), ...options }) {
  return createScaleQ(key, log2().base(base), channels, { ...options, domain });
}
function createScaleSymlog(key, channels, { constant: constant2 = 1, ...options }) {
  return createScaleQ(key, symlog().constant(constant2), channels, options);
}
function createScaleQuantile(key, channels, {
  range: range3,
  quantiles = range3 === void 0 ? 5 : (range3 = [...range3]).length,
  // deprecated; use n instead
  n = quantiles,
  scheme: scheme28 = "rdylbu",
  domain = inferQuantileDomain(channels),
  unknown,
  interpolate,
  reverse: reverse2
}) {
  if (range3 === void 0) {
    range3 = interpolate !== void 0 ? quantize_default(interpolate, n) : registry.get(key) === color2 ? ordinalRange(scheme28, n) : void 0;
  }
  if (domain.length > 0) {
    domain = quantile2(domain, range3 === void 0 ? { length: n } : range3).quantiles();
  }
  return createScaleThreshold(key, channels, { domain, range: range3, reverse: reverse2, unknown });
}
function createScaleQuantize(key, channels, {
  range: range3,
  n = range3 === void 0 ? 5 : (range3 = [...range3]).length,
  scheme: scheme28 = "rdylbu",
  domain = inferAutoDomain(key, channels),
  unknown,
  interpolate,
  reverse: reverse2
}) {
  const [min4, max3] = extent(domain);
  let thresholds;
  if (range3 === void 0) {
    thresholds = ticks(min4, max3, n);
    if (thresholds[0] <= min4)
      thresholds.splice(0, 1);
    if (thresholds[thresholds.length - 1] >= max3)
      thresholds.pop();
    n = thresholds.length + 1;
    range3 = interpolate !== void 0 ? quantize_default(interpolate, n) : registry.get(key) === color2 ? ordinalRange(scheme28, n) : void 0;
  } else {
    thresholds = quantize_default(number_default(min4, max3), n + 1).slice(1, -1);
    if (min4 instanceof Date)
      thresholds = thresholds.map((x2) => new Date(x2));
  }
  if (orderof(arrayify2(domain)) < 0)
    thresholds.reverse();
  return createScaleThreshold(key, channels, { domain: thresholds, range: range3, reverse: reverse2, unknown });
}
function createScaleThreshold(key, channels, {
  domain = [0],
  // explicit thresholds in ascending order
  unknown,
  scheme: scheme28 = "rdylbu",
  interpolate,
  range: range3 = interpolate !== void 0 ? quantize_default(interpolate, domain.length + 1) : registry.get(key) === color2 ? ordinalRange(scheme28, domain.length + 1) : void 0,
  reverse: reverse2
}) {
  domain = arrayify2(domain);
  const sign3 = orderof(domain);
  if (!isNaN(sign3) && !isOrdered(domain, sign3))
    throw new Error(`the ${key} scale has a non-monotonic domain`);
  if (reverse2)
    range3 = reverse(range3);
  return {
    type: "threshold",
    scale: threshold(sign3 < 0 ? reverse(domain) : domain, range3 === void 0 ? [] : range3).unknown(unknown),
    domain,
    range: range3
  };
}
function isOrdered(domain, sign3) {
  for (let i = 1, n = domain.length, d = domain[0]; i < n; ++i) {
    const s2 = descending(d, d = domain[i]);
    if (s2 !== 0 && s2 !== sign3)
      return false;
  }
  return true;
}
function createScaleIdentity(key) {
  return { type: "identity", scale: hasNumericRange(registry.get(key)) ? identity4() : (d) => d };
}
function inferDomain(channels, f = finite) {
  return channels.length ? [
    min(channels, ({ value }) => value === void 0 ? value : min(value, f)),
    max(channels, ({ value }) => value === void 0 ? value : max(value, f))
  ] : [0, 1];
}
function inferAutoDomain(key, channels) {
  const type2 = registry.get(key);
  return (type2 === radius || type2 === opacity || type2 === length2 ? inferZeroDomain : inferDomain)(channels);
}
function inferZeroDomain(channels) {
  return [0, channels.length ? max(channels, ({ value }) => value === void 0 ? value : max(value, finite)) : 1];
}
function inferRadialRange(channels, domain) {
  const hint = channels.find(({ radius: radius2 }) => radius2 !== void 0);
  if (hint !== void 0)
    return [0, hint.radius];
  const h25 = quantile(channels, 0.5, ({ value }) => value === void 0 ? NaN : quantile(value, 0.25, positive));
  const range3 = domain.map((d) => 3 * Math.sqrt(d / h25));
  const k2 = 30 / max(range3);
  return k2 < 1 ? range3.map((r) => r * k2) : range3;
}
function inferLengthRange(channels, domain) {
  const h50 = median(channels, ({ value }) => value === void 0 ? NaN : median(value, Math.abs));
  const range3 = domain.map((d) => 12 * d / h50);
  const k2 = 60 / max(range3);
  return k2 < 1 ? range3.map((r) => r * k2) : range3;
}
function inferLogDomain(channels) {
  for (const { value } of channels) {
    if (value !== void 0) {
      for (let v of value) {
        if (v > 0)
          return inferDomain(channels, positive);
        if (v < 0)
          return inferDomain(channels, negative);
      }
    }
  }
  return [1, 10];
}
function inferQuantileDomain(channels) {
  const domain = [];
  for (const { value } of channels) {
    if (value === void 0)
      continue;
    for (const v of value)
      domain.push(v);
  }
  return domain;
}
function interpolatePiecewise(interpolate) {
  return (i, j) => (t) => interpolate(i + t * (j - i));
}

// node_modules/@observablehq/plot/src/warnings.js
var warnings = 0;
var lastMessage;
function consumeWarnings() {
  const w = warnings;
  warnings = 0;
  lastMessage = void 0;
  return w;
}
function warn(message) {
  if (message === lastMessage)
    return;
  lastMessage = message;
  console.warn(message);
  ++warnings;
}

// node_modules/@observablehq/plot/src/scales/diverging.js
function createScaleD(key, scale, transform2, channels, {
  type: type2,
  nice: nice2,
  clamp,
  domain = inferDomain(channels),
  unknown,
  pivot = 0,
  scheme: scheme28,
  range: range3,
  symmetric = true,
  interpolate = registry.get(key) === color2 ? scheme28 == null && range3 !== void 0 ? rgb_default : quantitativeScheme(scheme28 !== void 0 ? scheme28 : "rdbu") : number_default,
  reverse: reverse2
}) {
  pivot = +pivot;
  domain = arrayify2(domain);
  let [min4, max3] = domain;
  if (domain.length > 2)
    warn(`Warning: the diverging ${key} scale domain contains extra elements.`);
  if (descending(min4, max3) < 0)
    [min4, max3] = [max3, min4], reverse2 = !reverse2;
  min4 = Math.min(min4, pivot);
  max3 = Math.max(max3, pivot);
  if (typeof interpolate !== "function") {
    interpolate = maybeInterpolator(interpolate);
  }
  if (range3 !== void 0) {
    interpolate = interpolate.length === 1 ? interpolatePiecewise(interpolate)(...range3) : piecewise(interpolate, range3);
  }
  if (reverse2)
    interpolate = flip(interpolate);
  if (symmetric) {
    const mid2 = transform2.apply(pivot);
    const mindelta = mid2 - transform2.apply(min4);
    const maxdelta = transform2.apply(max3) - mid2;
    if (mindelta < maxdelta)
      min4 = transform2.invert(mid2 - maxdelta);
    else if (mindelta > maxdelta)
      max3 = transform2.invert(mid2 + mindelta);
  }
  scale.domain([min4, pivot, max3]).unknown(unknown).interpolator(interpolate);
  if (clamp)
    scale.clamp(clamp);
  if (nice2)
    scale.nice(nice2);
  return { type: type2, domain: [min4, max3], pivot, interpolate, scale };
}
function createScaleDiverging(key, channels, options) {
  return createScaleD(key, diverging(), transformIdentity, channels, options);
}
function createScaleDivergingSqrt(key, channels, options) {
  return createScaleDivergingPow(key, channels, { ...options, exponent: 0.5 });
}
function createScaleDivergingPow(key, channels, { exponent = 1, ...options }) {
  return createScaleD(key, divergingPow().exponent(exponent = +exponent), transformPow2(exponent), channels, {
    ...options,
    type: "diverging-pow"
  });
}
function createScaleDivergingLog(key, channels, { base = 10, pivot = 1, domain = inferDomain(channels, pivot < 0 ? negative : positive), ...options }) {
  return createScaleD(key, divergingLog().base(base = +base), transformLog2, channels, {
    domain,
    pivot,
    ...options
  });
}
function createScaleDivergingSymlog(key, channels, { constant: constant2 = 1, ...options }) {
  return createScaleD(
    key,
    divergingSymlog().constant(constant2 = +constant2),
    transformSymlog2(constant2),
    channels,
    options
  );
}
var transformIdentity = {
  apply(x2) {
    return x2;
  },
  invert(x2) {
    return x2;
  }
};
var transformLog2 = {
  apply: Math.log,
  invert: Math.exp
};
var transformSqrt2 = {
  apply(x2) {
    return Math.sign(x2) * Math.sqrt(Math.abs(x2));
  },
  invert(x2) {
    return Math.sign(x2) * (x2 * x2);
  }
};
function transformPow2(exponent) {
  return exponent === 0.5 ? transformSqrt2 : {
    apply(x2) {
      return Math.sign(x2) * Math.pow(Math.abs(x2), exponent);
    },
    invert(x2) {
      return Math.sign(x2) * Math.pow(Math.abs(x2), 1 / exponent);
    }
  };
}
function transformSymlog2(constant2) {
  return {
    apply(x2) {
      return Math.sign(x2) * Math.log1p(Math.abs(x2 / constant2));
    },
    invert(x2) {
      return Math.sign(x2) * Math.expm1(Math.abs(x2)) * constant2;
    }
  };
}

// node_modules/@observablehq/plot/src/scales/temporal.js
function createScaleT(key, scale, channels, options) {
  return createScaleQ(key, scale, channels, options);
}
function createScaleTime(key, channels, options) {
  return createScaleT(key, time(), channels, options);
}
function createScaleUtc(key, channels, options) {
  return createScaleT(key, utcTime(), channels, options);
}

// node_modules/@observablehq/plot/src/scales/ordinal.js
var ordinalImplicit = Symbol("ordinal");
function createScaleO(key, scale, channels, { type: type2, interval: interval2, domain, range: range3, reverse: reverse2, hint }) {
  interval2 = maybeRangeInterval(interval2, type2);
  if (domain === void 0)
    domain = inferDomain2(channels, interval2, key);
  if (type2 === "categorical" || type2 === ordinalImplicit)
    type2 = "ordinal";
  if (reverse2)
    domain = reverse(domain);
  domain = scale.domain(domain).domain();
  if (range3 !== void 0) {
    if (typeof range3 === "function")
      range3 = range3(domain);
    scale.range(range3);
  }
  return { type: type2, domain, range: range3, scale, hint, interval: interval2 };
}
function createScaleOrdinal(key, channels, { type: type2, interval: interval2, domain, range: range3, scheme: scheme28, unknown, ...options }) {
  interval2 = maybeRangeInterval(interval2, type2);
  if (domain === void 0)
    domain = inferDomain2(channels, interval2, key);
  let hint;
  if (registry.get(key) === symbol) {
    hint = inferSymbolHint(channels);
    range3 = range3 === void 0 ? inferSymbolRange(hint) : map2(range3, maybeSymbol);
  } else if (registry.get(key) === color2) {
    if (range3 === void 0 && (type2 === "ordinal" || type2 === ordinalImplicit)) {
      range3 = maybeBooleanRange(domain, scheme28);
      if (range3 !== void 0)
        scheme28 = void 0;
    }
    if (scheme28 === void 0 && range3 === void 0) {
      scheme28 = type2 === "ordinal" ? "turbo" : "observable10";
    }
    if (scheme28 !== void 0) {
      if (range3 !== void 0) {
        const interpolate = quantitativeScheme(scheme28);
        const t03 = range3[0], d = range3[1] - range3[0];
        range3 = ({ length: n }) => quantize_default((t) => interpolate(t03 + d * t), n);
      } else {
        range3 = ordinalScheme(scheme28);
      }
    }
  }
  if (unknown === implicit) {
    throw new Error(`implicit unknown on ${key} scale is not supported`);
  }
  return createScaleO(key, ordinal().unknown(unknown), channels, { ...options, type: type2, domain, range: range3, hint });
}
function createScalePoint(key, channels, { align = 0.5, padding = 0.5, ...options }) {
  return maybeRound(point().align(align).padding(padding), channels, options, key);
}
function createScaleBand(key, channels, {
  align = 0.5,
  padding = 0.1,
  paddingInner = padding,
  paddingOuter = key === "fx" || key === "fy" ? 0 : padding,
  ...options
}) {
  return maybeRound(
    band().align(align).paddingInner(paddingInner).paddingOuter(paddingOuter),
    channels,
    options,
    key
  );
}
function maybeRound(scale, channels, options, key) {
  let { round } = options;
  if (round !== void 0)
    scale.round(round = !!round);
  scale = createScaleO(key, scale, channels, options);
  scale.round = round;
  return scale;
}
function inferDomain2(channels, interval2, key) {
  const values2 = new InternSet();
  for (const { value, domain } of channels) {
    if (domain !== void 0)
      return domain();
    if (value === void 0)
      continue;
    for (const v of value)
      values2.add(v);
  }
  if (interval2 !== void 0) {
    const [min4, max3] = extent(values2).map(interval2.floor, interval2);
    return interval2.range(min4, interval2.offset(max3));
  }
  if (values2.size > 1e4 && registry.get(key) === position) {
    throw new Error(`implicit ordinal domain of ${key} scale has more than 10,000 values`);
  }
  return sort(values2, ascendingDefined2);
}
function inferHint(channels, key) {
  let value;
  for (const { hint } of channels) {
    const candidate = hint?.[key];
    if (candidate === void 0)
      continue;
    if (value === void 0)
      value = candidate;
    else if (value !== candidate)
      return;
  }
  return value;
}
function inferSymbolHint(channels) {
  return {
    fill: inferHint(channels, "fill"),
    stroke: inferHint(channels, "stroke")
  };
}
function inferSymbolRange(hint) {
  return isNoneish(hint.fill) ? symbolsStroke : symbolsFill;
}

// node_modules/@observablehq/plot/src/scales.js
function createScales(channelsByScale, {
  label: globalLabel,
  inset: globalInset = 0,
  insetTop: globalInsetTop = globalInset,
  insetRight: globalInsetRight = globalInset,
  insetBottom: globalInsetBottom = globalInset,
  insetLeft: globalInsetLeft = globalInset,
  round,
  nice: nice2,
  clamp,
  zero: zero3,
  align,
  padding,
  projection: projection3,
  facet: { label: facetLabel = globalLabel } = {},
  ...options
} = {}) {
  const scales = {};
  for (const [key, channels] of channelsByScale) {
    const scaleOptions = options[key];
    const scale = createScale(key, channels, {
      round: registry.get(key) === position ? round : void 0,
      // only for position
      nice: nice2,
      clamp,
      zero: zero3,
      align,
      padding,
      projection: projection3,
      ...scaleOptions
    });
    if (scale) {
      let {
        label = key === "fx" || key === "fy" ? facetLabel : globalLabel,
        percent,
        transform: transform2,
        inset,
        insetTop = inset !== void 0 ? inset : key === "y" ? globalInsetTop : 0,
        // not fy
        insetRight = inset !== void 0 ? inset : key === "x" ? globalInsetRight : 0,
        // not fx
        insetBottom = inset !== void 0 ? inset : key === "y" ? globalInsetBottom : 0,
        // not fy
        insetLeft = inset !== void 0 ? inset : key === "x" ? globalInsetLeft : 0
        // not fx
      } = scaleOptions || {};
      if (transform2 == null)
        transform2 = void 0;
      else if (typeof transform2 !== "function")
        throw new Error("invalid scale transform; not a function");
      scale.percent = !!percent;
      scale.label = label === void 0 ? inferScaleLabel(channels, scale) : label;
      scale.transform = transform2;
      if (key === "x" || key === "fx") {
        scale.insetLeft = +insetLeft;
        scale.insetRight = +insetRight;
      } else if (key === "y" || key === "fy") {
        scale.insetTop = +insetTop;
        scale.insetBottom = +insetBottom;
      }
      scales[key] = scale;
    }
  }
  return scales;
}
function createScaleFunctions(descriptors) {
  const scales = {};
  const scaleFunctions = { scales };
  for (const [key, descriptor] of Object.entries(descriptors)) {
    const { scale, type: type2, interval: interval2, label } = descriptor;
    scales[key] = exposeScale(descriptor);
    scaleFunctions[key] = scale;
    scale.type = type2;
    if (interval2 != null)
      scale.interval = interval2;
    if (label != null)
      scale.label = label;
  }
  return scaleFunctions;
}
function autoScaleRange(scales, dimensions) {
  const { x: x2, y: y2, fx, fy } = scales;
  const superdimensions = fx || fy ? outerDimensions(dimensions) : dimensions;
  if (fx)
    autoScaleRangeX(fx, superdimensions);
  if (fy)
    autoScaleRangeY(fy, superdimensions);
  const subdimensions = fx || fy ? innerDimensions(scales, dimensions) : dimensions;
  if (x2)
    autoScaleRangeX(x2, subdimensions);
  if (y2)
    autoScaleRangeY(y2, subdimensions);
}
function inferScaleLabel(channels = [], scale) {
  let label;
  for (const { label: l } of channels) {
    if (l === void 0)
      continue;
    if (label === void 0)
      label = l;
    else if (label !== l)
      return;
  }
  if (label === void 0)
    return;
  if (!isOrdinalScale(scale) && scale.percent)
    label = `${label} (%)`;
  return { inferred: true, toString: () => label };
}
function inferScaleOrder(scale) {
  return Math.sign(orderof(scale.domain())) * Math.sign(orderof(scale.range()));
}
function outerDimensions(dimensions) {
  const {
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    width,
    height,
    facet: {
      marginTop: facetMarginTop,
      marginRight: facetMarginRight,
      marginBottom: facetMarginBottom,
      marginLeft: facetMarginLeft
    }
  } = dimensions;
  return {
    marginTop: Math.max(marginTop, facetMarginTop),
    marginRight: Math.max(marginRight, facetMarginRight),
    marginBottom: Math.max(marginBottom, facetMarginBottom),
    marginLeft: Math.max(marginLeft, facetMarginLeft),
    width,
    height
  };
}
function innerDimensions({ fx, fy }, dimensions) {
  const { marginTop, marginRight, marginBottom, marginLeft, width, height } = outerDimensions(dimensions);
  return {
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    width: fx ? fx.scale.bandwidth() + marginLeft + marginRight : width,
    height: fy ? fy.scale.bandwidth() + marginTop + marginBottom : height,
    facet: { width, height }
  };
}
function autoScaleRangeX(scale, dimensions) {
  if (scale.range === void 0) {
    const { insetLeft, insetRight } = scale;
    const { width, marginLeft = 0, marginRight = 0 } = dimensions;
    const left2 = marginLeft + insetLeft;
    const right2 = width - marginRight - insetRight;
    scale.range = [left2, Math.max(left2, right2)];
    if (!isOrdinalScale(scale))
      scale.range = piecewiseRange(scale);
    scale.scale.range(scale.range);
  }
  autoScaleRound(scale);
}
function autoScaleRangeY(scale, dimensions) {
  if (scale.range === void 0) {
    const { insetTop, insetBottom } = scale;
    const { height, marginTop = 0, marginBottom = 0 } = dimensions;
    const top2 = marginTop + insetTop;
    const bottom2 = height - marginBottom - insetBottom;
    scale.range = [Math.max(top2, bottom2), top2];
    if (!isOrdinalScale(scale))
      scale.range = piecewiseRange(scale);
    else
      scale.range.reverse();
    scale.scale.range(scale.range);
  }
  autoScaleRound(scale);
}
function autoScaleRound(scale) {
  if (scale.round === void 0 && isBandScale(scale) && roundError(scale) <= 30) {
    scale.scale.round(true);
  }
}
function roundError({ scale }) {
  const n = scale.domain().length;
  const [start2, stop] = scale.range();
  const paddingInner = scale.paddingInner ? scale.paddingInner() : 1;
  const paddingOuter = scale.paddingOuter ? scale.paddingOuter() : scale.padding();
  const m = n - paddingInner;
  const step = Math.abs(stop - start2) / Math.max(1, m + paddingOuter * 2);
  return (step - Math.floor(step)) * m;
}
function piecewiseRange(scale) {
  const length3 = scale.scale.domain().length + isThresholdScale(scale);
  if (!(length3 > 2))
    return scale.range;
  const [start2, end] = scale.range;
  return Array.from({ length: length3 }, (_, i) => start2 + i / (length3 - 1) * (end - start2));
}
function createScale(key, channels = [], options = {}) {
  const type2 = inferScaleType(key, channels, options);
  if (options.type === void 0 && options.domain === void 0 && options.range === void 0 && options.interval == null && key !== "fx" && key !== "fy" && isOrdinalScale({ type: type2 })) {
    const values2 = channels.map(({ value }) => value).filter((value) => value !== void 0);
    if (values2.some(isTemporal))
      warn(
        `Warning: some data associated with the ${key} scale are dates. Dates are typically associated with a "utc" or "time" scale rather than a "${formatScaleType(
          type2
        )}" scale. If you are using a bar mark, you probably want a rect mark with the interval option instead; if you are using a group transform, you probably want a bin transform instead. If you want to treat this data as ordinal, you can specify the interval of the ${key} scale (e.g., d3.utcDay), or you can suppress this warning by setting the type of the ${key} scale to "${formatScaleType(
          type2
        )}".`
      );
    else if (values2.some(isTemporalString))
      warn(
        `Warning: some data associated with the ${key} scale are strings that appear to be dates (e.g., YYYY-MM-DD). If these strings represent dates, you should parse them to Date objects. Dates are typically associated with a "utc" or "time" scale rather than a "${formatScaleType(
          type2
        )}" scale. If you are using a bar mark, you probably want a rect mark with the interval option instead; if you are using a group transform, you probably want a bin transform instead. If you want to treat this data as ordinal, you can suppress this warning by setting the type of the ${key} scale to "${formatScaleType(
          type2
        )}".`
      );
    else if (values2.some(isNumericString))
      warn(
        `Warning: some data associated with the ${key} scale are strings that appear to be numbers. If these strings represent numbers, you should parse or coerce them to numbers. Numbers are typically associated with a "linear" scale rather than a "${formatScaleType(
          type2
        )}" scale. If you want to treat this data as ordinal, you can specify the interval of the ${key} scale (e.g., 1 for integers), or you can suppress this warning by setting the type of the ${key} scale to "${formatScaleType(
          type2
        )}".`
      );
  }
  options.type = type2;
  switch (type2) {
    case "diverging":
    case "diverging-sqrt":
    case "diverging-pow":
    case "diverging-log":
    case "diverging-symlog":
    case "cyclical":
    case "sequential":
    case "linear":
    case "sqrt":
    case "threshold":
    case "quantile":
    case "pow":
    case "log":
    case "symlog":
      options = coerceType(channels, options, coerceNumbers);
      break;
    case "identity":
      switch (registry.get(key)) {
        case position:
          options = coerceType(channels, options, coerceNumbers);
          break;
        case symbol:
          options = coerceType(channels, options, coerceSymbols);
          break;
      }
      break;
    case "utc":
    case "time":
      options = coerceType(channels, options, coerceDates);
      break;
  }
  switch (type2) {
    case "diverging":
      return createScaleDiverging(key, channels, options);
    case "diverging-sqrt":
      return createScaleDivergingSqrt(key, channels, options);
    case "diverging-pow":
      return createScaleDivergingPow(key, channels, options);
    case "diverging-log":
      return createScaleDivergingLog(key, channels, options);
    case "diverging-symlog":
      return createScaleDivergingSymlog(key, channels, options);
    case "categorical":
    case "ordinal":
    case ordinalImplicit:
      return createScaleOrdinal(key, channels, options);
    case "cyclical":
    case "sequential":
    case "linear":
      return createScaleLinear(key, channels, options);
    case "sqrt":
      return createScaleSqrt(key, channels, options);
    case "threshold":
      return createScaleThreshold(key, channels, options);
    case "quantile":
      return createScaleQuantile(key, channels, options);
    case "quantize":
      return createScaleQuantize(key, channels, options);
    case "pow":
      return createScalePow(key, channels, options);
    case "log":
      return createScaleLog(key, channels, options);
    case "symlog":
      return createScaleSymlog(key, channels, options);
    case "utc":
      return createScaleUtc(key, channels, options);
    case "time":
      return createScaleTime(key, channels, options);
    case "point":
      return createScalePoint(key, channels, options);
    case "band":
      return createScaleBand(key, channels, options);
    case "identity":
      return createScaleIdentity(key);
    case void 0:
      return;
    default:
      throw new Error(`unknown scale type: ${type2}`);
  }
}
function formatScaleType(type2) {
  return typeof type2 === "symbol" ? type2.description : type2;
}
function maybeScaleType(type2) {
  return typeof type2 === "string" ? `${type2}`.toLowerCase() : type2;
}
var typeProjection = { toString: () => "projection" };
function inferScaleType(key, channels, { type: type2, domain, range: range3, scheme: scheme28, pivot, projection: projection3 }) {
  type2 = maybeScaleType(type2);
  if (key === "fx" || key === "fy")
    return "band";
  if ((key === "x" || key === "y") && projection3 != null)
    type2 = typeProjection;
  for (const channel of channels) {
    const t = maybeScaleType(channel.type);
    if (t === void 0)
      continue;
    else if (type2 === void 0)
      type2 = t;
    else if (type2 !== t)
      throw new Error(`scale incompatible with channel: ${type2} !== ${t}`);
  }
  if (type2 === typeProjection)
    return;
  if (type2 !== void 0)
    return type2;
  if (domain === void 0 && !channels.some(({ value }) => value !== void 0))
    return;
  const kind = registry.get(key);
  if (kind === radius)
    return "sqrt";
  if (kind === opacity || kind === length2)
    return "linear";
  if (kind === symbol)
    return "ordinal";
  if ((domain || range3 || []).length > 2)
    return asOrdinalType(kind);
  if (domain !== void 0) {
    if (isOrdinal(domain))
      return asOrdinalType(kind);
    if (isTemporal(domain))
      return "utc";
  } else {
    const values2 = channels.map(({ value }) => value).filter((value) => value !== void 0);
    if (values2.some(isOrdinal))
      return asOrdinalType(kind);
    if (values2.some(isTemporal))
      return "utc";
  }
  if (kind === color2) {
    if (pivot != null || isDivergingScheme(scheme28))
      return "diverging";
    if (isCategoricalScheme(scheme28))
      return "categorical";
  }
  return "linear";
}
function asOrdinalType(kind) {
  switch (kind) {
    case position:
      return "point";
    case color2:
      return ordinalImplicit;
    default:
      return "ordinal";
  }
}
function isOrdinalScale({ type: type2 }) {
  return type2 === "ordinal" || type2 === "point" || type2 === "band" || type2 === ordinalImplicit;
}
function isThresholdScale({ type: type2 }) {
  return type2 === "threshold";
}
function isBandScale({ type: type2 }) {
  return type2 === "point" || type2 === "band";
}
function isCollapsed(scale) {
  if (scale === void 0)
    return true;
  const domain = scale.domain();
  const value = scale(domain[0]);
  for (let i = 1, n = domain.length; i < n; ++i) {
    if (scale(domain[i]) - value) {
      return false;
    }
  }
  return true;
}
function coerceType(channels, { domain, ...options }, coerceValues) {
  for (const c4 of channels) {
    if (c4.value !== void 0) {
      if (domain === void 0)
        domain = c4.value?.domain;
      c4.value = coerceValues(c4.value);
    }
  }
  return {
    domain: domain === void 0 ? domain : coerceValues(domain),
    ...options
  };
}
function coerceSymbols(values2) {
  return map2(values2, maybeSymbol);
}
function exposeScales(scales) {
  return (key) => {
    if (!registry.has(key = `${key}`))
      throw new Error(`unknown scale: ${key}`);
    return scales[key];
  };
}
function exposeScale({ scale, type: type2, domain, range: range3, interpolate, interval: interval2, transform: transform2, percent, pivot }) {
  if (type2 === "identity")
    return { type: "identity", apply: (d) => d, invert: (d) => d };
  const unknown = scale.unknown ? scale.unknown() : void 0;
  return {
    type: type2,
    domain: slice2(domain),
    // defensive copy
    ...range3 !== void 0 && { range: slice2(range3) },
    // defensive copy
    ...transform2 !== void 0 && { transform: transform2 },
    ...percent && { percent },
    // only exposed if truthy
    ...unknown !== void 0 && { unknown },
    ...interval2 !== void 0 && { interval: interval2 },
    // quantitative
    ...interpolate !== void 0 && { interpolate },
    ...scale.clamp && { clamp: scale.clamp() },
    // diverging (always asymmetric; we never want to apply the symmetric transform twice)
    ...pivot !== void 0 && { pivot, symmetric: false },
    // log, diverging-log
    ...scale.base && { base: scale.base() },
    // pow, diverging-pow
    ...scale.exponent && { exponent: scale.exponent() },
    // symlog, diverging-symlog
    ...scale.constant && { constant: scale.constant() },
    // band, point
    ...scale.align && { align: scale.align(), round: scale.round() },
    ...scale.padding && (scale.paddingInner ? { paddingInner: scale.paddingInner(), paddingOuter: scale.paddingOuter() } : { padding: scale.padding() }),
    ...scale.bandwidth && { bandwidth: scale.bandwidth(), step: scale.step() },
    // utilities
    apply: (t) => scale(t),
    ...scale.invert && { invert: (t) => scale.invert(t) }
  };
}

// node_modules/@observablehq/plot/src/facet.js
function createFacets(channelsByScale, options) {
  const { fx, fy } = createScales(channelsByScale, options);
  const fxDomain = fx?.scale.domain();
  const fyDomain = fy?.scale.domain();
  return fxDomain && fyDomain ? cross(fxDomain, fyDomain).map(([x2, y2], i) => ({ x: x2, y: y2, i })) : fxDomain ? fxDomain.map((x2, i) => ({ x: x2, i })) : fyDomain ? fyDomain.map((y2, i) => ({ y: y2, i })) : void 0;
}
function recreateFacets(facets, { x: X3, y: Y3 }) {
  X3 &&= facetIndex(X3);
  Y3 &&= facetIndex(Y3);
  return facets.filter(
    X3 && Y3 ? (f) => X3.has(f.x) && Y3.has(f.y) : X3 ? (f) => X3.has(f.x) : (f) => Y3.has(f.y)
  ).sort(
    X3 && Y3 ? (a2, b) => X3.get(a2.x) - X3.get(b.x) || Y3.get(a2.y) - Y3.get(b.y) : X3 ? (a2, b) => X3.get(a2.x) - X3.get(b.x) : (a2, b) => Y3.get(a2.y) - Y3.get(b.y)
  );
}
function facetGroups(data, { fx, fy }) {
  const I = range2(data);
  const FX = fx?.value;
  const FY = fy?.value;
  return fx && fy ? rollup(
    I,
    (G) => (G.fx = FX[G[0]], G.fy = FY[G[0]], G),
    (i) => FX[i],
    (i) => FY[i]
  ) : fx ? rollup(
    I,
    (G) => (G.fx = FX[G[0]], G),
    (i) => FX[i]
  ) : rollup(
    I,
    (G) => (G.fy = FY[G[0]], G),
    (i) => FY[i]
  );
}
function facetTranslator(fx, fy, { marginTop, marginLeft }) {
  return fx && fy ? ({ x: x2, y: y2 }) => `translate(${fx(x2) - marginLeft},${fy(y2) - marginTop})` : fx ? ({ x: x2 }) => `translate(${fx(x2) - marginLeft},0)` : ({ y: y2 }) => `translate(0,${fy(y2) - marginTop})`;
}
function facetExclude(index2) {
  const ex = [];
  const e = new Uint32Array(sum(index2, (d) => d.length));
  for (const i of index2) {
    let n = 0;
    for (const j of index2) {
      if (i === j)
        continue;
      e.set(j, n);
      n += j.length;
    }
    ex.push(e.slice(0, n));
  }
  return ex;
}
var facetAnchors = /* @__PURE__ */ new Map([
  ["top", facetAnchorTop],
  ["right", facetAnchorRight],
  ["bottom", facetAnchorBottom],
  ["left", facetAnchorLeft],
  ["top-left", and(facetAnchorTop, facetAnchorLeft)],
  ["top-right", and(facetAnchorTop, facetAnchorRight)],
  ["bottom-left", and(facetAnchorBottom, facetAnchorLeft)],
  ["bottom-right", and(facetAnchorBottom, facetAnchorRight)],
  ["top-empty", facetAnchorTopEmpty],
  ["right-empty", facetAnchorRightEmpty],
  ["bottom-empty", facetAnchorBottomEmpty],
  ["left-empty", facetAnchorLeftEmpty],
  ["empty", facetAnchorEmpty]
]);
function maybeFacetAnchor(facetAnchor) {
  if (facetAnchor == null)
    return null;
  const anchor = facetAnchors.get(`${facetAnchor}`.toLowerCase());
  if (anchor)
    return anchor;
  throw new Error(`invalid facet anchor: ${facetAnchor}`);
}
var indexCache = /* @__PURE__ */ new WeakMap();
function facetIndex(V) {
  let I = indexCache.get(V);
  if (!I)
    indexCache.set(V, I = new InternMap(map2(V, (v, i) => [v, i])));
  return I;
}
function facetIndexOf(V, v) {
  return facetIndex(V).get(v);
}
function facetFind(facets, x2, y2) {
  x2 = keyof2(x2);
  y2 = keyof2(y2);
  return facets.find((f) => Object.is(keyof2(f.x), x2) && Object.is(keyof2(f.y), y2));
}
function facetEmpty(facets, x2, y2) {
  return facetFind(facets, x2, y2)?.empty;
}
function facetAnchorTop(facets, { y: Y3 }, { y: y2 }) {
  return Y3 ? facetIndexOf(Y3, y2) === 0 : true;
}
function facetAnchorBottom(facets, { y: Y3 }, { y: y2 }) {
  return Y3 ? facetIndexOf(Y3, y2) === Y3.length - 1 : true;
}
function facetAnchorLeft(facets, { x: X3 }, { x: x2 }) {
  return X3 ? facetIndexOf(X3, x2) === 0 : true;
}
function facetAnchorRight(facets, { x: X3 }, { x: x2 }) {
  return X3 ? facetIndexOf(X3, x2) === X3.length - 1 : true;
}
function facetAnchorTopEmpty(facets, { y: Y3 }, { x: x2, y: y2, empty: empty3 }) {
  if (empty3)
    return false;
  if (!Y3)
    return;
  const i = facetIndexOf(Y3, y2);
  if (i > 0)
    return facetEmpty(facets, x2, Y3[i - 1]);
}
function facetAnchorBottomEmpty(facets, { y: Y3 }, { x: x2, y: y2, empty: empty3 }) {
  if (empty3)
    return false;
  if (!Y3)
    return;
  const i = facetIndexOf(Y3, y2);
  if (i < Y3.length - 1)
    return facetEmpty(facets, x2, Y3[i + 1]);
}
function facetAnchorLeftEmpty(facets, { x: X3 }, { x: x2, y: y2, empty: empty3 }) {
  if (empty3)
    return false;
  if (!X3)
    return;
  const i = facetIndexOf(X3, x2);
  if (i > 0)
    return facetEmpty(facets, X3[i - 1], y2);
}
function facetAnchorRightEmpty(facets, { x: X3 }, { x: x2, y: y2, empty: empty3 }) {
  if (empty3)
    return false;
  if (!X3)
    return;
  const i = facetIndexOf(X3, x2);
  if (i < X3.length - 1)
    return facetEmpty(facets, X3[i + 1], y2);
}
function facetAnchorEmpty(facets, channels, { empty: empty3 }) {
  return empty3;
}
function and(a2, b) {
  return function() {
    return a2.apply(null, arguments) && b.apply(null, arguments);
  };
}
function facetFilter(facets, { channels: { fx, fy }, groups: groups2 }) {
  return fx && fy ? facets.map(({ x: x2, y: y2 }) => groups2.get(x2)?.get(y2) ?? []) : fx ? facets.map(({ x: x2 }) => groups2.get(x2) ?? []) : facets.map(({ y: y2 }) => groups2.get(y2) ?? []);
}

// node_modules/@observablehq/plot/src/projection.js
var pi4 = Math.PI;
var tau4 = 2 * pi4;
var defaultAspectRatio = 0.618;
function createProjection({
  projection: projection3,
  inset: globalInset = 0,
  insetTop = globalInset,
  insetRight = globalInset,
  insetBottom = globalInset,
  insetLeft = globalInset
} = {}, dimensions) {
  if (projection3 == null)
    return;
  if (typeof projection3.stream === "function")
    return projection3;
  let options;
  let domain;
  let clip = "frame";
  if (isObject(projection3)) {
    let inset;
    ({
      type: projection3,
      domain,
      inset,
      insetTop = inset !== void 0 ? inset : insetTop,
      insetRight = inset !== void 0 ? inset : insetRight,
      insetBottom = inset !== void 0 ? inset : insetBottom,
      insetLeft = inset !== void 0 ? inset : insetLeft,
      clip = clip,
      ...options
    } = projection3);
    if (projection3 == null)
      return;
  }
  if (typeof projection3 !== "function")
    ({ type: projection3 } = namedProjection(projection3));
  const { width, height, marginLeft, marginRight, marginTop, marginBottom } = dimensions;
  const dx = width - marginLeft - marginRight - insetLeft - insetRight;
  const dy = height - marginTop - marginBottom - insetTop - insetBottom;
  projection3 = projection3?.({ width: dx, height: dy, clip, ...options });
  if (projection3 == null)
    return;
  clip = maybePostClip(clip, marginLeft, marginTop, width - marginRight, height - marginBottom);
  let tx = marginLeft + insetLeft;
  let ty = marginTop + insetTop;
  let transform2;
  if (domain != null) {
    const [[x05, y05], [x12, y12]] = path_default(projection3).bounds(domain);
    const k2 = Math.min(dx / (x12 - x05), dy / (y12 - y05));
    if (k2 > 0) {
      tx -= (k2 * (x05 + x12) - dx) / 2;
      ty -= (k2 * (y05 + y12) - dy) / 2;
      transform2 = transform_default({
        point(x2, y2) {
          this.stream.point(x2 * k2 + tx, y2 * k2 + ty);
        }
      });
    } else {
      warn(`Warning: the projection could not be fit to the specified domain; using the default scale.`);
    }
  }
  transform2 ??= tx === 0 && ty === 0 ? identity7() : transform_default({
    point(x2, y2) {
      this.stream.point(x2 + tx, y2 + ty);
    }
  });
  return { stream: (s2) => projection3.stream(transform2.stream(clip(s2))) };
}
function namedProjection(projection3) {
  switch (`${projection3}`.toLowerCase()) {
    case "albers-usa":
      return scaleProjection(albersUsa_default, 0.7463, 0.4673);
    case "albers":
      return conicProjection2(albers_default, 0.7463, 0.4673);
    case "azimuthal-equal-area":
      return scaleProjection(azimuthalEqualArea_default, 4, 4);
    case "azimuthal-equidistant":
      return scaleProjection(azimuthalEquidistant_default, tau4, tau4);
    case "conic-conformal":
      return conicProjection2(conicConformal_default, tau4, tau4);
    case "conic-equal-area":
      return conicProjection2(conicEqualArea_default, 6.1702, 2.9781);
    case "conic-equidistant":
      return conicProjection2(conicEquidistant_default, 7.312, 3.6282);
    case "equal-earth":
      return scaleProjection(equalEarth_default, 5.4133, 2.6347);
    case "equirectangular":
      return scaleProjection(equirectangular_default, tau4, pi4);
    case "gnomonic":
      return scaleProjection(gnomonic_default, 3.4641, 3.4641);
    case "identity":
      return { type: identity7 };
    case "reflect-y":
      return { type: reflectY };
    case "mercator":
      return scaleProjection(mercator_default, tau4, tau4);
    case "orthographic":
      return scaleProjection(orthographic_default, 2, 2);
    case "stereographic":
      return scaleProjection(stereographic_default, 2, 2);
    case "transverse-mercator":
      return scaleProjection(transverseMercator_default, tau4, tau4);
    default:
      throw new Error(`unknown projection type: ${projection3}`);
  }
}
function maybePostClip(clip, x12, y12, x2, y2) {
  if (clip === false || clip == null || typeof clip === "number")
    return (s2) => s2;
  if (clip === true)
    clip = "frame";
  switch (`${clip}`.toLowerCase()) {
    case "frame":
      return clipRectangle(x12, y12, x2, y2);
    default:
      throw new Error(`unknown projection clip type: ${clip}`);
  }
}
function scaleProjection(createProjection2, kx2, ky2) {
  return {
    type: ({ width, height, rotate, precision = 0.15, clip }) => {
      const projection3 = createProjection2();
      if (precision != null)
        projection3.precision?.(precision);
      if (rotate != null)
        projection3.rotate?.(rotate);
      if (typeof clip === "number")
        projection3.clipAngle?.(clip);
      projection3.scale(Math.min(width / kx2, height / ky2));
      projection3.translate([width / 2, height / 2]);
      return projection3;
    },
    aspectRatio: ky2 / kx2
  };
}
function conicProjection2(createProjection2, kx2, ky2) {
  const { type: type2, aspectRatio } = scaleProjection(createProjection2, kx2, ky2);
  return {
    type: (options) => {
      const { parallels, domain, width, height } = options;
      const projection3 = type2(options);
      if (parallels != null) {
        projection3.parallels(parallels);
        if (domain === void 0) {
          projection3.fitSize([width, height], { type: "Sphere" });
        }
      }
      return projection3;
    },
    aspectRatio
  };
}
var identity7 = constant({ stream: (stream) => stream });
var reflectY = constant(
  transform_default({
    point(x2, y2) {
      this.stream.point(x2, -y2);
    }
  })
);
function project(cx, cy, values2, projection3) {
  const x2 = values2[cx];
  const y2 = values2[cy];
  const n = x2.length;
  const X3 = values2[cx] = new Float64Array(n).fill(NaN);
  const Y3 = values2[cy] = new Float64Array(n).fill(NaN);
  let i;
  const stream = projection3.stream({
    point(x3, y3) {
      X3[i] = x3;
      Y3[i] = y3;
    }
  });
  for (i = 0; i < n; ++i) {
    stream.point(x2[i], y2[i]);
  }
}
function hasProjection({ projection: projection3 } = {}) {
  if (projection3 == null)
    return false;
  if (typeof projection3.stream === "function")
    return true;
  if (isObject(projection3))
    projection3 = projection3.type;
  return projection3 != null;
}
function projectionAspectRatio(projection3) {
  if (typeof projection3?.stream === "function")
    return defaultAspectRatio;
  if (isObject(projection3))
    projection3 = projection3.type;
  if (projection3 == null)
    return;
  if (typeof projection3 !== "function") {
    const { aspectRatio } = namedProjection(projection3);
    if (aspectRatio)
      return aspectRatio;
  }
  return defaultAspectRatio;
}
function getGeometryChannels(channel) {
  const X3 = [];
  const Y3 = [];
  const x2 = { scale: "x", value: X3 };
  const y2 = { scale: "y", value: Y3 };
  const sink = {
    point(x3, y3) {
      X3.push(x3);
      Y3.push(y3);
    },
    lineStart() {
    },
    lineEnd() {
    },
    polygonStart() {
    },
    polygonEnd() {
    },
    sphere() {
    }
  };
  for (const object of channel.value)
    stream_default(object, sink);
  return [x2, y2];
}

// node_modules/@observablehq/plot/src/context.js
function createContext(options = {}) {
  const { document: document2 = typeof window !== "undefined" ? window.document : void 0, clip } = options;
  return { document: document2, clip: maybeClip(clip) };
}
function create2(name, { document: document2 }) {
  return select_default2(creator_default(name).call(document2.documentElement));
}

// node_modules/@observablehq/plot/src/memoize.js
function memoize1(compute) {
  let cacheValue, cacheKeys;
  return (...keys) => {
    if (cacheKeys?.length !== keys.length || cacheKeys.some((k2, i) => k2 !== keys[i])) {
      cacheKeys = keys;
      cacheValue = compute(...keys);
    }
    return cacheValue;
  };
}

// node_modules/@observablehq/plot/src/format.js
var numberFormat = memoize1((locale3) => {
  return new Intl.NumberFormat(locale3);
});
var monthFormat = memoize1((locale3, month) => {
  return new Intl.DateTimeFormat(locale3, { timeZone: "UTC", ...month && { month } });
});
var weekdayFormat = memoize1((locale3, weekday) => {
  return new Intl.DateTimeFormat(locale3, { timeZone: "UTC", ...weekday && { weekday } });
});
function formatNumber(locale3 = "en-US") {
  const format3 = numberFormat(locale3);
  return (i) => i != null && !isNaN(i) ? format3.format(i) : void 0;
}
function formatIsoDate(date2) {
  return format2(date2, "Invalid Date");
}
function formatAuto(locale3 = "en-US") {
  const number6 = formatNumber(locale3);
  return (v) => (v instanceof Date ? formatIsoDate : typeof v === "number" ? number6 : string)(v);
}
var formatDefault = formatAuto();

// node_modules/@observablehq/plot/src/style.js
var offset = (typeof window !== "undefined" ? window.devicePixelRatio > 1 : typeof it === "undefined") ? 0 : 0.5;
var nextClipId = 0;
function getClipId() {
  return `plot-clip-${++nextClipId}`;
}
function styles(mark, {
  title,
  href,
  ariaLabel: variaLabel,
  ariaDescription,
  ariaHidden,
  target,
  fill,
  fillOpacity,
  stroke,
  strokeWidth,
  strokeOpacity,
  strokeLinejoin,
  strokeLinecap,
  strokeMiterlimit,
  strokeDasharray,
  strokeDashoffset,
  opacity: opacity2,
  mixBlendMode,
  imageFilter,
  paintOrder,
  pointerEvents,
  shapeRendering,
  channels
}, {
  ariaLabel: cariaLabel,
  fill: defaultFill = "currentColor",
  fillOpacity: defaultFillOpacity,
  stroke: defaultStroke = "none",
  strokeOpacity: defaultStrokeOpacity,
  strokeWidth: defaultStrokeWidth,
  strokeLinecap: defaultStrokeLinecap,
  strokeLinejoin: defaultStrokeLinejoin,
  strokeMiterlimit: defaultStrokeMiterlimit,
  paintOrder: defaultPaintOrder
}) {
  if (defaultFill === null) {
    fill = null;
    fillOpacity = null;
  }
  if (defaultStroke === null) {
    stroke = null;
    strokeOpacity = null;
  }
  if (isNoneish(defaultFill)) {
    if (!isNoneish(defaultStroke) && (!isNoneish(fill) || channels?.fill))
      defaultStroke = "none";
  } else {
    if (isNoneish(defaultStroke) && (!isNoneish(stroke) || channels?.stroke))
      defaultFill = "none";
  }
  const [vfill, cfill] = maybeColorChannel(fill, defaultFill);
  const [vfillOpacity, cfillOpacity] = maybeNumberChannel(fillOpacity, defaultFillOpacity);
  const [vstroke, cstroke] = maybeColorChannel(stroke, defaultStroke);
  const [vstrokeOpacity, cstrokeOpacity] = maybeNumberChannel(strokeOpacity, defaultStrokeOpacity);
  const [vopacity, copacity] = maybeNumberChannel(opacity2);
  if (!isNone(cstroke)) {
    if (strokeWidth === void 0)
      strokeWidth = defaultStrokeWidth;
    if (strokeLinecap === void 0)
      strokeLinecap = defaultStrokeLinecap;
    if (strokeLinejoin === void 0)
      strokeLinejoin = defaultStrokeLinejoin;
    if (strokeMiterlimit === void 0 && !isRound(strokeLinejoin))
      strokeMiterlimit = defaultStrokeMiterlimit;
    if (!isNone(cfill) && paintOrder === void 0)
      paintOrder = defaultPaintOrder;
  }
  const [vstrokeWidth, cstrokeWidth] = maybeNumberChannel(strokeWidth);
  if (defaultFill !== null) {
    mark.fill = impliedString(cfill, "currentColor");
    mark.fillOpacity = impliedNumber(cfillOpacity, 1);
  }
  if (defaultStroke !== null) {
    mark.stroke = impliedString(cstroke, "none");
    mark.strokeWidth = impliedNumber(cstrokeWidth, 1);
    mark.strokeOpacity = impliedNumber(cstrokeOpacity, 1);
    mark.strokeLinejoin = impliedString(strokeLinejoin, "miter");
    mark.strokeLinecap = impliedString(strokeLinecap, "butt");
    mark.strokeMiterlimit = impliedNumber(strokeMiterlimit, 4);
    mark.strokeDasharray = impliedString(strokeDasharray, "none");
    mark.strokeDashoffset = impliedString(strokeDashoffset, "0");
  }
  mark.target = string(target);
  mark.ariaLabel = string(cariaLabel);
  mark.ariaDescription = string(ariaDescription);
  mark.ariaHidden = string(ariaHidden);
  mark.opacity = impliedNumber(copacity, 1);
  mark.mixBlendMode = impliedString(mixBlendMode, "normal");
  mark.imageFilter = impliedString(imageFilter, "none");
  mark.paintOrder = impliedString(paintOrder, "normal");
  mark.pointerEvents = impliedString(pointerEvents, "auto");
  mark.shapeRendering = impliedString(shapeRendering, "auto");
  return {
    title: { value: title, optional: true, filter: null },
    href: { value: href, optional: true, filter: null },
    ariaLabel: { value: variaLabel, optional: true, filter: null },
    fill: { value: vfill, scale: "auto", optional: true },
    fillOpacity: { value: vfillOpacity, scale: "auto", optional: true },
    stroke: { value: vstroke, scale: "auto", optional: true },
    strokeOpacity: { value: vstrokeOpacity, scale: "auto", optional: true },
    strokeWidth: { value: vstrokeWidth, optional: true },
    opacity: { value: vopacity, scale: "auto", optional: true }
  };
}
function applyTitle(selection2, L) {
  if (L)
    selection2.filter((i) => nonempty(L[i])).append("title").call(applyText, L);
}
function applyTitleGroup(selection2, L) {
  if (L)
    selection2.filter(([i]) => nonempty(L[i])).append("title").call(applyTextGroup, L);
}
function applyText(selection2, T) {
  if (T)
    selection2.text((i) => formatDefault(T[i]));
}
function applyTextGroup(selection2, T) {
  if (T)
    selection2.text(([i]) => formatDefault(T[i]));
}
function applyChannelStyles(selection2, { target, tip: tip2 }, {
  ariaLabel: AL,
  title: T,
  fill: F,
  fillOpacity: FO,
  stroke: S,
  strokeOpacity: SO,
  strokeWidth: SW,
  opacity: O,
  href: H
}) {
  if (AL)
    applyAttr(selection2, "aria-label", (i) => AL[i]);
  if (F)
    applyAttr(selection2, "fill", (i) => F[i]);
  if (FO)
    applyAttr(selection2, "fill-opacity", (i) => FO[i]);
  if (S)
    applyAttr(selection2, "stroke", (i) => S[i]);
  if (SO)
    applyAttr(selection2, "stroke-opacity", (i) => SO[i]);
  if (SW)
    applyAttr(selection2, "stroke-width", (i) => SW[i]);
  if (O)
    applyAttr(selection2, "opacity", (i) => O[i]);
  if (H)
    applyHref(selection2, (i) => H[i], target);
  if (!tip2)
    applyTitle(selection2, T);
}
function applyGroupedChannelStyles(selection2, { target, tip: tip2 }, {
  ariaLabel: AL,
  title: T,
  fill: F,
  fillOpacity: FO,
  stroke: S,
  strokeOpacity: SO,
  strokeWidth: SW,
  opacity: O,
  href: H
}) {
  if (AL)
    applyAttr(selection2, "aria-label", ([i]) => AL[i]);
  if (F)
    applyAttr(selection2, "fill", ([i]) => F[i]);
  if (FO)
    applyAttr(selection2, "fill-opacity", ([i]) => FO[i]);
  if (S)
    applyAttr(selection2, "stroke", ([i]) => S[i]);
  if (SO)
    applyAttr(selection2, "stroke-opacity", ([i]) => SO[i]);
  if (SW)
    applyAttr(selection2, "stroke-width", ([i]) => SW[i]);
  if (O)
    applyAttr(selection2, "opacity", ([i]) => O[i]);
  if (H)
    applyHref(selection2, ([i]) => H[i], target);
  if (!tip2)
    applyTitleGroup(selection2, T);
}
function groupAesthetics({
  ariaLabel: AL,
  title: T,
  fill: F,
  fillOpacity: FO,
  stroke: S,
  strokeOpacity: SO,
  strokeWidth: SW,
  opacity: O,
  href: H
}, { tip: tip2 }) {
  return [AL, tip2 ? void 0 : T, F, FO, S, SO, SW, O, H].filter((c4) => c4 !== void 0);
}
function groupZ(I, Z, z) {
  const G = group(I, (i) => Z[i]);
  if (z === void 0 && G.size > 1 + I.length >> 1) {
    warn(
      `Warning: the implicit z channel has high cardinality. This may occur when the fill or stroke channel is associated with quantitative data rather than ordinal or categorical data. You can suppress this warning by setting the z option explicitly; if this data represents a single series, set z to null.`
    );
  }
  return G.values();
}
function* groupIndex(I, position2, mark, channels) {
  const { z } = mark;
  const { z: Z } = channels;
  const A5 = groupAesthetics(channels, mark);
  const C2 = [...position2, ...A5];
  for (const G of Z ? groupZ(I, Z, z) : [I]) {
    let Ag;
    let Gg;
    out:
      for (const i of G) {
        for (const c4 of C2) {
          if (!defined(c4[i])) {
            if (Gg)
              Gg.push(-1);
            continue out;
          }
        }
        if (Ag === void 0) {
          if (Gg)
            yield Gg;
          Ag = A5.map((c4) => keyof2(c4[i])), Gg = [i];
          continue;
        }
        Gg.push(i);
        for (let j = 0; j < A5.length; ++j) {
          const k2 = keyof2(A5[j][i]);
          if (k2 !== Ag[j]) {
            yield Gg;
            Ag = A5.map((c4) => keyof2(c4[i])), Gg = [i];
            continue out;
          }
        }
      }
    if (Gg)
      yield Gg;
  }
}
function applyClip(selection2, mark, dimensions, context) {
  let clipUrl;
  const { clip = context.clip } = mark;
  switch (clip) {
    case "frame": {
      const { width, height, marginLeft, marginRight, marginTop, marginBottom } = dimensions;
      const id2 = getClipId();
      clipUrl = `url(#${id2})`;
      selection2 = create2("svg:g", context).call(
        (g) => g.append("svg:clipPath").attr("id", id2).append("rect").attr("x", marginLeft).attr("y", marginTop).attr("width", width - marginRight - marginLeft).attr("height", height - marginTop - marginBottom)
      ).each(function() {
        this.appendChild(selection2.node());
        selection2.node = () => this;
      });
      break;
    }
    case "sphere": {
      const { projection: projection3 } = context;
      if (!projection3)
        throw new Error(`the "sphere" clip option requires a projection`);
      const id2 = getClipId();
      clipUrl = `url(#${id2})`;
      selection2.append("clipPath").attr("id", id2).append("path").attr("d", path_default(projection3)({ type: "Sphere" }));
      break;
    }
  }
  applyAttr(selection2, "aria-label", mark.ariaLabel);
  applyAttr(selection2, "aria-description", mark.ariaDescription);
  applyAttr(selection2, "aria-hidden", mark.ariaHidden);
  applyAttr(selection2, "clip-path", clipUrl);
}
function applyIndirectStyles(selection2, mark, dimensions, context) {
  applyClip(selection2, mark, dimensions, context);
  applyAttr(selection2, "fill", mark.fill);
  applyAttr(selection2, "fill-opacity", mark.fillOpacity);
  applyAttr(selection2, "stroke", mark.stroke);
  applyAttr(selection2, "stroke-width", mark.strokeWidth);
  applyAttr(selection2, "stroke-opacity", mark.strokeOpacity);
  applyAttr(selection2, "stroke-linejoin", mark.strokeLinejoin);
  applyAttr(selection2, "stroke-linecap", mark.strokeLinecap);
  applyAttr(selection2, "stroke-miterlimit", mark.strokeMiterlimit);
  applyAttr(selection2, "stroke-dasharray", mark.strokeDasharray);
  applyAttr(selection2, "stroke-dashoffset", mark.strokeDashoffset);
  applyAttr(selection2, "shape-rendering", mark.shapeRendering);
  applyAttr(selection2, "filter", mark.imageFilter);
  applyAttr(selection2, "paint-order", mark.paintOrder);
  const { pointerEvents = context.pointerSticky === false ? "none" : void 0 } = mark;
  applyAttr(selection2, "pointer-events", pointerEvents);
}
function applyDirectStyles(selection2, mark) {
  applyStyle(selection2, "mix-blend-mode", mark.mixBlendMode);
  applyAttr(selection2, "opacity", mark.opacity);
}
function applyHref(selection2, href, target) {
  selection2.each(function(i) {
    const h = href(i);
    if (h != null) {
      const a2 = this.ownerDocument.createElementNS(namespaces_default.svg, "a");
      a2.setAttribute("fill", "inherit");
      a2.setAttributeNS(namespaces_default.xlink, "href", h);
      if (target != null)
        a2.setAttribute("target", target);
      this.parentNode.insertBefore(a2, this).appendChild(this);
    }
  });
}
function applyAttr(selection2, name, value) {
  if (value != null)
    selection2.attr(name, value);
}
function applyStyle(selection2, name, value) {
  if (value != null)
    selection2.style(name, value);
}
function applyTransform(selection2, mark, { x: x2, y: y2 }, tx = offset, ty = offset) {
  tx += mark.dx;
  ty += mark.dy;
  if (x2?.bandwidth)
    tx += x2.bandwidth() / 2;
  if (y2?.bandwidth)
    ty += y2.bandwidth() / 2;
  if (tx || ty)
    selection2.attr("transform", `translate(${tx},${ty})`);
}
function impliedString(value, impliedValue) {
  if ((value = string(value)) !== impliedValue)
    return value;
}
function impliedNumber(value, impliedValue) {
  if ((value = number5(value)) !== impliedValue)
    return value;
}
var validClassName = /^-?([_a-z]|[\240-\377]|\\[0-9a-f]{1,6}(\r\n|[ \t\r\n\f])?|\\[^\r\n\f0-9a-f])([_a-z0-9-]|[\240-\377]|\\[0-9a-f]{1,6}(\r\n|[ \t\r\n\f])?|\\[^\r\n\f0-9a-f])*$/i;
function maybeClassName(name) {
  if (name === void 0)
    return "plot-d6a7b5";
  name = `${name}`;
  if (!validClassName.test(name))
    throw new Error(`invalid class name: ${name}`);
  return name;
}
function applyInlineStyles(selection2, style) {
  if (typeof style === "string") {
    selection2.property("style", style);
  } else if (style != null) {
    for (const element of selection2) {
      Object.assign(element.style, style);
    }
  }
}
function applyFrameAnchor({ frameAnchor }, { width, height, marginTop, marginRight, marginBottom, marginLeft }) {
  return [
    /left$/.test(frameAnchor) ? marginLeft : /right$/.test(frameAnchor) ? width - marginRight : (marginLeft + width - marginRight) / 2,
    /^top/.test(frameAnchor) ? marginTop : /^bottom/.test(frameAnchor) ? height - marginBottom : (marginTop + height - marginBottom) / 2
  ];
}

// node_modules/@observablehq/plot/src/mark.js
var Mark = class {
  constructor(data, channels = {}, options = {}, defaults9) {
    const {
      facet = "auto",
      facetAnchor,
      fx,
      fy,
      sort: sort2,
      dx = 0,
      dy = 0,
      margin = 0,
      marginTop = margin,
      marginRight = margin,
      marginBottom = margin,
      marginLeft = margin,
      clip = defaults9?.clip,
      channels: extraChannels,
      tip: tip2,
      render
    } = options;
    this.data = data;
    this.sort = isDomainSort(sort2) ? sort2 : null;
    this.initializer = initializer(options).initializer;
    this.transform = this.initializer ? options.transform : basic(options).transform;
    if (facet === null || facet === false) {
      this.facet = null;
    } else {
      this.facet = keyword(facet === true ? "include" : facet, "facet", ["auto", "include", "exclude", "super"]);
      this.fx = data === singleton && typeof fx === "string" ? [fx] : fx;
      this.fy = data === singleton && typeof fy === "string" ? [fy] : fy;
    }
    this.facetAnchor = maybeFacetAnchor(facetAnchor);
    channels = maybeNamed(channels);
    if (extraChannels !== void 0)
      channels = { ...maybeChannels(extraChannels), ...channels };
    if (defaults9 !== void 0)
      channels = { ...styles(this, options, defaults9), ...channels };
    this.channels = Object.fromEntries(
      Object.entries(channels).map(([name, channel]) => {
        if (isOptions(channel.value)) {
          const { value, label = channel.label, scale = channel.scale } = channel.value;
          channel = { ...channel, label, scale, value };
        }
        if (data === singleton && typeof channel.value === "string") {
          const { value } = channel;
          channel = { ...channel, value: [value] };
        }
        return [name, channel];
      }).filter(([name, { value, optional }]) => {
        if (value != null)
          return true;
        if (optional)
          return false;
        throw new Error(`missing channel value: ${name}`);
      })
    );
    this.dx = +dx;
    this.dy = +dy;
    this.marginTop = +marginTop;
    this.marginRight = +marginRight;
    this.marginBottom = +marginBottom;
    this.marginLeft = +marginLeft;
    this.clip = maybeClip(clip);
    this.tip = maybeTip(tip2);
    if (this.facet === "super") {
      if (fx || fy)
        throw new Error(`super-faceting cannot use fx or fy`);
      for (const name in this.channels) {
        const { scale } = channels[name];
        if (scale !== "x" && scale !== "y")
          continue;
        throw new Error(`super-faceting cannot use x or y`);
      }
    }
    if (render != null) {
      this.render = composeRender(render, this.render);
    }
  }
  initialize(facets, facetChannels, plotOptions) {
    let data = arrayify2(this.data);
    if (facets === void 0 && data != null)
      facets = [range2(data)];
    const originalFacets = facets;
    if (this.transform != null)
      ({ facets, data } = this.transform(data, facets, plotOptions)), data = arrayify2(data);
    if (facets !== void 0)
      facets.original = originalFacets;
    const channels = createChannels(this.channels, data);
    if (this.sort != null)
      channelDomain(data, facets, channels, facetChannels, this.sort);
    return { data, facets, channels };
  }
  filter(index2, channels, values2) {
    for (const name in channels) {
      const { filter: filter2 = defined } = channels[name];
      if (filter2 !== null) {
        const value = values2[name];
        index2 = index2.filter((i) => filter2(value[i]));
      }
    }
    return index2;
  }
  // If there is a projection, and there are paired x and y channels associated
  // with the x and y scale respectively (and not already in screen coordinates
  // as with an initializer), then apply the projection, replacing the x and y
  // values. Note that the x and y scales themselves don’t exist if there is a
  // projection, but whether the channels are associated with scales still
  // determines whether the projection should apply; think of the projection as
  // a combination xy-scale.
  project(channels, values2, context) {
    for (const cx in channels) {
      if (channels[cx].scale === "x" && /^x|x$/.test(cx)) {
        const cy = cx.replace(/^x|x$/, "y");
        if (cy in channels && channels[cy].scale === "y") {
          project(cx, cy, values2, context.projection);
        }
      }
    }
  }
  scale(channels, scales, context) {
    const values2 = valueObject(channels, scales);
    if (context.projection)
      this.project(channels, values2, context);
    return values2;
  }
};
function marks(...marks2) {
  marks2.plot = Mark.prototype.plot;
  return marks2;
}
function composeRender(r1, r2) {
  if (r1 == null)
    return r2 === null ? void 0 : r2;
  if (r2 == null)
    return r1 === null ? void 0 : r1;
  if (typeof r1 !== "function")
    throw new TypeError(`invalid render transform: ${r1}`);
  if (typeof r2 !== "function")
    throw new TypeError(`invalid render transform: ${r2}`);
  return function(i, s2, v, d, c4, next) {
    return r1.call(this, i, s2, v, d, c4, (i2, s3, v2, d2, c5) => {
      return r2.call(this, i2, s3, v2, d2, c5, next);
    });
  };
}
function maybeChannels(channels) {
  return Object.fromEntries(
    Object.entries(maybeNamed(channels)).map(([name, channel]) => {
      channel = typeof channel === "string" ? { value: channel, label: name } : maybeValue(channel);
      if (channel.filter === void 0 && channel.scale == null)
        channel = { ...channel, filter: null };
      return [name, channel];
    })
  );
}
function maybeTip(tip2) {
  return tip2 === true ? "xy" : tip2 === false || tip2 == null ? null : typeof tip2 === "string" ? keyword(tip2, "tip", ["x", "y", "xy"]) : tip2;
}
function withTip(options, pointer2) {
  return options?.tip === true ? { ...options, tip: pointer2 } : isObject(options?.tip) && options.tip.pointer === void 0 ? { ...options, tip: { ...options.tip, pointer: pointer2 } } : options;
}

// node_modules/@observablehq/plot/src/dimensions.js
function createDimensions(scales, marks2, options = {}) {
  let marginTopDefault = 0.5 - offset, marginRightDefault = 0.5 + offset, marginBottomDefault = 0.5 + offset, marginLeftDefault = 0.5 - offset;
  for (const { marginTop: marginTop2, marginRight: marginRight2, marginBottom: marginBottom2, marginLeft: marginLeft2 } of marks2) {
    if (marginTop2 > marginTopDefault)
      marginTopDefault = marginTop2;
    if (marginRight2 > marginRightDefault)
      marginRightDefault = marginRight2;
    if (marginBottom2 > marginBottomDefault)
      marginBottomDefault = marginBottom2;
    if (marginLeft2 > marginLeftDefault)
      marginLeftDefault = marginLeft2;
  }
  let {
    margin,
    marginTop = margin !== void 0 ? margin : marginTopDefault,
    marginRight = margin !== void 0 ? margin : marginRightDefault,
    marginBottom = margin !== void 0 ? margin : marginBottomDefault,
    marginLeft = margin !== void 0 ? margin : marginLeftDefault
  } = options;
  marginTop = +marginTop;
  marginRight = +marginRight;
  marginBottom = +marginBottom;
  marginLeft = +marginLeft;
  let {
    width = 640,
    height = autoHeight(scales, options, {
      width,
      marginTopDefault,
      marginRightDefault,
      marginBottomDefault,
      marginLeftDefault
    }) + Math.max(0, marginTop - marginTopDefault + marginBottom - marginBottomDefault)
  } = options;
  width = +width;
  height = +height;
  const dimensions = {
    width,
    height,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft
  };
  if (scales.fx || scales.fy) {
    let {
      margin: facetMargin,
      marginTop: facetMarginTop = facetMargin !== void 0 ? facetMargin : marginTop,
      marginRight: facetMarginRight = facetMargin !== void 0 ? facetMargin : marginRight,
      marginBottom: facetMarginBottom = facetMargin !== void 0 ? facetMargin : marginBottom,
      marginLeft: facetMarginLeft = facetMargin !== void 0 ? facetMargin : marginLeft
    } = options.facet ?? {};
    facetMarginTop = +facetMarginTop;
    facetMarginRight = +facetMarginRight;
    facetMarginBottom = +facetMarginBottom;
    facetMarginLeft = +facetMarginLeft;
    dimensions.facet = {
      marginTop: facetMarginTop,
      marginRight: facetMarginRight,
      marginBottom: facetMarginBottom,
      marginLeft: facetMarginLeft
    };
  }
  return dimensions;
}
function autoHeight({ x: x2, y: y2, fy, fx }, { projection: projection3, aspectRatio }, { width, marginTopDefault, marginRightDefault, marginBottomDefault, marginLeftDefault }) {
  const nfy = fy ? fy.scale.domain().length : 1;
  const ar = projectionAspectRatio(projection3);
  if (ar) {
    const nfx = fx ? fx.scale.domain().length : 1;
    const far = (1.1 * nfy - 0.1) / (1.1 * nfx - 0.1) * ar;
    const lar = Math.max(0.1, Math.min(10, far));
    return Math.round((width - marginLeftDefault - marginRightDefault) * lar + marginTopDefault + marginBottomDefault);
  }
  const ny = y2 ? isOrdinalScale(y2) ? y2.scale.domain().length : Math.max(7, 17 / nfy) : 1;
  if (aspectRatio != null) {
    aspectRatio = +aspectRatio;
    if (!(isFinite(aspectRatio) && aspectRatio > 0))
      throw new Error(`invalid aspectRatio: ${aspectRatio}`);
    const ratio = aspectRatioLength("y", y2) / (aspectRatioLength("x", x2) * aspectRatio);
    const fxb = fx ? fx.scale.bandwidth() : 1;
    const fyb = fy ? fy.scale.bandwidth() : 1;
    const w = fxb * (width - marginLeftDefault - marginRightDefault) - x2.insetLeft - x2.insetRight;
    return (ratio * w + y2.insetTop + y2.insetBottom) / fyb + marginTopDefault + marginBottomDefault;
  }
  return !!(y2 || fy) * Math.max(1, Math.min(60, ny * nfy)) * 20 + !!fx * 30 + 60;
}
function aspectRatioLength(k2, scale) {
  if (!scale)
    throw new Error(`aspectRatio requires ${k2} scale`);
  const { type: type2, domain } = scale;
  let transform2;
  switch (type2) {
    case "linear":
    case "utc":
    case "time":
      transform2 = Number;
      break;
    case "pow": {
      const exponent = scale.scale.exponent();
      transform2 = (x2) => Math.pow(x2, exponent);
      break;
    }
    case "log":
      transform2 = Math.log;
      break;
    case "point":
    case "band":
      return domain.length;
    default:
      throw new Error(`unsupported ${k2} scale for aspectRatio: ${type2}`);
  }
  const [min4, max3] = extent(domain);
  return Math.abs(transform2(max3) - transform2(min4));
}

// node_modules/@observablehq/plot/src/interactions/pointer.js
var states = /* @__PURE__ */ new WeakMap();
function pointerK(kx2, ky2, { x: x2, y: y2, px, py, maxRadius = 40, channels, render, ...options } = {}) {
  maxRadius = +maxRadius;
  if (px != null)
    x2 ??= null, channels = { ...channels, px: { value: px, scale: "x" } };
  if (py != null)
    y2 ??= null, channels = { ...channels, py: { value: py, scale: "y" } };
  return {
    x: x2,
    y: y2,
    channels,
    ...options,
    // Unlike other composed transforms, the render transform must be the
    // outermost render function because it will re-render dynamically in
    // response to pointer events.
    render: composeRender(function(index2, scales, values2, dimensions, context, next) {
      context = { ...context, pointerSticky: false };
      const svg = context.ownerSVGElement;
      const { data } = context.getMarkState(this);
      let state = states.get(svg);
      if (!state)
        states.set(svg, state = { sticky: false, roots: [], renders: [] });
      let renderIndex = state.renders.push(render2) - 1;
      const { x: x3, y: y3, fx, fy } = scales;
      let tx = fx ? fx(index2.fx) - dimensions.marginLeft : 0;
      let ty = fy ? fy(index2.fy) - dimensions.marginTop : 0;
      if (x3?.bandwidth)
        tx += x3.bandwidth() / 2;
      if (y3?.bandwidth)
        ty += y3.bandwidth() / 2;
      const faceted = index2.fi != null;
      let facetState;
      if (faceted) {
        let facetStates = state.facetStates;
        if (!facetStates)
          state.facetStates = facetStates = /* @__PURE__ */ new Map();
        facetState = facetStates.get(this);
        if (!facetState)
          facetStates.set(this, facetState = /* @__PURE__ */ new Map());
      }
      const [cx, cy] = applyFrameAnchor(this, dimensions);
      const { px: PX, py: PY } = values2;
      const px2 = PX ? (i2) => PX[i2] : anchorX(values2, cx);
      const py2 = PY ? (i2) => PY[i2] : anchorY(values2, cy);
      let i;
      let g;
      let s2;
      let f;
      function update(ii, ri) {
        if (faceted) {
          if (f)
            f = cancelAnimationFrame(f);
          if (ii == null)
            facetState.delete(index2.fi);
          else {
            facetState.set(index2.fi, ri);
            f = requestAnimationFrame(() => {
              f = null;
              for (const [fi, r] of facetState) {
                if (r < ri || r === ri && fi < index2.fi) {
                  ii = null;
                  break;
                }
              }
              render2(ii);
            });
            return;
          }
        }
        render2(ii);
      }
      function render2(ii) {
        if (i === ii && s2 === state.sticky)
          return;
        i = ii;
        s2 = context.pointerSticky = state.sticky;
        const I = i == null ? [] : [i];
        if (faceted)
          I.fx = index2.fx, I.fy = index2.fy, I.fi = index2.fi;
        const r = next(I, scales, values2, dimensions, context);
        if (g) {
          if (faceted) {
            const p = g.parentNode;
            const ft = g.getAttribute("transform");
            const mt = r.getAttribute("transform");
            ft ? r.setAttribute("transform", ft) : r.removeAttribute("transform");
            mt ? p.setAttribute("transform", mt) : p.removeAttribute("transform");
            r.removeAttribute("aria-label");
            r.removeAttribute("aria-description");
            r.removeAttribute("aria-hidden");
          }
          g.replaceWith(r);
        }
        state.roots[renderIndex] = g = r;
        if (!(i == null && facetState?.size > 1))
          context.dispatchValue(i == null ? null : data[i]);
        return r;
      }
      function pointermove(event) {
        if (state.sticky || event.pointerType === "mouse" && event.buttons === 1)
          return;
        let [xp, yp] = pointer_default(event);
        xp -= tx, yp -= ty;
        const kpx = xp < dimensions.marginLeft || xp > dimensions.width - dimensions.marginRight ? 1 : kx2;
        const kpy = yp < dimensions.marginTop || yp > dimensions.height - dimensions.marginBottom ? 1 : ky2;
        let ii = null;
        let ri = maxRadius * maxRadius;
        for (const j of index2) {
          const dx = kpx * (px2(j) - xp);
          const dy = kpy * (py2(j) - yp);
          const rj = dx * dx + dy * dy;
          if (rj <= ri)
            ii = j, ri = rj;
        }
        if (ii != null && (kx2 !== 1 || ky2 !== 1)) {
          const dx = px2(ii) - xp;
          const dy = py2(ii) - yp;
          ri = dx * dx + dy * dy;
        }
        update(ii, ri);
      }
      function pointerdown(event) {
        if (event.pointerType !== "mouse")
          return;
        if (i == null)
          return;
        if (state.sticky && state.roots.some((r) => r?.contains(event.target)))
          return;
        if (state.sticky)
          state.sticky = false, state.renders.forEach((r) => r(null));
        else
          state.sticky = true, render2(i);
        event.stopImmediatePropagation();
      }
      function pointerleave(event) {
        if (event.pointerType !== "mouse")
          return;
        if (!state.sticky)
          update(null);
      }
      svg.addEventListener("pointerenter", pointermove);
      svg.addEventListener("pointermove", pointermove);
      svg.addEventListener("pointerdown", pointerdown);
      svg.addEventListener("pointerleave", pointerleave);
      return render2(null);
    }, render)
  };
}
function pointer(options) {
  return pointerK(1, 1, options);
}
function pointerX(options) {
  return pointerK(1, 0.01, options);
}
function pointerY(options) {
  return pointerK(0.01, 1, options);
}
function anchorX({ x1: X12, x2: X22, x: X3 = X12 }, cx) {
  return X12 && X22 ? (i) => (X12[i] + X22[i]) / 2 : X3 ? (i) => X3[i] : () => cx;
}
function anchorY({ y1: Y12, y2: Y22, y: Y3 = Y12 }, cy) {
  return Y12 && Y22 ? (i) => (Y12[i] + Y22[i]) / 2 : Y3 ? (i) => Y3[i] : () => cy;
}

// node_modules/@observablehq/plot/src/axes.js
function inferFontVariant(scale) {
  return isOrdinalScale(scale) && scale.interval === void 0 ? void 0 : "tabular-nums";
}

// node_modules/@observablehq/plot/src/legends/ramp.js
function legendRamp(color3, options) {
  let {
    label = color3.label,
    tickSize = 6,
    width = 240,
    height = 44 + tickSize,
    marginTop = 18,
    marginRight = 0,
    marginBottom = 16 + tickSize,
    marginLeft = 0,
    style,
    ticks: ticks2 = (width - marginLeft - marginRight) / 64,
    tickFormat: tickFormat2,
    fontVariant = inferFontVariant(color3),
    round = true,
    opacity: opacity2,
    className
  } = options;
  const context = createContext(options);
  className = maybeClassName(className);
  opacity2 = maybeNumberChannel(opacity2)[1];
  if (tickFormat2 === null)
    tickFormat2 = () => null;
  const svg = create2("svg", context).attr("class", `${className}-ramp`).attr("font-family", "system-ui, sans-serif").attr("font-size", 10).attr("width", width).attr("height", height).attr("viewBox", `0 0 ${width} ${height}`).call(
    (svg2) => (
      // Warning: if you edit this, change defaultClassName.
      svg2.append("style").text(
        `:where(.${className}-ramp) {
  display: block;
  height: auto;
  height: intrinsic;
  max-width: 100%;
  overflow: visible;
}
:where(.${className}-ramp text) {
  white-space: pre;
}`
      )
    )
  ).call(applyInlineStyles, style);
  let tickAdjust = (g) => g.selectAll(".tick line").attr("y1", marginTop + marginBottom - height);
  let x2;
  const applyRange = round ? (x3, range4) => x3.rangeRound(range4) : (x3, range4) => x3.range(range4);
  const { type: type2, domain, range: range3, interpolate, scale, pivot } = color3;
  if (interpolate) {
    const interpolator = range3 === void 0 ? interpolate : piecewise(interpolate.length === 1 ? interpolatePiecewise(interpolate) : interpolate, range3);
    x2 = applyRange(
      scale.copy(),
      quantize_default(
        number_default(marginLeft, width - marginRight),
        Math.min(domain.length + (pivot !== void 0), range3 === void 0 ? Infinity : range3.length)
      )
    );
    const n = 256;
    const canvas = context.document.createElement("canvas");
    canvas.width = n;
    canvas.height = 1;
    const context2 = canvas.getContext("2d");
    for (let i = 0, j = n - 1; i < n; ++i) {
      context2.fillStyle = interpolator(i / j);
      context2.fillRect(i, 0, 1, 1);
    }
    svg.append("image").attr("opacity", opacity2).attr("x", marginLeft).attr("y", marginTop).attr("width", width - marginLeft - marginRight).attr("height", height - marginTop - marginBottom).attr("preserveAspectRatio", "none").attr("xlink:href", canvas.toDataURL());
  } else if (type2 === "threshold") {
    const thresholds = domain;
    const thresholdFormat = tickFormat2 === void 0 ? (d) => d : typeof tickFormat2 === "string" ? format(tickFormat2) : tickFormat2;
    x2 = applyRange(linear2().domain([-1, range3.length - 1]), [marginLeft, width - marginRight]);
    svg.append("g").attr("fill-opacity", opacity2).selectAll().data(range3).enter().append("rect").attr("x", (d, i) => x2(i - 1)).attr("y", marginTop).attr("width", (d, i) => x2(i) - x2(i - 1)).attr("height", height - marginTop - marginBottom).attr("fill", (d) => d);
    ticks2 = map2(thresholds, (_, i) => i);
    tickFormat2 = (i) => thresholdFormat(thresholds[i], i);
  } else {
    x2 = applyRange(band().domain(domain), [marginLeft, width - marginRight]);
    svg.append("g").attr("fill-opacity", opacity2).selectAll().data(domain).enter().append("rect").attr("x", x2).attr("y", marginTop).attr("width", Math.max(0, x2.bandwidth() - 1)).attr("height", height - marginTop - marginBottom).attr("fill", scale);
    tickAdjust = () => {
    };
  }
  svg.append("g").attr("transform", `translate(0,${height - marginBottom})`).call(
    axisBottom(x2).ticks(Array.isArray(ticks2) ? null : ticks2, typeof tickFormat2 === "string" ? tickFormat2 : void 0).tickFormat(typeof tickFormat2 === "function" ? tickFormat2 : void 0).tickSize(tickSize).tickValues(Array.isArray(ticks2) ? ticks2 : null)
  ).attr("font-size", null).attr("font-family", null).attr("font-variant", impliedString(fontVariant, "normal")).call(tickAdjust).call((g) => g.select(".domain").remove());
  if (label !== void 0) {
    svg.append("text").attr("x", marginLeft).attr("y", marginTop - 6).attr("fill", "currentColor").attr("font-weight", "bold").text(label);
  }
  return svg.node();
}

// node_modules/@observablehq/plot/src/math.js
var radians3 = Math.PI / 180;

// node_modules/@observablehq/plot/src/marker.js
function markers(mark, { marker, markerStart = marker, markerMid = marker, markerEnd = marker } = {}) {
  mark.markerStart = maybeMarker(markerStart);
  mark.markerMid = maybeMarker(markerMid);
  mark.markerEnd = maybeMarker(markerEnd);
}
function maybeMarker(marker) {
  if (marker == null || marker === false)
    return null;
  if (marker === true)
    return markerCircleFill;
  if (typeof marker === "function")
    return marker;
  switch (`${marker}`.toLowerCase()) {
    case "none":
      return null;
    case "arrow":
      return markerArrow("auto");
    case "arrow-reverse":
      return markerArrow("auto-start-reverse");
    case "dot":
      return markerDot;
    case "circle":
    case "circle-fill":
      return markerCircleFill;
    case "circle-stroke":
      return markerCircleStroke;
    case "tick":
      return markerTick("auto");
    case "tick-x":
      return markerTick(90);
    case "tick-y":
      return markerTick(0);
  }
  throw new Error(`invalid marker: ${marker}`);
}
function markerArrow(orient) {
  return (color3, context) => create2("svg:marker", context).attr("viewBox", "-5 -5 10 10").attr("markerWidth", 6.67).attr("markerHeight", 6.67).attr("orient", orient).attr("fill", "none").attr("stroke", color3).attr("stroke-width", 1.5).attr("stroke-linecap", "round").attr("stroke-linejoin", "round").call((marker) => marker.append("path").attr("d", "M-1.5,-3l3,3l-3,3")).node();
}
function markerDot(color3, context) {
  return create2("svg:marker", context).attr("viewBox", "-5 -5 10 10").attr("markerWidth", 6.67).attr("markerHeight", 6.67).attr("fill", color3).attr("stroke", "none").call((marker) => marker.append("circle").attr("r", 2.5)).node();
}
function markerCircleFill(color3, context) {
  return create2("svg:marker", context).attr("viewBox", "-5 -5 10 10").attr("markerWidth", 6.67).attr("markerHeight", 6.67).attr("fill", color3).attr("stroke", "var(--plot-background)").attr("stroke-width", 1.5).call((marker) => marker.append("circle").attr("r", 3)).node();
}
function markerCircleStroke(color3, context) {
  return create2("svg:marker", context).attr("viewBox", "-5 -5 10 10").attr("markerWidth", 6.67).attr("markerHeight", 6.67).attr("fill", "var(--plot-background)").attr("stroke", color3).attr("stroke-width", 1.5).call((marker) => marker.append("circle").attr("r", 3)).node();
}
function markerTick(orient) {
  return (color3, context) => create2("svg:marker", context).attr("viewBox", "-3 -3 6 6").attr("markerWidth", 6).attr("markerHeight", 6).attr("orient", orient).attr("stroke", color3).call((marker) => marker.append("path").attr("d", "M0,-3v6")).node();
}
var nextMarkerId = 0;
function applyMarkers(path2, mark, { stroke: S }, context) {
  return applyMarkersColor(path2, mark, S && ((i) => S[i]), context);
}
function applyGroupedMarkers(path2, mark, { stroke: S }, context) {
  return applyMarkersColor(path2, mark, S && (([i]) => S[i]), context);
}
function applyMarkersColor(path2, { markerStart, markerMid, markerEnd, stroke }, strokeof = () => stroke, context) {
  const iriByMarkerColor = /* @__PURE__ */ new Map();
  function applyMarker(marker) {
    return function(i) {
      const color3 = strokeof(i);
      let iriByColor = iriByMarkerColor.get(marker);
      if (!iriByColor)
        iriByMarkerColor.set(marker, iriByColor = /* @__PURE__ */ new Map());
      let iri = iriByColor.get(color3);
      if (!iri) {
        const node = this.parentNode.insertBefore(marker(color3, context), this);
        const id2 = `plot-marker-${++nextMarkerId}`;
        node.setAttribute("id", id2);
        iriByColor.set(color3, iri = `url(#${id2})`);
      }
      return iri;
    };
  }
  if (markerStart)
    path2.attr("marker-start", applyMarker(markerStart));
  if (markerMid)
    path2.attr("marker-mid", applyMarker(markerMid));
  if (markerEnd)
    path2.attr("marker-end", applyMarker(markerEnd));
}

// node_modules/@observablehq/plot/src/transforms/inset.js
function maybeInsetX({ inset, insetLeft, insetRight, ...options } = {}) {
  [insetLeft, insetRight] = maybeInset(inset, insetLeft, insetRight);
  return { inset, insetLeft, insetRight, ...options };
}
function maybeInsetY({ inset, insetTop, insetBottom, ...options } = {}) {
  [insetTop, insetBottom] = maybeInset(inset, insetTop, insetBottom);
  return { inset, insetTop, insetBottom, ...options };
}
function maybeInset(inset, inset1, inset2) {
  return inset === void 0 && inset1 === void 0 && inset2 === void 0 ? offset ? [1, 0] : [0.5, 0.5] : [inset1, inset2];
}

// node_modules/@observablehq/plot/src/transforms/interval.js
function maybeIntervalValue(value, { interval: interval2 }) {
  value = { ...maybeValue(value) };
  value.interval = maybeInterval(value.interval === void 0 ? interval2 : value.interval);
  return value;
}
function maybeIntervalK(k2, maybeInsetK, options, trivial) {
  const { [k2]: v, [`${k2}1`]: v1, [`${k2}2`]: v2 } = options;
  const { value, interval: interval2 } = maybeIntervalValue(v, options);
  if (value == null || interval2 == null && !trivial)
    return options;
  const label = labelof(v);
  if (interval2 == null) {
    let V;
    const kv = { transform: (data) => V || (V = valueof(data, value)), label };
    return {
      ...options,
      [k2]: void 0,
      [`${k2}1`]: v1 === void 0 ? kv : v1,
      [`${k2}2`]: v2 === void 0 && !(v1 === v2 && trivial) ? kv : v2
    };
  }
  let D1, V1;
  function transform2(data) {
    if (V1 !== void 0 && data === D1)
      return V1;
    return V1 = map2(valueof(D1 = data, value), (v3) => interval2.floor(v3));
  }
  return maybeInsetK({
    ...options,
    [k2]: void 0,
    [`${k2}1`]: v1 === void 0 ? { transform: transform2, label } : v1,
    [`${k2}2`]: v2 === void 0 ? { transform: (data) => transform2(data).map((v3) => interval2.offset(v3)), label } : v2
  });
}
function maybeIntervalMidK(k2, maybeInsetK, options) {
  const { [k2]: v } = options;
  const { value, interval: interval2 } = maybeIntervalValue(v, options);
  if (value == null || interval2 == null)
    return options;
  return maybeInsetK({
    ...options,
    [k2]: {
      label: labelof(v),
      transform: (data) => {
        const V1 = map2(valueof(data, value), (v2) => interval2.floor(v2));
        const V2 = V1.map((v2) => interval2.offset(v2));
        return V1.map(
          isTemporal(V1) ? (v1, v2) => v1 == null || isNaN(v1 = +v1) || (v2 = V2[v2], v2 == null) || isNaN(v2 = +v2) ? void 0 : new Date((v1 + v2) / 2) : (v1, v2) => v1 == null || (v2 = V2[v2], v2 == null) ? NaN : (+v1 + +v2) / 2
        );
      }
    }
  });
}
function maybeIntervalX(options = {}) {
  return maybeIntervalK("x", maybeInsetX, options);
}
function maybeIntervalY(options = {}) {
  return maybeIntervalK("y", maybeInsetY, options);
}
function maybeIntervalMidX(options = {}) {
  return maybeIntervalMidK("x", maybeInsetX, options);
}
function maybeIntervalMidY(options = {}) {
  return maybeIntervalMidK("y", maybeInsetY, options);
}

// node_modules/@observablehq/plot/src/marks/rule.js
var defaults = {
  ariaLabel: "rule",
  fill: null,
  stroke: "currentColor"
};
var RuleX = class extends Mark {
  constructor(data, options = {}) {
    const { x: x2, y1: y12, y2, inset = 0, insetTop = inset, insetBottom = inset } = options;
    super(
      data,
      {
        x: { value: x2, scale: "x", optional: true },
        y1: { value: y12, scale: "y", optional: true },
        y2: { value: y2, scale: "y", optional: true }
      },
      withTip(options, "x"),
      defaults
    );
    this.insetTop = number5(insetTop);
    this.insetBottom = number5(insetBottom);
    markers(this, options);
  }
  render(index2, scales, channels, dimensions, context) {
    const { x: x2, y: y2 } = scales;
    const { x: X3, y1: Y12, y2: Y22 } = channels;
    const { width, height, marginTop, marginRight, marginLeft, marginBottom } = dimensions;
    const { insetTop, insetBottom } = this;
    return create2("svg:g", context).call(applyIndirectStyles, this, dimensions, context).call(applyTransform, this, { x: X3 && x2 }, offset, 0).call(
      (g) => g.selectAll().data(index2).enter().append("line").call(applyDirectStyles, this).attr("x1", X3 ? (i) => X3[i] : (marginLeft + width - marginRight) / 2).attr("x2", X3 ? (i) => X3[i] : (marginLeft + width - marginRight) / 2).attr("y1", Y12 && !isCollapsed(y2) ? (i) => Y12[i] + insetTop : marginTop + insetTop).attr(
        "y2",
        Y22 && !isCollapsed(y2) ? y2.bandwidth ? (i) => Y22[i] + y2.bandwidth() - insetBottom : (i) => Y22[i] - insetBottom : height - marginBottom - insetBottom
      ).call(applyChannelStyles, this, channels).call(applyMarkers, this, channels, context)
    ).node();
  }
};
var RuleY = class extends Mark {
  constructor(data, options = {}) {
    const { x1: x12, x2, y: y2, inset = 0, insetRight = inset, insetLeft = inset } = options;
    super(
      data,
      {
        y: { value: y2, scale: "y", optional: true },
        x1: { value: x12, scale: "x", optional: true },
        x2: { value: x2, scale: "x", optional: true }
      },
      withTip(options, "y"),
      defaults
    );
    this.insetRight = number5(insetRight);
    this.insetLeft = number5(insetLeft);
    markers(this, options);
  }
  render(index2, scales, channels, dimensions, context) {
    const { x: x2, y: y2 } = scales;
    const { y: Y3, x1: X12, x2: X22 } = channels;
    const { width, height, marginTop, marginRight, marginLeft, marginBottom } = dimensions;
    const { insetLeft, insetRight } = this;
    return create2("svg:g", context).call(applyIndirectStyles, this, dimensions, context).call(applyTransform, this, { y: Y3 && y2 }, 0, offset).call(
      (g) => g.selectAll().data(index2).enter().append("line").call(applyDirectStyles, this).attr("x1", X12 && !isCollapsed(x2) ? (i) => X12[i] + insetLeft : marginLeft + insetLeft).attr(
        "x2",
        X22 && !isCollapsed(x2) ? x2.bandwidth ? (i) => X22[i] + x2.bandwidth() - insetRight : (i) => X22[i] - insetRight : width - marginRight - insetRight
      ).attr("y1", Y3 ? (i) => Y3[i] : (marginTop + height - marginBottom) / 2).attr("y2", Y3 ? (i) => Y3[i] : (marginTop + height - marginBottom) / 2).call(applyChannelStyles, this, channels).call(applyMarkers, this, channels, context)
    ).node();
  }
};
function ruleX(data, options) {
  let { x: x2 = identity6, y: y2, y1: y12, y2: y22, ...rest } = maybeIntervalY(options);
  [y12, y22] = maybeOptionalZero(y2, y12, y22);
  return new RuleX(data, { ...rest, x: x2, y1: y12, y2: y22 });
}
function ruleY(data, options) {
  let { y: y2 = identity6, x: x2, x1: x12, x2: x22, ...rest } = maybeIntervalX(options);
  [x12, x22] = maybeOptionalZero(x2, x12, x22);
  return new RuleY(data, { ...rest, y: y2, x1: x12, x2: x22 });
}
function maybeOptionalZero(x2, x12, x22) {
  if (x2 == null) {
    if (x12 === void 0) {
      if (x22 !== void 0)
        return [0, x22];
    } else {
      if (x22 === void 0)
        return [0, x12];
    }
  } else if (x12 === void 0) {
    return x22 === void 0 ? [0, x2] : [x2, x22];
  } else if (x22 === void 0) {
    return [x2, x12];
  }
  return [x12, x22];
}

// node_modules/@observablehq/plot/src/template.js
function template(strings, ...parts) {
  let n = parts.length;
  for (let j = 0, copy3 = true; j < n; ++j) {
    if (typeof parts[j] !== "function") {
      if (copy3) {
        strings = strings.slice();
        copy3 = false;
      }
      strings.splice(j, 2, strings[j] + parts[j] + strings[j + 1]);
      parts.splice(j, 1);
      --j, --n;
    }
  }
  return (i) => {
    let s2 = strings[0];
    for (let j = 0; j < n; ++j) {
      s2 += parts[j](i) + strings[j + 1];
    }
    return s2;
  };
}

// node_modules/@observablehq/plot/src/marks/text.js
var defaults2 = {
  ariaLabel: "text",
  strokeLinejoin: "round",
  strokeWidth: 3,
  paintOrder: "stroke"
};
var softHyphen = "\xAD";
var Text = class extends Mark {
  constructor(data, options = {}) {
    const {
      x: x2,
      y: y2,
      text: text2 = isIterable(data) && isTextual(data) ? identity6 : indexOf,
      frameAnchor,
      textAnchor = /right$/i.test(frameAnchor) ? "end" : /left$/i.test(frameAnchor) ? "start" : "middle",
      lineAnchor = /^top/i.test(frameAnchor) ? "top" : /^bottom/i.test(frameAnchor) ? "bottom" : "middle",
      lineHeight = 1,
      lineWidth = Infinity,
      textOverflow,
      monospace,
      fontFamily = monospace ? "ui-monospace, monospace" : void 0,
      fontSize,
      fontStyle,
      fontVariant,
      fontWeight,
      rotate
    } = options;
    const [vrotate, crotate] = maybeNumberChannel(rotate, 0);
    const [vfontSize, cfontSize] = maybeFontSizeChannel(fontSize);
    super(
      data,
      {
        x: { value: x2, scale: "x", optional: true },
        y: { value: y2, scale: "y", optional: true },
        fontSize: { value: vfontSize, optional: true },
        rotate: { value: numberChannel(vrotate), optional: true },
        text: { value: text2, filter: nonempty, optional: true }
      },
      options,
      defaults2
    );
    this.rotate = crotate;
    this.textAnchor = impliedString(textAnchor, "middle");
    this.lineAnchor = keyword(lineAnchor, "lineAnchor", ["top", "middle", "bottom"]);
    this.lineHeight = +lineHeight;
    this.lineWidth = +lineWidth;
    this.textOverflow = maybeTextOverflow(textOverflow);
    this.monospace = !!monospace;
    this.fontFamily = string(fontFamily);
    this.fontSize = cfontSize;
    this.fontStyle = string(fontStyle);
    this.fontVariant = string(fontVariant);
    this.fontWeight = string(fontWeight);
    this.frameAnchor = maybeFrameAnchor(frameAnchor);
    if (!(this.lineWidth >= 0))
      throw new Error(`invalid lineWidth: ${lineWidth}`);
    this.splitLines = splitter(this);
    this.clipLine = clipper(this);
  }
  render(index2, scales, channels, dimensions, context) {
    const { x: x2, y: y2 } = scales;
    const { x: X3, y: Y3, rotate: R, text: T, title: TL, fontSize: FS } = channels;
    const { rotate } = this;
    const [cx, cy] = applyFrameAnchor(this, dimensions);
    return create2("svg:g", context).call(applyIndirectStyles, this, dimensions, context).call(applyIndirectTextStyles, this, T, dimensions).call(applyTransform, this, { x: X3 && x2, y: Y3 && y2 }).call(
      (g) => g.selectAll().data(index2).enter().append("text").call(applyDirectStyles, this).call(applyMultilineText, this, T, TL).attr(
        "transform",
        template`translate(${X3 ? (i) => X3[i] : cx},${Y3 ? (i) => Y3[i] : cy})${R ? (i) => ` rotate(${R[i]})` : rotate ? ` rotate(${rotate})` : ``}`
      ).call(applyAttr, "font-size", FS && ((i) => FS[i])).call(applyChannelStyles, this, channels)
    ).node();
  }
};
function maybeTextOverflow(textOverflow) {
  return textOverflow == null ? null : keyword(textOverflow, "textOverflow", [
    "clip",
    // shorthand for clip-end
    "ellipsis",
    // … ellipsis-end
    "clip-start",
    "clip-end",
    "ellipsis-start",
    "ellipsis-middle",
    "ellipsis-end"
  ]).replace(/^(clip|ellipsis)$/, "$1-end");
}
function applyMultilineText(selection2, mark, T, TL) {
  if (!T)
    return;
  const { lineAnchor, lineHeight, textOverflow, splitLines, clipLine } = mark;
  selection2.each(function(i) {
    const lines = splitLines(formatDefault(T[i]) ?? "").map(clipLine);
    const n = lines.length;
    const y2 = lineAnchor === "top" ? 0.71 : lineAnchor === "bottom" ? 1 - n : (164 - n * 100) / 200;
    if (n > 1) {
      let m = 0;
      for (let i2 = 0; i2 < n; ++i2) {
        ++m;
        if (!lines[i2])
          continue;
        const tspan = this.ownerDocument.createElementNS(namespaces_default.svg, "tspan");
        tspan.setAttribute("x", 0);
        if (i2 === m - 1)
          tspan.setAttribute("y", `${(y2 + i2) * lineHeight}em`);
        else
          tspan.setAttribute("dy", `${m * lineHeight}em`);
        tspan.textContent = lines[i2];
        this.appendChild(tspan);
        m = 0;
      }
    } else {
      if (y2)
        this.setAttribute("y", `${y2 * lineHeight}em`);
      this.textContent = lines[0];
    }
    if (textOverflow && !TL && lines[0] !== T[i]) {
      const title = this.ownerDocument.createElementNS(namespaces_default.svg, "title");
      title.textContent = T[i];
      this.appendChild(title);
    }
  });
}
function text(data, { x: x2, y: y2, ...options } = {}) {
  if (options.frameAnchor === void 0)
    [x2, y2] = maybeTuple(x2, y2);
  return new Text(data, { ...options, x: x2, y: y2 });
}
function textX(data, { x: x2 = identity6, ...options } = {}) {
  return new Text(data, maybeIntervalMidY({ ...options, x: x2 }));
}
function textY(data, { y: y2 = identity6, ...options } = {}) {
  return new Text(data, maybeIntervalMidX({ ...options, y: y2 }));
}
function applyIndirectTextStyles(selection2, mark, T) {
  applyAttr(selection2, "text-anchor", mark.textAnchor);
  applyAttr(selection2, "font-family", mark.fontFamily);
  applyAttr(selection2, "font-size", mark.fontSize);
  applyAttr(selection2, "font-style", mark.fontStyle);
  applyAttr(selection2, "font-variant", mark.fontVariant === void 0 ? inferFontVariant2(T) : mark.fontVariant);
  applyAttr(selection2, "font-weight", mark.fontWeight);
}
function inferFontVariant2(T) {
  return T && (isNumeric(T) || isTemporal(T)) ? "tabular-nums" : void 0;
}
var fontSizes = /* @__PURE__ */ new Set([
  // global keywords
  "inherit",
  "initial",
  "revert",
  "unset",
  // absolute keywords
  "xx-small",
  "x-small",
  "small",
  "medium",
  "large",
  "x-large",
  "xx-large",
  "xxx-large",
  // relative keywords
  "larger",
  "smaller"
]);
function maybeFontSizeChannel(fontSize) {
  if (fontSize == null || typeof fontSize === "number")
    return [void 0, fontSize];
  if (typeof fontSize !== "string")
    return [fontSize, void 0];
  fontSize = fontSize.trim().toLowerCase();
  return fontSizes.has(fontSize) || /^[+-]?\d*\.?\d+(e[+-]?\d+)?(\w*|%)$/.test(fontSize) ? [void 0, fontSize] : [fontSize, void 0];
}
function lineWrap(input, maxWidth, widthof) {
  const lines = [];
  let lineStart, lineEnd = 0;
  for (const [wordStart, wordEnd, required] of lineBreaks(input)) {
    if (lineStart === void 0)
      lineStart = wordStart;
    if (lineEnd > lineStart && widthof(input, lineStart, wordEnd) > maxWidth) {
      lines.push(input.slice(lineStart, lineEnd) + (input[lineEnd - 1] === softHyphen ? "-" : ""));
      lineStart = wordStart;
    }
    if (required) {
      lines.push(input.slice(lineStart, wordEnd));
      lineStart = void 0;
      continue;
    }
    lineEnd = wordEnd;
  }
  return lines;
}
function* lineBreaks(input) {
  let i = 0, j = 0;
  const n = input.length;
  while (j < n) {
    let k2 = 1;
    switch (input[j]) {
      case softHyphen:
      case "-":
        ++j;
        yield [i, j, false];
        i = j;
        break;
      case " ":
        yield [i, j, false];
        while (input[++j] === " ")
          ;
        i = j;
        break;
      case "\r":
        if (input[j + 1] === "\n")
          ++k2;
      case "\n":
        yield [i, j, true];
        j += k2;
        i = j;
        break;
      default:
        ++j;
        break;
    }
  }
  yield [i, j, true];
}
var defaultWidthMap = {
  a: 56,
  b: 63,
  c: 57,
  d: 63,
  e: 58,
  f: 37,
  g: 62,
  h: 60,
  i: 26,
  j: 26,
  k: 55,
  l: 26,
  m: 88,
  n: 60,
  o: 60,
  p: 62,
  q: 62,
  r: 39,
  s: 54,
  t: 38,
  u: 60,
  v: 55,
  w: 79,
  x: 54,
  y: 55,
  z: 55,
  A: 69,
  B: 67,
  C: 73,
  D: 74,
  E: 61,
  F: 58,
  G: 76,
  H: 75,
  I: 28,
  J: 55,
  K: 67,
  L: 58,
  M: 89,
  N: 75,
  O: 78,
  P: 65,
  Q: 78,
  R: 67,
  S: 65,
  T: 65,
  U: 75,
  V: 69,
  W: 98,
  X: 69,
  Y: 67,
  Z: 67,
  0: 64,
  1: 48,
  2: 62,
  3: 64,
  4: 66,
  5: 63,
  6: 65,
  7: 58,
  8: 65,
  9: 65,
  " ": 29,
  "!": 32,
  '"': 49,
  "'": 31,
  "(": 39,
  ")": 39,
  ",": 31,
  "-": 48,
  ".": 31,
  "/": 32,
  ":": 31,
  ";": 31,
  "?": 52,
  "\u2018": 31,
  "\u2019": 31,
  "\u201C": 47,
  "\u201D": 47,
  "\u2026": 82
};
function defaultWidth(text2, start2 = 0, end = text2.length) {
  let sum2 = 0;
  for (let i = start2; i < end; i = readCharacter(text2, i)) {
    sum2 += defaultWidthMap[text2[i]] ?? (isPictographic(text2, i) ? 120 : defaultWidthMap.e);
  }
  return sum2;
}
function monospaceWidth(text2, start2 = 0, end = text2.length) {
  let sum2 = 0;
  for (let i = start2; i < end; i = readCharacter(text2, i)) {
    sum2 += isPictographic(text2, i) ? 126 : 63;
  }
  return sum2;
}
function splitter({ monospace, lineWidth, textOverflow }) {
  if (textOverflow != null || lineWidth == Infinity)
    return (text2) => text2.split(/\r\n?|\n/g);
  const widthof = monospace ? monospaceWidth : defaultWidth;
  const maxWidth = lineWidth * 100;
  return (text2) => lineWrap(text2, maxWidth, widthof);
}
function clipper({ monospace, lineWidth, textOverflow }) {
  if (textOverflow == null || lineWidth == Infinity)
    return (text2) => text2;
  const widthof = monospace ? monospaceWidth : defaultWidth;
  const maxWidth = lineWidth * 100;
  switch (textOverflow) {
    case "clip-start":
      return (text2) => clipStart(text2, maxWidth, widthof, "");
    case "clip-end":
      return (text2) => clipEnd(text2, maxWidth, widthof, "");
    case "ellipsis-start":
      return (text2) => clipStart(text2, maxWidth, widthof, ellipsis);
    case "ellipsis-middle":
      return (text2) => clipMiddle(text2, maxWidth, widthof, ellipsis);
    case "ellipsis-end":
      return (text2) => clipEnd(text2, maxWidth, widthof, ellipsis);
  }
}
var ellipsis = "\u2026";
function cut(text2, width, widthof, inset) {
  const I = [];
  let w = 0;
  for (let i = 0, j = 0, n = text2.length; i < n; i = j) {
    j = readCharacter(text2, i);
    const l = widthof(text2, i, j);
    if (w + l > width) {
      w += inset;
      while (w > width && i > 0)
        j = i, i = I.pop(), w -= widthof(text2, i, j);
      return [i, width - w];
    }
    w += l;
    I.push(i);
  }
  return [-1, 0];
}
function clipEnd(text2, width, widthof, ellipsis2) {
  text2 = text2.trim();
  const e = widthof(ellipsis2);
  const [i] = cut(text2, width, widthof, e);
  return i < 0 ? text2 : text2.slice(0, i).trimEnd() + ellipsis2;
}
function clipMiddle(text2, width, widthof, ellipsis2) {
  text2 = text2.trim();
  const w = widthof(text2);
  if (w <= width)
    return text2;
  const e = widthof(ellipsis2) / 2;
  const [i, ei] = cut(text2, width / 2, widthof, e);
  const [j] = cut(text2, w - width / 2 - ei + e, widthof, -e);
  return j < 0 ? ellipsis2 : text2.slice(0, i).trimEnd() + ellipsis2 + text2.slice(readCharacter(text2, j)).trimStart();
}
function clipStart(text2, width, widthof, ellipsis2) {
  text2 = text2.trim();
  const w = widthof(text2);
  if (w <= width)
    return text2;
  const e = widthof(ellipsis2);
  const [j] = cut(text2, w - width + e, widthof, -e);
  return j < 0 ? ellipsis2 : ellipsis2 + text2.slice(readCharacter(text2, j)).trimStart();
}
var reCombiner = /[\p{Combining_Mark}\p{Emoji_Modifier}]+/uy;
var rePictographic = /\p{Extended_Pictographic}/uy;
function readCharacter(text2, i) {
  i += isSurrogatePair(text2, i) ? 2 : 1;
  if (isCombiner(text2, i))
    i = reCombiner.lastIndex;
  if (isZeroWidthJoiner(text2, i))
    return readCharacter(text2, i + 1);
  return i;
}
function isAscii(text2, i) {
  return text2.charCodeAt(i) < 128;
}
function isSurrogatePair(text2, i) {
  const hi = text2.charCodeAt(i);
  if (hi >= 55296 && hi < 56320) {
    const lo = text2.charCodeAt(i + 1);
    return lo >= 56320 && lo < 57344;
  }
  return false;
}
function isZeroWidthJoiner(text2, i) {
  return text2.charCodeAt(i) === 8205;
}
function isCombiner(text2, i) {
  return isAscii(text2, i) ? false : (reCombiner.lastIndex = i, reCombiner.test(text2));
}
function isPictographic(text2, i) {
  return isAscii(text2, i) ? false : (rePictographic.lastIndex = i, rePictographic.test(text2));
}

// node_modules/@observablehq/plot/src/marks/vector.js
var defaults3 = {
  ariaLabel: "vector",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinejoin: "round",
  strokeLinecap: "round"
};
var defaultRadius = 3.5;
var wingRatio = defaultRadius * 5;
var shapeArrow = {
  draw(context, l, r) {
    const wing = l * r / wingRatio;
    context.moveTo(0, 0);
    context.lineTo(0, -l);
    context.moveTo(-wing, wing - l);
    context.lineTo(0, -l);
    context.lineTo(wing, wing - l);
  }
};
var shapeSpike = {
  draw(context, l, r) {
    context.moveTo(-r, 0);
    context.lineTo(0, -l);
    context.lineTo(r, 0);
  }
};
var shapes = /* @__PURE__ */ new Map([
  ["arrow", shapeArrow],
  ["spike", shapeSpike]
]);
function isShapeObject(value) {
  return value && typeof value.draw === "function";
}
function maybeShape(shape) {
  if (isShapeObject(shape))
    return shape;
  const value = shapes.get(`${shape}`.toLowerCase());
  if (value)
    return value;
  throw new Error(`invalid shape: ${shape}`);
}
var Vector = class extends Mark {
  constructor(data, options = {}) {
    const { x: x2, y: y2, r = defaultRadius, length: length3, rotate, shape = shapeArrow, anchor = "middle", frameAnchor } = options;
    const [vl, cl] = maybeNumberChannel(length3, 12);
    const [vr, cr] = maybeNumberChannel(rotate, 0);
    super(
      data,
      {
        x: { value: x2, scale: "x", optional: true },
        y: { value: y2, scale: "y", optional: true },
        length: { value: vl, scale: "length", optional: true },
        rotate: { value: vr, optional: true }
      },
      options,
      defaults3
    );
    this.r = +r;
    this.length = cl;
    this.rotate = cr;
    this.shape = maybeShape(shape);
    this.anchor = keyword(anchor, "anchor", ["start", "middle", "end"]);
    this.frameAnchor = maybeFrameAnchor(frameAnchor);
  }
  render(index2, scales, channels, dimensions, context) {
    const { x: x2, y: y2 } = scales;
    const { x: X3, y: Y3, length: L, rotate: A5 } = channels;
    const { length: length3, rotate, anchor, shape, r } = this;
    const [cx, cy] = applyFrameAnchor(this, dimensions);
    return create2("svg:g", context).call(applyIndirectStyles, this, dimensions, context).call(applyTransform, this, { x: X3 && x2, y: Y3 && y2 }).call(
      (g) => g.selectAll().data(index2).enter().append("path").call(applyDirectStyles, this).attr(
        "transform",
        template`translate(${X3 ? (i) => X3[i] : cx},${Y3 ? (i) => Y3[i] : cy})${A5 ? (i) => ` rotate(${A5[i]})` : rotate ? ` rotate(${rotate})` : ``}${anchor === "start" ? `` : anchor === "end" ? L ? (i) => ` translate(0,${L[i]})` : ` translate(0,${length3})` : L ? (i) => ` translate(0,${L[i] / 2})` : ` translate(0,${length3 / 2})`}`
      ).attr(
        "d",
        L ? (i) => {
          const p = pathRound();
          shape.draw(p, L[i], r);
          return p;
        } : (() => {
          const p = pathRound();
          shape.draw(p, length3, r);
          return p;
        })()
      ).call(applyChannelStyles, this, channels)
    ).node();
  }
};
function vectorX(data, options = {}) {
  const { x: x2 = identity6, ...rest } = options;
  return new Vector(data, { ...rest, x: x2 });
}
function vectorY(data, options = {}) {
  const { y: y2 = identity6, ...rest } = options;
  return new Vector(data, { ...rest, y: y2 });
}

// node_modules/@observablehq/plot/src/marks/axis.js
function maybeData(data, options) {
  if (arguments.length < 2 && !isIterable(data))
    options = data, data = null;
  if (options === void 0)
    options = {};
  return [data, options];
}
function maybeAnchor2({ anchor } = {}, anchors) {
  return anchor === void 0 ? anchors[0] : keyword(anchor, "anchor", anchors);
}
function anchorY2(options) {
  return maybeAnchor2(options, ["left", "right"]);
}
function anchorFy(options) {
  return maybeAnchor2(options, ["right", "left"]);
}
function anchorX2(options) {
  return maybeAnchor2(options, ["bottom", "top"]);
}
function anchorFx(options) {
  return maybeAnchor2(options, ["top", "bottom"]);
}
function axisY() {
  const [data, options] = maybeData(...arguments);
  return axisKy("y", anchorY2(options), data, options);
}
function axisFy() {
  const [data, options] = maybeData(...arguments);
  return axisKy("fy", anchorFy(options), data, options);
}
function axisX() {
  const [data, options] = maybeData(...arguments);
  return axisKx("x", anchorX2(options), data, options);
}
function axisFx() {
  const [data, options] = maybeData(...arguments);
  return axisKx("fx", anchorFx(options), data, options);
}
function axisKy(k2, anchor, data, {
  color: color3 = "currentColor",
  opacity: opacity2 = 1,
  stroke = color3,
  strokeOpacity = opacity2,
  strokeWidth = 1,
  fill = color3,
  fillOpacity = opacity2,
  textAnchor,
  textStroke,
  textStrokeOpacity,
  textStrokeWidth,
  tickSize = k2 === "y" ? 6 : 0,
  tickPadding,
  tickRotate,
  x: x2,
  margin,
  marginTop = margin === void 0 ? 20 : margin,
  marginRight = margin === void 0 ? anchor === "right" ? 40 : 0 : margin,
  marginBottom = margin === void 0 ? 20 : margin,
  marginLeft = margin === void 0 ? anchor === "left" ? 40 : 0 : margin,
  label,
  labelAnchor,
  labelArrow,
  labelOffset,
  ...options
}) {
  tickSize = number5(tickSize);
  tickPadding = number5(tickPadding);
  tickRotate = number5(tickRotate);
  if (labelAnchor !== void 0)
    labelAnchor = keyword(labelAnchor, "labelAnchor", ["center", "top", "bottom"]);
  labelArrow = maybeLabelArrow(labelArrow);
  return marks(
    tickSize && !isNoneish(stroke) ? axisTickKy(k2, anchor, data, {
      stroke,
      strokeOpacity,
      strokeWidth,
      tickSize,
      tickPadding,
      tickRotate,
      x: x2,
      ...options
    }) : null,
    !isNoneish(fill) ? axisTextKy(k2, anchor, data, {
      fill,
      fillOpacity,
      stroke: textStroke,
      strokeOpacity: textStrokeOpacity,
      strokeWidth: textStrokeWidth,
      textAnchor,
      tickSize,
      tickPadding,
      tickRotate,
      x: x2,
      marginTop,
      marginRight,
      marginBottom,
      marginLeft,
      ...options
    }) : null,
    !isNoneish(fill) && label !== null ? text(
      [],
      labelOptions({ fill, fillOpacity, ...options }, function(data2, facets, channels, scales, dimensions) {
        const scale = scales[k2];
        const { marginTop: marginTop2, marginRight: marginRight2, marginBottom: marginBottom2, marginLeft: marginLeft2 } = k2 === "y" && dimensions.inset || dimensions;
        const cla = labelAnchor ?? (scale.bandwidth ? "center" : "top");
        const clo = labelOffset ?? (anchor === "right" ? marginRight2 : marginLeft2) - 3;
        if (cla === "center") {
          this.textAnchor = void 0;
          this.lineAnchor = anchor === "right" ? "bottom" : "top";
          this.frameAnchor = anchor;
          this.rotate = -90;
        } else {
          this.textAnchor = anchor === "right" ? "end" : "start";
          this.lineAnchor = cla;
          this.frameAnchor = `${cla}-${anchor}`;
          this.rotate = 0;
        }
        this.dy = cla === "top" ? 3 - marginTop2 : cla === "bottom" ? marginBottom2 - 3 : 0;
        this.dx = anchor === "right" ? clo : -clo;
        this.ariaLabel = `${k2}-axis label`;
        return {
          facets: [[0]],
          channels: { text: { value: [formatAxisLabel(k2, scale, { anchor, label, labelAnchor: cla, labelArrow })] } }
        };
      })
    ) : null
  );
}
function axisKx(k2, anchor, data, {
  color: color3 = "currentColor",
  opacity: opacity2 = 1,
  stroke = color3,
  strokeOpacity = opacity2,
  strokeWidth = 1,
  fill = color3,
  fillOpacity = opacity2,
  textAnchor,
  textStroke,
  textStrokeOpacity,
  textStrokeWidth,
  tickSize = k2 === "x" ? 6 : 0,
  tickPadding,
  tickRotate,
  y: y2,
  margin,
  marginTop = margin === void 0 ? anchor === "top" ? 30 : 0 : margin,
  marginRight = margin === void 0 ? 20 : margin,
  marginBottom = margin === void 0 ? anchor === "bottom" ? 30 : 0 : margin,
  marginLeft = margin === void 0 ? 20 : margin,
  label,
  labelAnchor,
  labelArrow,
  labelOffset,
  ...options
}) {
  tickSize = number5(tickSize);
  tickPadding = number5(tickPadding);
  tickRotate = number5(tickRotate);
  if (labelAnchor !== void 0)
    labelAnchor = keyword(labelAnchor, "labelAnchor", ["center", "left", "right"]);
  labelArrow = maybeLabelArrow(labelArrow);
  return marks(
    tickSize && !isNoneish(stroke) ? axisTickKx(k2, anchor, data, {
      stroke,
      strokeOpacity,
      strokeWidth,
      tickSize,
      tickPadding,
      tickRotate,
      y: y2,
      ...options
    }) : null,
    !isNoneish(fill) ? axisTextKx(k2, anchor, data, {
      fill,
      fillOpacity,
      stroke: textStroke,
      strokeOpacity: textStrokeOpacity,
      strokeWidth: textStrokeWidth,
      textAnchor,
      tickSize,
      tickPadding,
      tickRotate,
      y: y2,
      marginTop,
      marginRight,
      marginBottom,
      marginLeft,
      ...options
    }) : null,
    !isNoneish(fill) && label !== null ? text(
      [],
      labelOptions({ fill, fillOpacity, ...options }, function(data2, facets, channels, scales, dimensions) {
        const scale = scales[k2];
        const { marginTop: marginTop2, marginRight: marginRight2, marginBottom: marginBottom2, marginLeft: marginLeft2 } = k2 === "x" && dimensions.inset || dimensions;
        const cla = labelAnchor ?? (scale.bandwidth ? "center" : "right");
        const clo = labelOffset ?? (anchor === "top" ? marginTop2 : marginBottom2) - 3;
        if (cla === "center") {
          this.frameAnchor = anchor;
          this.textAnchor = void 0;
        } else {
          this.frameAnchor = `${anchor}-${cla}`;
          this.textAnchor = cla === "right" ? "end" : "start";
        }
        this.lineAnchor = anchor;
        this.dy = anchor === "top" ? -clo : clo;
        this.dx = cla === "right" ? marginRight2 - 3 : cla === "left" ? 3 - marginLeft2 : 0;
        this.ariaLabel = `${k2}-axis label`;
        return {
          facets: [[0]],
          channels: { text: { value: [formatAxisLabel(k2, scale, { anchor, label, labelAnchor: cla, labelArrow })] } }
        };
      })
    ) : null
  );
}
function axisTickKy(k2, anchor, data, {
  strokeWidth = 1,
  strokeLinecap = null,
  strokeLinejoin = null,
  facetAnchor = anchor + (k2 === "y" ? "-empty" : ""),
  frameAnchor = anchor,
  tickSize,
  inset = 0,
  insetLeft = inset,
  insetRight = inset,
  dx = 0,
  y: y2 = k2 === "y" ? void 0 : null,
  ...options
}) {
  return axisMark(
    vectorY,
    k2,
    data,
    {
      ariaLabel: `${k2}-axis tick`,
      ariaHidden: true
    },
    {
      strokeWidth,
      strokeLinecap,
      strokeLinejoin,
      facetAnchor,
      frameAnchor,
      y: y2,
      ...options,
      dx: anchor === "left" ? +dx - offset + +insetLeft : +dx + offset - insetRight,
      anchor: "start",
      length: tickSize,
      shape: anchor === "left" ? shapeTickLeft : shapeTickRight
    }
  );
}
function axisTickKx(k2, anchor, data, {
  strokeWidth = 1,
  strokeLinecap = null,
  strokeLinejoin = null,
  facetAnchor = anchor + (k2 === "x" ? "-empty" : ""),
  frameAnchor = anchor,
  tickSize,
  inset = 0,
  insetTop = inset,
  insetBottom = inset,
  dy = 0,
  x: x2 = k2 === "x" ? void 0 : null,
  ...options
}) {
  return axisMark(
    vectorX,
    k2,
    data,
    {
      ariaLabel: `${k2}-axis tick`,
      ariaHidden: true
    },
    {
      strokeWidth,
      strokeLinejoin,
      strokeLinecap,
      facetAnchor,
      frameAnchor,
      x: x2,
      ...options,
      dy: anchor === "bottom" ? +dy - offset - insetBottom : +dy + offset + +insetTop,
      anchor: "start",
      length: tickSize,
      shape: anchor === "bottom" ? shapeTickBottom : shapeTickTop
    }
  );
}
function axisTextKy(k2, anchor, data, {
  facetAnchor = anchor + (k2 === "y" ? "-empty" : ""),
  frameAnchor = anchor,
  tickSize,
  tickRotate = 0,
  tickPadding = Math.max(3, 9 - tickSize) + (Math.abs(tickRotate) > 60 ? 4 * Math.cos(tickRotate * radians3) : 0),
  text: text2,
  textAnchor = Math.abs(tickRotate) > 60 ? "middle" : anchor === "left" ? "end" : "start",
  lineAnchor = tickRotate > 60 ? "top" : tickRotate < -60 ? "bottom" : "middle",
  fontVariant,
  inset = 0,
  insetLeft = inset,
  insetRight = inset,
  dx = 0,
  y: y2 = k2 === "y" ? void 0 : null,
  ...options
}) {
  return axisMark(
    textY,
    k2,
    data,
    { ariaLabel: `${k2}-axis tick label` },
    {
      facetAnchor,
      frameAnchor,
      text: text2,
      textAnchor,
      lineAnchor,
      fontVariant,
      rotate: tickRotate,
      y: y2,
      ...options,
      dx: anchor === "left" ? +dx - tickSize - tickPadding + +insetLeft : +dx + +tickSize + +tickPadding - insetRight
    },
    function(scale, data2, ticks2, tickFormat2, channels) {
      if (fontVariant === void 0)
        this.fontVariant = inferFontVariant3(scale);
      if (text2 === void 0)
        channels.text = inferTextChannel(scale, data2, ticks2, tickFormat2, anchor);
    }
  );
}
function axisTextKx(k2, anchor, data, {
  facetAnchor = anchor + (k2 === "x" ? "-empty" : ""),
  frameAnchor = anchor,
  tickSize,
  tickRotate = 0,
  tickPadding = Math.max(3, 9 - tickSize) + (Math.abs(tickRotate) >= 10 ? 4 * Math.cos(tickRotate * radians3) : 0),
  text: text2,
  textAnchor = Math.abs(tickRotate) >= 10 ? tickRotate < 0 ^ anchor === "bottom" ? "start" : "end" : "middle",
  lineAnchor = Math.abs(tickRotate) >= 10 ? "middle" : anchor === "bottom" ? "top" : "bottom",
  fontVariant,
  inset = 0,
  insetTop = inset,
  insetBottom = inset,
  dy = 0,
  x: x2 = k2 === "x" ? void 0 : null,
  ...options
}) {
  return axisMark(
    textX,
    k2,
    data,
    { ariaLabel: `${k2}-axis tick label` },
    {
      facetAnchor,
      frameAnchor,
      text: text2 === void 0 ? null : text2,
      textAnchor,
      lineAnchor,
      fontVariant,
      rotate: tickRotate,
      x: x2,
      ...options,
      dy: anchor === "bottom" ? +dy + +tickSize + +tickPadding - insetBottom : +dy - tickSize - tickPadding + +insetTop
    },
    function(scale, data2, ticks2, tickFormat2, channels) {
      if (fontVariant === void 0)
        this.fontVariant = inferFontVariant3(scale);
      if (text2 === void 0)
        channels.text = inferTextChannel(scale, data2, ticks2, tickFormat2, anchor);
    }
  );
}
function gridY() {
  const [data, options] = maybeData(...arguments);
  return gridKy("y", anchorY2(options), data, options);
}
function gridFy() {
  const [data, options] = maybeData(...arguments);
  return gridKy("fy", anchorFy(options), data, options);
}
function gridX() {
  const [data, options] = maybeData(...arguments);
  return gridKx("x", anchorX2(options), data, options);
}
function gridFx() {
  const [data, options] = maybeData(...arguments);
  return gridKx("fx", anchorFx(options), data, options);
}
function gridKy(k2, anchor, data, {
  y: y2 = k2 === "y" ? void 0 : null,
  x: x2 = null,
  x1: x12 = anchor === "left" ? x2 : null,
  x2: x22 = anchor === "right" ? x2 : null,
  ...options
}) {
  return axisMark(ruleY, k2, data, { ariaLabel: `${k2}-grid`, ariaHidden: true }, { y: y2, x1: x12, x2: x22, ...gridDefaults(options) });
}
function gridKx(k2, anchor, data, {
  x: x2 = k2 === "x" ? void 0 : null,
  y: y2 = null,
  y1: y12 = anchor === "top" ? y2 : null,
  y2: y22 = anchor === "bottom" ? y2 : null,
  ...options
}) {
  return axisMark(ruleX, k2, data, { ariaLabel: `${k2}-grid`, ariaHidden: true }, { x: x2, y1: y12, y2: y22, ...gridDefaults(options) });
}
function gridDefaults({
  color: color3 = "currentColor",
  opacity: opacity2 = 0.1,
  stroke = color3,
  strokeOpacity = opacity2,
  strokeWidth = 1,
  ...options
}) {
  return { stroke, strokeOpacity, strokeWidth, ...options };
}
function labelOptions({
  fill,
  fillOpacity,
  fontFamily,
  fontSize,
  fontStyle,
  fontVariant,
  fontWeight,
  monospace,
  pointerEvents,
  shapeRendering,
  clip = false
}, initializer2) {
  [, fill] = maybeColorChannel(fill);
  [, fillOpacity] = maybeNumberChannel(fillOpacity);
  return {
    facet: "super",
    x: null,
    y: null,
    fill,
    fillOpacity,
    fontFamily,
    fontSize,
    fontStyle,
    fontVariant,
    fontWeight,
    monospace,
    pointerEvents,
    shapeRendering,
    clip,
    initializer: initializer2
  };
}
function axisMark(mark, k2, data, properties, options, initialize) {
  let channels;
  function axisInitializer(data2, facets, _channels, scales, dimensions, context) {
    const initializeFacets = data2 == null && (k2 === "fx" || k2 === "fy");
    const { [k2]: scale } = scales;
    if (!scale)
      throw new Error(`missing scale: ${k2}`);
    const domain = scale.domain();
    let { interval: interval2, ticks: ticks2, tickFormat: tickFormat2, tickSpacing = k2 === "x" ? 80 : 35 } = options;
    if (typeof ticks2 === "string" && hasTemporalDomain(scale))
      interval2 = ticks2, ticks2 = void 0;
    if (ticks2 === void 0)
      ticks2 = maybeRangeInterval(interval2, scale.type) ?? inferTickCount(scale, tickSpacing);
    if (data2 == null) {
      if (isIterable(ticks2)) {
        data2 = arrayify2(ticks2);
      } else if (isInterval(ticks2)) {
        data2 = inclusiveRange(ticks2, ...extent(domain));
      } else if (scale.interval) {
        let interval3 = scale.interval;
        if (scale.ticks) {
          const [min4, max3] = extent(domain);
          const n = (max3 - min4) / interval3[intervalDuration];
          interval3 = generalizeTimeInterval(interval3, n / ticks2) ?? interval3;
          data2 = inclusiveRange(interval3, min4, max3);
        } else {
          data2 = domain;
          const n = data2.length;
          interval3 = generalizeTimeInterval(interval3, n / ticks2) ?? interval3;
          if (interval3 !== scale.interval)
            data2 = inclusiveRange(interval3, ...extent(data2));
        }
        if (interval3 === scale.interval) {
          const n = Math.round(data2.length / ticks2);
          if (n > 1)
            data2 = data2.filter((d, i) => i % n === 0);
        }
      } else if (scale.ticks) {
        data2 = scale.ticks(ticks2);
      } else {
        data2 = domain;
      }
      if (!scale.ticks && data2.length && data2 !== domain) {
        const domainSet = new InternSet(domain);
        data2 = data2.filter((d) => domainSet.has(d));
        if (!data2.length)
          warn(`Warning: the ${k2}-axis ticks appear to not align with the scale domain, resulting in no ticks. Try different ticks?`);
      }
      if (k2 === "y" || k2 === "x") {
        facets = [range2(data2)];
      } else {
        channels[k2] = { scale: k2, value: identity6 };
      }
    }
    initialize?.call(this, scale, data2, ticks2, tickFormat2, channels);
    const initializedChannels = Object.fromEntries(
      Object.entries(channels).map(([name, channel]) => {
        return [name, { ...channel, value: valueof(data2, channel.value) }];
      })
    );
    if (initializeFacets)
      facets = context.filterFacets(data2, initializedChannels);
    return { data: data2, facets, channels: initializedChannels };
  }
  const basicInitializer = initializer(options).initializer;
  const m = mark(data, initializer({ ...options, initializer: axisInitializer }, basicInitializer));
  if (data == null) {
    channels = m.channels;
    m.channels = {};
  } else {
    channels = {};
  }
  if (properties !== void 0)
    Object.assign(m, properties);
  if (m.clip === void 0)
    m.clip = false;
  return m;
}
function inferTickCount(scale, tickSpacing) {
  const [min4, max3] = extent(scale.range());
  return (max3 - min4) / tickSpacing;
}
function inferTextChannel(scale, data, ticks2, tickFormat2, anchor) {
  return { value: inferTickFormat(scale, data, ticks2, tickFormat2, anchor) };
}
function inferTickFormat(scale, data, ticks2, tickFormat2, anchor) {
  return typeof tickFormat2 === "function" && !(scale.type === "log" && scale.tickFormat) ? tickFormat2 : tickFormat2 === void 0 && data && isTemporal(data) ? inferTimeFormat(scale.type, data, anchor) ?? formatDefault : scale.tickFormat ? scale.tickFormat(typeof ticks2 === "number" ? ticks2 : null, tickFormat2) : tickFormat2 === void 0 ? formatDefault : typeof tickFormat2 === "string" ? (isTemporal(scale.domain()) ? utcFormat : format)(tickFormat2) : constant(tickFormat2);
}
function inclusiveRange(interval2, min4, max3) {
  return interval2.range(min4, interval2.offset(interval2.floor(max3)));
}
var shapeTickBottom = {
  draw(context, l) {
    context.moveTo(0, 0);
    context.lineTo(0, l);
  }
};
var shapeTickTop = {
  draw(context, l) {
    context.moveTo(0, 0);
    context.lineTo(0, -l);
  }
};
var shapeTickLeft = {
  draw(context, l) {
    context.moveTo(0, 0);
    context.lineTo(-l, 0);
  }
};
var shapeTickRight = {
  draw(context, l) {
    context.moveTo(0, 0);
    context.lineTo(l, 0);
  }
};
function inferFontVariant3(scale) {
  return scale.bandwidth && !scale.interval ? void 0 : "tabular-nums";
}
function formatAxisLabel(k2, scale, { anchor, label = scale.label, labelAnchor, labelArrow } = {}) {
  if (label == null || label.inferred && hasTemporalDomain(scale) && /^(date|time|year)$/i.test(label))
    return;
  label = String(label);
  if (labelArrow === "auto")
    labelArrow = (!scale.bandwidth || scale.interval) && !/[↑↓→←]/.test(label);
  if (!labelArrow)
    return label;
  if (labelArrow === true) {
    const order = inferScaleOrder(scale);
    if (order)
      labelArrow = /x$/.test(k2) || labelAnchor === "center" ? /x$/.test(k2) === order < 0 ? "left" : "right" : order < 0 ? "up" : "down";
  }
  switch (labelArrow) {
    case "left":
      return `\u2190 ${label}`;
    case "right":
      return `${label} \u2192`;
    case "up":
      return anchor === "right" ? `${label} \u2191` : `\u2191 ${label}`;
    case "down":
      return anchor === "right" ? `${label} \u2193` : `\u2193 ${label}`;
  }
  return label;
}
function maybeLabelArrow(labelArrow = "auto") {
  return isNoneish(labelArrow) ? false : typeof labelArrow === "boolean" ? labelArrow : keyword(labelArrow, "labelArrow", ["auto", "up", "right", "down", "left"]);
}
function hasTemporalDomain(scale) {
  return isTemporal(scale.domain());
}

// node_modules/@observablehq/plot/src/legends/swatches.js
function maybeScale(scale, key) {
  if (key == null)
    return key;
  const s2 = scale(key);
  if (!s2)
    throw new Error(`scale not found: ${key}`);
  return s2;
}
function legendSwatches(color3, { opacity: opacity2, ...options } = {}) {
  if (!isOrdinalScale(color3) && !isThresholdScale(color3))
    throw new Error(`swatches legend requires ordinal or threshold color scale (not ${color3.type})`);
  return legendItems(
    color3,
    options,
    (selection2, scale, width, height) => selection2.append("svg").attr("width", width).attr("height", height).attr("fill", scale.scale).attr("fill-opacity", maybeNumberChannel(opacity2)[1]).append("rect").attr("width", "100%").attr("height", "100%")
  );
}
function legendSymbols(symbol2, {
  fill = symbol2.hint?.fill !== void 0 ? symbol2.hint.fill : "none",
  fillOpacity = 1,
  stroke = symbol2.hint?.stroke !== void 0 ? symbol2.hint.stroke : isNoneish(fill) ? "currentColor" : "none",
  strokeOpacity = 1,
  strokeWidth = 1.5,
  r = 4.5,
  ...options
} = {}, scale) {
  const [vf, cf] = maybeColorChannel(fill);
  const [vs, cs] = maybeColorChannel(stroke);
  const sf = maybeScale(scale, vf);
  const ss = maybeScale(scale, vs);
  const size = r * r * Math.PI;
  fillOpacity = maybeNumberChannel(fillOpacity)[1];
  strokeOpacity = maybeNumberChannel(strokeOpacity)[1];
  strokeWidth = maybeNumberChannel(strokeWidth)[1];
  return legendItems(
    symbol2,
    options,
    (selection2, scale2, width, height) => selection2.append("svg").attr("viewBox", "-8 -8 16 16").attr("width", width).attr("height", height).attr("fill", vf === "color" ? (d) => sf.scale(d) : cf).attr("fill-opacity", fillOpacity).attr("stroke", vs === "color" ? (d) => ss.scale(d) : cs).attr("stroke-opacity", strokeOpacity).attr("stroke-width", strokeWidth).append("path").attr("d", (d) => {
      const p = pathRound();
      symbol2.scale(d).draw(p, size);
      return p;
    })
  );
}
function legendItems(scale, options = {}, swatch) {
  let {
    columns: columns2,
    tickFormat: tickFormat2,
    fontVariant = inferFontVariant(scale),
    // TODO label,
    swatchSize = 15,
    swatchWidth = swatchSize,
    swatchHeight = swatchSize,
    marginLeft = 0,
    className,
    style,
    width
  } = options;
  const context = createContext(options);
  className = maybeClassName(className);
  tickFormat2 = inferTickFormat(scale.scale, scale.domain, void 0, tickFormat2);
  const swatches = create2("div", context).attr(
    "class",
    `${className}-swatches ${className}-swatches-${columns2 != null ? "columns" : "wrap"}`
  );
  let extraStyle;
  if (columns2 != null) {
    extraStyle = `:where(.${className}-swatches-columns .${className}-swatch) {
  display: flex;
  align-items: center;
  break-inside: avoid;
  padding-bottom: 1px;
}
:where(.${className}-swatches-columns .${className}-swatch::before) {
  flex-shrink: 0;
}
:where(.${className}-swatches-columns .${className}-swatch-label) {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}`;
    swatches.style("columns", columns2).selectAll().data(scale.domain).enter().append("div").attr("class", `${className}-swatch`).call(swatch, scale, swatchWidth, swatchHeight).call(
      (item) => item.append("div").attr("class", `${className}-swatch-label`).attr("title", tickFormat2).text(tickFormat2)
    );
  } else {
    extraStyle = `:where(.${className}-swatches-wrap) {
  display: flex;
  align-items: center;
  min-height: 33px;
  flex-wrap: wrap;
}
:where(.${className}-swatches-wrap .${className}-swatch) {
  display: inline-flex;
  align-items: center;
  margin-right: 1em;
}`;
    swatches.selectAll().data(scale.domain).enter().append("span").attr("class", `${className}-swatch`).call(swatch, scale, swatchWidth, swatchHeight).append(function() {
      return this.ownerDocument.createTextNode(tickFormat2.apply(this, arguments));
    });
  }
  return swatches.call(
    (div) => div.insert("style", "*").text(
      `:where(.${className}-swatches) {
  font-family: system-ui, sans-serif;
  font-size: 10px;
  margin-bottom: 0.5em;
}
:where(.${className}-swatch > svg) {
  margin-right: 0.5em;
  overflow: visible;
}
${extraStyle}`
    )
  ).style("margin-left", marginLeft ? `${+marginLeft}px` : null).style("width", width === void 0 ? null : `${+width}px`).style("font-variant", impliedString(fontVariant, "normal")).call(applyInlineStyles, style).node();
}

// node_modules/@observablehq/plot/src/legends.js
var legendRegistry = /* @__PURE__ */ new Map([
  ["symbol", legendSymbols],
  ["color", legendColor],
  ["opacity", legendOpacity]
]);
function exposeLegends(scales, context, defaults9 = {}) {
  return (key, options) => {
    if (!legendRegistry.has(key))
      throw new Error(`unknown legend type: ${key}`);
    if (!(key in scales))
      return;
    return legendRegistry.get(key)(scales[key], legendOptions(context, defaults9[key], options), (key2) => scales[key2]);
  };
}
function legendOptions({ className, ...context }, { label, ticks: ticks2, tickFormat: tickFormat2 } = {}, options) {
  return inherit2(options, { className, ...context }, { label, ticks: ticks2, tickFormat: tickFormat2 });
}
function legendColor(color3, { legend = true, ...options }) {
  if (legend === true)
    legend = color3.type === "ordinal" ? "swatches" : "ramp";
  if (color3.domain === void 0)
    return;
  switch (`${legend}`.toLowerCase()) {
    case "swatches":
      return legendSwatches(color3, options);
    case "ramp":
      return legendRamp(color3, options);
    default:
      throw new Error(`unknown legend type: ${legend}`);
  }
}
function legendOpacity({ type: type2, interpolate, ...scale }, { legend = true, color: color3 = rgb(0, 0, 0), ...options }) {
  if (!interpolate)
    throw new Error(`${type2} opacity scales are not supported`);
  if (legend === true)
    legend = "ramp";
  if (`${legend}`.toLowerCase() !== "ramp")
    throw new Error(`${legend} opacity legends are not supported`);
  return legendColor({ type: type2, ...scale, interpolate: interpolateOpacity(color3) }, { legend, ...options });
}
function interpolateOpacity(color3) {
  const { r, g, b } = rgb(color3) || rgb(0, 0, 0);
  return (t) => `rgba(${r},${g},${b},${t})`;
}
function createLegends(scales, context, options) {
  const legends = [];
  for (const [key, value] of legendRegistry) {
    const o = options[key];
    if (o?.legend && key in scales) {
      const legend = value(scales[key], legendOptions(context, scales[key], o), (key2) => scales[key2]);
      if (legend != null)
        legends.push(legend);
    }
  }
  return legends;
}

// node_modules/@observablehq/plot/src/marks/frame.js
var defaults4 = {
  ariaLabel: "frame",
  fill: "none",
  stroke: "currentColor",
  clip: false
};
var lineDefaults = {
  ariaLabel: "frame",
  fill: null,
  stroke: "currentColor",
  strokeLinecap: "square",
  clip: false
};
var Frame = class extends Mark {
  constructor(options = {}) {
    const {
      anchor = null,
      inset = 0,
      insetTop = inset,
      insetRight = inset,
      insetBottom = inset,
      insetLeft = inset,
      rx,
      ry
    } = options;
    super(singleton, void 0, options, anchor == null ? defaults4 : lineDefaults);
    this.anchor = maybeKeyword(anchor, "anchor", ["top", "right", "bottom", "left"]);
    this.insetTop = number5(insetTop);
    this.insetRight = number5(insetRight);
    this.insetBottom = number5(insetBottom);
    this.insetLeft = number5(insetLeft);
    this.rx = number5(rx);
    this.ry = number5(ry);
  }
  render(index2, scales, channels, dimensions, context) {
    const { marginTop, marginRight, marginBottom, marginLeft, width, height } = dimensions;
    const { anchor, insetTop, insetRight, insetBottom, insetLeft, rx, ry } = this;
    const x12 = marginLeft + insetLeft;
    const x2 = width - marginRight - insetRight;
    const y12 = marginTop + insetTop;
    const y2 = height - marginBottom - insetBottom;
    return create2(anchor ? "svg:line" : "svg:rect", context).datum(0).call(applyIndirectStyles, this, dimensions, context).call(applyDirectStyles, this).call(applyChannelStyles, this, channels).call(applyTransform, this, {}).call(
      anchor === "left" ? (line2) => line2.attr("x1", x12).attr("x2", x12).attr("y1", y12).attr("y2", y2) : anchor === "right" ? (line2) => line2.attr("x1", x2).attr("x2", x2).attr("y1", y12).attr("y2", y2) : anchor === "top" ? (line2) => line2.attr("x1", x12).attr("x2", x2).attr("y1", y12).attr("y2", y12) : anchor === "bottom" ? (line2) => line2.attr("x1", x12).attr("x2", x2).attr("y1", y2).attr("y2", y2) : (rect) => rect.attr("x", x12).attr("y", y12).attr("width", x2 - x12).attr("height", y2 - y12).attr("rx", rx).attr("ry", ry)
    ).node();
  }
};
function frame2(options) {
  return new Frame(options);
}

// node_modules/@observablehq/plot/src/marks/tip.js
var defaults5 = {
  ariaLabel: "tip",
  fill: "var(--plot-background)",
  stroke: "currentColor"
};
var ignoreChannels = /* @__PURE__ */ new Set(["geometry", "href", "src", "ariaLabel", "scales"]);
var Tip = class extends Mark {
  constructor(data, options = {}) {
    if (options.tip)
      options = { ...options, tip: false };
    if (options.title === void 0 && isIterable(data) && isTextual(data))
      options = { ...options, title: identity6 };
    const {
      x: x2,
      y: y2,
      x1: x12,
      x2: x22,
      y1: y12,
      y2: y22,
      anchor,
      preferredAnchor = "bottom",
      monospace,
      fontFamily = monospace ? "ui-monospace, monospace" : void 0,
      fontSize,
      fontStyle,
      fontVariant,
      fontWeight,
      lineHeight = 1,
      lineWidth = 20,
      frameAnchor,
      format: format3,
      textAnchor = "start",
      textOverflow,
      textPadding = 8,
      title,
      pointerSize = 12,
      pathFilter = "drop-shadow(0 3px 4px rgba(0,0,0,0.2))"
    } = options;
    super(
      data,
      {
        x: { value: x12 != null && x22 != null ? null : x2, scale: "x", optional: true },
        // ignore midpoint
        y: { value: y12 != null && y22 != null ? null : y2, scale: "y", optional: true },
        // ignore midpoint
        x1: { value: x12, scale: "x", optional: x22 == null },
        y1: { value: y12, scale: "y", optional: y22 == null },
        x2: { value: x22, scale: "x", optional: x12 == null },
        y2: { value: y22, scale: "y", optional: y12 == null },
        title: { value: title, optional: true }
        // filter: defined
      },
      options,
      defaults5
    );
    this.anchor = maybeAnchor(anchor, "anchor");
    this.preferredAnchor = maybeAnchor(preferredAnchor, "preferredAnchor");
    this.frameAnchor = maybeFrameAnchor(frameAnchor);
    this.textAnchor = impliedString(textAnchor, "middle");
    this.textPadding = +textPadding;
    this.pointerSize = +pointerSize;
    this.pathFilter = string(pathFilter);
    this.lineHeight = +lineHeight;
    this.lineWidth = +lineWidth;
    this.textOverflow = maybeTextOverflow(textOverflow);
    this.monospace = !!monospace;
    this.fontFamily = string(fontFamily);
    this.fontSize = number5(fontSize);
    this.fontStyle = string(fontStyle);
    this.fontVariant = string(fontVariant);
    this.fontWeight = string(fontWeight);
    for (const key in defaults5)
      if (key in this.channels)
        this[key] = defaults5[key];
    this.splitLines = splitter(this);
    this.clipLine = clipper(this);
    this.format = typeof format3 === "string" || typeof format3 === "function" ? { title: format3 } : { ...format3 };
  }
  render(index2, scales, values2, dimensions, context) {
    const mark = this;
    const { x: x2, y: y2, fx, fy } = scales;
    const { ownerSVGElement: svg, document: document2 } = context;
    const { anchor, monospace, lineHeight, lineWidth } = this;
    const { textPadding: r, pointerSize: m, pathFilter } = this;
    const { marginTop, marginLeft } = dimensions;
    const { x1: X12, y1: Y12, x2: X22, y2: Y22, x: X3 = X12 ?? X22, y: Y3 = Y12 ?? Y22 } = values2;
    const ox = fx ? fx(index2.fx) - marginLeft : 0;
    const oy = fy ? fy(index2.fy) - marginTop : 0;
    const [cx, cy] = applyFrameAnchor(this, dimensions);
    const px = anchorX(values2, cx);
    const py = anchorY(values2, cy);
    const widthof = monospace ? monospaceWidth : defaultWidth;
    const ee = widthof(ellipsis);
    let sources, format3;
    if ("title" in values2) {
      sources = getSourceChannels.call(this, { title: values2.channels.title }, scales);
      format3 = formatTitle;
    } else {
      sources = getSourceChannels.call(this, values2.channels, scales);
      format3 = formatChannels;
    }
    const g = create2("svg:g", context).call(applyIndirectStyles, this, dimensions, context).call(applyIndirectTextStyles, this).call(applyTransform, this, { x: X3 && x2, y: Y3 && y2 }).call(
      (g2) => g2.selectAll().data(index2).enter().append("g").attr("transform", (i) => `translate(${Math.round(px(i))},${Math.round(py(i))})`).call(applyDirectStyles, this).call((g3) => g3.append("path").attr("filter", pathFilter)).call(
        (g3) => g3.append("text").each(function(i) {
          const that = select_default2(this);
          this.setAttribute("fill", "currentColor");
          this.setAttribute("fill-opacity", 1);
          this.setAttribute("stroke", "none");
          const lines = format3.call(mark, i, index2, sources, scales, values2);
          if (typeof lines === "string") {
            for (const line2 of mark.splitLines(lines)) {
              renderLine(that, { value: mark.clipLine(line2) });
            }
          } else {
            const labels = /* @__PURE__ */ new Set();
            for (const line2 of lines) {
              const { label = "" } = line2;
              if (label && labels.has(label))
                continue;
              else
                labels.add(label);
              renderLine(that, line2);
            }
          }
        })
      )
    );
    function renderLine(selection2, { label, value, color: color3, opacity: opacity2 }) {
      label ??= "", value ??= "";
      const swatch = color3 != null || opacity2 != null;
      let title;
      let w = lineWidth * 100;
      const [j] = cut(label, w, widthof, ee);
      if (j >= 0) {
        label = label.slice(0, j).trimEnd() + ellipsis;
        title = value.trim();
        value = "";
      } else {
        if (label || !value && !swatch)
          value = " " + value;
        const [k2] = cut(value, w - widthof(label), widthof, ee);
        if (k2 >= 0) {
          title = value.trim();
          value = value.slice(0, k2).trimEnd() + ellipsis;
        }
      }
      const line2 = selection2.append("tspan").attr("x", 0).attr("dy", `${lineHeight}em`).text("\u200B");
      if (label)
        line2.append("tspan").attr("font-weight", "bold").text(label);
      if (value)
        line2.append(() => document2.createTextNode(value));
      if (swatch)
        line2.append("tspan").text(" \u25A0").attr("fill", color3).attr("fill-opacity", opacity2).style("user-select", "none");
      if (title)
        line2.append("title").text(title);
    }
    function postrender() {
      const { width, height } = dimensions.facet ?? dimensions;
      g.selectChildren().each(function(i) {
        let { x: tx, width: w, height: h } = this.getBBox();
        w = Math.round(w), h = Math.round(h);
        let a2 = anchor;
        if (a2 === void 0) {
          const x3 = px(i) + ox;
          const y3 = py(i) + oy;
          const fitLeft = x3 + w + m + r * 2 < width;
          const fitRight = x3 - w - m - r * 2 > 0;
          const fitTop = y3 + h + m + r * 2 < height;
          const fitBottom = y3 - h - m - r * 2 > 0;
          a2 = fitLeft && fitRight ? fitTop && fitBottom ? mark.preferredAnchor : fitBottom ? "bottom" : "top" : fitTop && fitBottom ? fitLeft ? "left" : "right" : (fitLeft || fitRight) && (fitTop || fitBottom) ? `${fitBottom ? "bottom" : "top"}-${fitLeft ? "left" : "right"}` : mark.preferredAnchor;
        }
        const path2 = this.firstChild;
        const text2 = this.lastChild;
        path2.setAttribute("d", getPath(a2, m, r, w, h));
        if (tx)
          for (const t of text2.childNodes)
            t.setAttribute("x", -tx);
        text2.setAttribute("y", `${+getLineOffset(a2, text2.childNodes.length, lineHeight).toFixed(6)}em`);
        text2.setAttribute("transform", `translate(${getTextTranslate(a2, m, r, w, h)})`);
      });
      g.attr("visibility", null);
    }
    if (index2.length) {
      g.attr("visibility", "hidden");
      if (svg.isConnected)
        Promise.resolve().then(postrender);
      else if (typeof requestAnimationFrame !== "undefined")
        requestAnimationFrame(postrender);
    }
    return g.node();
  }
};
function tip(data, { x: x2, y: y2, ...options } = {}) {
  if (options.frameAnchor === void 0)
    [x2, y2] = maybeTuple(x2, y2);
  return new Tip(data, { ...options, x: x2, y: y2 });
}
function getLineOffset(anchor, length3, lineHeight) {
  return /^top(?:-|$)/.test(anchor) ? 0.94 - lineHeight : /^bottom(?:-|$)/ ? -0.29 - length3 * lineHeight : length3 / 2 * lineHeight;
}
function getTextTranslate(anchor, m, r, width, height) {
  switch (anchor) {
    case "middle":
      return [-width / 2, height / 2];
    case "top-left":
      return [r, m + r];
    case "top":
      return [-width / 2, m / 2 + r];
    case "top-right":
      return [-width - r, m + r];
    case "right":
      return [-m / 2 - width - r, height / 2];
    case "bottom-left":
      return [r, -m - r];
    case "bottom":
      return [-width / 2, -m / 2 - r];
    case "bottom-right":
      return [-width - r, -m - r];
    case "left":
      return [r + m / 2, height / 2];
  }
}
function getPath(anchor, m, r, width, height) {
  const w = width + r * 2;
  const h = height + r * 2;
  switch (anchor) {
    case "middle":
      return `M${-w / 2},${-h / 2}h${w}v${h}h${-w}z`;
    case "top-left":
      return `M0,0l${m},${m}h${w - m}v${h}h${-w}z`;
    case "top":
      return `M0,0l${m / 2},${m / 2}h${(w - m) / 2}v${h}h${-w}v${-h}h${(w - m) / 2}z`;
    case "top-right":
      return `M0,0l${-m},${m}h${m - w}v${h}h${w}z`;
    case "right":
      return `M0,0l${-m / 2},${-m / 2}v${m / 2 - h / 2}h${-w}v${h}h${w}v${m / 2 - h / 2}z`;
    case "bottom-left":
      return `M0,0l${m},${-m}h${w - m}v${-h}h${-w}z`;
    case "bottom":
      return `M0,0l${m / 2},${-m / 2}h${(w - m) / 2}v${-h}h${-w}v${h}h${(w - m) / 2}z`;
    case "bottom-right":
      return `M0,0l${-m},${-m}h${m - w}v${-h}h${w}z`;
    case "left":
      return `M0,0l${m / 2},${-m / 2}v${m / 2 - h / 2}h${w}v${h}h${-w}v${m / 2 - h / 2}z`;
  }
}
function getSourceChannels(channels, scales) {
  const sources = {};
  let format3 = this.format;
  format3 = maybeExpandPairedFormat(format3, channels, "x");
  format3 = maybeExpandPairedFormat(format3, channels, "y");
  this.format = format3;
  for (const key in format3) {
    const value = format3[key];
    if (value === null || value === false) {
      continue;
    } else if (key === "fx" || key === "fy") {
      sources[key] = true;
    } else {
      const source = getSource(channels, key);
      if (source)
        sources[key] = source;
    }
  }
  for (const key in channels) {
    if (key in sources || key in format3 || ignoreChannels.has(key))
      continue;
    const source = getSource(channels, key);
    if (source)
      sources[key] = source;
  }
  if (this.facet) {
    if (scales.fx && !("fx" in format3))
      sources.fx = true;
    if (scales.fy && !("fy" in format3))
      sources.fy = true;
  }
  for (const key in sources) {
    const format4 = this.format[key];
    if (typeof format4 === "string") {
      const value = sources[key]?.value ?? scales[key]?.domain() ?? [];
      this.format[key] = (isTemporal(value) ? utcFormat : format)(format4);
    } else if (format4 === void 0 || format4 === true) {
      const scale = scales[key];
      this.format[key] = scale?.bandwidth ? inferTickFormat(scale, scale.domain()) : formatDefault;
    }
  }
  return sources;
}
function maybeExpandPairedFormat(format3, channels, key) {
  if (!(key in format3))
    return format3;
  const key1 = `${key}1`;
  const key2 = `${key}2`;
  if ((key1 in format3 || !(key1 in channels)) && (key2 in format3 || !(key2 in channels)))
    return format3;
  const entries = Object.entries(format3);
  const value = format3[key];
  entries.splice(entries.findIndex(([name]) => name === key) + 1, 0, [key1, value], [key2, value]);
  return Object.fromEntries(entries);
}
function formatTitle(i, index2, { title }) {
  return this.format.title(title.value[i], i);
}
function* formatChannels(i, index2, channels, scales, values2) {
  for (const key in channels) {
    if (key === "fx" || key === "fy") {
      yield {
        label: formatLabel(scales, channels, key),
        value: this.format[key](index2[key], i)
      };
      continue;
    }
    if (key === "x1" && "x2" in channels)
      continue;
    if (key === "y1" && "y2" in channels)
      continue;
    const channel = channels[key];
    if (key === "x2" && "x1" in channels) {
      yield {
        label: formatPairLabel(scales, channels, "x"),
        value: formatPair(this.format.x2, channels.x1, channel, i)
      };
    } else if (key === "y2" && "y1" in channels) {
      yield {
        label: formatPairLabel(scales, channels, "y"),
        value: formatPair(this.format.y2, channels.y1, channel, i)
      };
    } else {
      const value = channel.value[i];
      const scale = channel.scale;
      if (!defined(value) && scale == null)
        continue;
      yield {
        label: formatLabel(scales, channels, key),
        value: this.format[key](value, i),
        color: scale === "color" ? values2[key][i] : null,
        opacity: scale === "opacity" ? values2[key][i] : null
      };
    }
  }
}
function formatPair(formatValue, c1, c22, i) {
  return c22.hint?.length ? `${formatValue(c22.value[i] - c1.value[i], i)}` : `${formatValue(c1.value[i], i)}\u2013${formatValue(c22.value[i], i)}`;
}
function formatPairLabel(scales, channels, key) {
  const l1 = formatLabel(scales, channels, `${key}1`, key);
  const l2 = formatLabel(scales, channels, `${key}2`, key);
  return l1 === l2 ? l1 : `${l1}\u2013${l2}`;
}
function formatLabel(scales, channels, key, defaultLabel = key) {
  const channel = channels[key];
  const scale = scales[channel?.scale ?? key];
  return String(scale?.label ?? channel?.label ?? defaultLabel);
}

// node_modules/@observablehq/plot/src/plot.js
function plot(options = {}) {
  const { facet, style, title, subtitle, caption, ariaLabel, ariaDescription } = options;
  const className = maybeClassName(options.className);
  const marks2 = options.marks === void 0 ? [] : flatMarks(options.marks);
  marks2.push(...inferTips(marks2));
  const topFacetState = maybeTopFacet(facet, options);
  const facetStateByMark = /* @__PURE__ */ new Map();
  for (const mark of marks2) {
    const facetState = maybeMarkFacet(mark, topFacetState, options);
    if (facetState)
      facetStateByMark.set(mark, facetState);
  }
  const channelsByScale = /* @__PURE__ */ new Map();
  if (topFacetState)
    addScaleChannels(channelsByScale, [topFacetState], options);
  addScaleChannels(channelsByScale, facetStateByMark, options);
  const axes = flatMarks(inferAxes(marks2, channelsByScale, options));
  for (const mark of axes) {
    const facetState = maybeMarkFacet(mark, topFacetState, options);
    if (facetState)
      facetStateByMark.set(mark, facetState);
  }
  marks2.unshift(...axes);
  let facets = createFacets(channelsByScale, options);
  if (facets !== void 0) {
    const topFacetsIndex = topFacetState ? facetFilter(facets, topFacetState) : void 0;
    for (const mark of marks2) {
      if (mark.facet === null || mark.facet === "super")
        continue;
      const facetState = facetStateByMark.get(mark);
      if (facetState === void 0)
        continue;
      facetState.facetsIndex = mark.fx != null || mark.fy != null ? facetFilter(facets, facetState) : topFacetsIndex;
    }
    const nonEmpty = /* @__PURE__ */ new Set();
    for (const { facetsIndex } of facetStateByMark.values()) {
      facetsIndex?.forEach((index2, i) => {
        if (index2?.length > 0) {
          nonEmpty.add(i);
        }
      });
    }
    facets.forEach(
      0 < nonEmpty.size && nonEmpty.size < facets.length ? (f, i) => f.empty = !nonEmpty.has(i) : (f) => f.empty = false
    );
    for (const mark of marks2) {
      if (mark.facet === "exclude") {
        const facetState = facetStateByMark.get(mark);
        if (facetState !== void 0)
          facetState.facetsIndex = facetExclude(facetState.facetsIndex);
      }
    }
  }
  for (const key of registry.keys()) {
    if (isScaleOptions(options[key]) && key !== "fx" && key !== "fy") {
      channelsByScale.set(key, []);
    }
  }
  const stateByMark = /* @__PURE__ */ new Map();
  for (const mark of marks2) {
    if (stateByMark.has(mark))
      throw new Error("duplicate mark; each mark must be unique");
    const { facetsIndex, channels: facetChannels } = facetStateByMark.get(mark) ?? {};
    const { data, facets: facets2, channels } = mark.initialize(facetsIndex, facetChannels, options);
    applyScaleTransforms(channels, options);
    stateByMark.set(mark, { data, facets: facets2, channels });
  }
  const scaleDescriptors = createScales(addScaleChannels(channelsByScale, stateByMark, options), options);
  const dimensions = createDimensions(scaleDescriptors, marks2, options);
  autoScaleRange(scaleDescriptors, dimensions);
  const scales = createScaleFunctions(scaleDescriptors);
  const { fx, fy } = scales;
  const subdimensions = fx || fy ? innerDimensions(scaleDescriptors, dimensions) : dimensions;
  const superdimensions = fx || fy ? actualDimensions(scales, dimensions) : dimensions;
  const context = createContext(options);
  const document2 = context.document;
  const svg = creator_default("svg").call(document2.documentElement);
  let figure = svg;
  context.ownerSVGElement = svg;
  context.className = className;
  context.projection = createProjection(options, subdimensions);
  context.filterFacets = (data, channels) => {
    return facetFilter(facets, { channels, groups: facetGroups(data, channels) });
  };
  context.getMarkState = (mark) => {
    const state = stateByMark.get(mark);
    const facetState = facetStateByMark.get(mark);
    return { ...state, channels: { ...state.channels, ...facetState?.channels } };
  };
  context.dispatchValue = (value) => {
    if (figure.value === value)
      return;
    figure.value = value;
    figure.dispatchEvent(new Event("input", { bubbles: true }));
  };
  const newByScale = /* @__PURE__ */ new Set();
  for (const [mark, state] of stateByMark) {
    if (mark.initializer != null) {
      const dimensions2 = mark.facet === "super" ? superdimensions : subdimensions;
      const update = mark.initializer(state.data, state.facets, state.channels, scales, dimensions2, context);
      if (update.data !== void 0) {
        state.data = update.data;
      }
      if (update.facets !== void 0) {
        state.facets = update.facets;
      }
      if (update.channels !== void 0) {
        const { fx: fx2, fy: fy2, ...channels } = update.channels;
        inferChannelScales(channels);
        Object.assign(state.channels, channels);
        for (const channel of Object.values(channels)) {
          const { scale } = channel;
          if (scale != null && !isPosition(registry.get(scale))) {
            applyScaleTransform(channel, options);
            newByScale.add(scale);
          }
        }
        if (fx2 != null || fy2 != null)
          facetStateByMark.set(mark, true);
      }
    }
  }
  if (newByScale.size) {
    const newChannelsByScale = /* @__PURE__ */ new Map();
    addScaleChannels(newChannelsByScale, stateByMark, options, (key) => newByScale.has(key));
    addScaleChannels(channelsByScale, stateByMark, options, (key) => newByScale.has(key));
    const newScaleDescriptors = inheritScaleLabels(createScales(newChannelsByScale, options), scaleDescriptors);
    const { scales: newExposedScales, ...newScales } = createScaleFunctions(newScaleDescriptors);
    Object.assign(scaleDescriptors, newScaleDescriptors);
    Object.assign(scales, newScales);
    Object.assign(scales.scales, newExposedScales);
  }
  let facetDomains, facetTranslate;
  if (facets !== void 0) {
    facetDomains = { x: fx?.domain(), y: fy?.domain() };
    facets = recreateFacets(facets, facetDomains);
    facetTranslate = facetTranslator(fx, fy, dimensions);
  }
  for (const [mark, state] of stateByMark) {
    state.values = mark.scale(state.channels, scales, context);
  }
  const { width, height } = dimensions;
  select_default2(svg).attr("class", className).attr("fill", "currentColor").attr("font-family", "system-ui, sans-serif").attr("font-size", 10).attr("text-anchor", "middle").attr("width", width).attr("height", height).attr("viewBox", `0 0 ${width} ${height}`).attr("aria-label", ariaLabel).attr("aria-description", ariaDescription).call(
    (svg2) => (
      // Warning: if you edit this, change defaultClassName.
      svg2.append("style").text(
        `:where(.${className}) {
  --plot-background: white;
  display: block;
  height: auto;
  height: intrinsic;
  max-width: 100%;
}
:where(.${className} text),
:where(.${className} tspan) {
  white-space: pre;
}`
      )
    )
  ).call(applyInlineStyles, style);
  for (const mark of marks2) {
    const { channels, values: values2, facets: indexes2 } = stateByMark.get(mark);
    if (facets === void 0 || mark.facet === "super") {
      let index2 = null;
      if (indexes2) {
        index2 = indexes2[0];
        index2 = mark.filter(index2, channels, values2);
        if (index2.length === 0)
          continue;
      }
      const node = mark.render(index2, scales, values2, superdimensions, context);
      if (node == null)
        continue;
      svg.appendChild(node);
    } else {
      let g;
      for (const f of facets) {
        if (!(mark.facetAnchor?.(facets, facetDomains, f) ?? !f.empty))
          continue;
        let index2 = null;
        if (indexes2) {
          const faceted = facetStateByMark.has(mark);
          index2 = indexes2[faceted ? f.i : 0];
          index2 = mark.filter(index2, channels, values2);
          if (index2.length === 0)
            continue;
          if (!faceted && index2 === indexes2[0])
            index2 = subarray(index2);
          index2.fx = f.x, index2.fy = f.y, index2.fi = f.i;
        }
        const node = mark.render(index2, scales, values2, subdimensions, context);
        if (node == null)
          continue;
        (g ??= select_default2(svg).append("g")).append(() => node).datum(f);
        for (const name of ["aria-label", "aria-description", "aria-hidden", "transform"]) {
          if (node.hasAttribute(name)) {
            g.attr(name, node.getAttribute(name));
            node.removeAttribute(name);
          }
        }
      }
      g?.selectChildren().attr("transform", facetTranslate);
    }
  }
  const legends = createLegends(scaleDescriptors, context, options);
  const { figure: figured = title != null || subtitle != null || caption != null || legends.length > 0 } = options;
  if (figured) {
    figure = document2.createElement("figure");
    figure.className = `${className}-figure`;
    figure.style.maxWidth = "initial";
    if (title != null)
      figure.append(createTitleElement(document2, title, "h2"));
    if (subtitle != null)
      figure.append(createTitleElement(document2, subtitle, "h3"));
    figure.append(...legends, svg);
    if (caption != null)
      figure.append(createFigcaption(document2, caption));
    if ("value" in svg)
      figure.value = svg.value, delete svg.value;
  }
  figure.scale = exposeScales(scales.scales);
  figure.legend = exposeLegends(scaleDescriptors, context, options);
  const w = consumeWarnings();
  if (w > 0) {
    select_default2(svg).append("text").attr("x", width).attr("y", 20).attr("dy", "-1em").attr("text-anchor", "end").attr("font-family", "initial").text("\u26A0\uFE0F").append("title").text(`${w.toLocaleString("en-US")} warning${w === 1 ? "" : "s"}. Please check the console.`);
  }
  return figure;
}
function createTitleElement(document2, contents, tag) {
  if (contents.ownerDocument)
    return contents;
  const e = document2.createElement(tag);
  e.append(contents);
  return e;
}
function createFigcaption(document2, caption) {
  const e = document2.createElement("figcaption");
  e.append(caption);
  return e;
}
function flatMarks(marks2) {
  return marks2.flat(Infinity).filter((mark) => mark != null).map(markify);
}
function markify(mark) {
  return typeof mark.render === "function" ? mark : new Render(mark);
}
var Render = class extends Mark {
  constructor(render) {
    if (typeof render !== "function")
      throw new TypeError("invalid mark; missing render function");
    super();
    this.render = render;
  }
  render() {
  }
};
function applyScaleTransforms(channels, options) {
  for (const name in channels)
    applyScaleTransform(channels[name], options);
  return channels;
}
function applyScaleTransform(channel, options) {
  const { scale, transform: t = true } = channel;
  if (scale == null || !t)
    return;
  const {
    type: type2,
    percent,
    interval: interval2,
    transform: transform2 = percent ? (x2) => x2 == null ? NaN : x2 * 100 : maybeIntervalTransform(interval2, type2)
  } = options[scale] ?? {};
  if (transform2 == null)
    return;
  channel.value = map2(channel.value, transform2);
  channel.transform = false;
}
function inferChannelScales(channels) {
  for (const name in channels) {
    inferChannelScale(name, channels[name]);
  }
}
function addScaleChannels(channelsByScale, stateByMark, options, filter2 = yes) {
  for (const { channels } of stateByMark.values()) {
    for (const name in channels) {
      const channel = channels[name];
      const { scale } = channel;
      if (scale != null && filter2(scale)) {
        if (scale === "projection") {
          if (!hasProjection(options)) {
            const gx = options.x?.domain === void 0;
            const gy = options.y?.domain === void 0;
            if (gx || gy) {
              const [x2, y2] = getGeometryChannels(channel);
              if (gx)
                addScaleChannel(channelsByScale, "x", x2);
              if (gy)
                addScaleChannel(channelsByScale, "y", y2);
            }
          }
        } else {
          addScaleChannel(channelsByScale, scale, channel);
        }
      }
    }
  }
  return channelsByScale;
}
function addScaleChannel(channelsByScale, scale, channel) {
  const scaleChannels = channelsByScale.get(scale);
  if (scaleChannels !== void 0)
    scaleChannels.push(channel);
  else
    channelsByScale.set(scale, [channel]);
}
function maybeTopFacet(facet, options) {
  if (facet == null)
    return;
  const { x: x2, y: y2 } = facet;
  if (x2 == null && y2 == null)
    return;
  const data = arrayify2(facet.data);
  if (data == null)
    throw new Error("missing facet data");
  const channels = {};
  if (x2 != null)
    channels.fx = createChannel(data, { value: x2, scale: "fx" });
  if (y2 != null)
    channels.fy = createChannel(data, { value: y2, scale: "fy" });
  applyScaleTransforms(channels, options);
  const groups2 = facetGroups(data, channels);
  return { channels, groups: groups2, data: facet.data };
}
function maybeMarkFacet(mark, topFacetState, options) {
  if (mark.facet === null || mark.facet === "super")
    return;
  const { fx, fy } = mark;
  if (fx != null || fy != null) {
    const data2 = arrayify2(mark.data ?? fx ?? fy);
    if (data2 === void 0)
      throw new Error(`missing facet data in ${mark.ariaLabel}`);
    if (data2 === null)
      return;
    const channels2 = {};
    if (fx != null)
      channels2.fx = createChannel(data2, { value: fx, scale: "fx" });
    if (fy != null)
      channels2.fy = createChannel(data2, { value: fy, scale: "fy" });
    applyScaleTransforms(channels2, options);
    return { channels: channels2, groups: facetGroups(data2, channels2) };
  }
  if (topFacetState === void 0)
    return;
  const { channels, groups: groups2, data } = topFacetState;
  if (mark.facet !== "auto" || mark.data === data)
    return { channels, groups: groups2 };
  if (data.length > 0 && (groups2.size > 1 || groups2.size === 1 && channels.fx && channels.fy && [...groups2][0][1].size > 1) && arrayify2(mark.data)?.length === data.length) {
    warn(
      `Warning: the ${mark.ariaLabel} mark appears to use faceted data, but isn\u2019t faceted. The mark data has the same length as the facet data and the mark facet option is "auto", but the mark data and facet data are distinct. If this mark should be faceted, set the mark facet option to true; otherwise, suppress this warning by setting the mark facet option to false.`
    );
  }
}
function derive(mark, options = {}) {
  return initializer({ ...options, x: null, y: null }, (data, facets, channels, scales, dimensions, context) => {
    return context.getMarkState(mark);
  });
}
function inferTips(marks2) {
  const tips = [];
  for (const mark of marks2) {
    let tipOptions = mark.tip;
    if (tipOptions) {
      if (tipOptions === true)
        tipOptions = {};
      else if (typeof tipOptions === "string")
        tipOptions = { pointer: tipOptions };
      let { pointer: p, preferredAnchor: a2 } = tipOptions;
      p = /^x$/i.test(p) ? pointerX : /^y$/i.test(p) ? pointerY : pointer;
      tipOptions = p(derive(mark, tipOptions));
      tipOptions.title = null;
      if (a2 === void 0)
        tipOptions.preferredAnchor = p === pointerY ? "left" : "bottom";
      const t = tip(mark.data, tipOptions);
      t.facet = mark.facet;
      t.facetAnchor = mark.facetAnchor;
      tips.push(t);
    }
  }
  return tips;
}
function inferAxes(marks2, channelsByScale, options) {
  let {
    projection: projection3,
    x: x2 = {},
    y: y2 = {},
    fx = {},
    fy = {},
    axis: axis2,
    grid,
    facet = {},
    facet: { axis: facetAxis = axis2, grid: facetGrid } = facet,
    x: { axis: xAxis = axis2, grid: xGrid = xAxis === null ? null : grid } = x2,
    y: { axis: yAxis = axis2, grid: yGrid = yAxis === null ? null : grid } = y2,
    fx: { axis: fxAxis = facetAxis, grid: fxGrid = fxAxis === null ? null : facetGrid } = fx,
    fy: { axis: fyAxis = facetAxis, grid: fyGrid = fyAxis === null ? null : facetGrid } = fy
  } = options;
  if (projection3 || !isScaleOptions(x2) && !hasPositionChannel("x", marks2))
    xAxis = xGrid = null;
  if (projection3 || !isScaleOptions(y2) && !hasPositionChannel("y", marks2))
    yAxis = yGrid = null;
  if (!channelsByScale.has("fx"))
    fxAxis = fxGrid = null;
  if (!channelsByScale.has("fy"))
    fyAxis = fyGrid = null;
  if (xAxis === void 0)
    xAxis = !hasAxis(marks2, "x");
  if (yAxis === void 0)
    yAxis = !hasAxis(marks2, "y");
  if (fxAxis === void 0)
    fxAxis = !hasAxis(marks2, "fx");
  if (fyAxis === void 0)
    fyAxis = !hasAxis(marks2, "fy");
  if (xAxis === true)
    xAxis = "bottom";
  if (yAxis === true)
    yAxis = "left";
  if (fxAxis === true)
    fxAxis = xAxis === "top" || xAxis === null ? "bottom" : "top";
  if (fyAxis === true)
    fyAxis = yAxis === "right" || yAxis === null ? "left" : "right";
  const axes = [];
  maybeGrid(axes, fyGrid, gridFy, fy);
  maybeAxis(axes, fyAxis, axisFy, "right", "left", facet, fy);
  maybeGrid(axes, fxGrid, gridFx, fx);
  maybeAxis(axes, fxAxis, axisFx, "top", "bottom", facet, fx);
  maybeGrid(axes, yGrid, gridY, y2);
  maybeAxis(axes, yAxis, axisY, "left", "right", options, y2);
  maybeGrid(axes, xGrid, gridX, x2);
  maybeAxis(axes, xAxis, axisX, "bottom", "top", options, x2);
  return axes;
}
function maybeAxis(axes, axis2, axisType, primary, secondary, defaults9, options) {
  if (!axis2)
    return;
  const both = isBoth(axis2);
  options = axisOptions(both ? primary : axis2, defaults9, options);
  const { line: line2 } = options;
  if ((axisType === axisY || axisType === axisX) && line2 && !isNone(line2))
    axes.push(frame2(lineOptions(options)));
  axes.push(axisType(options));
  if (both)
    axes.push(axisType({ ...options, anchor: secondary, label: null }));
}
function maybeGrid(axes, grid, gridType, options) {
  if (!grid || isNone(grid))
    return;
  axes.push(gridType(gridOptions(grid, options)));
}
function isBoth(value) {
  return /^\s*both\s*$/i.test(value);
}
function axisOptions(anchor, defaults9, {
  line: line2 = defaults9.line,
  ticks: ticks2,
  tickSize,
  tickSpacing,
  tickPadding,
  tickFormat: tickFormat2,
  tickRotate,
  fontVariant,
  ariaLabel,
  ariaDescription,
  label = defaults9.label,
  labelAnchor,
  labelArrow = defaults9.labelArrow,
  labelOffset
}) {
  return {
    anchor,
    line: line2,
    ticks: ticks2,
    tickSize,
    tickSpacing,
    tickPadding,
    tickFormat: tickFormat2,
    tickRotate,
    fontVariant,
    ariaLabel,
    ariaDescription,
    label,
    labelAnchor,
    labelArrow,
    labelOffset
  };
}
function lineOptions(options) {
  const { anchor, line: line2 } = options;
  return { anchor, facetAnchor: anchor + "-empty", stroke: line2 === true ? void 0 : line2 };
}
function gridOptions(grid, {
  stroke = isColor(grid) ? grid : void 0,
  ticks: ticks2 = isGridTicks(grid) ? grid : void 0,
  tickSpacing,
  ariaLabel,
  ariaDescription
}) {
  return {
    stroke,
    ticks: ticks2,
    tickSpacing,
    ariaLabel,
    ariaDescription
  };
}
function isGridTicks(grid) {
  switch (typeof grid) {
    case "number":
      return true;
    case "string":
      return !isColor(grid);
  }
  return isIterable(grid) || typeof grid?.range === "function";
}
function hasAxis(marks2, k2) {
  const prefix = `${k2}-axis `;
  return marks2.some((m) => m.ariaLabel?.startsWith(prefix));
}
function hasPositionChannel(k2, marks2) {
  for (const mark of marks2) {
    for (const key in mark.channels) {
      const { scale } = mark.channels[key];
      if (scale === k2 || scale === "projection") {
        return true;
      }
    }
  }
  return false;
}
function inheritScaleLabels(newScales, scales) {
  for (const key in newScales) {
    const newScale = newScales[key];
    const scale = scales[key];
    if (newScale.label === void 0 && scale) {
      newScale.label = scale.label;
    }
  }
  return newScales;
}
function actualDimensions({ fx, fy }, dimensions) {
  const { marginTop, marginRight, marginBottom, marginLeft, width, height } = outerDimensions(dimensions);
  const fxr = fx && outerRange(fx);
  const fyr = fy && outerRange(fy);
  return {
    marginTop: fy ? fyr[0] : marginTop,
    marginRight: fx ? width - fxr[1] : marginRight,
    marginBottom: fy ? height - fyr[1] : marginBottom,
    marginLeft: fx ? fxr[0] : marginLeft,
    // Some marks, namely the x- and y-axis labels, want to know what the
    // desired (rather than actual) margins are for positioning.
    inset: {
      marginTop: dimensions.marginTop,
      marginRight: dimensions.marginRight,
      marginBottom: dimensions.marginBottom,
      marginLeft: dimensions.marginLeft
    },
    width,
    height
  };
}
function outerRange(scale) {
  const domain = scale.domain();
  let x12 = scale(domain[0]);
  let x2 = scale(domain[domain.length - 1]);
  if (x2 < x12)
    [x12, x2] = [x2, x12];
  return [x12, x2 + scale.bandwidth()];
}

// node_modules/@observablehq/plot/src/curve.js
var curves = /* @__PURE__ */ new Map([
  ["basis", basis_default2],
  ["basis-closed", basisClosed_default2],
  ["basis-open", basisOpen_default],
  ["bundle", bundle_default],
  ["bump-x", bumpX],
  ["bump-y", bumpY],
  ["cardinal", cardinal_default],
  ["cardinal-closed", cardinalClosed_default],
  ["cardinal-open", cardinalOpen_default],
  ["catmull-rom", catmullRom_default],
  ["catmull-rom-closed", catmullRomClosed_default],
  ["catmull-rom-open", catmullRomOpen_default],
  ["linear", linear_default],
  ["linear-closed", linearClosed_default],
  ["monotone-x", monotoneX],
  ["monotone-y", monotoneY],
  ["natural", natural_default],
  ["step", step_default],
  ["step-after", stepAfter],
  ["step-before", stepBefore]
]);
function maybeCurve(curve = linear_default, tension) {
  if (typeof curve === "function")
    return curve;
  const c4 = curves.get(`${curve}`.toLowerCase());
  if (!c4)
    throw new Error(`unknown curve: ${curve}`);
  if (tension !== void 0) {
    if ("beta" in c4) {
      return c4.beta(tension);
    } else if ("tension" in c4) {
      return c4.tension(tension);
    } else if ("alpha" in c4) {
      return c4.alpha(tension);
    }
  }
  return c4;
}
function maybeCurveAuto(curve = curveAuto, tension) {
  return typeof curve !== "function" && `${curve}`.toLowerCase() === "auto" ? curveAuto : maybeCurve(curve, tension);
}
function curveAuto(context) {
  return linear_default(context);
}

// node_modules/@observablehq/plot/src/transforms/bin.js
function binX(outputs = { y: "count" }, options = {}) {
  [outputs, options] = mergeOptions(outputs, options);
  const { x: x2, y: y2 } = options;
  return binn(maybeBinValue(x2, options, identity6), null, null, y2, outputs, maybeInsetX(options));
}
function maybeDenseInterval(bin, k2, options = {}) {
  if (options?.interval == null)
    return options;
  const { reduce = reduceFirst } = options;
  const outputs = { filter: null };
  if (options[k2] != null)
    outputs[k2] = reduce;
  if (options[`${k2}1`] != null)
    outputs[`${k2}1`] = reduce;
  if (options[`${k2}2`] != null)
    outputs[`${k2}2`] = reduce;
  return bin(outputs, options);
}
function maybeDenseIntervalX(options = {}) {
  return maybeDenseInterval(binX, "y", withTip(options, "x"));
}
function binn(bx, by, gx, gy, {
  data: reduceData = reduceIdentity,
  // TODO avoid materializing when unused?
  filter: filter2 = reduceCount,
  // return only non-empty bins by default
  sort: sort2,
  reverse: reverse2,
  ...outputs
  // output channel definitions
} = {}, inputs2 = {}) {
  bx = maybeBin(bx);
  by = maybeBin(by);
  outputs = maybeBinOutputs(outputs, inputs2);
  reduceData = maybeBinReduce(reduceData, identity6);
  sort2 = sort2 == null ? void 0 : maybeBinOutput("sort", sort2, inputs2);
  filter2 = filter2 == null ? void 0 : maybeBinEvaluator("filter", filter2, inputs2);
  if (gx != null && hasOutput(outputs, "x", "x1", "x2"))
    gx = null;
  if (gy != null && hasOutput(outputs, "y", "y1", "y2"))
    gy = null;
  const [BX1, setBX1] = maybeColumn(bx);
  const [BX2, setBX2] = maybeColumn(bx);
  const [BY1, setBY1] = maybeColumn(by);
  const [BY2, setBY2] = maybeColumn(by);
  const [k2, gk] = gx != null ? [gx, "x"] : gy != null ? [gy, "y"] : [];
  const [GK, setGK] = maybeColumn(k2);
  const {
    x: x2,
    y: y2,
    z,
    fill,
    stroke,
    x1: x12,
    x2: x22,
    // consumed if x is an output
    y1: y12,
    y2: y22,
    // consumed if y is an output
    domain,
    cumulative,
    thresholds,
    interval: interval2,
    ...options
  } = inputs2;
  const [GZ, setGZ] = maybeColumn(z);
  const [vfill] = maybeColorChannel(fill);
  const [vstroke] = maybeColorChannel(stroke);
  const [GF, setGF] = maybeColumn(vfill);
  const [GS, setGS] = maybeColumn(vstroke);
  return {
    ..."z" in inputs2 && { z: GZ || z },
    ..."fill" in inputs2 && { fill: GF || fill },
    ..."stroke" in inputs2 && { stroke: GS || stroke },
    ...basic(options, (data, facets, plotOptions) => {
      const K2 = maybeApplyInterval(valueof(data, k2), plotOptions?.[gk]);
      const Z = valueof(data, z);
      const F = valueof(data, vfill);
      const S = valueof(data, vstroke);
      const G = maybeSubgroup(outputs, { z: Z, fill: F, stroke: S });
      const groupFacets = [];
      const groupData = [];
      const GK2 = K2 && setGK([]);
      const GZ2 = Z && setGZ([]);
      const GF2 = F && setGF([]);
      const GS2 = S && setGS([]);
      const BX12 = bx && setBX1([]);
      const BX22 = bx && setBX2([]);
      const BY12 = by && setBY1([]);
      const BY22 = by && setBY2([]);
      const bin = bing(bx, by, data);
      let i = 0;
      for (const o of outputs)
        o.initialize(data);
      if (sort2)
        sort2.initialize(data);
      if (filter2)
        filter2.initialize(data);
      for (const facet of facets) {
        const groupFacet = [];
        for (const o of outputs)
          o.scope("facet", facet);
        if (sort2)
          sort2.scope("facet", facet);
        if (filter2)
          filter2.scope("facet", facet);
        for (const [f, I] of maybeGroup(facet, G)) {
          for (const [k3, g] of maybeGroup(I, K2)) {
            for (const [b, extent3] of bin(g)) {
              if (G)
                extent3.z = f;
              if (filter2 && !filter2.reduce(b, extent3))
                continue;
              groupFacet.push(i++);
              groupData.push(reduceData.reduceIndex(b, data, extent3));
              if (K2)
                GK2.push(k3);
              if (Z)
                GZ2.push(G === Z ? f : Z[(b.length > 0 ? b : g)[0]]);
              if (F)
                GF2.push(G === F ? f : F[(b.length > 0 ? b : g)[0]]);
              if (S)
                GS2.push(G === S ? f : S[(b.length > 0 ? b : g)[0]]);
              if (BX12)
                BX12.push(extent3.x1), BX22.push(extent3.x2);
              if (BY12)
                BY12.push(extent3.y1), BY22.push(extent3.y2);
              for (const o of outputs)
                o.reduce(b, extent3);
              if (sort2)
                sort2.reduce(b, extent3);
            }
          }
        }
        groupFacets.push(groupFacet);
      }
      maybeSort(groupFacets, sort2, reverse2);
      return { data: groupData, facets: groupFacets };
    }),
    ...!hasOutput(outputs, "x") && (BX1 ? { x1: BX1, x2: BX2, x: mid(BX1, BX2) } : { x: x2, x1: x12, x2: x22 }),
    ...!hasOutput(outputs, "y") && (BY1 ? { y1: BY1, y2: BY2, y: mid(BY1, BY2) } : { y: y2, y1: y12, y2: y22 }),
    ...GK && { [gk]: GK },
    ...Object.fromEntries(outputs.map(({ name, output }) => [name, output]))
  };
}
function mergeOptions({ cumulative, domain, thresholds, interval: interval2, ...outputs }, options) {
  return [outputs, { cumulative, domain, thresholds, interval: interval2, ...options }];
}
function maybeBinValue(value, { cumulative, domain, thresholds, interval: interval2 }, defaultValue) {
  value = { ...maybeValue(value) };
  if (value.domain === void 0)
    value.domain = domain;
  if (value.cumulative === void 0)
    value.cumulative = cumulative;
  if (value.thresholds === void 0)
    value.thresholds = thresholds;
  if (value.interval === void 0)
    value.interval = interval2;
  if (value.value === void 0)
    value.value = defaultValue;
  value.thresholds = maybeThresholds(value.thresholds, value.interval);
  return value;
}
function maybeBin(options) {
  if (options == null)
    return;
  const { value, cumulative, domain = extent, thresholds } = options;
  const bin = (data) => {
    let V = valueof(data, value);
    let T;
    if (isTemporal(V) || isTimeThresholds(thresholds)) {
      V = map2(V, coerceDate, Float64Array);
      let [min4, max3] = typeof domain === "function" ? domain(V) : domain;
      let t = typeof thresholds === "function" && !isInterval(thresholds) ? thresholds(V, min4, max3) : thresholds;
      if (typeof t === "number")
        t = utcTickInterval(min4, max3, t);
      if (isInterval(t)) {
        if (domain === extent) {
          min4 = t.floor(min4);
          max3 = t.offset(t.floor(max3));
        }
        t = t.range(min4, t.offset(max3));
      }
      T = t;
    } else {
      V = coerceNumbers(V);
      let [min4, max3] = typeof domain === "function" ? domain(V) : domain;
      let t = typeof thresholds === "function" && !isInterval(thresholds) ? thresholds(V, min4, max3) : thresholds;
      if (typeof t === "number") {
        if (domain === extent) {
          let step = tickIncrement(min4, max3, t);
          if (isFinite(step)) {
            if (step > 0) {
              let r0 = Math.round(min4 / step);
              let r1 = Math.round(max3 / step);
              if (!(r0 * step <= min4))
                --r0;
              if (!(r1 * step > max3))
                ++r1;
              let n = r1 - r0 + 1;
              t = new Float64Array(n);
              for (let i = 0; i < n; ++i)
                t[i] = (r0 + i) * step;
            } else if (step < 0) {
              step = -step;
              let r0 = Math.round(min4 * step);
              let r1 = Math.round(max3 * step);
              if (!(r0 / step <= min4))
                --r0;
              if (!(r1 / step > max3))
                ++r1;
              let n = r1 - r0 + 1;
              t = new Float64Array(n);
              for (let i = 0; i < n; ++i)
                t[i] = (r0 + i) / step;
            } else {
              t = [min4];
            }
          } else {
            t = [min4];
          }
        } else {
          t = ticks(min4, max3, t);
        }
      } else if (isInterval(t)) {
        if (domain === extent) {
          min4 = t.floor(min4);
          max3 = t.offset(t.floor(max3));
        }
        t = t.range(min4, t.offset(max3));
      }
      T = t;
    }
    const E2 = [];
    if (T.length === 1)
      E2.push([T[0], T[0]]);
    else
      for (let i = 1; i < T.length; ++i)
        E2.push([T[i - 1], T[i]]);
    E2.bin = (cumulative < 0 ? bin1cn : cumulative > 0 ? bin1cp : bin1)(E2, T, V);
    return E2;
  };
  bin.label = labelof(value);
  return bin;
}
function maybeThresholds(thresholds, interval2, defaultThresholds = thresholdAuto) {
  if (thresholds === void 0) {
    return interval2 === void 0 ? defaultThresholds : maybeRangeInterval(interval2);
  }
  if (typeof thresholds === "string") {
    switch (thresholds.toLowerCase()) {
      case "freedman-diaconis":
        return thresholdFreedmanDiaconis;
      case "scott":
        return thresholdScott;
      case "sturges":
        return thresholdSturges;
      case "auto":
        return thresholdAuto;
    }
    return utcInterval(thresholds);
  }
  return thresholds;
}
function maybeBinOutputs(outputs, inputs2) {
  return maybeOutputs(outputs, inputs2, maybeBinOutput);
}
function maybeBinOutput(name, reduce, inputs2) {
  return maybeOutput(name, reduce, inputs2, maybeBinEvaluator);
}
function maybeBinEvaluator(name, reduce, inputs2) {
  return maybeEvaluator(name, reduce, inputs2, maybeBinReduce);
}
function maybeBinReduce(reduce, value) {
  return maybeReduce(reduce, value, maybeBinReduceFallback);
}
function maybeBinReduceFallback(reduce) {
  switch (`${reduce}`.toLowerCase()) {
    case "x":
      return reduceX;
    case "x1":
      return reduceX1;
    case "x2":
      return reduceX2;
    case "y":
      return reduceY;
    case "y1":
      return reduceY1;
    case "y2":
      return reduceY2;
    case "z":
      return reduceZ;
  }
  throw new Error(`invalid bin reduce: ${reduce}`);
}
function thresholdAuto(values2, min4, max3) {
  return Math.min(200, thresholdScott(values2, min4, max3));
}
function isTimeThresholds(t) {
  return isTimeInterval(t) || isIterable(t) && isTemporal(t);
}
function bing(bx, by, data) {
  const EX = bx?.(data);
  const EY = by?.(data);
  return EX && EY ? function* (I) {
    const X3 = EX.bin(I);
    for (const [ix, [x12, x2]] of EX.entries()) {
      const Y3 = EY.bin(X3[ix]);
      for (const [iy, [y12, y2]] of EY.entries()) {
        yield [Y3[iy], { data, x1: x12, y1: y12, x2, y2 }];
      }
    }
  } : EX ? function* (I) {
    const X3 = EX.bin(I);
    for (const [i, [x12, x2]] of EX.entries()) {
      yield [X3[i], { data, x1: x12, x2 }];
    }
  } : function* (I) {
    const Y3 = EY.bin(I);
    for (const [i, [y12, y2]] of EY.entries()) {
      yield [Y3[i], { data, y1: y12, y2 }];
    }
  };
}
function bin1(E2, T, V) {
  T = coerceNumbers(T);
  return (I) => {
    const B2 = E2.map(() => []);
    for (const i of I)
      B2[bisect_default(T, V[i]) - 1]?.push(i);
    return B2;
  };
}
function bin1cp(E2, T, V) {
  const bin = bin1(E2, T, V);
  return (I) => {
    const B2 = bin(I);
    for (let i = 1, n = B2.length; i < n; ++i) {
      const C2 = B2[i - 1];
      const b = B2[i];
      for (const j of C2)
        b.push(j);
    }
    return B2;
  };
}
function bin1cn(E2, T, V) {
  const bin = bin1(E2, T, V);
  return (I) => {
    const B2 = bin(I);
    for (let i = B2.length - 2; i >= 0; --i) {
      const C2 = B2[i + 1];
      const b = B2[i];
      for (const j of C2)
        b.push(j);
    }
    return B2;
  };
}
function mid1(x12, x2) {
  const m = (+x12 + +x2) / 2;
  return x12 instanceof Date ? new Date(m) : m;
}
var reduceX = {
  reduceIndex(I, X3, { x1: x12, x2 }) {
    return mid1(x12, x2);
  }
};
var reduceY = {
  reduceIndex(I, X3, { y1: y12, y2 }) {
    return mid1(y12, y2);
  }
};
var reduceX1 = {
  reduceIndex(I, X3, { x1: x12 }) {
    return x12;
  }
};
var reduceX2 = {
  reduceIndex(I, X3, { x2 }) {
    return x2;
  }
};
var reduceY1 = {
  reduceIndex(I, X3, { y1: y12 }) {
    return y12;
  }
};
var reduceY2 = {
  reduceIndex(I, X3, { y2 }) {
    return y2;
  }
};

// node_modules/@observablehq/plot/src/transforms/identity.js
function maybeIdentityY(options = {}) {
  return hasY(options) ? options : { ...options, y: identity6 };
}

// node_modules/@observablehq/plot/src/transforms/exclusiveFacets.js
function exclusiveFacets(data, facets) {
  if (facets.length === 1)
    return { data, facets };
  const n = data.length;
  const O = new Uint8Array(n);
  let overlaps = 0;
  for (const facet of facets) {
    for (const i of facet) {
      if (O[i])
        ++overlaps;
      O[i] = 1;
    }
  }
  if (overlaps === 0)
    return { data, facets };
  data = slice2(data);
  const R = data[reindex] = new Uint32Array(n + overlaps);
  facets = facets.map((facet) => slice2(facet, Uint32Array));
  let j = n;
  O.fill(0);
  for (const facet of facets) {
    for (let k2 = 0, m = facet.length; k2 < m; ++k2) {
      const i = facet[k2];
      if (O[i])
        facet[k2] = j, data[j] = data[i], R[j] = i, ++j;
      else
        R[i] = i;
      O[i] = 1;
    }
  }
  return { data, facets };
}

// node_modules/@observablehq/plot/src/transforms/stack.js
function stackY(stackOptions = {}, options = {}) {
  if (arguments.length === 1)
    [stackOptions, options] = mergeOptions2(stackOptions);
  const { x1: x12, x: x2 = x12, y: y2, ...rest } = options;
  const [transform2, X3, y12, y22] = stack(x2, y2, "x", "y", stackOptions, rest);
  return { ...transform2, x1: x12, x: X3, y1: y12, y2: y22, y: mid(y12, y22) };
}
function maybeStackY({ y: y2, y1: y12, y2: y22, ...options } = {}) {
  options = withTip(options, "x");
  if (y12 === void 0 && y22 === void 0)
    return stackY({ y: y2, ...options });
  [y12, y22] = maybeZero(y2, y12, y22);
  return { ...options, y1: y12, y2: y22 };
}
function mergeOptions2(options) {
  const { offset: offset2, order, reverse: reverse2, ...rest } = options;
  return [{ offset: offset2, order, reverse: reverse2 }, rest];
}
var lengthy = { length: true };
function stack(x2, y2 = one2, kx2, ky2, { offset: offset2, order, reverse: reverse2 }, options) {
  if (y2 === null)
    throw new Error(`stack requires ${ky2}`);
  const z = maybeZ(options);
  const [X3, setX] = maybeColumn(x2);
  const [Y12, setY1] = column(y2);
  const [Y22, setY2] = column(y2);
  Y12.hint = Y22.hint = lengthy;
  offset2 = maybeOffset(offset2);
  order = maybeOrder2(order, offset2, ky2);
  return [
    basic(options, (data, facets, plotOptions) => {
      ({ data, facets } = exclusiveFacets(data, facets));
      const X4 = x2 == null ? void 0 : setX(maybeApplyInterval(valueof(data, x2), plotOptions?.[kx2]));
      const Y3 = valueof(data, y2, Float64Array);
      const Z = valueof(data, z);
      const compare = order && order(data, X4, Y3, Z);
      const n = data.length;
      const Y13 = setY1(new Float64Array(n));
      const Y23 = setY2(new Float64Array(n));
      const facetstacks = [];
      for (const facet of facets) {
        const stacks = X4 ? Array.from(group(facet, (i) => X4[i]).values()) : [facet];
        if (compare)
          for (const stack2 of stacks)
            stack2.sort(compare);
        for (const stack2 of stacks) {
          let yn = 0;
          let yp = 0;
          if (reverse2)
            stack2.reverse();
          for (const i of stack2) {
            const y3 = Y3[i];
            if (y3 < 0)
              yn = Y23[i] = (Y13[i] = yn) + y3;
            else if (y3 > 0)
              yp = Y23[i] = (Y13[i] = yp) + y3;
            else
              Y23[i] = Y13[i] = yp;
          }
        }
        facetstacks.push(stacks);
      }
      if (offset2)
        offset2(facetstacks, Y13, Y23, Z);
      return { data, facets };
    }),
    X3,
    Y12,
    Y22
  ];
}
function maybeOffset(offset2) {
  if (offset2 == null)
    return;
  if (typeof offset2 === "function")
    return offset2;
  switch (`${offset2}`.toLowerCase()) {
    case "expand":
    case "normalize":
      return offsetExpand;
    case "center":
    case "silhouette":
      return offsetCenter;
    case "wiggle":
      return offsetWiggle;
  }
  throw new Error(`unknown offset: ${offset2}`);
}
function extent2(stack2, Y22) {
  let min4 = 0, max3 = 0;
  for (const i of stack2) {
    const y2 = Y22[i];
    if (y2 < min4)
      min4 = y2;
    if (y2 > max3)
      max3 = y2;
  }
  return [min4, max3];
}
function offsetExpand(facetstacks, Y12, Y22) {
  for (const stacks of facetstacks) {
    for (const stack2 of stacks) {
      const [yn, yp] = extent2(stack2, Y22);
      for (const i of stack2) {
        const m = 1 / (yp - yn || 1);
        Y12[i] = m * (Y12[i] - yn);
        Y22[i] = m * (Y22[i] - yn);
      }
    }
  }
}
function offsetCenter(facetstacks, Y12, Y22) {
  for (const stacks of facetstacks) {
    for (const stack2 of stacks) {
      const [yn, yp] = extent2(stack2, Y22);
      for (const i of stack2) {
        const m = (yp + yn) / 2;
        Y12[i] -= m;
        Y22[i] -= m;
      }
    }
    offsetZero(stacks, Y12, Y22);
  }
  offsetCenterFacets(facetstacks, Y12, Y22);
}
function offsetWiggle(facetstacks, Y12, Y22, Z) {
  for (const stacks of facetstacks) {
    const prev = new InternMap();
    let y2 = 0;
    for (const stack2 of stacks) {
      let j = -1;
      const Fi = stack2.map((i) => Math.abs(Y22[i] - Y12[i]));
      const Df = stack2.map((i) => {
        j = Z ? Z[i] : ++j;
        const value = Y22[i] - Y12[i];
        const diff = prev.has(j) ? value - prev.get(j) : 0;
        prev.set(j, value);
        return diff;
      });
      const Cf1 = [0, ...cumsum(Df)];
      for (const i of stack2) {
        Y12[i] += y2;
        Y22[i] += y2;
      }
      const s1 = sum(Fi);
      if (s1)
        y2 -= sum(Fi, (d, i) => (Df[i] / 2 + Cf1[i]) * d) / s1;
    }
    offsetZero(stacks, Y12, Y22);
  }
  offsetCenterFacets(facetstacks, Y12, Y22);
}
function offsetZero(stacks, Y12, Y22) {
  const m = min(stacks, (stack2) => min(stack2, (i) => Y12[i]));
  for (const stack2 of stacks) {
    for (const i of stack2) {
      Y12[i] -= m;
      Y22[i] -= m;
    }
  }
}
function offsetCenterFacets(facetstacks, Y12, Y22) {
  const n = facetstacks.length;
  if (n === 1)
    return;
  const facets = facetstacks.map((stacks) => stacks.flat());
  const m = facets.map((I) => (min(I, (i) => Y12[i]) + max(I, (i) => Y22[i])) / 2);
  const m0 = min(m);
  for (let j = 0; j < n; j++) {
    const p = m0 - m[j];
    for (const i of facets[j]) {
      Y12[i] += p;
      Y22[i] += p;
    }
  }
}
function maybeOrder2(order, offset2, ky2) {
  if (order === void 0 && offset2 === offsetWiggle)
    return orderInsideOut(ascendingDefined2);
  if (order == null)
    return;
  if (typeof order === "string") {
    const negate = order.startsWith("-");
    const compare = negate ? descendingDefined : ascendingDefined2;
    switch ((negate ? order.slice(1) : order).toLowerCase()) {
      case "value":
      case ky2:
        return orderY(compare);
      case "z":
        return orderZ(compare);
      case "sum":
        return orderSum(compare);
      case "appearance":
        return orderAppearance(compare);
      case "inside-out":
        return orderInsideOut(compare);
    }
    return orderAccessor(field(order));
  }
  if (typeof order === "function")
    return (order.length === 1 ? orderAccessor : orderComparator)(order);
  if (Array.isArray(order))
    return orderGiven(order);
  throw new Error(`invalid order: ${order}`);
}
function orderY(compare) {
  return (data, X3, Y3) => (i, j) => compare(Y3[i], Y3[j]);
}
function orderZ(compare) {
  return (data, X3, Y3, Z) => (i, j) => compare(Z[i], Z[j]);
}
function orderSum(compare) {
  return orderZDomain(
    compare,
    (data, X3, Y3, Z) => groupSort(
      range2(data),
      (I) => sum(I, (i) => Y3[i]),
      (i) => Z[i]
    )
  );
}
function orderAppearance(compare) {
  return orderZDomain(
    compare,
    (data, X3, Y3, Z) => groupSort(
      range2(data),
      (I) => X3[greatest(I, (i) => Y3[i])],
      (i) => Z[i]
    )
  );
}
function orderInsideOut(compare) {
  return orderZDomain(compare, (data, X3, Y3, Z) => {
    const I = range2(data);
    const K2 = groupSort(
      I,
      (I2) => X3[greatest(I2, (i) => Y3[i])],
      (i) => Z[i]
    );
    const sums = rollup(
      I,
      (I2) => sum(I2, (i) => Y3[i]),
      (i) => Z[i]
    );
    const Kp = [], Kn = [];
    let s2 = 0;
    for (const k2 of K2) {
      if (s2 < 0) {
        s2 += sums.get(k2);
        Kp.push(k2);
      } else {
        s2 -= sums.get(k2);
        Kn.push(k2);
      }
    }
    return Kn.reverse().concat(Kp);
  });
}
function orderAccessor(f) {
  return (data) => {
    const O = valueof(data, f);
    return (i, j) => ascendingDefined2(O[i], O[j]);
  };
}
function orderComparator(f) {
  return (data) => (i, j) => f(data[i], data[j]);
}
function orderGiven(domain) {
  return orderZDomain(ascendingDefined2, () => domain);
}
function orderZDomain(compare, domain) {
  return (data, X3, Y3, Z) => {
    if (!Z)
      throw new Error("missing channel: z");
    const map3 = new InternMap(domain(data, X3, Y3, Z).map((d, i) => [d, i]));
    return (i, j) => compare(map3.get(Z[i]), map3.get(Z[j]));
  };
}

// node_modules/@observablehq/plot/src/marks/area.js
var defaults6 = {
  ariaLabel: "area",
  strokeWidth: 1,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 1
};
var Area = class extends Mark {
  constructor(data, options = {}) {
    const { x1: x12, y1: y12, x2, y2, z, curve, tension } = options;
    super(
      data,
      {
        x1: { value: x12, scale: "x" },
        y1: { value: y12, scale: "y" },
        x2: { value: x2, scale: "x", optional: true },
        y2: { value: y2, scale: "y", optional: true },
        z: { value: maybeZ(options), optional: true }
      },
      options,
      defaults6
    );
    this.z = z;
    this.curve = maybeCurve(curve, tension);
  }
  filter(index2) {
    return index2;
  }
  render(index2, scales, channels, dimensions, context) {
    const { x1: X12, y1: Y12, x2: X22 = X12, y2: Y22 = Y12 } = channels;
    return create2("svg:g", context).call(applyIndirectStyles, this, dimensions, context).call(applyTransform, this, scales, 0, 0).call(
      (g) => g.selectAll().data(groupIndex(index2, [X12, Y12, X22, Y22], this, channels)).enter().append("path").call(applyDirectStyles, this).call(applyGroupedChannelStyles, this, channels).attr(
        "d",
        area_default2().curve(this.curve).defined((i) => i >= 0).x0((i) => X12[i]).y0((i) => Y12[i]).x1((i) => X22[i]).y1((i) => Y22[i])
      )
    ).node();
  }
};
function areaY(data, options) {
  const { x: x2 = indexOf, ...rest } = maybeDenseIntervalX(options);
  return new Area(data, maybeStackY(maybeIdentityY({ ...rest, x1: x2, x2: void 0 })));
}

// node_modules/@observablehq/plot/src/marks/line.js
var defaults7 = {
  ariaLabel: "line",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 1
};
var Line = class extends Mark {
  constructor(data, options = {}) {
    const { x: x2, y: y2, z, curve, tension } = options;
    super(
      data,
      {
        x: { value: x2, scale: "x" },
        y: { value: y2, scale: "y" },
        z: { value: maybeZ(options), optional: true }
      },
      options,
      defaults7
    );
    this.z = z;
    this.curve = maybeCurveAuto(curve, tension);
    markers(this, options);
  }
  filter(index2) {
    return index2;
  }
  project(channels, values2, context) {
    if (this.curve !== curveAuto) {
      super.project(channels, values2, context);
    }
  }
  render(index2, scales, channels, dimensions, context) {
    const { x: X3, y: Y3 } = channels;
    const { curve } = this;
    return create2("svg:g", context).call(applyIndirectStyles, this, dimensions, context).call(applyTransform, this, scales).call(
      (g) => g.selectAll().data(groupIndex(index2, [X3, Y3], this, channels)).enter().append("path").call(applyDirectStyles, this).call(applyGroupedChannelStyles, this, channels).call(applyGroupedMarkers, this, channels, context).attr(
        "d",
        curve === curveAuto && context.projection ? sphereLine(context.projection, X3, Y3) : line_default2().curve(curve).defined((i) => i >= 0).x((i) => X3[i]).y((i) => Y3[i])
      )
    ).node();
  }
};
function sphereLine(projection3, X3, Y3) {
  const path2 = path_default(projection3);
  X3 = coerceNumbers(X3);
  Y3 = coerceNumbers(Y3);
  return (I) => {
    let line2 = [];
    const lines = [line2];
    for (const i of I) {
      if (i === -1) {
        line2 = [];
        lines.push(line2);
      } else {
        line2.push([X3[i], Y3[i]]);
      }
    }
    return path2({ type: "MultiLineString", coordinates: lines });
  };
}
function lineY(data, { x: x2 = indexOf, y: y2 = identity6, ...options } = {}) {
  return new Line(data, maybeDenseIntervalX({ ...options, x: x2, y: y2 }));
}

// node_modules/@observablehq/plot/src/stats.js
function ibetainv(p, a2, b) {
  var EPS = 1e-8;
  var a1 = a2 - 1;
  var b1 = b - 1;
  var j = 0;
  var lna, lnb, pp, t, u, err, x2, al, h, w, afac;
  if (p <= 0)
    return 0;
  if (p >= 1)
    return 1;
  if (a2 >= 1 && b >= 1) {
    pp = p < 0.5 ? p : 1 - p;
    t = Math.sqrt(-2 * Math.log(pp));
    x2 = (2.30753 + t * 0.27061) / (1 + t * (0.99229 + t * 0.04481)) - t;
    if (p < 0.5)
      x2 = -x2;
    al = (x2 * x2 - 3) / 6;
    h = 2 / (1 / (2 * a2 - 1) + 1 / (2 * b - 1));
    w = x2 * Math.sqrt(al + h) / h - (1 / (2 * b - 1) - 1 / (2 * a2 - 1)) * (al + 5 / 6 - 2 / (3 * h));
    x2 = a2 / (a2 + b * Math.exp(2 * w));
  } else {
    lna = Math.log(a2 / (a2 + b));
    lnb = Math.log(b / (a2 + b));
    t = Math.exp(a2 * lna) / a2;
    u = Math.exp(b * lnb) / b;
    w = t + u;
    if (p < t / w)
      x2 = Math.pow(a2 * w * p, 1 / a2);
    else
      x2 = 1 - Math.pow(b * w * (1 - p), 1 / b);
  }
  afac = -gammaln(a2) - gammaln(b) + gammaln(a2 + b);
  for (; j < 10; j++) {
    if (x2 === 0 || x2 === 1)
      return x2;
    err = ibeta(x2, a2, b) - p;
    t = Math.exp(a1 * Math.log(x2) + b1 * Math.log(1 - x2) + afac);
    u = err / t;
    x2 -= t = u / (1 - 0.5 * Math.min(1, u * (a1 / x2 - b1 / (1 - x2))));
    if (x2 <= 0)
      x2 = 0.5 * (x2 + t);
    if (x2 >= 1)
      x2 = 0.5 * (x2 + t + 1);
    if (Math.abs(t) < EPS * x2 && j > 0)
      break;
  }
  return x2;
}
function ibeta(x2, a2, b) {
  var bt = x2 === 0 || x2 === 1 ? 0 : Math.exp(gammaln(a2 + b) - gammaln(a2) - gammaln(b) + a2 * Math.log(x2) + b * Math.log(1 - x2));
  if (x2 < 0 || x2 > 1)
    return false;
  if (x2 < (a2 + 1) / (a2 + b + 2))
    return bt * betacf(x2, a2, b) / a2;
  return 1 - bt * betacf(1 - x2, b, a2) / b;
}
function betacf(x2, a2, b) {
  var fpmin = 1e-30;
  var m = 1;
  var qab = a2 + b;
  var qap = a2 + 1;
  var qam = a2 - 1;
  var c4 = 1;
  var d = 1 - qab * x2 / qap;
  var m2, aa, del, h;
  if (Math.abs(d) < fpmin)
    d = fpmin;
  d = 1 / d;
  h = d;
  for (; m <= 100; m++) {
    m2 = 2 * m;
    aa = m * (b - m) * x2 / ((qam + m2) * (a2 + m2));
    d = 1 + aa * d;
    if (Math.abs(d) < fpmin)
      d = fpmin;
    c4 = 1 + aa / c4;
    if (Math.abs(c4) < fpmin)
      c4 = fpmin;
    d = 1 / d;
    h *= d * c4;
    aa = -(a2 + m) * (qab + m) * x2 / ((a2 + m2) * (qap + m2));
    d = 1 + aa * d;
    if (Math.abs(d) < fpmin)
      d = fpmin;
    c4 = 1 + aa / c4;
    if (Math.abs(c4) < fpmin)
      c4 = fpmin;
    d = 1 / d;
    del = d * c4;
    h *= del;
    if (Math.abs(del - 1) < 3e-7)
      break;
  }
  return h;
}
function gammaln(x2) {
  var j = 0;
  var cof = [
    76.18009172947146,
    -86.5053203294167,
    24.01409824083091,
    -1.231739572450155,
    0.001208650973866179,
    -5395239384953e-18
  ];
  var ser = 1.000000000190015;
  var xx, y2, tmp;
  tmp = (y2 = xx = x2) + 5.5;
  tmp -= (xx + 0.5) * Math.log(tmp);
  for (; j < 6; j++)
    ser += cof[j] / ++y2;
  return Math.log(2.506628274631 * ser / xx) - tmp;
}
function qt(p, dof) {
  var x2 = ibetainv(2 * Math.min(p, 1 - p), 0.5 * dof, 0.5);
  x2 = Math.sqrt(dof * (1 - x2) / x2);
  return p > 0.5 ? x2 : -x2;
}

// node_modules/@observablehq/plot/src/marks/linearRegression.js
var defaults8 = {
  ariaLabel: "linear-regression",
  fill: "currentColor",
  fillOpacity: 0.1,
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 1
};
var LinearRegression = class extends Mark {
  constructor(data, options = {}) {
    const { x: x2, y: y2, z, ci = 0.95, precision = 4 } = options;
    super(
      data,
      {
        x: { value: x2, scale: "x" },
        y: { value: y2, scale: "y" },
        z: { value: maybeZ(options), optional: true }
      },
      options,
      defaults8
    );
    this.z = z;
    this.ci = +ci;
    this.precision = +precision;
    if (!(0 <= this.ci && this.ci < 1))
      throw new Error(`invalid ci; not in [0, 1): ${ci}`);
    if (!(this.precision > 0))
      throw new Error(`invalid precision: ${precision}`);
  }
  render(index2, scales, channels, dimensions, context) {
    const { x: X3, y: Y3, z: Z } = channels;
    const { ci } = this;
    return create2("svg:g", context).call(applyIndirectStyles, this, dimensions, context).call(applyTransform, this, scales).call(
      (g) => g.selectAll().data(Z ? groupZ(index2, Z, this.z) : [index2]).enter().call(
        (enter) => enter.append("path").attr("fill", "none").call(applyDirectStyles, this).call(applyGroupedChannelStyles, this, { ...channels, fill: null, fillOpacity: null }).attr("d", (I) => this._renderLine(I, X3, Y3)).call(
          ci && !isNone(this.fill) ? (path2) => path2.select(pathBefore).attr("stroke", "none").call(applyDirectStyles, this).call(applyGroupedChannelStyles, this, {
            ...channels,
            stroke: null,
            strokeOpacity: null,
            strokeWidth: null
          }).attr("d", (I) => this._renderBand(I, X3, Y3)) : () => {
          }
        )
      )
    ).node();
  }
};
function pathBefore() {
  return this.parentNode.insertBefore(this.ownerDocument.createElementNS(namespaces_default.svg, "path"), this);
}
var LinearRegressionY = class extends LinearRegression {
  constructor(data, options) {
    super(data, options);
  }
  _renderBand(I, X3, Y3) {
    const { ci, precision } = this;
    const [x12, x2] = extent(I, (i) => X3[i]);
    const f = linearRegressionF(I, X3, Y3);
    const g = confidenceIntervalF(I, X3, Y3, (1 - ci) / 2, f);
    return area_default2().x((x3) => x3).y0((x3) => g(x3, -1)).y1((x3) => g(x3, 1))(range(x12, x2 - precision / 2, precision).concat(x2));
  }
  _renderLine(I, X3, Y3) {
    const [x12, x2] = extent(I, (i) => X3[i]);
    const f = linearRegressionF(I, X3, Y3);
    return `M${x12},${f(x12)}L${x2},${f(x2)}`;
  }
};
function linearRegressionY(data, { x: x2 = indexOf, y: y2 = identity6, stroke, fill = isNoneish(stroke) ? "currentColor" : stroke, ...options } = {}) {
  return new LinearRegressionY(data, maybeDenseIntervalX({ ...options, x: x2, y: y2, fill, stroke }));
}
function linearRegressionF(I, X3, Y3) {
  let sumX = 0, sumY = 0, sumXY = 0, sumX2 = 0;
  for (const i of I) {
    const xi = X3[i];
    const yi = Y3[i];
    sumX += xi;
    sumY += yi;
    sumXY += xi * yi;
    sumX2 += xi * xi;
  }
  const n = I.length;
  const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
  const intercept = (sumY - slope * sumX) / n;
  return (x2) => slope * x2 + intercept;
}
function confidenceIntervalF(I, X3, Y3, p, f) {
  const mean2 = sum(I, (i) => X3[i]) / I.length;
  let a2 = 0, b = 0;
  for (const i of I) {
    a2 += (X3[i] - mean2) ** 2;
    b += (Y3[i] - f(X3[i])) ** 2;
  }
  const sy = Math.sqrt(b / (I.length - 2));
  const t = qt(p, I.length - 2);
  return (x2, k2) => {
    const Y4 = f(x2);
    const se = sy * Math.sqrt(1 / I.length + (x2 - mean2) ** 2 / a2);
    return Y4 + k2 * t * se;
  };
}

// node_modules/@observablehq/plot/src/index.js
Mark.prototype.plot = function({ marks: marks2 = [], ...options } = {}) {
  return plot({ ...options, marks: [...marks2, this] });
};

// src/views/View.ts
var View = class extends Upd8View {
};

// src/utils.ts
var matchEnum = (enm, arm) => {
  if (typeof enm == "string") {
    return arm(enm);
  } else {
    const k2 = Object.keys(enm)[0];
    return arm(k2, enm[k2]);
  }
};
var invariant = (v, message) => {
  if (v === void 0 || v === null) {
    throw new Error(message || "invariant violated");
  }
  return v;
};
var assertUnreachable = (_x) => {
  throw new Error("Unreachable");
};

// src/google.ts
var googleAPI = (token, baseURL) => async (method, endpoint, body) => {
  const res = await fetch(`${baseURL}/${endpoint}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: body ? JSON.stringify(body) : null
  });
  console.log(`[${method}] ${baseURL}/${endpoint} ${res.status}`);
  if (!res.ok) {
    throw new Error(`Google API Error: ${await res.text()}`);
  }
  return res.json();
};

// src/data.ts
var unpackValues = (r, cb) => {
  const fieldNames = r.values[0];
  for (let i = 0; i < r.values.length - 1; i++) {
    let rowIdx = i + 1;
    const row = r.values[rowIdx];
    let restValues;
    if (row.length > fieldNames.length) {
      restValues = row.slice(fieldNames.length - 1);
    }
    const obj = fieldNames.reduce((o, fn, idx) => {
      const isLast = idx === fieldNames.length - 1;
      o[fn] = isLast && restValues ? restValues : row[idx];
      if (isLast && !o[fn]) {
        o[fn] = [];
      }
      return o;
    }, {});
    cb({ ...obj, number: rowIdx }, rowIdx);
  }
};
var getMap = async (google2, name) => {
  const oMap = /* @__PURE__ */ new Map();
  switch (name) {
    case "Inputs": {
      const inputs2 = await google2(
        "GET",
        "values/Inputs?majorDimension=ROWS&valueRenderOption=UNFORMATTED_VALUE"
      );
      unpackValues(inputs2, (val, i) => {
        oMap.set(i, val);
      });
      break;
    }
    case "Curves": {
      const curves3 = await google2(
        "GET",
        "values/Curves?majorDimension=ROWS&valueRenderOption=UNFORMATTED_VALUE"
      );
      unpackValues(curves3, (val, i) => {
        oMap.set(i, val);
      });
      break;
    }
    case "Models": {
      const models2 = await google2(
        "GET",
        "values/Models?majorDimension=ROWS&valueRenderOption=UNFORMATTED_VALUE"
      );
      unpackValues(models2, (val, i) => {
        oMap.set(i, val);
      });
      break;
    }
  }
  return oMap;
};
var models = /* @__PURE__ */ new Map();
var inputs = /* @__PURE__ */ new Map();
var curves2 = /* @__PURE__ */ new Map();
var setInputData = (input, field2, value) => {
  const i = typeof input === "number" ? invariant(inputs.get(input), `input ${input} not found`) : input;
  if (typeof input !== "number") {
    input[field2] = value;
  }
  inputs.set(i.number, {
    ...i,
    [field2]: value
  });
};
var derefInput = (id2) => {
  const i = invariant(inputs.get(id2), `Missing input ref: ${id2}`);
  return {
    ...i,
    curves: i.curves.map(
      (c4) => invariant(curves2.get(c4), `Missing curve ref: ${c4}`)
    )
  };
};
var getAPI = (token, sheetId) => {
  if (!token) {
    return;
  }
  const google2 = googleAPI(
    token.access_token,
    `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}`
  );
  return {
    reloadRemoteData: reloadRemoteData.bind(null, google2),
    removeInput: removeInput.bind(null, google2),
    addInput: addInput.bind(null, google2),
    createModel: (name) => {
      return addRow(
        google2,
        "Models",
        { name, defaultDays: 30, defaultOffset: 0 },
        []
      );
    },
    updateModel: (model, inputs2) => {
      return updateRow(google2, "Models", model.number, model, inputs2);
    },
    deleteModel: (number6) => deleteRow(google2, "Models", number6),
    createInput: (_input) => {
      const curves3 = _input.curves;
      const input = _input;
      delete input.curves;
      return addRow(google2, "Inputs", input, curves3);
    },
    updateInput: (_input) => {
      const curves3 = _input.curves;
      const input = _input;
      delete input.curves;
      return updateRow(google2, "Inputs", input.number, input, curves3);
    }
  };
};
var removeInput = (google2, modelNumber, inputNumber) => {
  return deleteCell(google2, "Models", modelNumber, inputNumber);
};
var addInput = (google2, modelNumber, inputNumber) => {
  return addCell(google2, "Models", modelNumber, inputNumber);
};
var addRow = async (google2, sheet, values2, rest) => {
  const vr = await google2(
    "GET",
    `values/${sheet}?majorDimension=ROWS&valueRenderOption=UNFORMATTED_VALUE`
  );
  const newRow = vr.values.length + 1;
  const cols = vr.values[0];
  const insertVals = cols.slice(0, -1).map((c4, idx) => {
    const value = values2[c4];
    if (idx < cols.length - 1 && (value === void 0 || value === null)) {
      console.warn(`${JSON.stringify(values2)} is missing key '${c4}'`);
      return null;
    }
    return value;
  }).concat(rest);
  const range3 = `${sheet}`;
  await google2("POST", `values/${range3}:append?valueInputOption=RAW`, {
    range: range3,
    majorDimension: "ROWS",
    values: [insertVals]
  });
  return newRow;
};
var updateRow = async (google2, sheet, number6, values2, rest) => {
  const vr = await google2(
    "GET",
    `values/${sheet}?majorDimension=ROWS&valueRenderOption=UNFORMATTED_VALUE`
  );
  const cols = vr.values[0];
  const insertVals = cols.slice(0, -1).map((c4, idx) => {
    const value = values2[c4];
    if (idx < cols.length - 1 && (value === void 0 || value === null)) {
      console.warn(`${JSON.stringify(values2)} is missing key '${c4}'`);
      return null;
    }
    return value;
  }).concat(rest);
  const rowNum = number6 + 1;
  const range3 = `${sheet}!A${rowNum}:${getCol(insertVals.length)}${rowNum}`;
  await google2("PUT", `values/${range3}?valueInputOption=RAW`, {
    range: range3,
    majorDimension: "ROWS",
    values: [insertVals]
  });
};
var deleteRow = async (google2, sheet, row) => {
  const info = await google2("GET", "");
  const sheetId = invariant(
    info.sheets.find((s2) => s2.properties.title === sheet)?.properties.sheetId,
    `Couldn't find sheet '${sheet}' in ${info.sheets.map(
      (i) => i.properties.title
    )}`
  );
  await google2("POST", `:batchUpdate`, {
    requests: [
      {
        deleteDimension: {
          range: {
            sheetId,
            dimension: "ROWS",
            startIndex: row,
            endIndex: row + 1
          }
        }
      }
    ]
  });
};
var addCell = async (google2, sheet, row, value) => {
  const rowNum = row + 1;
  const vr = await google2(
    "GET",
    `values/${sheet}!${rowNum}:${rowNum}?majorDimension=ROWS&valueRenderOption=UNFORMATTED_VALUE`
  );
  const newCol = getCol(vr.values[0].length);
  await google2(
    "PUT",
    `values/${sheet}!${newCol}${rowNum}?valueInputOption=RAW`,
    {
      range: `${sheet}!${newCol}${rowNum}`,
      majorDimension: "ROWS",
      values: [[value]]
    }
  );
};
var deleteCell = async (google2, sheet, row, cellMatch) => {
  const rowNum = row + 1;
  const hr = await google2(
    "GET",
    `values/${sheet}!1:1?majorDimension=ROWS&valueRenderOption=UNFORMATTED_VALUE`
  );
  const startCol = getCol(hr.values.length);
  const vr = await google2(
    "GET",
    `values/${sheet}!${startCol}${rowNum}:${rowNum}?majorDimension=ROWS&valueRenderOption=UNFORMATTED_VALUE`
  );
  const newValues = vr.values[0].filter((v) => v !== cellMatch);
  if (newValues.length === vr.values[0].length) {
    throw new Error(`${cellMatch} not found in ${vr.values[0]}`);
  }
  newValues.push("");
  await google2(
    "PUT",
    `values/${sheet}!${startCol}${rowNum}:${rowNum}?valueInputOption=RAW`,
    {
      range: `${sheet}!${startCol}${rowNum}:${rowNum}`,
      majorDimension: "ROWS",
      values: [newValues]
    }
  );
};
var reloadRemoteData = async (google2) => {
  [models, inputs, curves2] = await Promise.all([
    getMap(google2, "Models"),
    getMap(google2, "Inputs"),
    getMap(google2, "Curves")
  ]);
  models.forEach((m) => {
    if (typeof m.inputs === "number") {
      m.inputs = [m.inputs];
    }
  });
  inputs.forEach((i) => {
    if (typeof i.curves === "number") {
      i.curves = [i.curves];
    }
  });
  curves2.forEach((c4) => {
    const extrapolatedCurve = [];
    if (typeof c4.curve === "number") {
      c4.curve = [c4.curve];
    }
    const increment = c4.curve.length / c4.period;
    let ci = 0;
    for (let i = 0; i < c4.period; i++) {
      const curveIndex = Math.floor(ci);
      extrapolatedCurve.push(c4.curve[curveIndex]);
      ci += increment;
    }
    c4.curve = extrapolatedCurve;
  });
};
var addRemoteState = async (state) => {
  state.models = [];
  models.forEach((m) => {
    const model = {
      ...m,
      inputs: m.inputs.map((num) => derefInput(num))
    };
    if (state.chartInputs.model?.number === model.number) {
      state.chartInputs.model = model;
    }
    state.models.push(model);
  });
  state.inputs = [];
  inputs.forEach((i, num) => {
    if (state.showingInput?.number === i.number) {
      state.showingInput = i;
    }
    state.inputs.push(derefInput(num));
  });
  return state;
};
var columns = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "AA",
  "AB",
  "AC",
  "AD",
  "AE",
  "AF",
  "AG",
  "AH",
  "AI",
  "AJ",
  "AK",
  "AL",
  "AM",
  "AN",
  "AO",
  "AP",
  "AQ",
  "AR",
  "AS",
  "AT",
  "AU",
  "AV",
  "AW",
  "AX",
  "AY",
  "AZ",
  "BA",
  "BB",
  "BC",
  "BD",
  "BE",
  "BF",
  "BG",
  "BH",
  "BI",
  "BJ",
  "BK",
  "BL",
  "BM",
  "BN",
  "BO",
  "BP",
  "BQ",
  "BR",
  "BS",
  "BT",
  "BU",
  "BV",
  "BW",
  "BX",
  "BY",
  "BZ"
];
var getCol = (number6) => {
  return invariant(columns[number6], `UNSUPPORTED INDEX ${number6}`);
};

// src/views/ModelView.ts
var getDatasetNumber = (el, name) => {
  const v = invariant(el.dataset[name], `number from data-${name}`);
  const n = parseInt(v);
  if (isNaN(n)) {
    throw new Error(`${v} is not a number`);
  }
  return n;
};
var ModelView = class extends View {
  static get id() {
    return "model";
  }
  get id() {
    return ModelView.id;
  }
  get modelNumber() {
    return this.state.chartInputs.model.number;
  }
  _modelName;
  get modelName() {
    return this._modelName || this.state.chartInputs.model.name;
  }
  mount() {
    const el = invariant(this.rootElement, "model root");
    return [
      this.eventListener(
        el,
        "click",
        () => {
          this.dispatchEvent({ ChooseInput: { number: this.modelNumber } });
        },
        ".add"
      ),
      this.eventListener(
        el,
        "click",
        (_, d) => {
          const inputNumber = getDatasetNumber(d, "number");
          this.dispatchEvent({
            RemoveInput: {
              inputNumber,
              modelNumber: this.modelNumber
            }
          });
        },
        ".delete"
      ),
      this.eventListener(
        el,
        "click",
        (_, d) => {
          const number6 = getDatasetNumber(d, "number");
          this.dispatchEvent({ ShowInput: { number: number6 } });
        },
        ".edit"
      ),
      this.eventListener(
        el,
        "click",
        (_, d) => {
          const number6 = getDatasetNumber(d, "number");
          this.dispatchEvent({ ToggleInputShowing: { number: number6 } });
        },
        ".toggle, .collection .name"
      ),
      this.eventListener("offset", "change", () => {
        this.dispatchEvent({
          UpdateChart: {
            offsetDay: Number.parseInt(
              this.el("offset").value
            )
          }
        });
      }),
      this.eventListener("days", "change", () => {
        this.dispatchEvent({
          UpdateChart: {
            days: Number.parseInt(this.el("days").value)
          }
        });
      }),
      this.eventListener("model-name", "change", () => {
        this._modelName = this.el("model-name").value;
        this.internalUpdate();
      }),
      this.eventListener("reset-changes", "click", () => {
        this.dispatchEvent("ResetModelChanges");
      }),
      this.eventListener("save-changes", "click", () => {
        const model = this.state.chartInputs.model;
        model.name = this.modelName;
        model.defaultDays = Number.parseInt(
          this.el("days").value
        );
        model.defaultOffset = Number.parseInt(
          this.el("offset").value
        );
        this.dispatchEvent({ UpdateModel: model });
      }),
      this.eventListener(
        el,
        "change",
        (_, el2) => {
          const number6 = getDatasetNumber(el2, "number");
          const field2 = invariant(el2.dataset.field, "field");
          let value = parseFloat(
            el2.value
          );
          if (field2 === "curves") {
            const curves3 = [];
            el2.querySelectorAll("option").forEach((opt) => {
              if (opt.selected) {
                curves3.push(parseFloat(opt.value));
              }
            });
            value = curves3;
          }
          this.dispatchEvent({ SetInputValue: { number: number6, value, field: field2 } });
        },
        ".input-field"
      ),
      this.eventListener(
        el,
        "click",
        (e, el2) => {
          const number6 = getDatasetNumber(el2, "number");
          let hiddenInputs = this.state.chartInputs.hiddenInputs;
          if (e.altKey) {
            if (hiddenInputs.size > 1 && !hiddenInputs.has(number6)) {
              hiddenInputs = /* @__PURE__ */ new Set();
            } else {
              hiddenInputs = new Set(
                this.state.chartInputs.model.inputs.filter((i) => i.number !== number6).map((i) => i.number)
              );
            }
          } else {
            if (hiddenInputs.has(number6)) {
              hiddenInputs.delete(number6);
            } else {
              hiddenInputs.add(number6);
            }
          }
          this.dispatchEvent({
            UpdateChart: {
              hiddenInputs
            }
          });
        },
        ".toggle-input"
      ),
      this.eventListener(
        "toggle-low",
        "click",
        this.showStack.bind(this, "low")
      ),
      this.eventListener(
        "toggle-mid",
        "click",
        this.showStack.bind(this, "mid")
      ),
      this.eventListener(
        "toggle-high",
        "click",
        this.showStack.bind(this, "high")
      )
    ];
  }
  showStack(chart) {
    this.dispatchEvent({
      UpdateChart: {
        showingStacks: chart
      }
    });
  }
  // https://leebyron.com/streamgraph/
  getChart(container) {
    const profitLossSum = [];
    this.state.showingCharts.forEach(({ profitLoss, name }) => {
      profitLoss.forEach((d, index2) => {
        profitLossSum[index2] = profitLossSum[index2] || d;
        profitLossSum[index2][name] = d.total;
      });
    });
    const moneyFormat = (d) => this.mf.format(d);
    return plot({
      width: container.clientWidth,
      y: {
        grid: true,
        label: "Revenue",
        labelArrow: "up"
      },
      x: {
        label: "Day",
        labelArrow: "right"
      },
      color: {
        legend: true,
        scheme: "pastel2"
      },
      marks: [
        ruleY([0]),
        areaY(
          this.state.showingCharts.find(
            (c4) => c4.name === this.state.chartInputs.showingStacks
          )?.data,
          {
            x: "day",
            y: "revenue",
            z: "input",
            fill: "input",
            channels: { Count: "count" },
            tip: true
          }
        ),
        lineY(profitLossSum, {
          x: "day",
          y: "mid",
          stroke: "black",
          fillOpacity: 0.8
        }),
        linearRegressionY(profitLossSum, {
          x: "day",
          y: this.state.chartInputs.showingStacks,
          stroke: "blue",
          opacity: 0.3
        }),
        areaY(profitLossSum, {
          x: "day",
          y1: "low",
          y2: "high",
          z: "input",
          fill: "black",
          fillOpacity: 0.2
        }),
        tip(
          profitLossSum,
          pointer({
            x: "day",
            y: "mid",
            y1: "low",
            y2: "high",
            tip: {
              format: {
                y: moneyFormat
              }
            }
          })
        )
      ]
    });
  }
  showing(state) {
    return state.showingScreen === "Model";
  }
  renderInputValues(element, input) {
    [
      "size",
      "frequency",
      "growthPercent",
      "growthFreq",
      "saturation",
      "seed",
      "variability"
    ].forEach((field2) => {
      const value = input[field2];
      this.setAttrs(element, { value }, `.${field2}`);
      this.setData(
        element,
        { number: input.number.toString(), field: field2 },
        `.${field2}`
      );
    });
    const selectedCurves = new Set(input.curves.map((c4) => c4.number));
    this.setContent(
      element,
      Array.from(curves2.entries()).map(([num, curve]) => {
        const opt = document.createElement("option");
        opt.value = `${num}`;
        if (selectedCurves.has(num)) {
          this.setAttrs(opt, { selected: "selected" });
        }
        this.setContent(opt, curve.name);
        return opt;
      }),
      ".curves"
    );
    this.setData(
      element,
      { number: input.number.toString(), field: "curves" },
      `.curves`
    );
  }
  updated() {
    this.setContent("chart", this.getChart(this.el("chart")));
    const model = invariant(this.state.chartInputs.model, "model");
    this.el("model-name").value = this.modelName;
    const channelCollection = this.template("collection");
    this.setContent(
      channelCollection,
      model.inputs.map((i) => {
        const cEl = this.template("collection-row");
        this.setContent(cEl, i.name, ".name");
        const number6 = i.number.toString();
        this.setData(cEl, { number: number6 }, ".name");
        this.setData(cEl, { number: number6 }, ".delete");
        this.setData(cEl, { number: number6 }, ".edit");
        this.setData(cEl, { number: number6 }, ".toggle");
        const showItems = this.state.openInputs.has(i.number);
        const openIcon = document.createElement("i");
        openIcon.dataset.feather = showItems ? "chevron-down" : "chevron-right";
        this.setContent(cEl, openIcon, ".toggle");
        this.findElement(cEl, ".items").classList.toggle("hidden", !showItems);
        if (showItems) {
          this.renderInputValues(cEl, i);
        }
        const toggleIcon = document.createElement("i");
        this.setData(toggleIcon, {
          feather: this.state.chartInputs.hiddenInputs.has(i.number) ? "eye-off" : "eye"
        });
        this.setData(cEl, { number: i.number.toString() }, ".toggle-input");
        this.setContent(cEl, toggleIcon, ".toggle-input");
        return cEl;
      }),
      ".collection"
    );
    this.setContent("inputs", channelCollection);
    this.el(
      "offset"
    ).value = `${this.state.chartInputs.offsetDay}`;
    this.el("days").value = `${this.state.chartInputs.days}`;
    ["low", "mid", "high"].forEach((_n) => {
      const n = _n;
      const chart = this.state.showingCharts.find((c4) => c4.name === n);
      if (!chart) {
        console.error("chart", n, "not found");
        return;
      }
      this.setContent(`profit-${n}`, this.mf.format(chart.profit));
      this.setContent(`loss-${n}`, `(${this.mf.format(chart.loss)})`);
      this.setContent(`net-${n}`, this.mf.format(chart.profit - chart.loss));
      let toggleIcon = document.createElement("i");
      if (this.state.chartInputs.showingStacks === n) {
        this.setData(toggleIcon, {
          feather: "eye"
        });
      }
      this.setContent(`toggle-${n}`, toggleIcon, ".icon");
    });
    const edited = this.state.chartInputs.days !== model.defaultDays || this.state.chartInputs.offsetDay !== model.defaultOffset || model.name !== this.modelName;
    this.el("save-controls").classList.toggle("hidden", !edited);
  }
  get mf() {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    });
  }
};

// src/views/ModelListView.ts
var ModelListView = class extends View {
  static get id() {
    return "model-list";
  }
  get id() {
    return ModelListView.id;
  }
  mount() {
    const root2 = invariant(this.rootElement, "model list root");
    return [
      this.eventListener(this.el("add-model-modal"), "click", (e) => {
        if (e.target?.id === "add-model-modal") {
          this.dispatchEvent("CancelCreateModel");
        }
      }),
      this.eventListener("new-model-name", "keydown", (e) => {
        if (e.key === "Escape") {
          this.dispatchEvent("CancelCreateModel");
        } else if (e.key === "Enter") {
          this.dispatchEvent({
            CreateModel: {
              name: this.el("new-model-name").value
            }
          });
        }
      }),
      this.eventListener(
        root2,
        "click",
        (_, el) => {
          this.dispatchEvent({
            ShowModel: { number: parseInt(el.dataset.number) }
          });
        },
        ".model"
      ),
      this.eventListener(
        root2,
        "click",
        (_, el) => {
          if (confirm(
            "Are you sure you want to delete this model? You won't be able to restore it."
          )) {
            this.dispatchEvent({
              DeleteModel: { number: parseInt(el.dataset.number) }
            });
          }
        },
        ".delete-model"
      ),
      this.eventListener("add-model", "click", () => {
        this.dispatchEvent("ShowCreateModel");
      })
    ];
  }
  showing(state) {
    return !!state.googleToken && state.showingScreen === "Models";
  }
  updated() {
    const modelList = invariant(this.rootElement, "model-list");
    this.setContent(modelList, "Models", ".title");
    const { width } = this.rootElement.getBoundingClientRect();
    this.setContent(
      modelList,
      this.state.models.map((m) => {
        const mEl = this.template("list-item");
        this.setContent(mEl, m.name, ".name");
        this.setAttrs(mEl, { title: m.name }, ".model");
        this.setData(mEl, { number: m.number.toString() }, ".model");
        this.setData(mEl, { number: m.number.toString() }, ".delete-model");
        const chartEl = this.findElement(mEl, ".chart");
        const chartData = this.state.vizCache.get(m.number);
        if (chartData) {
          const height = parseFloat(getComputedStyle(document.documentElement).fontSize) * 6;
          this.setContent(
            chartEl,
            plot({
              height,
              width,
              padding: 0,
              margin: 0,
              y: {
                label: null,
                tickFormat: null
              },
              x: {
                label: null,
                tickFormat: null
              },
              color: {
                // legend: true,
                scheme: "pastel2"
              },
              marks: [
                areaY(chartData.data, {
                  x: "day",
                  y: "revenue",
                  z: "input",
                  fill: "input"
                }),
                lineY(chartData.profitLoss, {
                  x: "day",
                  y: "total",
                  stroke: "black",
                  fillOpacity: 0.8
                })
              ]
            })
          );
        }
        return mEl;
      }),
      ".list"
    );
    this.el("add-model-modal").classList.toggle(
      "hidden",
      !this.state.showCreateModel
    );
    if (this.state.showCreateModel) {
      this.el("new-model-name").focus();
    }
  }
};

// src/views/Nav.ts
var Nav = class extends View {
  static get id() {
    return "nav";
  }
  get id() {
    return Nav.id;
  }
  mount() {
    return [
      this.eventListener("back", "click", () => {
        this.dispatchEvent("GoBack");
      })
    ];
  }
  updated() {
    this.el("back").classList.toggle(
      "hidden",
      this.state.showingScreen === "Models"
    );
    this.el("loader").classList.toggle("hidden", !this.state.loading);
  }
};

// src/views/QuickSearch.ts
var QuickSearch = class extends View {
  static get id() {
    return "quick-search";
  }
  get id() {
    return QuickSearch.id;
  }
  get input() {
    return this.el("typeahead");
  }
  get allResults() {
    switch (this.state.quickSearch) {
      case "Input": {
        const existing = new Set(
          this.state.chartInputs.model?.inputs.map((i) => i.number) || []
        );
        return this.state.inputs.filter((i) => {
          return !existing.has(i.number);
        });
      }
    }
    return [];
  }
  get showingResults() {
    if (!this.input.value) {
      return this.allResults.slice(0, 8);
    }
    return this.allResults.filter((i) => {
      return i.name.toLowerCase().includes(this.input.value.toLowerCase());
    });
  }
  mount() {
    const root2 = invariant(this.rootElement, "quicksearch root");
    return [
      this.eventListener(root2, "click", (e) => {
        if (e.target?.id === this.id) {
          this.dispatchEvent("CancelSearch");
        }
      }),
      this.eventListener("typeahead", "keydown", (e) => {
        if (e.key === "Escape") {
          this.dispatchEvent("CancelSearch");
        }
      }),
      this.eventListener("typeahead", "input", () => {
        this.internalUpdate();
      }),
      this.eventListener(
        root2,
        "click",
        (_, e) => {
          const eventName = `Add${this.state.quickSearch}`;
          this.dispatchEvent({
            [eventName]: {
              inputNumber: parseInt(e.dataset.number),
              modelNumber: this.state.quickSearchNumber
            }
          });
        },
        ".result"
      ),
      this.eventListener("create-result", "click", () => {
        const eventName = `Create${this.state.quickSearch}`;
        this.dispatchEvent({
          [eventName]: {
            name: this.input.value,
            number: this.state.quickSearchNumber
          }
        });
      })
    ];
  }
  showing(state) {
    return !!state.quickSearch;
  }
  updated() {
    this.setContent("title", `Find an ${this.state.quickSearch}`);
    this.setContent(
      "results",
      this.showingResults.map((r) => {
        const rEl = this.template("result");
        this.setContent(rEl, r.name, ".name");
        this.setData(rEl, { number: r.number.toString() });
        return rEl;
      })
    );
    if (this.input.value) {
      this.setContent(
        "create-result",
        `Create new ${this.state.quickSearch} named ${this.input.value}`
      );
    }
    this.el("create-result").classList.toggle("hidden", !this.input.value);
  }
};

// node_modules/jwt-decode/build/esm/index.js
var InvalidTokenError = class extends Error {
};
InvalidTokenError.prototype.name = "InvalidTokenError";
function b64DecodeUnicode(str) {
  return decodeURIComponent(atob(str).replace(/(.)/g, (m, p) => {
    let code = p.charCodeAt(0).toString(16).toUpperCase();
    if (code.length < 2) {
      code = "0" + code;
    }
    return "%" + code;
  }));
}
function base64UrlDecode(str) {
  let output = str.replace(/-/g, "+").replace(/_/g, "/");
  switch (output.length % 4) {
    case 0:
      break;
    case 2:
      output += "==";
      break;
    case 3:
      output += "=";
      break;
    default:
      throw new Error("base64 string is not of the correct length");
  }
  try {
    return b64DecodeUnicode(output);
  } catch (err) {
    return atob(output);
  }
}
function jwtDecode(token, options) {
  if (typeof token !== "string") {
    throw new InvalidTokenError("Invalid token specified: must be a string");
  }
  options || (options = {});
  const pos = options.header === true ? 0 : 1;
  const part = token.split(".")[pos];
  if (typeof part !== "string") {
    throw new InvalidTokenError(`Invalid token specified: missing part #${pos + 1}`);
  }
  let decoded;
  try {
    decoded = base64UrlDecode(part);
  } catch (e) {
    throw new InvalidTokenError(`Invalid token specified: invalid base64 for part #${pos + 1} (${e.message})`);
  }
  try {
    return JSON.parse(decoded);
  } catch (e) {
    throw new InvalidTokenError(`Invalid token specified: invalid json for part #${pos + 1} (${e.message})`);
  }
}

// src/views/SignInView.ts
var googleAuthCreds = {};
var authCallback = () => {
};
window.googleAuthComplete = (creds) => {
  googleAuthCreds = creds;
  authCallback();
};
var SignInView = class extends View {
  static get id() {
    return "signin";
  }
  get id() {
    return SignInView.id;
  }
  initialized = false;
  mount() {
    return [
      this.eventListener("authorize-sheets", "click", () => {
        this.tokenClient?.requestAccessToken();
      })
    ];
  }
  tokenClient;
  async maybeSignIn() {
    const stored = localStorage.getItem("googleAuthCreds");
    const storedToken = localStorage.getItem("googleToken");
    if (storedToken) {
      const token = JSON.parse(storedToken);
      try {
        const r = await googleAPI(
          token,
          "https://www.googleapis.com/oauth2/v3/tokeninfo"
        )("GET", `?access_token=${token.access_token}`);
        console.log(r);
        this.dispatchEvent({
          SignedIn: { token }
        });
        return;
      } catch (e) {
        console.log("Token no longer valid");
      }
    }
    if (stored && !googleAuthCreds.credential) {
      googleAuthCreds = JSON.parse(stored);
    }
    if (googleAuthCreds.credential) {
      localStorage.setItem("googleAuthCreds", JSON.stringify(googleAuthCreds));
      const credentials = jwtDecode(googleAuthCreds.credential);
      console.log(credentials);
      this.tokenClient = google.accounts.oauth2.initTokenClient({
        client_id: credentials.aud,
        // TODO: move to "https://www.googleapis.com/auth/drive.file" and implement filepicker
        scope: "https://www.googleapis.com/auth/spreadsheets",
        callback: (response) => {
          localStorage.setItem("googleToken", JSON.stringify(response));
          console.log(response);
          this.dispatchEvent({
            SignedIn: { token: response }
          });
        }
      });
      this.internalUpdate();
    }
  }
  becameVisible() {
    if (!this.initialized) {
      const script = document.createElement("script");
      script.src = "https://accounts.google.com/gsi/client";
      document.body.appendChild(script);
      const int = setInterval(() => {
        if (globalThis.google) {
          clearInterval(int);
          authCallback = this.maybeSignIn.bind(this);
          this.maybeSignIn();
        }
      }, 25);
    }
  }
  showing(state) {
    return state.googleToken === null;
  }
  updated() {
    this.el("authorize-sheets").classList.toggle("hidden", !this.tokenClient);
    this.el("google-auth").classList.toggle("hidden", !!this.tokenClient);
  }
};

// src/views/InputView.ts
var InputView = class extends View {
  static get id() {
    return "input";
  }
  get id() {
    return InputView.id;
  }
  get input() {
    return invariant(this.state.showingInput, "input");
  }
  mount() {
    const el = invariant(this.rootElement, "input root");
    return [
      this.eventListener(el, "click", (e) => {
        if (e.target?.id === this.id) {
          this.dispatchEvent("CancelInputEdit");
        }
      }),
      this.eventListener(
        el,
        "change",
        (_, el2) => {
          const field2 = invariant(el2.dataset.field, "field");
          let value = parseFloat(
            el2.value
          );
          if (field2 === "curves") {
            const curves3 = [];
            el2.querySelectorAll("option").forEach((opt) => {
              if (opt.selected) {
                curves3.push(parseFloat(opt.value));
              }
            });
            value = curves3;
          }
          this.dispatchEvent({
            SetInputValue: { number: this.input.number, value, field: field2 }
          });
        },
        ".input-field"
      ),
      this.eventListener(
        "cancel",
        "click",
        () => this.dispatchEvent("CancelInputEdit")
      ),
      this.eventListener(
        "save",
        "click",
        () => this.dispatchEvent("SaveInput")
      )
    ];
  }
  showing(state) {
    return !!state.showingInput;
  }
  updated() {
    const input = this.input;
    const el = invariant(this.rootElement, "input view");
    this.el("name").value = input.name;
    this.el("notes").value = input.notes;
    [
      "size",
      "frequency",
      "growthPercent",
      "growthFreq",
      "saturation",
      "seed",
      "variability"
    ].forEach((field2) => {
      const value = input[field2];
      this.setAttrs(el, { value }, `.${field2}`);
    });
    const selectedCurves = new Set(input.curves);
    this.setContent(
      el,
      Array.from(curves2.entries()).map(([num, curve]) => {
        const opt = document.createElement("option");
        opt.value = `${num}`;
        if (selectedCurves.has(num)) {
          opt.selected = true;
        }
        this.setContent(opt, curve.name);
        return opt;
      }),
      ".curves"
    );
  }
};

// src/index.ts
var initUI = cre8([
  Nav,
  SignInView,
  ModelView,
  ModelListView,
  QuickSearch,
  InputView
]);
var defaultAccumulator = (currentCount) => ({
  currentCount,
  isSaturated: false
});
var getChartData = (name, model, gMult, days, offsetDay, hiddenInputs) => {
  days = days || model.defaultDays;
  offsetDay = offsetDay || model.defaultOffset;
  hiddenInputs = hiddenInputs || /* @__PURE__ */ new Set();
  const data = [];
  const profitLoss = [];
  let acc = {};
  let profit = 0;
  let loss = 0;
  let startDay = offsetDay + 1;
  for (let day = 1; day <= startDay + days; day++) {
    let dayRevenue = 0;
    model.inputs.forEach((i) => {
      if (hiddenInputs.has(i.number)) {
        return;
      }
      const dailyGrowth = i.growthFreq ? i.growthPercent / i.growthFreq : 0;
      if (!acc[i.number]) {
        acc[i.number] = defaultAccumulator(i.seed);
      }
      if (!acc[i.number].isSaturated) {
        acc[i.number].currentCount = acc[i.number].currentCount + acc[i.number].currentCount * dailyGrowth;
      }
      let count2 = Math.round(acc[i.number].currentCount);
      if (i.saturation > 0 && count2 >= i.saturation) {
        acc[i.number].isSaturated = true;
      }
      i.curves.forEach((c4) => {
        count2 = count2 * c4.curve[day % c4.period];
      });
      const cMult = i.size > 0 ? gMult : -gMult;
      count2 = count2 + count2 * i.variability * cMult;
      if (day >= startDay) {
        const revenue = count2 / i.frequency * i.size;
        dayRevenue += revenue;
        if (revenue >= 0) {
          profit += revenue;
        } else {
          loss -= revenue;
        }
        data.push({
          input: i.name,
          day,
          count: count2,
          revenue
        });
      }
    });
    if (day >= startDay) {
      profitLoss.push({ day, total: dayRevenue });
    }
  }
  return {
    name,
    data,
    profitLoss,
    profit,
    loss
  };
};
var updateChart = (state) => {
  const { model, days, offsetDay, hiddenInputs } = state.chartInputs;
  if (model) {
    state.showingCharts = [
      getChartData("high", model, 1, days, offsetDay, hiddenInputs),
      getChartData("mid", model, 0, days, offsetDay, hiddenInputs),
      getChartData("low", model, -1, days, offsetDay, hiddenInputs)
    ];
  }
  return state;
};
var cacheCharts = (state) => {
  state.models.forEach((model) => {
    state.vizCache.set(model.number, getChartData("mid", model, 0));
  });
  return state;
};
var NICE_DREAMS_SHEET_ID = "1ywvFgv4YQGTOPddovWhQ0D_B5URN2NAp7y4yMGoCtoA";
window.addEventListener("load", async () => {
  const url = new URL(window.location.href);
  const sheet = url.searchParams.get("sheet");
  const state = {
    loading: false,
    googleToken: null,
    sheetId: sheet || NICE_DREAMS_SHEET_ID,
    models: [],
    inputs: [],
    openInputs: /* @__PURE__ */ new Set(),
    showingScreen: "Models",
    chartInputs: {
      showingStacks: "mid",
      days: 30,
      offsetDay: 0,
      hiddenInputs: /* @__PURE__ */ new Set()
    },
    showCreateModel: false,
    showingCharts: [],
    vizCache: /* @__PURE__ */ new Map()
  };
  const upd8 = initUI(state, async (event) => {
    const api = getAPI(state.googleToken, state.sheetId);
    const setLoading = (loading) => {
      state.loading = loading;
      upd8(state);
    };
    await matchEnum(event, async (ev, value) => {
      switch (ev) {
        case "SignedIn": {
          setLoading(true);
          state.googleToken = value.token;
          await getAPI(state.googleToken, state.sheetId)?.reloadRemoteData();
          await addRemoteState(state);
          cacheCharts(state);
          updateChart(state);
          state.loading = false;
          break;
        }
        case "GoBack": {
          switch (state.showingScreen) {
            case "Model":
              state.showingScreen = "Models";
              break;
            case "Inputs":
              state.showingScreen = "Model";
              break;
          }
          break;
        }
        case "ShowCreateModel": {
          state.showCreateModel = true;
          break;
        }
        case "CancelCreateModel": {
          state.showCreateModel = false;
          break;
        }
        case "CreateModel": {
          state.showCreateModel = false;
          setLoading(true);
          await api?.createModel(value.name);
          await api?.reloadRemoteData();
          addRemoteState(state);
          state.loading = false;
          break;
        }
        case "UpdateModel": {
          setLoading(true);
          const inputs2 = invariant(
            models.get(value.number),
            `Invalid model ${value.number}`
          ).inputs;
          await api?.updateModel(value, inputs2);
          await api?.reloadRemoteData();
          addRemoteState(state);
          state.loading = false;
          if (state.chartInputs.model) {
            state.chartInputs.model = state.models.find(
              (m) => m.number = state.chartInputs.model.number
            );
          }
          break;
        }
        case "ResetModelChanges": {
          const savedModel = models.get(state.chartInputs.model.number);
          state.chartInputs.model.name = savedModel.name;
          state.chartInputs.days = savedModel.defaultDays;
          state.chartInputs.offsetDay = savedModel.defaultOffset;
          updateChart(state);
          break;
        }
        case "DeleteModel": {
          setLoading(true);
          await api?.deleteModel(value.number);
          await api?.reloadRemoteData();
          addRemoteState(state);
          state.loading = false;
          break;
        }
        case "ShowModel": {
          const model = state.models.find((m) => m.number === value.number);
          if (model) {
            state.chartInputs.model = model;
            state.chartInputs.days = model.defaultDays;
            state.chartInputs.offsetDay = model.defaultOffset;
            updateChart(state);
            state.showingScreen = "Model";
          }
          break;
        }
        case "ShowInput": {
          state.showingInput = inputs.get(value.number);
          break;
        }
        case "CancelInputEdit": {
          state.showingInput = void 0;
          break;
        }
        case "ToggleInputShowing": {
          if (state.openInputs.has(value.number)) {
            state.openInputs.delete(value.number);
          } else {
            state.openInputs.add(value.number);
          }
          break;
        }
        case "SetInputValue": {
          setInputData(
            value.number === -1 ? state.showingInput : value.number,
            value.field,
            value.value
          );
          addRemoteState(state);
          updateChart(state);
          break;
        }
        case "SaveInput": {
          const input = state.showingInput;
          const modelNumber = state.createInputModel;
          state.createInputModel = void 0;
          state.showingInput = void 0;
          if (!input) {
            return;
          }
          setLoading(true);
          if (input.number === -1) {
            const inputNumber = await api?.createInput(input);
            if (modelNumber && inputNumber) {
              await api?.addInput(modelNumber, inputNumber - 1);
            }
          } else {
            api?.updateInput(input);
          }
          await api?.reloadRemoteData();
          addRemoteState(state);
          updateChart(state);
          state.loading = false;
          break;
          break;
        }
        case "ChooseInput": {
          state.quickSearch = "Input";
          state.quickSearchNumber = value.number;
          break;
        }
        case "CancelSearch": {
          state.quickSearch = void 0;
          state.quickSearchNumber = void 0;
          break;
        }
        case "AddInput": {
          state.quickSearch = void 0;
          state.quickSearchNumber = void 0;
          setLoading(true);
          await api?.addInput(value.modelNumber, value.inputNumber);
          await api?.reloadRemoteData();
          addRemoteState(state);
          updateChart(state);
          state.loading = false;
          break;
        }
        case "RemoveInput": {
          setLoading(true);
          await api?.removeInput(value.modelNumber, value.inputNumber);
          await api?.reloadRemoteData();
          addRemoteState(state);
          updateChart(state);
          state.loading = false;
          break;
        }
        case "CreateInput": {
          state.showingInput = {
            name: value.name,
            curves: [],
            number: -1,
            frequency: 1,
            size: 1,
            growthPercent: 0,
            growthFreq: 0,
            notes: "",
            seed: 1,
            saturation: 1,
            variability: 1
          };
          state.createInputModel = value.number;
          state.quickSearch = void 0;
          state.quickSearchNumber = void 0;
          break;
        }
        case "UpdateChart": {
          if (value.days !== void 0) {
            state.chartInputs.days = value.days;
          }
          if (value.offsetDay !== void 0) {
            state.chartInputs.offsetDay = value.offsetDay;
          }
          if (value.hiddenInputs) {
            state.chartInputs.hiddenInputs = value.hiddenInputs;
          }
          if (value.showingStacks) {
            state.chartInputs.showingStacks = value.showingStacks;
          }
          updateChart(state);
          break;
        }
        default:
          assertUnreachable(ev);
          return;
      }
    });
    upd8(state);
    import_feather_icons.default.replace();
  });
});
if (false) {
  console.log("Dev Mode enabled");
  new EventSource("/esbuild").addEventListener(
    "change",
    () => location.reload()
  );
}
/*! Bundled license information:

feather-icons/dist/feather.js:
  (*!
    Copyright (c) 2016 Jed Watson.
    Licensed under the MIT License (MIT), see
    http://jedwatson.github.io/classnames
  *)
*/
