import { Injectable, ɵɵdefineInjectable, Component, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AngularTinymceService = /** @class */ (function () {
    function AngularTinymceService() {
    }
    AngularTinymceService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    AngularTinymceService.ctorParameters = function () { return []; };
    /** @nocollapse */ AngularTinymceService.ngInjectableDef = ɵɵdefineInjectable({ factory: function AngularTinymceService_Factory() { return new AngularTinymceService(); }, token: AngularTinymceService, providedIn: "root" });
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
        { type: Component, args: [{
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
        { type: NgModule, args: [{
                    declarations: [AngularTinymceComponent],
                    imports: [],
                    exports: [AngularTinymceComponent]
                },] }
    ];
    return AngularTinymceModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { AngularTinymceComponent, AngularTinymceModule, AngularTinymceService };
//# sourceMappingURL=angular-tinymce.js.map
