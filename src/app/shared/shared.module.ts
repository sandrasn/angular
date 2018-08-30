import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import  { MatButtonModule } from '@angular/material';
import { ValidatorsComponent } from './validators/validators/validators.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule
  ],
  declarations: [HeaderComponent, ValidatorsComponent],
  exports:[ HeaderComponent ]
})
export class SharedModule { }
