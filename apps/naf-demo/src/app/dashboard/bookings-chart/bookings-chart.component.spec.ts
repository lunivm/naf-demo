import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingsChartComponent } from './bookings-chart.component';

describe('BookingsChartComponent', () => {
  let component: BookingsChartComponent;
  let fixture: ComponentFixture<BookingsChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingsChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
