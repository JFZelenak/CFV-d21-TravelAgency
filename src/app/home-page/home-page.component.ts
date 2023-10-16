import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  constructor(private myElement: ElementRef){}
  goTo(){
    let el = this.myElement.nativeElement.querySelector(".targetElm");
    el.scrollIntoView();
  }
  ngOnInit(): void {
    this.goTo();
  }
  
}