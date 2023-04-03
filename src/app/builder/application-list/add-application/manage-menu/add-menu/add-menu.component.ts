import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenuModel } from 'src/app/application-model/menu-model';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css']
})
export class AddMenuComponent implements OnInit {
  menuItems:MenuModel[] = [];
  editMode = true;
  @Output('onCancel') onCancel = new EventEmitter();
  @Output('onSave') onSave = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    this.menuItems.push(new MenuModel('', 'Update','pi pi-pencil',[new MenuModel()]));
  }
  addNew(item : MenuModel) {
    if(!item.items) {
      item.items = [];
    }
    item.items.push(new MenuModel());
  }

  addNewParent() {
    if(!this.editMode) {
      this.editMode = !this.editMode;
    } else {
      this.menuItems.push(new MenuModel('', '','',[]));
    }
  }

  deleteNode(item:MenuModel,index:number) {
    if(item) {
      item.items?.splice(index, 1);
    } else {
      this.menuItems.splice(index, 1);
    }
  }

  cancel() {
    this.onCancel.emit('cancel');
  }

  save() {
    this.onSave.emit(this.menuItems);
  }
}
