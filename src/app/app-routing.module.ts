import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationListComponent } from './builder/application-list/application-list.component';
import { DesignerComponent } from './builder/designer/designer.component';
import { WorkspaceComponent } from './builder/workspace/workspace.component';

const routes: Routes = [
  {
    path: 'app-list',
    component: ApplicationListComponent
  },
  {
    path: 'designer',
    component: DesignerComponent
  },
  {
    path: 'workspace',
    component: WorkspaceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
