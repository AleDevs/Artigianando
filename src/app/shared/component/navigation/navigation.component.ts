import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormControl } from '@angular/forms';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  toggleTheme = new FormControl();

  constructor(
    public authService: AuthService,
    private _renderer: Renderer2
  ) { }

  ngOnInit(): void {
    this.toggleTheme.valueChanges.subscribe(toggleValue => {
      console.log(toggleValue);
      
      if (toggleValue === true) {
        this._renderer.addClass(document.body, 'dark-theme');
        this._renderer.removeClass(document.body, 'light-theme');
      } else {
        this._renderer.addClass(document.body, 'light-theme');
        this._renderer.removeClass(document.body, 'dark-theme');
      }
    });
  }

}
