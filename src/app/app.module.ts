import { LocationStrategy, HashLocationStrategy, registerLocaleData } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import localeNL from '@angular/common/locales/nl';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AgendaComponent } from './agenda/agenda.component';
import { AppComponent } from './app.component';
import { BaseComponent } from './base/base.component';
import { BlogComponent } from './blog/blog.component';
import { BlogResolver } from './blog/blog.resolver';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        runGuardsAndResolvers: 'always',
        component: BaseComponent,
        resolve: {
            blogId: BlogResolver
        }
    },
    {
        path: 'blog/:blogId',
        pathMatch: 'full',
        runGuardsAndResolvers: 'always',
        component: BaseComponent,
        resolve: {
            blogId: BlogResolver
        }
    },
    { path: '**', redirectTo: '' }
];

@NgModule({
    declarations: [
        AppComponent,
        BaseComponent,
        AgendaComponent,
        BlogComponent
    ],
    imports: [
        RouterModule.forRoot(routes, {
            anchorScrolling: 'enabled',
            scrollPositionRestoration: 'enabled',
            onSameUrlNavigation: 'reload',
            useHash: true
        }),
        BrowserModule,
        FontAwesomeModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: httpTranslateLoader,
                deps: [HttpClient]
            }
        })
    ],
    providers: [
        { provide: LOCALE_ID, useValue: 'nl-NL' },
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        BlogResolver
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

registerLocaleData(localeNL);

export function httpTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http);
}
