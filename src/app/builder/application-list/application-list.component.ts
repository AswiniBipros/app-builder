import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ApplicationModel } from 'src/app/application-model/application-model';
import { AddApplicationComponent } from './add-application/add-application.component';
import colors from 'src/app/application-model/color-constant-model';
import { environment } from 'src/environments/environment';
import { ConfirmationService } from 'primeng/api';

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
    private confirmationService: ConfirmationService
  ) { }

  ngOnInit(): void {
    this.getApplicationList();
  }

  getApplicationList() {
    this.http.get(environment.APP_BUILDER_ASSET_URL+'/json/application-list.json')
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
  onApplicationEdit(application: ApplicationModel) {
    this.addNewAppModalComponent.application = application;
    this.addNewAppModalComponent.isAddNewAppModalOpen = true;
  }
  confirmDelete(application:ApplicationModel) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
          this.onApplicationDelete(application);
      },
      reject: ()=> {}
  });
  }
  onApplicationDelete(application: ApplicationModel) {
    //logic yet to be implemented
  }

}
