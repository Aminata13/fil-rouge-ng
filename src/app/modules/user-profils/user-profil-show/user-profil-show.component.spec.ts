import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfilShowComponent } from './user-profil-show.component';

describe('UserProfilShowComponent', () => {
  let component: UserProfilShowComponent;
  let fixture: ComponentFixture<UserProfilShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserProfilShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfilShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
