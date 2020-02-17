import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// Layouts
import { FullComponent } from "./views/_layouts/full/full.component";

const routes: Routes = [
  {
    path: "",
    component: FullComponent,
    data: {
      title: "Home"
    },
    children: [
      {
        path: "base",
        loadChildren: () =>
          import("./views/base/base.module").then(m => m.BaseModule)
      },
      {
        path: "dashboard",
        loadChildren: () =>
          import("./views/dashboard/dashboard.module").then(
            m => m.DashboardModule
          )
      },
      {
        path: "icons",
        loadChildren: () =>
          import("./views/icons/icons.module").then(m => m.IconsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
