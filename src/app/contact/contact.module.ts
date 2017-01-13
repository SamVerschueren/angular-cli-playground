import { NgModule } from '@angular/core';

import { ContactComponent } from './contact.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { SharedModule } from '../shared/shared.module';

import { routing } from './contact.routing';

@NgModule({
	imports: [
		SharedModule,
		routing
	],
	exports: [],
	declarations: [
		ContactComponent,
		HomeComponent,
		AboutComponent
	],
	providers: []
})
export class ContactModule { }
