import { NgModule } from "@angular/core";
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatChipsModule} from '@angular/material/chips';
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
    exports: [
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        MatSelectModule,
        MatChipsModule,
        MatSnackBarModule,
        MatGridListModule,
    ]
})
export class AngularMaterialmodule{}