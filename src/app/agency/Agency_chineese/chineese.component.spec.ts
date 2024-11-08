import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChineeseComponent } from './chineese.component';

describe('ChineeseComponent', () => {
  let component: ChineeseComponent;
  let fixture: ComponentFixture<ChineeseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChineeseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChineeseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
