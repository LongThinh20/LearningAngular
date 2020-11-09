import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-ifelse',
  templateUrl: './directive-ifelse.component.html',
  styleUrls: ['./directive-ifelse.component.scss'],
})
export class DirectiveIfelseComponent implements OnInit {
  public status: boolean = false;
  private ThongBao: string = '';

  constructor() {}
  DangXuat() {
    this.status = false;
  }
  DangNhap(email: string, pass: string) {
    if (email === 'cybersoft@gmail.com' && pass === '123456') {
      this.status = true;
    } else {
      this.status = false;
      this.ThongBao = "email hoặc pass chưa chính xác!!"
    }
  }
  ngOnInit(): void {}
}
