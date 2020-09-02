webpackHotUpdate_N_E("pages/home",{

/***/ "./src/components/Feed/map.js":
/*!************************************!*\
  !*** ./src/components/Feed/map.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Map; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-map-gl */ "./node_modules/react-map-gl/dist/esm/index.js");



var _jsxFileName = "C:\\Users\\Procheta Bhattachary\\DSC_UPDATED\\dsc\\src\\components\\Feed\\map.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var TOKEN = "pk.eyJ1IjoicHJvY2hldGEiLCJhIjoiY2tlbGo2ZHd3MnFvbTJ5bHRoa2xsZ3JlNiJ9.OiOMINkM6TAiIPDtXdkzXg";
function Map() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    width: "100%",
    height: 900,
    latitude: 0,
    longitude: 0,
    zoom: 2
  }),
      viewport = _useState[0],
      setViewPort = _useState[1];

  var _onViewportChange = function _onViewportChange(viewport) {
    return setViewPort(_objectSpread(_objectSpread({}, viewport), {}, {
      transitionDuration: 3000
    }));
  };

  return __jsx("div", {
    style: {
      margin: '0 auto'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, __jsx("h1", {
    style: {
      textAlign: 'center',
      fontSize: '25px',
      fontWeight: 'bolder'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, "GeoLocator: Click To Find Your Location or click ", __jsx("a", {
    href: "/search",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 131
    }
  }, "here"), " to search for a location"), __jsx(react_map_gl__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, viewport, {
    mapboxApiAccessToken: TOKEN,
    mapStyle: "mapbox://styles/mapbox/dark-v8",
    onViewportChange: _onViewportChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }), __jsx(react_map_gl__WEBPACK_IMPORTED_MODULE_3__["GeolocateControl"], {
    positionOptions: {
      enableHighAccuracy: true
    },
    trackUserLocation: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  })));
}

_s(Map, "lf36cNTIlQg0MGkaQgvP9LQVx1M=");

_c = Map;

var _c;

$RefreshReg$(_c, "Map");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRmVlZC9tYXAuanMiXSwibmFtZXMiOlsiVE9LRU4iLCJNYXAiLCJ1c2VTdGF0ZSIsIndpZHRoIiwiaGVpZ2h0IiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJ6b29tIiwidmlld3BvcnQiLCJzZXRWaWV3UG9ydCIsIl9vblZpZXdwb3J0Q2hhbmdlIiwidHJhbnNpdGlvbkR1cmF0aW9uIiwibWFyZ2luIiwidGV4dEFsaWduIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwiZW5hYmxlSGlnaEFjY3VyYWN5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxLQUFLLEdBQUMsNEZBQVo7QUFHZSxTQUFTQyxHQUFULEdBQWM7QUFBQTs7QUFBQSxrQkFFTUMsc0RBQVEsQ0FBQztBQUN4Q0MsU0FBSyxFQUFFLE1BRGlDO0FBRXhDQyxVQUFNLEVBQUUsR0FGZ0M7QUFHeENDLFlBQVEsRUFBRSxDQUg4QjtBQUl4Q0MsYUFBUyxFQUFFLENBSjZCO0FBS3hDQyxRQUFJLEVBQUU7QUFMa0MsR0FBRCxDQUZkO0FBQUEsTUFFcEJDLFFBRm9CO0FBQUEsTUFFVkMsV0FGVTs7QUFVM0IsTUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFBRixRQUFRO0FBQUEsV0FBSUMsV0FBVyxpQ0FBS0QsUUFBTDtBQUFlRyx3QkFBa0IsRUFBRTtBQUFuQyxPQUFmO0FBQUEsR0FBbEM7O0FBRUEsU0FDRTtBQUFLLFNBQUssRUFBRTtBQUFFQyxZQUFNLEVBQUU7QUFBVixLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLFNBQUssRUFBRTtBQUFDQyxlQUFTLEVBQUUsUUFBWjtBQUFzQkMsY0FBUSxFQUFFLE1BQWhDO0FBQXdDQyxnQkFBVSxFQUFFO0FBQXBELEtBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwREFBNEg7QUFBRyxRQUFJLEVBQUMsU0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQTVILDhCQURGLEVBRUUsTUFBQyxvREFBRCx5RkFDTVAsUUFETjtBQUVFLHdCQUFvQixFQUFFUixLQUZ4QjtBQUdFLFlBQVEsRUFBQyxnQ0FIWDtBQUlFLG9CQUFnQixFQUFFVSxpQkFKcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQU1FLE1BQUMsNkRBQUQ7QUFDRSxtQkFBZSxFQUFFO0FBQUNNLHdCQUFrQixFQUFFO0FBQXJCLEtBRG5CO0FBRUUscUJBQWlCLEVBQUUsSUFGckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5GLENBRkYsQ0FERjtBQWdCRDs7R0E1QnVCZixHOztLQUFBQSxHIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2hvbWUuMmI4MWVhMmIzMTlmMjI5ZDMxYzkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBNYXBHTCwge0dlb2xvY2F0ZUNvbnRyb2wgfSBmcm9tICdyZWFjdC1tYXAtZ2wnXHJcblxyXG5jb25zdCBUT0tFTj1cInBrLmV5SjFJam9pY0hKdlkyaGxkR0VpTENKaElqb2lZMnRsYkdvMlpIZDNNbkZ2YlRKNWJIUm9hMnhzWjNKbE5pSjkuT2lPTUlOa002VEFpSVBEdFhka3pYZ1wiO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1hcCgpe1xyXG5cclxuICBjb25zdCBbdmlld3BvcnQsIHNldFZpZXdQb3J0IF0gPSB1c2VTdGF0ZSh7XHJcbiAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICBoZWlnaHQ6IDkwMCxcclxuICAgIGxhdGl0dWRlOiAwLFxyXG4gICAgbG9uZ2l0dWRlOiAwLFxyXG4gICAgem9vbTogMlxyXG4gIH0pXHJcblxyXG4gIGNvbnN0IF9vblZpZXdwb3J0Q2hhbmdlID0gdmlld3BvcnQgPT4gc2V0Vmlld1BvcnQoey4uLnZpZXdwb3J0LCB0cmFuc2l0aW9uRHVyYXRpb246IDMwMDAgfSlcclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBzdHlsZT17eyBtYXJnaW46ICcwIGF1dG8nfX0+XHJcbiAgICAgIDxoMSBzdHlsZT17e3RleHRBbGlnbjogJ2NlbnRlcicsIGZvbnRTaXplOiAnMjVweCcsIGZvbnRXZWlnaHQ6ICdib2xkZXInIH19Pkdlb0xvY2F0b3I6IENsaWNrIFRvIEZpbmQgWW91ciBMb2NhdGlvbiBvciBjbGljayA8YSBocmVmPVwiL3NlYXJjaFwiPmhlcmU8L2E+IHRvIHNlYXJjaCBmb3IgYSBsb2NhdGlvbjwvaDE+XHJcbiAgICAgIDxNYXBHTFxyXG4gICAgICAgIHsuLi52aWV3cG9ydH1cclxuICAgICAgICBtYXBib3hBcGlBY2Nlc3NUb2tlbj17VE9LRU59XHJcbiAgICAgICAgbWFwU3R5bGU9XCJtYXBib3g6Ly9zdHlsZXMvbWFwYm94L2RhcmstdjhcIlxyXG4gICAgICAgIG9uVmlld3BvcnRDaGFuZ2U9e19vblZpZXdwb3J0Q2hhbmdlfVxyXG4gICAgICA+XHJcbiAgICAgICAgPEdlb2xvY2F0ZUNvbnRyb2xcclxuICAgICAgICAgIHBvc2l0aW9uT3B0aW9ucz17e2VuYWJsZUhpZ2hBY2N1cmFjeTogdHJ1ZX19XHJcbiAgICAgICAgICB0cmFja1VzZXJMb2NhdGlvbj17dHJ1ZX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L01hcEdMPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==