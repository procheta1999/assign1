webpackHotUpdate_N_E("pages/home",{

/***/ "./pages/home.js":
/*!***********************!*\
  !*** ./pages/home.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_components_Feed_feed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/Feed/feed */ "./src/components/Feed/feed.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/firebase */ "./src/firebase/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var _jsxFileName = "C:\\Users\\Procheta Bhattachary\\DSC_UPDATED\\dsc\\pages\\home.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






function HomePage() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_src_firebase__WEBPACK_IMPORTED_MODULE_4__["FirebaseContext"]),
      user = _useContext.user,
      firebase = _useContext.firebase;

  if (!user) {
    router.push('/signin');
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("center", {
    className: "jsx-1833542653",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    varaint: "h1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  }, "Dashboard")), __jsx(_src_components_Feed_feed__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1833542653",
    __self: this
  }, "html,body{padding:0;margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto, Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue, sans-serif;}*{box-sizing:border-box;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcUHJvY2hldGEgQmhhdHRhY2hhcnlcXERTQ19VUERBVEVEXFxkc2NcXHBhZ2VzXFxob21lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFCeUIsQUFJcUIsQUFPWSxVQU5iLFNBR0csR0FJZCxtSUFIQSIsImZpbGUiOiJDOlxcVXNlcnNcXFByb2NoZXRhIEJoYXR0YWNoYXJ5XFxEU0NfVVBEQVRFRFxcZHNjXFxwYWdlc1xcaG9tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBTY3JvbGxhYmxlVGFic0J1dHRvbkF1dG8gZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvRmVlZC9mZWVkJ1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IEZpcmViYXNlQ29udGV4dCB9IGZyb20gXCIuLi9zcmMvZmlyZWJhc2VcIjtcclxuaW1wb3J0IHsgVHlwb2dyYXBoeSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5cclxuZnVuY3Rpb24gSG9tZVBhZ2UgKCkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3QgeyB1c2VyLCBmaXJlYmFzZSB9ID0gdXNlQ29udGV4dChGaXJlYmFzZUNvbnRleHQpOyBcclxuICBcclxuICBpZighdXNlcil7XHJcbiAgICByb3V0ZXIucHVzaCgnL3NpZ25pbicpXHJcbiAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICA8Y2VudGVyPjxUeXBvZ3JhcGh5IHZhcmFpbnQ9XCJoMVwiPkRhc2hib2FyZDwvVHlwb2dyYXBoeT48L2NlbnRlcj5cclxuICAgICAgICA8U2Nyb2xsYWJsZVRhYnNCdXR0b25BdXRvIC8+XHJcblxyXG4gICAgICAgICAgXHJcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgaHRtbCxcclxuICAgICAgICBib2R5IHtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBTZWdvZSBVSSwgUm9ib3RvLFxyXG4gICAgICAgICAgICBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBGaXJhIFNhbnMsIERyb2lkIFNhbnMsIEhlbHZldGljYSBOZXVlLFxyXG4gICAgICAgICAgICBzYW5zLXNlcmlmO1xyXG4gICAgICAgIH1cclxuICAgICAgICAqIHtcclxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlOyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\Procheta Bhattachary\\\\DSC_UPDATED\\\\dsc\\\\pages\\\\home.js */"));
}

_s(HomePage, "LxR4tpE2XZRcOggn3Fea5SHEJNE=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
});

_c = HomePage;
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

var _c;

$RefreshReg$(_c, "HomePage");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaG9tZS5qcyJdLCJuYW1lcyI6WyJIb21lUGFnZSIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUNvbnRleHQiLCJGaXJlYmFzZUNvbnRleHQiLCJ1c2VyIiwiZmlyZWJhc2UiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxRQUFULEdBQXFCO0FBQUE7O0FBQ25CLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRG1CLG9CQUVRQyx3REFBVSxDQUFDQyw2REFBRCxDQUZsQjtBQUFBLE1BRVhDLElBRlcsZUFFWEEsSUFGVztBQUFBLE1BRUxDLFFBRkssZUFFTEEsUUFGSzs7QUFJbkIsTUFBRyxDQUFDRCxJQUFKLEVBQVM7QUFDUEosVUFBTSxDQUFDTSxJQUFQLENBQVksU0FBWjtBQUNEOztBQUdDLFNBQ0ksbUVBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVEsTUFBQyw0REFBRDtBQUFZLFdBQU8sRUFBQyxJQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFSLENBREEsRUFFQSxNQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGQTtBQUFBO0FBQUE7QUFBQSwrbUVBREo7QUFxQkg7O0dBOUJRUCxRO1VBQ1FFLHFEOzs7S0FEUkYsUTtBQWlDTUEsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaG9tZS5kN2FmOWJlZWUxNDEwYzg5N2UzYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFNjcm9sbGFibGVUYWJzQnV0dG9uQXV0byBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9GZWVkL2ZlZWQnXHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRmlyZWJhc2VDb250ZXh0IH0gZnJvbSBcIi4uL3NyYy9maXJlYmFzZVwiO1xyXG5pbXBvcnQgeyBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcblxyXG5mdW5jdGlvbiBIb21lUGFnZSAoKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCB7IHVzZXIsIGZpcmViYXNlIH0gPSB1c2VDb250ZXh0KEZpcmViYXNlQ29udGV4dCk7IFxyXG4gIFxyXG4gIGlmKCF1c2VyKXtcclxuICAgIHJvdXRlci5wdXNoKCcvc2lnbmluJylcclxuICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgIDxjZW50ZXI+PFR5cG9ncmFwaHkgdmFyYWludD1cImgxXCI+RGFzaGJvYXJkPC9UeXBvZ3JhcGh5PjwvY2VudGVyPlxyXG4gICAgICAgIDxTY3JvbGxhYmxlVGFic0J1dHRvbkF1dG8gLz5cclxuXHJcbiAgICAgICAgICBcclxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICBodG1sLFxyXG4gICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFNlZ29lIFVJLCBSb2JvdG8sXHJcbiAgICAgICAgICAgIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIEZpcmEgU2FucywgRHJvaWQgU2FucywgSGVsdmV0aWNhIE5ldWUsXHJcbiAgICAgICAgICAgIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICoge1xyXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7Il0sInNvdXJjZVJvb3QiOiIifQ==