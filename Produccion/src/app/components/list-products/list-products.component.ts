import { Component } from '@angular/core';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-list-products',
  standalone: false,
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css'
})
export class ListProductsComponent {
  listProducts: Product[] = [
    {id:1,name: 'Producto_1', description: 'Producto de prueba', price: 200, stock: 20},
    {id:2,name: 'Producto_2', description: 'Producto Vacio', price: 500, stock: 2},
  ]
}
