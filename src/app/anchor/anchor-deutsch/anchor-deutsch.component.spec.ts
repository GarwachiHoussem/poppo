import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnchorDeutschComponent } from './anchor-deutsch.component';

describe('AnchorDeutschComponent', () => {
  let component: AnchorDeutschComponent;
  let fixture: ComponentFixture<AnchorDeutschComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnchorDeutschComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnchorDeutschComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
