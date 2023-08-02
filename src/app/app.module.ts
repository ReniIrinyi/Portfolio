import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { Routes, RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
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

const appRoutes: Routes = [
  { path: "home", component: AboutComponent },
  { path: "projects", component: ProjectsComponent },
  { path: "project/:id", component: ProjectComponent },
  { path: "blog/:1", component: BlogComponent },
  { path: "blog/:id", component: BlogComponent },
  { path: "resources", component: ResourcesComponent },
  { path: "page-not-found", component: PageNotFoundComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "**", redirectTo: "/home", pathMatch: "full" },
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
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
