import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { City } from 'src/app/Netafim/types';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {

  @Input() places: City[];
  @Input() initial: City;
  @Output() placeEmitter = new EventEmitter<string>();
  placeControl = new FormControl();
  previousPlaceControl = new FormControl();
  filteredOptions: Observable<City[]>;
  
  constructor() {}

  ngOnInit() {
    this.filteredOptions = this.placeControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
    
  }

  private _filter(value: string | number): City[] {
    if(typeof value === 'string') {
      const filterValue = value.toLowerCase();
      return this.places.filter(city => city.name.toLowerCase().includes(filterValue));
    }
    else this.submitPlace();
  }

  getName(placeId: number):string {
    return placeId ? this.places.find(place => place.id === placeId).name : '';
  }

  submitPlace() {
    if (this.placeControl.status === 'VALID' && !this.placeControl.pristine) {
      this.placeEmitter.emit(this.placeControl.value);
    }
  }
}
