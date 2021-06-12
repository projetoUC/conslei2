import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgContatoComponent } from './pg-contato.component';

describe('PgContatoComponent', () => {
  let component: PgContatoComponent;
  let fixture: ComponentFixture<PgContatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PgContatoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PgContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
