import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { PersonService } from './person.service';
import { AppComponent } from './app.component';
import { PersonsComponent } from './persons/persons.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';

@NgModule({
    declarations: [
        AppComponent,
        PersonsComponent,
        DashboardComponent,
        PersonDetailComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot([
            { path: 'persons', component: PersonsComponent },
            { path: 'person/:id', component: PersonDetailComponent },
            { path: 'person', component: PersonDetailComponent },
            { path: '', component: DashboardComponent }
        ])
    ],
    providers: [
        PersonService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
