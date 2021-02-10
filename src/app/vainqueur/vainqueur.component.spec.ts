import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VainqueurComponent } from './vainqueur.component';

describe('VainqueurComponent', () => {
  let component: VainqueurComponent;
  let fixture: ComponentFixture<VainqueurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VainqueurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VainqueurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
