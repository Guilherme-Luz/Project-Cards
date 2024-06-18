import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  //colors
  colorO = 'orange';
  colorP = 'purple';

  //types
  typeO = 'Simples';
  typeP = 'VIP';

  //price
  priceO = 100;
  priceP = 1000;

  buttonClicked(){
    console.log("Button clicked");
  }

  onCardButtonClicked(){
    console.log("Card button clicked");
  }
}
