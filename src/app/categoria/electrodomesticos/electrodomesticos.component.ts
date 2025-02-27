import { Component } from '@angular/core';
import { ProducosService } from '../../service/producos.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-electrodomesticos',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './electrodomesticos.component.html',
  styleUrls: ['./electrodomesticos.component.css']
})
export class ElectrodomesticosComponent {
  productos: any[] = [];

  constructor(private producosService: ProducosService) { }

  ngOnInit() {
    this.producosService.getElectrodomesticos().subscribe(p => {
      this.productos = p;
    });
  }
}
