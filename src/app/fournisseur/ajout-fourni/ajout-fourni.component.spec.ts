import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutFourniComponent } from './ajout-fourni.component';

describe('AjoutFourniComponent', () => {
  let component: AjoutFourniComponent;
  let fixture: ComponentFixture<AjoutFourniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutFourniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutFourniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
