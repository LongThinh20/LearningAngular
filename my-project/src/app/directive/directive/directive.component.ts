import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.scss'],
})
export class DirectiveComponent implements OnInit {
  private status:boolean = true;

  constructor() {}

  Hidden() {
    this.status = false;
  }
  Show() {
    this.status = true;
  }

  ngOnInit(): void {}
}
