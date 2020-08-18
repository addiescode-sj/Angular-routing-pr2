import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { MessageService } from '../../message.service';
import { Crisis } from './crisis';
import { CRISES } from '../crisis/mock-crisis';

@Injectable({
  providedIn: 'root',
})
export class CrisisService {
  static nextCrisisId = 100;
  private crises$: BehaviorSubject<Crisis[]> = new BehaviorSubject<Crisis[]>(
    CRISES
  );

  constructor(private messageService: MessageService) {}

  getCrises(): Observable<Crisis[]> {
    return of(CRISES);
  }

  getCrisis(id: number | string) {
    return this.getCrises().pipe(
      map((crises) => crises.find((crisis) => crisis.id === +id))
    );
  }
  addCrisis(name: string) {
    name = name.trim();
    if (name) {
      let crisis = { id: CrisisService.nextCrisisId++, name };
      CRISES.push(crisis);
      this.crises$.next(CRISES);
    }
  }
}
