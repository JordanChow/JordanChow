import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { PersonalCard } from '../models/personal-card';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {  
  homeCard: PersonalCard = {
    firstHeader: "Welcome, I'm ",
    secondHeader: "Jordan ",
    thirdHeader: "Chow",
    body: "A creative problem solver looking to inspire change through technology.",
    colorHex: "#257AAE",
    colorRgb: "rgba(37,122,174,1)"
  };

  constructor() { }

  ngOnInit(): void {
  }

}
