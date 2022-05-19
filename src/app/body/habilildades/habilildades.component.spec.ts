import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabilildadesComponent } from './habilildades.component';

describe('HabilildadesComponent', () => {
  let component: HabilildadesComponent;
  let fixture: ComponentFixture<HabilildadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabilildadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HabilildadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
