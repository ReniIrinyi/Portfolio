import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ProjectDataService } from "src/app/Service/ProjectDataService";
import { ComponentService } from "src/app/Service/ComponentService";
import { Project } from "src/app/Model/Project";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Observable, take } from "rxjs";
@Component({
  selector: "app-project",
  templateUrl: "./project.component.html",
  styleUrls: ["./project.component.scss"],
})
export class ProjectComponent implements OnInit {
  selectedProject$: Observable<Project | undefined>;
  faGithub = faGithub;
  faShare = faGlobe;
  id: number = -1;
  constructor(
    private projectDataService: ProjectDataService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private componentService: ComponentService
  ) {
    this.id = +this.activatedRoute.snapshot.paramMap.get("id")!;
    this.selectedProject$ = this.projectDataService.getProject(this.id);
  }

  ngOnInit(): void {
    this.componentService.setComponentStatus(false);
  }

  goNext() {
    this.projectDataService
      .getProjects()
      .pipe(take(1))
      .subscribe((p) => {
        if (this.id < p.length) {
          this.id++;
          this.selectedProject$ = this.projectDataService.getProject(this.id);
          this.router.navigate(["/project/" + this.id]);
        }
      });
  }

  goPrevious() {
    if (this.id > 1) {
      this.id--;
      this.selectedProject$ = this.projectDataService.getProject(this.id);
      this.router.navigate(["/project/" + this.id]);
    }
  }
}
