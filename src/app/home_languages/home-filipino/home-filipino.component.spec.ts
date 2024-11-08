import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFilipinoComponent } from './home-filipino.component';

describe('HomeFilipinoComponent', () => {
  let component: HomeFilipinoComponent;
  let fixture: ComponentFixture<HomeFilipinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeFilipinoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeFilipinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
