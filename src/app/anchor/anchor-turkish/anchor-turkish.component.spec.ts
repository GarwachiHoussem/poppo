import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnchorTurkishComponent } from './anchor-turkish.component';

describe('AnchorTurkishComponent', () => {
  let component: AnchorTurkishComponent;
  let fixture: ComponentFixture<AnchorTurkishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnchorTurkishComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnchorTurkishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
