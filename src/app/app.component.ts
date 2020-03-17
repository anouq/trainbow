import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'trainbow-app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {

    constructor(
        public translate: TranslateService
    ) {
        translate.addLangs(['en', 'nl']);
        translate.setDefaultLang('nl');
    }

}
