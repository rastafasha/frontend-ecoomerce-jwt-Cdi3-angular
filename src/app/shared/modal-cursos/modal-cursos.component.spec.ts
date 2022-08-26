import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCursosComponent } from './modal-cursos.component';

describe('ModalCursosComponent', () => {
  let component: ModalCursosComponent;
  let fixture: ComponentFixture<ModalCursosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCursosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
