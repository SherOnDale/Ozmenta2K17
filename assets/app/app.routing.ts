import { HomePageComponent } from './components/homepage/homepage.component';
import { EventPageComponent } from './components/eventpage/eventpage.component';
import {Routes, RouterModule} from '@angular/router';
const APP_ROUTES: Routes = [
  {
    path: 'event',
    component: EventPageComponent
  },
  {
    path: '',
    component: HomePageComponent,
    pathMatch: 'full'
  }
];

export const routing = RouterModule.forRoot(APP_ROUTES);