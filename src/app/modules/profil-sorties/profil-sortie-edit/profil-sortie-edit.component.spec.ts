import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilSortieEditComponent } from './profil-sortie-edit.component';

describe('ProfilSortieEditComponent', () => {
  let component: ProfilSortieEditComponent;
  let fixture: ComponentFixture<ProfilSortieEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilSortieEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilSortieEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
