import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailClinetComponent } from './detail-clinet.component';

describe('DetailClinetComponent', () => {
  let component: DetailClinetComponent;
  let fixture: ComponentFixture<DetailClinetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailClinetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailClinetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
