webpackHotUpdate_N_E("pages/home",{

/***/ "./pages/signin.js":
/*!*************************!*\
  !*** ./pages/signin.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _signup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup */ "./pages/signup.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./index */ "./pages/index.js");
/* harmony import */ var _src_components_Auth_useFormValidation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../src/components/Auth/useFormValidation */ "./src/components/Auth/useFormValidation.js");
/* harmony import */ var _src_components_Auth_validateLogin__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../src/components/Auth/validateLogin */ "./src/components/Auth/validateLogin.js");
/* harmony import */ var _src_firebase__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../src/firebase */ "./src/firebase/index.js");




var _this = undefined,
    _jsxFileName = "C:\\Users\\Procheta Bhattachary\\DSC_UPDATED\\dsc\\pages\\signin.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;









var INITIAL_STATE = {
  email: "",
  password: ""
};

var SignIn = function SignIn() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();

  var _useFormValidation = Object(_src_components_Auth_useFormValidation__WEBPACK_IMPORTED_MODULE_10__["default"])(INITIAL_STATE, _src_components_Auth_validateLogin__WEBPACK_IMPORTED_MODULE_11__["default"], authenticateUser),
      handleSubmit = _useFormValidation.handleSubmit,
      handleBlur = _useFormValidation.handleBlur,
      handleChange = _useFormValidation.handleChange,
      values = _useFormValidation.values,
      errors = _useFormValidation.errors,
      isSubmitting = _useFormValidation.isSubmitting;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(null),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState, 2),
      firebaseError = _React$useState2[0],
      setFirebaseError = _React$useState2[1];

  function authenticateUser() {
    return _authenticateUser.apply(this, arguments);
  }

  function _authenticateUser() {
    _authenticateUser = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var name, email, password;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              name = values.name, email = values.email, password = values.password;
              _context.prev = 1;
              _context.next = 4;
              return _src_firebase__WEBPACK_IMPORTED_MODULE_12__["default"].login(email, password);

            case 4:
              router.push("/home");
              _context.next = 11;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](1);
              console.error("Authentication Error", _context.t0);
              setFirebaseError(_context.t0.message);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 7]]);
    }));
    return _authenticateUser.apply(this, arguments);
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, __jsx("meta", {
    charset: "UTF-8",
    className: "jsx-2774546882",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=0.8",
    className: "jsx-2774546882",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }), __jsx("title", {
    className: "jsx-2774546882",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, "Log In"), __jsx("link", {
    rel: "icon",
    href: "https://raw.githubusercontent.com/procheta1999/DSC-NSEC-Blogs/master/public/favicon.ico",
    className: "jsx-2774546882",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  })), __jsx("main", {
    className: "jsx-2774546882",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }, __jsx("h1", {
    className: "jsx-2774546882" + " " + "title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, __jsx("center", {
    className: "jsx-2774546882",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "https://github.com/procheta1999/DSC-NSEC-Blogs/blob/master/public/dsc.png?raw=true",
    alt: "dsc Logo",
    className: "jsx-2774546882" + " " + "logo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 19
    }
  })), __jsx("center", {
    className: "jsx-2774546882",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 8
    }
  }, "     DSC NSEC BLOGS-", __jsx("i", {
    id: "s",
    className: "jsx-2774546882",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 36
    }
  }, "Write Your Own Story!"))), __jsx("br", {
    className: "jsx-2774546882",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }), __jsx("center", {
    className: "jsx-2774546882",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }, __jsx("h1", {
    className: "jsx-2774546882",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 11
    }
  }, "Log In To Start Your Journey Today!")), __jsx("center", {
    className: "jsx-2774546882",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "https://media.giphy.com/media/1O2BRZcDgIfDsKMTbG/giphy.gif",
    className: "jsx-2774546882",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 11
    }
  })), __jsx("center", {
    className: "jsx-2774546882",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, __jsx("form", {
    onSubmit: handleSubmit,
    className: "jsx-2774546882",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-2774546882" + " " + "grid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-2774546882" + " " + "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 15
    }
  }, "Email:", __jsx("input", {
    onChange: handleChange,
    value: values.email,
    type: "email",
    placeholder: "someone@example.com",
    name: "email",
    onBlur: handleBlur,
    className: "jsx-2774546882",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 17
    }
  }), errors.email && __jsx("p", {
    className: "jsx-2774546882" + " " + "error-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 26
    }
  }, errors.email), __jsx("br", {
    className: "jsx-2774546882",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 17
    }
  }), __jsx("br", {
    className: "jsx-2774546882",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 17
    }
  }), "Password:", __jsx("input", {
    onChange: handleChange,
    value: values.password,
    type: "password",
    placeholder: "Password",
    name: "password",
    onBlur: handleBlur,
    className: "jsx-2774546882",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 17
    }
  }), errors.password && __jsx("p", {
    className: "jsx-2774546882" + " " + "error-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 37
    }
  }, errors.password), firebaseError && __jsx("p", {
    className: "jsx-2774546882" + " " + "error-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 35
    }
  }, firebaseError), __jsx("br", {
    className: "jsx-2774546882",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 17
    }
  }), __jsx("center", {
    className: "jsx-2774546882",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 17
    }
  }, __jsx("button", {
    type: "submit",
    disabled: isSubmitting,
    className: "jsx-2774546882",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 19
    }
  }, "Sign In")), __jsx("br", {
    className: "jsx-2774546882",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 17
    }
  }), __jsx("br", {
    className: "jsx-2774546882",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 17
    }
  }), __jsx("center", {
    className: "jsx-2774546882",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 17
    }
  }, __jsx(_signup__WEBPACK_IMPORTED_MODULE_6__["SignUpLink"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 19
    }
  })), __jsx("br", {
    className: "jsx-2774546882",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 17
    }
  }), __jsx("center", {
    className: "jsx-2774546882",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 17
    }
  }, __jsx("button", {
    variant: "contained",
    color: "primary",
    type: "submit",
    style: {
      marginTop: "20px",
      width: "200px"
    },
    className: "jsx-2774546882",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 19
    }
  }))))))), __jsx("footer", {
    className: "jsx-2774546882",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 7
    }
  }, __jsx("a", {
    href: "https://dscnsec.com/",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "jsx-2774546882",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "https://github.com/procheta1999/DSC-NSEC-Blogs/blob/master/public/dsc.png?raw=true",
    alt: "DSC Logo",
    className: "jsx-2774546882" + " " + "logo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 11
    }
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "3159042432",
    __self: _this
  }, "footer.jsx-2774546882{width:100%;height:100px;border-top:1px solid #eaeaea;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}footer.jsx-2774546882 img.jsx-2774546882{margin-left:0.5rem;}footer.jsx-2774546882 a.jsx-2774546882{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.grid.jsx-2774546882{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;max-width:1000px;margin-top:4rem;}.card.jsx-2774546882{margin:2rem;-webkit-flex-basis:45%;-ms-flex-preferred-size:45%;flex-basis:45%;padding:3rem;text-align:left;color:inherit;-webkit-text-decoration:none;text-decoration:none;border:1px solid black;border-radius:20px;-moz-box-shadow:inset 0 0 10px #000000;-webkit-box-shadow:inset 0 0 10px #000000;box-shadow:inset 0 0 10px #000000;-webkit-transition:color 0.15s ease,border-color 0.15s ease;transition:color 0.15s ease,border-color 0.15s ease;}.card.jsx-2774546882:hover,.card.jsx-2774546882:focus,.card.jsx-2774546882:active{color:#0070f3;border-color:#0070f3;}.card.jsx-2774546882 h3.jsx-2774546882{margin:0 0 1rem 0;font-size:1.5rem;}.card.jsx-2774546882 p.jsx-2774546882{margin:0;font-size:1.25rem;line-height:1.5;}#l.jsx-2774546882{text-align:center;}.logo.jsx-2774546882{height:1em;}.title.jsx-2774546882{margin:0;line-height:1.15;font-size:4rem;padding:5rem 0;}#s.jsx-2774546882{-webkit-animation:pulse-jsx-2774546882 5s infinite;animation:pulse-jsx-2774546882 5s infinite;}@-webkit-keyframes pulse-jsx-2774546882{20%{color:red;}30%{color:blue;}40%{color:green;}100%{color:yellow;}}@keyframes pulse-jsx-2774546882{20%{color:red;}30%{color:blue;}40%{color:green;}100%{color:yellow;}}#pro.jsx-2774546882{color:blue;}form.jsx-2774546882{font-size:30px;padding:0.0001rem 5em 5em 5em;margin:100px 100px 100px 100px;}Button.jsx-2774546882{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}#new.jsx-2774546882{text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcUHJvY2hldGEgQmhhdHRhY2hhcnlcXERTQ19VUERBVEVEXFxkc2NcXHBhZ2VzXFxzaWduaW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0lrQixBQUlzQixBQVNRLEFBSU4sQUFLQSxBQVVELEFBaUJFLEFBS0ksQUFLVCxBQUtTLEFBR1AsQUFHRixBQU1tQixBQUloQixBQUdDLEFBR0MsQUFHQyxBQUlKLEFBR0ksQUFLSSxBQUdELFNBNUNBLEFBV0QsQ0FVakIsQ0E1RWEsQUErRGYsQUFnQkUsQUFVRixDQTdEaUIsQUFzRGYsQ0FHQSxDQXhDcUIsQ0ErQ1MsR0ExQ2IsQUFVbkIsQUF3Q0EsQ0EzRkEsS0FSK0IsRUFrRWQsQ0FYQyxRQVZsQixBQUtBLE1BaUJpQixFQVhqQixFQW9DaUMsUUEzRmxCLEdBbUVmLGtCQXhEeUIsQUFLSixFQTRFckIsRUFqRWUsYUFDRyxFQW1FbEIsQ0F6QkEsYUF6Q2dCLGNBQ08sTUE3QkUsd0NBZ0JBLElBY0EsRUFuQkoscUJBb0JBLG1CQUNvQixhQS9CcEIsMEJBZ0N1QixjQXJCNUMsQUFLaUIsNEJBaUJtQix5QkFoQ3BDLElBaUJtQixLQWdCb0MsWUFmckMsZ0JBQ2xCLG9GQWVBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcUHJvY2hldGEgQmhhdHRhY2hhcnlcXERTQ19VUERBVEVEXFxkc2NcXHBhZ2VzXFxzaWduaW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IFNpZ25VcExpbmsgfSBmcm9tIFwiLi9zaWdudXBcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IEluZGV4TGluayB9IGZyb20gXCIuL2luZGV4XCI7XHJcbmltcG9ydCB1c2VGb3JtVmFsaWRhdGlvbiBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9BdXRoL3VzZUZvcm1WYWxpZGF0aW9uJ1xyXG5pbXBvcnQgdmFsaWRhdGVMb2dpbiBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvQXV0aC92YWxpZGF0ZUxvZ2luXCI7XHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tIFwiLi4vc3JjL2ZpcmViYXNlXCI7XHJcblxyXG5jb25zdCBJTklUSUFMX1NUQVRFID0ge1xyXG4gIGVtYWlsOiBcIlwiLFxyXG4gIHBhc3N3b3JkOiBcIlwiXHJcbn07XHJcblxyXG5cclxuY29uc3QgU2lnbkluID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHtcclxuICAgIGhhbmRsZVN1Ym1pdCxcclxuICAgIGhhbmRsZUJsdXIsXHJcbiAgICBoYW5kbGVDaGFuZ2UsXHJcbiAgICB2YWx1ZXMsXHJcbiAgICBlcnJvcnMsXHJcbiAgICBpc1N1Ym1pdHRpbmdcclxuICB9ID0gdXNlRm9ybVZhbGlkYXRpb24oSU5JVElBTF9TVEFURSwgdmFsaWRhdGVMb2dpbiwgYXV0aGVudGljYXRlVXNlcik7XHJcbiAgY29uc3QgW2ZpcmViYXNlRXJyb3IsIHNldEZpcmViYXNlRXJyb3JdID0gUmVhY3QudXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGF1dGhlbnRpY2F0ZVVzZXIoKSB7XHJcbiAgICBjb25zdCB7IG5hbWUsIGVtYWlsLCBwYXNzd29yZCB9ID0gdmFsdWVzO1xyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgZmlyZWJhc2UubG9naW4oZW1haWwsIHBhc3N3b3JkKVxyXG4gICAgICByb3V0ZXIucHVzaChcIi9ob21lXCIpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJBdXRoZW50aWNhdGlvbiBFcnJvclwiLCBlcnIpO1xyXG4gICAgICBzZXRGaXJlYmFzZUVycm9yKGVyci5tZXNzYWdlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8bWV0YSBjaGFyc2V0PVwiVVRGLThcIj48L21ldGE+XHJcbiAgICAgICAgPG1ldGFcclxuICAgICAgICAgIG5hbWU9XCJ2aWV3cG9ydFwiXHJcbiAgICAgICAgICBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTAuOFwiXHJcbiAgICAgICAgPjwvbWV0YT5cclxuICAgICAgICA8dGl0bGU+TG9nIEluPC90aXRsZT5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgcmVsPVwiaWNvblwiXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3Byb2NoZXRhMTk5OS9EU0MtTlNFQy1CbG9ncy9tYXN0ZXIvcHVibGljL2Zhdmljb24uaWNvXCJcclxuICAgICAgICA+PC9saW5rPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxtYWluPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPlxyXG4gICAgICAgICAgPGNlbnRlcj48aW1nXHJcbiAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vZ2l0aHViLmNvbS9wcm9jaGV0YTE5OTkvRFNDLU5TRUMtQmxvZ3MvYmxvYi9tYXN0ZXIvcHVibGljL2RzYy5wbmc/cmF3PXRydWVcIlxyXG4gICAgICAgICAgICBhbHQ9XCJkc2MgTG9nb1wiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImxvZ29cIlxyXG4gICAgICAgICAgPjwvaW1nPjwvY2VudGVyPlxyXG4gICAgICAgPGNlbnRlcj4gICAgIERTQyBOU0VDIEJMT0dTLTxpIGlkPVwic1wiPldyaXRlIFlvdXIgT3duIFN0b3J5ITwvaT48L2NlbnRlcj5cclxuICAgICAgICA8L2gxPlxyXG4gICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgIDxjZW50ZXI+XHJcbiAgICAgICAgICA8aDE+TG9nIEluIFRvIFN0YXJ0IFlvdXIgSm91cm5leSBUb2RheSE8L2gxPlxyXG4gICAgICAgIDwvY2VudGVyPlxyXG4gICAgICAgIDxjZW50ZXI+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vbWVkaWEuZ2lwaHkuY29tL21lZGlhLzFPMkJSWmNEZ0lmRHNLTVRiRy9naXBoeS5naWZcIj48L2ltZz5cclxuICAgICAgICA8L2NlbnRlcj5cclxuICAgICAgICA8Y2VudGVyPlxyXG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgRW1haWw6XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5lbWFpbH1cclxuICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJzb21lb25lQGV4YW1wbGUuY29tXCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIHtlcnJvcnMuZW1haWwgJiYgPHAgY2xhc3NOYW1lPVwiZXJyb3ItdGV4dFwiPntlcnJvcnMuZW1haWx9PC9wPn1cclxuICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICBQYXNzd29yZDpcclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLnBhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIHtlcnJvcnMucGFzc3dvcmQgJiYgPHAgY2xhc3NOYW1lPVwiZXJyb3ItdGV4dFwiPntlcnJvcnMucGFzc3dvcmR9PC9wPn1cclxuICAgICAgICAgICAgICAgIHtmaXJlYmFzZUVycm9yICYmIDxwIGNsYXNzTmFtZT1cImVycm9yLXRleHRcIj57ZmlyZWJhc2VFcnJvcn08L3A+fVxyXG4gICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICA8Y2VudGVyPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBkaXNhYmxlZD17aXNTdWJtaXR0aW5nfSA+U2lnbiBJbjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9jZW50ZXI+XHJcbiAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgPGNlbnRlcj5cclxuICAgICAgICAgICAgICAgICAgPFNpZ25VcExpbmsgLz5cclxuICAgICAgICAgICAgICAgIDwvY2VudGVyPlxyXG4gICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICA8Y2VudGVyPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMjBweFwiLCB3aWR0aDogXCIyMDBweFwiIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2NlbnRlcj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9jZW50ZXI+XHJcbiAgICAgIDwvbWFpbj5cclxuICAgICAgPGZvb3Rlcj5cclxuICAgICAgICA8YVxyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZHNjbnNlYy5jb20vXCJcclxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vZ2l0aHViLmNvbS9wcm9jaGV0YTE5OTkvRFNDLU5TRUMtQmxvZ3MvYmxvYi9tYXN0ZXIvcHVibGljL2RzYy5wbmc/cmF3PXRydWVcIlxyXG4gICAgICAgICAgICBhbHQ9XCJEU0MgTG9nb1wiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImxvZ29cIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvZm9vdGVyPlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgXHJcbiAgICAgICAgZm9vdGVyIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWFlYWVhO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvb3RlciBpbWcge1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvb3RlciBhIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5ncmlkIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4gICAgICAgICAgbWF4LXdpZHRoOiAxMDAwcHg7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiA0cmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNhcmQge1xyXG4gICAgICAgICAgbWFyZ2luOiAycmVtO1xyXG4gICAgICAgICAgZmxleC1iYXNpczogNDUlO1xyXG4gICAgICAgICAgcGFkZGluZzogM3JlbTtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogaW5zZXQgMCAwIDEwcHggIzAwMDAwMDtcclxuICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDEwcHggIzAwMDAwMDtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxMHB4ICMwMDAwMDA7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLCBib3JkZXItY29sb3IgMC4xNXMgZWFzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jYXJkOmhvdmVyLFxyXG4gICAgICAgIC5jYXJkOmZvY3VzLFxyXG4gICAgICAgIC5jYXJkOmFjdGl2ZSB7XHJcbiAgICAgICAgICBjb2xvcjogIzAwNzBmMztcclxuICAgICAgICAgIGJvcmRlci1jb2xvcjogIzAwNzBmMztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jYXJkIGgzIHtcclxuICAgICAgICAgIG1hcmdpbjogMCAwIDFyZW0gMDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNhcmQgcCB7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICAgIH1cclxuICAgICAgICAjbCB7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5sb2dvIHtcclxuICAgICAgICAgIGhlaWdodDogMWVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTU7XHJcbiAgICAgICAgICBmb250LXNpemU6IDRyZW07XHJcbiAgICAgICAgICBwYWRkaW5nOiA1cmVtIDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNzIHtcclxuICAgICAgICAgIGFuaW1hdGlvbjogcHVsc2UgNXMgaW5maW5pdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBrZXlmcmFtZXMgcHVsc2Uge1xyXG4gICAgICAgICAgMjAlIHtcclxuICAgICAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDMwJSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiBibHVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgNDAlIHtcclxuICAgICAgICAgICAgY29sb3I6IGdyZWVuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB5ZWxsb3c7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNwcm8ge1xyXG4gICAgICAgICAgY29sb3I6IGJsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcm0ge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgICAgcGFkZGluZzogMC4wMDAxcmVtIDVlbSA1ZW0gNWVtO1xyXG4gICAgICAgICAgbWFyZ2luOiAxMDBweCAxMDBweCAxMDBweCAxMDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgQnV0dG9uIHtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNuZXcge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgIGh0bWwsXHJcbiAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgU2Vnb2UgVUksIFJvYm90byxcclxuICAgICAgICAgICAgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgRmlyYSBTYW5zLCBEcm9pZCBTYW5zLCBIZWx2ZXRpY2EgTmV1ZSxcclxuICAgICAgICAgICAgc2Fucy1zZXJpZjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICoge1xyXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWduSW47XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\Procheta Bhattachary\\\\DSC_UPDATED\\\\dsc\\\\pages\\\\signin.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "3379920139",
    __self: _this
  }, "html,body{padding:0;margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto, Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue, sans-serif;}*{box-sizing:border-box;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcUHJvY2hldGEgQmhhdHRhY2hhcnlcXERTQ19VUERBVEVEXFxkc2NcXHBhZ2VzXFxzaWduaW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ1B5QixBQUlxQixBQVFZLFVBUGIsU0FHRyxHQUtkLG1JQUpBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcUHJvY2hldGEgQmhhdHRhY2hhcnlcXERTQ19VUERBVEVEXFxkc2NcXHBhZ2VzXFxzaWduaW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IFNpZ25VcExpbmsgfSBmcm9tIFwiLi9zaWdudXBcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IEluZGV4TGluayB9IGZyb20gXCIuL2luZGV4XCI7XHJcbmltcG9ydCB1c2VGb3JtVmFsaWRhdGlvbiBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9BdXRoL3VzZUZvcm1WYWxpZGF0aW9uJ1xyXG5pbXBvcnQgdmFsaWRhdGVMb2dpbiBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvQXV0aC92YWxpZGF0ZUxvZ2luXCI7XHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tIFwiLi4vc3JjL2ZpcmViYXNlXCI7XHJcblxyXG5jb25zdCBJTklUSUFMX1NUQVRFID0ge1xyXG4gIGVtYWlsOiBcIlwiLFxyXG4gIHBhc3N3b3JkOiBcIlwiXHJcbn07XHJcblxyXG5cclxuY29uc3QgU2lnbkluID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHtcclxuICAgIGhhbmRsZVN1Ym1pdCxcclxuICAgIGhhbmRsZUJsdXIsXHJcbiAgICBoYW5kbGVDaGFuZ2UsXHJcbiAgICB2YWx1ZXMsXHJcbiAgICBlcnJvcnMsXHJcbiAgICBpc1N1Ym1pdHRpbmdcclxuICB9ID0gdXNlRm9ybVZhbGlkYXRpb24oSU5JVElBTF9TVEFURSwgdmFsaWRhdGVMb2dpbiwgYXV0aGVudGljYXRlVXNlcik7XHJcbiAgY29uc3QgW2ZpcmViYXNlRXJyb3IsIHNldEZpcmViYXNlRXJyb3JdID0gUmVhY3QudXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGF1dGhlbnRpY2F0ZVVzZXIoKSB7XHJcbiAgICBjb25zdCB7IG5hbWUsIGVtYWlsLCBwYXNzd29yZCB9ID0gdmFsdWVzO1xyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgZmlyZWJhc2UubG9naW4oZW1haWwsIHBhc3N3b3JkKVxyXG4gICAgICByb3V0ZXIucHVzaChcIi9ob21lXCIpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJBdXRoZW50aWNhdGlvbiBFcnJvclwiLCBlcnIpO1xyXG4gICAgICBzZXRGaXJlYmFzZUVycm9yKGVyci5tZXNzYWdlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8bWV0YSBjaGFyc2V0PVwiVVRGLThcIj48L21ldGE+XHJcbiAgICAgICAgPG1ldGFcclxuICAgICAgICAgIG5hbWU9XCJ2aWV3cG9ydFwiXHJcbiAgICAgICAgICBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTAuOFwiXHJcbiAgICAgICAgPjwvbWV0YT5cclxuICAgICAgICA8dGl0bGU+TG9nIEluPC90aXRsZT5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgcmVsPVwiaWNvblwiXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3Byb2NoZXRhMTk5OS9EU0MtTlNFQy1CbG9ncy9tYXN0ZXIvcHVibGljL2Zhdmljb24uaWNvXCJcclxuICAgICAgICA+PC9saW5rPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxtYWluPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPlxyXG4gICAgICAgICAgPGNlbnRlcj48aW1nXHJcbiAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vZ2l0aHViLmNvbS9wcm9jaGV0YTE5OTkvRFNDLU5TRUMtQmxvZ3MvYmxvYi9tYXN0ZXIvcHVibGljL2RzYy5wbmc/cmF3PXRydWVcIlxyXG4gICAgICAgICAgICBhbHQ9XCJkc2MgTG9nb1wiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImxvZ29cIlxyXG4gICAgICAgICAgPjwvaW1nPjwvY2VudGVyPlxyXG4gICAgICAgPGNlbnRlcj4gICAgIERTQyBOU0VDIEJMT0dTLTxpIGlkPVwic1wiPldyaXRlIFlvdXIgT3duIFN0b3J5ITwvaT48L2NlbnRlcj5cclxuICAgICAgICA8L2gxPlxyXG4gICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgIDxjZW50ZXI+XHJcbiAgICAgICAgICA8aDE+TG9nIEluIFRvIFN0YXJ0IFlvdXIgSm91cm5leSBUb2RheSE8L2gxPlxyXG4gICAgICAgIDwvY2VudGVyPlxyXG4gICAgICAgIDxjZW50ZXI+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vbWVkaWEuZ2lwaHkuY29tL21lZGlhLzFPMkJSWmNEZ0lmRHNLTVRiRy9naXBoeS5naWZcIj48L2ltZz5cclxuICAgICAgICA8L2NlbnRlcj5cclxuICAgICAgICA8Y2VudGVyPlxyXG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgRW1haWw6XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5lbWFpbH1cclxuICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJzb21lb25lQGV4YW1wbGUuY29tXCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIHtlcnJvcnMuZW1haWwgJiYgPHAgY2xhc3NOYW1lPVwiZXJyb3ItdGV4dFwiPntlcnJvcnMuZW1haWx9PC9wPn1cclxuICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICBQYXNzd29yZDpcclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLnBhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIHtlcnJvcnMucGFzc3dvcmQgJiYgPHAgY2xhc3NOYW1lPVwiZXJyb3ItdGV4dFwiPntlcnJvcnMucGFzc3dvcmR9PC9wPn1cclxuICAgICAgICAgICAgICAgIHtmaXJlYmFzZUVycm9yICYmIDxwIGNsYXNzTmFtZT1cImVycm9yLXRleHRcIj57ZmlyZWJhc2VFcnJvcn08L3A+fVxyXG4gICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICA8Y2VudGVyPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBkaXNhYmxlZD17aXNTdWJtaXR0aW5nfSA+U2lnbiBJbjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9jZW50ZXI+XHJcbiAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgPGNlbnRlcj5cclxuICAgICAgICAgICAgICAgICAgPFNpZ25VcExpbmsgLz5cclxuICAgICAgICAgICAgICAgIDwvY2VudGVyPlxyXG4gICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICA8Y2VudGVyPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMjBweFwiLCB3aWR0aDogXCIyMDBweFwiIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2NlbnRlcj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9jZW50ZXI+XHJcbiAgICAgIDwvbWFpbj5cclxuICAgICAgPGZvb3Rlcj5cclxuICAgICAgICA8YVxyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZHNjbnNlYy5jb20vXCJcclxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vZ2l0aHViLmNvbS9wcm9jaGV0YTE5OTkvRFNDLU5TRUMtQmxvZ3MvYmxvYi9tYXN0ZXIvcHVibGljL2RzYy5wbmc/cmF3PXRydWVcIlxyXG4gICAgICAgICAgICBhbHQ9XCJEU0MgTG9nb1wiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImxvZ29cIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvZm9vdGVyPlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgXHJcbiAgICAgICAgZm9vdGVyIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWFlYWVhO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvb3RlciBpbWcge1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvb3RlciBhIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5ncmlkIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4gICAgICAgICAgbWF4LXdpZHRoOiAxMDAwcHg7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiA0cmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNhcmQge1xyXG4gICAgICAgICAgbWFyZ2luOiAycmVtO1xyXG4gICAgICAgICAgZmxleC1iYXNpczogNDUlO1xyXG4gICAgICAgICAgcGFkZGluZzogM3JlbTtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogaW5zZXQgMCAwIDEwcHggIzAwMDAwMDtcclxuICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDEwcHggIzAwMDAwMDtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxMHB4ICMwMDAwMDA7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLCBib3JkZXItY29sb3IgMC4xNXMgZWFzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jYXJkOmhvdmVyLFxyXG4gICAgICAgIC5jYXJkOmZvY3VzLFxyXG4gICAgICAgIC5jYXJkOmFjdGl2ZSB7XHJcbiAgICAgICAgICBjb2xvcjogIzAwNzBmMztcclxuICAgICAgICAgIGJvcmRlci1jb2xvcjogIzAwNzBmMztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jYXJkIGgzIHtcclxuICAgICAgICAgIG1hcmdpbjogMCAwIDFyZW0gMDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNhcmQgcCB7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICAgIH1cclxuICAgICAgICAjbCB7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5sb2dvIHtcclxuICAgICAgICAgIGhlaWdodDogMWVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTU7XHJcbiAgICAgICAgICBmb250LXNpemU6IDRyZW07XHJcbiAgICAgICAgICBwYWRkaW5nOiA1cmVtIDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNzIHtcclxuICAgICAgICAgIGFuaW1hdGlvbjogcHVsc2UgNXMgaW5maW5pdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBrZXlmcmFtZXMgcHVsc2Uge1xyXG4gICAgICAgICAgMjAlIHtcclxuICAgICAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDMwJSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiBibHVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgNDAlIHtcclxuICAgICAgICAgICAgY29sb3I6IGdyZWVuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB5ZWxsb3c7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNwcm8ge1xyXG4gICAgICAgICAgY29sb3I6IGJsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcm0ge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgICAgcGFkZGluZzogMC4wMDAxcmVtIDVlbSA1ZW0gNWVtO1xyXG4gICAgICAgICAgbWFyZ2luOiAxMDBweCAxMDBweCAxMDBweCAxMDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgQnV0dG9uIHtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNuZXcge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgIGh0bWwsXHJcbiAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgU2Vnb2UgVUksIFJvYm90byxcclxuICAgICAgICAgICAgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgRmlyYSBTYW5zLCBEcm9pZCBTYW5zLCBIZWx2ZXRpY2EgTmV1ZSxcclxuICAgICAgICAgICAgc2Fucy1zZXJpZjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICoge1xyXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWduSW47XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\Procheta Bhattachary\\\\DSC_UPDATED\\\\dsc\\\\pages\\\\signin.js */"));
};

_s(SignIn, "H9uIfyiPM2e969v7jlRHFVC/0ak=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"], _src_components_Auth_useFormValidation__WEBPACK_IMPORTED_MODULE_10__["default"]];
});

_c = SignIn;
/* harmony default export */ __webpack_exports__["default"] = (SignIn);

var _c;

$RefreshReg$(_c, "SignIn");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbmluLmpzIl0sIm5hbWVzIjpbIklOSVRJQUxfU1RBVEUiLCJlbWFpbCIsInBhc3N3b3JkIiwiU2lnbkluIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRm9ybVZhbGlkYXRpb24iLCJ2YWxpZGF0ZUxvZ2luIiwiYXV0aGVudGljYXRlVXNlciIsImhhbmRsZVN1Ym1pdCIsImhhbmRsZUJsdXIiLCJoYW5kbGVDaGFuZ2UiLCJ2YWx1ZXMiLCJlcnJvcnMiLCJpc1N1Ym1pdHRpbmciLCJSZWFjdCIsInVzZVN0YXRlIiwiZmlyZWJhc2VFcnJvciIsInNldEZpcmViYXNlRXJyb3IiLCJuYW1lIiwiZmlyZWJhc2UiLCJsb2dpbiIsInB1c2giLCJjb25zb2xlIiwiZXJyb3IiLCJtZXNzYWdlIiwibWFyZ2luVG9wIiwid2lkdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxhQUFhLEdBQUc7QUFDcEJDLE9BQUssRUFBRSxFQURhO0FBRXBCQyxVQUFRLEVBQUU7QUFGVSxDQUF0Qjs7QUFNQSxJQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQUE7O0FBQ25CLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRG1CLDJCQVNmQyx1RkFBaUIsQ0FBQ04sYUFBRCxFQUFnQk8sMkVBQWhCLEVBQStCQyxnQkFBL0IsQ0FURjtBQUFBLE1BR2pCQyxZQUhpQixzQkFHakJBLFlBSGlCO0FBQUEsTUFJakJDLFVBSmlCLHNCQUlqQkEsVUFKaUI7QUFBQSxNQUtqQkMsWUFMaUIsc0JBS2pCQSxZQUxpQjtBQUFBLE1BTWpCQyxNQU5pQixzQkFNakJBLE1BTmlCO0FBQUEsTUFPakJDLE1BUGlCLHNCQU9qQkEsTUFQaUI7QUFBQSxNQVFqQkMsWUFSaUIsc0JBUWpCQSxZ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O1VBQ1dFLHFELEVBUVhDLCtFOzs7S0FUQUgsTTtBQWtQU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaG9tZS42ZWNiOTU2YTA4NjVjNzg4MTQwZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBTaWduVXBMaW5rIH0gZnJvbSBcIi4vc2lnbnVwXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBJbmRleExpbmsgfSBmcm9tIFwiLi9pbmRleFwiO1xyXG5pbXBvcnQgdXNlRm9ybVZhbGlkYXRpb24gZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvQXV0aC91c2VGb3JtVmFsaWRhdGlvbidcclxuaW1wb3J0IHZhbGlkYXRlTG9naW4gZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL0F1dGgvdmFsaWRhdGVMb2dpblwiO1xyXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSBcIi4uL3NyYy9maXJlYmFzZVwiO1xyXG5cclxuY29uc3QgSU5JVElBTF9TVEFURSA9IHtcclxuICBlbWFpbDogXCJcIixcclxuICBwYXNzd29yZDogXCJcIlxyXG59O1xyXG5cclxuXHJcbmNvbnN0IFNpZ25JbiA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7XHJcbiAgICBoYW5kbGVTdWJtaXQsXHJcbiAgICBoYW5kbGVCbHVyLFxyXG4gICAgaGFuZGxlQ2hhbmdlLFxyXG4gICAgdmFsdWVzLFxyXG4gICAgZXJyb3JzLFxyXG4gICAgaXNTdWJtaXR0aW5nXHJcbiAgfSA9IHVzZUZvcm1WYWxpZGF0aW9uKElOSVRJQUxfU1RBVEUsIHZhbGlkYXRlTG9naW4sIGF1dGhlbnRpY2F0ZVVzZXIpO1xyXG4gIGNvbnN0IFtmaXJlYmFzZUVycm9yLCBzZXRGaXJlYmFzZUVycm9yXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xyXG5cclxuICBhc3luYyBmdW5jdGlvbiBhdXRoZW50aWNhdGVVc2VyKCkge1xyXG4gICAgY29uc3QgeyBuYW1lLCBlbWFpbCwgcGFzc3dvcmQgfSA9IHZhbHVlcztcclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IGZpcmViYXNlLmxvZ2luKGVtYWlsLCBwYXNzd29yZClcclxuICAgICAgcm91dGVyLnB1c2goXCIvaG9tZVwiKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiQXV0aGVudGljYXRpb24gRXJyb3JcIiwgZXJyKTtcclxuICAgICAgc2V0RmlyZWJhc2VFcnJvcihlcnIubWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPG1ldGEgY2hhcnNldD1cIlVURi04XCI+PC9tZXRhPlxyXG4gICAgICAgIDxtZXRhXHJcbiAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxyXG4gICAgICAgICAgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0wLjhcIlxyXG4gICAgICAgID48L21ldGE+XHJcbiAgICAgICAgPHRpdGxlPkxvZyBJbjwvdGl0bGU+XHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIHJlbD1cImljb25cIlxyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9wcm9jaGV0YTE5OTkvRFNDLU5TRUMtQmxvZ3MvbWFzdGVyL3B1YmxpYy9mYXZpY29uLmljb1wiXHJcbiAgICAgICAgPjwvbGluaz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8bWFpbj5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5cclxuICAgICAgICAgIDxjZW50ZXI+PGltZ1xyXG4gICAgICAgICAgICBzcmM9XCJodHRwczovL2dpdGh1Yi5jb20vcHJvY2hldGExOTk5L0RTQy1OU0VDLUJsb2dzL2Jsb2IvbWFzdGVyL3B1YmxpYy9kc2MucG5nP3Jhdz10cnVlXCJcclxuICAgICAgICAgICAgYWx0PVwiZHNjIExvZ29cIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJsb2dvXCJcclxuICAgICAgICAgID48L2ltZz48L2NlbnRlcj5cclxuICAgICAgIDxjZW50ZXI+ICAgICBEU0MgTlNFQyBCTE9HUy08aSBpZD1cInNcIj5Xcml0ZSBZb3VyIE93biBTdG9yeSE8L2k+PC9jZW50ZXI+XHJcbiAgICAgICAgPC9oMT5cclxuICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICA8Y2VudGVyPlxyXG4gICAgICAgICAgPGgxPkxvZyBJbiBUbyBTdGFydCBZb3VyIEpvdXJuZXkgVG9kYXkhPC9oMT5cclxuICAgICAgICA8L2NlbnRlcj5cclxuICAgICAgICA8Y2VudGVyPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL21lZGlhLmdpcGh5LmNvbS9tZWRpYS8xTzJCUlpjRGdJZkRzS01UYkcvZ2lwaHkuZ2lmXCI+PC9pbWc+XHJcbiAgICAgICAgPC9jZW50ZXI+XHJcbiAgICAgICAgPGNlbnRlcj5cclxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgICAgIEVtYWlsOlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwic29tZW9uZUBleGFtcGxlLmNvbVwiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICB7ZXJyb3JzLmVtYWlsICYmIDxwIGNsYXNzTmFtZT1cImVycm9yLXRleHRcIj57ZXJyb3JzLmVtYWlsfTwvcD59XHJcbiAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgUGFzc3dvcmQ6XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5wYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB7ZXJyb3JzLnBhc3N3b3JkICYmIDxwIGNsYXNzTmFtZT1cImVycm9yLXRleHRcIj57ZXJyb3JzLnBhc3N3b3JkfTwvcD59XHJcbiAgICAgICAgICAgICAgICB7ZmlyZWJhc2VFcnJvciAmJiA8cCBjbGFzc05hbWU9XCJlcnJvci10ZXh0XCI+e2ZpcmViYXNlRXJyb3J9PC9wPn1cclxuICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgPGNlbnRlcj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgZGlzYWJsZWQ9e2lzU3VibWl0dGluZ30gPlNpZ24gSW48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvY2VudGVyPlxyXG4gICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgIDxjZW50ZXI+XHJcbiAgICAgICAgICAgICAgICAgIDxTaWduVXBMaW5rIC8+XHJcbiAgICAgICAgICAgICAgICA8L2NlbnRlcj5cclxuICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgPGNlbnRlcj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjIwcHhcIiwgd2lkdGg6IFwiMjAwcHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9jZW50ZXI+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvY2VudGVyPlxyXG4gICAgICA8L21haW4+XHJcbiAgICAgIDxmb290ZXI+XHJcbiAgICAgICAgPGFcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2RzY25zZWMuY29tL1wiXHJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBzcmM9XCJodHRwczovL2dpdGh1Yi5jb20vcHJvY2hldGExOTk5L0RTQy1OU0VDLUJsb2dzL2Jsb2IvbWFzdGVyL3B1YmxpYy9kc2MucG5nP3Jhdz10cnVlXCJcclxuICAgICAgICAgICAgYWx0PVwiRFNDIExvZ29cIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJsb2dvXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L2Zvb3Rlcj5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgIFxyXG4gICAgICAgIGZvb3RlciB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2VhZWFlYTtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb290ZXIgaW1nIHtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb290ZXIgYSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZ3JpZCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxuICAgICAgICAgIG1heC13aWR0aDogMTAwMHB4O1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogNHJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jYXJkIHtcclxuICAgICAgICAgIG1hcmdpbjogMnJlbTtcclxuICAgICAgICAgIGZsZXgtYmFzaXM6IDQ1JTtcclxuICAgICAgICAgIHBhZGRpbmc6IDNyZW07XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAtbW96LWJveC1zaGFkb3c6IGluc2V0IDAgMCAxMHB4ICMwMDAwMDA7XHJcbiAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCAxMHB4ICMwMDAwMDA7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMTBweCAjMDAwMDAwO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZSwgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2FyZDpob3ZlcixcclxuICAgICAgICAuY2FyZDpmb2N1cyxcclxuICAgICAgICAuY2FyZDphY3RpdmUge1xyXG4gICAgICAgICAgY29sb3I6ICMwMDcwZjM7XHJcbiAgICAgICAgICBib3JkZXItY29sb3I6ICMwMDcwZjM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2FyZCBoMyB7XHJcbiAgICAgICAgICBtYXJnaW46IDAgMCAxcmVtIDA7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jYXJkIHAge1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgICAgICB9XHJcbiAgICAgICAgI2wge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubG9nbyB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDFlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xyXG4gICAgICAgICAgZm9udC1zaXplOiA0cmVtO1xyXG4gICAgICAgICAgcGFkZGluZzogNXJlbSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAjcyB7XHJcbiAgICAgICAgICBhbmltYXRpb246IHB1bHNlIDVzIGluZmluaXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBAa2V5ZnJhbWVzIHB1bHNlIHtcclxuICAgICAgICAgIDIwJSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAzMCUge1xyXG4gICAgICAgICAgICBjb2xvcjogYmx1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDQwJSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiBncmVlbjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICBjb2xvcjogeWVsbG93O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAjcHJvIHtcclxuICAgICAgICAgIGNvbG9yOiBibHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3JtIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDAuMDAwMXJlbSA1ZW0gNWVtIDVlbTtcclxuICAgICAgICAgIG1hcmdpbjogMTAwcHggMTAwcHggMTAwcHggMTAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEJ1dHRvbiB7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAjbmV3IHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICBodG1sLFxyXG4gICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFNlZ29lIFVJLCBSb2JvdG8sXHJcbiAgICAgICAgICAgIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIEZpcmEgU2FucywgRHJvaWQgU2FucywgSGVsdmV0aWNhIE5ldWUsXHJcbiAgICAgICAgICAgIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAqIHtcclxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lnbkluO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9