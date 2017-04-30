/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function getInputs() {
  return {
    title: document.getElementById('input-title').value,
    body: document.getElementById('input-body').value,
    id: Date.now(),
    quality: 'Swill'
  };
}

function clearInputs() {
  document.getElementById('input-title').value = '';
  document.getElementById('input-body').value = '';
  console.log('ari');
}

function renderCardPrimaryInfo(obj) {
  return '\n  <section class="primary-info">\n\n    <section class="card-text">\n      <h2 class="card-title">' + obj.title + '</h2>\n      <p class="card-body">' + obj.body + '</p>\n    </section>\n\n  </section>\n  ';
}

function renderCardQuality(obj) {
  return '\n  <section class="rating">\n    <button class="upvote" type="button" name="button"></button>\n    <button class="downvote" type="button" name="button"></button>\n    <p class="quality">quality: <span>' + obj.quality + '</span></p>\n  </section>\n  ';
}

function buildCard(obj) {
  return '\n  <article id=' + obj.id + ' class="card">\n    <button class="complete" type="button" name="complete"></button>\n    <main>\n      ' + renderCardPrimaryInfo(obj) + '\n      ' + renderCardQuality(obj) + '\n    </main>\n    <button class="delete" type="button" name="button"></button>\n  </article>\n  ';
}

function saveIdea(e) {
  e.preventDefault();
  document.getElementById('card-container').innerHTML += buildCard(getInputs());
  clearInputs();
}

document.getElementById('card-container').innerHTML += buildCard({
  title: 'Enter Title',
  body: 'Enter description',
  id: Date.now(),
  quality: 'Swill'
});

document.getElementById('submit').addEventListener('click', saveIdea);

/***/ })
/******/ ]);