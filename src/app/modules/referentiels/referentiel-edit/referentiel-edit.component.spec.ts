import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferentielEditComponent } from './referentiel-edit.component';

describe('ReferentielEditComponent', () => {
  let component: ReferentielEditComponent;
  let fixture: ComponentFixture<ReferentielEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferentielEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferentielEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
