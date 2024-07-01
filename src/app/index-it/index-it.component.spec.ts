import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexItComponent } from './index-it.component';

describe('IndexItComponent', () => {
  let component: IndexItComponent;
  let fixture: ComponentFixture<IndexItComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexItComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndexItComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
