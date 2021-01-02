import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfilEditComponent } from './user-profil-edit.component';

describe('UserProfilEditComponent', () => {
  let component: UserProfilEditComponent;
  let fixture: ComponentFixture<UserProfilEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserProfilEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfilEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
