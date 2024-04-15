import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateComptesPageComponent } from './create-comptes-page.component';

describe('CreateComptesPageComponent', () => {
  let component: CreateComptesPageComponent;
  let fixture: ComponentFixture<CreateComptesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateComptesPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateComptesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
