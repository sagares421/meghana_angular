import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BaseRoutingModule } from "./base-routing.module";

import { CardsComponent } from "./cards/cards.component";
import { FormsComponent } from "./forms/forms.component";
import { ButtonsComponent } from "./buttons/buttons.component";

@NgModule({
  declarations: [CardsComponent, FormsComponent, ButtonsComponent],
  imports: [CommonModule, BaseRoutingModule]
})
export class BaseModule {}
