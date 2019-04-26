import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoDestroyComponent } from './produto-destroy.component';

describe('ProdutoDestroyComponent', () => {
  let component: ProdutoDestroyComponent;
  let fixture: ComponentFixture<ProdutoDestroyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutoDestroyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoDestroyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
