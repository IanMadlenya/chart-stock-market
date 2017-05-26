webpackJsonp([2,5],{

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(79);


/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });




var ApiService = (function () {
    function ApiService(http) {
        this.http = http;
        this.stocksChanged = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
    }
    ApiService.prototype.getStocks = function () {
        var _this = this;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiRootUrl + "/stocks")
            .toPromise()
            .then(function (response) {
            _this.stocks = response.json().data;
            _this.stocksChanged.next(_this.stocks);
        })
            .catch(this.handleError);
    };
    ApiService.prototype.getStock = function (symbol) {
        var _this = this;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiRootUrl + "/stocks/" + symbol)
            .toPromise()
            .then(function (response) {
            var stock = response.json().data;
            _this.stocks = [stock].concat(_this.stocks);
            _this.stocksChanged.next(_this.stocks);
        })
            .catch(this.handleError);
    };
    ApiService.prototype.addStock = function (symbol) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiRootUrl + "/stocks", { symbol: symbol })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ApiService.prototype.removeStock = function (symbol) {
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiRootUrl + "/stocks/" + symbol)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ApiService.prototype.remove = function (symbol) {
        this.stocks = this.stocks.filter(function (s) { return s.dataset_code !== symbol; });
        this.stocksChanged.next(this.stocks);
    };
    ApiService.prototype.handleError = function (err) {
        if (err instanceof __WEBPACK_IMPORTED_MODULE_0__angular_http__["l" /* Response */]) {
            var error = err.json().error;
            return Promise.reject(error.message || error);
        }
        return Promise.reject(err.message || err);
    };
    ApiService.ctorParameters = function () { return [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_http__["k" /* Http */] }]; };
    return ApiService;
}());

//# sourceMappingURL=api.service.js.map

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    apiRootUrl: '/api',
    wsUrl: 'wss://vs-stock-market.herokuapp.com'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 78:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 78;


/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gendir_app_app_module_ngfactory__ = __webpack_require__(86);




if (__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* platformBrowser */])().bootstrapModuleFactory(__WEBPACK_IMPORTED_MODULE_3__gendir_app_app_module_ngfactory__["a" /* AppModuleNgFactory */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */ var styles = [''];
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL3ZhbmNvc3Rvamtvdi9TZXJ2ZXIvdHJhaW5pbmcvZnJlZWNvZGVjYW1wL2FwaS1wcm9qZWN0cy92cy1zdG9jay1tYXJrZXQvY2xpZW50L3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3Muc2hpbS5uZ3N0eWxlLnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vVXNlcnMvdmFuY29zdG9qa292L1NlcnZlci90cmFpbmluZy9mcmVlY29kZWNhbXAvYXBpLXByb2plY3RzL3ZzLXN0b2NrLW1hcmtldC9jbGllbnQvc3JjL2FwcC9hcHAuY29tcG9uZW50LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIiAiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OzsifQ==
//# sourceMappingURL=app.component.css.shim.ngstyle.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component_css_shim_ngstyle__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_highcharts_src_ng2_highstocks__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_component__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_api_service__ = __webpack_require__(31);
/* unused harmony export RenderType_AppComponent */
/* unused harmony export View_AppComponent_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponentNgFactory; });
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */







var styles_AppComponent = [__WEBPACK_IMPORTED_MODULE_0__app_component_css_shim_ngstyle__["a" /* styles */]];
var RenderType_AppComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵcrt"]({
    encapsulation: 0,
    styles: styles_AppComponent,
    data: {}
});
function View_AppComponent_1(l) {
    return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, null, null, 7, 'div', [
            [
                'class',
                'alert alert-danger mt-3'
            ],
            [
                'role',
                'alert'
            ]
        ], null, null, null, null, null)),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](null, ['\n    '])),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, null, null, 4, 'button', [
            [
                'aria-label',
                'Close'
            ],
            [
                'class',
                'close'
            ],
            [
                'type',
                'button'
            ]
        ], null, [[
                null,
                'click'
            ]
        ], function (v, en, $event) {
            var ad = true;
            var co = v.component;
            if (('click' === en)) {
                var pd_0 = (co.onClearError() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](null, ['\n      '])),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, null, null, 1, 'span', [[
                'aria-hidden',
                'true'
            ]
        ], null, null, null, null, null)),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](null, ['×'])),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](null, ['\n    '])),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](null, [
            '\n    ',
            '\n  '
        ]))
    ], null, function (ck, v) {
        var co = v.component;
        var currVal_0 = co.error;
        ck(v, 7, 0, currVal_0);
    });
}
function View_AppComponent_2(l) {
    return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, null, null, 0, 'span', [[
                'class',
                'loader'
            ]
        ], null, null, null, null, null))], null, null);
}
function View_AppComponent_3(l) {
    return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, null, null, 13, 'div', [
            [
                'class',
                'alert alert-info empty-stocks'
            ],
            [
                'role',
                'alert'
            ]
        ], null, null, null, null, null)),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](null, ['\n    '])),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, null, null, 1, 'h5', [[
                'class',
                'alert-heading'
            ]
        ], null, null, null, null, null)),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](null, ['Please add stock symbol to see the chart!'])),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](null, ['\n    '])),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, null, null, 7, 'p', [], null, null, null, null, null)),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](null, ['\n      For example, you may try '])),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, null, null, 1, 'strong', [], null, null, null, null, null)),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](null, ['MSFT'])),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](null, [' to see Microsoft\'s, or '])),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, null, null, 1, 'strong', [], null, null, null, null, null)),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](null, ['FB'])),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](null, [' to see Facebook\'s stocks.\n    '])),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](null, ['\n  ']))
    ], null, null);
}
function View_AppComponent_4(l) {
    return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, null, null, 21, 'div', [[
                'class',
                'col-sm-6 col-md-4 col-lg-3'
            ]
        ], null, null, null, null, null)),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](null, ['\n      '])),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, null, null, 18, 'div', [[
                'class',
                'card stock mb-4'
            ]
        ], null, null, null, null, null)),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](null, ['\n        '])),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, null, null, 9, 'h3', [[
                'class',
                'card-header'
            ]
        ], null, null, null, null, null)),
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](278528, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* NgStyle */], [
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["KeyValueDiffers"],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer"]
        ], { ngStyle: [
                0,
                'ngStyle'
            ]
        }, null),
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpod"](['color']),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](null, [
            '\n          ',
            '\n          '
        ])),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, null, null, 4, 'button', [
            [
                'aria-label',
                'Remove'
            ],
            [
                'class',
                'close'
            ],
            [
                'type',
                'button'
            ]
        ], null, [[
                null,
                'click'
            ]
        ], function (v, en, $event) {
            var ad = true;
            var co = v.component;
            if (('click' === en)) {
                var pd_0 = (co.onStockRemove(v.context.$implicit.dataset_code) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](null, ['\n            '])),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, null, null, 1, 'span', [[
                'aria-hidden',
                'true'
            ]
        ], null, null, null, null, null)),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](null, ['×'])),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](null, ['\n          '])),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](null, ['\n        '])),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](null, ['\n        '])),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, null, null, 4, 'div', [[
                'class',
                'card-block'
            ]
        ], null, null, null, null, null)),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](null, ['\n          '])),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, null, null, 1, 'p', [[
                'class',
                'card-text'
            ]
        ], [[
                8,
                'title',
                0
            ]
        ], null, null, null, null)),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](null, [
            '',
            ''
        ])),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](null, ['\n        '])),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](null, ['\n      '])),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](null, ['\n    ']))
    ], function (ck, v) {
        var co = v.component;
        var currVal_0 = ck(v, 6, 0, co.options.colors[(v.context.index % co.options.colors.length)]);
        ck(v, 5, 0, currVal_0);
    }, function (ck, v) {
        var currVal_1 = v.context.$implicit.dataset_code;
        ck(v, 7, 0, currVal_1);
        var currVal_2 = v.context.$implicit.name;
        ck(v, 17, 0, currVal_2);
        var currVal_3 = v.context.$implicit.name;
        ck(v, 18, 0, currVal_3);
    });
}
function View_AppComponent_0(l) {
    return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, null, null, 45, 'div', [[
                'class',
                'container stock-container'
            ]
        ], null, null, null, null, null)),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](null, ['\n  '])),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, null, null, 1, 'div', [], null, null, null, null, null)),
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](409600, null, 0, __WEBPACK_IMPORTED_MODULE_3_ng2_highcharts_src_ng2_highstocks__["a" /* Ng2Highstocks */], [
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["KeyValueDiffers"]
        ], { options: [
                0,
                'options'
            ]
        }, null),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](null, ['\n\n  '])),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 1, null, View_AppComponent_1)),
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](16384, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_common__["g" /* NgIf */], [
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"]
        ], { ngIf: [
                0,
                'ngIf'
            ]
        }, null),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](null, ['\n\n  '])),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, null, null, 27, 'form', [[
                'novalidate',
                ''
            ]
        ], [
            [
                2,
                'ng-untouched',
                null
            ],
            [
                2,
                'ng-touched',
                null
            ],
            [
                2,
                'ng-pristine',
                null
            ],
            [
                2,
                'ng-dirty',
                null
            ],
            [
                2,
                'ng-valid',
                null
            ],
            [
                2,
                'ng-invalid',
                null
            ],
            [
                2,
                'ng-pending',
                null
            ]
        ], [
            [
                null,
                'ngSubmit'
            ],
            [
                null,
                'submit'
            ],
            [
                null,
                'reset'
            ]
        ], function (v, en, $event) {
            var ad = true;
            var co = v.component;
            if (('submit' === en)) {
                var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](v, 10).onSubmit($event) !== false);
                ad = (pd_0 && ad);
            }
            if (('reset' === en)) {
                var pd_1 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](v, 10).onReset() !== false);
                ad = (pd_1 && ad);
            }
            if (('ngSubmit' === en)) {
                var pd_2 = (co.onStockAdd() !== false);
                ad = (pd_2 && ad);
            }
            return ad;
        }, null, null)),
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](16384, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* ɵbf */], [], null, null),
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](540672, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* FormGroupDirective */], [
            [
                8,
                null
            ],
            [
                8,
                null
            ]
        ], { form: [
                0,
                'form'
            ]
        }, { ngSubmit: 'ngSubmit' }),
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](2048, null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* ControlContainer */], null, [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* FormGroupDirective */]]),
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](16384, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* NgControlStatusGroup */], [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* ControlContainer */]], null, null),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](null, ['\n    '])),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, null, null, 20, 'div', [[
                'class',
                'form-group row'
            ]
        ], null, null, null, null, null)),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](null, ['\n      '])),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, null, null, 8, 'div', [[
                'class',
                'col-md-8 mt-3'
            ]
        ], null, null, null, null, null)),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](null, ['\n        '])),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, null, null, 5, 'input', [
            [
                'class',
                'form-control'
            ],
            [
                'formControlName',
                'symbol'
            ],
            [
                'id',
                'symbol'
            ],
            [
                'placeholder',
                'Stock Symbol, ex. MSFT'
            ],
            [
                'type',
                'text'
            ]
        ], [
            [
                2,
                'ng-untouched',
                null
            ],
            [
                2,
                'ng-touched',
                null
            ],
            [
                2,
                'ng-pristine',
                null
            ],
            [
                2,
                'ng-dirty',
                null
            ],
            [
                2,
                'ng-valid',
                null
            ],
            [
                2,
                'ng-invalid',
                null
            ],
            [
                2,
                'ng-pending',
                null
            ]
        ], [
            [
                null,
                'input'
            ],
            [
                null,
                'blur'
            ],
            [
                null,
                'compositionstart'
            ],
            [
                null,
                'compositionend'
            ]
        ], function (v, en, $event) {
            var ad = true;
            if (('input' === en)) {
                var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](v, 19)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
                var pd_1 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](v, 19).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
                var pd_2 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](v, 19)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
                var pd_3 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](v, 19)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            return ad;
        }, null, null)),
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](16384, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["i" /* DefaultValueAccessor */], [
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer"],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"],
            [
                2,
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["j" /* COMPOSITION_BUFFER_MODE */]
            ]
        ], null, null),
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](1024, null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["k" /* NG_VALUE_ACCESSOR */], function (p0_0) {
            return [p0_0];
        }, [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["i" /* DefaultValueAccessor */]]),
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](671744, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["l" /* FormControlName */], [
            [
                3,
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* ControlContainer */]
            ],
            [
                8,
                null
            ],
            [
                8,
                null
            ],
            [
                2,
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["k" /* NG_VALUE_ACCESSOR */]
            ]
        ], { name: [
                0,
                'name'
            ]
        }, null),
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](2048, null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["m" /* NgControl */], null, [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["l" /* FormControlName */]]),
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](16384, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["n" /* NgControlStatus */], [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["m" /* NgControl */]], null, null),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](null, ['\n      '])),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](null, ['\n      '])),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, null, null, 7, 'div', [[
                'class',
                'col-md-4 mt-3 mb-3 text-right'
            ]
        ], null, null, null, null, null)),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](null, ['\n        '])),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 1, null, View_AppComponent_2)),
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](16384, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_common__["g" /* NgIf */], [
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"]
        ], { ngIf: [
                0,
                'ngIf'
            ]
        }, null),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](null, ['\n        '])),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, null, null, 1, 'button', [
            [
                'class',
                'btn btn-primary'
            ],
            [
                'type',
                'submit'
            ]
        ], [[
                8,
                'disabled',
                0
            ]
        ], null, null, null, null)),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](null, ['Add Symbol'])),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](null, ['\n      '])),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](null, ['\n    '])),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](null, ['\n  '])),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](null, ['\n\n  '])),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 1, null, View_AppComponent_3)),
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](16384, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_common__["g" /* NgIf */], [
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"]
        ], { ngIf: [
                0,
                'ngIf'
            ]
        }, null),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](null, ['\n\n  '])),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, null, null, 4, 'div', [[
                'class',
                'row'
            ]
        ], null, null, null, null, null)),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](null, ['\n    '])),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 1, null, View_AppComponent_4)),
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](802816, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_common__["h" /* NgForOf */], [
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["IterableDiffers"]
        ], { ngForOf: [
                0,
                'ngForOf'
            ]
        }, null),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](null, ['\n  '])),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](null, ['\n'])),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](null, ['\n']))
    ], function (ck, v) {
        var co = v.component;
        var currVal_0 = co.options;
        ck(v, 3, 0, currVal_0);
        var currVal_1 = co.error;
        ck(v, 6, 0, currVal_1);
        var currVal_9 = co.stockForm;
        ck(v, 10, 0, currVal_9);
        var currVal_17 = 'symbol';
        ck(v, 21, 0, currVal_17);
        var currVal_18 = co.loading;
        ck(v, 29, 0, currVal_18);
        var currVal_20 = (co.stocks && !co.stocks.length);
        ck(v, 38, 0, currVal_20);
        var currVal_21 = co.stocks;
        ck(v, 43, 0, currVal_21);
    }, function (ck, v) {
        var co = v.component;
        var currVal_2 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](v, 12).ngClassUntouched;
        var currVal_3 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](v, 12).ngClassTouched;
        var currVal_4 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](v, 12).ngClassPristine;
        var currVal_5 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](v, 12).ngClassDirty;
        var currVal_6 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](v, 12).ngClassValid;
        var currVal_7 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](v, 12).ngClassInvalid;
        var currVal_8 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](v, 12).ngClassPending;
        ck(v, 8, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8);
        var currVal_10 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](v, 23).ngClassUntouched;
        var currVal_11 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](v, 23).ngClassTouched;
        var currVal_12 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](v, 23).ngClassPristine;
        var currVal_13 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](v, 23).ngClassDirty;
        var currVal_14 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](v, 23).ngClassValid;
        var currVal_15 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](v, 23).ngClassInvalid;
        var currVal_16 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](v, 23).ngClassPending;
        ck(v, 18, 0, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16);
        var currVal_19 = !co.stockForm.valid;
        ck(v, 31, 0, currVal_19);
    });
}
function View_AppComponent_Host_0(l) {
    return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, null, null, 1, 'app-root', [], null, null, null, View_AppComponent_0, RenderType_AppComponent)),
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](245760, null, 0, __WEBPACK_IMPORTED_MODULE_4__app_app_component__["a" /* AppComponent */], [__WEBPACK_IMPORTED_MODULE_6__app_api_service__["a" /* ApiService */]], null, null)
    ], function (ck, v) {
        ck(v, 1, 0);
    }, null);
}
var AppComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵccf"]('app-root', __WEBPACK_IMPORTED_MODULE_4__app_app_component__["a" /* AppComponent */], View_AppComponent_Host_0, {}, {}, []);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL3ZhbmNvc3Rvamtvdi9TZXJ2ZXIvdHJhaW5pbmcvZnJlZWNvZGVjYW1wL2FwaS1wcm9qZWN0cy92cy1zdG9jay1tYXJrZXQvY2xpZW50L3NyYy9hcHAvYXBwLmNvbXBvbmVudC5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9Vc2Vycy92YW5jb3N0b2prb3YvU2VydmVyL3RyYWluaW5nL2ZyZWVjb2RlY2FtcC9hcGktcHJvamVjdHMvdnMtc3RvY2stbWFya2V0L2NsaWVudC9zcmMvYXBwL2FwcC5jb21wb25lbnQudHMiLCJuZzovLy9Vc2Vycy92YW5jb3N0b2prb3YvU2VydmVyL3RyYWluaW5nL2ZyZWVjb2RlY2FtcC9hcGktcHJvamVjdHMvdnMtc3RvY2stbWFya2V0L2NsaWVudC9zcmMvYXBwL2FwcC5jb21wb25lbnQuaHRtbCIsIm5nOi8vL1VzZXJzL3ZhbmNvc3Rvamtvdi9TZXJ2ZXIvdHJhaW5pbmcvZnJlZWNvZGVjYW1wL2FwaS1wcm9qZWN0cy92cy1zdG9jay1tYXJrZXQvY2xpZW50L3NyYy9hcHAvYXBwLmNvbXBvbmVudC50cy5BcHBDb21wb25lbnRfSG9zdC5odG1sIl0sInNvdXJjZXNDb250ZW50IjpbIiAiLCI8ZGl2IGNsYXNzPVwiY29udGFpbmVyIHN0b2NrLWNvbnRhaW5lclwiPlxuICA8ZGl2IFtuZzItaGlnaHN0b2Nrc109XCJvcHRpb25zXCI+PC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlciBtdC0zXCIgcm9sZT1cImFsZXJ0XCIgKm5nSWY9XCJlcnJvclwiPlxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIiAoY2xpY2spPVwib25DbGVhckVycm9yKClcIj5cbiAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XG4gICAgPC9idXR0b24+XG4gICAge3sgZXJyb3IgfX1cbiAgPC9kaXY+XG5cbiAgPGZvcm0gW2Zvcm1Hcm91cF09XCJzdG9ja0Zvcm1cIiAobmdTdWJtaXQpPVwib25TdG9ja0FkZCgpXCI+XG4gICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTggbXQtM1wiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlN0b2NrIFN5bWJvbCwgZXguIE1TRlRcIiBpZD1cInN5bWJvbFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgZm9ybUNvbnRyb2xOYW1lPVwic3ltYm9sXCI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNCBtdC0zIG1iLTMgdGV4dC1yaWdodFwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImxvYWRlclwiICpuZ0lmPVwibG9hZGluZ1wiPjwvc3Bhbj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiBbZGlzYWJsZWRdPVwiIXN0b2NrRm9ybS52YWxpZFwiPkFkZCBTeW1ib2w8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Zvcm0+XG5cbiAgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWluZm8gZW1wdHktc3RvY2tzXCIgcm9sZT1cImFsZXJ0XCIgKm5nSWY9XCJzdG9ja3MgJiYgIXN0b2Nrcy5sZW5ndGhcIj5cbiAgICA8aDUgY2xhc3M9XCJhbGVydC1oZWFkaW5nXCI+UGxlYXNlIGFkZCBzdG9jayBzeW1ib2wgdG8gc2VlIHRoZSBjaGFydCE8L2g1PlxuICAgIDxwPlxuICAgICAgRm9yIGV4YW1wbGUsIHlvdSBtYXkgdHJ5IDxzdHJvbmc+TVNGVDwvc3Ryb25nPiB0byBzZWUgTWljcm9zb2Z0J3MsIG9yIDxzdHJvbmc+RkI8L3N0cm9uZz4gdG8gc2VlIEZhY2Vib29rJ3Mgc3RvY2tzLlxuICAgIDwvcD5cbiAgPC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNiBjb2wtbWQtNCBjb2wtbGctM1wiICpuZ0Zvcj1cImxldCBzdG9jayBvZiBzdG9ja3M7IGxldCBpID0gaW5kZXhcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkIHN0b2NrIG1iLTRcIj5cbiAgICAgICAgPGgzIGNsYXNzPVwiY2FyZC1oZWFkZXJcIiBbbmdTdHlsZV09XCJ7Y29sb3I6IG9wdGlvbnMuY29sb3JzW2klb3B0aW9ucy5jb2xvcnMubGVuZ3RoXX1cIj5cbiAgICAgICAgICB7eyBzdG9jay5kYXRhc2V0X2NvZGUgfX1cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgYXJpYS1sYWJlbD1cIlJlbW92ZVwiIChjbGljayk9XCJvblN0b2NrUmVtb3ZlKHN0b2NrLmRhdGFzZXRfY29kZSlcIj5cbiAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvaDM+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJsb2NrXCI+XG4gICAgICAgICAgPHAgY2xhc3M9XCJjYXJkLXRleHRcIiBbdGl0bGVdPVwic3RvY2submFtZVwiPnt7IHN0b2NrLm5hbWUgfX08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+XG4iLCI8YXBwLXJvb3Q+PC9hcHAtcm9vdD4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNHRTtNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztJQUFBO0tBQUE7SUFBZ0U7SUFDOUQ7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7TUFBQTtNQUFBO01BQXVEO1FBQUE7UUFBQTtNQUFBO01BQXZEO0lBQUE7SUFBZ0Y7TUFDOUU7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUF5QjtJQUFjO0lBQ2hDO01BQUE7TUFBQTtJQUFBO0lBQUE7Ozs7SUFBQTtJQUFBOzs7OzZCQVVMO1FBQUE7UUFBQTtNQUFBO0VBQUE7Ozs7SUFNTjtNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztJQUFBO0tBQUE7SUFBeUY7TUFDdkY7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUEwQjtJQUE4QztJQUN4RTtJQUFHO0lBQ3dCO0lBQVE7SUFBYTtJQUF3QjtJQUFRO0lBQVc7SUFDdkY7Ozs7OztNQUlKO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBb0Y7TUFDbEY7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUE2QjtNQUMzQjtRQUFBO1FBQUE7TUFBQTtJQUFBO2dCQUFBOzs7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO2dCQUF3QjtJQUE2RDtNQUFBO01BQUE7SUFBQTtJQUFBO0lBRW5GO01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO01BQUE7TUFBQTtNQUF3RDtRQUFBO1FBQUE7TUFBQTtNQUF4RDtJQUFBO0lBQW9HO01BQ2xHO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBeUI7SUFBYztJQUNoQztJQUNOO01BQ0w7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUF3QjtNQUN0QjtRQUFBO1FBQUE7TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUEwQztNQUFBO01BQUE7SUFBQTtJQUFBO0lBQW9CO0lBQzFEO0lBQ0Y7Ozs7SUFUb0I7SUFBeEIsU0FBd0IsU0FBeEI7O0lBQXFGO0lBQUE7SUFPOUQ7SUFBckIsVUFBcUIsU0FBckI7SUFBMEM7SUFBQTs7Ozs7TUF2Q3BEO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBdUM7SUFDckM7Z0JBQUE7OztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUFzQztJQUV0QztnQkFBQTs7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBS007TUFFTjtRQUFBO1FBQUE7TUFBQTtJQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtLQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7S0FBQTtNQUFBO01BQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTtNQUFBO1FBQUE7UUFBQTtNQUFBO01BQThCO1FBQUE7UUFBQTtNQUFBO01BQTlCO0lBQUE7Z0JBQUE7Z0JBQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7Z0JBQUE7Z0JBQUE7SUFBd0Q7TUFDdEQ7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUE0QjtNQUMxQjtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQTJCO0lBQ3pCO01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7S0FBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7S0FBQTtNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztJQUFBO0tBQUE7TUFBQTtNQUFBO1FBQUE7UUFBQTtNQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTtNQUFBO1FBQUE7UUFBQTtNQUFBO01BQUE7SUFBQTtnQkFBQTs7O01BQUE7UUFBQTs7TUFBQTs7SUFBQTtLQUFBO2dCQUFBO01BQUE7SUFBQTtnQkFBQTtNQUFBO1FBQUE7O01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTs7TUFBQTs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7Z0JBQUE7Z0JBQUE7SUFBa0g7SUFDOUc7TUFDTjtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQTJDO0lBQ3pDO2dCQUFBOzs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBNEM7SUFDNUM7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtPQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUE0RTtJQUFtQjtJQUMzRjtJQUNGO0lBQ0Q7SUFFUDtnQkFBQTs7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBS007TUFFTjtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQWlCO0lBQ2Y7Z0JBQUE7Ozs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFZTTtJQUNGO0lBQ0Y7Ozs7SUEzQ0M7SUFBTCxTQUFLLFNBQUw7SUFFa0Q7SUFBbEQsU0FBa0QsU0FBbEQ7SUFPTTtJQUFOLFVBQU0sU0FBTjtJQUcrRjtJQUF6RixVQUF5RixVQUF6RjtJQUdxQjtJQUFyQixVQUFxQixVQUFyQjtJQU1rRDtJQUF4RCxVQUF3RCxVQUF4RDtJQVEwQztJQUF4QyxVQUF3QyxVQUF4Qzs7O0lBcEJGO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUEsU0FBQSxxRUFBQTtJQUdNO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUEsVUFBQSw0RUFBQTtJQUk4QztJQUE5QyxVQUE4QyxVQUE5Qzs7Ozs7SUNqQlI7Z0JBQUE7OztJQUFBOzs7In0=
//# sourceMappingURL=app.component.ngfactory.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_module__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_highcharts_index__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_api_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component_ngfactory__ = __webpack_require__(85);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModuleNgFactory; });
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();









var AppModuleInjector = (function (_super) {
    __extends(AppModuleInjector, _super);
    function AppModuleInjector(parent) {
        return _super.call(this, parent, [__WEBPACK_IMPORTED_MODULE_8__app_component_ngfactory__["a" /* AppComponentNgFactory */]], [__WEBPACK_IMPORTED_MODULE_8__app_component_ngfactory__["a" /* AppComponentNgFactory */]]) || this;
    }
    Object.defineProperty(AppModuleInjector.prototype, "_LOCALE_ID_13", {
        get: function () {
            if ((this.__LOCALE_ID_13 == null)) {
                (this.__LOCALE_ID_13 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵn"](this.parent.get(__WEBPACK_IMPORTED_MODULE_0__angular_core__["LOCALE_ID"], null)));
            }
            return this.__LOCALE_ID_13;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_NgLocalization_14", {
        get: function () {
            if ((this.__NgLocalization_14 == null)) {
                (this.__NgLocalization_14 = new __WEBPACK_IMPORTED_MODULE_2__angular_common__["a" /* NgLocaleLocalization */](this._LOCALE_ID_13));
            }
            return this.__NgLocalization_14;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Compiler_15", {
        get: function () {
            if ((this.__Compiler_15 == null)) {
                (this.__Compiler_15 = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["Compiler"]());
            }
            return this.__Compiler_15;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_APP_ID_16", {
        get: function () {
            if ((this.__APP_ID_16 == null)) {
                (this.__APP_ID_16 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵg"]());
            }
            return this.__APP_ID_16;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_IterableDiffers_17", {
        get: function () {
            if ((this.__IterableDiffers_17 == null)) {
                (this.__IterableDiffers_17 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵl"]());
            }
            return this.__IterableDiffers_17;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_KeyValueDiffers_18", {
        get: function () {
            if ((this.__KeyValueDiffers_18 == null)) {
                (this.__KeyValueDiffers_18 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵm"]());
            }
            return this.__KeyValueDiffers_18;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DomSanitizer_19", {
        get: function () {
            if ((this.__DomSanitizer_19 == null)) {
                (this.__DomSanitizer_19 = new __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* ɵe */](this.parent.get(__WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DOCUMENT */])));
            }
            return this.__DomSanitizer_19;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Sanitizer_20", {
        get: function () {
            if ((this.__Sanitizer_20 == null)) {
                (this.__Sanitizer_20 = this._DomSanitizer_19);
            }
            return this.__Sanitizer_20;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_HAMMER_GESTURE_CONFIG_21", {
        get: function () {
            if ((this.__HAMMER_GESTURE_CONFIG_21 == null)) {
                (this.__HAMMER_GESTURE_CONFIG_21 = new __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["d" /* HammerGestureConfig */]());
            }
            return this.__HAMMER_GESTURE_CONFIG_21;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_EVENT_MANAGER_PLUGINS_22", {
        get: function () {
            if ((this.__EVENT_MANAGER_PLUGINS_22 == null)) {
                (this.__EVENT_MANAGER_PLUGINS_22 = [
                    new __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["e" /* ɵDomEventsPlugin */](this.parent.get(__WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DOCUMENT */])),
                    new __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["f" /* ɵKeyEventsPlugin */](this.parent.get(__WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DOCUMENT */])),
                    new __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["g" /* ɵHammerGesturesPlugin */](this.parent.get(__WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DOCUMENT */]), this._HAMMER_GESTURE_CONFIG_21)
                ]);
            }
            return this.__EVENT_MANAGER_PLUGINS_22;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_EventManager_23", {
        get: function () {
            if ((this.__EventManager_23 == null)) {
                (this.__EventManager_23 = new __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["h" /* EventManager */](this._EVENT_MANAGER_PLUGINS_22, this.parent.get(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"])));
            }
            return this.__EventManager_23;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_\u0275DomSharedStylesHost_24", {
        get: function () {
            if ((this.__ɵDomSharedStylesHost_24 == null)) {
                (this.__ɵDomSharedStylesHost_24 = new __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["i" /* ɵDomSharedStylesHost */](this.parent.get(__WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DOCUMENT */])));
            }
            return this.__ɵDomSharedStylesHost_24;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_\u0275DomRendererFactory2_25", {
        get: function () {
            if ((this.__ɵDomRendererFactory2_25 == null)) {
                (this.__ɵDomRendererFactory2_25 = new __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["j" /* ɵDomRendererFactory2 */](this._EventManager_23, this._ɵDomSharedStylesHost_24));
            }
            return this.__ɵDomRendererFactory2_25;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RendererFactory2_26", {
        get: function () {
            if ((this.__RendererFactory2_26 == null)) {
                (this.__RendererFactory2_26 = this._ɵDomRendererFactory2_25);
            }
            return this.__RendererFactory2_26;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_\u0275SharedStylesHost_27", {
        get: function () {
            if ((this.__ɵSharedStylesHost_27 == null)) {
                (this.__ɵSharedStylesHost_27 = this._ɵDomSharedStylesHost_24);
            }
            return this.__ɵSharedStylesHost_27;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Testability_28", {
        get: function () {
            if ((this.__Testability_28 == null)) {
                (this.__Testability_28 = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["Testability"](this.parent.get(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"])));
            }
            return this.__Testability_28;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Meta_29", {
        get: function () {
            if ((this.__Meta_29 == null)) {
                (this.__Meta_29 = new __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["k" /* Meta */](this.parent.get(__WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DOCUMENT */])));
            }
            return this.__Meta_29;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Title_30", {
        get: function () {
            if ((this.__Title_30 == null)) {
                (this.__Title_30 = new __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["l" /* Title */](this.parent.get(__WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DOCUMENT */])));
            }
            return this.__Title_30;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_FormBuilder_31", {
        get: function () {
            if ((this.__FormBuilder_31 == null)) {
                (this.__FormBuilder_31 = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */]());
            }
            return this.__FormBuilder_31;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_\u0275i_32", {
        get: function () {
            if ((this.__ɵi_32 == null)) {
                (this.__ɵi_32 = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* ɵi */]());
            }
            return this.__ɵi_32;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_BrowserXhr_33", {
        get: function () {
            if ((this.__BrowserXhr_33 == null)) {
                (this.__BrowserXhr_33 = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* BrowserXhr */]());
            }
            return this.__BrowserXhr_33;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ResponseOptions_34", {
        get: function () {
            if ((this.__ResponseOptions_34 == null)) {
                (this.__ResponseOptions_34 = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* BaseResponseOptions */]());
            }
            return this.__ResponseOptions_34;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_XSRFStrategy_35", {
        get: function () {
            if ((this.__XSRFStrategy_35 == null)) {
                (this.__XSRFStrategy_35 = __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* ɵb */]());
            }
            return this.__XSRFStrategy_35;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_XHRBackend_36", {
        get: function () {
            if ((this.__XHRBackend_36 == null)) {
                (this.__XHRBackend_36 = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["d" /* XHRBackend */](this._BrowserXhr_33, this._ResponseOptions_34, this._XSRFStrategy_35));
            }
            return this.__XHRBackend_36;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RequestOptions_37", {
        get: function () {
            if ((this.__RequestOptions_37 == null)) {
                (this.__RequestOptions_37 = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["e" /* BaseRequestOptions */]());
            }
            return this.__RequestOptions_37;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Http_38", {
        get: function () {
            if ((this.__Http_38 == null)) {
                (this.__Http_38 = __WEBPACK_IMPORTED_MODULE_5__angular_http__["f" /* ɵc */](this._XHRBackend_36, this._RequestOptions_37));
            }
            return this.__Http_38;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ApiService_39", {
        get: function () {
            if ((this.__ApiService_39 == null)) {
                (this.__ApiService_39 = new __WEBPACK_IMPORTED_MODULE_7__app_api_service__["a" /* ApiService */](this._Http_38));
            }
            return this.__ApiService_39;
        },
        enumerable: true,
        configurable: true
    });
    AppModuleInjector.prototype.createInternal = function () {
        this._CommonModule_0 = new __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */]();
        this._ErrorHandler_1 = __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["m" /* ɵa */]();
        this._APP_INITIALIZER_2 = [
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵo"],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["n" /* ɵc */](this.parent.get(__WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["o" /* NgProbeToken */], null), this.parent.get(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgProbeToken"], null))
        ];
        this._ApplicationInitStatus_3 = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationInitStatus"](this._APP_INITIALIZER_2);
        this._ɵf_4 = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵf"](this.parent.get(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]), this.parent.get(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵConsole"]), this, this._ErrorHandler_1, this.componentFactoryResolver, this._ApplicationInitStatus_3);
        this._ApplicationRef_5 = this._ɵf_4;
        this._ApplicationModule_6 = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationModule"](this._ApplicationRef_5);
        this._BrowserModule_7 = new __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["p" /* BrowserModule */](this.parent.get(__WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["p" /* BrowserModule */], null));
        this._ɵba_8 = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* ɵba */]();
        this._ReactiveFormsModule_9 = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* ReactiveFormsModule */]();
        this._HttpModule_10 = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["g" /* HttpModule */]();
        this._Ng2HighchartsModule_11 = new __WEBPACK_IMPORTED_MODULE_6_ng2_highcharts_index__["a" /* Ng2HighchartsModule */]();
        this._AppModule_12 = new __WEBPACK_IMPORTED_MODULE_1__app_app_module__["a" /* AppModule */]();
        return this._AppModule_12;
    };
    AppModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */])) {
            return this._CommonModule_0;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"])) {
            return this._ErrorHandler_1;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_0__angular_core__["APP_INITIALIZER"])) {
            return this._APP_INITIALIZER_2;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationInitStatus"])) {
            return this._ApplicationInitStatus_3;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵf"])) {
            return this._ɵf_4;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationRef"])) {
            return this._ApplicationRef_5;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationModule"])) {
            return this._ApplicationModule_6;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["p" /* BrowserModule */])) {
            return this._BrowserModule_7;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* ɵba */])) {
            return this._ɵba_8;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* ReactiveFormsModule */])) {
            return this._ReactiveFormsModule_9;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_5__angular_http__["g" /* HttpModule */])) {
            return this._HttpModule_10;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_6_ng2_highcharts_index__["a" /* Ng2HighchartsModule */])) {
            return this._Ng2HighchartsModule_11;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_1__app_app_module__["a" /* AppModule */])) {
            return this._AppModule_12;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_0__angular_core__["LOCALE_ID"])) {
            return this._LOCALE_ID_13;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_2__angular_common__["c" /* NgLocalization */])) {
            return this._NgLocalization_14;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_0__angular_core__["Compiler"])) {
            return this._Compiler_15;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_0__angular_core__["APP_ID"])) {
            return this._APP_ID_16;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_0__angular_core__["IterableDiffers"])) {
            return this._IterableDiffers_17;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_0__angular_core__["KeyValueDiffers"])) {
            return this._KeyValueDiffers_18;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["q" /* DomSanitizer */])) {
            return this._DomSanitizer_19;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_0__angular_core__["Sanitizer"])) {
            return this._Sanitizer_20;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["r" /* HAMMER_GESTURE_CONFIG */])) {
            return this._HAMMER_GESTURE_CONFIG_21;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["s" /* EVENT_MANAGER_PLUGINS */])) {
            return this._EVENT_MANAGER_PLUGINS_22;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["h" /* EventManager */])) {
            return this._EventManager_23;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["i" /* ɵDomSharedStylesHost */])) {
            return this._ɵDomSharedStylesHost_24;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["j" /* ɵDomRendererFactory2 */])) {
            return this._ɵDomRendererFactory2_25;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_0__angular_core__["RendererFactory2"])) {
            return this._RendererFactory2_26;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["t" /* ɵSharedStylesHost */])) {
            return this._ɵSharedStylesHost_27;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_0__angular_core__["Testability"])) {
            return this._Testability_28;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["k" /* Meta */])) {
            return this._Meta_29;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["l" /* Title */])) {
            return this._Title_30;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */])) {
            return this._FormBuilder_31;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* ɵi */])) {
            return this._ɵi_32;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* BrowserXhr */])) {
            return this._BrowserXhr_33;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_5__angular_http__["h" /* ResponseOptions */])) {
            return this._ResponseOptions_34;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_5__angular_http__["i" /* XSRFStrategy */])) {
            return this._XSRFStrategy_35;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_5__angular_http__["d" /* XHRBackend */])) {
            return this._XHRBackend_36;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_5__angular_http__["j" /* RequestOptions */])) {
            return this._RequestOptions_37;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_5__angular_http__["k" /* Http */])) {
            return this._Http_38;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_7__app_api_service__["a" /* ApiService */])) {
            return this._ApiService_39;
        }
        return notFoundResult;
    };
    AppModuleInjector.prototype.destroyInternal = function () {
        this._ɵf_4.ngOnDestroy();
        (this.__ɵDomSharedStylesHost_24 && this._ɵDomSharedStylesHost_24.ngOnDestroy());
    };
    return AppModuleInjector;
}(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵNgModuleInjector"]));
var AppModuleNgFactory = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModuleFactory"](AppModuleInjector, __WEBPACK_IMPORTED_MODULE_1__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL3ZhbmNvc3Rvamtvdi9TZXJ2ZXIvdHJhaW5pbmcvZnJlZWNvZGVjYW1wL2FwaS1wcm9qZWN0cy92cy1zdG9jay1tYXJrZXQvY2xpZW50L3NyYy9hcHAvYXBwLm1vZHVsZS5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9Vc2Vycy92YW5jb3N0b2prb3YvU2VydmVyL3RyYWluaW5nL2ZyZWVjb2RlY2FtcC9hcGktcHJvamVjdHMvdnMtc3RvY2stbWFya2V0L2NsaWVudC9zcmMvYXBwL2FwcC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiICJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
//# sourceMappingURL=app.module.ngfactory.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_websocket_angular2_websocket__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_websocket_angular2_websocket___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_websocket_angular2_websocket__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(32);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });




var AppComponent = (function () {
    function AppComponent(apiService) {
        this.apiService = apiService;
        this.error = '';
        this.loading = false;
        this.options = {
            chart: {
                type: 'spline'
            },
            colors: ['#7cb5ec', '#434348', '#90ed7d', '#f7a35c', '#8085e9',
                '#f15c80', '#e4d354', '#8085e8', '#8d4653', '#91e8e1'],
            rangeSelector: {
                selected: 1
            },
            title: {
                text: 'Stock Market Chart'
            },
            series: []
        };
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.stockForm = new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["o" /* FormGroup */]({ 'symbol': new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["p" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_0__angular_forms__["q" /* Validators */].required) });
        this.initWs();
        this.subscription = this.apiService.stocksChanged
            .subscribe((function (stocks) {
            _this.stocks = stocks;
            _this.options.series = stocks.map(function (s) { return ({
                name: s.dataset_code,
                tooltip: {
                    valueDecimals: 2
                },
                data: s.data.map(function (d) { return [Date.parse(d[0]), d[1]]; }).reverse()
            }); });
            _this.loader(false);
        }));
        this.apiService.getStocks().catch(this.handleAPIError.bind(this));
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
        this.ws.close(true);
        this.onClearError();
    };
    AppComponent.prototype.onStockAdd = function () {
        var symbol = this.stockForm.value.symbol;
        this.loader(true);
        this.apiService.addStock(symbol).catch(this.handleAPIError.bind(this));
        this.stockForm.reset();
    };
    AppComponent.prototype.onStockRemove = function (symbol) {
        this.loader(true);
        this.apiService.removeStock(symbol);
    };
    AppComponent.prototype.onClearError = function () {
        if (this.timeoutID) {
            clearTimeout(this.timeoutID);
        }
        this.error = '';
    };
    AppComponent.prototype.loader = function (loading) {
        this.loading = loading;
    };
    AppComponent.prototype.initWs = function () {
        var _this = this;
        this.ws = new __WEBPACK_IMPORTED_MODULE_1_angular2_websocket_angular2_websocket__["$WebSocket"](__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].wsUrl);
        this.ws.getDataStream().subscribe(function (msg) {
            var _a = JSON.parse(msg.data), action = _a.action, symbol = _a.symbol;
            _this.loader(true);
            switch (action) {
                case 'add':
                    _this.apiService.getStock(symbol)
                        .catch(_this.handleWSError);
                    break;
                case 'remove':
                    _this.apiService.remove(symbol);
                    break;
                default:
                    _this.loader(false);
                    break;
            }
        });
    };
    AppComponent.prototype.handleAPIError = function (error) {
        var _this = this;
        this.loader(false);
        this.error = error;
        this.timeoutID = setTimeout(function () {
            _this.error = '';
        }, 5000);
    };
    AppComponent.prototype.handleWSError = function (error) {
        this.loader(false);
        console.log('WS error: ', error);
    };
    AppComponent.ctorParameters = function () { return [{ type: __WEBPACK_IMPORTED_MODULE_2__api_service__["a" /* ApiService */] }]; };
    return AppComponent;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ })

},[177]);
//# sourceMappingURL=main.bundle.js.map