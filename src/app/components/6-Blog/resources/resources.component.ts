import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Category, Resources } from "src/app/Model/Resources";
import { Resource } from "src/app/Model/Resources";
import { HttpClient } from "@angular/common/http";
import { ComponentService } from "src/app/Service/ComponentService";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-resources",
  templateUrl: "./resources.component.html",
  styleUrls: ["./resources.component.scss"],
})
export class ResourcesComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private componentService: ComponentService
  ) {}
  private resourcesUrl = "../../../../assets/resources.json";
  resources: Resources[] = [];
  allResource: Resource[] = [];
  categories: Category[] = [];
  faArrowUp = faArrowUp;

  ngOnInit(): void {
    this.fetchResources();
  }

  private fetchResources() {
    this.getRessources().subscribe((ressource) => {
      this.resources = ressource;
      // this.categories = this.resources[0].categories.map((cat) => cat.name);
      this.categories = this.getCategory();
      this.allResource = this.getResource();
      this.componentService.setComponentStatus(true);
    });
  }
  getRessources(): Observable<Resources[]> {
    return this.http.get<Resources[]>(this.resourcesUrl);
  }
  getResource(): Resource[] {
    const allResource: Resource[] = [];
    this.resources[0].categories.forEach((cat) => {
      allResource.push(...cat.resources);
    });
    return allResource;
  }
  getCategory(): Category[] {
    const categories: Category[] = [];
    this.resources[0].categories.forEach((cat) => {
      categories.push(cat);
    });
    return categories;
  }
  getResourcesByCategory(category: string): Resource[] {
    const selectedCategory = this.resources[0].categories.find(
      (cat) => cat.name === category
    );
    return selectedCategory ? selectedCategory.resources : [];
  }
  scrollTo(page: string) {
    const element = document.getElementById(page);
    if (page) {
      element?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
}
