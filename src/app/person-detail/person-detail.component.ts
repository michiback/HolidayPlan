import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import {Location} from "@angular/common";

import {PersonService} from "../person.service";
import {Person} from "../person";

@Component({
    templateUrl: './person-detail.component.html',
    styleUrls: ['./person-detail.component.css'],
    providers: [PersonService]
})

export class PersonDetailComponent implements OnInit {

    person: Person;

    constructor(
        private route: ActivatedRoute,
        private location: Location,
        private personService: PersonService
    ) { }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            if( !params['id'] ) {
                this.person = new Person();
            } else {
                let id = params['id'];
                this.personService.getPerson(id).subscribe((person: Person) => this.person = person);
            }
        });
    }

    save() {
        this.personService.save(this.person)
            .subscribe( (person: Person) => {
                this.person = person;
                this.location.replaceState('/person/'+person.id);
            });
    }
}
