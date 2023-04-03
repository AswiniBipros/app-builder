import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApplicationModel } from 'src/app/application-model/application-model';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css'],
})
export class ApplicationComponent implements OnInit {
  @Input('application') application: ApplicationModel = new ApplicationModel(
    '001',
    'App Manage',
    'pi pi-plus',
    'description'
  );
  @Input('bgColor') background: string = '';
  @Output('onApplicationEdit') onApplicationEdit = new EventEmitter();
  @Output('onApplicationDelete') onApplicationDelete = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  getColor() {
    return {background : this.background};
  }
  editApplication(application: ApplicationModel) {
    this.onApplicationEdit.emit(application);
  }
  deleteApplication(application: ApplicationModel) {
    this.onApplicationDelete.emit(application);
  }
}
