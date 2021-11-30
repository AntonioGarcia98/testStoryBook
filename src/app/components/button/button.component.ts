import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.less']
})
export class ButtonComponent  {
  @Input() 
  type: string = 'button';
  @Input() 
  className: string = 'button';
  @Input() 
  text: string = '';
  @Input() 
  disabled: boolean = false;
  @Input()
  backgroundColor?: string;
  @Input()
  color?: string;
  @Input() 
  leftIcon!: string;
  @Input() 
  rightIcon!: string;
  
  @Output() onClickButton: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  onButtonClick() {
    this.onClickButton.emit();
  }

  styleObject(): Object {
    if (this.backgroundColor && this.color  ){
        return {'background-color': this.backgroundColor,'color': this.color};
    }
    if(this.backgroundColor && !this.color){
      return {'background-color': this.backgroundColor};
    }
    if(this.color){
      return  {'color': this.color};
    }
    return {};
}
}
