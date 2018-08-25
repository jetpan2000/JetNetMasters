import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MymasterComponent } from './mymaster/mymaster.component';
import { MasterlistComponent } from './masterlist/masterlist.component';
import { CreateMasterComponent } from './create-master/create-master.component';
import { RemoveMasterComponent } from './remove-master/remove-master.component';
import { EditMasterComponent } from './edit-master/edit-master.component';
import { AddMyMasterComponent } from './add-my-master/add-my-master.component';
import { RemoveMyMasterComponent } from './remove-my-master/remove-my-master.component';
import { MymastersComponent } from './mymasters/mymasters.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
    { path: 'masterlist', component: MasterlistComponent },
    { path: 'mymasters', component: MymastersComponent },
    { path: 'removemaster/:id', component: RemoveMasterComponent },
    { path: 'editmaster/:id', component: EditMasterComponent },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MymasterComponent,
    MasterlistComponent,
    CreateMasterComponent,
    RemoveMasterComponent,
    EditMasterComponent,
    AddMyMasterComponent,
    RemoveMyMasterComponent,
    MymastersComponent,
    PageNotFoundComponent
  ],
    imports: [
        RouterModule,
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true } // <-- debugging purposes only
        ),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
