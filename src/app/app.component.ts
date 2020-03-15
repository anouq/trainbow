import { Component } from '@angular/core';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faClock, faEnvelope, faInfoCircle, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

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
    public faMapMarkerAlt = faMapMarkerAlt;
    public faClock = faClock;
    public faInfoCircle = faInfoCircle;
}
