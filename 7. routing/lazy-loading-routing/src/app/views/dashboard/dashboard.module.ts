import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DashboardRoutingModule } from "./dashboard-routing.module";

import { OneComponent } from "./one/one.component";
import { TwoComponent } from "./two/two.component";

@NgModule({
  declarations: [OneComponent, TwoComponent],
  imports: [CommonModule, DashboardRoutingModule]
})
export class DashboardModule {}
