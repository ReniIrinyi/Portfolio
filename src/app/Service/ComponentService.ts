import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ComponentService {
  private componentStatusSubject = new BehaviorSubject<boolean>(true);
  componentStatus$ = this.componentStatusSubject.asObservable();
  private blogStatusSubject = new BehaviorSubject<boolean>(true);
  blogComponentStatus$ = this.componentStatusSubject.asObservable();

  // Set the status of the component
  setComponentStatus(status: boolean): void {
    this.componentStatusSubject.next(status);
  }
  setBlogStatus(status: boolean): void {
    this.componentStatusSubject.next(status);
  }
}
