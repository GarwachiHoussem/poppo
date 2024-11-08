import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnchorEnglishComponent } from './anchor-english.component';

describe('AnchorEnglishComponent', () => {
  let component: AnchorEnglishComponent;
  let fixture: ComponentFixture<AnchorEnglishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnchorEnglishComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnchorEnglishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
