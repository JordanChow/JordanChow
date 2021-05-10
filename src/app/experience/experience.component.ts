import { AfterViewInit, Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { WorkCard } from '../models/work-card';
import { WorkCardComponent } from '../work-card/work-card.component';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit, AfterViewInit{
  @ViewChild(WorkCardComponent) workCard: WorkCardComponent;

  currentCardIndex = 1;

  workCards: WorkCard[] = [
  {
    firstHeader: "Software Developer",
    secondHeader: "PEER Group",
    body: "Specialized in web development, strengthening my skills with .NET Framework, Angular, SQL Server, and Selenium WebDriver",
    date: "Jan - Apr 2021",
    colorHex: "#37b635",
    colorRgb: "rgba(55, 182, 53, 1)",
    index: 1
  },
  {
    firstHeader: "Quality Assurance Specialist",
    secondHeader: "PEER Group",
    body: "Thoroughly tested software through creating test plans, writing automated test scripts, executing test cases, and bug verification",
    date: "May - Aug 2020",
    colorHex: "#76c893",
    colorRgb: "rgba(118, 200, 147, 1)",
    index: 2
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

  calculateDots()
  {
    var dots = document.getElementsByClassName("dot");
    
    for (var i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    dots[this.currentCardIndex-1].className += " active"; 
  }
}
