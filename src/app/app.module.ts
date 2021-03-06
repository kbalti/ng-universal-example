import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxGridModule, IgxCalendarModule, IgxComboModule } from 'igniteui-angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxGridModule,
    IgxCalendarModule,
    IgxComboModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
