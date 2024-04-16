import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComptesPageComponent } from './list-comptes-page.component';

describe('ListComptesPageComponent', () => {
  let component: ListComptesPageComponent;
  let fixture: ComponentFixture<ListComptesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListComptesPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListComptesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
