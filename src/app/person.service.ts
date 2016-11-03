
import { Injectable } from '@angular/core';

import { Person } from './person';
import {Observable} from "rxjs";

@Injectable()
export class PersonService {

    getPersons(): Observable<Person[]> {
        let persons : Person[] = [
            new Person('Michael','Theuerzeit',30,new Date('2016-01-01')),
            new Person('Martin','Soisch',30,new Date('2016-01-01'))
        ];
        return Observable.create((observer) => {
            observer.next(persons);
            observer.complete();
        });
    }

}
