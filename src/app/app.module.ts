import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ClarityModule } from '@clr/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { PersonalCardComponent } from './personal-card/personal-card.component';
import { WorkCardComponent } from './work-card/work-card.component';
import { ContactComponent } from './contact/contact.component';
import { ExperienceComponent } from './experience/experience.component';
import { PeerDevComponent } from './experience/peer-dev/peer-dev.component';
import { PeerQaComponent } from './experience/peer-qa/peer-qa.component';
import { ProjectsComponent } from './projects/projects.component';
import { ClawMachineComponent } from './projects/claw-machine/claw-machine.component';
import { HealthyBridgeComponent } from './projects/healthy-bridge/healthy-bridge.component';
import { DatingAppComponent } from './projects/dating-app/dating-app.component';
import { FpsGolfComponent } from './projects/fps-golf/fps-golf.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    WorkCardComponent,
    PersonalCardComponent,
    ContactComponent,
    ExperienceComponent,
    PeerDevComponent,
    PeerQaComponent,
    ProjectsComponent,
    ClawMachineComponent,
    HealthyBridgeComponent,
    DatingAppComponent,
    FpsGolfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
