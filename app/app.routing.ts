import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent }      from './app.component';
import { PersonOverview }      from './person-component';
import { Another }      from './another-component';


const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/person-overview',
    pathMatch: 'full'
  },
  { path: 'person-overview',  component: PersonOverview },
  { path: 'another', component: Another }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
