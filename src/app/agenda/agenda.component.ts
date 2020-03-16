import { Component } from '@angular/core';
import { faClock, faInfoCircle, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import agendaItems from '../../../content-items/agenda-items.json';
import { AgendaItem } from '../model';

@Component({
    selector: 'trainbow-agenda',
    templateUrl: './agenda.component.html',
    styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent {
    public agendaItems: AgendaItem[];

    public faMapMarkerAlt = faMapMarkerAlt;
    public faClock = faClock;
    public faInfoCircle = faInfoCircle;

    constructor() {
        this.agendaItems = agendaItems;
    }
}
