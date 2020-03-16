import { Component } from '@angular/core';
import moment from 'moment-timezone';
import blogItems from '../../../content-items/blog-items.json';
import { BlogItem } from '../model';

@Component({
    selector: 'trainbow-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
    public blogItems: BlogItem[];

    constructor() {
        this.blogItems = blogItems
            .map((item) => item as BlogItem)
            .filter((item) => !item.inactive)
            .sort((a, b) => moment(b.date).diff(moment(a.date)));

    }
}
