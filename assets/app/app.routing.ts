import { ContactsPageComponent } from './components/contactspage/contactspage.component';
import { HomePageComponent } from './components/homepage/homepage.component';
import { EventPageComponent } from './components/eventpage/eventpage.component';
import {WorkshopPageComponent} from './components/workshoppage/workshoppage.component';
import {Routes, RouterModule} from '@angular/router';
const APP_ROUTES: Routes = [
  {
    path: 'events',
    component: EventPageComponent
  },
  {
    path: 'workshops',
    component: WorkshopPageComponent
  },
  {
    path: 'contacts',
    component: ContactsPageComponent
  },
  {
    path: '',
    component: HomePageComponent,
    pathMatch: 'full'
  }
];

export const routing = RouterModule.forRoot(APP_ROUTES);