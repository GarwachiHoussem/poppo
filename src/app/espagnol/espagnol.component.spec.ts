import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspagnolComponent } from './espagnol.component';

describe('EspagnolComponent', () => {
  let component: EspagnolComponent;
  let fixture: ComponentFixture<EspagnolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EspagnolComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspagnolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
