import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'mt-sample-nav',
  templateUrl: './mt-sample-nav.component.html',
  providers: [DataService],
})
export class MtSampleNavComponent {}
