import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteInserirComponent } from './paciente-inserir.component';

describe('PacienteInserirComponent', () => {
  let component: PacienteInserirComponent;
  let fixture: ComponentFixture<PacienteInserirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacienteInserirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PacienteInserirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
