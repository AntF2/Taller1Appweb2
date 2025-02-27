import { Component } from '@angular/core';
import { ProducosService } from '../../service/producos.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-utiles-escolares',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './utiles-escolares.component.html',
  styleUrl: './utiles-escolares.component.css'
})
export class UtilesEscolaresComponent {
  productos: any[] = [];
  
    constructor(private producosService: ProducosService) { }
  
    ngOnInit() {
      this.producosService.getUtilesEscolares().subscribe(p => {
        this.productos = p;
      });
    }
}
