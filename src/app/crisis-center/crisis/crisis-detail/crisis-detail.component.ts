import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Crisis } from '../crisis';
import { DialogService } from '../../../dialog.service';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.scss'],
})
export class CrisisDetailComponent implements OnInit {
  crisis: Crisis;
  editName: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public dialogService: DialogService
  ) {}

  ngOnInit() {
    this.route.data.subscribe((data: { crisis: Crisis }) => {
      this.editName = data.crisis.name;
      this.crisis = data.crisis;
    });
  }

  cancel() {
    this.gotoCrises();
  }

  save() {
    this.dialogService
      .confirm('Discard changes?')
      .subscribe((result) => {
        if (this.crisis.name !== this.editName && result) {
          this.crisis.name = this.editName;
        }
        this.gotoCrises();
      })
      .unsubscribe();
  }

  // min: canDeactive를 쓰고 confirm을 넣은거같은데, 데이터가 바뀌는 시점이 애매하네요. 저는 취소 눌렀을 때, 바뀐 경우에 물어보는게 더 자연스러운 쓰임 같아요
  canDeactivate(): Observable<boolean> | boolean {
    if (this.crisis.name !== this.editName) {
      return this.dialogService.confirm('It is changed! Do you wanna cancel?');
    }

    return true;
  }

  gotoCrises() {
    // Pass along the crisis id if available
    // so that the CrisisListComponent can select that crisis.
    // Add a totally useless `foo` parameter for kicks.
    // 상대주소를 사용해서 목록 화면으로 돌아갑니다.
    // min: path에 object를 넣으면 뒤에 값이 붙어서 뺏어요. 일부러 넣으신거면 왜 넣으신지 설명해 주실 수 있으실까요?
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
