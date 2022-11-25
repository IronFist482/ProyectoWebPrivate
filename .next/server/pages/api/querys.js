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
exports.id = "pages/api/querys";
exports.ids = ["pages/api/querys"];
exports.modules = {

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ "mysql2/promise":
/*!*********************************!*\
  !*** external "mysql2/promise" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("mysql2/promise");

/***/ }),

/***/ "(api)/./config/bdConection.ts":
/*!*******************************!*\
  !*** ./config/bdConection.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pool\": () => (/* binding */ pool)\n/* harmony export */ });\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mysql2/promise */ \"mysql2/promise\");\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mysql2_promise__WEBPACK_IMPORTED_MODULE_0__);\n\nconst pool = (0,mysql2_promise__WEBPACK_IMPORTED_MODULE_0__.createPool)({\n    host: \"localhost\",\n    user: \"root\",\n    password: \"idcp2005\",\n    port: 3306,\n    database: \"p_sofquimic\"\n});\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9jb25maWcvYmRDb25lY3Rpb24udHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTJDO0FBRTNDLE1BQU1DLE9BQU9ELDBEQUFVQSxDQUFDO0lBQ3BCRSxNQUFNO0lBQ05DLE1BQU07SUFDTkMsVUFBVTtJQUNWQyxNQUFNO0lBQ05DLFVBQVU7QUFDZDtBQUVnQiIsInNvdXJjZXMiOlsid2VicGFjazovL2FwcC8uL2NvbmZpZy9iZENvbmVjdGlvbi50cz81MWFlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVBvb2wgfSBmcm9tIFwibXlzcWwyL3Byb21pc2VcIlxyXG5cclxuY29uc3QgcG9vbCA9IGNyZWF0ZVBvb2woe1xyXG4gICAgaG9zdDogJ2xvY2FsaG9zdCcsXHJcbiAgICB1c2VyOiAncm9vdCcsXHJcbiAgICBwYXNzd29yZDogJ2lkY3AyMDA1JyxcclxuICAgIHBvcnQ6IDMzMDYsXHJcbiAgICBkYXRhYmFzZTogJ3Bfc29mcXVpbWljJ1xyXG59KVxyXG5cclxuZXhwb3J0IHsgcG9vbCB9OyJdLCJuYW1lcyI6WyJjcmVhdGVQb29sIiwicG9vbCIsImhvc3QiLCJ1c2VyIiwicGFzc3dvcmQiLCJwb3J0IiwiZGF0YWJhc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./config/bdConection.ts\n");

/***/ }),

/***/ "(api)/./pages/api/querys/index.ts":
/*!***********************************!*\
  !*** ./pages/api/querys/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _config_bdConection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../config/bdConection */ \"(api)/./config/bdConection.ts\");\nconst bcryptjs = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n\nasync function handler(req, res) {\n    const hashThing = (password)=>{\n        return bcryptjs.hashSync(password, 8);\n    };\n    const guardarDatos = async (req, res)=>{\n        console.log(\"Estoy aqu\\xed\");\n        const { nombre , ap_paterno , ap_materno , correo , contrasena , unidad_a , aprendizaje  } = req.body;\n        const hash = hashThing(contrasena);\n        const result = await _config_bdConection__WEBPACK_IMPORTED_MODULE_0__.pool.query(\"INSERT INTO cuenta (nom_cue,apP_cue,apM_cue,cor_cue,con_cue,id_uni,id_per) VALUES(?,?,?,?,?,?,?)\", [\n            nombre,\n            ap_paterno,\n            ap_materno,\n            correo,\n            hash,\n            unidad_a,\n            aprendizaje\n        ]);\n        return result;\n    };\n    switch(req.method){\n        case \"POST\":\n            try {\n                const x = await guardarDatos(req, res);\n                return res.status(200).json(x);\n            } catch (error) {\n                return res.status(400).json(error);\n            }\n        case \"PUT\":\n            return res.status(200).json(\"Actualizando un producto: \" + req.query.id);\n        case \"DELETE\":\n            return res.status(200).json(\"Eliminando un producto: \" + req.query.id);\n        default:\n            return res.status(405).json(\"Method not allowed\");\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcXVlcnlzL2luZGV4LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsTUFBTUEsV0FBV0MsbUJBQU9BLENBQUM7QUFDMEI7QUFFcEMsZUFBZUUsUUFBUUMsR0FBc0UsRUFBRUMsR0FBd0csRUFBRTtJQUVwTixNQUFNQyxZQUFZLENBQUNDLFdBQWlCO1FBRWhDLE9BQU9QLFNBQVNRLFFBQVEsQ0FBQ0QsVUFBUztJQUN0QztJQUVBLE1BQU1FLGVBQWUsT0FBTUwsS0FBMkRDLE1BQTZIO1FBQy9NSyxRQUFRQyxHQUFHLENBQUM7UUFDWixNQUFNLEVBQUNDLE9BQU0sRUFBQ0MsV0FBVSxFQUFDQyxXQUFVLEVBQUNDLE9BQU0sRUFBQ0MsV0FBVSxFQUFDQyxTQUFRLEVBQUNDLFlBQVcsRUFBQyxHQUFHZCxJQUFJZSxJQUFJO1FBQ3RGLE1BQU1DLE9BQU9kLFVBQVVVO1FBQ3ZCLE1BQU1LLFNBQVMsTUFBTW5CLDJEQUFVLENBQUMsb0dBQW1HO1lBQUNVO1lBQU9DO1lBQVdDO1lBQVdDO1lBQU9LO1lBQUtIO1lBQVNDO1NBQVk7UUFDbE0sT0FBT0c7SUFDWDtJQUdBLE9BQU9qQixJQUFJbUIsTUFBTTtRQUViLEtBQUs7WUFDRCxJQUFJO2dCQUNBLE1BQU1DLElBQVEsTUFBTWYsYUFBYUwsS0FBSUM7Z0JBQ3JDLE9BQU9BLElBQUlvQixNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDRjtZQUNoQyxFQUFFLE9BQU9HLE9BQVc7Z0JBQ2hCLE9BQU90QixJQUFJb0IsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ0M7WUFDaEM7UUFFSixLQUFLO1lBQ0QsT0FBT3RCLElBQUlvQixNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDLCtCQUE4QnRCLElBQUlrQixLQUFLLENBQUNNLEVBQUU7UUFDMUUsS0FBSztZQUNELE9BQU92QixJQUFJb0IsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQyw2QkFBNEJ0QixJQUFJa0IsS0FBSyxDQUFDTSxFQUFFO1FBQ3hFO1lBQ0ksT0FBT3ZCLElBQUlvQixNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO0lBQ3BDO0FBRUosQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FwcC8uL3BhZ2VzL2FwaS9xdWVyeXMvaW5kZXgudHM/N2U1MiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBiY3J5cHRqcyA9IHJlcXVpcmUoJ2JjcnlwdGpzJylcclxuaW1wb3J0IHsgcG9vbCB9IGZyb20gXCIuLi8uLi8uLi9jb25maWcvYmRDb25lY3Rpb25cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxOiB7IG1ldGhvZDogYW55OyBib2R5OiB7IHRpcG86IHN0cmluZzsgfTsgcXVlcnk6IHsgaWQ6IHN0cmluZzsgfTsgfSwgcmVzOiB7IHN0YXR1czogKGFyZzA6IG51bWJlcikgPT4geyAoKTogYW55OyBuZXcoKTogYW55OyBqc29uOiB7IChhcmcwOiBzdHJpbmcpOiBhbnk7IG5ldygpOiBhbnk7IH07IH07IH0pIHtcclxuXHJcbiAgICBjb25zdCBoYXNoVGhpbmcgPSAocGFzc3dvcmQ6IGFueSkgPT57XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIGJjcnlwdGpzLmhhc2hTeW5jKHBhc3N3b3JkLDgpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ3VhcmRhckRhdG9zID0gYXN5bmMocmVxOiB7IG1ldGhvZD86IGFueTsgYm9keTogYW55OyBxdWVyeT86IHsgaWQ6IHN0cmluZzsgfTsgfSxyZXM6IHsgc3RhdHVzPzogKGFyZzA6IG51bWJlcikgPT4geyAoKTogYW55OyBuZXcoKTogYW55OyBqc29uOiB7IChhcmcwOiBzdHJpbmcpOiBhbnk7IG5ldygpOiBhbnk7IH07IH07IHJlZGlyZWN0PzogYW55OyB9KSA9PntcclxuICAgICAgICBjb25zb2xlLmxvZygnRXN0b3kgYXF1w60nKVxyXG4gICAgICAgIGNvbnN0IHtub21icmUsYXBfcGF0ZXJubyxhcF9tYXRlcm5vLGNvcnJlbyxjb250cmFzZW5hLHVuaWRhZF9hLGFwcmVuZGl6YWplfSA9IHJlcS5ib2R5XHJcbiAgICAgICAgY29uc3QgaGFzaCA9IGhhc2hUaGluZyhjb250cmFzZW5hKVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHBvb2wucXVlcnkoJ0lOU0VSVCBJTlRPIGN1ZW50YSAobm9tX2N1ZSxhcFBfY3VlLGFwTV9jdWUsY29yX2N1ZSxjb25fY3VlLGlkX3VuaSxpZF9wZXIpIFZBTFVFUyg/LD8sPyw/LD8sPyw/KScsW25vbWJyZSxhcF9wYXRlcm5vLGFwX21hdGVybm8sY29ycmVvLGhhc2gsdW5pZGFkX2EsYXByZW5kaXphamVdKSAgXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdFxyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgc3dpdGNoKHJlcS5tZXRob2Qpe1xyXG5cclxuICAgICAgICBjYXNlICdQT1NUJzpcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHg6YW55ID0gYXdhaXQgZ3VhcmRhckRhdG9zKHJlcSxyZXMpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeCk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yOmFueSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKGVycm9yKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgY2FzZSAnUFVUJzpcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKCdBY3R1YWxpemFuZG8gdW4gcHJvZHVjdG86ICcrIHJlcS5xdWVyeS5pZClcclxuICAgICAgICBjYXNlICdERUxFVEUnOlxyXG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oJ0VsaW1pbmFuZG8gdW4gcHJvZHVjdG86ICcrIHJlcS5xdWVyeS5pZClcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDUpLmpzb24oJ01ldGhvZCBub3QgYWxsb3dlZCcpXHJcbiAgICB9XHJcbiAgICBcclxufSJdLCJuYW1lcyI6WyJiY3J5cHRqcyIsInJlcXVpcmUiLCJwb29sIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImhhc2hUaGluZyIsInBhc3N3b3JkIiwiaGFzaFN5bmMiLCJndWFyZGFyRGF0b3MiLCJjb25zb2xlIiwibG9nIiwibm9tYnJlIiwiYXBfcGF0ZXJubyIsImFwX21hdGVybm8iLCJjb3JyZW8iLCJjb250cmFzZW5hIiwidW5pZGFkX2EiLCJhcHJlbmRpemFqZSIsImJvZHkiLCJoYXNoIiwicmVzdWx0IiwicXVlcnkiLCJtZXRob2QiLCJ4Iiwic3RhdHVzIiwianNvbiIsImVycm9yIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/querys/index.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/querys/index.ts"));
module.exports = __webpack_exports__;

})();