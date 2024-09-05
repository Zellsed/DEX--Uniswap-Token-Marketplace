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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/merge */ \"lodash/merge\");\n/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"@rainbow-me/rainbowkit\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi/providers/alchemy */ \"wagmi/providers/alchemy\");\n/* harmony import */ var wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var wagmi_providers_infura__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! wagmi/providers/infura */ \"wagmi/providers/infura\");\n/* harmony import */ var wagmi_providers_infura__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(wagmi_providers_infura__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var wagmi_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! wagmi/providers/jsonRpc */ \"wagmi/providers/jsonRpc\");\n/* harmony import */ var wagmi_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(wagmi_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_7__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__]);\n_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\n\n\nconst ethereumHolesky = {\n    id: 17000,\n    name: \"Ethereum Holesky\",\n    network: \"ethereum\",\n    nativeCurrency: {\n        name: \"ETH\",\n        symbol: \"ETH\",\n        decimals: 18\n    },\n    rpcUrls: {\n        default: \"https://holesky.infura.io/v3/9c481e1168e54cd39869bd50daa755bd\"\n    },\n    blockExplorers: {\n        default: {\n            name: \"Etherscan\",\n            url: \"https://etherscan.io\"\n        }\n    }\n};\nconst { chains , provider  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.configureChains)([\n    ethereumHolesky\n], [\n    (0,wagmi_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_7__.jsonRpcProvider)({\n        rpc: (chain)=>{\n            if (chain.id === 17000) {\n                return {\n                    http: \"https://holesky.infura.io/v3/9c481e1168e54cd39869bd50daa755bd\"\n                };\n            }\n            return null;\n        }\n    }), \n]);\nconst { connectors  } = (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__.getDefaultWallets)({\n    appName: \"Custom Dex\",\n    chains\n});\nconst wagmiClient = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.createClient)({\n    autoConnect: true,\n    connectors,\n    provider\n});\nconst myTheme = lodash_merge__WEBPACK_IMPORTED_MODULE_2___default()((0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__.midnightTheme)(), {\n    colors: {\n        accentColor: \"#18181b\",\n        accentColorForeground: \"#fff\"\n    }\n});\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_4__.WagmiConfig, {\n        client: wagmiClient,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__.RainbowKitProvider, {\n            chains: chains,\n            theme: myTheme,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ADMIN\\\\Documents\\\\Coursera\\\\Blockchain\\\\dapp\\\\uniswap-tokem-marketplace-starter-file\\\\pages\\\\_app.js\",\n                lineNumber: 76,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\ADMIN\\\\Documents\\\\Coursera\\\\Blockchain\\\\dapp\\\\uniswap-tokem-marketplace-starter-file\\\\pages\\\\_app.js\",\n            lineNumber: 75,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ADMIN\\\\Documents\\\\Coursera\\\\Blockchain\\\\dapp\\\\uniswap-tokem-marketplace-starter-file\\\\pages\\\\_app.js\",\n        lineNumber: 74,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUErQjtBQUVFO0FBQ1U7QUFPWDtBQUUwQztBQUNoQjtBQUNGO0FBQ0U7QUFFMUQsTUFBTVksZUFBZSxHQUFHO0lBQ3RCQyxFQUFFLEVBQUUsS0FBSztJQUNUQyxJQUFJLEVBQUUsa0JBQWtCO0lBQ3hCQyxPQUFPLEVBQUUsVUFBVTtJQUNuQkMsY0FBYyxFQUFFO1FBQ2RGLElBQUksRUFBRSxLQUFLO1FBQ1hHLE1BQU0sRUFBRSxLQUFLO1FBQ2JDLFFBQVEsRUFBRSxFQUFFO0tBQ2I7SUFDREMsT0FBTyxFQUFFO1FBQ1BDLE9BQU8sRUFBRSwrREFBK0Q7S0FDekU7SUFDREMsY0FBYyxFQUFFO1FBQ2RELE9BQU8sRUFBRTtZQUNQTixJQUFJLEVBQUUsV0FBVztZQUNqQlEsR0FBRyxFQUFFLHNCQUFzQjtTQUM1QjtLQUNGO0NBQ0Y7QUFFRCxNQUFNLEVBQUVDLE1BQU0sR0FBRUMsUUFBUSxHQUFFLEdBQUdsQixzREFBZSxDQUMxQztJQUFDTSxlQUFlO0NBQUMsRUFDakI7SUFDRUQsd0VBQWUsQ0FBQztRQUNkYyxHQUFHLEVBQUUsQ0FBQ3BCLEtBQUssR0FBSztZQUNkLElBQUlBLEtBQUssQ0FBQ1EsRUFBRSxLQUFLLEtBQUssRUFBRTtnQkFDdEIsT0FBTztvQkFDTGEsSUFBSSxFQUFFLCtEQUErRDtpQkFDdEUsQ0FBQzthQUNIO1lBQ0QsT0FBTyxJQUFJLENBQUM7U0FDYjtLQUNGLENBQUM7Q0FDSCxDQUNGO0FBRUQsTUFBTSxFQUFFQyxVQUFVLEdBQUUsR0FBRzFCLHlFQUFpQixDQUFDO0lBQ3ZDMkIsT0FBTyxFQUFFLFlBQVk7SUFDckJMLE1BQU07Q0FDUCxDQUFDO0FBRUYsTUFBTU0sV0FBVyxHQUFHdEIsbURBQVksQ0FBQztJQUMvQnVCLFdBQVcsRUFBRSxJQUFJO0lBQ2pCSCxVQUFVO0lBQ1ZILFFBQVE7Q0FDVCxDQUFDO0FBRUYsTUFBTU8sT0FBTyxHQUFHL0IsbURBQUssQ0FBQ0kscUVBQWEsRUFBRSxFQUFFO0lBQ3JDNEIsTUFBTSxFQUFFO1FBQ05DLFdBQVcsRUFBRSxTQUFTO1FBQ3RCQyxxQkFBcUIsRUFBRSxNQUFNO0tBQzlCO0NBQ0YsQ0FBQztBQUVGLFNBQVNDLEtBQUssQ0FBQyxFQUFFQyxTQUFTLEdBQUVDLFNBQVMsR0FBRSxFQUFFO0lBQ3ZDLHFCQUNFLDhEQUFDN0IsOENBQVc7UUFBQzhCLE1BQU0sRUFBRVQsV0FBVztrQkFDOUIsNEVBQUMzQixzRUFBa0I7WUFBQ3FCLE1BQU0sRUFBRUEsTUFBTTtZQUFFZ0IsS0FBSyxFQUFFUixPQUFPO3NCQUNoRCw0RUFBQ0ssU0FBUztnQkFBRSxHQUFHQyxTQUFTOzs7OztvQkFBSTs7Ozs7Z0JBQ1Q7Ozs7O1lBQ1QsQ0FDZDtDQUNIO0FBRUQsaUVBQWVGLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3VuaXN3YXAtdG9rZW4tbWFya2V0cGxhY2UvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XHJcblxyXG5pbXBvcnQgbWVyZ2UgZnJvbSBcImxvZGFzaC9tZXJnZVwiO1xyXG5pbXBvcnQgXCJAcmFpbmJvdy1tZS9yYWluYm93a2l0L3N0eWxlcy5jc3NcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgZ2V0RGVmYXVsdFdhbGxldHMsXHJcbiAgUmFpbmJvd0tpdFByb3ZpZGVyLFxyXG4gIGRhcmtUaGVtZSxcclxuICBtaWRuaWdodFRoZW1lLFxyXG59IGZyb20gXCJAcmFpbmJvdy1tZS9yYWluYm93a2l0XCI7XHJcblxyXG5pbXBvcnQgeyBjaGFpbiwgY29uZmlndXJlQ2hhaW5zLCBjcmVhdGVDbGllbnQsIFdhZ21pQ29uZmlnIH0gZnJvbSBcIndhZ21pXCI7XHJcbmltcG9ydCB7IGFsY2hlbXlQcm92aWRlciB9IGZyb20gXCJ3YWdtaS9wcm92aWRlcnMvYWxjaGVteVwiO1xyXG5pbXBvcnQgeyBpbmZ1cmFQcm92aWRlciB9IGZyb20gXCJ3YWdtaS9wcm92aWRlcnMvaW5mdXJhXCI7XHJcbmltcG9ydCB7IGpzb25ScGNQcm92aWRlciB9IGZyb20gXCJ3YWdtaS9wcm92aWRlcnMvanNvblJwY1wiO1xyXG5cclxuY29uc3QgZXRoZXJldW1Ib2xlc2t5ID0ge1xyXG4gIGlkOiAxNzAwMCxcclxuICBuYW1lOiBcIkV0aGVyZXVtIEhvbGVza3lcIixcclxuICBuZXR3b3JrOiBcImV0aGVyZXVtXCIsXHJcbiAgbmF0aXZlQ3VycmVuY3k6IHtcclxuICAgIG5hbWU6IFwiRVRIXCIsXHJcbiAgICBzeW1ib2w6IFwiRVRIXCIsXHJcbiAgICBkZWNpbWFsczogMTgsXHJcbiAgfSxcclxuICBycGNVcmxzOiB7XHJcbiAgICBkZWZhdWx0OiBcImh0dHBzOi8vaG9sZXNreS5pbmZ1cmEuaW8vdjMvOWM0ODFlMTE2OGU1NGNkMzk4NjliZDUwZGFhNzU1YmRcIixcclxuICB9LFxyXG4gIGJsb2NrRXhwbG9yZXJzOiB7XHJcbiAgICBkZWZhdWx0OiB7XHJcbiAgICAgIG5hbWU6IFwiRXRoZXJzY2FuXCIsXHJcbiAgICAgIHVybDogXCJodHRwczovL2V0aGVyc2Nhbi5pb1wiLFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG5cclxuY29uc3QgeyBjaGFpbnMsIHByb3ZpZGVyIH0gPSBjb25maWd1cmVDaGFpbnMoXHJcbiAgW2V0aGVyZXVtSG9sZXNreV0sXHJcbiAgW1xyXG4gICAganNvblJwY1Byb3ZpZGVyKHtcclxuICAgICAgcnBjOiAoY2hhaW4pID0+IHtcclxuICAgICAgICBpZiAoY2hhaW4uaWQgPT09IDE3MDAwKSB7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBodHRwOiBcImh0dHBzOi8vaG9sZXNreS5pbmZ1cmEuaW8vdjMvOWM0ODFlMTE2OGU1NGNkMzk4NjliZDUwZGFhNzU1YmRcIixcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9LFxyXG4gICAgfSksXHJcbiAgXVxyXG4pO1xyXG5cclxuY29uc3QgeyBjb25uZWN0b3JzIH0gPSBnZXREZWZhdWx0V2FsbGV0cyh7XHJcbiAgYXBwTmFtZTogXCJDdXN0b20gRGV4XCIsXHJcbiAgY2hhaW5zLFxyXG59KTtcclxuXHJcbmNvbnN0IHdhZ21pQ2xpZW50ID0gY3JlYXRlQ2xpZW50KHtcclxuICBhdXRvQ29ubmVjdDogdHJ1ZSxcclxuICBjb25uZWN0b3JzLFxyXG4gIHByb3ZpZGVyLFxyXG59KTtcclxuXHJcbmNvbnN0IG15VGhlbWUgPSBtZXJnZShtaWRuaWdodFRoZW1lKCksIHtcclxuICBjb2xvcnM6IHtcclxuICAgIGFjY2VudENvbG9yOiBcIiMxODE4MWJcIixcclxuICAgIGFjY2VudENvbG9yRm9yZWdyb3VuZDogXCIjZmZmXCIsXHJcbiAgfSxcclxufSk7XHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPFdhZ21pQ29uZmlnIGNsaWVudD17d2FnbWlDbGllbnR9PlxyXG4gICAgICA8UmFpbmJvd0tpdFByb3ZpZGVyIGNoYWlucz17Y2hhaW5zfSB0aGVtZT17bXlUaGVtZX0+XHJcbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICA8L1JhaW5ib3dLaXRQcm92aWRlcj5cclxuICAgIDwvV2FnbWlDb25maWc+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XHJcbiJdLCJuYW1lcyI6WyJtZXJnZSIsImdldERlZmF1bHRXYWxsZXRzIiwiUmFpbmJvd0tpdFByb3ZpZGVyIiwiZGFya1RoZW1lIiwibWlkbmlnaHRUaGVtZSIsImNoYWluIiwiY29uZmlndXJlQ2hhaW5zIiwiY3JlYXRlQ2xpZW50IiwiV2FnbWlDb25maWciLCJhbGNoZW15UHJvdmlkZXIiLCJpbmZ1cmFQcm92aWRlciIsImpzb25ScGNQcm92aWRlciIsImV0aGVyZXVtSG9sZXNreSIsImlkIiwibmFtZSIsIm5ldHdvcmsiLCJuYXRpdmVDdXJyZW5jeSIsInN5bWJvbCIsImRlY2ltYWxzIiwicnBjVXJscyIsImRlZmF1bHQiLCJibG9ja0V4cGxvcmVycyIsInVybCIsImNoYWlucyIsInByb3ZpZGVyIiwicnBjIiwiaHR0cCIsImNvbm5lY3RvcnMiLCJhcHBOYW1lIiwid2FnbWlDbGllbnQiLCJhdXRvQ29ubmVjdCIsIm15VGhlbWUiLCJjb2xvcnMiLCJhY2NlbnRDb2xvciIsImFjY2VudENvbG9yRm9yZWdyb3VuZCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiY2xpZW50IiwidGhlbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "lodash/merge":
/*!*******************************!*\
  !*** external "lodash/merge" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash/merge");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "wagmi":
/*!************************!*\
  !*** external "wagmi" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("wagmi");

/***/ }),

/***/ "wagmi/providers/alchemy":
/*!******************************************!*\
  !*** external "wagmi/providers/alchemy" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("wagmi/providers/alchemy");

/***/ }),

/***/ "wagmi/providers/infura":
/*!*****************************************!*\
  !*** external "wagmi/providers/infura" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("wagmi/providers/infura");

/***/ }),

/***/ "wagmi/providers/jsonRpc":
/*!******************************************!*\
  !*** external "wagmi/providers/jsonRpc" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("wagmi/providers/jsonRpc");

/***/ }),

/***/ "@rainbow-me/rainbowkit":
/*!*****************************************!*\
  !*** external "@rainbow-me/rainbowkit" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@rainbow-me/rainbowkit");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();