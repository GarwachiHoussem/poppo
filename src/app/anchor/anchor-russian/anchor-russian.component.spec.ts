import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnchorRussianComponent } from './anchor-russian.component';

describe('AnchorRussianComponent', () => {
  let component: AnchorRussianComponent;
  let fixture: ComponentFixture<AnchorRussianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnchorRussianComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnchorRussianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
