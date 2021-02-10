import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailJetonComponent } from './detail-jeton.component';

describe('DetailJetonComponent', () => {
  let component: DetailJetonComponent;
  let fixture: ComponentFixture<DetailJetonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailJetonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailJetonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
