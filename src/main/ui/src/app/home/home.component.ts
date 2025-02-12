import { AfterViewInit, ViewChild, Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements AfterViewInit, OnInit {
  @ViewChild('bgVideo') videoElement!: ElementRef<HTMLVideoElement>;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.loadPretixWidget();
  }

  loadPretixWidget() {
    const scriptId = 'pretix-widget-script';
    
    // Check if script already exists
    if (document.getElementById(scriptId)) {
      this.reloadPretixWidget();
      return;
    }

    // Dynamically create script
    const script = this.renderer.createElement('script');
    script.id = scriptId;
    script.type = 'text/javascript';
    script.src = 'https://loop1tickets.com/widget/v1.en.js';
    script.async = true;
    script.onload = () => this.reloadPretixWidget();

    this.renderer.appendChild(document.body, script);
  }

  reloadPretixWidget() {
    if ((window as any).pretixWidget) {
      (window as any).pretixWidget.reinitialize();
    }
  }

  // Init After View
  ngAfterViewInit() {
    if (this.videoElement) {
      this.videoElement.nativeElement.addEventListener('ended', () => {
        this.videoElement.nativeElement.play(); // Replay the video
      });
    }
  }
}
