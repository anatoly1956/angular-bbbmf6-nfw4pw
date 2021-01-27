import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CartService } from '../cart.service';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();
  checkoutFrorms = this.formBuilder.group({
    name: '',
    
  })

  constructor( private cartService: CartService, 
                      formBuilder:  FormBuilder,
                       ) { }

  ngOnInit() {
  }

}