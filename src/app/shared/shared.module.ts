import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './component/navigation/navigation.component';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule, FlexModule } from "@angular/flex-layout";
import { CursorCircleComponent } from './component/cursor-circle/cursor-circle.component';

@NgModule({
  declarations: [
    NavigationComponent,
    CursorCircleComponent,
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
    CursorCircleComponent,
    
    //module
    MaterialModule,
    FlexLayoutModule,
    FlexModule,
  ]
})
export class SharedModule { }
