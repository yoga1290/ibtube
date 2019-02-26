import { NgModule } from '@angular/core';

import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {CommonModule} from '@angular/common'

import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';

let exports, imports;

imports = exports =[
  CommonModule,
  MatToolbarModule,
  MatButtonModule,
  MatInputModule,
  MatCardModule
]

@NgModule({imports, exports})
export class MaterialModule { }
