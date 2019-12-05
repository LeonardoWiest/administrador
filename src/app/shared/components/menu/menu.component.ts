import { MenuItem } from "src/app/shared/components/menu/interfaces/menu-item.interface";
import { Component, Input } from "@angular/core";

@Component({
  selector: "adm-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"]
})
export class MenuComponent {
  constructor() {}

  private _subItems: Array<MenuItem>;

  @Input("adm-label") label: string;

  @Input("adm-sub-items") set subItems(subitems: Array<MenuItem>) {}
}
