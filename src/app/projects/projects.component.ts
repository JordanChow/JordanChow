import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { WorkCard } from '../models/work-card';
import { WorkCardComponent } from '../work-card/work-card.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit, AfterViewInit {
  @ViewChild(WorkCardComponent) workCard: WorkCardComponent;

  currentCardIndex = 1;

  workCards: WorkCard[] = [
    {
      firstHeader: "Dating App",
      secondHeader: "Web Application",
      body: "A complete multi-client dating application where users can customize their profile, like, filter and view users, and message other people in real time. ",
      date: "",
      colorHex: "#58389b",
      colorRgb: "rgba(88, 56, 155, 1)",
      index: 1
    },
    {
      firstHeader: "Autonomous Claw Machine",
      secondHeader: "University of Waterloo",
      body: "An autonomous claw machine that retrieves objects based off of color, designed in SolidWorks and programmed in Robot C",
      date: "",
      colorHex: "#8B4BAF",
      colorRgb: "rgba(139, 75, 175, 1)",
      index: 2
    },
    {
      firstHeader: "Healthy Bridge",
      secondHeader: "Hack the North (API Prize Winner)",
      body: "A web app that uses Clarifai’s image recognition API and a Facebook data scrapper to scan a Facebook profile and detect early signs of mental health issues",
      date: "",
      colorHex: "#5e60ce",
      colorRgb: "rgba(94, 96, 206, 1)",
      index: 3
    },
    {
      firstHeader: "FPS Golf",
      secondHeader: "AdrenaLAN Hackathon",
      body: "A mobile IOS game developed in C# with Unity3D, combining the strategy of golf with the intensity of first person shooters.",
      date: "",
      colorHex: "#5e60ce",
      colorRgb: "rgba(94, 96, 206, 1)",
      index: 4
    }];

  constructor() { }

  ngAfterViewInit(): void {
    this.calculateDots();
  }

  ngOnInit(): void {
  }

  nextCard() {
    this.workCard.incrementCardIndex();
    this.calculateDots();
  }

  previousCard() {
    this.workCard.decrementCardIndex();
    this.calculateDots();
  }

  currentCardEvent(cardIndex: string) {
    this.currentCardIndex = parseInt(cardIndex);
  }

  calculateDots() {
    var dots = document.getElementsByClassName("dot");

    for (var i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    dots[this.currentCardIndex - 1].className += " active";
  }
}
