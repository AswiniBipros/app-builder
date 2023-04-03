import { Component, OnInit, ViewChild } from '@angular/core';
import { ManageMenuComponent } from './manage-menu/manage-menu.component';
import { ApplicationModel } from 'src/app/application-model/application-model';

@Component({
  selector: 'app-add-application',
  templateUrl: './add-application.component.html',
  styleUrls: ['./add-application.component.css']
})
export class AddApplicationComponent implements OnInit {
  isAddNewAppModalOpen = false;
  @ViewChild('manageMenuModalComponent') manageMenuModalComponent !:ManageMenuComponent;
  constructor() { }
  application:ApplicationModel = new ApplicationModel();

  ngOnInit(): void {
  }
  openManageMenuModal() {
    this.manageMenuModalComponent.isManageMenuModalOpen = true;
  }
}
