import { Component } from '@angular/core';
import { ProducosService } from '../../service/producos.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tecnologia',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './tecnologia.component.html',
  styleUrls: ['./tecnologia.component.css']
})
export class TecnologiaComponent {
  productos: any[] = [];

  constructor(private producosService: ProducosService) { }

  ngOnInit() {
    this.producosService.getTecnologia().subscribe(p => {
      this.productos = p;
    });
  }
}
