import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BarraMenu1Component } from './barra-menu1.component';


describe('BarraMenu1Component', () => {
  let component: BarraMenu1Component;
  let fixture: ComponentFixture<BarraMenu1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarraMenu1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraMenu1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
