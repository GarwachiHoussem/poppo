import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnchorEspagnolComponent } from './anchor-espagnol.component';

describe('AnchorEspagnolComponent', () => {
  let component: AnchorEspagnolComponent;
  let fixture: ComponentFixture<AnchorEspagnolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnchorEspagnolComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnchorEspagnolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
