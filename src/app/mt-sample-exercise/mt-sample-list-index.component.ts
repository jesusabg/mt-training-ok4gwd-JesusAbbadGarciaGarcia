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
    this.selectedData = this.optionSelect;
    console.log(this.optionSelect);
    this.getFarms();
  }

  async getFarms() {
    const response = await this._selected.getAllTasks();
    this.farmsData = response;
  }

  async getFarmsError(event) {
    try {
      const response = await this._selected.getAllTasksError(event);
      response;
    } catch (error) {
      console.log('Error al traer la lista');
      alert('Ocurrio una excepcion al traer la lista de granjas');
    }
  }
  setIndex(ii) {
    this.aa = ii;
    console.log;
  }
}
