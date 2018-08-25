import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMyMasterComponent } from './add-my-master.component';

describe('AddMyMasterComponent', () => {
  let component: AddMyMasterComponent;
  let fixture: ComponentFixture<AddMyMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMyMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMyMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
