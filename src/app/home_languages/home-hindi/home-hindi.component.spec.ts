import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeHindiComponent } from './home-hindi.component';

describe('HomeHindiComponent', () => {
  let component: HomeHindiComponent;
  let fixture: ComponentFixture<HomeHindiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeHindiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeHindiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
