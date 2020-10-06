import { Component, OnInit } from '@angular/core';
import { CaseService } from 'src/app/shared/case.service';

@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styles: [
  ]
})
export class CaseComponent implements OnInit {

  constructor(private service:CaseService) { }

  ngOnInit(): void {
  }

}
