import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApplicationModel } from 'src/app/application-model/application-model';
// import * as appData from '../../../assets/json/application-list.json';

@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.css']
})
export class ApplicationListComponent implements OnInit {

  appModels:ApplicationModel[] = [];

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
}
