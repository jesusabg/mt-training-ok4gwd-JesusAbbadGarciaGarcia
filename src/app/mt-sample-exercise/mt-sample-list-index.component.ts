import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DataService } from './data.service';
import { Farm } from './farm';

@Component({
  selector: 'mt-sample-list',
  templateUrl: './mt-sample-list-index.component.html',
})
export class MtSampleListIndexComponent {
  constructor(private _selected: DataService) {}

  ngOnInit() {
    this.getFarms();
  }
  selectedData: string;
  optionSelect: string;
  aa: boolean = false;
  farmsData: [] = [];
  filterSelector = [
    {
      view: 'No',
      value: '100ff',
    },
    {
      view: 'Active Date',
      value: '2020-',
    },
    {
      view: 'All',
      value: '',
    },
  ];

  selectedValue() {
    this.selectedData = this.optionSelect;
    console.log(this.optionSelect);
  }

  getFarms() {
    this._selected.getAllTasks().subscribe({
      next: (response) => {
        console.log(response);
        this.farmsData = response;
      },
      error: (error) => {
        console.log(error);
        console.log(' error');
      },
    });
  }

  setIndex(ii) {
    this.aa = ii;
    console.log;
  }
}
