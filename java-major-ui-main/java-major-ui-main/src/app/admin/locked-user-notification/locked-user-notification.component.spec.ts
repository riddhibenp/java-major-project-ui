import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LockedUserNotificationComponent } from './locked-user-notification.component';

describe('LockedUserNotificationComponent', () => {
  let component: LockedUserNotificationComponent;
  let fixture: ComponentFixture<LockedUserNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LockedUserNotificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LockedUserNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
