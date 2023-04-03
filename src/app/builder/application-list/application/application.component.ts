import { Component, Input, OnInit } from '@angular/core';
import { ApplicationModel } from 'src/app/application-model/application-model';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {
  @Input('application') application: ApplicationModel = new ApplicationModel('001','App Manage','pi pi-plus','description');
  constructor() { }

  ngOnInit(): void {
  }

}
