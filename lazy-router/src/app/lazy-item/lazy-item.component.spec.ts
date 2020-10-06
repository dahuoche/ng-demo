import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyItemComponent } from './lazy-item.component';

describe('LazyItemComponent', () => {
  let component: LazyItemComponent;
  let fixture: ComponentFixture<LazyItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
