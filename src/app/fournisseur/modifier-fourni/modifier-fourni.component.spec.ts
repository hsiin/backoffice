import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierFourniComponent } from './modifier-fourni.component';

describe('ModifierFourniComponent', () => {
  let component: ModifierFourniComponent;
  let fixture: ComponentFixture<ModifierFourniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierFourniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierFourniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
