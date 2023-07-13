import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharebuttonsComponent } from './sharebuttons.component';

describe('SharebuttonsComponent', () => {
  let component: SharebuttonsComponent;
  let fixture: ComponentFixture<SharebuttonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SharebuttonsComponent],
    });
    fixture = TestBed.createComponent(SharebuttonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
