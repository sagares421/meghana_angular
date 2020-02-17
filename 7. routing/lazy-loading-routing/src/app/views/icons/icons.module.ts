import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { IconsRoutingModule } from "./icons-routing.modules";

import { FontAwesomeComponent } from "./font-awesome/font-awesome.component";
import { SimpleIconsComponent } from "./simple-icons/simple-icons.component";

@NgModule({
  declarations: [FontAwesomeComponent, SimpleIconsComponent],
  imports: [CommonModule, IconsRoutingModule]
})
export class IconsModule {}
