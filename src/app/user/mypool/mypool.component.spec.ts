import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MypoolComponent } from './mypool.component';

describe('MypoolComponent', () => {
  let component: MypoolComponent;
  let fixture: ComponentFixture<MypoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MypoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MypoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
