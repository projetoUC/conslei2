import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraContatoComponent } from './barra-contato.component';

describe('BarraContatoComponent', () => {
  let component: BarraContatoComponent;
  let fixture: ComponentFixture<BarraContatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarraContatoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
