import { Component, Input, OnInit } from '@angular/core';
import { PersonalCard } from '../models/personal-card';

@Component({
  selector: 'app-personal-card',
  templateUrl: './personal-card.component.html',
  styleUrls: ['./personal-card.component.css']
})
export class PersonalCardComponent implements OnInit {
  @Input() personalCard: PersonalCard;

  constructor() { }

  ngOnInit(): void {
  }

  getBoxShadow() {
    return `0px 0px 30px 1px ${this.personalCard.colorRgb}`;
  }

}
