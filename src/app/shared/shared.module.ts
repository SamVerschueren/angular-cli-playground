import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateModule } from 'ng2-translate';

@NgModule({
	imports: [
		CommonModule
	],
	exports: [
		CommonModule,
		RouterModule,
		TranslateModule
	],
	declarations: [],
	providers: []
})
export class SharedModule {
	static forRoot(): ModuleWithProviders {
		return {
			ngModule: SharedModule,
			providers: []
		};
	}
}
