import { Component, EventEmitter, HostBinding, OnInit, Output, Renderer2 } from '@angular/core';
import { FormControl } from '@angular/forms';
import { User, UserPreference } from '../../model/user';
import { ThemeService } from '../../services/theme.service';
import { UserService } from '../../services/users.service';

@Component({
  selector: 'app-toggle-theme',
  templateUrl: './toggle-theme.component.html',
  styleUrls: ['./toggle-theme.component.scss']
})
export class ToggleThemeComponent implements OnInit {
  toggleTheme = new FormControl(false);
  @HostBinding('class') className = '';

  constructor(
    private themeService: ThemeService,
    private userService: UserService
  ) {

  }

  ngOnInit(): void {
    this.toggleTheme.setValue((localStorage.getItem('darkMode')=="true"));

    this.toggleTheme.valueChanges.subscribe(async (darkMode) => {
      this.themeService.setThemeMode(darkMode);

      var preferences = new UserPreference()
      preferences!.darkMode = darkMode;
      await this.userService.updateMyUserPreference(preferences)
    });
  }

}
