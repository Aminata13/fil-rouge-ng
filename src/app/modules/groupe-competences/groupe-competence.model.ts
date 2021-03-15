import { Competence } from "../competences/competence.model";
import { Referentiel } from "../referentiels/referentiel.model";

export class GroupeCompetence {
  constructor(
    public libelle: string,
    public description: string,
    public competences: Competence[],
    public referentiels?: Referentiel,
    public id?: number,
    public deleted?: boolean
  ) {  }
}
