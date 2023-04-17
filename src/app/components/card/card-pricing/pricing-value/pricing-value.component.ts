import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing-value',
  templateUrl: './pricing-value.component.html',
  styleUrls: ['./pricing-value.component.css']
})
export class PricingValueComponent implements OnInit {
  @Input() gameType:string = "DIGITAL PS4"
  @Input() gamePrice:string = 'R$ 151,51'
  constructor() { }

  ngOnInit(): void {
  }

}
