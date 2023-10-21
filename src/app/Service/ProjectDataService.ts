import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, map } from "rxjs";
import { Project } from "../Model/Project";
import { BlogPost } from "../Model/BlogPost";

@Injectable({
  providedIn: "root",
})
export class ProjectDataService {
  private projectUrl = "../../assets/projects.json";
  private blogPostUrl = "../../assets/blogposts.json";

  constructor(private http: HttpClient) {}

  // Retrieve blogposts from the JSON file
  getPosts(): Observable<BlogPost[]> {
    return this.http.get<BlogPost[]>(this.blogPostUrl);
  }
  getPost(id: number): Observable<BlogPost | undefined> {
    return this.http
      .get<BlogPost[]>(this.blogPostUrl)
      .pipe(map((p) => p.find((p) => p.id == id)));
  }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.projectUrl);
  }

  getProject(id: number): Observable<Project | undefined> {
    return this.http
      .get<Project[]>(this.projectUrl)
      .pipe(map((p) => p.find((p) => p.idNumber == id)));
  }
}
