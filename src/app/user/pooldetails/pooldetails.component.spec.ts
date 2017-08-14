import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PooldetailsComponent } from './pooldetails.component';

describe('PooldetailsComponent', () => {
  let component: PooldetailsComponent;
  let fixture: ComponentFixture<PooldetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PooldetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PooldetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
