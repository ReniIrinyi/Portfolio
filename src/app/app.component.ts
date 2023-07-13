import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ComponentService } from './Service/ComponentService';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fade-in', [
      state('void', style({ opacity: 0 })),
      state('*', style({ opacity: 1 })),
      transition('void=>*', animate('2s ease-in')),
    ]),
  ],
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,
    private componentService: ComponentService
  ) {}
  componentStatus: boolean | undefined;
  blogComponentStatus: boolean | undefined;

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        //subscribe to the componentStatus$ and display/hide the home and the tech-stack component
        this.componentService.componentStatus$.subscribe((status) => {
          //need for the change detection
          setTimeout(() => {
            this.componentStatus = status;
          });
        });
      }
    });
  }
}
