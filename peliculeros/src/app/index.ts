import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

export const appConfig = {
    declarations: [
    AppComponent
  ],
  imports: [
      AppRoutingModule,
      BrowserModule,
      FormsModule,
      HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
};