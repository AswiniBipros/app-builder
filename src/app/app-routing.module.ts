import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationListComponent } from './builder/application-list/application-list.component';
import { DesignerComponent } from './builder/designer/designer.component';
import { WorkspaceComponent } from './builder/workspace/workspace.component';
import { APP_BASE_HREF } from '@angular/common';
import { EmptyRouteComponent } from './empty-route/empty-route.component';

const routes: Routes = [
  {
    path:'app-builder',
    component:EmptyRouteComponent
  },
  {
    path: 'app-builder/app-list',
    component: ApplicationListComponent
  },
  {
    path: 'app-builder/designer',
    component: DesignerComponent
  },
  {
    path: 'app-builder/workspace',
    component: WorkspaceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
  ],
})
export class AppRoutingModule { }
