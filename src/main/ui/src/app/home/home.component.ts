import { AfterViewInit, ViewChild, Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements AfterViewInit {
  @ViewChild('bgVideo') videoElement!: ElementRef<HTMLVideoElement>;

  // Init After View
  ngAfterViewInit() {
    if (this.videoElement) {
      this.videoElement.nativeElement.addEventListener('ended', () => {
        this.videoElement.nativeElement.play(); // Replay the video
      });
    }
  }
}
