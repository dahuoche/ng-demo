import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleBComponent } from './sampleB.component';

describe('Sample2Component', () => {
  let component: SampleBComponent;
  let fixture: ComponentFixture<SampleBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
