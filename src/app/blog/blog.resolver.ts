import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable()
export class BlogResolver implements Resolve<number> {

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<number | undefined> {
        return of(route.params.blogId);
    }
}
