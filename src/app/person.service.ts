
import { Injectable } from '@angular/core';

import { Person } from './person';
import {Observable} from "rxjs";

@Injectable()
export class PersonService {

    persons : Person[];

    constructor() {
        this.persons = [
            new Person(1,'Michael','Theuerzeit',30,new Date('2016-01-01')),
            new Person(2,'Martin','Soisch',30,new Date('2016-01-01'))
        ];
    }

    getPersons(): Observable<Person[]> {
        return Observable.create((observer) => {
            observer.next(this.persons);
            observer.complete();
        });
    }

    getPerson(id: number): Observable<Person> {

        return Observable.create((observer) => {
            this.persons.forEach((person : Person) => {
                if( person.id == id ) {
                    observer.next(person);
                    observer.complete();
                }
            });
        });
    }

}
