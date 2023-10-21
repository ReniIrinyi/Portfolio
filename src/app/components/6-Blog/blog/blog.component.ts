import { Component, OnInit } from "@angular/core";
import { ComponentService } from "src/app/Service/ComponentService";
import { ProjectDataService } from "src/app/Service/ProjectDataService";
import { BlogPost } from "src/app/Model/BlogPost";
import { Observable } from "rxjs";

@Component({
  selector: "app-blog",
  templateUrl: "./blog.component.html",
  styleUrls: ["./blog.component.scss"],
})
export class BlogComponent implements OnInit {
  constructor(
    private componentService: ComponentService,
    private projectDataService: ProjectDataService
  ) {}
  isSticky = false;
  blogPosts$: Observable<BlogPost[]> | undefined;

  ngOnInit(): void {
    this.blogPosts$ = this.projectDataService.getPosts();
    // Turn on the home and tech-stack components
    this.componentService.setComponentStatus(false);
  }

  //Subscribe to getPosts method to retrieve the Blogposts
}
