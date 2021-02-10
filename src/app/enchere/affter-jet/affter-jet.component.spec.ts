import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffterJetComponent } from './affter-jet.component';

describe('AffterJetComponent', () => {
  let component: AffterJetComponent;
  let fixture: ComponentFixture<AffterJetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffterJetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AffterJetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
