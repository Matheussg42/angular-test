import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LojaStoreComponent } from './loja-store.component';

describe('LojaStoreComponent', () => {
  let component: LojaStoreComponent;
  let fixture: ComponentFixture<LojaStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LojaStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LojaStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
