import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarComoComponent } from './cadastrar-como.component';

describe('CadastrarComoComponent', () => {
  let component: CadastrarComoComponent;
  let fixture: ComponentFixture<CadastrarComoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarComoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarComoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
