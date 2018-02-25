"use strict";
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var CKEditorSample = /** @class */ (function () {
    function CKEditorSample() {
        this.ckeditorContent = "";
        this.ckeditorContent = "<p>My HTML</p>";
    }
    CKEditorSample.prototype.onReady = function (event) {
    };
    CKEditorSample.prototype.onFocus = function (event) {
    };
    CKEditorSample.prototype.onBlur = function (event) {
    };
    CKEditorSample.prototype.onChange = function (event) {
    };
    CKEditorSample = __decorate([
        core_1.Component({
            selector: 'sample',
            template: "\n  <ckeditor\n    [(ngModel)]=\"ckeditorContent\"\n    [config]=\"{uiColor: '#ffffff'}\"\n    [readonly]=\"false\"\n    (change)=\"onChange($event)\"\n    (ready)=\"onReady($event)\"\n    (focus)=\"onFocus($event)\"\n    (blur)=\"onBlur($event)\"\n    debounce=\"500\">\n  </ckeditor>\n  "
        }),
        __metadata("design:paramtypes", [])
    ], CKEditorSample);
    return CKEditorSample;
}());
exports.CKEditorSample = CKEditorSample;
//# sourceMappingURL=CKEditorSample.js.map