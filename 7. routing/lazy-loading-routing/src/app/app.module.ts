import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";

// Layouts
import { FullComponent } from "./views/_layouts/full/full.component";
import { EmptyComponent } from "./views/_layouts/empty/empty.component";

@NgModule({
  declarations: [AppComponent, FullComponent, EmptyComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
