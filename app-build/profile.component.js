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
var router_1 = require("@angular/router");
//import {MarketAPI} from './services/MarketAPI.service';
var ngx_bootstrap_1 = require("ngx-bootstrap");
var web_api_service_1 = require("./webservice/web-api-service");
var PacketHeaderFactory_1 = require("./webservice/PacketHeaderFactory");
var ACTION_1 = require("./webservice/ACTION");
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(router, webAPIService) {
        var _this = this;
        this.router = router;
        this.webAPIService = webAPIService;
        setInterval(function () { _this.sampleModal.hide(); }, 1000 * 20);
    }
    ProfileComponent.prototype.hideChildModal = function () {
        this.sampleModal.hide();
    };
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent.prototype.showModal = function (event) {
        this.sampleModal.config.backdrop = false;
        this.sampleModal.show();
    };
    ProfileComponent.prototype.pingServer = function (event) {
        var username = "nazhasan15@gmail.com";
        var password = "password";
        var requestBody = "{\"userName\": \"" + username + "\", \"password\": \"" + password + "\"}";
        this.webAPIService.getResponse(PacketHeaderFactory_1.PacketHeaderFactory.getHeader(ACTION_1.ACTION.SIGN_IN), requestBody).then(function (result) {
        });
    };
    __decorate([
        core_1.ViewChild('sampleModal'),
        __metadata("design:type", ngx_bootstrap_1.ModalDirective)
    ], ProfileComponent.prototype, "sampleModal", void 0);
    ProfileComponent = __decorate([
        core_1.Component({
            selector: 'app',
            templateUrl: 'app/html/profile.component.html',
            providers: [web_api_service_1.WebAPIService]
        }),
        __metadata("design:paramtypes", [router_1.Router, web_api_service_1.WebAPIService])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=profile.component.js.map