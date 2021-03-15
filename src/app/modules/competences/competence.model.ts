import { GroupeCompetence } from "../groupe-competences/groupe-competence.model";
import { Niveau } from "./niveau.model";

export class Competence {
  constructor(
    public libelle: string,
    public groupeCompetences?: GroupeCompetence[],
    public niveauEvaluations?: Niveau[],
    public id?: number,
    public deleted?: boolean
  ) {  }
}
