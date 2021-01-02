import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfilListComponent } from './user-profil-list.component';

describe('UserProfilListComponent', () => {
  let component: UserProfilListComponent;
  let fixture: ComponentFixture<UserProfilListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserProfilListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfilListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
