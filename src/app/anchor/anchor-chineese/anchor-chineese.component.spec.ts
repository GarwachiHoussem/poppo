import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnchorChineeseComponent } from './anchor-chineese.component';

describe('AnchorChineeseComponent', () => {
  let component: AnchorChineeseComponent;
  let fixture: ComponentFixture<AnchorChineeseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnchorChineeseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnchorChineeseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
