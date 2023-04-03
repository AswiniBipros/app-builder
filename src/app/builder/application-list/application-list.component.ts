import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ApplicationModel } from 'src/app/application-model/application-model';
import { AddApplicationComponent } from './add-application/add-application.component';
import colors from 'src/app/application-model/color-constant-model';

@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.css']
})
export class ApplicationListComponent implements OnInit {

  appModels: ApplicationModel[] = [];
  colorIndex: number = -1;
  @ViewChild('addNewAppModalComponent') addNewAppModalComponent !: AddApplicationComponent;
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
  getRandomColor() {
    this.colorIndex += 1;
    if (this.colorIndex == colors.length) this.colorIndex = 0;
    return colors[this.colorIndex];
  }
}
