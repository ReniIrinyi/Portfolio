import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../Model/Project';
import { BlogPost } from '../Model/BlogPost';

@Injectable({
  providedIn: 'root',
})
export class ProjectDataService {
  private selectedProject: any;
  private projectUrl = '../../assets/projects.json';
  private selectedBlogPost: any;
  private blogPostUrl = '../../assets/blogposts.json';

  constructor(private http: HttpClient) {}
  //
  //GET BLOGPOSTS
  // Set the selected blogpost
  //
  setSelectedPost(post: any) {
    this.selectedBlogPost = post;
  }
  //Get the selected project
  getSelectedPost() {
    return this.selectedBlogPost;
  }
  // Retrieve blogposts from the JSON file
  getPosts(): Observable<BlogPost[]> {
    return this.http.get<BlogPost[]>(this.blogPostUrl);
  }

  //
  //GET PROJECTS
  //
  // Retrieve projects from the JSON file
  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.projectUrl);
  }
  // Set the selected project
  setSelectedProject(project: any) {
    this.selectedProject = project;
  }
  //Get the selected project
  getSelectedProject() {
    return this.selectedProject;
  }
}
