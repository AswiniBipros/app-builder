import { Component, OnInit, ViewChild } from '@angular/core';
import { ManageMenuComponent } from './manage-menu/manage-menu.component';

@Component({
  selector: 'app-add-application',
  templateUrl: './add-application.component.html',
  styleUrls: ['./add-application.component.css']
})
export class AddApplicationComponent implements OnInit {
  isAddNewAppModalOpen = false;
  @ViewChild('manageMenuModalComponent') manageMenuModalComponent !:ManageMenuComponent;
  constructor() { }

  ngOnInit(): void {
  }
  openManageMenuModal() {
    this.manageMenuModalComponent.isManageMenuModalOpen = true;
  }
}
