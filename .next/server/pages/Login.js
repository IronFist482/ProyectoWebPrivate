"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/Login";
exports.ids = ["pages/Login"];
exports.modules = {

/***/ "./pages/Login.tsx":
/*!*************************!*\
  !*** ./pages/Login.tsx ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Login)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__]);\naxios__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nfunction Login() {\n    const [correo, setCorreo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [contrasena, setContrasena] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const validar = true;\n    const validacion = async ()=>{\n        const res = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"/api/querys\", {\n            correo: correo,\n            contrasena: contrasena\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"circulo-verde01\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\cerna\\\\OneDrive - Instituto Politecnico Nacional\\\\Desktop\\\\ProyectoWebPrivate\\\\pages\\\\Login.tsx\",\n                lineNumber: 20,\n                columnNumber: 6\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"containerLogin\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"texto\",\n                        children: \"Iniciar Sesion\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\cerna\\\\OneDrive - Instituto Politecnico Nacional\\\\Desktop\\\\ProyectoWebPrivate\\\\pages\\\\Login.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        className: \"formLogin\",\n                        method: \"post\",\n                        onSubmit: validacion,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: \"labelCorreo\",\n                                children: \"Correo\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\cerna\\\\OneDrive - Instituto Politecnico Nacional\\\\Desktop\\\\ProyectoWebPrivate\\\\pages\\\\Login.tsx\",\n                                lineNumber: 24,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                className: \"label00\",\n                                placeholder: \"ejemplo@gmail.com\",\n                                onChange: (event)=>setCorreo(event.target.value),\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\cerna\\\\OneDrive - Instituto Politecnico Nacional\\\\Desktop\\\\ProyectoWebPrivate\\\\pages\\\\Login.tsx\",\n                                lineNumber: 25,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: \"labelContrasena\",\n                                children: \"Contrase\\xf1a\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\cerna\\\\OneDrive - Instituto Politecnico Nacional\\\\Desktop\\\\ProyectoWebPrivate\\\\pages\\\\Login.tsx\",\n                                lineNumber: 26,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"password\",\n                                className: \"label01\",\n                                placeholder: \"contrase\\xf1a1234\",\n                                onChange: (event)=>setContrasena(event.target.value),\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\cerna\\\\OneDrive - Instituto Politecnico Nacional\\\\Desktop\\\\ProyectoWebPrivate\\\\pages\\\\Login.tsx\",\n                                lineNumber: 27,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"loginBoton2 tipoLetra\",\n                                children: \"Iniciar\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\cerna\\\\OneDrive - Instituto Politecnico Nacional\\\\Desktop\\\\ProyectoWebPrivate\\\\pages\\\\Login.tsx\",\n                                lineNumber: 28,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\cerna\\\\OneDrive - Instituto Politecnico Nacional\\\\Desktop\\\\ProyectoWebPrivate\\\\pages\\\\Login.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"logo-normal\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\cerna\\\\OneDrive - Instituto Politecnico Nacional\\\\Desktop\\\\ProyectoWebPrivate\\\\pages\\\\Login.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\cerna\\\\OneDrive - Instituto Politecnico Nacional\\\\Desktop\\\\ProyectoWebPrivate\\\\pages\\\\Login.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9Mb2dpbi50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFBOEI7QUFDSztBQUVWO0FBRVYsU0FBU0UsUUFBTztJQUU3QixNQUFNLENBQUNDLFFBQU9DLFVBQVUsR0FBRUosK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDSyxZQUFXQyxjQUFjLEdBQUVOLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU1PLFVBQVUsSUFBSTtJQUNwQixNQUFNQyxhQUFhLFVBQVM7UUFDMUIsTUFBTUMsTUFBTSxNQUFNUixrREFBVSxDQUFDLGVBQWU7WUFDMUNFLFFBQVFBO1lBQ1JFLFlBQVlBO1FBQ2Q7SUFFRjtJQUNBLHFCQUNFOzswQkFDQyw4REFBQ007Z0JBQUlDLFdBQVU7Ozs7OzswQkFDZCw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FBUTs7Ozs7O2tDQUN2Qiw4REFBQ0M7d0JBQUtELFdBQVU7d0JBQVlFLFFBQU87d0JBQU9DLFVBQVVQOzswQ0FDbEQsOERBQUNRO2dDQUFNSixXQUFVOzBDQUFjOzs7Ozs7MENBQy9CLDhEQUFDSztnQ0FBTUMsTUFBSztnQ0FBT04sV0FBVTtnQ0FBVU8sYUFBWTtnQ0FBb0JDLFVBQVVDLENBQUFBLFFBQVNqQixVQUFVaUIsTUFBTUMsTUFBTSxDQUFDQyxLQUFLO2dDQUFHQyxRQUFROzs7Ozs7MENBQ2pJLDhEQUFDUjtnQ0FBTUosV0FBVTswQ0FBa0I7Ozs7OzswQ0FDbkMsOERBQUNLO2dDQUFNQyxNQUFLO2dDQUFXTixXQUFVO2dDQUFVTyxhQUFZO2dDQUFpQkMsVUFBVUMsQ0FBQUEsUUFBU2YsY0FBY2UsTUFBTUMsTUFBTSxDQUFDQyxLQUFLO2dDQUFHQyxRQUFROzs7Ozs7MENBQ3RJLDhEQUFDQztnQ0FBT2IsV0FBVTswQ0FBd0I7Ozs7Ozs7Ozs7OztrQ0FFNUMsOERBQUNEO3dCQUFJQyxXQUFVOzs7Ozs7Ozs7Ozs7OztBQUl2QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXBwLy4vcGFnZXMvTG9naW4udHN4Pzg3YmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBcIi4uL3N0eWxlcy9JbmRleC5tb2R1bGUuY3NzXCJcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luKCl7XHJcblxyXG4gIGNvbnN0IFtjb3JyZW8sc2V0Q29ycmVvXT0gdXNlU3RhdGUoXCJcIilcclxuICBjb25zdCBbY29udHJhc2VuYSxzZXRDb250cmFzZW5hXT0gdXNlU3RhdGUoXCJcIilcclxuICBjb25zdCB2YWxpZGFyID0gdHJ1ZVxyXG4gIGNvbnN0IHZhbGlkYWNpb24gPSBhc3luYygpPT57XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KCcvYXBpL3F1ZXJ5cycsIHtcclxuICAgICAgY29ycmVvOiBjb3JyZW8sXHJcbiAgICAgIGNvbnRyYXNlbmE6IGNvbnRyYXNlbmFcclxuICAgIH0pXHJcbiAgICBcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgPGRpdiBjbGFzc05hbWU9J2NpcmN1bG8tdmVyZGUwMSc+PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyTG9naW5cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRvXCI+SW5pY2lhciBTZXNpb248L2Rpdj5cclxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJmb3JtTG9naW5cIiBtZXRob2Q9J3Bvc3QnIG9uU3VibWl0PXt2YWxpZGFjaW9ufT5cclxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J2xhYmVsQ29ycmVvJz5Db3JyZW88L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPSdsYWJlbDAwJyBwbGFjZWhvbGRlcj1cImVqZW1wbG9AZ21haWwuY29tXCIgb25DaGFuZ2U9e2V2ZW50ID0+IHNldENvcnJlbyhldmVudC50YXJnZXQudmFsdWUpfSByZXF1aXJlZC8+XHJcbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdsYWJlbENvbnRyYXNlbmEnPkNvbnRyYXNlw7FhPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBjbGFzc05hbWU9J2xhYmVsMDEnIHBsYWNlaG9sZGVyPVwiY29udHJhc2XDsWExMjM0XCIgb25DaGFuZ2U9e2V2ZW50ID0+IHNldENvbnRyYXNlbmEoZXZlbnQudGFyZ2V0LnZhbHVlKX0gcmVxdWlyZWQvPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJsb2dpbkJvdG9uMiB0aXBvTGV0cmFcIj5JbmljaWFyPC9idXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nby1ub3JtYWxcIj48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJheGlvcyIsIkxvZ2luIiwiY29ycmVvIiwic2V0Q29ycmVvIiwiY29udHJhc2VuYSIsInNldENvbnRyYXNlbmEiLCJ2YWxpZGFyIiwidmFsaWRhY2lvbiIsInJlcyIsInBvc3QiLCJkaXYiLCJjbGFzc05hbWUiLCJmb3JtIiwibWV0aG9kIiwib25TdWJtaXQiLCJsYWJlbCIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwicmVxdWlyZWQiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Login.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/Login.tsx"));
module.exports = __webpack_exports__;

})();