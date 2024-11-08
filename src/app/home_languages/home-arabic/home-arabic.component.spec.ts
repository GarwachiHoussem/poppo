import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeArabicComponent } from './home-arabic.component';

describe('HomeArabicComponent', () => {
  let component: HomeArabicComponent;
  let fixture: ComponentFixture<HomeArabicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeArabicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeArabicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
