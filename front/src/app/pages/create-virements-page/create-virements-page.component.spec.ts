import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVirementsPageComponent } from './create-virements-page.component';

describe('CreateVirementsPageComponent', () => {
  let component: CreateVirementsPageComponent;
  let fixture: ComponentFixture<CreateVirementsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateVirementsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateVirementsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
