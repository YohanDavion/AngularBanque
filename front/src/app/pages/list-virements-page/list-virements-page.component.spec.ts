import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVirementsPageComponent } from './list-virements-page.component';

describe('ListVirementsPageComponent', () => {
  let component: ListVirementsPageComponent;
  let fixture: ComponentFixture<ListVirementsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListVirementsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListVirementsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
