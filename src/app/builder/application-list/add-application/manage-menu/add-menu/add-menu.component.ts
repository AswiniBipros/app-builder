import { Component, OnInit } from '@angular/core';
import { MenuModel } from 'src/app/application-model/menu-model';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css']
})
export class AddMenuComponent implements OnInit {
  menuItems:MenuModel[] = []
  constructor() { }

  ngOnInit(): void {
    // this.menuItems.push(new MenuModel());
  }

}
