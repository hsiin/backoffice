import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierUtilComponent } from './modifier-util.component';

describe('ModifierUtilComponent', () => {
  let component: ModifierUtilComponent;
  let fixture: ComponentFixture<ModifierUtilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierUtilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierUtilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
