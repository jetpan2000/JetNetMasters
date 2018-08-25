import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MymasterComponent } from './mymaster.component';

describe('MymasterComponent', () => {
  let component: MymasterComponent;
  let fixture: ComponentFixture<MymasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MymasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MymasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
