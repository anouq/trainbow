import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import moment from 'moment-timezone';
import { BLOG_ITEMS } from '../../assets/content-items/blog-items';
import { BlogItem } from '../model';

@Component({
    selector: 'trainbow-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
    @Input() public activeId: number | undefined;

    public notFound: boolean;
    public blogItems: BlogItem[];
    public activeItem: BlogItem;

    constructor(private location: Location) {
    }

    public ngOnInit(): void {
        this.blogItems = BLOG_ITEMS
            .map((item) => item as BlogItem)
            .filter((item) => !item.inactive)
            .sort((a, b) => moment(b.date).diff(moment(a.date)));

        const itemFromRoute = this.blogItems.find((item) => Number(item.id) === Number(this.activeId));

        if (itemFromRoute) {
            this.activeItem = itemFromRoute;
        } else {
            if (!!this.activeId) {
                this.notFound = true;
                this.location.replaceState('/');
            }

            this.activeItem = this.blogItems[0];
        }

        this.activeItem = this.blogItems.find((item) => Number(item.id) === Number(this.activeId)) || this.blogItems[0];
    }

    public setActiveItem(item: BlogItem): void {
        this.activeItem = item;
    }
}
