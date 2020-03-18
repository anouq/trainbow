import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { map } from 'rxjs/operators';

@Component({
    templateUrl: './base.component.html',
    styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {
    public faTwitter = faTwitter;
    public faInstagram = faInstagram;
    public faFacebook = faFacebook;
    public faEnvelope = faEnvelope;
    public blogId: number | undefined;

    public random: number;

    constructor(private readonly route: ActivatedRoute) {
        this.random = Math.floor(Math.random() * 5) + 1;
    }

    public ngOnInit(): void {
        this.route.data.pipe(
            map((data) => this.blogId = data.blogId)
        ).subscribe();
    }
}
