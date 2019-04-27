import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstoqueShowComponent } from './estoque-show.component';

describe('EstoqueShowComponent', () => {
  let component: EstoqueShowComponent;
  let fixture: ComponentFixture<EstoqueShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstoqueShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstoqueShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
