import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-up';
  cities1: SelectItem[];
  selectedCity1: City;
  displayBasic = false;
  sales: any[];

  lastYearTotal: number;

  thisYearTotal: number;


  constructor() {
    this.cities1 = [
      {label: 'Select City', value: null},
      {label: 'New York', value: {id: 1, name: 'New York', code: 'NY'}},
      {label: 'Rome', value: {id: 2, name: 'Rome', code: 'RM'}},
      {label: 'London', value: {id: 3, name: 'London', code: 'LDN'}},
      {label: 'Istanbul', value: {id: 4, name: 'Istanbul', code: 'IST'}},
      {label: 'Paris', value: {id: 5, name: 'Paris', code: 'PRS'}}
    ];

    this.sales = [
      {product: 'Bamboo Watch', lastYearSale: 51, thisYearSale: 40, lastYearProfit: 54406, thisYearProfit: 43342},
      {product: 'Black Watch', lastYearSale: 83, thisYearSale: 9, lastYearProfit: 423132, thisYearProfit: 312122},
      {product: 'Blue Band', lastYearSale: 38, thisYearSale: 5, lastYearProfit: 12321, thisYearProfit: 8500},
      {product: 'Blue T-Shirt', lastYearSale: 49, thisYearSale: 22, lastYearProfit: 745232, thisYearProfit: 65323},
      {product: 'Brown Purse', lastYearSale: 17, thisYearSale: 79, lastYearProfit: 643242, thisYearProfit: 500332},
      {product: 'Chakra Bracelet', lastYearSale: 52, thisYearSale:  65, lastYearProfit: 421132, thisYearProfit: 150005},
      {product: 'Galaxy Earrings', lastYearSale: 82, thisYearSale: 12, lastYearProfit: 131211, thisYearProfit: 100214},
      {product: 'Game Controller', lastYearSale: 44, thisYearSale: 45, lastYearProfit: 66442, thisYearProfit: 53322},
      {product: 'Gaming Set', lastYearSale: 90, thisYearSale: 56, lastYearProfit: 765442, thisYearProfit: 296232},
      {product: 'Gold Phone Case', lastYearSale: 75, thisYearSale: 54, lastYearProfit: 21212, thisYearProfit: 12533}
    ];

    this.calculateLastYearTotal();
    this.calculateThisYearTotal();

  }

  calculateLastYearTotal = () => {
    let total = 0;
    for ( const sale of this.sales ) {
      total += sale.lastYearProfit;
    }

    this.lastYearTotal = total;
  }

  calculateThisYearTotal = () => {
    let total = 0;
    for (const sale of this.sales) {
      total += sale.thisYearProfit;
    }

    this.thisYearTotal = total;
  }


  handlePopupClick = () => {
      console.log('Show Popup clicked');
      this.displayBasic = true;
  }
}
