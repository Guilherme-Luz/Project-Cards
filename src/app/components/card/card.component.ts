import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  @Input({ required: true, alias: 'color'}) cardStyle: 'orange' | 'purple' = 'orange';

  @Input({ required: true, alias: "type"}) planType: string = '';
  @Input({ required: true, alias: "price"}) planPrice: number = 0;

  @Output('buttonClicked')
  buttonClickedEmitted = new EventEmitter<void>();

  onButtonClicked(){
    this.buttonClickedEmitted.emit();
  }
}
