import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForularioComponent } from './forulario.component';

describe('ForularioComponent', () => {
  let component: ForularioComponent;
  let fixture: ComponentFixture<ForularioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForularioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
