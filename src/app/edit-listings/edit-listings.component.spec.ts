import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditListingsComponent } from './edit-listings.component';

describe('EditListingsComponent', () => {
  let component: EditListingsComponent;
  let fixture: ComponentFixture<EditListingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditListingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
