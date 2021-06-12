import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarHospitalComponent } from './cadastrar-hospital.component';

describe('CadastrarHospitalComponent', () => {
  let component: CadastrarHospitalComponent;
  let fixture: ComponentFixture<CadastrarHospitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarHospitalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarHospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
