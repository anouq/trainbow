import { Component } from '@angular/core';
import { faClock, faInfoCircle, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment-timezone';
import { AGENDA_ITEMS } from '../../assets/content-items/agenda-items';
import { AgendaItem } from '../model';

@Component({
    selector: 'trainbow-agenda',
    templateUrl: './agenda.component.html',
    styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent {
    public agendaItems: AgendaItem[];
    public today = moment();

    public faMapMarkerAlt = faMapMarkerAlt;
    public faClock = faClock;
    public faInfoCircle = faInfoCircle;

    constructor() {
        this.agendaItems = AGENDA_ITEMS.filter((item) => {
            return moment(item.date).isSameOrAfter(this.today);
        });
    }
}
