import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './component/navigation/navigation.component';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule, FlexModule } from "@angular/flex-layout";

@NgModule({
  declarations: [
    NavigationComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FlexModule,
  ],
  exports: [
    //component
    NavigationComponent,

    //module
    MaterialModule,
    FlexLayoutModule,
    FlexModule,
  ]
})
export class SharedModule { }
