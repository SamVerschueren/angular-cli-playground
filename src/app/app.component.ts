import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'ng2-translate';

@Component({
	moduleId: module.id,
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit {
	constructor(
		private translateService: TranslateService
	) {	}

	ngOnInit() {
		this.translateService.setDefaultLang('en');
		this.translateService.use('en');
	}
}
