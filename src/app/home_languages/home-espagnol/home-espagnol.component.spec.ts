import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEspagnolComponent } from './home-espagnol.component';

describe('HomeEspagnolComponent', () => {
  let component: HomeEspagnolComponent;
  let fixture: ComponentFixture<HomeEspagnolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeEspagnolComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeEspagnolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
