import {Component, OnInit} from '@angular/core';
import {PersonService} from "../person.service";
import {Person} from "../person";

@Component({
    templateUrl: './persons.component.html',
    styleUrls: ['./persons.component.css']
})

export class PersonsComponent implements OnInit {
    title = 'Person List';
    persons: Person[];
    constructor(private personService: PersonService) {}
    getPersons(): void {
        this.personService.getPersons().subscribe( (persons:Person[]) => this.persons = persons );
    }
    ngOnInit(): void {
        this.getPersons();
    }
}
