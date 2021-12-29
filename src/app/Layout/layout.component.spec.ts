import { ComponentFixture, TestBed } from '@angular/core/testing';

import { layoutComponent } from './layout.component';

describe('layoutComponent', () => {
  let component: layoutComponent;
  let fixture: ComponentFixture<layoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [layoutComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(layoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
