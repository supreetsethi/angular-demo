import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertModule } from 'ngx-bootstrap/alert';
import { FooterComponent } from './elements/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { DesignUtilityModule } from './appModules/design-utility.module';
import { FormsModule } from '@angular/forms';
import { NavComponent } from './elements/nav/nav.component';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonsModule.forRoot(),
    BsDropdownModule.forRoot(),
    BrowserAnimationsModule,
    AlertModule.forRoot(),
    HttpClientModule,
    DesignUtilityModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
