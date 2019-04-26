import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LojaUpdateComponent } from './loja-update.component';

describe('LojaUpdateComponent', () => {
  let component: LojaUpdateComponent;
  let fixture: ComponentFixture<LojaUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LojaUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LojaUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
