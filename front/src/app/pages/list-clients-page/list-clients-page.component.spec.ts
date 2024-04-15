import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListClientsPageComponent } from './list-clients-page.component';

describe('ListClientsPageComponent', () => {
  let component: ListClientsPageComponent;
  let fixture: ComponentFixture<ListClientsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListClientsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListClientsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
