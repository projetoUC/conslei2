import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaLeitosComponent } from './consulta-leitos.component';

describe('ConsultaLeitosComponent', () => {
  let component: ConsultaLeitosComponent;
  let fixture: ComponentFixture<ConsultaLeitosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaLeitosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaLeitosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
