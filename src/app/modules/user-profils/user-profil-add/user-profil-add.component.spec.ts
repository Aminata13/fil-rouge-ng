import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfilAddComponent } from './user-profil-add.component';

describe('UserProfilAddComponent', () => {
  let component: UserProfilAddComponent;
  let fixture: ComponentFixture<UserProfilAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserProfilAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfilAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
