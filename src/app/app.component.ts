import {Component, OnInit} from '@angular/core';
import {PersonService} from "./person.service";
import {Person} from "./person";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'Holiday Plan';
    persons: Person[];
    constructor(private personService: PersonService) {}
    getPersons(): void {
        this.personService.getPersons().subscribe( (persons:Person[]) => this.persons = persons );
    }
    ngOnInit(): void {
        this.getPersons();
    }
}
