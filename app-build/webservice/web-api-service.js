"use strict";
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
var http_1 = require("@angular/http");
var loader_service_1 = require("./loader.service");
require("rxjs/add/operator/toPromise");
require("rxjs/add/operator/finally");
var WebAPIService = /** @class */ (function () {
    function WebAPIService(http, loaderService) {
        this.http = http;
        this.loaderService = loaderService;
        this.actionUrl = window.SITE_URL + 'request';
    }
    WebAPIService.prototype.getResponse = function (packetHeader, packetBody) {
        //var packet = new Packet();
        var _this = this;
        if (packetBody === void 0) { packetBody = null; }
        //packet.packetHeader = packetHeader;
        //        if (packetBody != null && packetBody != "" ){
        ////            packet.packetBody = JSON.parse(packetBody);
        //            packet.packetBody = packetBody;
        //        }
        this.showLoader();
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var body = new http_1.URLSearchParams();
        body.set('packetHeader', JSON.stringify(packetHeader));
        body.set('packetBody', packetBody);
        //        headers.append('Content-Type', 'application/json');
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.actionUrl, body, options).
            finally(function () {
            _this.hideLoader();
        }).
            map(function (res) { return res.json(); }).
            toPromise().
            then(function (response) {
            return response;
        });
    };
    ;
    WebAPIService.prototype.showLoader = function () {
        this.loaderService.show();
    };
    WebAPIService.prototype.hideLoader = function () {
        this.loaderService.hide();
    };
    WebAPIService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http, loader_service_1.LoaderService])
    ], WebAPIService);
    return WebAPIService;
}());
exports.WebAPIService = WebAPIService;
//# sourceMappingURL=web-api-service.js.map