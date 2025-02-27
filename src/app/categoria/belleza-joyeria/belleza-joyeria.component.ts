import { Component } from '@angular/core';
import { ProducosService } from '../../service/producos.service';
import { CommonModule, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-belleza-joyeria',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './belleza-joyeria.component.html',
  styleUrl: './belleza-joyeria.component.css'
})
export class BellezaJoyeriaComponent {
  productos: any[] = [];

  constructor(private producosService: ProducosService) { }

  ngOnInit() {
    this.producosService.getBellezaJoyeria().subscribe(p => {
      this.productos = p;
    });
  }
}

