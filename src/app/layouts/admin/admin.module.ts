import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { AdminComponent } from './admin.component';
import { DesignUtilityModule } from 'src/app/appModules/design-utility.module';
import { NavComponent } from 'src/app/elements/nav/nav.component';
import { NotfoundComponent } from 'src/app/notfound/notfound.component';
import { NavModule } from 'src/app/elements/nav/nav.module';

const routes: Routes = [
  {
    path: '', component: AdminComponent,
    children: [
      { path: 'home', loadChildren: () => import('../../areas/admin-area/admin-home/admin-home.module').then(m => m.AdminHomeModule) },
      { path: '**', component: NotfoundComponent }
    ]
  }
]

@NgModule({
  declarations: [AdminComponent,NavComponent],
  imports: [
    CommonModule,
    DesignUtilityModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class AdminModule { }
