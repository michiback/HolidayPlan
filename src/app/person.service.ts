
import { Injectable } from '@angular/core';

import { Person } from './person';
import {Observable} from "rxjs";

@Injectable()
export class PersonService {

    constructor() {}

    public getPersons(): Observable<Person[]> {
        return Observable.create((observer) => {
            observer.next(this._getPersons());
            observer.complete();
        });
    }

    public getPerson(id: number): Observable<Person> {
        return Observable.create((observer) => {
            let persons = this._getPersons();
            let l = persons.length;
            persons.forEach((person : Person, index:number) => {
                if( person.id == id ) {
                    observer.next(person);
                    observer.complete();
                }
                if( index === l) {
                    observer.complete();
                }
            });
        });
    }

    public save(person: Person): Observable<Person> {
        if( !person.id ) {
            person.id = this.getUid();
        }

        this._setPerson(person);

        return Observable.create((observer) => {
            observer.next(person);
            observer.complete();
        });
    }

    public remove(person: Person): Observable<boolean> {

        this._removePerson(person);

        return Observable.create((observer) => {
            observer.next(true);
            observer.complete();
        });
    }

    private getUid() : number {
        return Math.round(Math.random()*(new Date).getTime());
    }

    private _getPersons() : Person[] {
        let json = window.localStorage.getItem('persons');
        let items = [];

        if( json != null ) {
            items = JSON.parse(json);
        }

        let persons = [];

        for(let i in items) {
            let item = items[i];
            let person = Object.create(Person.prototype);
            persons.push( Object.assign(person,item) );
        }

        return persons;
    }

    private _setPersons(persons: Person[]) : void {
        let items = [];

        for(let i in persons) {
            items.push( Object.assign({},persons[i]) );
        }

        window.localStorage.setItem('persons',JSON.stringify(items));
    }

    private _setPerson(person: Person) {
        let persons = this._getPersons();
        let l = persons.length*1;

        for(let i in persons) {
            if( persons[i].id == person.id ) {
                persons[i] = person;
                break;
            }
        }

        if( l == persons.length ) {
            persons.push(person);
        }

        this._setPersons(persons);
    }

    private _removePerson(person: Person) {
        let persons = this._getPersons();
        let l = persons.length*1;

        for(let i in persons) {
            if( persons[i].id == person.id ) {
                persons.splice(parseInt(i),1);
                break;
            }
        }

        this._setPersons(persons);
    }
}
