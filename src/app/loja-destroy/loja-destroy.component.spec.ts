import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LojaDestroyComponent } from './loja-destroy.component';

describe('LojaDestroyComponent', () => {
  let component: LojaDestroyComponent;
  let fixture: ComponentFixture<LojaDestroyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LojaDestroyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LojaDestroyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
