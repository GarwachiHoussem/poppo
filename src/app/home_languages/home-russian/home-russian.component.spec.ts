import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRussianComponent } from './home-russian.component';

describe('HomeRussianComponent', () => {
  let component: HomeRussianComponent;
  let fixture: ComponentFixture<HomeRussianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeRussianComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeRussianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
