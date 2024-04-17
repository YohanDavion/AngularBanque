import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailClientPageComponent } from './detail-client-page.component';

describe('DetailClientPageComponent', () => {
  let component: DetailClientPageComponent;
  let fixture: ComponentFixture<DetailClientPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailClientPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailClientPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
