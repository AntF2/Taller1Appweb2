import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NosotrosComponent } from './nosotros/nosotros.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NosotrosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Taller1';
}
