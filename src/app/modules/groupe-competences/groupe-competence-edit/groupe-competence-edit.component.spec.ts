import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupeCompetenceEditComponent } from './groupe-competence-edit.component';

describe('GroupeCompetenceEditComponent', () => {
  let component: GroupeCompetenceEditComponent;
  let fixture: ComponentFixture<GroupeCompetenceEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupeCompetenceEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupeCompetenceEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
