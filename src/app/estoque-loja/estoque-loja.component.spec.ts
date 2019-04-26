import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstoqueLojaComponent } from './estoque-loja.component';

describe('EstoqueLojaComponent', () => {
  let component: EstoqueLojaComponent;
  let fixture: ComponentFixture<EstoqueLojaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstoqueLojaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstoqueLojaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
