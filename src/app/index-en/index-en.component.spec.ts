import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexEnComponent } from './index-en.component';

describe('IndexEnComponent', () => {
  let component: IndexEnComponent;
  let fixture: ComponentFixture<IndexEnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexEnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndexEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
