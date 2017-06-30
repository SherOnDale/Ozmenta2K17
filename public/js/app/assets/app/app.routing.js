import { NTEventPageComponent } from './components/nteventpage/nteventpage.component';
import { ContactsPageComponent } from './components/contactspage/contactspage.component';
import { HomePageComponent } from './components/homepage/homepage.component';
import { TEventPageComponent } from './components/teventpage/teventpage.component';
import { WorkshopPageComponent } from './components/workshoppage/workshoppage.component';
import { RouterModule } from '@angular/router';
var APP_ROUTES = [
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
        path: '',
        component: HomePageComponent,
        pathMatch: 'full'
    }
];
export var routing = RouterModule.forRoot(APP_ROUTES);
