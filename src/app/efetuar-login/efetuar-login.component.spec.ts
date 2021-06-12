import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EfetuarLoginComponent } from './efetuar-login.component';

describe('EfetuarLoginComponent', () => {
  let component: EfetuarLoginComponent;
  let fixture: ComponentFixture<EfetuarLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EfetuarLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EfetuarLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
