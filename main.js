/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n#console {\r\n    background-color: #333;\r\n    color: #55ee62;\r\n    font-family: monospace;\r\n    padding: 10px;\r\n    overflow: scroll;\r\n    height: 75vh;\r\n    white-space: pre;\r\n}\r\n\r\np {\r\n    padding: 5px;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://top-bst/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://top-bst/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://top-bst/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://top-bst/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://top-bst/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://top-bst/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://top-bst/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://top-bst/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://top-bst/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://top-bst/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/Node.js":
/*!*********************!*\
  !*** ./src/Node.js ***!
  \*********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Node)\n/* harmony export */ });\nclass Node {\r\n    constructor(data, left = null, right = null) {\r\n        this.data = data;\r\n        this.left = left;\r\n        this.right = right;\r\n    }\r\n}\n\n//# sourceURL=webpack://top-bst/./src/Node.js?");

/***/ }),

/***/ "./src/Tree.js":
/*!*********************!*\
  !*** ./src/Tree.js ***!
  \*********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Tree)\n/* harmony export */ });\n/* harmony import */ var _Node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Node.js */ \"./src/Node.js\");\n/* harmony import */ var _log_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./log.js */ \"./src/log.js\");\n\r\n\r\n\r\nclass Tree {\r\n  constructor(array) {\r\n    this.root = this.buildTree(array);\r\n  }\r\n\r\n  sortArray(array) {\r\n    const sortedArray = [...new Set(array)].sort((a, b) => a - b);\r\n    return sortedArray;\r\n  }\r\n\r\n  buildTree(array) {\r\n    let sorted = this.sortArray(array);\r\n    if (sorted.length === 0) return null;\r\n\r\n    const mid = parseInt(sorted.length / 2);\r\n    const root = new _Node_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](sorted[mid]);\r\n    // recursively call to get the left and right branches\r\n    root.left = this.buildTree(sorted.slice(0, mid));\r\n    root.right = this.buildTree(sorted.slice(mid + 1));\r\n    return root;\r\n  }\r\n\r\n  insert(value, root = this.root) {\r\n    /*\r\n    compare to root, is it bigger or smaller?\r\n    smaller than root means it goes left,\r\n    larger means it goes right,\r\n    recursively call this\r\n    */\r\n    // if root null ie no root, create new Node.\r\n    // base case\r\n    if (root === null) return new _Node_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](value);\r\n\r\n    // root data is less than the data we want to insert?\r\n    root.data < value\r\n      ? (root.right = this.insert(value, root.right))\r\n      : (root.left = this.insert(value, root.left));\r\n    return root;\r\n  }\r\n\r\n  min(node) {\r\n    while (node.left !== null) {\r\n      node = node.left;\r\n    }\r\n    return node.data;\r\n  }\r\n\r\n  delete(root = this.root, value) {\r\n    // No root node\r\n    if (root === null) {\r\n      return root;\r\n    }\r\n    if (value < root.data) {\r\n      // Corrected to use root.data\r\n      root.left = this.delete(root.left, value);\r\n    } else if (value > root.data) {\r\n      // Corrected to use root.data\r\n      root.right = this.delete(root.right, value);\r\n    } else {\r\n      // Node has No Children, i.e., it is a leaf\r\n      if (!root.left && !root.right) {\r\n        return null;\r\n      }\r\n      // Node has One Child\r\n      if (!root.left) {\r\n        return root.right;\r\n      } else if (!root.right) {\r\n        return root.left;\r\n      }\r\n      // Node has two Children.\r\n      root.data = this.min(root.right);\r\n      root.right = this.delete(root.right, root.data);\r\n    }\r\n\r\n    return root;\r\n  }\r\n\r\n  find(root = this.root, value) {\r\n    if (root.data === value) {\r\n      return root;\r\n    } else if (value < root.data) {\r\n      return this.find(root.left, value);\r\n    } else if (value > root.data) {\r\n      return this.find(root.right, value);\r\n    }\r\n    return root;\r\n  }\r\n\r\n  levelOrderIterate(root = this.root, func) {\r\n    /* Breadth first\r\n    - Traverse all of one Level before proceeding to the next level\r\n    */\r\n    if (!root) {\r\n      return;\r\n    }\r\n\r\n    // add root element to the queue\r\n    let queue = [root];\r\n\r\n    // create result array as default handler\r\n    let result = [];\r\n\r\n    while (queue.length > 0) {\r\n      const node = queue.shift();\r\n\r\n      // If a function is provided, call it to process each node\r\n      if (func) {\r\n        func(node);\r\n      } else {\r\n        result.push(node.data); // add to the result array\r\n      }\r\n\r\n      if (node.left) {\r\n        queue.push(node.left);\r\n      }\r\n      if (node.right) {\r\n        queue.push(node.right);\r\n      }\r\n    }\r\n    console.log(result);\r\n    return result;\r\n  }\r\n\r\n  levelOrderRecursive(root = this.root, func, queue = [root], result = []) {\r\n    if (!root || queue.length === 0) {\r\n      // log result when traversal is complete\r\n      (0,_log_js__WEBPACK_IMPORTED_MODULE_1__.log)(`Level Order Traversal Result: ${result.join(\", \")}`);\r\n      return result;\r\n    }\r\n\r\n    const node = queue.shift();\r\n\r\n    // If a function is provided, call it to process each node\r\n    if (func) {\r\n      func(node);\r\n    } else {\r\n      result.push(node.data); // add to the result array\r\n    }\r\n\r\n    if (node.left) {\r\n      queue.push(node.left);\r\n    }\r\n    if (node.right) {\r\n      queue.push(node.right);\r\n    }\r\n\r\n    return this.levelOrderRecursive(root, func, queue, result);\r\n  }\r\n\r\n  inOrder(root = this.root, func, output = []) {\r\n    /* Left Root Right */\r\n    if (root === null) {\r\n      return output;\r\n    }\r\n    this.inOrder(root.left, func, output);\r\n    if (func) {\r\n      func(root);\r\n    } else {\r\n      output.push(root.data); // push data to output array\r\n    }\r\n\r\n    this.inOrder(root.right, func, output);\r\n\r\n    return output;\r\n  }\r\n\r\n  preOrder(root = this.root, func, output = []) {\r\n    /* Root Left Right*/\r\n    if (root === null) {\r\n      return output;\r\n    }\r\n    if (func) {\r\n      func(root);\r\n    } else {\r\n      output.push(root.data); // push data to output array\r\n    }\r\n\r\n    this.preOrder(root.left, func, output);\r\n    this.preOrder(root.right, func, output);\r\n\r\n    return output;\r\n  }\r\n\r\n  postOrder(root = this.root, func, output = []) {\r\n    /* Left Right Root */\r\n\r\n    if (root === null) {\r\n      return output;\r\n    }\r\n    this.postOrder(root.left, func, output);\r\n    this.postOrder(root.right, func, output);\r\n\r\n    if (func) {\r\n      func(root);\r\n    } else {\r\n      output.push(root.data); // push data to output array\r\n    }\r\n\r\n    return output;\r\n  }\r\n\r\n  depth(root = this.root) {\r\n    if (root === null) {\r\n      return 0;\r\n    }\r\n    const leftDepth = this.depth(root.left);\r\n    const rightDepth = this.depth(root.right);\r\n\r\n    return Math.max(leftDepth, rightDepth) + 1;\r\n  }\r\n\r\n  isBalanced(root = this.root) {\r\n    if (root === null) {\r\n      return true;\r\n    }\r\n\r\n    const leftDepth = this.depth(root.left);\r\n    const rightDepth = this.depth(root.right);\r\n\r\n    // Check the balance condition and recursively check left and right subtrees\r\n    return (\r\n      Math.abs(leftDepth - rightDepth) <= 1 &&\r\n      this.isBalanced(root.left) &&\r\n      this.isBalanced(root.right)\r\n    );\r\n  }\r\n\r\n  rebalance(root = this.root) {\r\n    this.root = this.buildTree(this.inOrder(root));\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://top-bst/./src/Tree.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Tree_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tree.js */ \"./src/Tree.js\");\n/* harmony import */ var _prettyPrint_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prettyPrint.js */ \"./src/prettyPrint.js\");\n/* harmony import */ var _treeGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./treeGenerator.js */ \"./src/treeGenerator.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\r\n\r\n\r\n\r\n\r\n(0,_treeGenerator_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n//# sourceURL=webpack://top-bst/./src/index.js?");

/***/ }),

/***/ "./src/log.js":
/*!********************!*\
  !*** ./src/log.js ***!
  \********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   log: () => (/* binding */ log)\n/* harmony export */ });\nconst logQueue = [];\r\nlet isTyping = false;\r\n\r\nfunction log(text) {\r\n  logQueue.push(text);\r\n  if (!isTyping) {\r\n    typeNextLog();\r\n  }\r\n}\r\n\r\nfunction typeNextLog() {\r\n  const console = document.getElementById(\"console\");\r\n  if (logQueue.length > 0) {\r\n    isTyping = true;\r\n\r\n    const p = document.createElement(\"p\");\r\n    console.appendChild(p);\r\n\r\n    let text = logQueue.shift();\r\n    let index = 0;\r\n\r\n    function type() {\r\n      if (index < text.length) {\r\n        p.innerText += text.charAt(index);\r\n        index++;\r\n        setTimeout(type, 25);\r\n        // Scroll to the bottom of the container to follow the text\r\n        console.scrollTop = console.scrollHeight;\r\n      } else {\r\n        isTyping = false;\r\n        typeNextLog();\r\n      }\r\n    }\r\n\r\n    type();\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://top-bst/./src/log.js?");

/***/ }),

/***/ "./src/prettyPrint.js":
/*!****************************!*\
  !*** ./src/prettyPrint.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   prettyPrint: () => (/* binding */ prettyPrint)\n/* harmony export */ });\n/* harmony import */ var _log_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./log.js */ \"./src/log.js\");\n\r\n\r\nconst prettyPrint = (node, prefix = \"\", isLeft = true) => {\r\n    if (node === null) {\r\n      return;\r\n    }\r\n    if (node.right !== null) {\r\n      prettyPrint(node.right, `${prefix}${isLeft ? \"│   \" : \"    \"}`, false);\r\n    }\r\n    (0,_log_js__WEBPACK_IMPORTED_MODULE_0__.log)(`${prefix}${isLeft ? \"└── \" : \"┌── \"}${node.data}`);\r\n    if (node.left !== null) {\r\n      prettyPrint(node.left, `${prefix}${isLeft ? \"    \" : \"│   \"}`, true);\r\n    }\r\n  };\n\n//# sourceURL=webpack://top-bst/./src/prettyPrint.js?");

/***/ }),

/***/ "./src/treeGenerator.js":
/*!******************************!*\
  !*** ./src/treeGenerator.js ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ treeGenerator)\n/* harmony export */ });\n/* harmony import */ var _Tree_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tree.js */ \"./src/Tree.js\");\n/* harmony import */ var _prettyPrint_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prettyPrint.js */ \"./src/prettyPrint.js\");\n/* harmony import */ var _log_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./log.js */ \"./src/log.js\");\n\r\n\r\n\r\n\r\nfunction treeGenerator() {\r\n  function generateArray(length) {\r\n    const randomArray = [];\r\n    for (let i = 0; i < length; i++) {\r\n      randomArray.push(Math.floor(Math.random() * 100));\r\n    }\r\n    return randomArray;\r\n  }\r\n\r\n  const randomNumbers = generateArray(10);\r\n  const bst = new _Tree_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](randomNumbers);\r\n  (0,_log_js__WEBPACK_IMPORTED_MODULE_2__.log)(`Generating random Numbers... ${randomNumbers}`);\r\n  (0,_log_js__WEBPACK_IMPORTED_MODULE_2__.log)(\"Let's Build a Binary Search Tree!\");\r\n  (0,_prettyPrint_js__WEBPACK_IMPORTED_MODULE_1__.prettyPrint)(bst.root);\r\n\r\n  // Check if tree is balanced\r\n  (0,_log_js__WEBPACK_IMPORTED_MODULE_2__.log)(\"Tree is balanced\");\r\n  \r\n  // Print Elements\r\n  bst.levelOrderRecursive();\r\n\r\n  // Add Numbers > 100 to unbalance the tree.\r\n  bst.insert(120);\r\n  bst.insert(130);\r\n  bst.insert(140);\r\n\r\n  (0,_log_js__WEBPACK_IMPORTED_MODULE_2__.log)(\"Adding 120, 130 & 140 to your tree! You're welcome!\")\r\n\r\n  // Check if tree is now unbalanced\r\n  ;(0,_log_js__WEBPACK_IMPORTED_MODULE_2__.log)(\"Tree is now unbalanced! :(\");\r\n\r\n  (0,_log_js__WEBPACK_IMPORTED_MODULE_2__.log)(\"Rebalancing Tree...\")\r\n  // Rebalance, using inOrder traversal.\r\n  bst.rebalance();\r\n  (0,_prettyPrint_js__WEBPACK_IMPORTED_MODULE_1__.prettyPrint)(bst.root)\r\n\r\n\r\n// Print elements in different orders after rebalance\r\nbst.levelOrderRecursive();\r\n}\r\n\n\n//# sourceURL=webpack://top-bst/./src/treeGenerator.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;