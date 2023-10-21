import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { ProjectDataService } from "src/app/Service/ProjectDataService";
import { ComponentService } from "src/app/Service/ComponentService";
import { Project } from "src/app/Model/Project";

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
  projects: Project[] = [];
  ngOnInit(): void {
    this.subscribeToObservable();
    // Turn on the home and tech-stack components
    this.componentService.setComponentStatus(true);
  }
  // Subscribe to getProjects() method to retrieve the list of projects
  subscribeToObservable() {
    this.projectDataService.getProjects().subscribe((p) => {
      this.projects = p;
    });
  }
}
