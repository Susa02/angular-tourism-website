import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictCardsComponent } from './district-cards.component';

describe('DistrictCardsComponent', () => {
  let component: DistrictCardsComponent;
  let fixture: ComponentFixture<DistrictCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DistrictCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistrictCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
