import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgTrabalheConoscoComponent } from './pg-trabalhe-conosco.component';

describe('PgTrabalheConoscoComponent', () => {
  let component: PgTrabalheConoscoComponent;
  let fixture: ComponentFixture<PgTrabalheConoscoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PgTrabalheConoscoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PgTrabalheConoscoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
