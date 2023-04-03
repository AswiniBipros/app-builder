export class ApplicationModel {
  id:string;
  name:string;
  icon:string;
  description:string;

  constructor(id:string, name: string, icon : string, description:string){
    this.id = id;
    this.name = name;
    this.icon = icon;
    this.description = description;
  }
}
