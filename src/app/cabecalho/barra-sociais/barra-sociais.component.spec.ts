import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraSociaisComponent } from './barra-sociais.component';

describe('BarraSociaisComponent', () => {
  let component: BarraSociaisComponent;
  let fixture: ComponentFixture<BarraSociaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarraSociaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraSociaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
