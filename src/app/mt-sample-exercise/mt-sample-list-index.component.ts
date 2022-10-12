import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DataService } from './data.service';
import { Farm } from './farm';
import { SelectedFarmService } from './selected-farm.service';
@Component({
  selector: 'mt-sample-list',
  templateUrl: './mt-sample-list-index.component.html',
})
export class MtSampleListIndexComponent {
  constructor(private _selected: SelectedFarmService) {}

  ngOnInit() {}
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
    this.getFarms();
    this.selectedData = this.optionSelect;
  }

  async getFarms() {
    const response = await this._selected.getAllTasks();
    this.farmsData = response;
  }

  getFarmsError(event) {
    this._selected.getAllTasksError(event).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        console.log(error);
        alert('Ocurrion una excepcion al traer las listas');
      },
    });
  }
  setIndex(ii) {
    this.aa = ii;
    console.log;
  }
}
