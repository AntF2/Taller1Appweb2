import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProducosService } from '../../service/producos.service';

@Component({
  selector: 'app-instrumentos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './instrumentos.component.html',
  styleUrl: './instrumentos.component.css'
})
export class InstrumentosComponent {
  productos: any[] = [];

  constructor(private producosService: ProducosService) { }

  ngOnInit() {
    this.producosService.getInstrumentosMusicales().subscribe(p => {
      this.productos = p;
    });
  }
}