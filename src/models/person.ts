import * as ko from 'knockout';

class Person {
  firstName: ko.Observable<string>;
  lastName: ko.Observable<string>;
  favoriteFilms: ko.ObservableArray<string>;

  fullName: ko.PureComputed<string> = ko.pureComputed(() => this.firstName() + ' ' + this.lastName());

  constructor(firstName: string, lastName: string, favoriteFilms: string[] | null) {
    this.firstName = ko.observable(firstName);
    this.lastName = ko.observable(lastName);
    this.favoriteFilms = ko.observableArray(favoriteFilms || []);
  }
}

export default Person;
