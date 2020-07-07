import { Component } from '@angular/core';

@Component({
    templateUrl: './redirect-quiz.component.html'
})
export class RedirectQuizComponent {
    constructor() {
        // TODO generify this
        window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSdamf4h23HPv3PsADEDqvBZbwgUT-Z-dGNnGYCawjXYIfQPTw/viewform';
    }
}
