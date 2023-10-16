import { Component, ElementRef, OnInit } from '@angular/core';
// import { AppComponent } from '../app.component';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {
  constructor(private myElement: ElementRef){}
  goTo(){
    let el = this.myElement.nativeElement.querySelector(".targetElm");
    el.scrollIntoView();
  }
  ngOnInit(): void {
    this.goTo();
  }
  
  companyName: string = `Austrian Winter Experience GmbH`;
}

// title: string = "";
// constructor(){
//   this.title = new AppComponent().title;
// }
// ngOnInit(): void {
//   // this.goTo();
// }