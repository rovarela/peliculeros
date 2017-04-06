import * as app from './index';

import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';

@NgModule(app.appConfig)

<<<<<<< HEAD
import { CoreModule} from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
=======
>>>>>>> 31b715a4ae53108b4ef67aabbeda1f9a336ebcf4
export class AppModule { }
