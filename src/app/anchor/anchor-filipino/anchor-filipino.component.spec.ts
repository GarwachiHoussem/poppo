import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnchorFilipinoComponent } from './anchor-filipino.component';

describe('AnchorFilipinoComponent', () => {
  let component: AnchorFilipinoComponent;
  let fixture: ComponentFixture<AnchorFilipinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnchorFilipinoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnchorFilipinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
