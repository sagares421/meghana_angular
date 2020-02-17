import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// Components
import { HomeComponent } from "./views/home/home.component";
import { ServiceComponent } from "./views/service/service.component";
import { AboutComponent } from "./views/about/about.component";
import { ContactComponent } from "./views/contact/contact.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "home",
    component: HomeComponent,
    data: {
      title: "Home"
    }
  },
  {
    path: "services",
    component: ServiceComponent,
    data: {
      title: "Home"
    }
  },
  {
    path: "about",
    component: AboutComponent,
    data: {
      title: "Home"
    }
  },
  {
    path: "contact",
    component: ContactComponent,
    data: {
      title: "Home"
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
