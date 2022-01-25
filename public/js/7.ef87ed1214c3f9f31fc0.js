(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Product/productDetails.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Product/productDetails.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = (_defineProperty({
  name: "productDetails",
  data: function data() {
    return {
      id: 0
    };
  },
  computed: Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])(["productImages", "productItem"]),
  created: function created() {
    this.id = this.$route.params.id;
  },
  methods: {
    switchImage: function switchImage(image) {},
    beforeunloadFn: function beforeunloadFn(e) {
      /* 
      axios.get(`/api/product-details/${prodId}`).then((response , $next) => {
                 return $next(response);
           }); */
      //e.preventDefault(); 
      //localStorage.setItem("productImages", this.productImages);

      /* localStorage.setObj("productItem", this.productItem); */
      //console.log(productImages);
    }
  }
}, "created", function created() {
  var _this = this;

  window.addEventListener('beforeunload', function (e) {
    return _this.beforeunloadFn(e);
  });
}));

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Product/productDetails.vue?vue&type=style&index=0&id=2f1c9bc4&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Product/productDetails.vue?vue&type=style&index=0&id=2f1c9bc4&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.allfigures[data-v-2f1c9bc4] :not(:first-child) {\n        display: none;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Product/productDetails.vue?vue&type=style&index=0&id=2f1c9bc4&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Product/productDetails.vue?vue&type=style&index=0&id=2f1c9bc4&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./productDetails.vue?vue&type=style&index=0&id=2f1c9bc4&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Product/productDetails.vue?vue&type=style&index=0&id=2f1c9bc4&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Product/productDetails.vue?vue&type=template&id=2f1c9bc4&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Product/productDetails.vue?vue&type=template&id=2f1c9bc4&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c("section", { staticClass: "mb-5" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-6 mb-4 mb-md-0" }, [
          _c("div", { attrs: { id: "mdb-lightbox-ui" } }),
          _vm._v(" "),
          _c("div", { staticClass: "mdb-lightbox" }, [
            _c("div", { staticClass: "row product-gallery mx-1" }, [
              _c(
                "div",
                { staticClass: "allfigures col-12 mb-0" },
                _vm._l(_vm.productImages, function(pImage) {
                  return _c(
                    "figure",
                    {
                      staticClass:
                        "allimages view overlay rounded z-depth-1 main-img"
                    },
                    [
                      _c(
                        "a",
                        {
                          attrs: {
                            href:
                              "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg",
                            "data-size": "710x823"
                          }
                        },
                        [
                          _c("img", {
                            staticClass: "img-fluid z-depth-1",
                            staticStyle: { "border-radius": "5%" },
                            attrs: {
                              width: "80%",
                              height: "80%",
                              src: "/assets/products/medium/" + pImage.image
                            }
                          })
                        ]
                      )
                    ]
                  )
                }),
                0
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col-12" }, [
                _c(
                  "div",
                  { staticClass: "row" },
                  _vm._l(_vm.productImages, function(pImage) {
                    return _c("div", { staticClass: "col-3" }, [
                      _c(
                        "div",
                        {
                          staticClass:
                            "view overlay rounded z-depth-1 gallery-item"
                        },
                        [
                          _c("img", {
                            staticClass: "img-fluid",
                            attrs: {
                              src: "/assets/products/small/" + pImage.image
                            },
                            on: {
                              click: function($event) {
                                return _vm.switchImage(pImage)
                              }
                            }
                          })
                        ]
                      )
                    ])
                  }),
                  0
                )
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-6" }, [
          _c("h5", [_vm._v("Fantasy T-shirt")]),
          _vm._v(" "),
          _c("p", { staticClass: "mb-2 text-muted text-uppercase small" }, [
            _vm._v("Shirts")
          ]),
          _vm._v(" "),
          _vm._m(0),
          _vm._v(" "),
          _vm._m(1),
          _vm._v(" "),
          _c("p", { staticClass: "pt-1" }, [
            _vm._v(" " + _vm._s(_vm.productItem.description))
          ]),
          _vm._v(" "),
          _vm._m(2),
          _vm._v(" "),
          _c("hr"),
          _vm._v(" "),
          _vm._m(3),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-primary btn-md mr-1 mb-2",
              attrs: { type: "button" }
            },
            [_vm._v("Buy now")]
          ),
          _vm._v(" "),
          _vm._m(4)
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", { staticClass: "rating" }, [
      _c("li", [_c("i", { staticClass: "fas fa-star fa-sm text-primary" })]),
      _vm._v(" "),
      _c("li", [_c("i", { staticClass: "fas fa-star fa-sm text-primary" })]),
      _vm._v(" "),
      _c("li", [_c("i", { staticClass: "fas fa-star fa-sm text-primary" })]),
      _vm._v(" "),
      _c("li", [_c("i", { staticClass: "fas fa-star fa-sm text-primary" })]),
      _vm._v(" "),
      _c("li", [_c("i", { staticClass: "far fa-star fa-sm text-primary" })])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _c("span", { staticClass: "mr-1" }, [_c("strong", [_vm._v("$12.99")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "table-responsive" }, [
      _c("table", { staticClass: "table table-sm table-borderless mb-0" }, [
        _c("tbody", [
          _c("tr", [
            _c("th", { staticClass: "pl-0 w-25", attrs: { scope: "row" } }, [
              _c("strong", [_vm._v("Model")])
            ]),
            _vm._v(" "),
            _c("td", [_vm._v("Shirt 5407X")])
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("th", { staticClass: "pl-0 w-25", attrs: { scope: "row" } }, [
              _c("strong", [_vm._v("Color")])
            ]),
            _vm._v(" "),
            _c("td", [_vm._v("Black")])
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("th", { staticClass: "pl-0 w-25", attrs: { scope: "row" } }, [
              _c("strong", [_vm._v("Delivery")])
            ]),
            _vm._v(" "),
            _c("td", [_vm._v("USA, Europe")])
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "table-responsive mb-2" }, [
      _c("table", { staticClass: "table table-sm table-borderless" }, [
        _c("tbody", [
          _c("tr", [
            _c("td", { staticClass: "pl-0 pb-0 w-25" }, [_vm._v("Quantity")]),
            _vm._v(" "),
            _c("td", { staticClass: "pb-0" }, [_vm._v("Select size")])
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", { staticClass: "pl-0" }, [
              _c(
                "div",
                {
                  staticClass: "def-number-input number-input safari_only mb-0"
                },
                [
                  _c("button", {
                    staticClass: "minus",
                    attrs: {
                      onclick:
                        "this.parentNode.querySelector('input[type=number]').stepDown()"
                    }
                  }),
                  _vm._v(" "),
                  _c("input", {
                    staticClass: "quantity",
                    attrs: {
                      min: "0",
                      name: "quantity",
                      value: "1",
                      type: "number"
                    }
                  }),
                  _vm._v(" "),
                  _c("button", {
                    staticClass: "plus",
                    attrs: {
                      onclick:
                        "this.parentNode.querySelector('input[type=number]').stepUp()"
                    }
                  })
                ]
              )
            ]),
            _vm._v(" "),
            _c("td", [
              _c("div", { staticClass: "mt-1" }, [
                _c(
                  "div",
                  { staticClass: "form-check form-check-inline pl-0" },
                  [
                    _c("input", {
                      staticClass: "form-check-input",
                      attrs: {
                        type: "radio",
                        id: "small",
                        name: "materialExampleRadios",
                        checked: ""
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "label",
                      {
                        staticClass:
                          "form-check-label small text-uppercase card-link-secondary",
                        attrs: { for: "small" }
                      },
                      [_vm._v("Small")]
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "form-check form-check-inline pl-0" },
                  [
                    _c("input", {
                      staticClass: "form-check-input",
                      attrs: {
                        type: "radio",
                        id: "medium",
                        name: "materialExampleRadios"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "label",
                      {
                        staticClass:
                          "form-check-label small text-uppercase card-link-secondary",
                        attrs: { for: "medium" }
                      },
                      [_vm._v("Medium")]
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "form-check form-check-inline pl-0" },
                  [
                    _c("input", {
                      staticClass: "form-check-input",
                      attrs: {
                        type: "radio",
                        id: "large",
                        name: "materialExampleRadios"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "label",
                      {
                        staticClass:
                          "form-check-label small text-uppercase card-link-secondary",
                        attrs: { for: "large" }
                      },
                      [_vm._v("Large")]
                    )
                  ]
                )
              ])
            ])
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "btn btn-light btn-md mr-1 mb-2",
        attrs: { type: "button" }
      },
      [
        _c("i", { staticClass: "fas fa-shopping-cart pr-2" }),
        _vm._v("Add to cart")
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Product/productDetails.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/Product/productDetails.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _productDetails_vue_vue_type_template_id_2f1c9bc4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./productDetails.vue?vue&type=template&id=2f1c9bc4&scoped=true& */ "./resources/js/components/Product/productDetails.vue?vue&type=template&id=2f1c9bc4&scoped=true&");
/* harmony import */ var _productDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./productDetails.vue?vue&type=script&lang=js& */ "./resources/js/components/Product/productDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _productDetails_vue_vue_type_style_index_0_id_2f1c9bc4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./productDetails.vue?vue&type=style&index=0&id=2f1c9bc4&scoped=true&lang=css& */ "./resources/js/components/Product/productDetails.vue?vue&type=style&index=0&id=2f1c9bc4&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _productDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _productDetails_vue_vue_type_template_id_2f1c9bc4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _productDetails_vue_vue_type_template_id_2f1c9bc4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2f1c9bc4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Product/productDetails.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Product/productDetails.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/Product/productDetails.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_productDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./productDetails.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Product/productDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_productDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Product/productDetails.vue?vue&type=style&index=0&id=2f1c9bc4&scoped=true&lang=css&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/components/Product/productDetails.vue?vue&type=style&index=0&id=2f1c9bc4&scoped=true&lang=css& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_productDetails_vue_vue_type_style_index_0_id_2f1c9bc4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./productDetails.vue?vue&type=style&index=0&id=2f1c9bc4&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Product/productDetails.vue?vue&type=style&index=0&id=2f1c9bc4&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_productDetails_vue_vue_type_style_index_0_id_2f1c9bc4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_productDetails_vue_vue_type_style_index_0_id_2f1c9bc4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_productDetails_vue_vue_type_style_index_0_id_2f1c9bc4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_productDetails_vue_vue_type_style_index_0_id_2f1c9bc4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/Product/productDetails.vue?vue&type=template&id=2f1c9bc4&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/Product/productDetails.vue?vue&type=template&id=2f1c9bc4&scoped=true& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_productDetails_vue_vue_type_template_id_2f1c9bc4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./productDetails.vue?vue&type=template&id=2f1c9bc4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Product/productDetails.vue?vue&type=template&id=2f1c9bc4&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_productDetails_vue_vue_type_template_id_2f1c9bc4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_productDetails_vue_vue_type_template_id_2f1c9bc4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);