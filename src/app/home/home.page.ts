import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  slide1 = 'https://cdn.pixabay.com/photo/2016/11/06/23/31/breakfast-1804457_960_720.jpg';
  slide2 = 'https://cdn.pixabay.com/photo/2017/02/15/10/39/salad-2068220_960_720.jpg';
  constructor() { }

  ngOnInit() {
  }

}
