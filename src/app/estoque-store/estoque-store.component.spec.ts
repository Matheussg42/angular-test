import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstoqueStoreComponent } from './estoque-store.component';

describe('EstoqueStoreComponent', () => {
  let component: EstoqueStoreComponent;
  let fixture: ComponentFixture<EstoqueStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstoqueStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstoqueStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
