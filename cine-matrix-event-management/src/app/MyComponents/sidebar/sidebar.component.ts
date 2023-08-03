import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  dropdown: string = '';

  toggleDropdown(section: string) {
    this.dropdown = this.dropdown === section ? '' : section;
  }
}
