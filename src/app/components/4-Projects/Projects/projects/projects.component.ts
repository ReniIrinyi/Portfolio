import { Component, OnInit } from "@angular/core";
import { ProjectDataService } from "src/app/Service/ProjectDataService";
import { ComponentService } from "src/app/Service/ComponentService";
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from "@angular/animations";
import { Project } from "src/app/Model/Project";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.scss"],
  animations: [
    trigger("fade-in", [
      state("void", style({ opacity: 0 })),
      state("*", style({ opacity: 1 })),
      transition("void=>*", animate("1s ease-in")),
    ]),
  ],
})
export class ProjectsComponent implements OnInit {
  constructor(
    private projectDataService: ProjectDataService,
    private componentService: ComponentService
  ) {}

  supportStatus: any;
  projects: Project[] = [];
  selectedProject: any;

  ngOnInit(): void {
    this.fetchProjects();
    // Turn on the home and tech-stack components
    this.componentService.setComponentStatus(true);
  }

  // Subscribe to getProjects() method to retrieve the list of projects
  private fetchProjects(): void {
    this.projectDataService.getProjects().subscribe(
      (projects) => {
        this.projects = projects;
      },
      (error) => {
        console.log("Error fetching projects:", error);
      }
    );
  }

  //select page that was clicked on
  selectPage(project: any) {
    // Find the selected project from the projects list based on idNumber
    this.selectedProject = this.projects.find(
      (p) => p.idNumber == project.idNumber
    );
    // Set the selected project using projectDataService
    this.projectDataService.setSelectedProject(this.selectedProject);
  }
}
