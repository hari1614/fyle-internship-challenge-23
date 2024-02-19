import { TestBed } from '@angular/core/testing';
import { PaginateComponent } from './Paginate.component';

describe('PaginateComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [PaginateComponent]
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(PaginateComponent);
    const paginate = fixture.componentInstance;
    expect(paginate).toBeTruthy();
  });
});
