import { Component } from '@angular/core';
import { AngularMaterialmodule } from './AngularMaterialModule';
import { RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bloggingWeb';
}
