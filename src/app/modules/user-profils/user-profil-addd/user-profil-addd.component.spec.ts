import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfilAdddComponent } from './user-profil-addd.component';

describe('UserProfilAdddComponent', () => {
  let component: UserProfilAdddComponent;
  let fixture: ComponentFixture<UserProfilAdddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserProfilAdddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfilAdddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
