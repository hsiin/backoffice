import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutVainqueurComponent } from './ajout-vainqueur.component';

describe('AjoutVainqueurComponent', () => {
  let component: AjoutVainqueurComponent;
  let fixture: ComponentFixture<AjoutVainqueurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutVainqueurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutVainqueurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
