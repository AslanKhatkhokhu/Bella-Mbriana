import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexFrComponent } from './index-fr.component';

describe('IndexFrComponent', () => {
  let component: IndexFrComponent;
  let fixture: ComponentFixture<IndexFrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexFrComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndexFrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
