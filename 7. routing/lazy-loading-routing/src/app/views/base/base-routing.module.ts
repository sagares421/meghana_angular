import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CardsComponent } from "./cards/cards.component";
import { FormsComponent } from "./forms/forms.component";
import { ButtonsComponent } from "./buttons/buttons.component";

const routes: Routes = [
  {
    path: "",
    data: {
      title: "Icons"
    },
    children: [
      {
        path: "",
        redirectTo: "cards"
      },
      {
        path: "cards",
        component: CardsComponent,
        data: {
          title: "FA Icons"
        }
      },
      {
        path: "forms",
        component: FormsComponent,
        data: {
          title: "S Icons"
        }
      },
      {
        path: "buttons",
        component: ButtonsComponent,
        data: {
          title: "S Icons"
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseRoutingModule {}
