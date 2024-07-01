import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexRuComponent } from './index-ru.component';

describe('IndexRuComponent', () => {
  let component: IndexRuComponent;
  let fixture: ComponentFixture<IndexRuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexRuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndexRuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
