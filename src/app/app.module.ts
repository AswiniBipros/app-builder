import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BuilderComponent } from './builder/builder.component';
import { ApplicationListComponent } from './builder/application-list/application-list.component';
import { WorkspaceComponent } from './builder/workspace/workspace.component';
import { DesignerComponent } from './builder/designer/designer.component';
import { AddApplicationComponent } from './builder/application-list/add-application/add-application.component';
import { ApplicationComponent } from './builder/application-list/application/application.component';
import { AppSharedModule } from './share-module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ManageMenuComponent } from './builder/application-list/add-application/manage-menu/manage-menu.component';
import { MenuListComponent } from './builder/application-list/add-application/manage-menu/menu-list/menu-list.component';
import { MenuHeaderComponent } from './builder/application-list/add-application/manage-menu/menu-header/menu-header.component';
import { AddMenuComponent } from './builder/application-list/add-application/manage-menu/add-menu/add-menu.component';
import { ConfirmationService } from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BuilderComponent,
    ApplicationListComponent,
    WorkspaceComponent,
    DesignerComponent,
    AddApplicationComponent,
    ManageMenuComponent,
    MenuListComponent,
    MenuHeaderComponent,
    AddMenuComponent,
    ApplicationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppSharedModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
