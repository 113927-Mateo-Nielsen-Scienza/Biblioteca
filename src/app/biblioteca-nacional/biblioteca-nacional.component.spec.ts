import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BibliotecaNacionalComponent } from './biblioteca-nacional.component';

describe('BibliotecaNacionalComponent', () => {
  let component: BibliotecaNacionalComponent;
  let fixture: ComponentFixture<BibliotecaNacionalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BibliotecaNacionalComponent]
    });
    fixture = TestBed.createComponent(BibliotecaNacionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
