import { Component } from '@angular/core';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'trainbow-app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public faTwitter = faTwitter;
    public faInstagram = faInstagram;
    public faFacebook = faFacebook;
    public faEnvelope = faEnvelope;

    constructor(
        public translate: TranslateService
    ) {
        translate.addLangs(['en', 'nl']);
        translate.setDefaultLang('nl');
    }
}
