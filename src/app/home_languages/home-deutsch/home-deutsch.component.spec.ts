import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDeutschComponent } from './home-deutsch.component';

describe('HomeDeutschComponent', () => {
  let component: HomeDeutschComponent;
  let fixture: ComponentFixture<HomeDeutschComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeDeutschComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeDeutschComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
