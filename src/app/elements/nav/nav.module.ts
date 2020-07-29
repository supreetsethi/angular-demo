import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavComponent } from './nav.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule
  ],exports:[
    RouterModule
    
  ]
})
export class NavModule { }
