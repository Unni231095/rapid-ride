import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindpoolComponent } from './findpool.component';

describe('FindpoolComponent', () => {
  let component: FindpoolComponent;
  let fixture: ComponentFixture<FindpoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindpoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindpoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
