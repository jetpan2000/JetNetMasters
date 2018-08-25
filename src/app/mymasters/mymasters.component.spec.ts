import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MymastersComponent } from './mymasters.component';

describe('MymastersComponent', () => {
  let component: MymastersComponent;
  let fixture: ComponentFixture<MymastersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MymastersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MymastersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
