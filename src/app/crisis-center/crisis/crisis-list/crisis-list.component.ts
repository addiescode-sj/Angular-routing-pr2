import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CrisisService } from '../crisis.service';
import { Crisis } from '../crisis';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-crisis-list',
  templateUrl: './crisis-list.component.html',
  styleUrls: ['./crisis-list.component.scss'],
})
export class CrisisListComponent implements OnInit {
  crises$: Observable<Crisis[]>;
  selectedId: number;

  constructor(private service: CrisisService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.crises$ = this.service.getCrises();
    // this.crises$ = this.route.paramMap.pipe(
    //   switchMap((params) => {
    //     return this.service.getCrises();
    //   })
    // );
  }
}
