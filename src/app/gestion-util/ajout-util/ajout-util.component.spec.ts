import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutUtilComponent } from './ajout-util.component';

describe('AjoutUtilComponent', () => {
  let component: AjoutUtilComponent;
  let fixture: ComponentFixture<AjoutUtilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutUtilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutUtilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
