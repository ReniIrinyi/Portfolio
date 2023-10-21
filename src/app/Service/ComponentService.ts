import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ComponentService {
  private componentStatusSubject$ = new BehaviorSubject<boolean>(true);
  componentStatus$ = this.componentStatusSubject$.asObservable();

  setComponentStatus(status: boolean): void {
    this.componentStatusSubject$.next(status);
  }
}
