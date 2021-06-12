import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaLeitosComponent } from './reserva-leitos.component';

describe('ReservaLeitosComponent', () => {
  let component: ReservaLeitosComponent;
  let fixture: ComponentFixture<ReservaLeitosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservaLeitosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservaLeitosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
