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
var RemoveMasterComponent = /** @class */ (function () {
    function RemoveMasterComponent() {
    }
    RemoveMasterComponent.prototype.ngOnInit = function () {
    };
    RemoveMasterComponent = __decorate([
        core_1.Component({
            selector: 'app-remove-master',
            templateUrl: './remove-master.component.html',
            styleUrls: ['./remove-master.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], RemoveMasterComponent);
    return RemoveMasterComponent;
}());
exports.RemoveMasterComponent = RemoveMasterComponent;
//# sourceMappingURL=remove-master.component.js.map