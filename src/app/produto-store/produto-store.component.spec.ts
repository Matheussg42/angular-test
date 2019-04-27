import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoStoreComponent } from './produto-store.component';

describe('ProdutoStoreComponent', () => {
  let component: ProdutoStoreComponent;
  let fixture: ComponentFixture<ProdutoStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutoStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
