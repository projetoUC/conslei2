import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraLoginComponent } from './barra-login.component';

describe('BarraLoginComponent', () => {
  let component: BarraLoginComponent;
  let fixture: ComponentFixture<BarraLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarraLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
