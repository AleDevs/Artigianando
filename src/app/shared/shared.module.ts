import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './component/navigation/navigation.component';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule, FlexModule } from "@angular/flex-layout";
import { ToggleThemeComponent } from './component/toggle-theme/toggle-theme.component';

@NgModule({
  declarations: [
    NavigationComponent,
    ToggleThemeComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FlexModule
  ],
  exports: [
    //component
    NavigationComponent,
    ToggleThemeComponent,

    //module
    MaterialModule,
    FlexLayoutModule,
    FlexModule
  ]
})
export class SharedModule { }
