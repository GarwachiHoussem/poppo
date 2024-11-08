import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePortugueseComponent } from './home-portuguese.component';

describe('HomePortugueseComponent', () => {
  let component: HomePortugueseComponent;
  let fixture: ComponentFixture<HomePortugueseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePortugueseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePortugueseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
