import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
	imports: [
		CommonModule
	],
	exports: [
		CommonModule,
		RouterModule
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
