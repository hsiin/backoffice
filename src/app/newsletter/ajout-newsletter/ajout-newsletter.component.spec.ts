import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutNewsletterComponent } from './ajout-newsletter.component';

describe('AjoutNewsletterComponent', () => {
  let component: AjoutNewsletterComponent;
  let fixture: ComponentFixture<AjoutNewsletterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutNewsletterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutNewsletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
