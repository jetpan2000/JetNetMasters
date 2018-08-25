"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var mymaster_component_1 = require("./mymaster/mymaster.component");
var masterlist_component_1 = require("./masterlist/masterlist.component");
var create_master_component_1 = require("./create-master/create-master.component");
var remove_master_component_1 = require("./remove-master/remove-master.component");
var edit_master_component_1 = require("./edit-master/edit-master.component");
var add_my_master_component_1 = require("./add-my-master/add-my-master.component");
var remove_my_master_component_1 = require("./remove-my-master/remove-my-master.component");
var mymasters_component_1 = require("./mymasters/mymasters.component");
var page_not_found_component_1 = require("./page-not-found/page-not-found.component");
var appRoutes = [
    { path: 'masterlist', component: masterlist_component_1.MasterlistComponent },
    { path: 'mymasters', component: mymasters_component_1.MymastersComponent },
    { path: 'removemaster/:id', component: remove_master_component_1.RemoveMasterComponent },
    { path: 'editmaster/:id', component: edit_master_component_1.EditMasterComponent },
    { path: '**', component: page_not_found_component_1.PageNotFoundComponent }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                mymaster_component_1.MymasterComponent,
                masterlist_component_1.MasterlistComponent,
                create_master_component_1.CreateMasterComponent,
                remove_master_component_1.RemoveMasterComponent,
                edit_master_component_1.EditMasterComponent,
                add_my_master_component_1.AddMyMasterComponent,
                remove_my_master_component_1.RemoveMyMasterComponent,
                mymasters_component_1.MymastersComponent,
                page_not_found_component_1.PageNotFoundComponent
            ],
            imports: [
                router_1.RouterModule.forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
                ),
                platform_browser_1.BrowserModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map