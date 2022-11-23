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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _config_bdConection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../config/bdConection */ \"(api)/./config/bdConection.ts\");\nconst bcryptjs = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n\nasync function handler(req, res) {\n    const hashThing = (password)=>{\n        return bcryptjs.hashSync(password, 8);\n    };\n    const guardarDatos = async (req, res)=>{\n        const { nombre , ap_materno , ap_paterno , correo , contrasena , aprendizaje  } = req.body;\n        const hash = hashThing(contrasena);\n        const correosbd = await _config_bdConection__WEBPACK_IMPORTED_MODULE_0__.pool.query(\"SELECT cor_cue FROM cuenta WHERE cor_cue = ?\", [\n            correo\n        ]);\n        console.log(correosbd);\n        console.log(correo);\n        if (correosbd == null) {\n            try {\n                // some await stuff here\n                res.redirect(307, \"/Signin\");\n            } catch (err) {\n                res.status(500).send({\n                    error: \"Error while fetching data\"\n                });\n            }\n        } else {\n            try {\n                // some await stuff here\n                res.redirect(307, \"/\");\n            } catch (err1) {\n                res.status(500).send({\n                    error: \"Error while fetching data\"\n                });\n            }\n        }\n    };\n    const consultarDatos = async (req, res)=>{\n        const [result] = await _config_bdConection__WEBPACK_IMPORTED_MODULE_0__.pool.query(\"SELECT * FROM cuenta\");\n        console.log(result);\n        console.log(\"ptm\");\n        return res.status(200).json(\"Tomando un producto: \" + req.query.id);\n    };\n    switch(req.method){\n        case \"POST\":\n            return await guardarDatos(req, res);\n        case \"GET\":\n            return await consultarDatos(req, res);\n        case \"PUT\":\n            return res.status(200).json(\"Actualizando un producto: \" + req.query.id);\n        case \"DELETE\":\n            return res.status(200).json(\"Eliminando un producto: \" + req.query.id);\n        default:\n            return res.status(405).json(\"Method not allowed\");\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcXVlcnlzL2luZGV4LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsTUFBTUEsV0FBV0MsbUJBQU9BLENBQUM7QUFDMEI7QUFFcEMsZUFBZUUsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFFNUMsTUFBTUMsWUFBWSxDQUFDQyxXQUFZO1FBQzNCLE9BQU9QLFNBQVNRLFFBQVEsQ0FBQ0QsVUFBUztJQUN0QztJQUVBLE1BQU1FLGVBQWUsT0FBTUwsS0FBSUMsTUFBTztRQUNsQyxNQUFNLEVBQUNLLE9BQU0sRUFBQ0MsV0FBVSxFQUFDQyxXQUFVLEVBQUNDLE9BQU0sRUFBQ0MsV0FBVSxFQUFDQyxZQUFXLEVBQUMsR0FBR1gsSUFBSVksSUFBSTtRQUM3RSxNQUFNQyxPQUFPWCxVQUFVUTtRQUN2QixNQUFNSSxZQUFXLE1BQU1oQiwyREFBVSxDQUFDLGdEQUErQztZQUFDVztTQUFPO1FBQ3pGTyxRQUFRQyxHQUFHLENBQUNIO1FBQ1pFLFFBQVFDLEdBQUcsQ0FBQ1I7UUFDWixJQUFHSyxhQUFXLElBQUksRUFBQztZQUNmLElBQUk7Z0JBQ0Esd0JBQXdCO2dCQUN4QmIsSUFBSWlCLFFBQVEsQ0FBQyxLQUFLO1lBQ3RCLEVBQUUsT0FBT0MsS0FBSztnQkFDVmxCLElBQUltQixNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO29CQUFFQyxPQUFPO2dCQUE0QjtZQUM5RDtRQUNKLE9BQ0k7WUFDQSxJQUFJO2dCQUNBLHdCQUF3QjtnQkFDeEJyQixJQUFJaUIsUUFBUSxDQUFDLEtBQUs7WUFDdEIsRUFBRSxPQUFPQyxNQUFLO2dCQUNWbEIsSUFBSW1CLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7b0JBQUVDLE9BQU87Z0JBQTRCO1lBQzlEO1FBQ0osQ0FBQztJQUNMO0lBRUEsTUFBTUMsaUJBQWlCLE9BQU12QixLQUFJQyxNQUFPO1FBQ3BDLE1BQU0sQ0FBQ3VCLE9BQU8sR0FBRyxNQUFNMUIsMkRBQVUsQ0FBQztRQUNsQ2tCLFFBQVFDLEdBQUcsQ0FBQ087UUFDWlIsUUFBUUMsR0FBRyxDQUFDO1FBQ1osT0FBT2hCLElBQUltQixNQUFNLENBQUMsS0FBS0ssSUFBSSxDQUFDLDBCQUF5QnpCLElBQUllLEtBQUssQ0FBQ1csRUFBRTtJQUNyRTtJQUNBLE9BQU8xQixJQUFJMkIsTUFBTTtRQUViLEtBQUs7WUFDRCxPQUFPLE1BQU10QixhQUFhTCxLQUFJQztRQUVsQyxLQUFLO1lBQ0QsT0FBTyxNQUFNc0IsZUFBZXZCLEtBQUlDO1FBRXBDLEtBQUs7WUFDRCxPQUFPQSxJQUFJbUIsTUFBTSxDQUFDLEtBQUtLLElBQUksQ0FBQywrQkFBOEJ6QixJQUFJZSxLQUFLLENBQUNXLEVBQUU7UUFDMUUsS0FBSztZQUNELE9BQU96QixJQUFJbUIsTUFBTSxDQUFDLEtBQUtLLElBQUksQ0FBQyw2QkFBNEJ6QixJQUFJZSxLQUFLLENBQUNXLEVBQUU7UUFDeEU7WUFDSSxPQUFPekIsSUFBSW1CLE1BQU0sQ0FBQyxLQUFLSyxJQUFJLENBQUM7SUFDcEM7QUFFSixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXBwLy4vcGFnZXMvYXBpL3F1ZXJ5cy9pbmRleC50cz83ZTUyIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGJjcnlwdGpzID0gcmVxdWlyZSgnYmNyeXB0anMnKVxyXG5pbXBvcnQgeyBwb29sIH0gZnJvbSBcIi4uLy4uLy4uL2NvbmZpZy9iZENvbmVjdGlvblwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG5cclxuICAgIGNvbnN0IGhhc2hUaGluZyA9IChwYXNzd29yZCkgPT57XHJcbiAgICAgICAgcmV0dXJuIGJjcnlwdGpzLmhhc2hTeW5jKHBhc3N3b3JkLDgpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ3VhcmRhckRhdG9zID0gYXN5bmMocmVxLHJlcykgPT57XHJcbiAgICAgICAgY29uc3Qge25vbWJyZSxhcF9tYXRlcm5vLGFwX3BhdGVybm8sY29ycmVvLGNvbnRyYXNlbmEsYXByZW5kaXphamV9ID0gcmVxLmJvZHlcclxuICAgICAgICBjb25zdCBoYXNoID0gaGFzaFRoaW5nKGNvbnRyYXNlbmEpXHJcbiAgICAgICAgY29uc3QgY29ycmVvc2JkPSBhd2FpdCBwb29sLnF1ZXJ5KCdTRUxFQ1QgY29yX2N1ZSBGUk9NIGN1ZW50YSBXSEVSRSBjb3JfY3VlID0gPycsW2NvcnJlb10pXHJcbiAgICAgICAgY29uc29sZS5sb2coY29ycmVvc2JkKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGNvcnJlbylcclxuICAgICAgICBpZihjb3JyZW9zYmQ9PW51bGwpe1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgLy8gc29tZSBhd2FpdCBzdHVmZiBoZXJlXHJcbiAgICAgICAgICAgICAgICByZXMucmVkaXJlY3QoMzA3LCAnL1NpZ25pbicpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNTAwKS5zZW5kKHsgZXJyb3I6ICdFcnJvciB3aGlsZSBmZXRjaGluZyBkYXRhJyB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgLy8gc29tZSBhd2FpdCBzdHVmZiBoZXJlXHJcbiAgICAgICAgICAgICAgICByZXMucmVkaXJlY3QoMzA3LCAnLycpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNTAwKS5zZW5kKHsgZXJyb3I6ICdFcnJvciB3aGlsZSBmZXRjaGluZyBkYXRhJyB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjb25zdWx0YXJEYXRvcyA9IGFzeW5jKHJlcSxyZXMpID0+e1xyXG4gICAgICAgIGNvbnN0IFtyZXN1bHRdID0gYXdhaXQgcG9vbC5xdWVyeSgnU0VMRUNUICogRlJPTSBjdWVudGEnKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdClcclxuICAgICAgICBjb25zb2xlLmxvZyhcInB0bVwiKVxyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbignVG9tYW5kbyB1biBwcm9kdWN0bzogJysgcmVxLnF1ZXJ5LmlkKVxyXG4gICAgfVxyXG4gICAgc3dpdGNoKHJlcS5tZXRob2Qpe1xyXG5cclxuICAgICAgICBjYXNlICdQT1NUJzpcclxuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGd1YXJkYXJEYXRvcyhyZXEscmVzKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICBjYXNlICdHRVQnOlxyXG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgY29uc3VsdGFyRGF0b3MocmVxLHJlcykgXHJcbiAgICAgICAgXHJcbiAgICAgICAgY2FzZSAnUFVUJzpcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKCdBY3R1YWxpemFuZG8gdW4gcHJvZHVjdG86ICcrIHJlcS5xdWVyeS5pZClcclxuICAgICAgICBjYXNlICdERUxFVEUnOlxyXG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oJ0VsaW1pbmFuZG8gdW4gcHJvZHVjdG86ICcrIHJlcS5xdWVyeS5pZClcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDUpLmpzb24oJ01ldGhvZCBub3QgYWxsb3dlZCcpXHJcbiAgICB9XHJcbiAgICBcclxufSJdLCJuYW1lcyI6WyJiY3J5cHRqcyIsInJlcXVpcmUiLCJwb29sIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImhhc2hUaGluZyIsInBhc3N3b3JkIiwiaGFzaFN5bmMiLCJndWFyZGFyRGF0b3MiLCJub21icmUiLCJhcF9tYXRlcm5vIiwiYXBfcGF0ZXJubyIsImNvcnJlbyIsImNvbnRyYXNlbmEiLCJhcHJlbmRpemFqZSIsImJvZHkiLCJoYXNoIiwiY29ycmVvc2JkIiwicXVlcnkiLCJjb25zb2xlIiwibG9nIiwicmVkaXJlY3QiLCJlcnIiLCJzdGF0dXMiLCJzZW5kIiwiZXJyb3IiLCJjb25zdWx0YXJEYXRvcyIsInJlc3VsdCIsImpzb24iLCJpZCIsIm1ldGhvZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/querys/index.ts\n");

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