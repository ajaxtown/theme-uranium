exports.id = "main";
exports.modules = {

/***/ "./client/themes/uranium/containers/SinglePage.js":
/*!********************************************************!*\
  !*** ./client/themes/uranium/containers/SinglePage.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Article = __webpack_require__(/*! ../components/Post/Article */ \"./client/themes/uranium/components/Post/Article.js\");\n\nvar _Article2 = _interopRequireDefault(_Article);\n\nvar _Loader = __webpack_require__(/*! ../components/Loader */ \"./client/themes/uranium/components/Loader.js\");\n\nvar _Loader2 = _interopRequireDefault(_Loader);\n\nvar _SEO = __webpack_require__(/*! ../components/SEO */ \"./client/themes/uranium/components/SEO.js\");\n\nvar _SEO2 = _interopRequireDefault(_SEO);\n\nvar _OhSnap = __webpack_require__(/*! ../components/OhSnap */ \"./client/themes/uranium/components/OhSnap.js\");\n\nvar _OhSnap2 = _interopRequireDefault(_OhSnap);\n\nvar _SinglePageData = __webpack_require__(/*! shared/data-connectors/SinglePageData */ \"./shared/data-connectors/SinglePageData.js\");\n\nvar _SinglePageData2 = _interopRequireDefault(_SinglePageData);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n    var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n    enterModule && enterModule(module);\n})();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar SinglePage = function (_Component) {\n    _inherits(SinglePage, _Component);\n\n    function SinglePage() {\n        _classCallCheck(this, SinglePage);\n\n        return _possibleConstructorReturn(this, (SinglePage.__proto__ || Object.getPrototypeOf(SinglePage)).apply(this, arguments));\n    }\n\n    _createClass(SinglePage, [{\n        key: \"render\",\n        value: function render() {\n            if (this.props.loading) {\n                return _react2.default.createElement(_Loader2.default, null);\n            }\n            if (!this.props.page.ok) {\n                return _react2.default.createElement(_OhSnap2.default, { message: \"Sorry, this page does not exist or might be restricted.\" });\n            }\n            var post = this.props.page.post;\n            var tags = [],\n                categories = [];\n            post.taxonomies.forEach(function (taxonomy) {\n                if (taxonomy.type === \"post_category\") {\n                    categories.push(taxonomy.name);\n                } else {\n                    tags.push(taxonomy.name);\n                }\n            });\n            return _react2.default.createElement(\n                \"div\",\n                null,\n                _react2.default.createElement(_SEO2.default, {\n                    schema: \"BlogPosting\",\n                    title: post.title,\n                    description: post.excerpt,\n                    path: \"/post/\" + this.props.match.params.slug,\n                    contentType: \"article\",\n                    category: categories.join(\",\"),\n                    tags: tags,\n                    image: post.cover_image,\n                    settings: this.props.settings || {}\n                }),\n                _react2.default.createElement(_Article2.default, { post: post })\n            );\n        }\n    }]);\n\n    return SinglePage;\n}(_react.Component);\n\nvar _default = (0, _SinglePageData2.default)(SinglePage);\n\nexports.default = _default;\n;\n\n(function () {\n    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n    var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(SinglePage, \"SinglePage\", \"/Users/ajaxtown/Sites/ReactCMS/client/themes/uranium/containers/SinglePage.js\");\n    reactHotLoader.register(_default, \"default\", \"/Users/ajaxtown/Sites/ReactCMS/client/themes/uranium/containers/SinglePage.js\");\n    leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack://server/./client/themes/uranium/containers/SinglePage.js?");

/***/ }),

/***/ "./client/themes/uranium/containers/SinglePage.js":
/*!********************************************************!*\
  !*** ./client/themes/uranium/containers/SinglePage.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Article = __webpack_require__(/*! ../components/Post/Article */ \"./client/themes/uranium/components/Post/Article.js\");\n\nvar _Article2 = _interopRequireDefault(_Article);\n\nvar _Loader = __webpack_require__(/*! ../components/Loader */ \"./client/themes/uranium/components/Loader.js\");\n\nvar _Loader2 = _interopRequireDefault(_Loader);\n\nvar _SEO = __webpack_require__(/*! ../components/SEO */ \"./client/themes/uranium/components/SEO.js\");\n\nvar _SEO2 = _interopRequireDefault(_SEO);\n\nvar _OhSnap = __webpack_require__(/*! ../components/OhSnap */ \"./client/themes/uranium/components/OhSnap.js\");\n\nvar _OhSnap2 = _interopRequireDefault(_OhSnap);\n\nvar _SinglePageData = __webpack_require__(/*! shared/data-connectors/SinglePageData */ \"./shared/data-connectors/SinglePageData.js\");\n\nvar _SinglePageData2 = _interopRequireDefault(_SinglePageData);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n    var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n    enterModule && enterModule(module);\n})();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar SinglePage = function (_Component) {\n    _inherits(SinglePage, _Component);\n\n    function SinglePage() {\n        _classCallCheck(this, SinglePage);\n\n        return _possibleConstructorReturn(this, (SinglePage.__proto__ || Object.getPrototypeOf(SinglePage)).apply(this, arguments));\n    }\n\n    _createClass(SinglePage, [{\n        key: \"render\",\n        value: function render() {\n            if (this.props.loading) {\n                return _react2.default.createElement(_Loader2.default, null);\n            }\n            if (!this.props.page.ok) {\n                return _react2.default.createElement(_OhSnap2.default, { message: \"Sorry, this page does not exist or might be restricted.\" });\n            }\n            var post = this.props.page.post;\n            var tags = [],\n                categories = [];\n            post.taxonomies.forEach(function (taxonomy) {\n                if (taxonomy.type === \"post_category\") {\n                    categories.push(taxonomy.name);\n                } else {\n                    tags.push(taxonomy.name);\n                }\n            });\n            return _react2.default.createElement(\n                \"div\",\n                null,\n                _react2.default.createElement(_SEO2.default, {\n                    schema: \"BlogPosting\",\n                    title: post.title,\n                    description: post.excerpt,\n                    path: \"/post/\" + this.props.match.params.slug,\n                    contentType: \"article\",\n                    category: categories.join(\",\"),\n                    tags: tags,\n                    image: post.cover_image,\n                    settings: this.props.settings || {}\n                }),\n                _react2.default.createElement(_Article2.default, { post: post })\n            );\n        }\n    }]);\n\n    return SinglePage;\n}(_react.Component);\n\nvar _default = (0, _SinglePageData2.default)(SinglePage);\n\nexports.default = _default;\n;\n\n(function () {\n    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n    var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(SinglePage, \"SinglePage\", \"/Users/ajaxtown/Sites/ReactCMS/client/themes/uranium/containers/SinglePage.js\");\n    reactHotLoader.register(_default, \"default\", \"/Users/ajaxtown/Sites/ReactCMS/client/themes/uranium/containers/SinglePage.js\");\n    leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack://server/./client/themes/uranium/containers/SinglePage.js?");

/***/ })

};