(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('angular-tinymce', ['exports', '@angular/core'], factory) :
    (global = global || self, factory(global['angular-tinymce'] = {}, global.ng.core));
}(this, (function (exports, core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AngularTinymceService = /** @class */ (function () {
        function AngularTinymceService() {
        }
        AngularTinymceService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        AngularTinymceService.ctorParameters = function () { return []; };
        /** @nocollapse */ AngularTinymceService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function AngularTinymceService_Factory() { return new AngularTinymceService(); }, token: AngularTinymceService, providedIn: "root" });
        return AngularTinymceService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AngularTinymceComponent = /** @class */ (function () {
        function AngularTinymceComponent() {
        }
        /**
         * @return {?}
         */
        AngularTinymceComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        AngularTinymceComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lib-angular-tinymce',
                        template: "\n    <p>\n      angular-tinymce works!\n    </p>\n  "
                    }] }
        ];
        /** @nocollapse */
        AngularTinymceComponent.ctorParameters = function () { return []; };
        return AngularTinymceComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AngularTinymceModule = /** @class */ (function () {
        function AngularTinymceModule() {
        }
        AngularTinymceModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [AngularTinymceComponent],
                        imports: [],
                        exports: [AngularTinymceComponent]
                    },] }
        ];
        return AngularTinymceModule;
    }());

    exports.AngularTinymceComponent = AngularTinymceComponent;
    exports.AngularTinymceModule = AngularTinymceModule;
    exports.AngularTinymceService = AngularTinymceService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=angular-tinymce.umd.js.map
