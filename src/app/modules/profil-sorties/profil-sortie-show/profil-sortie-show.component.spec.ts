import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilSortieShowComponent } from './profil-sortie-show.component';

describe('ProfilSortieShowComponent', () => {
  let component: ProfilSortieShowComponent;
  let fixture: ComponentFixture<ProfilSortieShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilSortieShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilSortieShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
