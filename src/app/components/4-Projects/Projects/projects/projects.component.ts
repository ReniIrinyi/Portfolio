import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { ProjectDataService } from "src/app/Service/ProjectDataService";
import { ComponentService } from "src/app/Service/ComponentService";
import { Project } from "src/app/Model/Project";
import { Observable } from "rxjs";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.scss"],
})
export class ProjectsComponent implements OnInit {
  constructor(
    private projectDataService: ProjectDataService,
    private componentService: ComponentService
  ) {}
  projects$: Observable< Project[]> | undefined;
  ngOnInit(): void {
    this.projects$=this.projectDataService.getProjects(); 
    // Turn on the home and tech-stack components
    this.componentService.setComponentStatus(true);
  }
}
