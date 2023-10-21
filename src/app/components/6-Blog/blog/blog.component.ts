import { Component, OnInit } from "@angular/core";
import { ComponentService } from "src/app/Service/ComponentService";
import { ProjectDataService } from "src/app/Service/ProjectDataService";
import { BlogPost } from "src/app/Model/BlogPost";

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
  blogPosts: BlogPost[] = [];

  ngOnInit(): void {
    this.subscribeToObservable();
    // Turn on the home and tech-stack components
    this.componentService.setComponentStatus(false);
  }

  //Subscribe to getPosts method to retrieve the Blogposts
  subscribeToObservable() {
    this.projectDataService.getPosts().subscribe((p) => {
      this.blogPosts = p;
    });
  }
}
