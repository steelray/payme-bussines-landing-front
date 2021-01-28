import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
declare var addActiveClassToNav, toggleMainNav: any;
@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainMenuComponent implements OnInit {

  ngOnInit(): void {
    toggleMainNav();
    addActiveClassToNav();
  }

}
