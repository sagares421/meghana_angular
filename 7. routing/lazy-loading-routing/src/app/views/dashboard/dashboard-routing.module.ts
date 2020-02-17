import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { OneComponent } from "./one/one.component";
import { TwoComponent } from "./two/two.component";

const routes: Routes = [
  {
    path: "",
    data: {
      title: "Icons"
    },
    children: [
      {
        path: "",
        redirectTo: "one"
      },
      {
        path: "one",
        component: OneComponent,
        data: {
          title: "FA Icons"
        }
      },
      {
        path: "two",
        component: TwoComponent,
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
export class DashboardRoutingModule {}
