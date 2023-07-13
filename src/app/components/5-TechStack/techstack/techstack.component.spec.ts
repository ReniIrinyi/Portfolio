import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechStackComponent } from './techstack.component';

describe('TechstackComponent', () => {
  let component: TechStackComponent;
  let fixture: ComponentFixture<TechStackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TechStackComponent],
    });
    fixture = TestBed.createComponent(TechStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
