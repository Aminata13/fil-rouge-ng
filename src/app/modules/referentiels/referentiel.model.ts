import { GroupeCompetence } from "../groupe-competences/groupe-competence.model";

export class Referentiel {
  constructor(
    public libelle: string,
    public description: string,
    public critereAdmissions: string,
    public critereEvaluations: string,
    public groupeCompetences: GroupeCompetence[],
    public programme: any,
    public id?: number,
    public deleted?: boolean
  ) {  }
}
