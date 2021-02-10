import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterJetonComponent } from './ajouter-jeton.component';

describe('AjouterJetonComponent', () => {
  let component: AjouterJetonComponent;
  let fixture: ComponentFixture<AjouterJetonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterJetonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterJetonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
