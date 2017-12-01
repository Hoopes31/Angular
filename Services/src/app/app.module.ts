import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AlphaComponent } from './alpha/alpha.component';
import { BetaComponent } from './beta/beta.component';

//Service!
import { DataService } from './data.service';


@NgModule({
  declarations: [
    AppComponent,
    AlphaComponent,
    BetaComponent
  ],
  imports: [
	BrowserModule,
	FormsModule
  ],
  //Add Service to providers
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
