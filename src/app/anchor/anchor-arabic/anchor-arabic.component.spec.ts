import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnchorArabicComponent } from './anchor-arabic.component';

describe('AnchorArabicComponent', () => {
  let component: AnchorArabicComponent;
  let fixture: ComponentFixture<AnchorArabicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnchorArabicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnchorArabicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
