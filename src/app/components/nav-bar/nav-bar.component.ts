import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  visibilityMenu : boolean = false;

  responsiveMenuVisibility(){
    this.visibilityMenu = !this.visibilityMenu;
  }

}
