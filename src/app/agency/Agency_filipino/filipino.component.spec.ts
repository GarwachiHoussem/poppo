import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilipinoComponent } from './filipino.component';

describe('FilipinoComponent', () => {
  let component: FilipinoComponent;
  let fixture: ComponentFixture<FilipinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilipinoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilipinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
