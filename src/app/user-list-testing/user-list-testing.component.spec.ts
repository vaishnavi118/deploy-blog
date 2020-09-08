import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListTestingComponent } from './user-list-testing.component';

describe('UserListTestingComponent', () => {
  let component: UserListTestingComponent;
  let fixture: ComponentFixture<UserListTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserListTestingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
