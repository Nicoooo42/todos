import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {RoutingModules} from './routing.modules';
import {FrontendModule} from './frontend/frontend.module';
import {BackendModule} from './backend/backend.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, FrontendModule, BackendModule, RoutingModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
