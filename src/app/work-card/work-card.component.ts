import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WorkCard } from '../models/work-card';

@Component({
  selector: 'app-work-card',
  templateUrl: './work-card.component.html',
  styleUrls: ['./work-card.component.css']
})
export class WorkCardComponent implements OnInit {
  @Input() workCards: WorkCard[];

  @Output() currentCardEvent = new EventEmitter();

  currentCardIndex = 1;

  currentCard: WorkCard;

  constructor() { }

  ngOnInit(): void {
    this.findCurrentCard();
  }

  getBoxShadow() {
    return `0px 0px 30px 1px ${this.currentCard.colorRgb}`;
  }

  incrementCardIndex() {
    // If last card
    if (this.currentCardIndex == this.workCards.length)
    {
      this.currentCardIndex = 1;
    } 
    
    // If not last card
    else {
      this.currentCardIndex += 1;
    }

    this.findCurrentCard();
  }

  decrementCardIndex() {
    if (this.currentCardIndex == 1)
    {
      this.currentCardIndex = this.workCards.length;
    } else {
      this.currentCardIndex -= 1;
    }

    this.findCurrentCard();
  }

  findCurrentCard() {
    this.currentCard = this.workCards.find(x => x.index == this.currentCardIndex);

    this.currentCardEvent.emit(this.currentCardIndex.toString());
  }
}
