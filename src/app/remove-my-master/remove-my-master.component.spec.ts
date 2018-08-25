import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveMyMasterComponent } from './remove-my-master.component';

describe('RemoveMyMasterComponent', () => {
  let component: RemoveMyMasterComponent;
  let fixture: ComponentFixture<RemoveMyMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveMyMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveMyMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
