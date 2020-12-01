import { Component } from '@angular/core';
import { TitleCasePipe, DatePipe, CurrencyPipe, DecimalPipe } from '@angular/common';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomText = lorem.sentence();
  payeeName: string;
  paymentDate: string;
  amountChanged: number;
  height: number;
  miles: number;
  previous = true;
  next = true;

  
  currentPage = 0;
    images = [{
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2h8ZW58MHx8MHw%3D&auto=format&fit=crop&w=700&q=60'
    },
    {
      title: 'At the coast',
      url: 'https://images.unsplash.com/photo-1505852679233-d9fd70aff56d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aGF3YWlpfGVufDB8fDB8&auto=format&fit=crop&w=700&q=60'
    },
    {    
      title: 'At Iceland',
      url: 'https://images.unsplash.com/photo-1509529711801-deac231925ac?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjV8fGljZWxhbmR8ZW58MHx8MHw%3D&auto=format&fit=crop&w=700&q=60'
    }]

  checkWindowIndex(index: number){
    return Math.abs(this.currentPage - index) < 5;    
  }

  onMilesChange(value: string){
    this.miles = parseFloat(value);
  }

  onHeightChange(value: string){
    this.height = parseFloat(value);
  }

  getPayeeName(name: string){
    this.payeeName = name;
  }
  onDateChange(dateEntered: string){
    this.paymentDate = dateEntered;
  }
  onAmountChange(amount: string){
    this.amountChanged = parseFloat(amount);

  }

  posts = [
    {  
      title: 'Beautiful Tree',
      imageUrl: 'assets/static_pics/tree.jpg',
      username: 'Nature',
      content: 'Never see such a beautiful tree',
    
    },
    {  
      title: 'Snowy Montain',
      imageUrl: 'assets/static_pics/snow_montain.jpg',
      username: 'Adventure',
      content: 'Found the tallest mountain in Canada!',
    
    },
    {  
      title: 'Blue Sports Car',
      imageUrl: 'assets/static_pics/car.jpg',
      username: 'Prince',
      content: 'Fancy car for funcy people!',
    
    }
  ]
}
