import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EsteticaComponent } from './pages/estetica/estetica.component';
import { FisioterapiaComponent } from './pages/fisioterapia/fisioterapia.component';
import { ServicesComponent } from './services.component';


const routes: Routes = [
  {
    path: '',
    component: ServicesComponent,
    children: [
      { path: 'estetica', component: EsteticaComponent, data: { animation: 'HomePage' } },
      { path: 'fisio', component: FisioterapiaComponent, data: { animation: 'AboutPage' } },
      { path: '**', redirectTo: 'estetica' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
