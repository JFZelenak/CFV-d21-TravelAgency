import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-faqs-page',
  templateUrl: './faqs-page.component.html',
  styleUrls: ['./faqs-page.component.css']
})
export class FaqsPageComponent implements OnInit {
  constructor(private myElement: ElementRef){}
  goTo(){
    let el = this.myElement.nativeElement.querySelector(".targetElm");
    el.scrollIntoView();
  }
  ngOnInit(): void {
    this.goTo();
  }
}
