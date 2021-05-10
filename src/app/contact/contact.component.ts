import { Component, OnInit } from '@angular/core';
import { PersonalCard } from '../models/personal-card';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactCard: PersonalCard = {
    firstHeader: "Keep in",
    secondHeader: " contact!",
    thirdHeader: "",
    body: "Still interested? Feel free to reach out and for more information see the links below!",
    colorHex: "#FE9F00",
    colorRgb: "rgba(254,159,0, 1)"
  };

  constructor() { }

  ngOnInit(): void {
  }

}
