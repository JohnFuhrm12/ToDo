/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
    margin: 0;
    align-items: center;
}

html, body {
	max-height: 100%;
    align-items: center;
    text-align: center;
    background-color: rgb(232, 232, 232);
}

#navbar {
    background-color: rgba(0, 0, 0, 0.796);
    text-align: left;
    height: 12vh;
}

#navTitle {
    color: white;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 40px;
    padding: 20px;
}

#content {
    display: flex;
    flex-direction: row;
}

#sideBar {
    background-color: rgb(207, 207, 207);
    height: 83.8vh;
    width: 20%;
    padding-top: 2%;
}

.sideBarTitle {
    font-size: 26px;
    margin-left: 20%;
    transition: 0.5s;
    width: 50%;
    padding: 5px;
    border-radius: 15px;
    margin-top: 0;
    margin-bottom: 20px;
}

.sideBarTitle:hover {
    background-color: rgb(163, 163, 163);
    cursor: pointer;
    transition: 0.5s;
}

#projectsTitle {
    font-size: 38px;
}


#projectsTitle:hover {
    background-color: rgb(207, 207, 207);
    cursor: auto;
}

#todoContainer {
    width: 100%;
}

.projectListing {
    font-size: 26px;
    margin-left: 20%;
    transition: 0.5s;
    width: 50%;
    padding: 5px;
    border-radius: 15px;
    margin-top: 0;
    margin-bottom: 20px;
}

.projectListing:hover {
    background-color: rgb(163, 163, 163);
    cursor: pointer;
    transition: 0.5s;
}

/* Modal */

.modal {
    display: none;
    position: fixed; 
    padding-top: 150px;
    left: 0; 
    top: 50;
    width: 100%;
    height: 100%; 
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.5);
  }

  .modal-content {
    position: relative; 
    background-color: white;
    padding: 20px; 
    margin: auto; 
    width: 30%;  
    -webkit-animation-name: animatetop;
    -webkit-animation-duration: 0.4s;
    animation-name: animatetop;
    animation-duration: 0.4s;
    border-radius: 10px;
  }

  .close-btn {
    float: right; 
    color: lightgray; 
    font-size: 24px;  
    font-weight: bold;
    cursor: pointer;
  }

  .close-btn:hover {
    color: darkgray;
  }

  @-webkit-keyframes animatetop {
    from {top:-300px; opacity:0} 
    to {top:0; opacity:1}
  }

  @keyframes animatetop {
    from {top:-300px; opacity:0}
    to {top:0; opacity:1}
  }

  .modalTitle {
    border-bottom: solid 2px black;
    padding-bottom: 10px;
    font-size: 30px;
    margin-top: 0;
  }

  .form {
    display: flex;
    flex-direction: column;
    text-align: left;
  }

  .modalLabel {
    font-size: 18px;
    width: 50%;
    margin: 0 auto;
    margin-bottom: 10px;
  }

  .modalInput {
    width: 50%;
    margin: 0 auto;
    font-size: 16px;
    padding: 5px;
    border-radius: 5px;
    margin-bottom: 10px;
  }

  .addBtn {
    width: 30%;
    font-size: 18px;
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;
    margin-left: 46%;
    margin-top: 10px;
    margin-bottom: 10px;
    transition: 0.5s;
  }

  .addBtn:hover {
    transition: 0.5s;
    background-color: black;
    color: white;
  }

  #todoModal {
    padding-top: 20px;
  }

  #todoModalContent {
    width: 50%;
  }

/* Container */

.contentTitle {
    margin-top: 40px;
    margin-left: 0px;
    width: 200px;
}

.todo {
    display: flex;
    flex-direction: row;
    padding: 10px;
    border-bottom: solid 3px black;
    justify-content: space-between;
    width: 80%;
    margin: 0 auto;
}

.todo:hover {
cursor: pointer;
}

.todoTitle {
    margin-left: 20px;
}

.todoDate {

}

.AddTodosBtn {
    width: 10%;
    font-size: 18px;
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;
    margin-left: 46%;
    margin-top: 10px;
    margin-bottom: 10px;
    transition: 0.5s;
    margin-top: 50px;
  }

  .AddTodosBtn:hover {
    transition: 0.5s;
    background-color: black;
    color: white;
  }

  .leftContainer {
    display: flex;
    flex-direction: row;
  }

  .todoCheckbox:hover {
    cursor: pointer;
  }`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["body {\r\n    margin: 0;\r\n    align-items: center;\r\n}\r\n\r\nhtml, body {\r\n\tmax-height: 100%;\r\n    align-items: center;\r\n    text-align: center;\r\n    background-color: rgb(232, 232, 232);\r\n}\r\n\r\n#navbar {\r\n    background-color: rgba(0, 0, 0, 0.796);\r\n    text-align: left;\r\n    height: 12vh;\r\n}\r\n\r\n#navTitle {\r\n    color: white;\r\n    margin-top: 0;\r\n    margin-bottom: 0;\r\n    font-size: 40px;\r\n    padding: 20px;\r\n}\r\n\r\n#content {\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n\r\n#sideBar {\r\n    background-color: rgb(207, 207, 207);\r\n    height: 83.8vh;\r\n    width: 20%;\r\n    padding-top: 2%;\r\n}\r\n\r\n.sideBarTitle {\r\n    font-size: 26px;\r\n    margin-left: 20%;\r\n    transition: 0.5s;\r\n    width: 50%;\r\n    padding: 5px;\r\n    border-radius: 15px;\r\n    margin-top: 0;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.sideBarTitle:hover {\r\n    background-color: rgb(163, 163, 163);\r\n    cursor: pointer;\r\n    transition: 0.5s;\r\n}\r\n\r\n#projectsTitle {\r\n    font-size: 38px;\r\n}\r\n\r\n\r\n#projectsTitle:hover {\r\n    background-color: rgb(207, 207, 207);\r\n    cursor: auto;\r\n}\r\n\r\n#todoContainer {\r\n    width: 100%;\r\n}\r\n\r\n.projectListing {\r\n    font-size: 26px;\r\n    margin-left: 20%;\r\n    transition: 0.5s;\r\n    width: 50%;\r\n    padding: 5px;\r\n    border-radius: 15px;\r\n    margin-top: 0;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.projectListing:hover {\r\n    background-color: rgb(163, 163, 163);\r\n    cursor: pointer;\r\n    transition: 0.5s;\r\n}\r\n\r\n/* Modal */\r\n\r\n.modal {\r\n    display: none;\r\n    position: fixed; \r\n    padding-top: 150px;\r\n    left: 0; \r\n    top: 50;\r\n    width: 100%;\r\n    height: 100%; \r\n    background-color: rgb(0, 0, 0);\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n  }\r\n\r\n  .modal-content {\r\n    position: relative; \r\n    background-color: white;\r\n    padding: 20px; \r\n    margin: auto; \r\n    width: 30%;  \r\n    -webkit-animation-name: animatetop;\r\n    -webkit-animation-duration: 0.4s;\r\n    animation-name: animatetop;\r\n    animation-duration: 0.4s;\r\n    border-radius: 10px;\r\n  }\r\n\r\n  .close-btn {\r\n    float: right; \r\n    color: lightgray; \r\n    font-size: 24px;  \r\n    font-weight: bold;\r\n    cursor: pointer;\r\n  }\r\n\r\n  .close-btn:hover {\r\n    color: darkgray;\r\n  }\r\n\r\n  @-webkit-keyframes animatetop {\r\n    from {top:-300px; opacity:0} \r\n    to {top:0; opacity:1}\r\n  }\r\n\r\n  @keyframes animatetop {\r\n    from {top:-300px; opacity:0}\r\n    to {top:0; opacity:1}\r\n  }\r\n\r\n  .modalTitle {\r\n    border-bottom: solid 2px black;\r\n    padding-bottom: 10px;\r\n    font-size: 30px;\r\n    margin-top: 0;\r\n  }\r\n\r\n  .form {\r\n    display: flex;\r\n    flex-direction: column;\r\n    text-align: left;\r\n  }\r\n\r\n  .modalLabel {\r\n    font-size: 18px;\r\n    width: 50%;\r\n    margin: 0 auto;\r\n    margin-bottom: 10px;\r\n  }\r\n\r\n  .modalInput {\r\n    width: 50%;\r\n    margin: 0 auto;\r\n    font-size: 16px;\r\n    padding: 5px;\r\n    border-radius: 5px;\r\n    margin-bottom: 10px;\r\n  }\r\n\r\n  .addBtn {\r\n    width: 30%;\r\n    font-size: 18px;\r\n    padding: 5px;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n    margin-left: 46%;\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n    transition: 0.5s;\r\n  }\r\n\r\n  .addBtn:hover {\r\n    transition: 0.5s;\r\n    background-color: black;\r\n    color: white;\r\n  }\r\n\r\n  #todoModal {\r\n    padding-top: 20px;\r\n  }\r\n\r\n  #todoModalContent {\r\n    width: 50%;\r\n  }\r\n\r\n/* Container */\r\n\r\n.contentTitle {\r\n    margin-top: 40px;\r\n    margin-left: 0px;\r\n    width: 200px;\r\n}\r\n\r\n.todo {\r\n    display: flex;\r\n    flex-direction: row;\r\n    padding: 10px;\r\n    border-bottom: solid 3px black;\r\n    justify-content: space-between;\r\n    width: 80%;\r\n    margin: 0 auto;\r\n}\r\n\r\n.todo:hover {\r\ncursor: pointer;\r\n}\r\n\r\n.todoTitle {\r\n    margin-left: 20px;\r\n}\r\n\r\n.todoDate {\r\n\r\n}\r\n\r\n.AddTodosBtn {\r\n    width: 10%;\r\n    font-size: 18px;\r\n    padding: 5px;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n    margin-left: 46%;\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n    transition: 0.5s;\r\n    margin-top: 50px;\r\n  }\r\n\r\n  .AddTodosBtn:hover {\r\n    transition: 0.5s;\r\n    background-color: black;\r\n    color: white;\r\n  }\r\n\r\n  .leftContainer {\r\n    display: flex;\r\n    flex-direction: row;\r\n  }\r\n\r\n  .todoCheckbox:hover {\r\n    cursor: pointer;\r\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/inbox.js":
/*!**********************!*\
  !*** ./src/inbox.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadInbox: () => (/* binding */ loadInbox)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");


const loadInbox = (allProjects) => {
    const todoContainer = document.getElementById('todoContainer');
    const sideBar = document.getElementById('sideBar');
    
    // Create Title
    const titleCheck = document.getElementById('inboxTitle');
    const projectCheck = document.getElementById('projectTitle');

    if (!titleCheck && !projectCheck) {
        const inboxTitle = document.createElement('h1'); 
        inboxTitle.innerText = 'Inbox';
        inboxTitle.className = 'contentTitle';
        inboxTitle.id = 'inboxTitle';
        todoContainer.appendChild(inboxTitle);
    };

    // Create All Todos (Title-Duedate-Priority)
    let currentProjects = document.getElementsByClassName('projectListing');
    if (currentProjects) {
        while(currentProjects[0]) {
            currentProjects[0].parentNode.removeChild(currentProjects[0]);
        };
    };
    if (allProjects) {
        allProjects.forEach((project) => {
            let projectObject = document.createElement('h2'); 
            projectObject.innerText = project.title;
            projectObject.className = 'projectListing';
            sideBar.appendChild(projectObject);

            projectObject.addEventListener('click', function() {
                (0,_project__WEBPACK_IMPORTED_MODULE_0__.loadProject)(project.title);
            });
        });
    };
};



/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadProject: () => (/* binding */ loadProject)
/* harmony export */ });
const allTodos = [];

const loadProject = (projectName) => {

    class Todo{
        constructor(title, description, dueDate, priority, status, project) {
            this.title = title,
            this.description = description,
            this.dueDate = dueDate,
            this.priority = priority,
            this.status = status,
            this.project = project
        };
    };

    const todoContainer = document.getElementById('todoContainer');
    todoContainer.innerHTML = '';

    // Create Title
    function createTitle() {
        const titleCheck = document.getElementById('projectTitle');

        if (!titleCheck) {
            const projectTitle = document.createElement('h1'); 
            projectTitle.innerText = projectName;
            projectTitle.className = 'contentTitle';
            projectTitle.id = 'projectTitle';
            todoContainer.appendChild(projectTitle);
        };
    };

    createTitle();

    // Load All Todos For This Project
    function loadTodos() {
        todoContainer.innerHTML = '';
        createTitle();

        if (allTodos) {
            allTodos.forEach((todo) => {
                let todoText = todo.title;
                let todoDueDate = todo.dueDate;

                if (todo.project === projectName) {
                    const todo = document.createElement('div'); 
                    todo.className = 'todo';
                    todoContainer.appendChild(todo);

                    const leftContainer = document.createElement('div'); 
                    leftContainer.className = 'leftContainer';
                    todo.appendChild(leftContainer);

                    const checkbox = document.createElement('input'); 
                    checkbox.className = 'todoCheckbox';
                    checkbox.type = 'checkbox';
                    checkbox.id = todoText;
                    leftContainer.appendChild(checkbox);

                    checkbox.addEventListener('click', function(event) {
                        allTodos.forEach((item) => {
                            if (item.title === checkbox.id) {
                                let index = allTodos.indexOf(item);
                                allTodos.splice(index, 1);
                                todo.remove();
                            };
                        });
                    });

                    const todoTitle = document.createElement('h2'); 
                    todoTitle.innerText = todoText;
                    todoTitle.className = 'todoTitle';
                    leftContainer.appendChild(todoTitle);

                    const todoDueDateText = document.createElement('h2'); 
                    todoDueDateText.innerText = todoDueDate;
                    todoDueDateText.className = 'todoDate';
                    todo.appendChild(todoDueDateText);
                };
            });
        };
    };
    
    loadTodos();

    // Open Todo Modal
    function createOpenModalBtn() {
        const addTodosBtn = document.createElement('button'); 
        addTodosBtn.innerText = 'Add Task';
        addTodosBtn.className = 'AddTodosBtn';
        todoContainer.appendChild(addTodosBtn);
    
        const modal = document.getElementById("todoModal");
    
        addTodosBtn.addEventListener('click', function() {
            console.log('Open Add Todo Modal');
            modal.style.display = "block";
        });
    
        const closeBtn = document.querySelector(".close-btn");
        closeBtn.addEventListener('click', function() {
            modal.style.display = "none";
        });
    
        window.onclick = function(e){
            if(e.target == modal){
              modal.style.display = "none";
            };
        };
    };

    createOpenModalBtn();

    // Create Todos
    function addTodo(title, description, dueDate, priority, project) {
        console.log('todo created');
        document.getElementById('todoTitleInput').value = '';
        document.getElementById('todoDescriptionTextarea').value = '';
        document.getElementById('todoDueDateInput').value = '';
        document.getElementById('todoPiorityInput').value = '';

        let status = false;
        let newTodo = new Todo(title, description, dueDate, priority, status, project);
        allTodos.push(newTodo);
        loadTodos();
        createOpenModalBtn();
    };

    const addTodoBtn = document.getElementById('addTodoBtn');

    addTodoBtn.addEventListener('click', function() {
        let titleValue = document.getElementById('todoTitleInput').value;
        let descriptionValue = document.getElementById('todoDescriptionTextarea').value;
        let dueDateValue = document.getElementById('todoDueDateInput').value;
        let priorityValue = document.getElementById('todoPiorityInput').value;
        let project = projectName;

        if (titleValue !== '' && descriptionValue !== '' && dueDateValue !== '' && priorityValue !== '') {
            addTodo(titleValue, descriptionValue, dueDateValue, priorityValue, project);
        };
    });

    function createTodoBtn() {
        const addTodoBtnOld = document.getElementById('addTodoBtn');
        if (addTodoBtnOld) {
            addTodoBtnOld.remove();
        };

        const form = document.getElementById('todoForm');

        const addTodoBtn = document.createElement('button');
        addTodoBtn.id = 'addTodoBtn';
        addTodoBtn.className = 'addBtn';
        addTodoBtn.innerText = 'Add Todo'
        form.appendChild(addTodoBtn);

        addTodoBtn.addEventListener('click', function() {
            let titleValue = document.getElementById('todoTitleInput').value;
            let descriptionValue = document.getElementById('todoDescriptionTextarea').value;
            let dueDateValue = document.getElementById('todoDueDateInput').value;
            let priorityValue = document.getElementById('todoPiorityInput').value;
            let project = projectName;

            if (titleValue !== '' && descriptionValue !== '' && dueDateValue !== '' && priorityValue !== '') {
                addTodo(titleValue, descriptionValue, dueDateValue, priorityValue, project);
            };
        });
    };

    createTodoBtn();

};



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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _inbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inbox */ "./src/inbox.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");



const allTodos = [];
const allProjects = [];

class Todo{
    constructor(title, description, dueDate, priority, status) {
        this.title = title,
        this.description = description,
        this.dueDate = dueDate,
        this.priority = priority,
        this.status = status
    };
};

class Project{
    constructor(title) {
        this.title = title
    };
};

function addProject(title) {
    document.getElementById('projectNameInput').value = '';
    event.preventDefault();
    let newProject = new Project(title);
    allProjects.push(newProject);
    (0,_inbox__WEBPACK_IMPORTED_MODULE_0__.loadInbox)(allProjects);
};

window.onload = function() {
    (0,_inbox__WEBPACK_IMPORTED_MODULE_0__.loadInbox)(allProjects);

    // Sidebar Event Listeners
    const todoContainer = document.getElementById('todoContainer');

    const inboxTab = document.getElementById('inboxBtn');
    inboxTab.addEventListener('click', function() {
        todoContainer.innerHTML = '';
        (0,_inbox__WEBPACK_IMPORTED_MODULE_0__.loadInbox)(allProjects);
    });

    // Open Modal
    const modal = document.getElementById("projectModal");

    const openAddProjectsModalBtn = document.getElementById('openAddProjectsModalBtn');
    openAddProjectsModalBtn.addEventListener('click', function() {
        modal.style.display = "block";
    });

    const closeBtn = document.querySelector(".close-btn");
    closeBtn.addEventListener('click', function() {
        modal.style.display = "none";
    });

    window.onclick = function(e){
        if(e.target == modal){
          modal.style.display = "none";
        };
    };

    // Add Projects
    const addProjectsBtn = document.getElementById('addProjectsBtn');
    addProjectsBtn.addEventListener('click', function() {
        let nameValue = document.getElementById('projectNameInput').value;
        if (nameValue !== '') {
            addProject(nameValue);
        };
    });
};
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLFlBQVk7QUFDdEIsUUFBUSxPQUFPO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsVUFBVSxZQUFZO0FBQ3RCLFFBQVEsT0FBTztBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLE9BQU8saUZBQWlGLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFFBQVEsS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxXQUFXLEtBQUssVUFBVSxVQUFVLFlBQVksV0FB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHFEQUFXO0FBQzNCLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QixxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQzNLQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0FvQztBQUNkO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxpREFBUztBQUNiO0FBQ0E7QUFDQTtBQUNBLElBQUksaURBQVM7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaURBQVM7QUFDakIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2luYm94LmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBib2R5IHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbmh0bWwsIGJvZHkge1xyXG5cdG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMiwgMjMyLCAyMzIpO1xyXG59XHJcblxyXG4jbmF2YmFyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43OTYpO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGhlaWdodDogMTJ2aDtcclxufVxyXG5cclxuI25hdlRpdGxlIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuI2NvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuXHJcbiNzaWRlQmFyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDcsIDIwNywgMjA3KTtcclxuICAgIGhlaWdodDogODMuOHZoO1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIHBhZGRpbmctdG9wOiAyJTtcclxufVxyXG5cclxuLnNpZGVCYXJUaXRsZSB7XHJcbiAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjAlO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5zaWRlQmFyVGl0bGU6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2MywgMTYzLCAxNjMpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxufVxyXG5cclxuI3Byb2plY3RzVGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAzOHB4O1xyXG59XHJcblxyXG5cclxuI3Byb2plY3RzVGl0bGU6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNywgMjA3LCAyMDcpO1xyXG4gICAgY3Vyc29yOiBhdXRvO1xyXG59XHJcblxyXG4jdG9kb0NvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnByb2plY3RMaXN0aW5nIHtcclxuICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLnByb2plY3RMaXN0aW5nOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjMsIDE2MywgMTYzKTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbn1cclxuXHJcbi8qIE1vZGFsICovXHJcblxyXG4ubW9kYWwge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDsgXHJcbiAgICBwYWRkaW5nLXRvcDogMTUwcHg7XHJcbiAgICBsZWZ0OiAwOyBcclxuICAgIHRvcDogNTA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTsgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgfVxyXG5cclxuICAubW9kYWwtY29udGVudCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAyMHB4OyBcclxuICAgIG1hcmdpbjogYXV0bzsgXHJcbiAgICB3aWR0aDogMzAlOyAgXHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBhbmltYXRldG9wO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDAuNHM7XHJcbiAgICBhbmltYXRpb24tbmFtZTogYW5pbWF0ZXRvcDtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAuY2xvc2UtYnRuIHtcclxuICAgIGZsb2F0OiByaWdodDsgXHJcbiAgICBjb2xvcjogbGlnaHRncmF5OyBcclxuICAgIGZvbnQtc2l6ZTogMjRweDsgIFxyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICAuY2xvc2UtYnRuOmhvdmVyIHtcclxuICAgIGNvbG9yOiBkYXJrZ3JheTtcclxuICB9XHJcblxyXG4gIEAtd2Via2l0LWtleWZyYW1lcyBhbmltYXRldG9wIHtcclxuICAgIGZyb20ge3RvcDotMzAwcHg7IG9wYWNpdHk6MH0gXHJcbiAgICB0byB7dG9wOjA7IG9wYWNpdHk6MX1cclxuICB9XHJcblxyXG4gIEBrZXlmcmFtZXMgYW5pbWF0ZXRvcCB7XHJcbiAgICBmcm9tIHt0b3A6LTMwMHB4OyBvcGFjaXR5OjB9XHJcbiAgICB0byB7dG9wOjA7IG9wYWNpdHk6MX1cclxuICB9XHJcblxyXG4gIC5tb2RhbFRpdGxlIHtcclxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCBibGFjaztcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICB9XHJcblxyXG4gIC5mb3JtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcblxyXG4gIC5tb2RhbExhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG5cclxuICAubW9kYWxJbnB1dCB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLmFkZEJ0biB7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQ2JTtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxuICB9XHJcblxyXG4gIC5hZGRCdG46aG92ZXIge1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuXHJcbiAgI3RvZG9Nb2RhbCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICB9XHJcblxyXG4gICN0b2RvTW9kYWxDb250ZW50IHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgfVxyXG5cclxuLyogQ29udGFpbmVyICovXHJcblxyXG4uY29udGVudFRpdGxlIHtcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG59XHJcblxyXG4udG9kbyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAzcHggYmxhY2s7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi50b2RvOmhvdmVyIHtcclxuY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4udG9kb1RpdGxlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59XHJcblxyXG4udG9kb0RhdGUge1xyXG5cclxufVxyXG5cclxuLkFkZFRvZG9zQnRuIHtcclxuICAgIHdpZHRoOiAxMCU7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogNDYlO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICB9XHJcblxyXG4gIC5BZGRUb2Rvc0J0bjpob3ZlciB7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxuICAubGVmdENvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICB9XHJcblxyXG4gIC50b2RvQ2hlY2tib3g6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztJQUNULG1CQUFtQjtBQUN2Qjs7QUFFQTtDQUNDLGdCQUFnQjtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksc0NBQXNDO0lBQ3RDLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7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ZDs7RUFFQTtJQUNFLGFBQWE7SUFDYixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmh0bWwsIGJvZHkge1xcclxcblxcdG1heC1oZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMiwgMjMyLCAyMzIpO1xcclxcbn1cXHJcXG5cXHJcXG4jbmF2YmFyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc5Nik7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgIGhlaWdodDogMTJ2aDtcXHJcXG59XFxyXFxuXFxyXFxuI25hdlRpdGxlIHtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBtYXJnaW4tdG9wOiAwO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbiAgICBmb250LXNpemU6IDQwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbiNjb250ZW50IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG59XFxyXFxuXFxyXFxuI3NpZGVCYXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA3LCAyMDcsIDIwNyk7XFxyXFxuICAgIGhlaWdodDogODMuOHZoO1xcclxcbiAgICB3aWR0aDogMjAlO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMiU7XFxyXFxufVxcclxcblxcclxcbi5zaWRlQmFyVGl0bGUge1xcclxcbiAgICBmb250LXNpemU6IDI2cHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuNXM7XFxyXFxuICAgIHdpZHRoOiA1MCU7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGVCYXJUaXRsZTpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjMsIDE2MywgMTYzKTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvamVjdHNUaXRsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzhweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuI3Byb2plY3RzVGl0bGU6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA3LCAyMDcsIDIwNyk7XFxyXFxuICAgIGN1cnNvcjogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuI3RvZG9Db250YWluZXIge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RMaXN0aW5nIHtcXHJcXG4gICAgZm9udC1zaXplOiAyNnB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogMjAlO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xcclxcbiAgICB3aWR0aDogNTAlO1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDA7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0TGlzdGluZzpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjMsIDE2MywgMTYzKTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNb2RhbCAqL1xcclxcblxcclxcbi5tb2RhbCB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDsgXFxyXFxuICAgIHBhZGRpbmctdG9wOiAxNTBweDtcXHJcXG4gICAgbGVmdDogMDsgXFxyXFxuICAgIHRvcDogNTA7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7IFxcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tb2RhbC1jb250ZW50IHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyBcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7IFxcclxcbiAgICBtYXJnaW46IGF1dG87IFxcclxcbiAgICB3aWR0aDogMzAlOyAgXFxyXFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGFuaW1hdGV0b3A7XFxyXFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xcclxcbiAgICBhbmltYXRpb24tbmFtZTogYW5pbWF0ZXRvcDtcXHJcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNsb3NlLWJ0biB7XFxyXFxuICAgIGZsb2F0OiByaWdodDsgXFxyXFxuICAgIGNvbG9yOiBsaWdodGdyYXk7IFxcclxcbiAgICBmb250LXNpemU6IDI0cHg7ICBcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jbG9zZS1idG46aG92ZXIge1xcclxcbiAgICBjb2xvcjogZGFya2dyYXk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBALXdlYmtpdC1rZXlmcmFtZXMgYW5pbWF0ZXRvcCB7XFxyXFxuICAgIGZyb20ge3RvcDotMzAwcHg7IG9wYWNpdHk6MH0gXFxyXFxuICAgIHRvIHt0b3A6MDsgb3BhY2l0eToxfVxcclxcbiAgfVxcclxcblxcclxcbiAgQGtleWZyYW1lcyBhbmltYXRldG9wIHtcXHJcXG4gICAgZnJvbSB7dG9wOi0zMDBweDsgb3BhY2l0eTowfVxcclxcbiAgICB0byB7dG9wOjA7IG9wYWNpdHk6MX1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tb2RhbFRpdGxlIHtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4IGJsYWNrO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXHJcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmZvcm0ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1vZGFsTGFiZWwge1xcclxcbiAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgIHdpZHRoOiA1MCU7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1vZGFsSW5wdXQge1xcclxcbiAgICB3aWR0aDogNTAlO1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5hZGRCdG4ge1xcclxcbiAgICB3aWR0aDogMzAlO1xcclxcbiAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA0NiU7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuNXM7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYWRkQnRuOmhvdmVyIHtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC41cztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICN0b2RvTW9kYWwge1xcclxcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICN0b2RvTW9kYWxDb250ZW50IHtcXHJcXG4gICAgd2lkdGg6IDUwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4vKiBDb250YWluZXIgKi9cXHJcXG5cXHJcXG4uY29udGVudFRpdGxlIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogNDBweDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcXHJcXG4gICAgd2lkdGg6IDIwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udG9kbyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDNweCBibGFjaztcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG86aG92ZXIge1xcclxcbmN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG9UaXRsZSB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udG9kb0RhdGUge1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uQWRkVG9kb3NCdG4ge1xcclxcbiAgICB3aWR0aDogMTAlO1xcclxcbiAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA0NiU7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuNXM7XFxyXFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuQWRkVG9kb3NCdG46aG92ZXIge1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmxlZnRDb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnRvZG9DaGVja2JveDpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBsb2FkUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RcIjtcclxuXHJcbmNvbnN0IGxvYWRJbmJveCA9IChhbGxQcm9qZWN0cykgPT4ge1xyXG4gICAgY29uc3QgdG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvQ29udGFpbmVyJyk7XHJcbiAgICBjb25zdCBzaWRlQmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpZGVCYXInKTtcclxuICAgIFxyXG4gICAgLy8gQ3JlYXRlIFRpdGxlXHJcbiAgICBjb25zdCB0aXRsZUNoZWNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luYm94VGl0bGUnKTtcclxuICAgIGNvbnN0IHByb2plY3RDaGVjayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0VGl0bGUnKTtcclxuXHJcbiAgICBpZiAoIXRpdGxlQ2hlY2sgJiYgIXByb2plY3RDaGVjaykge1xyXG4gICAgICAgIGNvbnN0IGluYm94VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpOyBcclxuICAgICAgICBpbmJveFRpdGxlLmlubmVyVGV4dCA9ICdJbmJveCc7XHJcbiAgICAgICAgaW5ib3hUaXRsZS5jbGFzc05hbWUgPSAnY29udGVudFRpdGxlJztcclxuICAgICAgICBpbmJveFRpdGxlLmlkID0gJ2luYm94VGl0bGUnO1xyXG4gICAgICAgIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQoaW5ib3hUaXRsZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIENyZWF0ZSBBbGwgVG9kb3MgKFRpdGxlLUR1ZWRhdGUtUHJpb3JpdHkpXHJcbiAgICBsZXQgY3VycmVudFByb2plY3RzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncHJvamVjdExpc3RpbmcnKTtcclxuICAgIGlmIChjdXJyZW50UHJvamVjdHMpIHtcclxuICAgICAgICB3aGlsZShjdXJyZW50UHJvamVjdHNbMF0pIHtcclxuICAgICAgICAgICAgY3VycmVudFByb2plY3RzWzBdLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY3VycmVudFByb2plY3RzWzBdKTtcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuICAgIGlmIChhbGxQcm9qZWN0cykge1xyXG4gICAgICAgIGFsbFByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IHByb2plY3RPYmplY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpOyBcclxuICAgICAgICAgICAgcHJvamVjdE9iamVjdC5pbm5lclRleHQgPSBwcm9qZWN0LnRpdGxlO1xyXG4gICAgICAgICAgICBwcm9qZWN0T2JqZWN0LmNsYXNzTmFtZSA9ICdwcm9qZWN0TGlzdGluZyc7XHJcbiAgICAgICAgICAgIHNpZGVCYXIuYXBwZW5kQ2hpbGQocHJvamVjdE9iamVjdCk7XHJcblxyXG4gICAgICAgICAgICBwcm9qZWN0T2JqZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBsb2FkUHJvamVjdChwcm9qZWN0LnRpdGxlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IHtsb2FkSW5ib3h9OyIsImNvbnN0IGFsbFRvZG9zID0gW107XHJcblxyXG5jb25zdCBsb2FkUHJvamVjdCA9IChwcm9qZWN0TmFtZSkgPT4ge1xyXG5cclxuICAgIGNsYXNzIFRvZG97XHJcbiAgICAgICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgc3RhdHVzLCBwcm9qZWN0KSB7XHJcbiAgICAgICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZSxcclxuICAgICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlLFxyXG4gICAgICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHksXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzLFxyXG4gICAgICAgICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0XHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgdG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvQ29udGFpbmVyJyk7XHJcbiAgICB0b2RvQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG5cclxuICAgIC8vIENyZWF0ZSBUaXRsZVxyXG4gICAgZnVuY3Rpb24gY3JlYXRlVGl0bGUoKSB7XHJcbiAgICAgICAgY29uc3QgdGl0bGVDaGVjayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0VGl0bGUnKTtcclxuXHJcbiAgICAgICAgaWYgKCF0aXRsZUNoZWNrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7IFxyXG4gICAgICAgICAgICBwcm9qZWN0VGl0bGUuaW5uZXJUZXh0ID0gcHJvamVjdE5hbWU7XHJcbiAgICAgICAgICAgIHByb2plY3RUaXRsZS5jbGFzc05hbWUgPSAnY29udGVudFRpdGxlJztcclxuICAgICAgICAgICAgcHJvamVjdFRpdGxlLmlkID0gJ3Byb2plY3RUaXRsZSc7XHJcbiAgICAgICAgICAgIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuXHJcbiAgICBjcmVhdGVUaXRsZSgpO1xyXG5cclxuICAgIC8vIExvYWQgQWxsIFRvZG9zIEZvciBUaGlzIFByb2plY3RcclxuICAgIGZ1bmN0aW9uIGxvYWRUb2RvcygpIHtcclxuICAgICAgICB0b2RvQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIGNyZWF0ZVRpdGxlKCk7XHJcblxyXG4gICAgICAgIGlmIChhbGxUb2Rvcykge1xyXG4gICAgICAgICAgICBhbGxUb2Rvcy5mb3JFYWNoKCh0b2RvKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdG9kb1RleHQgPSB0b2RvLnRpdGxlO1xyXG4gICAgICAgICAgICAgICAgbGV0IHRvZG9EdWVEYXRlID0gdG9kby5kdWVEYXRlO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0b2RvLnByb2plY3QgPT09IHByb2plY3ROYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyBcclxuICAgICAgICAgICAgICAgICAgICB0b2RvLmNsYXNzTmFtZSA9ICd0b2RvJztcclxuICAgICAgICAgICAgICAgICAgICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG8pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBsZWZ0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IFxyXG4gICAgICAgICAgICAgICAgICAgIGxlZnRDb250YWluZXIuY2xhc3NOYW1lID0gJ2xlZnRDb250YWluZXInO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvZG8uYXBwZW5kQ2hpbGQobGVmdENvbnRhaW5lcik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTsgXHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tib3guY2xhc3NOYW1lID0gJ3RvZG9DaGVja2JveCc7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tib3gudHlwZSA9ICdjaGVja2JveCc7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tib3guaWQgPSB0b2RvVGV4dDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxUb2Rvcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS50aXRsZSA9PT0gY2hlY2tib3guaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBhbGxUb2Rvcy5pbmRleE9mKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbFRvZG9zLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kby5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpOyBcclxuICAgICAgICAgICAgICAgICAgICB0b2RvVGl0bGUuaW5uZXJUZXh0ID0gdG9kb1RleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9kb1RpdGxlLmNsYXNzTmFtZSA9ICd0b2RvVGl0bGUnO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnRDb250YWluZXIuYXBwZW5kQ2hpbGQodG9kb1RpdGxlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb0R1ZURhdGVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTsgXHJcbiAgICAgICAgICAgICAgICAgICAgdG9kb0R1ZURhdGVUZXh0LmlubmVyVGV4dCA9IHRvZG9EdWVEYXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvZG9EdWVEYXRlVGV4dC5jbGFzc05hbWUgPSAndG9kb0RhdGUnO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvZG8uYXBwZW5kQ2hpbGQodG9kb0R1ZURhdGVUZXh0KTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBsb2FkVG9kb3MoKTtcclxuXHJcbiAgICAvLyBPcGVuIFRvZG8gTW9kYWxcclxuICAgIGZ1bmN0aW9uIGNyZWF0ZU9wZW5Nb2RhbEJ0bigpIHtcclxuICAgICAgICBjb25zdCBhZGRUb2Rvc0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpOyBcclxuICAgICAgICBhZGRUb2Rvc0J0bi5pbm5lclRleHQgPSAnQWRkIFRhc2snO1xyXG4gICAgICAgIGFkZFRvZG9zQnRuLmNsYXNzTmFtZSA9ICdBZGRUb2Rvc0J0bic7XHJcbiAgICAgICAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRUb2Rvc0J0bik7XHJcbiAgICBcclxuICAgICAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kb01vZGFsXCIpO1xyXG4gICAgXHJcbiAgICAgICAgYWRkVG9kb3NCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ09wZW4gQWRkIFRvZG8gTW9kYWwnKTtcclxuICAgICAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICB9KTtcclxuICAgIFxyXG4gICAgICAgIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbG9zZS1idG5cIik7XHJcbiAgICAgICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIH0pO1xyXG4gICAgXHJcbiAgICAgICAgd2luZG93Lm9uY2xpY2sgPSBmdW5jdGlvbihlKXtcclxuICAgICAgICAgICAgaWYoZS50YXJnZXQgPT0gbW9kYWwpe1xyXG4gICAgICAgICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuXHJcbiAgICBjcmVhdGVPcGVuTW9kYWxCdG4oKTtcclxuXHJcbiAgICAvLyBDcmVhdGUgVG9kb3NcclxuICAgIGZ1bmN0aW9uIGFkZFRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCd0b2RvIGNyZWF0ZWQnKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb1RpdGxlSW5wdXQnKS52YWx1ZSA9ICcnO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvRGVzY3JpcHRpb25UZXh0YXJlYScpLnZhbHVlID0gJyc7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9EdWVEYXRlSW5wdXQnKS52YWx1ZSA9ICcnO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvUGlvcml0eUlucHV0JykudmFsdWUgPSAnJztcclxuXHJcbiAgICAgICAgbGV0IHN0YXR1cyA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBuZXdUb2RvID0gbmV3IFRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgc3RhdHVzLCBwcm9qZWN0KTtcclxuICAgICAgICBhbGxUb2Rvcy5wdXNoKG5ld1RvZG8pO1xyXG4gICAgICAgIGxvYWRUb2RvcygpO1xyXG4gICAgICAgIGNyZWF0ZU9wZW5Nb2RhbEJ0bigpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBhZGRUb2RvQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFRvZG9CdG4nKTtcclxuXHJcbiAgICBhZGRUb2RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgbGV0IHRpdGxlVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb1RpdGxlSW5wdXQnKS52YWx1ZTtcclxuICAgICAgICBsZXQgZGVzY3JpcHRpb25WYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvRGVzY3JpcHRpb25UZXh0YXJlYScpLnZhbHVlO1xyXG4gICAgICAgIGxldCBkdWVEYXRlVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb0R1ZURhdGVJbnB1dCcpLnZhbHVlO1xyXG4gICAgICAgIGxldCBwcmlvcml0eVZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9QaW9yaXR5SW5wdXQnKS52YWx1ZTtcclxuICAgICAgICBsZXQgcHJvamVjdCA9IHByb2plY3ROYW1lO1xyXG5cclxuICAgICAgICBpZiAodGl0bGVWYWx1ZSAhPT0gJycgJiYgZGVzY3JpcHRpb25WYWx1ZSAhPT0gJycgJiYgZHVlRGF0ZVZhbHVlICE9PSAnJyAmJiBwcmlvcml0eVZhbHVlICE9PSAnJykge1xyXG4gICAgICAgICAgICBhZGRUb2RvKHRpdGxlVmFsdWUsIGRlc2NyaXB0aW9uVmFsdWUsIGR1ZURhdGVWYWx1ZSwgcHJpb3JpdHlWYWx1ZSwgcHJvamVjdCk7XHJcbiAgICAgICAgfTtcclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZVRvZG9CdG4oKSB7XHJcbiAgICAgICAgY29uc3QgYWRkVG9kb0J0bk9sZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRUb2RvQnRuJyk7XHJcbiAgICAgICAgaWYgKGFkZFRvZG9CdG5PbGQpIHtcclxuICAgICAgICAgICAgYWRkVG9kb0J0bk9sZC5yZW1vdmUoKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9Gb3JtJyk7XHJcblxyXG4gICAgICAgIGNvbnN0IGFkZFRvZG9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBhZGRUb2RvQnRuLmlkID0gJ2FkZFRvZG9CdG4nO1xyXG4gICAgICAgIGFkZFRvZG9CdG4uY2xhc3NOYW1lID0gJ2FkZEJ0bic7XHJcbiAgICAgICAgYWRkVG9kb0J0bi5pbm5lclRleHQgPSAnQWRkIFRvZG8nXHJcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChhZGRUb2RvQnRuKTtcclxuXHJcbiAgICAgICAgYWRkVG9kb0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBsZXQgdGl0bGVWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvVGl0bGVJbnB1dCcpLnZhbHVlO1xyXG4gICAgICAgICAgICBsZXQgZGVzY3JpcHRpb25WYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvRGVzY3JpcHRpb25UZXh0YXJlYScpLnZhbHVlO1xyXG4gICAgICAgICAgICBsZXQgZHVlRGF0ZVZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9EdWVEYXRlSW5wdXQnKS52YWx1ZTtcclxuICAgICAgICAgICAgbGV0IHByaW9yaXR5VmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb1Bpb3JpdHlJbnB1dCcpLnZhbHVlO1xyXG4gICAgICAgICAgICBsZXQgcHJvamVjdCA9IHByb2plY3ROYW1lO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRpdGxlVmFsdWUgIT09ICcnICYmIGRlc2NyaXB0aW9uVmFsdWUgIT09ICcnICYmIGR1ZURhdGVWYWx1ZSAhPT0gJycgJiYgcHJpb3JpdHlWYWx1ZSAhPT0gJycpIHtcclxuICAgICAgICAgICAgICAgIGFkZFRvZG8odGl0bGVWYWx1ZSwgZGVzY3JpcHRpb25WYWx1ZSwgZHVlRGF0ZVZhbHVlLCBwcmlvcml0eVZhbHVlLCBwcm9qZWN0KTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY3JlYXRlVG9kb0J0bigpO1xyXG5cclxufTtcclxuXHJcbmV4cG9ydCB7bG9hZFByb2plY3R9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IGxvYWRJbmJveCB9IGZyb20gJy4vaW5ib3gnO1xyXG5pbXBvcnQgJy4vc3R5bGVzLmNzcyc7XHJcblxyXG5jb25zdCBhbGxUb2RvcyA9IFtdO1xyXG5jb25zdCBhbGxQcm9qZWN0cyA9IFtdO1xyXG5cclxuY2xhc3MgVG9kb3tcclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHN0YXR1cykge1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZSxcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb24sXHJcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZSxcclxuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHksXHJcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBzdGF0dXNcclxuICAgIH07XHJcbn07XHJcblxyXG5jbGFzcyBQcm9qZWN0e1xyXG4gICAgY29uc3RydWN0b3IodGl0bGUpIHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGVcclxuICAgIH07XHJcbn07XHJcblxyXG5mdW5jdGlvbiBhZGRQcm9qZWN0KHRpdGxlKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdE5hbWVJbnB1dCcpLnZhbHVlID0gJyc7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdCh0aXRsZSk7XHJcbiAgICBhbGxQcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xyXG4gICAgbG9hZEluYm94KGFsbFByb2plY3RzKTtcclxufTtcclxuXHJcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcclxuICAgIGxvYWRJbmJveChhbGxQcm9qZWN0cyk7XHJcblxyXG4gICAgLy8gU2lkZWJhciBFdmVudCBMaXN0ZW5lcnNcclxuICAgIGNvbnN0IHRvZG9Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb0NvbnRhaW5lcicpO1xyXG5cclxuICAgIGNvbnN0IGluYm94VGFiID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luYm94QnRuJyk7XHJcbiAgICBpbmJveFRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRvZG9Db250YWluZXIuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgbG9hZEluYm94KGFsbFByb2plY3RzKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIE9wZW4gTW9kYWxcclxuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0TW9kYWxcIik7XHJcblxyXG4gICAgY29uc3Qgb3BlbkFkZFByb2plY3RzTW9kYWxCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3BlbkFkZFByb2plY3RzTW9kYWxCdG4nKTtcclxuICAgIG9wZW5BZGRQcm9qZWN0c01vZGFsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbG9zZS1idG5cIik7XHJcbiAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIH0pO1xyXG5cclxuICAgIHdpbmRvdy5vbmNsaWNrID0gZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgaWYoZS50YXJnZXQgPT0gbW9kYWwpe1xyXG4gICAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIEFkZCBQcm9qZWN0c1xyXG4gICAgY29uc3QgYWRkUHJvamVjdHNCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkUHJvamVjdHNCdG4nKTtcclxuICAgIGFkZFByb2plY3RzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgbGV0IG5hbWVWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0TmFtZUlucHV0JykudmFsdWU7XHJcbiAgICAgICAgaWYgKG5hbWVWYWx1ZSAhPT0gJycpIHtcclxuICAgICAgICAgICAgYWRkUHJvamVjdChuYW1lVmFsdWUpO1xyXG4gICAgICAgIH07XHJcbiAgICB9KTtcclxufTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=