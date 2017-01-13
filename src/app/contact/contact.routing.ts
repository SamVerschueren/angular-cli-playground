import { Routes, RouterModule } from '@angular/router';

import { ContactComponent } from './contact.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
	{
		path: '',
		component: ContactComponent,
		children: [
			{ path: '', component: HomeComponent, pathMatch: 'full' },
			{ path: 'about', component: AboutComponent }
		]
	}
];

export const routing = RouterModule.forChild(routes);
