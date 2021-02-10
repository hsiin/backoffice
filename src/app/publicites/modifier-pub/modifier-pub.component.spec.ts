import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierPubComponent } from './modifier-pub.component';

describe('ModifierPubComponent', () => {
  let component: ModifierPubComponent;
  let fixture: ComponentFixture<ModifierPubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierPubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierPubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
