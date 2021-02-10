import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffecterClientComponent } from './affecter-client.component';

describe('AffecterClientComponent', () => {
  let component: AffecterClientComponent;
  let fixture: ComponentFixture<AffecterClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffecterClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AffecterClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
