import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent implements OnInit {

  constructor(private titleService: Title){
    // Set Page Title..
    this.titleService.setTitle('Memory Official');
  }

  // Vars
  menuActive: boolean = false;

  // Ng Init
  ngOnInit(): void {

      
  }

  toggleMenu() {
    // If menu is active..
    if (this.menuActive == true) {

      // Turn it off..
      this.menuActive = false;

    } else {

      // Turn it on
      this.menuActive = true;
    }
  }

  closeMenu() {
    // Close it..
    this.menuActive = false;

    // Scrol to top
    window.scrollTo(0,0);
  }
}
