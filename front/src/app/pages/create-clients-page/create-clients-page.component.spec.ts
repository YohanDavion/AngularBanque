import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateClientsPageComponent } from './create-clients-page.component';

describe('CreateClientsPageComponent', () => {
  let component: CreateClientsPageComponent;
  let fixture: ComponentFixture<CreateClientsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateClientsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateClientsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
