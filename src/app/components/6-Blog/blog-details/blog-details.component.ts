import { Component, OnInit } from "@angular/core";
import { ProjectDataService } from "src/app/Service/ProjectDataService";
import { BlogPost } from "src/app/Model/BlogPost";
import { ActivatedRoute, Router } from "@angular/router";
import { ComponentService } from "src/app/Service/ComponentService";
import { Observable, take } from "rxjs";

@Component({
  selector: "app-blog-details",
  templateUrl: "./blog-details.component.html",
  styleUrls: ["./blog-details.component.scss"],
})
export class BlogDetailsComponent implements OnInit {
  id: number = -1;
  selectedPost$: Observable<BlogPost | undefined>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private projectDataService: ProjectDataService,
    private componentService: ComponentService
  ) {
    this.id = +this.activatedRoute.snapshot.paramMap.get("id")!;
    this.selectedPost$ = this.projectDataService.getPost(this.id);
  }

  ngOnInit(): void {
    this.componentService.setComponentStatus(false);
  }

  goNext() {
    this.projectDataService
      .getPosts()
      .pipe(take(1))
      .subscribe((p) => {
        if (this.id < p.length) {
          this.id++;
          this.selectedPost$ = this.projectDataService.getPost(this.id);
          this.router.navigate(["blogpost/" + this.id]);
        }
      });
  }

  goPrevious() {
    if (this.id > 1) {
      this.id--;
      this.selectedPost$ = this.projectDataService.getPost(this.id);
      this.router.navigate(["blogpost/" + this.id]);
    }
  }
}
