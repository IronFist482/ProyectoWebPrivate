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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _config_bdConection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../config/bdConection */ \"(api)/./config/bdConection.ts\");\nconst bcryptjs = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n\nasync function handler(req, res) {\n    const hashThing = (password)=>{\n        return bcryptjs.hashSync(password, 8);\n    };\n    const guardarDatos = async (req, res)=>{\n        const { nombre , ap_paterno , ap_materno , correo , contrasena , aprendizaje  } = req.body;\n        const [correosbd] = await _config_bdConection__WEBPACK_IMPORTED_MODULE_0__.pool.query(\"SELECT cor_cue FROM cuenta WHERE cor_cue = ?\", [\n            correo\n        ]);\n        console.log(correosbd);\n        console.log(correo);\n        const sfCorreos = JSON.stringify(correosbd);\n        console.log(sfCorreos);\n        if (sfCorreos == \"[]\") {\n            const result = await _config_bdConection__WEBPACK_IMPORTED_MODULE_0__.pool.query(\"INSERT INTO cuenta (nom_cue,apP_cue,apM_cue,cor_cue,con_cue,id_per) VALUES(?,?,?,?,?,?)\", [\n                nombre,\n                ap_paterno,\n                ap_materno,\n                correo,\n                hashThing(contrasena),\n                aprendizaje\n            ]);\n            console.log(\"Redireccion a la principal\");\n            res.redirect(307, \"/\");\n        } else {\n            console.log(\"Est\\xe1 repetido\");\n        }\n    };\n    const consultarDatos = async (req, res)=>{\n        const { correo , contrasena  } = req.body;\n        const [result] = await _config_bdConection__WEBPACK_IMPORTED_MODULE_0__.pool.query(\"SELECT * FROM cuenta\");\n        console.log(result);\n        console.log(\"ptm\");\n        return res.status(200).json(\"Tomando un producto: \" + req.query.id);\n    };\n    switch(req.method){\n        case \"POST\":\n            return await guardarDatos(req, res);\n        case \"GET\":\n            return await consultarDatos(req, res);\n        case \"PUT\":\n            return res.status(200).json(\"Actualizando un producto: \" + req.query.id);\n        case \"DELETE\":\n            return res.status(200).json(\"Eliminando un producto: \" + req.query.id);\n        default:\n            return res.status(405).json(\"Method not allowed\");\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcXVlcnlzL2luZGV4LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsTUFBTUEsV0FBV0MsbUJBQU9BLENBQUM7QUFDMEI7QUFFcEMsZUFBZUUsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFFNUMsTUFBTUMsWUFBWSxDQUFDQyxXQUFZO1FBQzNCLE9BQU9QLFNBQVNRLFFBQVEsQ0FBQ0QsVUFBUztJQUN0QztJQUVBLE1BQU1FLGVBQWUsT0FBTUwsS0FBSUMsTUFBTztRQUNsQyxNQUFNLEVBQUNLLE9BQU0sRUFBQ0MsV0FBVSxFQUFDQyxXQUFVLEVBQUNDLE9BQU0sRUFBQ0MsV0FBVSxFQUFDQyxZQUFXLEVBQUMsR0FBR1gsSUFBSVksSUFBSTtRQUM3RSxNQUFNLENBQUNDLFVBQVUsR0FBRSxNQUFNZiwyREFBVSxDQUFDLGdEQUErQztZQUFDVztTQUFPO1FBRTNGTSxRQUFRQyxHQUFHLENBQUNIO1FBQ1pFLFFBQVFDLEdBQUcsQ0FBQ1A7UUFDWixNQUFNUSxZQUFVQyxLQUFLQyxTQUFTLENBQUNOO1FBQy9CRSxRQUFRQyxHQUFHLENBQUNDO1FBQ1osSUFBR0EsYUFBVyxNQUFLO1lBQ2YsTUFBTUcsU0FBUyxNQUFNdEIsMkRBQVUsQ0FBQywyRkFBMEY7Z0JBQUNRO2dCQUFPQztnQkFBV0M7Z0JBQVdDO2dCQUFPUCxVQUFVUTtnQkFBWUM7YUFBWTtZQUVqTUksUUFBUUMsR0FBRyxDQUFDO1lBQ1pmLElBQUlvQixRQUFRLENBQUMsS0FBSztRQUN0QixPQUNJO1lBQ0FOLFFBQVFDLEdBQUcsQ0FBQztRQUNoQixDQUFDO0lBQ0w7SUFFQSxNQUFNTSxpQkFBaUIsT0FBTXRCLEtBQUlDLE1BQU87UUFDcEMsTUFBTSxFQUFDUSxPQUFNLEVBQUNDLFdBQVUsRUFBRSxHQUFHVixJQUFJWSxJQUFJO1FBQ3JDLE1BQU0sQ0FBQ1EsT0FBTyxHQUFHLE1BQU10QiwyREFBVSxDQUFDO1FBQ2xDaUIsUUFBUUMsR0FBRyxDQUFDSTtRQUNaTCxRQUFRQyxHQUFHLENBQUM7UUFDWixPQUFPZixJQUFJc0IsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQywwQkFBeUJ4QixJQUFJYyxLQUFLLENBQUNXLEVBQUU7SUFDckU7SUFDQSxPQUFPekIsSUFBSTBCLE1BQU07UUFFYixLQUFLO1lBQ0QsT0FBTyxNQUFNckIsYUFBYUwsS0FBSUM7UUFFbEMsS0FBSztZQUNELE9BQU8sTUFBTXFCLGVBQWV0QixLQUFJQztRQUVwQyxLQUFLO1lBQ0QsT0FBT0EsSUFBSXNCLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUMsK0JBQThCeEIsSUFBSWMsS0FBSyxDQUFDVyxFQUFFO1FBQzFFLEtBQUs7WUFDRCxPQUFPeEIsSUFBSXNCLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUMsNkJBQTRCeEIsSUFBSWMsS0FBSyxDQUFDVyxFQUFFO1FBQ3hFO1lBQ0ksT0FBT3hCLElBQUlzQixNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO0lBQ3BDO0FBRUosQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FwcC8uL3BhZ2VzL2FwaS9xdWVyeXMvaW5kZXgudHM/N2U1MiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBiY3J5cHRqcyA9IHJlcXVpcmUoJ2JjcnlwdGpzJylcclxuaW1wb3J0IHsgcG9vbCB9IGZyb20gXCIuLi8uLi8uLi9jb25maWcvYmRDb25lY3Rpb25cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuXHJcbiAgICBjb25zdCBoYXNoVGhpbmcgPSAocGFzc3dvcmQpID0+e1xyXG4gICAgICAgIHJldHVybiBiY3J5cHRqcy5oYXNoU3luYyhwYXNzd29yZCw4KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGd1YXJkYXJEYXRvcyA9IGFzeW5jKHJlcSxyZXMpID0+e1xyXG4gICAgICAgIGNvbnN0IHtub21icmUsYXBfcGF0ZXJubyxhcF9tYXRlcm5vLGNvcnJlbyxjb250cmFzZW5hLGFwcmVuZGl6YWplfSA9IHJlcS5ib2R5XHJcbiAgICAgICAgY29uc3QgW2NvcnJlb3NiZF09IGF3YWl0IHBvb2wucXVlcnkoJ1NFTEVDVCBjb3JfY3VlIEZST00gY3VlbnRhIFdIRVJFIGNvcl9jdWUgPSA/JyxbY29ycmVvXSlcclxuICAgICAgICBcclxuICAgICAgICBjb25zb2xlLmxvZyhjb3JyZW9zYmQpXHJcbiAgICAgICAgY29uc29sZS5sb2coY29ycmVvKVxyXG4gICAgICAgIGNvbnN0IHNmQ29ycmVvcz1KU09OLnN0cmluZ2lmeShjb3JyZW9zYmQpXHJcbiAgICAgICAgY29uc29sZS5sb2coc2ZDb3JyZW9zKVxyXG4gICAgICAgIGlmKHNmQ29ycmVvcz09J1tdJyl7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHBvb2wucXVlcnkoJ0lOU0VSVCBJTlRPIGN1ZW50YSAobm9tX2N1ZSxhcFBfY3VlLGFwTV9jdWUsY29yX2N1ZSxjb25fY3VlLGlkX3BlcikgVkFMVUVTKD8sPyw/LD8sPyw/KScsW25vbWJyZSxhcF9wYXRlcm5vLGFwX21hdGVybm8sY29ycmVvLGhhc2hUaGluZyhjb250cmFzZW5hKSxhcHJlbmRpemFqZV0pXHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUmVkaXJlY2Npb24gYSBsYSBwcmluY2lwYWwnKVxyXG4gICAgICAgICAgICByZXMucmVkaXJlY3QoMzA3LCAnLycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRXN0w6EgcmVwZXRpZG8nKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjb25zdWx0YXJEYXRvcyA9IGFzeW5jKHJlcSxyZXMpID0+e1xyXG4gICAgICAgIGNvbnN0IHtjb3JyZW8sY29udHJhc2VuYSx9ID0gcmVxLmJvZHlcclxuICAgICAgICBjb25zdCBbcmVzdWx0XSA9IGF3YWl0IHBvb2wucXVlcnkoJ1NFTEVDVCAqIEZST00gY3VlbnRhJylcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJwdG1cIilcclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oJ1RvbWFuZG8gdW4gcHJvZHVjdG86ICcrIHJlcS5xdWVyeS5pZClcclxuICAgIH1cclxuICAgIHN3aXRjaChyZXEubWV0aG9kKXtcclxuXHJcbiAgICAgICAgY2FzZSAnUE9TVCc6XHJcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBndWFyZGFyRGF0b3MocmVxLHJlcylcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgY2FzZSAnR0VUJzpcclxuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGNvbnN1bHRhckRhdG9zKHJlcSxyZXMpIFxyXG4gICAgICAgIFxyXG4gICAgICAgIGNhc2UgJ1BVVCc6XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbignQWN0dWFsaXphbmRvIHVuIHByb2R1Y3RvOiAnKyByZXEucXVlcnkuaWQpXHJcbiAgICAgICAgY2FzZSAnREVMRVRFJzpcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKCdFbGltaW5hbmRvIHVuIHByb2R1Y3RvOiAnKyByZXEucXVlcnkuaWQpXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA1KS5qc29uKCdNZXRob2Qgbm90IGFsbG93ZWQnKVxyXG4gICAgfVxyXG4gICAgXHJcbn0iXSwibmFtZXMiOlsiYmNyeXB0anMiLCJyZXF1aXJlIiwicG9vbCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJoYXNoVGhpbmciLCJwYXNzd29yZCIsImhhc2hTeW5jIiwiZ3VhcmRhckRhdG9zIiwibm9tYnJlIiwiYXBfcGF0ZXJubyIsImFwX21hdGVybm8iLCJjb3JyZW8iLCJjb250cmFzZW5hIiwiYXByZW5kaXphamUiLCJib2R5IiwiY29ycmVvc2JkIiwicXVlcnkiLCJjb25zb2xlIiwibG9nIiwic2ZDb3JyZW9zIiwiSlNPTiIsInN0cmluZ2lmeSIsInJlc3VsdCIsInJlZGlyZWN0IiwiY29uc3VsdGFyRGF0b3MiLCJzdGF0dXMiLCJqc29uIiwiaWQiLCJtZXRob2QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/querys/index.ts\n");

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