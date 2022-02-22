import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookresultComponent } from './bookresult.component';

describe('BookresultComponent', () => {
  let component: BookresultComponent;
  let fixture: ComponentFixture<BookresultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookresultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
