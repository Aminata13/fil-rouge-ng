import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilSortieAddComponent } from './profil-sortie-add.component';

describe('ProfilSortieAddComponent', () => {
  let component: ProfilSortieAddComponent;
  let fixture: ComponentFixture<ProfilSortieAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilSortieAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilSortieAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
