import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { FontAwesomeComponent } from "./font-awesome/font-awesome.component";
import { SimpleIconsComponent } from "./simple-icons/simple-icons.component";

const routes: Routes = [
  {
    path: "",
    data: {
      title: "Icons"
    },
    children: [
      {
        path: "",
        redirectTo: "fa-icons"
      },
      {
        path: "fa-icons",
        component: FontAwesomeComponent,
        data: {
          title: "FA Icons"
        }
      },
      {
        path: "s-icons",
        component: SimpleIconsComponent,
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
export class IconsRoutingModule {}
