import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTurkishComponent } from './home-turkish.component';

describe('HomeTurkishComponent', () => {
  let component: HomeTurkishComponent;
  let fixture: ComponentFixture<HomeTurkishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeTurkishComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeTurkishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
