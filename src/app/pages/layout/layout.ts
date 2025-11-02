import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-layout',
  imports: [],
  templateUrl: './layout.html',
  styleUrl: './layout.scss'
})
export class Layout {
   @ViewChild('features', { static: true }) features!: ElementRef;

  scrollToFeatures(): void {
    this.features.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

}
