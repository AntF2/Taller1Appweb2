import { Component } from '@angular/core';
import { ProducosService } from '../../service/producos.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mascotas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mascotas.component.html',
  styleUrl: './mascotas.component.css'
})
export class MascotasComponent {
  productos: any[] = [];
  
    constructor(private producosService: ProducosService) { }
  
    ngOnInit() {
      this.producosService.getAccesoriosMascotas().subscribe(p => {
        this.productos = p;
      });
    }
}
