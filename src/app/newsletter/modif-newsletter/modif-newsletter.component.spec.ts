import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifNewsletterComponent } from './modif-newsletter.component';

describe('ModifNewsletterComponent', () => {
  let component: ModifNewsletterComponent;
  let fixture: ComponentFixture<ModifNewsletterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifNewsletterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifNewsletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
