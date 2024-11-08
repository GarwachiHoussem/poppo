import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeChineeseComponent } from './home-chineese.component';

describe('HomeChineeseComponent', () => {
  let component: HomeChineeseComponent;
  let fixture: ComponentFixture<HomeChineeseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeChineeseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeChineeseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
