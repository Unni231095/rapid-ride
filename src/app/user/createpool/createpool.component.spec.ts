import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatepoolComponent } from './createpool.component';

describe('CreatepoolComponent', () => {
  let component: CreatepoolComponent;
  let fixture: ComponentFixture<CreatepoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatepoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatepoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
