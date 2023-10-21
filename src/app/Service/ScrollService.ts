import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ScrollService {
  private isStickySubject$ = new BehaviorSubject<boolean>(false);
  isSticky$ = this.isStickySubject$.asObservable();

  // Set the sticky status
  setIsSticky(isSticky: boolean) {
    this.isStickySubject$.next(isSticky);
  }
}
