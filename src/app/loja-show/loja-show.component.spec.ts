import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LojaShowComponent } from './loja-show.component';

describe('LojaShowComponent', () => {
  let component: LojaShowComponent;
  let fixture: ComponentFixture<LojaShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LojaShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LojaShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
