import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnchorHindiComponent } from './anchor-hindi.component';

describe('AnchorHindiComponent', () => {
  let component: AnchorHindiComponent;
  let fixture: ComponentFixture<AnchorHindiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnchorHindiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnchorHindiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
