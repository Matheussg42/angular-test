import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoShowComponent } from './produto-show.component';

describe('ProdutoShowComponent', () => {
  let component: ProdutoShowComponent;
  let fixture: ComponentFixture<ProdutoShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutoShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
