import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFrenchComponent } from './home-french.component';

describe('HomeFrenchComponent', () => {
  let component: HomeFrenchComponent;
  let fixture: ComponentFixture<HomeFrenchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeFrenchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeFrenchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
