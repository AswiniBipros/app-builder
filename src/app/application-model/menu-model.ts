export class MenuModel {
  id: string;
  name: string;
  icon: string;
  children: MenuModel[] = [];

  constructor(id: string, name: string, icon: string, children: MenuModel[]) {
    this.id = id;
    this.name = name;
    this.icon = icon;
    this.children = children;
  }
}
