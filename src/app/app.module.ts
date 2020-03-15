import { registerLocaleData } from '@angular/common';
import localeNL from '@angular/common/locales/nl';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AgendaComponent } from './agenda/agenda.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent,
        AgendaComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FontAwesomeModule
    ],
    providers: [
        { provide: LOCALE_ID, useValue: 'nl-NL' }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

registerLocaleData(localeNL);
