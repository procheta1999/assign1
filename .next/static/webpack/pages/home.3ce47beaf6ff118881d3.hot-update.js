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
    mapStyle: "mapbox://styles/mapbox/light-v8",
    onViewportChange: _onViewportChange,
    height: "50%",
    width: "50%",
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
      lineNumber: 30,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRmVlZC9tYXAuanMiXSwibmFtZXMiOlsiVE9LRU4iLCJNYXAiLCJ1c2VTdGF0ZSIsIndpZHRoIiwiaGVpZ2h0IiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJ6b29tIiwidmlld3BvcnQiLCJzZXRWaWV3UG9ydCIsIl9vblZpZXdwb3J0Q2hhbmdlIiwidHJhbnNpdGlvbkR1cmF0aW9uIiwibWFyZ2luIiwidGV4dEFsaWduIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwiZW5hYmxlSGlnaEFjY3VyYWN5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxLQUFLLEdBQUMsNEZBQVo7QUFHZSxTQUFTQyxHQUFULEdBQWM7QUFBQTs7QUFBQSxrQkFFTUMsc0RBQVEsQ0FBQztBQUN4Q0MsU0FBSyxFQUFFLE1BRGlDO0FBRXhDQyxVQUFNLEVBQUUsR0FGZ0M7QUFHeENDLFlBQVEsRUFBRSxDQUg4QjtBQUl4Q0MsYUFBUyxFQUFFLENBSjZCO0FBS3hDQyxRQUFJLEVBQUU7QUFMa0MsR0FBRCxDQUZkO0FBQUEsTUFFcEJDLFFBRm9CO0FBQUEsTUFFVkMsV0FGVTs7QUFVM0IsTUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFBRixRQUFRO0FBQUEsV0FBSUMsV0FBVyxpQ0FBS0QsUUFBTDtBQUFlRyx3QkFBa0IsRUFBRTtBQUFuQyxPQUFmO0FBQUEsR0FBbEM7O0FBRUEsU0FDRTtBQUFLLFNBQUssRUFBRTtBQUFFQyxZQUFNLEVBQUU7QUFBVixLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLFNBQUssRUFBRTtBQUFDQyxlQUFTLEVBQUUsUUFBWjtBQUFzQkMsY0FBUSxFQUFFLE1BQWhDO0FBQXdDQyxnQkFBVSxFQUFFO0FBQXBELEtBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwREFBNEg7QUFBRyxRQUFJLEVBQUMsU0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQTVILDhCQURGLEVBRUUsTUFBQyxvREFBRCx5RkFDTVAsUUFETjtBQUVFLHdCQUFvQixFQUFFUixLQUZ4QjtBQUdFLFlBQVEsRUFBQyxpQ0FIWDtBQUlFLG9CQUFnQixFQUFFVSxpQkFKcEI7QUFLRSxVQUFNLEVBQUMsS0FMVDtBQU1FLFNBQUssRUFBQyxLQU5SO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFRRSxNQUFDLDZEQUFEO0FBQ0UsbUJBQWUsRUFBRTtBQUFDTSx3QkFBa0IsRUFBRTtBQUFyQixLQURuQjtBQUVFLHFCQUFpQixFQUFFLElBRnJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSRixDQUZGLENBREY7QUFrQkQ7O0dBOUJ1QmYsRzs7S0FBQUEsRyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ob21lLjNjZTQ3YmVhZjZmZjExODg4MWQzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QseyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTWFwR0wsIHtHZW9sb2NhdGVDb250cm9sIH0gZnJvbSAncmVhY3QtbWFwLWdsJ1xyXG5cclxuY29uc3QgVE9LRU49XCJway5leUoxSWpvaWNISnZZMmhsZEdFaUxDSmhJam9pWTJ0bGJHbzJaSGQzTW5GdmJUSjViSFJvYTJ4c1ozSmxOaUo5Lk9pT01JTmtNNlRBaUlQRHRYZGt6WGdcIjtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYXAoKXtcclxuXHJcbiAgY29uc3QgW3ZpZXdwb3J0LCBzZXRWaWV3UG9ydCBdID0gdXNlU3RhdGUoe1xyXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgaGVpZ2h0OiA5MDAsXHJcbiAgICBsYXRpdHVkZTogMCxcclxuICAgIGxvbmdpdHVkZTogMCxcclxuICAgIHpvb206IDJcclxuICB9KVxyXG5cclxuICBjb25zdCBfb25WaWV3cG9ydENoYW5nZSA9IHZpZXdwb3J0ID0+IHNldFZpZXdQb3J0KHsuLi52aWV3cG9ydCwgdHJhbnNpdGlvbkR1cmF0aW9uOiAzMDAwIH0pXHJcbiAgXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiAnMCBhdXRvJ319PlxyXG4gICAgICA8aDEgc3R5bGU9e3t0ZXh0QWxpZ246ICdjZW50ZXInLCBmb250U2l6ZTogJzI1cHgnLCBmb250V2VpZ2h0OiAnYm9sZGVyJyB9fT5HZW9Mb2NhdG9yOiBDbGljayBUbyBGaW5kIFlvdXIgTG9jYXRpb24gb3IgY2xpY2sgPGEgaHJlZj1cIi9zZWFyY2hcIj5oZXJlPC9hPiB0byBzZWFyY2ggZm9yIGEgbG9jYXRpb248L2gxPlxyXG4gICAgICA8TWFwR0xcclxuICAgICAgICB7Li4udmlld3BvcnR9XHJcbiAgICAgICAgbWFwYm94QXBpQWNjZXNzVG9rZW49e1RPS0VOfVxyXG4gICAgICAgIG1hcFN0eWxlPVwibWFwYm94Oi8vc3R5bGVzL21hcGJveC9saWdodC12OFwiXHJcbiAgICAgICAgb25WaWV3cG9ydENoYW5nZT17X29uVmlld3BvcnRDaGFuZ2V9XHJcbiAgICAgICAgaGVpZ2h0PVwiNTAlXCJcclxuICAgICAgICB3aWR0aD1cIjUwJVwiXHJcbiAgICAgID5cclxuICAgICAgICA8R2VvbG9jYXRlQ29udHJvbFxyXG4gICAgICAgICAgcG9zaXRpb25PcHRpb25zPXt7ZW5hYmxlSGlnaEFjY3VyYWN5OiB0cnVlfX1cclxuICAgICAgICAgIHRyYWNrVXNlckxvY2F0aW9uPXt0cnVlfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvTWFwR0w+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9