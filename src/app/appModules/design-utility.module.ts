import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotfoundComponent } from '../notfound/notfound.component';
import { NavModule } from '../elements/nav/nav.module';


@NgModule({
  declarations: [NotfoundComponent],
  imports: [
    CommonModule,
    NavModule
  ],
  exports: []
})
export class DesignUtilityModule { }
