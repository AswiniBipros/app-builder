import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {
  items: MenuItem[] = [];
  constructor() { }

  ngOnInit(): void {
    this.items = this.items = [
      {
          label: 'Menu List',
          items: [
              {
                  label: 'Update',
                  icon: 'pi pi-refresh'
              },
              {
                  label: 'Delete',
                  icon: 'pi pi-times'
              }
          ]
      }
    ]
  }

}
