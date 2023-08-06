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

.todoTitle {

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
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,mBAAmB;AACvB;;AAEA;CACC,gBAAgB;IACb,mBAAmB;IACnB,kBAAkB;IAClB,oCAAoC;AACxC;;AAEA;IACI,sCAAsC;IACtC,gBAAgB;IAChB,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,gBAAgB;IAChB,eAAe;IACf,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,oCAAoC;IACpC,cAAc;IACd,UAAU;IACV,eAAe;AACnB;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,gBAAgB;IAChB,UAAU;IACV,YAAY;IACZ,mBAAmB;IACnB,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,oCAAoC;IACpC,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,eAAe;AACnB;;;AAGA;IACI,oCAAoC;IACpC,YAAY;AAChB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,gBAAgB;IAChB,UAAU;IACV,YAAY;IACZ,mBAAmB;IACnB,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,oCAAoC;IACpC,eAAe;IACf,gBAAgB;AACpB;;AAEA,UAAU;;AAEV;IACI,aAAa;IACb,eAAe;IACf,kBAAkB;IAClB,OAAO;IACP,OAAO;IACP,WAAW;IACX,YAAY;IACZ,8BAA8B;IAC9B,oCAAoC;EACtC;;EAEA;IACE,kBAAkB;IAClB,uBAAuB;IACvB,aAAa;IACb,YAAY;IACZ,UAAU;IACV,kCAAkC;IAClC,gCAAgC;IAChC,0BAA0B;IAC1B,wBAAwB;IACxB,mBAAmB;EACrB;;EAEA;IACE,YAAY;IACZ,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,eAAe;EACjB;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,MAAM,UAAU,EAAE,SAAS;IAC3B,IAAI,KAAK,EAAE,SAAS;EACtB;;EAEA;IACE,MAAM,UAAU,EAAE,SAAS;IAC3B,IAAI,KAAK,EAAE,SAAS;EACtB;;EAEA;IACE,8BAA8B;IAC9B,oBAAoB;IACpB,eAAe;IACf,aAAa;EACf;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,gBAAgB;EAClB;;EAEA;IACE,eAAe;IACf,UAAU;IACV,cAAc;IACd,mBAAmB;EACrB;;EAEA;IACE,UAAU;IACV,cAAc;IACd,eAAe;IACf,YAAY;IACZ,kBAAkB;IAClB,mBAAmB;EACrB;;EAEA;IACE,UAAU;IACV,eAAe;IACf,YAAY;IACZ,kBAAkB;IAClB,eAAe;IACf,gBAAgB;IAChB,gBAAgB;IAChB,mBAAmB;IACnB,gBAAgB;EAClB;;EAEA;IACE,gBAAgB;IAChB,uBAAuB;IACvB,YAAY;EACd;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,UAAU;EACZ;;AAEF,cAAc;;AAEd;IACI,gBAAgB;IAChB,gBAAgB;IAChB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,aAAa;IACb,8BAA8B;IAC9B,8BAA8B;IAC9B,UAAU;IACV,cAAc;AAClB;;AAEA;;AAEA;;AAEA;;AAEA;;AAEA;IACI,UAAU;IACV,eAAe;IACf,YAAY;IACZ,kBAAkB;IAClB,eAAe;IACf,gBAAgB;IAChB,gBAAgB;IAChB,mBAAmB;IACnB,gBAAgB;IAChB,gBAAgB;EAClB;;EAEA;IACE,gBAAgB;IAChB,uBAAuB;IACvB,YAAY;EACd","sourcesContent":["body {\r\n    margin: 0;\r\n    align-items: center;\r\n}\r\n\r\nhtml, body {\r\n\tmax-height: 100%;\r\n    align-items: center;\r\n    text-align: center;\r\n    background-color: rgb(232, 232, 232);\r\n}\r\n\r\n#navbar {\r\n    background-color: rgba(0, 0, 0, 0.796);\r\n    text-align: left;\r\n    height: 12vh;\r\n}\r\n\r\n#navTitle {\r\n    color: white;\r\n    margin-top: 0;\r\n    margin-bottom: 0;\r\n    font-size: 40px;\r\n    padding: 20px;\r\n}\r\n\r\n#content {\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n\r\n#sideBar {\r\n    background-color: rgb(207, 207, 207);\r\n    height: 83.8vh;\r\n    width: 20%;\r\n    padding-top: 2%;\r\n}\r\n\r\n.sideBarTitle {\r\n    font-size: 26px;\r\n    margin-left: 20%;\r\n    transition: 0.5s;\r\n    width: 50%;\r\n    padding: 5px;\r\n    border-radius: 15px;\r\n    margin-top: 0;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.sideBarTitle:hover {\r\n    background-color: rgb(163, 163, 163);\r\n    cursor: pointer;\r\n    transition: 0.5s;\r\n}\r\n\r\n#projectsTitle {\r\n    font-size: 38px;\r\n}\r\n\r\n\r\n#projectsTitle:hover {\r\n    background-color: rgb(207, 207, 207);\r\n    cursor: auto;\r\n}\r\n\r\n#todoContainer {\r\n    width: 100%;\r\n}\r\n\r\n.projectListing {\r\n    font-size: 26px;\r\n    margin-left: 20%;\r\n    transition: 0.5s;\r\n    width: 50%;\r\n    padding: 5px;\r\n    border-radius: 15px;\r\n    margin-top: 0;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.projectListing:hover {\r\n    background-color: rgb(163, 163, 163);\r\n    cursor: pointer;\r\n    transition: 0.5s;\r\n}\r\n\r\n/* Modal */\r\n\r\n.modal {\r\n    display: none;\r\n    position: fixed; \r\n    padding-top: 150px;\r\n    left: 0; \r\n    top: 50;\r\n    width: 100%;\r\n    height: 100%; \r\n    background-color: rgb(0, 0, 0);\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n  }\r\n\r\n  .modal-content {\r\n    position: relative; \r\n    background-color: white;\r\n    padding: 20px; \r\n    margin: auto; \r\n    width: 30%;  \r\n    -webkit-animation-name: animatetop;\r\n    -webkit-animation-duration: 0.4s;\r\n    animation-name: animatetop;\r\n    animation-duration: 0.4s;\r\n    border-radius: 10px;\r\n  }\r\n\r\n  .close-btn {\r\n    float: right; \r\n    color: lightgray; \r\n    font-size: 24px;  \r\n    font-weight: bold;\r\n    cursor: pointer;\r\n  }\r\n\r\n  .close-btn:hover {\r\n    color: darkgray;\r\n  }\r\n\r\n  @-webkit-keyframes animatetop {\r\n    from {top:-300px; opacity:0} \r\n    to {top:0; opacity:1}\r\n  }\r\n\r\n  @keyframes animatetop {\r\n    from {top:-300px; opacity:0}\r\n    to {top:0; opacity:1}\r\n  }\r\n\r\n  .modalTitle {\r\n    border-bottom: solid 2px black;\r\n    padding-bottom: 10px;\r\n    font-size: 30px;\r\n    margin-top: 0;\r\n  }\r\n\r\n  .form {\r\n    display: flex;\r\n    flex-direction: column;\r\n    text-align: left;\r\n  }\r\n\r\n  .modalLabel {\r\n    font-size: 18px;\r\n    width: 50%;\r\n    margin: 0 auto;\r\n    margin-bottom: 10px;\r\n  }\r\n\r\n  .modalInput {\r\n    width: 50%;\r\n    margin: 0 auto;\r\n    font-size: 16px;\r\n    padding: 5px;\r\n    border-radius: 5px;\r\n    margin-bottom: 10px;\r\n  }\r\n\r\n  .addBtn {\r\n    width: 30%;\r\n    font-size: 18px;\r\n    padding: 5px;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n    margin-left: 46%;\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n    transition: 0.5s;\r\n  }\r\n\r\n  .addBtn:hover {\r\n    transition: 0.5s;\r\n    background-color: black;\r\n    color: white;\r\n  }\r\n\r\n  #todoModal {\r\n    padding-top: 20px;\r\n  }\r\n\r\n  #todoModalContent {\r\n    width: 50%;\r\n  }\r\n\r\n/* Container */\r\n\r\n.contentTitle {\r\n    margin-top: 40px;\r\n    margin-left: 0px;\r\n    width: 200px;\r\n}\r\n\r\n.todo {\r\n    display: flex;\r\n    flex-direction: row;\r\n    padding: 10px;\r\n    border-bottom: solid 3px black;\r\n    justify-content: space-between;\r\n    width: 80%;\r\n    margin: 0 auto;\r\n}\r\n\r\n.todoTitle {\r\n\r\n}\r\n\r\n.todoDate {\r\n\r\n}\r\n\r\n.AddTodosBtn {\r\n    width: 10%;\r\n    font-size: 18px;\r\n    padding: 5px;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n    margin-left: 46%;\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n    transition: 0.5s;\r\n    margin-top: 50px;\r\n  }\r\n\r\n  .AddTodosBtn:hover {\r\n    transition: 0.5s;\r\n    background-color: black;\r\n    color: white;\r\n  }\r\n"],"sourceRoot":""}]);
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

                    const todoTitle = document.createElement('h2'); 
                    todoTitle.innerText = todoText;
                    todoTitle.className = 'todoTitle';
                    todo.appendChild(todoTitle);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLFlBQVk7QUFDdEIsUUFBUSxPQUFPO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsVUFBVSxZQUFZO0FBQ3RCLFFBQVEsT0FBTztBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGlGQUFpRixVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxRQUFRLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sV0FBVyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDdkpBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQW9DO0FBQ2Q7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGlEQUFTO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsSUFBSSxpREFBUztBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpREFBUztBQUNqQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvaW5ib3guanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGJvZHkge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuaHRtbCwgYm9keSB7XHJcblx0bWF4LWhlaWdodDogMTAwJTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMyLCAyMzIsIDIzMik7XHJcbn1cclxuXHJcbiNuYXZiYXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc5Nik7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgaGVpZ2h0OiAxMnZoO1xyXG59XHJcblxyXG4jbmF2VGl0bGUge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4jY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuI3NpZGVCYXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNywgMjA3LCAyMDcpO1xyXG4gICAgaGVpZ2h0OiA4My44dmg7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgcGFkZGluZy10b3A6IDIlO1xyXG59XHJcblxyXG4uc2lkZUJhclRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLnNpZGVCYXJUaXRsZTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTYzLCAxNjMsIDE2Myk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG59XHJcblxyXG4jcHJvamVjdHNUaXRsZSB7XHJcbiAgICBmb250LXNpemU6IDM4cHg7XHJcbn1cclxuXHJcblxyXG4jcHJvamVjdHNUaXRsZTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA3LCAyMDcsIDIwNyk7XHJcbiAgICBjdXJzb3I6IGF1dG87XHJcbn1cclxuXHJcbiN0b2RvQ29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ucHJvamVjdExpc3Rpbmcge1xyXG4gICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcclxuICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4ucHJvamVjdExpc3Rpbmc6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2MywgMTYzLCAxNjMpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxufVxyXG5cclxuLyogTW9kYWwgKi9cclxuXHJcbi5tb2RhbCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgcG9zaXRpb246IGZpeGVkOyBcclxuICAgIHBhZGRpbmctdG9wOiAxNTBweDtcclxuICAgIGxlZnQ6IDA7IFxyXG4gICAgdG9wOiA1MDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlOyBcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICB9XHJcblxyXG4gIC5tb2RhbC1jb250ZW50IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDIwcHg7IFxyXG4gICAgbWFyZ2luOiBhdXRvOyBcclxuICAgIHdpZHRoOiAzMCU7ICBcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGFuaW1hdGV0b3A7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBhbmltYXRldG9wO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB9XHJcblxyXG4gIC5jbG9zZS1idG4ge1xyXG4gICAgZmxvYXQ6IHJpZ2h0OyBcclxuICAgIGNvbG9yOiBsaWdodGdyYXk7IFxyXG4gICAgZm9udC1zaXplOiAyNHB4OyAgXHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gIC5jbG9zZS1idG46aG92ZXIge1xyXG4gICAgY29sb3I6IGRhcmtncmF5O1xyXG4gIH1cclxuXHJcbiAgQC13ZWJraXQta2V5ZnJhbWVzIGFuaW1hdGV0b3Age1xyXG4gICAgZnJvbSB7dG9wOi0zMDBweDsgb3BhY2l0eTowfSBcclxuICAgIHRvIHt0b3A6MDsgb3BhY2l0eToxfVxyXG4gIH1cclxuXHJcbiAgQGtleWZyYW1lcyBhbmltYXRldG9wIHtcclxuICAgIGZyb20ge3RvcDotMzAwcHg7IG9wYWNpdHk6MH1cclxuICAgIHRvIHt0b3A6MDsgb3BhY2l0eToxfVxyXG4gIH1cclxuXHJcbiAgLm1vZGFsVGl0bGUge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4IGJsYWNrO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gIH1cclxuXHJcbiAgLmZvcm0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxuXHJcbiAgLm1vZGFsTGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcblxyXG4gIC5tb2RhbElucHV0IHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG5cclxuICAuYWRkQnRuIHtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogNDYlO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gIH1cclxuXHJcbiAgLmFkZEJ0bjpob3ZlciB7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxuICAjdG9kb01vZGFsIHtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgI3RvZG9Nb2RhbENvbnRlbnQge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICB9XHJcblxyXG4vKiBDb250YWluZXIgKi9cclxuXHJcbi5jb250ZW50VGl0bGUge1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbn1cclxuXHJcbi50b2RvIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDNweCBibGFjaztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLnRvZG9UaXRsZSB7XHJcblxyXG59XHJcblxyXG4udG9kb0RhdGUge1xyXG5cclxufVxyXG5cclxuLkFkZFRvZG9zQnRuIHtcclxuICAgIHdpZHRoOiAxMCU7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogNDYlO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICB9XHJcblxyXG4gIC5BZGRUb2Rvc0J0bjpob3ZlciB7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztJQUNULG1CQUFtQjtBQUN2Qjs7QUFFQTtDQUNDLGdCQUFnQjtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksc0NBQXNDO0lBQ3RDLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLGNBQWM7SUFDZCxVQUFVO0lBQ1YsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7OztBQUdBO0lBQ0ksb0NBQW9DO0lBQ3BDLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUEsVUFBVTs7QUFFVjtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7SUFDWiw4QkFBOEI7SUFDOUIsb0NBQW9DO0VBQ3RDOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsWUFBWTtJQUNaLFVBQVU7SUFDVixrQ0FBa0M7SUFDbEMsZ0NBQWdDO0lBQ2hDLDBCQUEwQjtJQUMxQix3QkFBd0I7SUFDeEIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsTUFBTSxVQUFVLEVBQUUsU0FBUztJQUMzQixJQUFJLEtBQUssRUFBRSxTQUFTO0VBQ3RCOztFQUVBO0lBQ0UsTUFBTSxVQUFVLEVBQUUsU0FBUztJQUMzQixJQUFJLEtBQUssRUFBRSxTQUFTO0VBQ3RCOztFQUVBO0lBQ0UsOEJBQThCO0lBQzlCLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsYUFBYTtFQUNmOztFQUVBO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsVUFBVTtJQUNWLGNBQWM7SUFDZCxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsY0FBYztJQUNkLGVBQWU7SUFDZixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLFVBQVU7SUFDVixlQUFlO0lBQ2YsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7O0FBRUYsY0FBYzs7QUFFZDtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLDhCQUE4QjtJQUM5Qiw4QkFBOEI7SUFDOUIsVUFBVTtJQUNWLGNBQWM7QUFDbEI7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsZUFBZTtJQUNmLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLFlBQVk7RUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sLCBib2R5IHtcXHJcXG5cXHRtYXgtaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzIsIDIzMiwgMjMyKTtcXHJcXG59XFxyXFxuXFxyXFxuI25hdmJhciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43OTYpO1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgICBoZWlnaHQ6IDEydmg7XFxyXFxufVxcclxcblxcclxcbiNuYXZUaXRsZSB7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgbWFyZ2luLXRvcDogMDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXHJcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxufVxcclxcblxcclxcbiNzaWRlQmFyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNywgMjA3LCAyMDcpO1xcclxcbiAgICBoZWlnaHQ6IDgzLjh2aDtcXHJcXG4gICAgd2lkdGg6IDIwJTtcXHJcXG4gICAgcGFkZGluZy10b3A6IDIlO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZUJhclRpdGxlIHtcXHJcXG4gICAgZm9udC1zaXplOiAyNnB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogMjAlO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xcclxcbiAgICB3aWR0aDogNTAlO1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDA7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5zaWRlQmFyVGl0bGU6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTYzLCAxNjMsIDE2Myk7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC41cztcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2plY3RzVGl0bGUge1xcclxcbiAgICBmb250LXNpemU6IDM4cHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbiNwcm9qZWN0c1RpdGxlOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNywgMjA3LCAyMDcpO1xcclxcbiAgICBjdXJzb3I6IGF1dG87XFxyXFxufVxcclxcblxcclxcbiN0b2RvQ29udGFpbmVyIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0TGlzdGluZyB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjZweDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC41cztcXHJcXG4gICAgd2lkdGg6IDUwJTtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAwO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdExpc3Rpbmc6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTYzLCAxNjMsIDE2Myk7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC41cztcXHJcXG59XFxyXFxuXFxyXFxuLyogTW9kYWwgKi9cXHJcXG5cXHJcXG4ubW9kYWwge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7IFxcclxcbiAgICBwYWRkaW5nLXRvcDogMTUwcHg7XFxyXFxuICAgIGxlZnQ6IDA7IFxcclxcbiAgICB0b3A6IDUwO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlOyBcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubW9kYWwtY29udGVudCB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBwYWRkaW5nOiAyMHB4OyBcXHJcXG4gICAgbWFyZ2luOiBhdXRvOyBcXHJcXG4gICAgd2lkdGg6IDMwJTsgIFxcclxcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBhbmltYXRldG9wO1xcclxcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcXHJcXG4gICAgYW5pbWF0aW9uLW5hbWU6IGFuaW1hdGV0b3A7XFxyXFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jbG9zZS1idG4ge1xcclxcbiAgICBmbG9hdDogcmlnaHQ7IFxcclxcbiAgICBjb2xvcjogbGlnaHRncmF5OyBcXHJcXG4gICAgZm9udC1zaXplOiAyNHB4OyAgXFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY2xvc2UtYnRuOmhvdmVyIHtcXHJcXG4gICAgY29sb3I6IGRhcmtncmF5O1xcclxcbiAgfVxcclxcblxcclxcbiAgQC13ZWJraXQta2V5ZnJhbWVzIGFuaW1hdGV0b3Age1xcclxcbiAgICBmcm9tIHt0b3A6LTMwMHB4OyBvcGFjaXR5OjB9IFxcclxcbiAgICB0byB7dG9wOjA7IG9wYWNpdHk6MX1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIEBrZXlmcmFtZXMgYW5pbWF0ZXRvcCB7XFxyXFxuICAgIGZyb20ge3RvcDotMzAwcHg7IG9wYWNpdHk6MH1cXHJcXG4gICAgdG8ge3RvcDowOyBvcGFjaXR5OjF9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubW9kYWxUaXRsZSB7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCBibGFjaztcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5mb3JtIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tb2RhbExhYmVsIHtcXHJcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICB3aWR0aDogNTAlO1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tb2RhbElucHV0IHtcXHJcXG4gICAgd2lkdGg6IDUwJTtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYWRkQnRuIHtcXHJcXG4gICAgd2lkdGg6IDMwJTtcXHJcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBtYXJnaW4tbGVmdDogNDYlO1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmFkZEJ0bjpob3ZlciB7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuNXM7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjdG9kb01vZGFsIHtcXHJcXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjdG9kb01vZGFsQ29udGVudCB7XFxyXFxuICAgIHdpZHRoOiA1MCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuLyogQ29udGFpbmVyICovXFxyXFxuXFxyXFxuLmNvbnRlbnRUaXRsZSB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDQwcHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XFxyXFxuICAgIHdpZHRoOiAyMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAzcHggYmxhY2s7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcblxcclxcbi50b2RvVGl0bGUge1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4udG9kb0RhdGUge1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uQWRkVG9kb3NCdG4ge1xcclxcbiAgICB3aWR0aDogMTAlO1xcclxcbiAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA0NiU7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuNXM7XFxyXFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuQWRkVG9kb3NCdG46aG92ZXIge1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgfVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGxvYWRQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdFwiO1xyXG5cclxuY29uc3QgbG9hZEluYm94ID0gKGFsbFByb2plY3RzKSA9PiB7XHJcbiAgICBjb25zdCB0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9Db250YWluZXInKTtcclxuICAgIGNvbnN0IHNpZGVCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lkZUJhcicpO1xyXG4gICAgXHJcbiAgICAvLyBDcmVhdGUgVGl0bGVcclxuICAgIGNvbnN0IHRpdGxlQ2hlY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5ib3hUaXRsZScpO1xyXG4gICAgY29uc3QgcHJvamVjdENoZWNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RUaXRsZScpO1xyXG5cclxuICAgIGlmICghdGl0bGVDaGVjayAmJiAhcHJvamVjdENoZWNrKSB7XHJcbiAgICAgICAgY29uc3QgaW5ib3hUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7IFxyXG4gICAgICAgIGluYm94VGl0bGUuaW5uZXJUZXh0ID0gJ0luYm94JztcclxuICAgICAgICBpbmJveFRpdGxlLmNsYXNzTmFtZSA9ICdjb250ZW50VGl0bGUnO1xyXG4gICAgICAgIGluYm94VGl0bGUuaWQgPSAnaW5ib3hUaXRsZSc7XHJcbiAgICAgICAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZChpbmJveFRpdGxlKTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gQ3JlYXRlIEFsbCBUb2RvcyAoVGl0bGUtRHVlZGF0ZS1Qcmlvcml0eSlcclxuICAgIGxldCBjdXJyZW50UHJvamVjdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwcm9qZWN0TGlzdGluZycpO1xyXG4gICAgaWYgKGN1cnJlbnRQcm9qZWN0cykge1xyXG4gICAgICAgIHdoaWxlKGN1cnJlbnRQcm9qZWN0c1swXSkge1xyXG4gICAgICAgICAgICBjdXJyZW50UHJvamVjdHNbMF0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjdXJyZW50UHJvamVjdHNbMF0pO1xyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG4gICAgaWYgKGFsbFByb2plY3RzKSB7XHJcbiAgICAgICAgYWxsUHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcHJvamVjdE9iamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7IFxyXG4gICAgICAgICAgICBwcm9qZWN0T2JqZWN0LmlubmVyVGV4dCA9IHByb2plY3QudGl0bGU7XHJcbiAgICAgICAgICAgIHByb2plY3RPYmplY3QuY2xhc3NOYW1lID0gJ3Byb2plY3RMaXN0aW5nJztcclxuICAgICAgICAgICAgc2lkZUJhci5hcHBlbmRDaGlsZChwcm9qZWN0T2JqZWN0KTtcclxuXHJcbiAgICAgICAgICAgIHByb2plY3RPYmplY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGxvYWRQcm9qZWN0KHByb2plY3QudGl0bGUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbn07XHJcblxyXG5leHBvcnQge2xvYWRJbmJveH07IiwiY29uc3QgYWxsVG9kb3MgPSBbXTtcclxuXHJcbmNvbnN0IGxvYWRQcm9qZWN0ID0gKHByb2plY3ROYW1lKSA9PiB7XHJcblxyXG4gICAgY2xhc3MgVG9kb3tcclxuICAgICAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBzdGF0dXMsIHByb2plY3QpIHtcclxuICAgICAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlLFxyXG4gICAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGUsXHJcbiAgICAgICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eSxcclxuICAgICAgICAgICAgdGhpcy5zdGF0dXMgPSBzdGF0dXMsXHJcbiAgICAgICAgICAgIHRoaXMucHJvamVjdCA9IHByb2plY3RcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCB0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9Db250YWluZXInKTtcclxuICAgIHRvZG9Db250YWluZXIuaW5uZXJIVE1MID0gJyc7XHJcblxyXG4gICAgLy8gQ3JlYXRlIFRpdGxlXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVUaXRsZSgpIHtcclxuICAgICAgICBjb25zdCB0aXRsZUNoZWNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RUaXRsZScpO1xyXG5cclxuICAgICAgICBpZiAoIXRpdGxlQ2hlY2spIHtcclxuICAgICAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTsgXHJcbiAgICAgICAgICAgIHByb2plY3RUaXRsZS5pbm5lclRleHQgPSBwcm9qZWN0TmFtZTtcclxuICAgICAgICAgICAgcHJvamVjdFRpdGxlLmNsYXNzTmFtZSA9ICdjb250ZW50VGl0bGUnO1xyXG4gICAgICAgICAgICBwcm9qZWN0VGl0bGUuaWQgPSAncHJvamVjdFRpdGxlJztcclxuICAgICAgICAgICAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG5cclxuICAgIGNyZWF0ZVRpdGxlKCk7XHJcblxyXG4gICAgLy8gTG9hZCBBbGwgVG9kb3MgRm9yIFRoaXMgUHJvamVjdFxyXG4gICAgZnVuY3Rpb24gbG9hZFRvZG9zKCkge1xyXG4gICAgICAgIHRvZG9Db250YWluZXIuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgY3JlYXRlVGl0bGUoKTtcclxuXHJcbiAgICAgICAgaWYgKGFsbFRvZG9zKSB7XHJcbiAgICAgICAgICAgIGFsbFRvZG9zLmZvckVhY2goKHRvZG8pID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCB0b2RvVGV4dCA9IHRvZG8udGl0bGU7XHJcbiAgICAgICAgICAgICAgICBsZXQgdG9kb0R1ZURhdGUgPSB0b2RvLmR1ZURhdGU7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRvZG8ucHJvamVjdCA9PT0gcHJvamVjdE5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IFxyXG4gICAgICAgICAgICAgICAgICAgIHRvZG8uY2xhc3NOYW1lID0gJ3RvZG8nO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQodG9kbyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7IFxyXG4gICAgICAgICAgICAgICAgICAgIHRvZG9UaXRsZS5pbm5lclRleHQgPSB0b2RvVGV4dDtcclxuICAgICAgICAgICAgICAgICAgICB0b2RvVGl0bGUuY2xhc3NOYW1lID0gJ3RvZG9UaXRsZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9kby5hcHBlbmRDaGlsZCh0b2RvVGl0bGUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvRHVlRGF0ZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpOyBcclxuICAgICAgICAgICAgICAgICAgICB0b2RvRHVlRGF0ZVRleHQuaW5uZXJUZXh0ID0gdG9kb0R1ZURhdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9kb0R1ZURhdGVUZXh0LmNsYXNzTmFtZSA9ICd0b2RvRGF0ZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9kby5hcHBlbmRDaGlsZCh0b2RvRHVlRGF0ZVRleHQpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcbiAgICBcclxuICAgIGxvYWRUb2RvcygpO1xyXG5cclxuICAgIC8vIE9wZW4gVG9kbyBNb2RhbFxyXG4gICAgZnVuY3Rpb24gY3JlYXRlT3Blbk1vZGFsQnRuKCkge1xyXG4gICAgICAgIGNvbnN0IGFkZFRvZG9zQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7IFxyXG4gICAgICAgIGFkZFRvZG9zQnRuLmlubmVyVGV4dCA9ICdBZGQgVGFzayc7XHJcbiAgICAgICAgYWRkVG9kb3NCdG4uY2xhc3NOYW1lID0gJ0FkZFRvZG9zQnRuJztcclxuICAgICAgICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFRvZG9zQnRuKTtcclxuICAgIFxyXG4gICAgICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvTW9kYWxcIik7XHJcbiAgICBcclxuICAgICAgICBhZGRUb2Rvc0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnT3BlbiBBZGQgVG9kbyBNb2RhbCcpO1xyXG4gICAgICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgIH0pO1xyXG4gICAgXHJcbiAgICAgICAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNsb3NlLWJ0blwiKTtcclxuICAgICAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgICB3aW5kb3cub25jbGljayA9IGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICBpZihlLnRhcmdldCA9PSBtb2RhbCl7XHJcbiAgICAgICAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG5cclxuICAgIGNyZWF0ZU9wZW5Nb2RhbEJ0bigpO1xyXG5cclxuICAgIC8vIENyZWF0ZSBUb2Rvc1xyXG4gICAgZnVuY3Rpb24gYWRkVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3RvZG8gY3JlYXRlZCcpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvVGl0bGVJbnB1dCcpLnZhbHVlID0gJyc7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9EZXNjcmlwdGlvblRleHRhcmVhJykudmFsdWUgPSAnJztcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb0R1ZURhdGVJbnB1dCcpLnZhbHVlID0gJyc7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9QaW9yaXR5SW5wdXQnKS52YWx1ZSA9ICcnO1xyXG5cclxuICAgICAgICBsZXQgc3RhdHVzID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IG5ld1RvZG8gPSBuZXcgVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBzdGF0dXMsIHByb2plY3QpO1xyXG4gICAgICAgIGFsbFRvZG9zLnB1c2gobmV3VG9kbyk7XHJcbiAgICAgICAgbG9hZFRvZG9zKCk7XHJcbiAgICAgICAgY3JlYXRlT3Blbk1vZGFsQnRuKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGFkZFRvZG9CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkVG9kb0J0bicpO1xyXG5cclxuICAgIGFkZFRvZG9CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBsZXQgdGl0bGVWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvVGl0bGVJbnB1dCcpLnZhbHVlO1xyXG4gICAgICAgIGxldCBkZXNjcmlwdGlvblZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9EZXNjcmlwdGlvblRleHRhcmVhJykudmFsdWU7XHJcbiAgICAgICAgbGV0IGR1ZURhdGVWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvRHVlRGF0ZUlucHV0JykudmFsdWU7XHJcbiAgICAgICAgbGV0IHByaW9yaXR5VmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb1Bpb3JpdHlJbnB1dCcpLnZhbHVlO1xyXG4gICAgICAgIGxldCBwcm9qZWN0ID0gcHJvamVjdE5hbWU7XHJcblxyXG4gICAgICAgIGlmICh0aXRsZVZhbHVlICE9PSAnJyAmJiBkZXNjcmlwdGlvblZhbHVlICE9PSAnJyAmJiBkdWVEYXRlVmFsdWUgIT09ICcnICYmIHByaW9yaXR5VmFsdWUgIT09ICcnKSB7XHJcbiAgICAgICAgICAgIGFkZFRvZG8odGl0bGVWYWx1ZSwgZGVzY3JpcHRpb25WYWx1ZSwgZHVlRGF0ZVZhbHVlLCBwcmlvcml0eVZhbHVlLCBwcm9qZWN0KTtcclxuICAgICAgICB9O1xyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlVG9kb0J0bigpIHtcclxuICAgICAgICBjb25zdCBhZGRUb2RvQnRuT2xkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFRvZG9CdG4nKTtcclxuICAgICAgICBpZiAoYWRkVG9kb0J0bk9sZCkge1xyXG4gICAgICAgICAgICBhZGRUb2RvQnRuT2xkLnJlbW92ZSgpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb0Zvcm0nKTtcclxuXHJcbiAgICAgICAgY29uc3QgYWRkVG9kb0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGFkZFRvZG9CdG4uaWQgPSAnYWRkVG9kb0J0bic7XHJcbiAgICAgICAgYWRkVG9kb0J0bi5jbGFzc05hbWUgPSAnYWRkQnRuJztcclxuICAgICAgICBhZGRUb2RvQnRuLmlubmVyVGV4dCA9ICdBZGQgVG9kbydcclxuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGFkZFRvZG9CdG4pO1xyXG5cclxuICAgICAgICBhZGRUb2RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGxldCB0aXRsZVZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9UaXRsZUlucHV0JykudmFsdWU7XHJcbiAgICAgICAgICAgIGxldCBkZXNjcmlwdGlvblZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9EZXNjcmlwdGlvblRleHRhcmVhJykudmFsdWU7XHJcbiAgICAgICAgICAgIGxldCBkdWVEYXRlVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb0R1ZURhdGVJbnB1dCcpLnZhbHVlO1xyXG4gICAgICAgICAgICBsZXQgcHJpb3JpdHlWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvUGlvcml0eUlucHV0JykudmFsdWU7XHJcbiAgICAgICAgICAgIGxldCBwcm9qZWN0ID0gcHJvamVjdE5hbWU7XHJcblxyXG4gICAgICAgICAgICBpZiAodGl0bGVWYWx1ZSAhPT0gJycgJiYgZGVzY3JpcHRpb25WYWx1ZSAhPT0gJycgJiYgZHVlRGF0ZVZhbHVlICE9PSAnJyAmJiBwcmlvcml0eVZhbHVlICE9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgYWRkVG9kbyh0aXRsZVZhbHVlLCBkZXNjcmlwdGlvblZhbHVlLCBkdWVEYXRlVmFsdWUsIHByaW9yaXR5VmFsdWUsIHByb2plY3QpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjcmVhdGVUb2RvQnRuKCk7XHJcblxyXG59O1xyXG5cclxuZXhwb3J0IHtsb2FkUHJvamVjdH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgbG9hZEluYm94IH0gZnJvbSAnLi9pbmJveCc7XHJcbmltcG9ydCAnLi9zdHlsZXMuY3NzJztcclxuXHJcbmNvbnN0IGFsbFRvZG9zID0gW107XHJcbmNvbnN0IGFsbFByb2plY3RzID0gW107XHJcblxyXG5jbGFzcyBUb2Rve1xyXG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgc3RhdHVzKSB7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlLFxyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbixcclxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlLFxyXG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eSxcclxuICAgICAgICB0aGlzLnN0YXR1cyA9IHN0YXR1c1xyXG4gICAgfTtcclxufTtcclxuXHJcbmNsYXNzIFByb2plY3R7XHJcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSkge1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZVxyXG4gICAgfTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGFkZFByb2plY3QodGl0bGUpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0TmFtZUlucHV0JykudmFsdWUgPSAnJztcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KHRpdGxlKTtcclxuICAgIGFsbFByb2plY3RzLnB1c2gobmV3UHJvamVjdCk7XHJcbiAgICBsb2FkSW5ib3goYWxsUHJvamVjdHMpO1xyXG59O1xyXG5cclxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgbG9hZEluYm94KGFsbFByb2plY3RzKTtcclxuXHJcbiAgICAvLyBTaWRlYmFyIEV2ZW50IExpc3RlbmVyc1xyXG4gICAgY29uc3QgdG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvQ29udGFpbmVyJyk7XHJcblxyXG4gICAgY29uc3QgaW5ib3hUYWIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5ib3hCdG4nKTtcclxuICAgIGluYm94VGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdG9kb0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICBsb2FkSW5ib3goYWxsUHJvamVjdHMpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gT3BlbiBNb2RhbFxyXG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RNb2RhbFwiKTtcclxuXHJcbiAgICBjb25zdCBvcGVuQWRkUHJvamVjdHNNb2RhbEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcGVuQWRkUHJvamVjdHNNb2RhbEJ0bicpO1xyXG4gICAgb3BlbkFkZFByb2plY3RzTW9kYWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNsb3NlLWJ0blwiKTtcclxuICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgfSk7XHJcblxyXG4gICAgd2luZG93Lm9uY2xpY2sgPSBmdW5jdGlvbihlKXtcclxuICAgICAgICBpZihlLnRhcmdldCA9PSBtb2RhbCl7XHJcbiAgICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gQWRkIFByb2plY3RzXHJcbiAgICBjb25zdCBhZGRQcm9qZWN0c0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRQcm9qZWN0c0J0bicpO1xyXG4gICAgYWRkUHJvamVjdHNCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBsZXQgbmFtZVZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3ROYW1lSW5wdXQnKS52YWx1ZTtcclxuICAgICAgICBpZiAobmFtZVZhbHVlICE9PSAnJykge1xyXG4gICAgICAgICAgICBhZGRQcm9qZWN0KG5hbWVWYWx1ZSk7XHJcbiAgICAgICAgfTtcclxuICAgIH0pO1xyXG59OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==