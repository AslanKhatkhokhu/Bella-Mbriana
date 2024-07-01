import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexUaComponent } from './index-ua.component';

describe('IndexUaComponent', () => {
  let component: IndexUaComponent;
  let fixture: ComponentFixture<IndexUaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexUaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndexUaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
