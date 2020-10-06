import { Injectable } from '@angular/core';
import { Case } from './case.model';

@Injectable({
  providedIn: 'root'
})
export class CaseService {
  formData: Case

  constructor() { }
}
