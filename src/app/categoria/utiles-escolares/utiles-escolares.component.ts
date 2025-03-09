import { Component, OnInit } from '@angular/core';
import { ProducosService } from '../../service/producos.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-utiles-escolares',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './utiles-escolares.component.html',
  styleUrls: ['./utiles-escolares.component.css'] // Corrige 'styleUrl' a 'styleUrls'
})
export class UtilesEscolaresComponent implements OnInit {
  productos: any[] = [];

  constructor(private producosService: ProducosService, private router: Router) { }

  ngOnInit() {
    this.cargarProductos();
  }

  cargarProductos() {
    this.producosService.getUtilesEscolares().subscribe(p => {
      this.productos = p;
    });
  }

  editarProducto(producto: any) {
    // Redirigir a la página de edición, pasando el ID del producto
    this.router.navigate(['/editar-producto', producto.id]);
  }

  eliminarProducto(id: string) {
    if (confirm('¿Estás seguro de que deseas eliminar este producto?')) {
      this.producosService.deleteProducto(id).subscribe(() => {
        this.cargarProductos(); // Recargar la lista de productos después de eliminar
      });
    }
  }
}