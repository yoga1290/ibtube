import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {CommonModule} from '@angular/common'

import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSidenavModule} from '@angular/material/sidenav'; 
import {MatIconModule} from '@angular/material/icon';

let exports, imports;

imports = exports =[
  CommonModule,
  MatToolbarModule,
  MatButtonModule,
  MatInputModule,
  MatCardModule,
  MatIconModule,
  MatSidenavModule,
  MatGridListModule,
  BrowserAnimationsModule
]

@NgModule({imports, exports})
export class MaterialModule { }
