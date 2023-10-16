import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured-page',
  templateUrl: './featured-page.component.html',
  styleUrls: ['./featured-page.component.css']
})
export class FeaturedPageComponent implements OnInit {
  constructor(private myElement: ElementRef){}
  goTo(){
    let el = this.myElement.nativeElement.querySelector(".targetElm");
    el.scrollIntoView();
  }
  ngOnInit(): void {
    this.goTo();
  }
}
