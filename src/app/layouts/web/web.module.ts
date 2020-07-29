import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebComponent } from './web.component';
import { CommonModule } from '@angular/common';
import { NotfoundComponent } from 'src/app/notfound/notfound.component';
import { DesignUtilityModule } from 'src/app/appModules/design-utility.module';
import { NavComponent } from 'src/app/elements/nav/nav.component';
import { NavModule } from 'src/app/elements/nav/nav.module';

const routes: Routes = [

  {
    path: '', component: WebComponent, 
    children: [
      { path: 'home', loadChildren: () => import('../../areas/web-area/home/home.module').then(m => m.HomeModule) },
      { path: '**', component: NotfoundComponent }
    ]
  }
]
@NgModule({
  declarations: [WebComponent,NavComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DesignUtilityModule,
 ],
  exports: [RouterModule]
})
export class WebModule { }
