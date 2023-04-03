import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { SelectButtonModule } from 'primeng/selectbutton';
import { DialogModule } from 'primeng/dialog';
import { ImageModule } from 'primeng/image';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { TreeModule } from 'primeng/tree';
import { ListboxModule } from 'primeng/listbox';
import { OrderListModule } from 'primeng/orderlist';
import { TooltipModule } from 'primeng/tooltip';
import { PickListModule } from 'primeng/picklist';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { TabViewModule } from 'primeng/tabview';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { InputTextModule } from 'primeng/inputtext';
import { VirtualScrollerModule } from 'primeng/virtualscroller';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { MenubarModule } from 'primeng/menubar';
import { DividerModule } from 'primeng/divider';
import {DragDropModule} from 'primeng/dragdrop';
import {PanelModule} from 'primeng/panel';
import { ChipModule } from 'primeng/chip';
const dModules = [ImageModule, MenubarModule, ScrollPanelModule, InputTextModule, OverlayPanelModule, CommonModule, FormsModule,OrderListModule, ReactiveFormsModule, CardModule, ButtonModule, ListboxModule, TableModule, SelectButtonModule, DialogModule, DynamicDialogModule, TooltipModule, PickListModule, TabViewModule, TieredMenuModule, VirtualScrollerModule, OrganizationChartModule, TreeModule, BreadcrumbModule, DividerModule, DragDropModule, PanelModule , ChipModule]
@NgModule({
  declarations: [],
  imports: dModules,
  exports: dModules,
})
export class AppSharedModule { }
