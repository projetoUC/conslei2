import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgQuemSomosComponent } from './pg-quem-somos.component';

describe('PgQuemSomosComponent', () => {
  let component: PgQuemSomosComponent;
  let fixture: ComponentFixture<PgQuemSomosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PgQuemSomosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PgQuemSomosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
