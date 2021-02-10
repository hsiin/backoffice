import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierJetonComponent } from './modifier-jeton.component';

describe('ModifierJetonComponent', () => {
  let component: ModifierJetonComponent;
  let fixture: ComponentFixture<ModifierJetonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierJetonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierJetonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
