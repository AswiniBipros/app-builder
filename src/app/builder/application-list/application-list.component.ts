import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ApplicationModel } from 'src/app/application-model/application-model';
import { AddApplicationComponent } from './add-application/add-application.component';
// import * as appData from '../../../assets/json/application-list.json';

@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.css']
})
export class ApplicationListComponent implements OnInit {

  appModels:ApplicationModel[] = [];
  @ViewChild('addNewAppModalComponent') addNewAppModalComponent !:AddApplicationComponent;
  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.getApplicationList();
  }

  getApplicationList() {
    this.http.get('assets/json/application-list.json')
      .subscribe((res) => {
        this.appModels = res as ApplicationModel[];
      })
  }
  openAddNewAppModal() {
    this.addNewAppModalComponent.isAddNewAppModalOpen = true;
  }
}
