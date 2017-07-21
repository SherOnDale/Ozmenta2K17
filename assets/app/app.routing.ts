import { ActivateUserComponent } from './components/activateuser/activateuser.component';
import { NTEventPageComponent } from './components/nteventpage/nteventpage.component';
import { ContactsPageComponent } from './components/contactspage/contactspage.component';
import { HomePageComponent } from './components/homepage/homepage.component';
import { TEventPageComponent } from './components/teventpage/teventpage.component';
import {WorkshopPageComponent} from './components/workshoppage/workshoppage.component';
import {Routes, RouterModule} from '@angular/router';
import { RegisterComponent } from "./components/register/register.component";
const APP_ROUTES: Routes = [
  {
    path: 'tevents',
    component: TEventPageComponent
  },
  {
    path: 'ntevents',
    component: NTEventPageComponent
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
    path: 'activate/:token',
    component: ActivateUserComponent
  },
  {
    path: '',
    component: HomePageComponent,
    pathMatch: 'full'
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];

export const routing = RouterModule.forRoot(APP_ROUTES);