import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";

import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { HeaderComponent } from "./components/1-Header/header/header.component";
import { HomeComponent } from "./components/2-Home/home/home.component";
import { AboutComponent } from "./components/3-About/about/about.component";
import { ProjectsComponent } from "./components/4-Projects/Projects/projects/projects.component";
import { ProjectComponent } from "./components/4-Projects/Project/project/project.component";
import { TechStackComponent } from "./components/5-TechStack/techstack/techstack.component";
import { BlogComponent } from "./components/6-Blog/blog/blog.component";
import { FooterComponent } from "./components/7-Footer/footer/footer.component";
import { PageNotFoundComponent } from "./components/8-Page-Not-Found/page-not-found/page-not-found.component";
import { SupportComponent } from "./components/9-Helpers/support/support.component";
import { SharebuttonsComponent } from "./components/9-Helpers/sharebuttons/sharebuttons.component";
import { LinksComponent } from "./components/9-Helpers/links/links.component";
import { ResourcesComponent } from "./components/6-Blog/resources/resources.component";
import { NgxSpinnerModule } from "ngx-spinner";
import { SpinnerComponent } from "./components/9-Helpers/spinner/spinner.component";
import { BlogDetailsComponent } from "./components/6-Blog/blog-details/blog-details.component";
import { PaginatorComponent } from "./components/9-Helpers/paginator/paginator.component";
import { MatPaginatorModule } from "@angular/material/paginator";

const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch: "full" },
  { path: "home", component: AboutComponent },
  { path: "projects", component: ProjectsComponent },
  { path: "project/:id", component: ProjectComponent },
  { path: "blog", component: BlogComponent },
  { path: "blogpost/:id", component: BlogDetailsComponent },
  { path: "resources", component: ResourcesComponent },
  {
    path: "page-not-found",
    component: PageNotFoundComponent,
  },
  { path: "**", redirectTo: "/home" },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ProjectComponent,
    ProjectsComponent,
    TechStackComponent,
    BlogComponent,
    FooterComponent,
    PageNotFoundComponent,
    SupportComponent,
    SharebuttonsComponent,
    LinksComponent,
    ResourcesComponent,
    SpinnerComponent,
    BlogDetailsComponent,
    PaginatorComponent,
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FontAwesomeModule,
    NgxSpinnerModule,
    MatPaginatorModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
