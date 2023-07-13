import { Component, OnInit } from "@angular/core";
import { ComponentService } from "src/app/Service/ComponentService";
import { ScrollService } from "src/app/Service/ScrollService";
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
    private scrollService: ScrollService,
    private projectDataService: ProjectDataService
  ) {}

  isSticky = false;
  posts: BlogPost[] = [];
  selectedPost: any;

  ngOnInit(): void {
    this.fetchBlogPosts();
    this.subscribeToIsSticky();
    // Turn on the home and tech-stack components
    this.componentService.setComponentStatus(false);
    this.addMarginToComponentBasedOnHeader();
  }

  //Subscribe to getPosts method to retrieve the Blogposts
  private fetchBlogPosts() {
    this.projectDataService.getPosts().subscribe(
      (posts) => {
        this.posts = posts;
      },
      (error) => {
        console.error("Error fetching projects:", error);
      }
    );
  }

  selectPost(post: any) {
    this.selectedPost = this.posts.find((p) => p.id == post.id);
    this.projectDataService.setSelectedPost(this.selectedPost);
    console.log(this.selectedPost);
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
}
