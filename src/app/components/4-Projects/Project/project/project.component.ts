import { Component, OnInit } from "@angular/core";
import { ScrollService } from "src/app/Service/ScrollService";
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from "@angular/animations";
import { ProjectDataService } from "src/app/Service/ProjectDataService";
import { ComponentService } from "src/app/Service/ComponentService";
import { Project } from "src/app/Model/Project";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
@Component({
  selector: "app-project",
  templateUrl: "./project.component.html",
  styleUrls: ["./project.component.scss"],
  animations: [
    trigger("fade-in", [
      state("void", style({ opacity: 0 })),
      state("*", style({ opacity: 1 })),
      transition("void=>*", animate("1s ease-in")),
    ]),
  ],
})
export class ProjectComponent implements OnInit {
  constructor(
    private scrollService: ScrollService,
    private projectDataService: ProjectDataService,
    private componentService: ComponentService
  ) {}

  faGithub = faGithub;
  faShare = faGlobe;
  loading = true;
  isSticky = false;
  projects: Project[] = [];
  selectedProject: any;

  ngOnInit(): void {
    this.fetchProjects();
    this.subscribeToIsSticky();
    this.addMarginToComponentBasedOnHeader();
    // Turn off the home and tech-stack components
    this.componentService.setComponentStatus(false);
  }

  // Subscribe to getProjects() method to retrieve the list of projects
  private fetchProjects(): void {
    this.projectDataService.getProjects().subscribe(
      (projects) => {
        this.projects = projects;
        this.selectedProject = this.getSelectedProject();
        this.loading = false;
      },
      (error) => {
        console.error("Error fetching projects:", error);
        this.loading = false;
      }
    );
  }

  //subscribe to the isSticky$ observable from ScrollService
  private subscribeToIsSticky(): void {
    this.scrollService.isSticky$.subscribe((isSticky) => {
      this.isSticky = isSticky;
    });
  }

  // Adding margin-top of the element based on the header-height and sticky-state
  private addMarginToComponentBasedOnHeader(): void {
    const projectElement = document.getElementById("project");
    if (projectElement) {
      const headerHeight = document.getElementById("header")?.clientHeight || 0;
      projectElement.style.marginTop = this.isSticky
        ? headerHeight + "px"
        : "0";
    }
  }

  private getSelectedProject(): any {
    // Retrieve the selected project from the service
    const selectedProject = this.projectDataService.getSelectedProject();

    // If no selected project is found, return the first project in the list
    if (!selectedProject && this.projects.length > 0) {
      return this.projects[0];
    }
    return selectedProject;
  }

  //switch to the next/prev page
  switchPage(project: any, location: number) {
    const currentIndex = this.projects.findIndex(
      (p) => p.idNumber === project.idNumber
    );
    const newIndex = currentIndex + location;

    if (newIndex >= 0 && newIndex < this.projects.length) {
      this.selectedProject = this.projects[newIndex];
    } else {
      const defaultIndex = location > 0 ? 0 : this.projects.length - 1;
      this.selectedProject = this.projects[defaultIndex];
    }

    this.projectDataService.setSelectedProject(this.selectedProject);
  }
}
