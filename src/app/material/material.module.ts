import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';


const COMPONENT = [
  MatInputModule,
  MatFormFieldModule,
  MatToolbarModule,
  MatTabsModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatTableModule,
  MatCardModule
];

@NgModule({
  imports: COMPONENT,
  exports: COMPONENT
})
export class MaterialModule { }
