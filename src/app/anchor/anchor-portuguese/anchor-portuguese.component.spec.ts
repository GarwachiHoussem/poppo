import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnchorPortugueseComponent } from './anchor-portuguese.component';

describe('AnchorPortugueseComponent', () => {
  let component: AnchorPortugueseComponent;
  let fixture: ComponentFixture<AnchorPortugueseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnchorPortugueseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnchorPortugueseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
