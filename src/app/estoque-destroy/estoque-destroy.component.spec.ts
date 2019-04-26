import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstoqueDestroyComponent } from './estoque-destroy.component';

describe('EstoqueDestroyComponent', () => {
  let component: EstoqueDestroyComponent;
  let fixture: ComponentFixture<EstoqueDestroyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstoqueDestroyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstoqueDestroyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
