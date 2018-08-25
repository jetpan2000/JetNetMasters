import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveMasterComponent } from './remove-master.component';

describe('RemoveMasterComponent', () => {
  let component: RemoveMasterComponent;
  let fixture: ComponentFixture<RemoveMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
