import { Component } from '@angular/core';
import { Menu } from '../menu.class';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  menus: Menu[] = [
    new Menu("HOME", "/home"),
    new Menu("USER", "/user/list"),
    new Menu("ABOUT", "/about"),
  ];
}
