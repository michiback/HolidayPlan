import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import {Location} from "@angular/common";

import {PersonService} from "../person.service";
import {Person} from "../person";

@Component({
    templateUrl: './person-detail.component.html',
    styleUrls: ['./person-detail.component.css']
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
            let id = params['id'];
            this.personService.getPerson(id).subscribe((person: Person) => this.person = person);
        });
    }
}
