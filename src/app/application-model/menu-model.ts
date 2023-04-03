export class MenuModel {
  id: string;
  label: string;
  icon: string;
  items: MenuModel[] = [];

  constructor(id: string, label: string, icon: string, items: MenuModel[]) {
    this.id = id;
    this.label = label;
    this.icon = icon;
    this.items = items;
  }
}
