import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterEnchereComponent } from './ajouter-enchere.component';

describe('AjouterEnchereComponent', () => {
  let component: AjouterEnchereComponent;
  let fixture: ComponentFixture<AjouterEnchereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterEnchereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterEnchereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
